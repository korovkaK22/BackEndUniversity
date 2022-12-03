const db = require('../DataBaseJoin')

class SchedulesController{

    async createSchedules(req, res){
        const{teacherId, disciplineId, groupId, time, classroom} = req.body;
        const newResult = await db.query('INSERT INTO schedules (teacher_id, discipline_id, group_id, time, classroom) values ($1, $2, $3, $4, $5) RETURNING *',[teacherId, disciplineId, groupId, time, classroom]);
        res.json(newResult.rows[0]);
    }
    async editSchedules(req, res){
        const{id, teacherId, disciplineId, groupId, time, classroom} = req.body;
        const newFaq = await db.query('UPDATE schedules SET teacher_id=$2, discipline_id=$3, group_id=$4 , time=$5 , classroom=$6 WHERE id=$1 RETURNING *',[id, teacherId, disciplineId, groupId, time, classroom]);
        res.json(newFaq.rows[0]);
    }



    async getAllSchedules(req, res){
        const result = await db.query('SELECT * FROM schedules ')
        res.json(result.rows)
    }

    async getOneSchedules(req, res){
        const id = req.params.id;
        const result = await db.query('SELECT * FROM schedules WHERE id = $1', [id])
        res.json(result.rows[0]);
    }

    async deleteSchedules(req, res){
        const id = req.query.id
        const result = await db.query('DELETE FROM schedules WHERE id = $1', [id])
        res.json(result.rows[0]);
    }
}

module.exports = new SchedulesController();


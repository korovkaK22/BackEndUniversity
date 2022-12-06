const db = require('../DataBaseJoin')

class SchedulesController{

    async createSchedules(req, res){
        try {
        const{teacherId, disciplineId, groupId, time, classroom} = req.body;
        await db.query('INSERT INTO schedules (teacher_id, discipline_id, group_id, time, classroom) values ($1, $2, $3, $4, $5) RETURNING *',[teacherId, disciplineId, groupId, time, classroom]);
            res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }

    async editSchedules(req, res){
        try {
        const{id, teacherId, disciplineId, groupId, time, classroom} = req.body;
        await db.query('UPDATE schedules SET teacher_id=$2, discipline_id=$3, group_id=$4 , time=$5 , classroom=$6 WHERE id=$1 RETURNING *',[id, teacherId, disciplineId, groupId, time, classroom]);
        res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }



    async getAllSchedules(req, res){
        try {
        const result = await db.query('SELECT * FROM schedules ORDER BY id ')
        res.json(result.rows)
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async getOneSchedules(req, res){
        try {
        const id = req.params.id;
        const result = await db.query('SELECT * FROM schedules WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async deleteSchedules(req, res){
        try {
        const id = req.query.id
        const result = await db.query('DELETE FROM schedules WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }
}

module.exports = new SchedulesController();


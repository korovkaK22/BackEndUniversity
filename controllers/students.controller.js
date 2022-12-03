const db = require('../DataBaseJoin')

class StudentsController{

    async createStudents(req, res){
        const{groupId, name, email,phone} = req.body;
        const newResult = await db.query('INSERT INTO students (group_id,name,email,phone) values ($1, $2, $3, $4) RETURNING *',[groupId, name, email,phone]);
        res.json(newResult.rows[0]);
    }
    async editStudents(req, res){
        const{id,groupId, name, email,phone} = req.body;
        const newFaq = await db.query('UPDATE students SET group_id=$2, name=$3, email=$4, phone=$5  WHERE id=$1 RETURNING *',[id,groupId, name, email,phone]);
        res.json(newFaq.rows[0]);
    }




    async getAllStudents(req, res){
        const result = await db.query('SELECT * FROM students ')
        res.json(result.rows)
    }

    async getOneStudents(req, res){
        const id = req.params.id;
        const result = await db.query('SELECT * FROM students WHERE id = $1', [id])
        res.json(result.rows[0]);
    }

    async deleteStudents(req, res){
        const id = req.query.id
        const result = await db.query('DELETE FROM students WHERE id = $1', [id])
        res.json(result.rows[0]);
    }
}

module.exports = new StudentsController();


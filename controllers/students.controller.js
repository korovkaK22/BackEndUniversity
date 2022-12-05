const db = require('../DataBaseJoin')

class StudentsController{

    async createStudents(req, res){
        try {
        const{groupId, name, email,phone} = req.body;
        await db.query('INSERT INTO students (group_id,name,email,phone) values ($1, $2, $3, $4) RETURNING *',[groupId, name, email,phone]);
            res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }
    async editStudents(req, res){
        try {
        const{id,groupId, name, email,phone} = req.body;
        const newFaq = await db.query('UPDATE students SET group_id=$2, name=$3, email=$4, phone=$5  WHERE id=$1 RETURNING *',[id,groupId, name, email,phone]);
        res.json(newFaq.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }




    async getAllStudents(req, res){
        try {
        const result = await db.query('SELECT * FROM students ORDER BY id')
        res.json(result.rows)
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async getOneStudents(req, res){
        try {
        const id = req.params.id;
        const result = await db.query('SELECT * FROM students WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async deleteStudents(req, res){
        try {
        const id = req.query.id
        const result = await db.query('DELETE FROM students WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }
}

module.exports = new StudentsController();


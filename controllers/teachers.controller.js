const db = require('../DataBaseJoin')

class TeachersController{

    async createTeachers(req, res){
        try {
        const{name,surname,email,phone} = req.body;
        await db.query('INSERT INTO teachers (name,surname,email,phone) values ($1, $2, $3, $4) RETURNING *',[name,surname,email,phone]);
            res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }

    async editTeachers(req, res){
        try {
        const{id,name,surname,email,phone} = req.body;
        const newFaq = await db.query('UPDATE teachers SET name=$2, surname=$3, email=$4,  phone=$5 WHERE id=$1 RETURNING *',[id,name,surname,email,phone]);
        res.json(newFaq.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }


    async getAllTeachers(req, res){
        try {
        const result = await db.query('SELECT * FROM teachers ORDER BY id ')
        res.json(result.rows)
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async getOneTeachers(req, res){
        try {
        const id = req.params.id;
        const result = await db.query('SELECT * FROM teachers WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async deleteTeachers(req, res){
        try {
        const id = req.query.id
        const result = await db.query('DELETE FROM teachers WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }
}

module.exports = new TeachersController();


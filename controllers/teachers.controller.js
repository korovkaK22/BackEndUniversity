const db = require('../DataBaseJoin')

class TeachersController{

    async createTeachers(req, res){
        const{name,surname,email,phone} = req.body;
        const newResult = await db.query('INSERT INTO teachers (name,surname,email,phone) values ($1, $2, $3, $4) RETURNING *',[name,surname,email,phone]);
        res.json(newResult.rows[0]);
    }

    async editTeachers(req, res){
        const{id,name,surname,email,phone} = req.body;
        const newFaq = await db.query('UPDATE teachers SET name=$2, surname=$3, email=$4,  phone=$5 WHERE id=$1 RETURNING *',[id,name,surname,email,phone]);
        res.json(newFaq.rows[0]);
    }


    async getAllTeachers(req, res){
        const result = await db.query('SELECT * FROM teachers ')
        res.json(result.rows)
    }

    async getOneTeachers(req, res){
        const id = req.params.id;
        const result = await db.query('SELECT * FROM teachers WHERE id = $1', [id])
        res.json(result.rows[0]);
    }

    async deleteTeachers(req, res){
        const id = req.query.id
        const result = await db.query('DELETE FROM teachers WHERE id = $1', [id])
        res.json(result.rows[0]);
    }
}

module.exports = new TeachersController();


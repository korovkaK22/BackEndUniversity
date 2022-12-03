const db = require('../DataBaseJoin')

class DisciplinesController{

    async createDisciplines(req, res){
        const{name} = req.body;
        const newResult = await db.query('INSERT INTO disciplines (name) values ($1) RETURNING *',[name]);
        res.json(newResult.rows[0]);
    }
    async editDisciplines(req, res){
        const{id, name} = req.body;
        const newFaq = await db.query('UPDATE disciplines SET name=$2  WHERE id=$1 RETURNING *',[id, name]);
        res.json(newFaq.rows[0]);
    }




    async getAllDisciplines(req, res){
        const result = await db.query('SELECT * FROM disciplines ')
        res.json(result.rows)
    }

    async getOneDisciplines(req, res){
        const id = req.params.id;
        const result = await db.query('SELECT * FROM disciplines WHERE id = $1', [id])
        res.json(result.rows[0]);
    }

    async deleteDisciplines(req, res){
        const id = req.query.id
        const result = await db.query('DELETE FROM disciplines WHERE id = $1', [id])
        res.json(result.rows[0]);
    }
}

module.exports = new DisciplinesController();


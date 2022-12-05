const db = require('../DataBaseJoin')

class DisciplinesController{

    async createDisciplines(req, res){
        try {
        const{name} = req.body;
        const newResult = await db.query('INSERT INTO disciplines (name) values ($1) RETURNING *',[name]);
        res.json(newResult.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }
    async editDisciplines(req, res){
        try {
        const{id, name} = req.body;
        const newFaq = await db.query('UPDATE disciplines SET name=$2  WHERE id=$1 RETURNING *',[id, name]);
        res.json(newFaq.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }




    async getAllDisciplines(req, res){
        try {
        const result = await db.query('SELECT * FROM disciplines ORDER BY id')
        res.json(result.rows)
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async getOneDisciplines(req, res){
        try {
        const id = req.params.id;
        const result = await db.query('SELECT * FROM disciplines WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async deleteDisciplines(req, res){
        try {
        const id = req.query.id
        const result = await db.query('DELETE FROM disciplines WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }
}

module.exports = new DisciplinesController();


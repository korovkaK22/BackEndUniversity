const db = require('../DataBaseJoin')

class rtmentsController{

    async createDepartments(req, res){
        const{id,facultyId,name,shortName} = req.body;
        const newResult = await db.query('INSERT INTO departments (id,facultyId,name,shortName) values ($1, $2) RETURNING *',[id,facultyId,name,shortName]);
        res.json(newResult.rows[0]);
    }



    async getAllDepartments(req, res){
        const result = await db.query('SELECT * FROM departments ')
        res.json(result.rows)
    }

    async getOneDepartments(req, res){
        const id = req.params.id;
        const result = await db.query('SELECT * FROM departments WHERE id = $1', [id])
        res.json(result.rows[0]);
    }

    async deleteDepartments(req, res){
        const id = req.query.id
        const result = await db.query('DELETE FROM departments WHERE id = $1', [id])
        res.json(result.rows[0]);
    }
}

module.exports = new rtmentsController();
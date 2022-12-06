const db = require('../DataBaseJoin')

class DepartmentsController{

    async createDepartments(req, res){
        try {
        const{facultyId, name, shortName} = req.body;
        await db.query('INSERT INTO departments (faculty_id,name,short_name) values ($1, $2, $3) RETURNING *',[facultyId,name,shortName]);
            res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }

    async editDepartments(req, res){
        try {
        const{id,facultyId, name, shortName} = req.body;
        await db.query('UPDATE departments SET faculty_id=$2, name=$3, short_name=$4  WHERE id=$1 RETURNING *',[id,facultyId, name, shortName]);
        res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }




    async getAllDepartments(req, res){
        try {
        const result = await db.query('SELECT * FROM departments ORDER BY id')
        res.json(result.rows)
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async getOneDepartments(req, res){
        try {
        const id = req.params.id;
        const result = await db.query('SELECT * FROM departments WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async deleteDepartments(req, res){
        try {
        const id = req.query.id
        const result = await db.query('DELETE FROM departments WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }
}

module.exports = new DepartmentsController();


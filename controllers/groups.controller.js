const db = require('../DataBaseJoin')

class GroupsController{

    async createGroups(req, res){
        try {
        const{departmentId, name, course} = req.body;
        await db.query('INSERT INTO groups (department_id,name,course) values ($1, $2, $3) RETURNING *',[departmentId, name, course]);
            res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }
    async editGroups(req, res){
        try {
        const{id,departmentId, name, course} = req.body;
        await db.query('UPDATE groups SET department_id=$2, name=$3, course=$4  WHERE id=$1 RETURNING *',[id,departmentId, name, course]);
        res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }




    async getAllGroups(req, res){
        try {
        const result = await db.query('SELECT * FROM groups ORDER BY id')
        res.json(result.rows)
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async getOneGroups(req, res){
        try {
        const id = req.params.id;
        const result = await db.query('SELECT * FROM groups WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async deleteGroups(req, res){
        try {
        const id = req.query.id
        const result = await db.query('DELETE FROM groups WHERE id = $1', [id])
        res.json(result.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }
}

module.exports = new GroupsController();


const db = require('../DataBaseJoin')

class GroupsController{

    async createGroups(req, res){
        const{departmentId, name, course} = req.body;
        const newResult = await db.query('INSERT INTO groups (department_id,name,course) values ($1, $2, $3) RETURNING *',[departmentId, name, course]);
        res.json(newResult.rows[0]);
    }
    async editGroups(req, res){
        const{id,departmentId, name, course} = req.body;
        const newFaq = await db.query('UPDATE groups SET department_id=$2, name=$3, course=$4  WHERE id=$1 RETURNING *',[id,departmentId, name, course]);
        res.json(newFaq.rows[0]);
    }




    async getAllGroups(req, res){
        const result = await db.query('SELECT * FROM groups ')
        res.json(result.rows)
    }

    async getOneGroups(req, res){
        const id = req.params.id;
        const result = await db.query('SELECT * FROM groups WHERE id = $1', [id])
        res.json(result.rows[0]);
    }

    async deleteGroups(req, res){
        const id = req.query.id
        const result = await db.query('DELETE FROM groups WHERE id = $1', [id])
        res.json(result.rows[0]);
    }
}

module.exports = new GroupsController();


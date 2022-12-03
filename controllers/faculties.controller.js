const db = require('../DataBaseJoin')


class FacultiesController{

    async getAllFaculties(req, res){
        const faculties = await db.query('SELECT * FROM faculties ')
        res.json(faculties.rows)
    }

    async getOneFaculties(req, res){
        const id = req.params.id;
        const faculties = await db.query('SELECT * FROM faculties WHERE id = $1', [id])
        res.json(faculties.rows[0]);
    }

    async createFaculties(req, res){
        const{name,shortName} = req.body;
        const newFaculties = await db.query('INSERT INTO faculties (name,short_name) values ($1, $2) RETURNING *',[name,shortName]);
        res.json(newFaculties.rows[0]);
    }

    async deleteFaculties(req, res){
        const id = req.query.id
        const faculties = await db.query('DELETE FROM faculties WHERE id = $1', [id])
        res.json(faculties.rows[0]);
    }

    async editFaculties(req, res){
        const{id,name,shortName} = req.body;
        const newFac = await db.query('UPDATE faculties SET name=$2, short_name=$3  WHERE id=$1 RETURNING *',[id,name,shortName]);
        res.json(newFac.rows[0]);
    }

}

module.exports = new FacultiesController();
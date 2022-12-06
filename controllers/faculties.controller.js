const db = require('../DataBaseJoin')


class FacultiesController{

    async getAllFaculties(req, res){
        try {
        const faculties = await db.query('SELECT * FROM faculties ORDER BY id')
        res.json(faculties.rows)
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async getOneFaculties(req, res){
        try {
        const id = req.params.id;
        const faculties = await db.query('SELECT * FROM faculties WHERE id = $1', [id])
        res.json(faculties.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async createFaculties(req, res){
        try {
        const{name,shortName} = req.body;
        await db.query('INSERT INTO faculties (name,short_name) values ($1, $2) RETURNING *',[name,shortName]);
            res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }

    async deleteFaculties(req, res){
        try {
        const id = req.query.id
        const faculties = await db.query('DELETE FROM faculties WHERE id = $1', [id])
        res.json(faculties.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }

    async editFaculties(req, res){
        try {
        const{id,name,shortName} = req.body;
        await db.query('UPDATE faculties SET name=$2, short_name=$3  WHERE id=$1 RETURNING *',[id,name,shortName]);
        res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }

}

module.exports = new FacultiesController();
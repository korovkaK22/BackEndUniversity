const db = require('../DataBaseJoin')


class FaqController{

    async getAllFaq(req, res){
        try {
        const faq = await db.query('SELECT * FROM faq ORDER BY id')
        res.json(faq.rows)
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async getOneFaq(req, res){
        try {
        const id = req.params.id;
        const faq = await db.query('SELECT * FROM faq WHERE id = $1', [id])
        res.json(faq.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }

    async createFaq(req, res){
        try {
        const{question,answer} = req.body;
        await db.query('INSERT INTO faq (question,answer) values ($1, $2) RETURNING *',[question,answer]);
            res.json();
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }

    async deleteFaq(req, res){
        try {
        const id = req.query.id
        const faq = await db.query('DELETE FROM faq WHERE id = $1', [id])
        res.json(faq.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json(error.message);}
    }

    async editFaq(req, res){
        try {
        const{id,question,answer} = req.body;
        const newFaq = await db.query('UPDATE faq SET question=$2, answer=$3  WHERE id=$1 RETURNING *',[id,question,answer]);
        res.json(newFaq.rows[0]);
        }catch (error) {
            console.error(error.message);
            res.json();}
    }
}

module.exports = new FaqController();
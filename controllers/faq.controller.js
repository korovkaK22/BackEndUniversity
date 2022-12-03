const db = require('../DataBaseJoin')


class FaqController{

    async getAllFaq(req, res){
        const faq = await db.query('SELECT * FROM faq ')
        res.json(faq.rows)
    }

    async getOneFaq(req, res){
        const id = req.params.id;
        const faq = await db.query('SELECT * FROM faq WHERE id = $1', [id])
        res.json(faq.rows[0]);
    }

    async createFaq(req, res){
        const{question,answer} = req.body;
        const newFaq = await db.query('INSERT INTO faq (question,answer) values ($1, $2) RETURNING *',[question,answer]);
        res.json(newFaq.rows[0]);
    }

    async deleteFaq(req, res){
        const id = req.query.id
        const faq = await db.query('DELETE FROM faq WHERE id = $1', [id])
        res.json(faq.rows[0]);
    }
}

module.exports = new FaqController();
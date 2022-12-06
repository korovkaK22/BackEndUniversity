const db = require('../DataBaseJoin')

class OtherController {

    async checkConnection(req, res) {
             let result = 'connection is okay';
            res.json(result);
    }

}
 module.exports = new OtherController();
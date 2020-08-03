const connection = require('../Database/Connection')

module.exports = {

    async login(req, res) {

        let response = {
            success: false,
            data: [],
            error: []
        }

        const { username, password } = req.body;

        const [data] = await connection.query(`
            SELECT username, email FROM users WHERE username='${username}' AND password='${password}' ORDER BY id DESC
        `);
        console.log(data)
        if(!!data.length)
            response.success = true;

        return res.json(response);
    }

}
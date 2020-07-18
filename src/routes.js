const router = require('express').Router()

router.get('/', (req, res) => {
    return res.json({
        success: true,
        data: 'Dados obtidos com sucesso'
    });
})

module.exports = router;

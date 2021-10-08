const controller = require('../controllers/pirate.controllers')

module.exports = app => {
    // C
    
    app.post('/api/pirates', controller.createPirate)
    app.get('/api/pirates', controller.getAllPirates)
    app.get('/api/pirates/:id', controller.onePirate)
// U
    // D
    app.delete('/api/pirates/:id', controller.deletePirate)
}
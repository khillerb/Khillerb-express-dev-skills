var express = require('express');
var router = express.Router();

/* GET users listing. */
const devskillsCtrl = require('../controllers/devskills');

router.get('/', devskillsCtrl.index);
router.get('/new', devskillsCtrl.new);
router.get('/:id', devskillsCtrl.show);

// POST /todos
router.post('/', devskillsCtrl.create);
// DELETE /todos/:id
router.delete('/:id', devskillsCtrl.delete);
// GET /todos/:id/edit
router.get('/:id/edit', devskillsCtrl.edit);
// PUT /todos/:id
router.put('/:id', devskillsCtrl.update);






module.exports = router;

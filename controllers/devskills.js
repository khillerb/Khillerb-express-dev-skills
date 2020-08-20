const Devskill = require('../models/devskill')



function index(req,res) {
    res.render('devskills/index', {
        devskills: Devskill.getAll()
    });

}
function show(req,res) {
    console.log('--Req.Param :  ',req.params)
    res.render('devskills/show', {
        skill: Devskill.getOne(req.params.id),
    });
}
function newSkill(req, res){
    res.render('devskills/new');
}
function create(req,res) {
    Devskill.create(req.body);
    res.redirect('/devskills')
}
function deleteSkill(req,res) {
    const skill = Devskill.deleteOne(req.params.id);
    res.redirect('/devskills')
}
function update(req, res) {
    Devskill.update(req.params.id, req.body);
    res.redirect(`/devskills/${req.params.id}`);
}
function edit (req,res) {
    const skill = Devskill.getOne(req.params.id);
    res.render('devskills/edit', { skill });
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};
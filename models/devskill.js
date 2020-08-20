const devskills = [
    {id:1, skill: 'HTML', level: 'Intermediate'},
    {id:2, skill: 'CSS', level: 'Intermediate'},
    {id:3, skill: 'JavaScript', level: 'Intermediate'},
    {id:4, skill: 'Python', level: 'Advanced'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function getAll() {
    return devskills;
}
function getOne(id) {
    return devskills.find(skill => skill.id === parseInt(id));
}
function update(id, updatedSkill) {
    const skill = devskills.find(t => t.id === parseInt(id));
    // Object.assign(targetObj, mergeObj1, mergeObj2, etc.)
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(skillId) {
    // Find the index of the todo object
    // based upon its id
    const idx = devskills.findIndex(skill => skill.id === parseInt(skillId));
    devskills.splice(idx, 1);
  }
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 10000000;
    skill.level = 'Beginner';
    devskills.push(skill);
  }

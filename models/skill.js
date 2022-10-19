const skills = [
    {id: 122056, skill: 'HTML', acquire: true},
    {id: 121782, skill: 'CSS', acquire: true},
    {id: 135178, skill: 'JavaScript', acquire: true},
    {id: 130593, skill: 'Node.js', acquire: true},
    {id: 142320, skill: 'Express', acquire: false},
    {id: 148927, skill: 'mongoDB', acquire: false},
    {id: 168234, skill: 'Python', acquire: false},
    {id: 154982, skill: 'Django', acquire: false},
    {id: 157368, skill: 'PostgreSQL', acquire: false},
    {id: 184629, skill: 'React', acquire: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.acquire = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
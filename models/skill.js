const skills = [
    {id: 122056, skill: 'HTML', acquire: true},
    {id: 121782, skill: 'CSS', acquire: true},
    {id: 135178, skill: 'JavaScript', acquire: true},
    {id: 130593, skill: 'Python', acquire: false}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
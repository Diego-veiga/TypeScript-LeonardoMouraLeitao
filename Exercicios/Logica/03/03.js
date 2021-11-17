function PossuiHabilidades(skill) {
    var possui = skill.find(function (e) { return e === 'Javascript'; });
    if (!possui) {
        return false;
    }
    else {
        return true;
    }
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(PossuiHabilidades(skills));

function PossuiHabilidades(skill: string[]): boolean {
    const possui = skill.find(e => e === 'Javascript')

    if (!possui) {
        return false
    } else {
        return true
    }
}

let skills = ["Javascript", "ReactJS", "React Native"];

console.log(PossuiHabilidades(skills))
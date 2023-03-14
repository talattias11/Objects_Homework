//1
function nameExtract(users) {
    var {title , first , last} = users[0].name;
    var nameOfUser = `${title} ${first} ${last}`;
    return nameOfUser;
}

//2
function ageExtract(users) {
    var {age} = users[0].dob;
    var ageOfUser = `${age}`
    return ageOfUser;
}

//3
function infoFromObject(users , wantedInfoObject = {}) {
    wantedInfoObject = { Name: nameExtract(users) , Age:  ageExtract(users)}
    return wantedInfoObject;
}

//4
function nameAndage(users , objectofNamenAge = {}) {
    for (var index = 0; index < users.length; index++) {
        objectofNamenAge[index] = infoFromObject(users);
    }
    return objectofNamenAge;
}

//5 Bonus
function sortByAge(users) {
    for (let i = 0; i < users.length; i++) {
        users[i].dob.age.sort();
    }
}
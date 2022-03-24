const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];
function findJose(){
    let user = users.find(u => u.firstName === "Jose")
    console.log(user)
    return user
}
function premiumMembers(){
    let arr = users.filter( u=> u.isPremiumMember)
    console.log(arr)
    return arr 
}
function lastName(){
    let arr = users.map(u => u.lastName)
    console.log(arr)
    return arr
}
function loginsMoreThanTen(){
    let arr = users.filter(u => u.logins>10).map(u => u.firstName + " " + u.lastName)
    console.log(arr)
    return arr 
}

let total = 0; 
function totalLogins(){
    let n = users.map(u => total += u.logins)
    console.log(total)
    return n
}
findJose(); 
premiumMembers()
lastName()
loginsMoreThanTen()
totalLogins()
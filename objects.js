const bouncer = (age) => {
    if (age >= 21) {
        console.log('Drink (at the bar)')
        //do the thing
    } else {
        console.log('SHAME')
        //do the other thing}
    }
}

bouncer(12);
bouncer(93);

const me = 'Martin'
console.log(me.length)

//Objects

const myPerson = {
    name: 'John',
    age: '41'
}

console.log(myPerson.name)

//Challenge

const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'vip'
    } else {
        employee.status = 'peasant'
    }
    console.log(`${employee.name} is a total ${employee.status}`)
    return employee;
}

const person = {
    name: 'Michael',
    status: ''
}


findAndLogEmployeeStatus(person)
findAndLogEmployeeStatus({
    name: 'lester',
    status: ''
})

findAndLogEmployeeStatus({
    name: 'carl clark',
    status: ''
})

findAndLogEmployeeStatus({
    name: prompt('Enter employee name'),
    status:''
})

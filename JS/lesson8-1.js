const students = [
   { name: 'Павел', age: 20 },
   { name: 'Иван', age: 20 },
   { name: 'Эдем', age: 20 },
   { name: 'Денис', age: 20 },
   { name: 'Виктория', age: 20 },
   { age: 40 },
]

const result = pickPropArray(students, 'name')

console.log(result) 
// [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]

function pickPropArray(arr, prop) {
    const result = []
    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            result.push(obj[prop])
        }
    }
    return result
}
/*
// ITERATOR
function randomNum (numMin, numMax, cant) {
     let index = 0
    console.log('cuantas veces entro??')

    return {
        next: function () {
            return index < cant
                ? { value: {
                    orden: index++,
                    number: Math.random() * (numMax - numMin) + numMin,
                    date: new Date()
                    },
                done: false
            } : { done: true }
        }
    }
}

let x = randomNum(1, 10, 2)

console.log(x.next())
console.log(x.next())
console.log(x.next())
*/









// GENERATOR

function* randomNum(numMin, numMax, cant) {
    let index = 0

    while ( index < cant ) {
        yield {
            orden: index++,
            num: Math.random() * (numMax - numMin) + numMin,
            date: new Date()
        }
    }
}

const x = randomNum(1, 10, 2)
console.log(x.next().value)
console.log(x.next())
console.log(x.next())





















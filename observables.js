const { from } = require('rxjs')
const { map } = require('rxjs/operators')

const autores = [
    {
        id: 1,
        nombre: 'Julio Cortazar'
    },
    {
        id: 2,
        nombre: 'Jorge Luis Borges'
    }
]

const libros = from([
    {
        id: 1,
        autorId: 1,
        titulo: 'Rayuela',
        precio: 100
    },
    {
        id: 2,
        autorId: 1,
        titulo: 'Casa tomada',
        precio: 150
    },
    {
        id: 3,
        autorId: 2,
        titulo: 'Funes el memorioso',
        precio: 120
    }
])

const titulos = libros.pipe(
    map(libro => libro.titulo)
)

titulos.subscribe( data => console.log(data))

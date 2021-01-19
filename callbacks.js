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

const libros = [
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
]





const getLibro = (id, callback) => {
    const libro = libros.find( el => el.id === id);
    if (!libro) {
        callback(`No existe`);
    } else {
        callback(null, libro)
    }

}

const getAutorLibro = (libro, callback) => {
    const autor = autores.find( el => el.id === libro.autorId )
    if (!autor) {
        callback('No hay autor')
    } else {
        callback(null, {
            libroId: libro.id,
            titulo: libro.titulo,
            autor: autor.nombre
        })
    }
}



getLibro( 2, (err, libro) => {

    if (err) {
        return console.log(err);
    }

    getAutorLibro( libro, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(resp)
    })

})






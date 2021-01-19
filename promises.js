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

const getLibro = (id) => {
    return new Promise( (resolve, reject) => {
        const libro = libros.find( el => el.id === id);
        if (!libro) {
            reject(`No existe un libro para el autorId: ${id}`);
        } else {
            resolve(libro);
        }
    })
}

const getAutorLibro = (libro) => {
    return new Promise( (resolve, reject) => {
        const autor = autores.find( el => el.id === libro.autorId )
        if (!autor) {
            reject(`no se encuentra un autor para el libro: ${libro.id}`);
        } else {
            resolve({
                libroId: libro.id,
                titulo: libro.titulo,
                autor: autor.nombre
            })
        }
    })
}


getLibro(2)
    .then( libro => getAutorLibro(libro))
    .then( resp => console.log(resp))
    .catch( console.log )


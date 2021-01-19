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

const getLibro = async (id) => {
    const libro = libros.find( el => el.id === id);
    if (!libro) {
        throw new Error(`No existe un libro para el autorId: ${id}`);
    } else {
        return libro;
    }
}

const getAutorLibro = async (libro) => {
    const autor = autores.find( el => el.id === libro.autorId )
    if (!autor) {
        throw new Error(`no se encuentra un autor para el libro: ${libro.id}`);
    } else {
        return {
            libroId: libro.id,
            titulo: libro.titulo,
            autor: autor.nombre
        }
    }
}

const getLibroInfo = async (libroId) => {
    try {
        const libro = await getLibro(libroId);
        const resp = await getAutorLibro(libro)
        console.log(resp)
    } catch (err) {
        console.log(err)
    }

}


getLibroInfo(2)

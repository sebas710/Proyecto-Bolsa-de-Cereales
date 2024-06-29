const { createApp } = Vue
createApp({
    data() {
        return {
            productos: [],
            url: 'https://mgerbaldo.pythonanywhere.com/productos',
            error: false,
            cargando: false,
            /*alta*/
            id: 0,
            nombre: "",
            imagen: "",
            stock: 0,
            puntaje: 0,
            activo: true,
            descripcion: "",
        }
    },
    methods: {
        fetchData(url) {
             fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    // esto es para boton modificar
                    this.id = data.id
                    this.nombre = data.nombre;
                    this.imagen = data.imagen
                    this.stock = data.stock
                    this.puntaje = data.puntaje
                    this.activo = data.activo
                    this.descripcion = data.descripcion
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(id) {
            const url = this.url + '/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
            let producto = {
                    nombre : this.nombre,
                    imagen : this.imagen,
                    stock : this.stock,
                    puntaje : this.puntaje,
                    activo : this.activo,
                    descripcion : this.descripcion
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Producto agregado")
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al cargar producto")
                })
        },
        modificar() {
            let producto = {
                nombre : this.nombre,
                    imagen : this.imagen,
                    stock : this.stock,
                    puntaje : this.puntaje,
                    activo : this.activo,
                    descripcion : this.descripcion
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url + "/" + location.search.substr(4), options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        },

    },
    created() {
        if (location.search.substr(4) === "") // si no viene de la modificacion
            url = this.url
        else
            url = this.url + "/" + location.search.substr(4)  // para la modificacion
        // si viene de la modificacion le agrego "/<id>" del producto

        this.fetchData(url)
    },
}).mount('#app')



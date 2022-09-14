# BACK END - Entregable n° 4

###  Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:

    o   GET '/api/productos' -> devuelve todos los productos.
    o   GET '/api/productos/:id' -> devuelve un producto según su id.
    o   POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
    o   PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
    o   DELETE '/api/productos/:id' -> elimina un producto según su id.


###  Logica y representacion de las vistas:

    o   Cada producto estará representado por un objeto con el siguiente formato: title, price, thumbail.
    o   Cada ítem dispondrá de un id numérico proporcionado por el backend (autoincremental). Ese id será utilizado para identificar un producto que va a ser listado en forma individual.
    o   Para el caso de que un producto no exista, se devolverá el objeto: { error : 'producto no encontrado' }
    o   Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.
    o   Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.

### El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo. Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.. 




 



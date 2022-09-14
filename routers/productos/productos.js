const Producto = require('../../claseProducto.js');
const {Router} = require('express'); 
const router = Router(); 

router.get('/', (req, res) => {
    let lista = Producto.productos
    if(!lista.length){
        res.status(400).json({success: false, msg: 'No existen productos, cree uno para continuar con el sistema' });
    }else{
        res.status(200).json({success: true, productos: lista });
    }
});

router.get('/:id', (req, res) => {
    let id = req.params.id;  
    let producto = Producto.productos.find(producto => producto.id === Number(id));
    if (producto) {
        res.status(200).json({success: true, producto});
    } else {
        res.status(400).json({ error: `El ID ingresado (${id}) no existe en la lista de productos`});
    }
});

router.post('/', (req, res) => {
    let { title, price, thumbnail } = req.body;
    if ( !title || !price || !thumbnail) {
        return res.status(400).json({ error: `Revise el formato del producto `});
    }
    const nuevoProducto = { title, price, thumbnail };
    nuevoProducto.id = Producto.productos.length + 1;
    Producto.productos.push(nuevoProducto);
        res.status(201).json(nuevoProducto);
    });

router.put('/:id', (req, res) => {
    let { title, price, thumbnail } = req.body;
    let id = req.params.id;  
    let index = Producto.productos.findIndex(producto => producto.id === Number(id));
     if (index >= 0) {
        Producto.productos[index] = { title, price, thumbnail };
        Producto.productos[index].id = Number(id);
        res.status(200).json(Producto.productos[index]);
    }else{
        res.status(400).json({ error: `El ID ingresado (${id}) no existe en la lista de productos`});
    }
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;  
    let index = Producto.productos.findIndex(producto => producto.id === Number(id));
    if (index >= 0) {
        Producto.productos.splice(index, 1);
        res.status(200).json({success: true, message: `Producto con ID (${id}) eliminado de la lista`});
    } else {
        res.status(400).json({ error: `El ID ingresado (${id}) no existe en la lista de productos`});
    }
})
module.exports = router;
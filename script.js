class Producto{
    constructor( nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("<------------->");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }

    get_stock(){

        if( this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }


    venta_stock( cantidad ){

        if( this.stock >= cantidad ){
            this.stock = this.stock - cantidad;
            return true
        }
        else{
            return false
        }

    }

}


// ALTA DE PRODUCTOS //

let lista_productos = [];


lista_productos.push( new Producto("Empanadas" , 1700 , 72));
lista_productos.push( new Producto("Pizza" , 1500 , 25));
lista_productos.push( new Producto("Sandwich" , 1200 , 20));
lista_productos.push( new Producto("Hamburgusa" , 700 , 30));


// RENDER DE PRODUCTOS //

console.log("Lista de productos");

for( let producto of lista_productos){

    producto.get_datos();
}

// COMPRA DE USUARIO //

function buscar_producto( producto ){

    return producto.nombre == compra_usuario
}


let compra_usuario = prompt("Ingrese la comida que quiere comprar");

let resultado_busqueda = lista_productos.find( buscar_producto );


if( resultado_busqueda != undefined ){

    if( resultado_busqueda.get_stock()){

        let unidades = prompt("¿Cuantas unidades queres?");
        if( resultado_busqueda.venta_stock( unidades )){
            console.log(`Gracias por comprar ${unidades} unidades de ${resultado_busqueda.nombre}`);
        }
        else{
            console.log("No se puede realizar la compra");
            console.log("Stock disponible: ", resultado_busqueda.stock );        
        }
    }
    else{
        console.log("No tenemos stock de: ", resultado_busqueda.nombre);
    }

    resultado_busqueda.get_datos();
}
else{
    console.log("No se encontro el producto: ", compra_usuario);
}
const { POINT_CONVERSION_COMPRESSED } = require('constants');
const fs = require('fs');

class Product {
    constructor (title, price, thumbnail){
        this.title = title, 
        this.price = price,
        this.thumbnail = thumbnail;
    }

    setId(id){
        this.id = id;
    }
}

class Archivo {
    constructor (name){
        this.name = name;
    }

    async leer(){
        let emptyArray = [];

        try {
            return (await fs.promises.readFile(this.name, 'utf-8')).split('\n');
            
        } catch (err) {
            console.log('Error de lectura. ', err);
            return emptyArray;
        }
    }

    async guardar(producto){
        try {
            const data = await this.leer();
            
            let arrayLength = data.length;

            producto.setId(arrayLength + 1);
            
            await fs.promises.appendFile(this.name, `${JSON.stringify(producto)}\n`);

        } catch (err) {
            console.log('No se pudo escribir el archivo.', err);
        }
    }

    async borrar(){
        try {
            await fs.promises.unlink(this.name);
            console.log('Archivo borrado con exito.');
        } catch (err) {
            console.log('No se pudo borrar el archivo. ', err);
        }
    }
}

let product1 = new Product('Computadora Lenovo Thinkpad', 250000, 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t15p-15-subseries-hero.png?context=bWFzdGVyfHJvb3R8NTk5MTh8aW1hZ2UvcG5nfGg3ZS9oNWEvMTA5NTg3MjM5NzMxNTAucG5nfDY3YmMxMjg4NDI2NWFkZDE4ZjhlOWZhMWZlZGEzNzUwNTAxODlhZjVlMTZiOTMxNTdkNmYwNjdhYjY0ZjBlMmYhttps://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-race-xtg-crew-sweatshirt-by-puma-black_ss4_p-12026947+u-sqzmkaobwp12wwvib45r+v-5a52b5a373364999b4d9c0dea5802cb6.jpg?_hv=1&w=900');
let product2 = new Product('Silla', 15000, 'https://www.perozzi.com.ar/16720-large_default/silla-gamer-mcb588bk.jpg');
let product3 = new Product('Teclado', 3448, 'https://tecladoschulos.com/wp-content/uploads/Teclado-dividido-en-dos-partes.jpg');

let productFile = new Archivo('producto.txt');

async function leerArchivo(){
    console.log(await productFile.leer());
}

async function guardarArchivo(product){
    const data = await productFile.guardar(product);
    console.log(data);
}

async function borrarArchivo(){
    console.log(await productFile.borrar());
}

guardarArchivo(product1);

export default class Resta{
    private a:number;
    private b:number;

    constructor (a:number, b:number){
        this.a = a;
        this.b = b;
    }

    resultado = () => {
        return this.a - this.b;
    }
}
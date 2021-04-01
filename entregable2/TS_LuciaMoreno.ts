function operacion (a: number, b:number, op : string) {
    return new Promise((resolv, reject)=> {
        switch(op){
            case 'suma':
                import('./suma').then(e => { 
                    const Suma = e.default;
                    const s = new Suma(a, b); 
                    resolv(s.resultado()); 
                })
            break;
            
            case 'resta':
                import('./resta').then(e => { 
                    const Resta = e.default;
                    const r = new Resta(a, b); 
                    resolv(r.resultado());
                })
            break;
        }
    })
}

async function operaciones() {
    const suma = await operacion(10, 5, 'suma');
    const resta = await operacion(30, 15, 'resta');

    console.log(`El resultado de: 10 + 5 = ${suma}`);
    console.log(`El resultado de: 30 - 15 = ${resta}`);
}

operaciones();
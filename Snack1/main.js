//creo array di biciclette
const biciclette = [

    {
        'nome' : 'Tarmac ',
        'peso' : 6.8
    },
    {
        'nome' : 'Wilier',
        'peso' : 6.2
    },
    {
        'nome' : 'Argon 18',
        'peso' : 7.5
    },
    {
        'nome' : 'Bianchi',
        'peso' : 8.0
    },
    {
        'nome' : 'BMX',
        'peso' : 10.8
    },

];



console.log(pesoMinore(biciclette));




// creo una funzione che stabilisca il peso minore
function pesoMinore(valore){

    let {peso} = biciclette[0];

    for(let i=0; i<biciclette.length; i++){

        if(peso > biciclette[i].peso){
            peso = biciclette[i].peso;
        }
    }   
     return `peso bicicletta minore: ${peso} kg`;
}




const team = [

    {
        'nome' : 'roma',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'lazio',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'milan',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'inter',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'juve',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },

];
 

    const nomeFalli =[];

     for(let i=0; i<team.length; i++){
        team[i].puntiFatti = getRandomNumber(0,3);
        team[i].falliSubiti = getRandomNumber(0,50);
        console.log(team[i]);

    }


    for(let j=0; j<team.length; j++){
        let {nome, falliSubiti} = team[j];
        nomeFalli.push({nome, falliSubiti});
        console.log(nomeFalli[j]);
    }


    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



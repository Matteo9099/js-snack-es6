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



    

     for(let i=0; i<team.length; i++){
        team[i].puntiFatti = getRandomNumber(1,90);
        team[i].falliSubiti = getRandomNumber(250,500);
        console.log(team[i]);
     }


    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
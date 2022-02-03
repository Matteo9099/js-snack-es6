const team = [

    {
        'nome' : 'roma',
        'puntFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'lazio',
        'puntFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'milan',
        'puntFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'inter',
        'puntFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'juve',
        'puntFatti' : 0,
        'falliSubiti' : 0
    },

];


    const{puntFatti=[getRandomNumber(1,90)], falliSubiti=[getRandomNumber(1,90)]} = team;

    console.log("punti fatti: "+puntFatti+ " falli subiti: "+falliSubiti)
    

    for(let i=0; i<team.length; i++){
        console.log(team[i]);
    }



    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
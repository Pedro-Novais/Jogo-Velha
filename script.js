
let playContainer = document.querySelector('#container-play')
let rowOne = document.querySelector('#row-1')
let rowTwo = document.querySelector('#row-2')
let rowTrhee = document.querySelector('#row-3')

let rows = [
    document.querySelector('#row-1'),
    document.querySelector('#row-2'),
    document.querySelector('#row-3')
]

//Criação das linhas e colunas

let divOne= [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div')
] 
let divTwo = [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div')
] 
let divThree = [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div')
] 
        stylePlay();
        function stylePlay(){
            const color= '#5A90BF'
            const colorTwo= '#5A90BF'
            const colorThree = '#94E9F2'

            playContainer.style.width='25%';
            playContainer.style.height='60%';
            playContainer.style.borderRadius="15px";
            playContainer.style.backgroundImage=`linear-gradient(to right, ${color}, ${colorTwo}, ${colorThree})`;
            playContainer.style.boxShadow="0 0.5rem 2rem black"

                for(let i = 0;i<divOne.length;i++){
                    if(i==0){
                        for(let i = 0; i < divOne.length;i++){
                            rows[0].appendChild(divOne[i]);
                            //divOne[i].style.backgroundColor=color;
                            divOne[i].style.width='30%';
                            divOne[i].style.height='90%';
                            divOne[i].style.margin='0.25rem';
                        }
                    } if(i==1){
                        for(let i = 0; i < divTwo.length;i++){
                            rows[1].appendChild(divTwo[i]);
                            //divTwo[i].style.backgroundColor=color;
                            divTwo[i].style.width='30%';
                            divTwo[i].style.height='90%';
                            divTwo[i].style.margin='0.25rem';
                        }
                    }if(i==2){
                        for(let i = 0; i < divThree.length;i++){
                            rows[2].appendChild(divThree[i]);
                            //divThree[i].style.backgroundColor=color;
                            divThree[i].style.width='30%';
                            divThree[i].style.height='90%';
                            divThree[i].style.margin='0.25rem';
                        }
                    }
                }
        }

        let players = [];
       
        let time = 0;
        let stopping = 0;

       for(let i=0; i < divOne.length;i++){
        divOne[i].onclick = function(){
            if(stopping != 1){
                if(divOne[i].value != 1 && divOne[i].value != 2){
                    if(time == 0){
                        let one = document.createTextNode('X');
                        let p = document.createElement('div');
                        p.appendChild(one)

                        p.style.margin="auto 0";

                        players.push(p);
                        divOne[i].appendChild(players[0]);
                        time=1;
                        divOne[i].value=1;
                        players.pop();
                        
                        win();
                        draw();
                        reset();
                    }else{
                        let two = document.createTextNode('O');
                        players.push(two)
                        divOne[i].appendChild(players[0]);
                        time=0;
                        divOne[i].value=2;
                        players.pop();
                        
                        win();
                        draw();
                        reset();
                    }
                }
            }
        }
        
        divTwo[i].onclick = function(){
            if(stopping != 1){
                if(divTwo[i].value != 1 && divTwo[i].value != 2){
                    if(time == 0){
                        let one = document.createTextNode('X');
                        players.push(one)
                        divTwo[i].appendChild(players[0]);
                        time=1;
                        divTwo[i].value = 1;
                        players.pop();
                        
                        win();
                        draw();
                        reset();
                    }else{
                        let two = document.createTextNode('O');
                        players.push(two)
                        divTwo[i].appendChild(players[0]);
                        time=0;
                        divTwo[i].value = 2;
                        players.pop();
                        
                        win();
                        draw();
                        reset();
                    }
                }
            }
        }
        divThree[i].onclick = function(){
            if(stopping != 1){
                if(divThree[i].value != 1 && divThree[i].value != 2){
                    if(time == 0){
                        let one = document.createTextNode('X');
                        players.push(one)
                        divThree[i].appendChild(players[0]);
                        time=1;
                        divThree[i].value = 1;
                        players.pop();
                        
                        win();
                        draw();
                        reset();
                    }else{
                        let two = document.createTextNode('O');
                        players.push(two)
                        divThree[i].appendChild(players[0]);
                        time=0;
                        divThree[i].value = 2;
                        players.pop();
                        
                        win();
                        draw();
                        reset();
                    }
                }
            }
        }
    }

    function win(){
        let ver = 1;
        for(let i = 1; i<divOne.length+1;i++){
            //Linhas horizontais
            if(divOne[0].value == i && divOne[1].value == i && divOne[2].value == i){
                Message(i,ver);
                stopping = 1;
                return stopping;
            }else if(divTwo[0].value == i && divTwo[1].value == i && divTwo[2].value == i){
               Message(i,ver);
               stopping = 1;
               return stopping;
            }else if(divThree[0].value == i && divThree[1].value == i && divThree[2].value == i){
                Message(i,ver);
                stopping = 1;
                return stopping;
            }
            //Linhas Verticais
            else if(divOne[0].value == i && divTwo[0].value == i && divThree[0].value == i){
                Message(i,ver);
                stopping = 1;
                return stopping;
        
            }else if(divOne[1].value == i && divTwo[1].value == i && divThree[1].value == i){
                Message(i,ver);
                stopping = 1;
                return stopping;
    
            }else if(divOne[2].value == i && divTwo[2].value == i && divThree[2].value == i){
                Message(i,ver);
                stopping = 1;
                return stopping;
            }
            //Linhas Diagonais
            else if(divOne[0].value == i && divTwo[1].value == i && divThree[2].value == i){
                Message(i,ver);
                stopping = 1;
                return stopping;
            }
            else if(divOne[2].value == i && divTwo[1].value == i && divThree[0].value == i){
                Message(i,ver);
                stopping = 1;
                return stopping;
            }
        }
    }

    
    function draw(){
        let acumule = 0;
        if(stopping != 1){
            for(let i = 0;i<divOne.length;i++){
                if(divOne[i].value == 1 || divOne[i].value == 2){
                    acumule++;
                }
                if(divTwo[i].value == 1 || divTwo[i].value == 2){
                    acumule++;
                }
                if(divThree[i].value == 1 || divThree[i].value == 2){
                    acumule++;
                }
                if(acumule==9){
                    Message(0, 0);
                }
            }
        }
        acumule = 0;
    }

    function reset(){
        if(stopping == 1){
           let a =  window.confirm("Deseja iniciar um novo jogo?");
            if(a){
                time = 0;
                stopping = 0;
                for(let i = 0; i<3;i++){
                    if(divOne[i].value == 1 || divOne[i].value == 2){
                        divOne[i].value = 0;
                        divOne[i].removeChild(divOne[i].firstChild);
                    }
                    if(divTwo[i].value == 1 || divTwo[i].value == 2){
                        divTwo[i].value = 0;
                        divTwo[i].removeChild(divTwo[i].firstChild);
                    }
                    if(divThree[i].value == 1 || divThree[i].value == 2){
                        divThree[i].value = 0;
                        divThree[i].removeChild(divThree[i].firstChild);
                    }
                }
            }
        }
    }

    function Message(num, ver){
        if(ver == 1){
            if(num==1){
                return window.alert('X ganhou');
            }else{
                return window.alert('O ganhou');
            }
        }else{
            return window.alert('empatou');
        }
    }
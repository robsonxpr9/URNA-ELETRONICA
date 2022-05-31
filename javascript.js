



 function valores(numero )   {  

   
    


 
        let valorr= document.querySelector('#imp2.piscar');
    
        let valor= document.querySelector('#imp1.piscar');
    
        if(valor !== null){
    
            document.getElementById("imp1").value=innerHTML=numero; 
            valor.classList.remove('piscar');
            document.getElementById("imp2").classList.add('piscar');
           
            
           
    
        }
    
        if(valorr !== null){
    
            document.getElementById("imp2").value=innerHTML=numero; 
            valorr.classList.remove('piscar');
    
            imprimirfoto()
    
    
    }
    
      console.log(valorr)
    
       
      
    
       
    
    }
    

function imprimirfoto(){

   let vai1 = document.getElementById('imp1').value;
   let vai2 = document.getElementById('imp2').value;


    if(vai1 ==2 && vai2 ==2){

        document.querySelector("span").innerHTML="BOLSONARO   ";

        document.getElementById("foto").innerHTML='<img src="img/BOLSONARO.jpeg" alt="" id="gg"></img>'


    
}
    if(vai1 ==1 && vai2 ==3){

        document.querySelector("span").innerHTML="LULA SILVA";

    document.getElementById("foto").innerHTML='<img src="img/LULA.jpeg" alt="" id="gg"></img>'



}

if(vai1 ==1 && vai2 ==2){
    document.querySelector("span").innerHTML="CIRO GOMES ";

    document.getElementById("foto").innerHTML='<img src="img/CIRO.jpeg" alt="" id="gg"></img>'


}

if(vai1 ==4 && vai2 ==5){
    document.querySelector("span").innerHTML="JOAÕ DORIA";

    document.getElementById("foto").innerHTML='<img src="img/DORIA.jpeg" alt="" id="gg"></img>'


}

if(vai1 ==7 && vai2 ==0){

    document.querySelector("span").innerHTML="A.JANONES";

    document.getElementById("foto").innerHTML='<img src="img/ANDRE JANONES.png" alt="" id="gg"></img>'

    
}

    if(vai1 !=7&& vai1!=4 &&vai1 !=1 &&vai1 !=2 

        ||

    vai2 !=0 &&vai2 !=5 &&vai2 !=2 &&vai2 !=3){


       document.getElementById('alerta').innerHTML="NÚMERO INVALIDO"

        
        
    } 

 
//75 72 73  ou 40 42 43 ou 10 15 ou 20 25 23 ...........bugs que poderia atrapalha a lógica 
 

 
 var dia = vai1 + vai2;
  if(dia ==40||dia==42 ||dia==43 ||dia==10 ||dia==15 
    ||dia==20 ||dia==25 ||dia==23 ||dia==75 ||dia==73 ||dia==72){
    document.getElementById('alerta').innerHTML="NÚMERO INVALIDO"

  }

   console.log(dia);
 
 


}



function fim(fn){

 document.getElementById("font").classList.add('fim');
 document.getElementById("imp1").classList.add('fim');
 document.getElementById("imp2").classList.add('fim');
 document.getElementById("foto").classList.add('fim');

 document.getElementById("tela").innerHTML='<h1 id="fimm">FIM</h1>';

 

 fn()
 


}


function audios(){

  
     let audio = document.querySelector('audio')
        audio.play()

    }



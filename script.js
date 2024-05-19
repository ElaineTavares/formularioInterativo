let perguntaAreaWeb = document.getElementById('pergunta_area_web')

let respostaAreaBack = document.getElementById('resposta_back')
let perguntaVantagemBack = document.getElementById('pergunta_vantagem_back')
let perguntaVantagemFront = document.getElementById('pergunta_vantagem_front')

let respostaRapidezBack = document.getElementById('rapidez_back')
let respostaIntuitivaBack = document.getElementById('intuitiva_back')
let respostaIntegracaoBack = document.getElementById('integracao_back')
let respostaBack = document.getElementById('respostah3_back')

let respostaBibliotecaFront = document.getElementById('biblioteca_front')
let respostaCompreensaoFront = document.getElementById('compreensao_front')
let respostaComunidadeFront = document.getElementById('comunidade_front')
let respostaFront = document.getElementById('respostah3_front')




function profissaoWeb(){
   if(perguntaAreaWeb.style.opacity === '0'){
    perguntaAreaWeb.style.opacity = '1'
   } else {
    perguntaAreaWeb.style.opacity = '0'
   }    
}


function areaBack(){
    if(perguntaVantagemBack.style.opacity === '0'){
        perguntaVantagemBack.style.opacity = '1'   
    } else {
        perguntaVantagemBack.style.opacity = '0'  
          
    }
}


function areaFront(){
    if(perguntaVantagemFront.style.opacity === '0'){
        perguntaVantagemFront.style.opacity = '1'
    } else {
        perguntaVantagemFront.style.opacity = '0'        
    }
}


function rapidezBack(){
    if(respostaRapidezBack.style.opacity === '0'){
        respostaRapidezBack.style.opacity = '1'
        respostaBack.style.opacity = '1'
        respostaIntegracaoBack.style.opacity = '0'
        respostaIntuitivaBack.style.opacity = '0'
    } else {
        respostaRapidezBack.style.opacity = '0'
        respostaBack.style.opacity = '0'
    }
}

function integracaoBack(){
    if(respostaIntegracaoBack.style.opacity === '0'){
        respostaIntegracaoBack.style.opacity = '1'
        respostaBack.style.opacity = '1'
        respostaRapidezBack.style.opacity = '0'
        respostaIntuitivaBack.style.opacity = '0'
    } else {
        respostaIntegracaoBack.style.opacity = '0'
        respostaBack.style.opacity = '0'
        
    }
}

function intuitivaBack(){
    if(respostaIntuitivaBack.style.opacity === '0'){
        respostaIntuitivaBack.style.opacity = '1'
        respostaBack.style.opacity = '1'
        respostaRapidezBack.style.opacity = '0'
        respostaIntegracaoBack.style.opacity = '0'
    } else {
        respostaIntuitivaBack.style.opacity = '0'
        respostaBack.style.opacity = '0'        
    }   
}

function bibliotecaFront(){   
    if(respostaBibliotecaFront.style.opacity === '0'){
        respostaBibliotecaFront.style.opacity = '1'
        respostaFront.style.opacity = '1'
        respostaCompreensaoFront.style.opacity = '0'
        respostaComunidadeFront.style.opacity = '0'
    } else {
        respostaBibliotecaFront.style.opacity = '0'
        respostaFront.style.opacity = '0'
    }
}

function compreensaoFront(){
    if(respostaCompreensaoFront.style.opacity === '0'){
        respostaCompreensaoFront.style.opacity = '1'
        respostaFront.style.opacity = '1'
        respostaBibliotecaFront.style.opacity = '0'
        respostaComunidadeFront.style.opacity = '0'
    } else {
        respostaCompreensaoFront.style.opacity = '0'
        respostaFront.style.opacity = '0'
    }
}

function comunidadeFront(){
    if(respostaComunidadeFront.style.opacity === '0'){
        respostaComunidadeFront.style.opacity = '1'
        respostaFront.style.opacity = '1'
        respostaBibliotecaFront.style.opacity = '0'
        respostaCompreensaoFront.style.opacity = '0'
    } else {
        respostaComunidadeFront.style.opacity = '0'
        respostaFront.style.opacity = '0'
    }
}




let perguntaAreaMobile = document.getElementById('pergunta_area_mobile')
let vantagemMobile = document.getElementById('pergunta_vantagem_back_mobile')
let respostaBackMobile = document.getElementById('respostah3_back_mobile')
let resposta1BackMobile = document.getElementById('resposta1_back_mobile')
let resposta2BackMobile = document.getElementById('resposta2_back_mobile')
let resposta3BackMobile = document.getElementById('resposta3_back_mobile')

function profissaoMobile(){
    if(perguntaAreaMobile.style.opacity === '0'){
        perguntaAreaMobile.style.opacity = '1'
    } else {
        perguntaAreaMobile.style.opacity = '0'
    }    
 }


 function backMobile(){
    if(vantagemMobile.style.opacity === '0'){
        vantagemMobile.style.opacity = '1'
    } else {
        vantagemMobile.style.opacity = '0'
    }
 }

 function vantagem1BackMobile(){
    if(resposta1BackMobile.style.opacity === '0'){
        resposta1BackMobile.style.opacity = '1'
        respostaBackMobile.style.opacity = '1'
        resposta2BackMobile.style.opacity = '0'
        resposta3BackMobile.style.opacity = '0'
    } else {
        resposta1BackMobile.style.opacity = '0'
        respostaBackMobile.style.opacity = '0'
    }
 }

 function vantagem2BackMobile(){
    if(resposta2BackMobile.style.opacity === '0'){
        resposta2BackMobile.style.opacity = '1'
        respostaBackMobile.style.opacity = '1'
        resposta1BackMobile.style.opacity = '0'
        resposta3BackMobile.style.opacity = '0'
    } else {
        resposta2BackMobile.style.opacity = '0'
        respostaBackMobile.style.opacity = '0'
    }
 }


 function vantagem3BackMobile(){
    if(resposta3BackMobile.style.opacity === '0'){
        resposta3BackMobile.style.opacity = '1'
        respostaBackMobile.style.opacity = '1'
        resposta1BackMobile.style.opacity = '0'
        resposta2BackMobile.style.opacity = '0'
    } else {
        resposta3BackMobile.style.opacity = '0'
        respostaBackMobile.style.opacity = '0'
    }
 }



let perguntaVantagemMobile = document.getElementById('pergunta_vantagem_front_mobile')
let respostaFrontMobile = document.getElementById('respostah3_front_mobile')
let resposta1FrontMobile = document.getElementById('resposta1_front_mobile')
let resposta2FrontMobile = document.getElementById('resposta2_front_mobile')
let resposta3FrontMobile = document.getElementById('resposta3_front_mobile')

function frontMobile(){
    if(perguntaVantagemMobile.style.opacity === '0'){
        perguntaVantagemMobile.style.opacity = '1'
    } else {
        perguntaVantagemMobile.style.opacity = '0'
    }
}

function vantagem1FrontMobile (){
    if(resposta1FrontMobile.style.opacity === '0'){
        resposta1FrontMobile.style.opacity = '1'
        respostaFrontMobile.style.opacity = '1'
        resposta2FrontMobile.style.opacity = '0'
        resposta3FrontMobile.style.opacity ='0'
    } else {
        resposta1FrontMobile.style.opacity = '0'
        respostaFrontMobile.style.opacity = '0'
    }
}

function vantagem2FrontMobile(){
    if(resposta2FrontMobile.style.opacity === '0'){
        resposta2FrontMobile.style.opacity = '1'
        respostaFrontMobile.style.opacity = '1'
        resposta1FrontMobile.style.opacity = '0'
        resposta3FrontMobile.style.opacity ='0'
    } else {
        resposta2FrontMobile.style.opacity = '0'
        respostaFrontMobile.style.opacity = '0'
    }
}

function vantagem3FrontMobile(){
    if(resposta3FrontMobile.style.opacity === '0'){
        resposta3FrontMobile.style.opacity ='1'
        respostaFrontMobile.style.opacity = '1'
        resposta1FrontMobile.style.opacity = '0'
        resposta2FrontMobile.style.opacity = '0'
    } else {
        resposta3FrontMobile.style.opacity ='0'
        respostaFrontMobile.style.opacity = '0'
    }
}












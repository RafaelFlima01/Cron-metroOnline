var min = document.querySelector('#minutos')
var sec = document.querySelector('#segundos')
var res = document.querySelector('#res')
var butn = document.querySelector('#button')
var butn2 = document.querySelector('button2')


var minAtu;
var secAtu;


for(var i = 0; i <=60; i++){
    min.innerHTML+='<option value="'+i+'">'+i+'</option>';
}
for(var i = 0; i <=60; i++){
    sec.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

var clique = 1

butn.addEventListener('click', function(){
    document.querySelector('audio').pause()
    var minAtu = min.value
    var secAtu = sec.value

    res.innerHTML=`${minAtu}:${secAtu}`

    clique--
    
    if(secAtu == 0 && minAtu ==0){
        alert("Adicione algum valor para que possa iniciar o Cronômetro")
        return
    }

    if(clique == 0){
        butn.disabled=true
        butn.classList.add('shadow')
        butn.style.cursor="default"
        
    }
    
    
    intervalo = setInterval(function(){
        secAtu--
        if(secAtu <=0 && minAtu > 0){
            minAtu--
            secAtu=59
        }else if(secAtu == 0 && minAtu ==0){
            clearInterval(intervalo)
            clique++
            document.querySelector('audio').play()
        }
        if(clique > 0){
            butn.disabled=false
            butn.style.cursor="pointer"
            butn.classList.remove('shadow')
        }

        res.innerHTML=`${minAtu}:${secAtu}`

    },1000)

})

function zerar (){
    clique = 1
    console.log(clique)
    secAtu = 0
    minAtu = 0
    clearInterval(intervalo)
    res.innerHTML=`${minAtu}:${secAtu}`
    if(clique > 0){
        butn.disabled=false
        butn.style.cursor="pointer"
        butn.classList.remove('shadow')
    }
}

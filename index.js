let button1= document.querySelectorAll('.but')

let count = 0

button1.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='Up'){
            count++;
            document.querySelector('h1').innerHTML=count
        }else if(e.target.innerHTML==='Down'){
            if(count>1){
                count--
            }else{
                count = 0
            }
            document.querySelector('h1').innerHTML=count
        }else{
            count = 0
            document.querySelector('h1').innerHTML=count
        }
    })
})

let button2= document.querySelectorAll('.but1')

let count1 = 'ON'
let count2 = 'OFF'
let count3 = 'NEUTRAL'

button2.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='ON'){
            document.querySelector('h2').innerHTML= count1
            document.querySelector('.power').style.backgroundColor='lawngreen'
            document.querySelector('.power').style.color='black'
            // alert(`Light's ON`)
        }else if(e.target.innerHTML==='OFF'){
            document.querySelector('h2').innerHTML=count2
            document.querySelector('.power').style.backgroundColor='black'
            document.querySelector('.power').style.color='white'
            // alert( `light's OFF`)
        }else{
            count = 0
            document.querySelector('h2').innerHTML=count3
            document.querySelector('.power').style.backgroundColor='grey'
            document.querySelector('.power').style.color='black'
        }
    })
})

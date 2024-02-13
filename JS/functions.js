
const list = document.querySelector('table')
const raffle = document.querySelector('p')
const button = document.querySelector('button')
let valmiit_rivit = 0

button.addEventListener('click',() => {
    const tr = list.insertRow()
    
    for (let i = 0; i < 7; i++){
        const td = tr.insertCell(i)
        td.innerHTML = Math.floor(Math.random() *10)
        console.log(i)
    }

valmiit_rivit = valmiit_rivit +1
document.querySelector('#rivit').innerHTML = valmiit_rivit   
})



let trs = document.querySelectorAll('tr')
for (let tr of trs){
    if (tr.childElementCount >= 5 && tr.children[6].innerHTML === 'In use&nbsp;' && tr.children[3].innerHTML === 'Domestic Nonprofit Corporation&nbsp;'){
        console.log(tr.children[2].innerText)
    }
}

document.querySelectorAll('input')[23].click()

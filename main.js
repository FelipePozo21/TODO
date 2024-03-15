btnList.addEventListener('click', displayForm)
btnForm.addEventListener('click', loadList)
spanForm.addEventListener('click', closeForm)

function preCharge() {
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)

        let value = localStorage.getItem(key)

        console.log(`${key}:${value}`)
    }
}
preCharge()

function displayForm() {
    form.classList.replace('hidden', 'flex')
}

async function loadList() {
    let value = await getCountdownDate(date)
    let id = (title) => {
        let cards = CARDS
        let search = cards.find(e => e.title === title)
        console.log(search)
    }

    if(!CARDS[id]) {
        createCards(value)
        console.log(id)
        closeForm()

     } else {
         setInterval(() => {
             id.innerText = value
             console.log(value)
         },MINUTES)
     }
}

console.log(CARDS)

function closeForm() {
    form.classList.replace('flex', 'hidden')
}
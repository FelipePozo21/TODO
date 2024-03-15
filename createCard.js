let test = []

function createCards(value) {
    let div = document.createElement('div')
    let pTitle = document.createElement('p')
    let pDescription = document.createElement('p')
    let pDate = document.createElement('p')
    
    let test2 = (title) => {
        let random = Math.floor(Math.random() * 10)
        if(!localStorage.getItem(title)) {
            test.push({value: random})
            localStorage.setItem(title, JSON.stringify(random))
            CARDS(title)
            console.log(test)
        } 
    }

    div.setAttribute('class', 'border-2 border-[#31304D] w-72 min-h-56 h-auto rounded-xl flex p-2 relative justify-between flex-col')
    div.setAttribute('id', '1')
    pTitle.setAttribute('class', 'ml-2 mt-2 pb-2 border-2 border-b-[#31304D] border-transparent')        
    pDescription.setAttribute('class', 'ml-2 mt-2 pb-2')
    pDate.setAttribute('class', 'ml-2 mt-2 pb-2 border-2 border-t-[#31304D] border-transparent')
    pDate.setAttribute('id',test2(title.value))
    console.log('test')
    pTitle.innerText = title.value
    pDescription.innerText = description.value
    pDate.innerText = value

    div.appendChild(pTitle)
    div.appendChild(pDescription)
    div.appendChild(pDate)

    articleList.append(div)
}
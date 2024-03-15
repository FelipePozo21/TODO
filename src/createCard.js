async function createCard(data) {
    const dataToParse = JSON.parse(data)
    let div = document.createElement('div')
    let pTitle = document.createElement('p')
    let pDescription = document.createElement('p')
    let pDate = document.createElement('p')
    let span = document.createElement('span')

    div.setAttribute('class', 'border-2 border-[#31304D] w-72 max-w-72 min-h-56 h-56 rounded-xl  p-2 relative grid grid-rows-cards grid-cols-1')
    span.setAttribute('class', 'absolute top-1 right-4 cursor-pointer')
    pTitle.setAttribute('class', 'ml-2 mt-2 pb-2 border-2 max-w-64 border-b-[#31304D] border-transparent')        
    pDescription.setAttribute('class', 'break-words overflow-scroll overflow-x-hidden ml-2 mt-2 pb-2 max-w-64 overflow-clip')
    pDate.setAttribute('class', 'ml-2 mt-2 pb-2 border-2 max-w-64 border-t-[#31304D] border-transparent')

    pTitle.innerText = dataToParse.title
    span.innerText = 'x'
    pDescription.innerText = dataToParse.description
    pDate.innerText = dataToParse.date

    div.appendChild(span)
    div.appendChild(pTitle)
    div.appendChild(pDescription)
    div.appendChild(pDate)

    span.addEventListener('click', () => {
        div.remove()
        clearInterval(interval)
    })

    pDate.innerText = await getCountdownDate(dataToParse.date)
    
    let interval = setInterval( async() => {
        let test = await getCountdownDate(dataToParse.date)
        pDate.innerText = test
   }, SECOND)
    articleList.append(div)
}

// async function updateDate(date) {
//     console.log({
//         updateDate:date
//     })
//     let callFunc = await getCountdownDate(date)
//     // return callFunc
//     console.log(callFunc)
// }
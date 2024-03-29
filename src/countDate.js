const SECOND = 1000
const MINUTES = SECOND * 60
const HOUR = MINUTES * 60
const DAY = HOUR * 24


async function getCountdownDate(date) {
    const dateTime = Date.parse(date)
    function updateCountDown() {
        const actualTime = Date.now()
        if(actualTime < dateTime) {
            const diff = dateTime - actualTime

            let days = Math.floor(diff / DAY).toString()
            let hours = Math.floor((diff % DAY) / HOUR).toString()
            let minutes = Math.floor((diff % HOUR) / MINUTES).toString()
    
            return `${days}D:${hours}H:${minutes}M`
        } else {
            return 'Expired'
        }
    }
    return updateCountDown()
}

const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    const timerMiliseconds = document.getElementById('timer-miliseconds')
    
    const getTimeRemaining = () => {
        

        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000

        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        let milisec = Math.floor(timeRemaining) / 10000

        return{timeRemaining, days, hours, minutes, seconds, milisec}
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()
        console.log(getTime)

        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds
        timerMiliseconds.textContent = getTime.milisec

        if(getTime.timeRemaining > 0){
            setTimeout(updateClock, 1000)
        } else {
            timerDays.textContent = '00'
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
            timerMiliseconds.textContent = '00'
        }
        
    }

    // getTimeRemaining(countTimer, 1000)
    updateClock()
}


export default timer
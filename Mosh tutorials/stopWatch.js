function stopWatch () {
    let startTime, endTime, running, duration = 0

    this.start = function (){
if(running) 
    throw new Error('Stopwatch has started')
running = true
startTime = new Date()
    }
    this.stop = function (){
        if(!runnig)
            throw new Error('Stopwatch is not started')
        running = false
        endTime = new Date()
        
        const second = (endTime.getTime() - startTime.getTime()) / 1000
        duration += second
    }
}
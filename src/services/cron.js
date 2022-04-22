
class Cron{  
  constructor(actualTime = ""){
    if (actualTime == ""){
      let hour = 0;
      let minute = 0;
      let second = 0;
      let millisecond = 0;
      
      let cron;
    }
  }

  startCron(){
  }

  pause(){
    clearInterval(cron);
  }
  start(){
    this.pause();
    this.cron = setInterval(() => { timer(); }, 10);
  }
  
  timer(){
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }

}

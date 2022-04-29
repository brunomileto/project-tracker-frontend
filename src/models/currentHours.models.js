class CurrentHours{
  constructor(data){
    if(typeof(data) !== 'undefined'){
      this.hours = data.hours;
      this.minutes = data.minutes;
      this.seconds = data.seconds
    } else {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
}

export default CurrentHours;
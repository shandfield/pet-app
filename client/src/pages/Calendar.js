import React, { Component } from 'react';
import Calendar from "../components/Calendar"
const style = {
  position: "relative",
  margin: "50px auto"
}

class Planner extends Component {
  onDayClick = (e, day) => {
    alert(day);
  }
  
  render() {
    return (
      <div className="calendar">
        <Calendar style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    );
  }
}
export default Planner
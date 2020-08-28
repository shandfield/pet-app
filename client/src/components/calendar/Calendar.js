class App extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        events: []
      }
    }
   
  }
  componentDidMount = () => {
    this.getEvents()
  }
  getEvents(){
    let that = this;
    function start() {
      gapi.client.init({
        'apiKey': AIzaSyDDOohQ7uIwue6FJav7ywLQgiwsZ_flP1s
      }).then(function() {
        return gapi.client.request({
          'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
        })
      }).then( (response) => {
        let events = response.result.items
        that.setState({
          events
        }, ()=>{
          console.log(that.state.events);
        })
      }, function(reason) {
        console.log(reason);
      });
    }
    gapi.load('client', start)
  }
  render(){
    return(
      {this.state.events.map(function(event){
        return(
          {event.summary} {event.start.dateTime} - {event.end.dateTime}
        )
      });
    )
  }
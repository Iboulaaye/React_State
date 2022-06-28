import React from 'react';
import { Component } from 'react';
import './App.css';
import myImage from "./myImage.webp"

class Profile extends  React.Component {
  state = {
    Person : {
      
      Fullname : "Mouhamed DIOP", 
      Bio: "Agé de 20 ans, je suis passioné par la tech",
      Profession : "Etudiant",
    },

    date: new Date(),

    show : true,
};


componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}

componentWillUnmount() {
  clearInterval(this.timerID);
}

tick() {
  this.setState({
    date: new Date()
  });
}

showProfile = () => this.setState((currentState) => ({show: !currentState.state.show}));

  render() {
    return (
      <div className="App" style={{margin:"80px 100px",fontSize:"1.2rem", display: "inline" }}>
        { this.state.show && ( 
          <div> 
            <p style={{textAlign:"center",color:"rgb(9, 30, 90)",fontFamily: 'Roboto Condensed',margin:"auto", fontSize:30}}>
              {this.state.Person.Fullname}</p>
            <p style={{border: " 4mm ridge rgba(21,  50, .6)", width:"500px", borderRadius:"2%", marginTop:"20px", marginLeft:"400px", backgroundColor: "rgba(255, 255, 128, .5)", textAlign:"center", }}> 
              {this.state.Person.Bio} </p>     
            <p style={{textAlign:"center",color:"rgb(9, 30, 90)",fontFamily: 'Roboto Condensed',margin:"auto", fontSize:30}}> 
              Je suis {this.state.Person.Profession}</p> 
            <img src= {myImage} width="190px"/> 
        </div>
        )}
        <div> 
        <button onClick={this.showProfile} style={{width:100, height:50, marginLeft:20, border:"solid"}}>
            {this.state.show ? 'hide' : 'show'}
        </button>
        </div>
        <div>
        <h2 style={{width:150, marginLeft:600, border: "1rem solid"}}>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      </div>  
    );

  }
  
}

export default Profile;

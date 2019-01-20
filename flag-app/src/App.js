/* global fetch:false */
import React, { Component } from 'react';// eslint-disable-line no-unused-vars
import Shuffle from 'shuffle-array';
import './App.css';

const numberOfCountries = 8;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {},
      countries: [],
      countryDB: [],
      isSolved: false,
      title: "Guess"
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.initGame = this.initGame.bind(this);
  }
  
  initGame() {
    
    const countries = Shuffle(this.state.countryDB).slice(0, numberOfCountries);
    const country = countries[Math.floor(Math.random()*numberOfCountries)];
    
    this.setState({
      country,
      countries,
      isSolved: false,
      title: "Guess"
    });
  }
  
  fetchData()
  {
    const URL = "https://restcountries.eu/rest/v2/all";
    
    fetch(URL)
      .then(data=>data.json())
      .then(data=>data.map((country)=>({name: country.name, flag: country.flag})))
      .then(countryDB=>this.setState({countryDB}, ()=>{this.initGame();}));
      
  }
  
  handleClick(e){
    const name = e.target.name;
    e.stopPropagation();
    if(this.state.isSolved) return;
    
    const country = this.state.countries.filter((c)=>(c.name === name));
    if(country.clicked) return;
    
    const countries = this.state.countries.map((c)=>(
      {...c, clicked: c.name===name? true:c.clicked}
    ));
    
    if(name === this.state.country.name) {
      this.setState({title: `Correct, it's ${name}!`, isSolved: true, countries});
    } else {
      this.setState({title: "Guess Again", countries});
    }
    
  }
  
  
  render() {
    
    const names = this.state.countries.map((country, index)=>(
      <button className={country.clicked?"clicked":""} key={index} name = {country.name} onClick={this.handleClick}>{country.name}</button>
      ));
      
    return (
      <div className="App">
        <header className="header">
        <div className="title">{this.state.title}</div>
        <button onClick={this.initGame} className={this.state.isSolved?"":"hide-button"}>Play Again</button>
        <div className="country-names">
        {names}
        </div>
        </header>
        <div className="flag-display">
        <img src={this.state.country.flag} alt="guess"/>
        </div>
      </div>
    );
  }
  
  
  componentDidMount(){
    this.fetchData();
  }
  
  
}

export default App;

import React, {Component} from 'react';
import './App.css'

import Navigation         from "../components/Navigation";
import SearchBox          from "../components/SearchBox";
import Selection          from "../components/Selection";
import FilmsList          from "../components/Films/filmsList";
import PeopleList         from "../components/People/peopleList";
import PlanetsList        from "../components/Planets/planetsList";
import SpeciesList        from "../components/Species/speciesList";
import StarshipsList from "../components/Starships/starshipsList";
import VehiclesList  from "../components/Vehicles/vehiclesList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      films: [],
      people: [],
      species: [],
      planets: [],
      starships: [],
      vehicles: [],
      searchfield: '',
      route: 'selection',
    };
  };

  onButtonSelection = route => this.setState({route: route});

  onSearchChange = e => this.setState({searchfield: e.target.value});

  render() {
    const {results,searchfield,route} = this.state;
    if(this.state.route !== 'selection'){
      fetch(`https://swapi.co/api/${this.state.route}/`)
    .then(response => response.json())
        .then(data => this.setState({results:data.results}));
    }
    if(route === 'films'){
      var resultsFiltered = results
        .filter(result => {
          return result.title.toLowerCase().includes(searchfield.toLowerCase());
        })
        .sort((a, b) => a.episode_id < b.episode_id ? -1 : 1);
    } else {
      var resultsFiltered = results
        .filter(result => {
          return result.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        .sort((a, b) => a.name < b.name ? -1 : 1);
    }
    if(results.length === 0 && route !== 'selection'){
      return <h1 className='tc pt6'>Loading...</h1>
    } else {
      switch (route) {
        case 'selection':
          return(
            <div className="tc">
              <h1 className='f1'>Star Wars</h1>
              <h2 className='f3 pt3'>Search through your favourite Star Wars data!</h2>
              <h3 className='f-2 tracked-mega'>Creator iPinki</h3>
              <Selection onButtonSelection={this.onButtonSelection}/>
            </div>
          );
        case 'films':
          return(
            <div className="tc">
              <Navigation onButtonSelection={this.onButtonSelection}/>
              <h1 className='f1'>Star Wars</h1>
              <h2>Search for your favourite film!</h2>
              <h5 className='f-2 tracked-mega'>Creator iPinki</h5>
              <SearchBox searchChange={this.onSearchChange}/>
              <FilmsList films={resultsFiltered}/>
            </div>
          );
        case 'people':
          return(
            <div className="tc">
              <Navigation onButtonSelection={this.onButtonSelection}/>
              <h1 className='f1'>Star Wars</h1>
              <h2>Search for your favourite people!</h2>
              <h5 className='f-2 tracked-mega'>Creator iPinki</h5>
              <SearchBox searchChange={this.onSearchChange}/>
              <PeopleList people={resultsFiltered}/>
            </div>
          );
        case 'species':
          return(
            <div className="tc">
              <Navigation onButtonSelection={this.onButtonSelection}/>
              <h1 className='f1'>Star Wars</h1>
              <h2>Search for your favourite species!</h2>
              <h5 className='f-2 tracked-mega'>Creator iPinki</h5>
              <SearchBox searchChange={this.onSearchChange}/>
              <SpeciesList species={resultsFiltered}/>
            </div>
          );
        case 'planets':
          return(
            <div className="tc">
              <Navigation onButtonSelection={this.onButtonSelection}/>
              <h1 className='f1'>Star Wars</h1>
              <h2>Search for your favourite planet!</h2>
              <h5 className='f-2 tracked-mega'>Creator iPinki</h5>
              <SearchBox searchChange={this.onSearchChange}/>
              <PlanetsList planets={resultsFiltered}/>
            </div>
          );
        case 'starships':
          return(
            <div className="tc">
              <Navigation onButtonSelection={this.onButtonSelection}/>
              <h1 className='f1'>Star Wars</h1>
              <h2>Search for your favourite starship!</h2>
              <h5 className='f-2 tracked-mega'>Creator iPinki</h5>
              <SearchBox searchChange={this.onSearchChange}/>
              <StarshipsList starships={resultsFiltered}/>
            </div>
          );
        case 'vehicles':
          return(
            <div className="tc">
              <Navigation onButtonSelection={this.onButtonSelection}/>
              <h1 className='f1'>Star Wars</h1>
              <h2>Search for your favourite vehicle!</h2>
              <h5 className='f-2 tracked-mega'>Creator iPinki</h5>
              <SearchBox searchChange={this.onSearchChange}/>
              <VehiclesList vehicles={resultsFiltered}/>
            </div>
          );
      }
    }

  }
}

export default App;
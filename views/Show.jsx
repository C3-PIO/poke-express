const React = require("react");
const myStyle = {
    color: "#ffffff",
    backgroundColor: "#EF4410",
  }

class Show extends React.Component {
    render() {
    //   const pokemon = this.props.pokemon
      return (
      <div style={myStyle}>
          <h1>Gotta Catch 'Em All!</h1>
          <h2>{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</h2>
          <p>{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)} is a {this.props.pokemon.type} type pokemon!</p>
          <img src={'http://img.pokemondb.net/artwork/' + this.props.pokemon.name.toLowerCase() + ".jpg"} /><br/><br/>
          <a href={'/pokemon'}>Back</a>
      </div>
      )
    }
  }

  module.exports = Show
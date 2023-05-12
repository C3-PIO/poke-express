const React = require("react");
const myStyle = {
    color: "#ffffff",
    backgroundColor: "#EF4410",
  }

class Index extends React.Component {
  render() {
    // const { pokemon } = this.props
    return (
    <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <nav>
          <a href="/pokemon/new">Create a New Pokemon!</a>
        </nav>
        <ul>
          {this.props.pokemon.map((pokemon, i) => {
            return (
              <li>
                <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
              </li>
            );
          })}
        </ul>
        <nav>
            <a href="http://localhost:3000">Back</a>
        </nav>
    </div>
    )
  }
}

module.exports = Index

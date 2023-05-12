const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#EF4410",
}

class New extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>New Pokemon Page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Type: <input type="text" name="type" />
          <br />
          <input type="submit" name="" value="Create Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = New;
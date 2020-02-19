import React from "react";

class Navegacion extends React.Component {
  render() {
    const color = {
      backgroundColor: "#000",
      padding: "5%",
      color: "white"
    };
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
            <h6>         
               Navbar
            </h6>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navegacion;

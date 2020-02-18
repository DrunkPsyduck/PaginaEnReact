import React from "react";

class Proyectos extends React.Component {
  render() {
    const contenedor = {
      backgroundColor: "#6699CC",
      padding: '2%'
    };

    const cabecera = {
        paddingTop: "2%",
        textDecoration: "underline #CC6600"
    };

    const texto = {
      padding: "0% 8%"
    };

    return (
      <section style={contenedor}>
        <h1 style={cabecera}>Mis proyectos</h1>
        <p style={texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          fermentum, urna vel rutrum ullamcorper, urna felis cursus sapien, id
          ornare ligula urna sed eros. In ornare eu justo vitae pharetra. Nunc
          maximus dolor augue. Nulla ac vulputate ipsum. Cras et metus sit amet
          elit vulputate condimentum et a massa. Vivamus a rutrum leo, id
          fringilla lorem. In vitae auctor erat. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Nam gravida
          laoreet leo nec dignissim. Mauris laoreet consequat vehicula. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Ut augue purus, placerat non ullamcorper ac, vestibulum
          in massa. Phasellus sagittis lorem vel sagittis tempor. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Mauris interdum euismod ornare. In consequat, tellus eu
          fringilla facilisis, felis mauris imperdiet elit, id pretium mauris
          diam posuere ligula. Suspendisse vel risus ex. Sed et urna
          ullamcorper, condimentum justo nec, auctor purus. Aliquam id lorem
          aliquet, mollis nulla sed, suscipit sapien. Pellentesque eleifend
          nulla imperdiet ex faucibus dapibus.
        </p>
      </section>
    );
  }
}

export default Proyectos;
import React from "react";

class Proyectos extends React.Component {
  render() {
    let contenedor = "contenedor";

    const texto = {
      padding: "0% 8% 2% 8%",
      fontWeight: "500",
      color: "#cc6600"
    };
    
    return (
      //TODO Enlazar con la api de GitHub y sacar en una tabla los repositorios
      <section className={contenedor} id="Proyectos">
        <h1 style={{color: 'white'}}>Mis proyectos</h1>
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
          aliquet, mollis nulla sed, suscipit sapien.
        </p>

        <p style={texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin
          fermentum, urna vel rutrum ullamcorper, urna felis cursus sapien, id
          ornare ligula urna sed eros.In ornare eu justo vitae pharetra.Nunc
          maximus dolor augue.Nulla ac vulputate ipsum.Cras et metus sit amet
          elit vulputate condimentum et a massa.Vivamus a rutrum leo, id
          fringilla lorem.In vitae auctor erat.Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Nam gravida
          laoreet leo nec dignissim.Mauris laoreet consequat vehicula.Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.Ut augue purus, placerat non ullamcorper ac, vestibulum
          in massa.Phasellus sagittis lorem vel sagittis tempor.Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.Mauris interdum euismod ornare.In consequat, tellus eu
          fringilla facilisis, felis mauris imperdiet elit, id pretium mauris
          diam posuere ligula.Suspendisse vel risus ex.Sed et urna ullamcorper,
          condimentum justo nec, auctor purus.Aliquam id lorem aliquet, mollis
          nulla sed, suscipit sapien.{" "}
        </p>

        <p style={texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin
          fermentum, urna vel rutrum ullamcorper, urna felis cursus sapien, id
          ornare ligula urna sed eros.In ornare eu justo vitae pharetra.Nunc
          maximus dolor augue.Nulla ac vulputate ipsum.Cras et metus sit amet
          elit vulputate condimentum et a massa.Vivamus a rutrum leo, id
          fringilla lorem.In vitae auctor erat.Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Nam gravida
          laoreet leo nec dignissim.Mauris laoreet consequat vehicula.Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.Ut augue purus, placerat non ullamcorper ac, vestibulum
          in massa.Phasellus sagittis lorem vel sagittis tempor.Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.Mauris interdum euismod ornare.In consequat, tellus eu
          fringilla facilisis, felis mauris imperdiet elit, id pretium mauris
          diam posuere ligula.Suspendisse vel risus ex.Sed et urna ullamcorper,
          condimentum justo nec, auctor purus.Aliquam id lorem aliquet, mollis
          nulla sed, suscipit sapien.{" "}
        </p>
      </section>
    );
  }
}

export default Proyectos;

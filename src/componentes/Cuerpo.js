import React from 'react';

class Cuerpo extends React.Component {
    render() {
        var section = {
          backgroundColor: "#232b2b",
          color: 'white',
          padding: "1%"
        };
        
        const texto = {
            padding: '0% 9% 4% 8%',
            fontWeight :'400'
        }

        return (
          <div id="About">
            <section style={section}>
              <article>
                <h1>Sobre mi</h1>
                <p style={texto}>

                </p>

                   < p style = {
                       texto
                     } >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin
                   fermentum, urna vel rutrum ullamcorper, urna felis cursus
                   sapien, id ornare ligula urna sed eros.In ornare eu justo
                   vitae pharetra.Nunc maximus dolor augue.Nulla ac vulputate
                   ipsum.Cras et metus sit amet elit vulputate condimentum et a
                   massa.Vivamus a rutrum leo, id fringilla lorem.In vitae
                   auctor erat.Vestibulum ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia Curae;
                   Nam gravida laoreet
                   leo nec dignissim.Mauris laoreet consequat vehicula.Orci
                   varius natoque penatibus et magnis dis parturient montes,
                   nascetur ridiculus mus.Ut augue purus, placerat non
                   ullamcorper ac, vestibulum in massa.Phasellus sagittis lorem
                   vel sagittis tempor.Class aptent taciti sociosqu ad litora
                   torquent per conubia nostra, per inceptos himenaeos.Mauris
                   interdum euismod ornare.In consequat, tellus eu fringilla
                   facilisis, felis mauris imperdiet elit, id pretium mauris diam
                   posuere ligula.Suspendisse vel risus ex. </p>


                      
              </article>
            </section>
          </div>
        );
    }
}

export default Cuerpo;
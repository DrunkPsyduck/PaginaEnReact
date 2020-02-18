import React from 'react';

class Footer extends React.Component {
    render() {
      const footer = {
            backgroundColor: '#99CCFF',
            padding: '2%'
        }
        return ( 
            <React.Fragment>
                <footer style={footer}>
                    < div > < p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin fermentum, urna vel rutrum ullamcorper, urna felis cursus sapien, id ornare ligula urna sed eros.In ornare eu justo vitae pharetra.Nunc maximus dolor augue.Nulla ac vulputate ipsum.Cras et metus sit amet elit vulputate condimentum et a massa.Vivamus a rutrum leo, id fringilla lorem.
                     </p> </div >
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;
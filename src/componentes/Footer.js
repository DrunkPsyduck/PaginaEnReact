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
                    <div><p>Hola mundo </p> </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;
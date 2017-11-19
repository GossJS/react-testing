import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Render extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <App
                    width={ 1200 }
                    height={ 400 }
                />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<Render />, document.getElementById('root'));

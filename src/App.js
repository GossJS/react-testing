import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';

import style from './App.style.js';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            imageUrl: '',
            isImageLoading: false,
        };
        this.handleOnChangeText = this.handleOnChangeText.bind(this);
        this.handleOnClickBtn = this.handleOnClickBtn.bind(this);
    }

    handleOnChangeText(event) {
        this.setState({ text: event.target.value });
    }

    handleOnClickBtn() {
        this.setState({ isImageLoading: true });
        this.fetchImage();
    }

    fetchImage() {
        return fetch(`https://picsum.photos/${this.props.width}/${this.props.height}/?random`)
            .then(resolve => resolve.blob())
            .then(resolve => this.setState({ imageUrl: window.URL.createObjectURL(resolve), isImageLoading: false }));
    }

    render() {
        return (
            <main>
                <AppBar
                    title="Put text on random pic"
                    iconElementLeft={ <div></div> }
                />

                <Paper style={ style.paper } zDepth={ 4 }>
                    {
                        this.state.isImageLoading ?
                            <CircularProgress style={ style.spinner } /> :
                            null
                    }
                    <div style={ style.picture }>
                        <img src={ this.state.imageUrl } alt=""/>
                        {
                            this.state.imageUrl ?
                                <span style={ style.text }>{ this.state.text }</span> :
                                null
                        }
                    </div>

                    <div style={ style.controls }>
                        <TextField
                            hintText="your text"
                            style={ { marginRight: '15px' } }
                            onChange={ this.handleOnChangeText }
                        />
                        <RaisedButton
                            label="load new pic"
                            onClick={ this.handleOnClickBtn }
                        />
                    </div>
                </Paper>
            </main>
        );
    }
}

App.defaultProps = {
    width: 400,
    height: 300,
};

App.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

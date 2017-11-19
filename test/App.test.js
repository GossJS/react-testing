import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import "whatwg-fetch";

import jsdom from 'jsdom';

const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

describe('<App />', () => {
    const props = {
        width: 1200,
        height: 400,
    }
    let wrapper = shallow(<App { ...props } />);

    it('exists', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('receives props', () => {
        expect(wrapper.instance().props.width).toEqual(1200);
    });

    it('contains components', () => {
        expect(wrapper.find(AppBar).length).toEqual(1);
        expect(wrapper.find(RaisedButton).length).toEqual(1);
        expect(wrapper.find(Paper).length).toEqual(1);
        expect(wrapper.find(TextField).length).toEqual(1);
    });

    it('receives text in input but shows no text while there is no image', () => {
        const input = wrapper.find('input');
        input.value = 'some words';
        expect(wrapper.find('span').length).toEqual(0);
    });

    it('sets text in state but shows no text while there is no image', () => {
        wrapper.setState({ text: 'some words'});
        expect(wrapper.find('span').length).toEqual(0);
    });

    it('receives text in input and sets new state', () => {
        const input = wrapper.find('input');
        input.value = 'some words';
        expect(wrapper.state().text).toEqual('some words');
    });

    // it('clicks button', async () => {
    //     const button = wrapper.find(RaisedButton);
    //     button.simulate('click');
    //     expect(wrapper.state().isImageLoading).toEqual(true);
    //     await expect(wrapper.instance().fetchImage()).resolves.toEqual();
    //     // expect(wrapper.state().isImageLoading).toEqual(false);
    //     // expect(wrapper.state().imageUrl).toEqual('');
    // });
});

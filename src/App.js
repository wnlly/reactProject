import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Component/content.jsx';
import Header from './Component/header.jsx';

import PropTypes from 'prop-types'
import themeColor from './Component/themeColor';

import Provider from './Component/Provider';

function createStore(reducer) {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener())
    }
    dispatch({});
    return { subscribe, getState, dispatch }
}


function reducer(state, action) {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }
    switch (action.type) {
        case 'UPDATE_COLOR':

            return {
                ...state,
                themeColor: action.themeColor
            }

        default:
            return state;
    }


}
const store = createStore(reducer);
console.log(store)
class App extends Component {

    constructor(params) {
        super(params);
    }

    render() {
        return ( <
            div >
            <
            Header > < /Header>

            <
            Content > < /Content> <
            /div>

        );
    }
}

export default App;
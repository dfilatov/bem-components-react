require('../blocks/input/islands/input.styl');
require('../blocks/button/islands/button.styl');

var bemReact = require('bem-react'),
    Input = require('../blocks/input/input.js'),
    Button = require('../blocks/button/button.js');

var App = bemReact.createClass({
    getInitialState : function() {
        return {
            input : 'test'
        };
    },

    _onInputChange : function(value) {
        this.setState({ input : value });
    },

    render : function() {
        return {
            block : 'app',
            content : [
                {
                    block : Input,
                    props : {
                        key : 'input',
                        theme : 'islands',
                        size : 'm',
                        placeholder : 'placeholder',
                        hasClear : true,
                        value : this.state.input,
                        onChange : this._onInputChange
                    }
                },
                {
                    block : Button,
                    props : {
                        key : 'button',
                        theme : 'islands',
                        size : 'm',
                        text : 'click me'
                    }
                }
            ]
        };
    }
});

bemReact.render({ block : App }, document.body);
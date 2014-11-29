var bemReact = require('bem-react'),
    Input = require('../blocks/input');

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
            content : {
                block : Input,
                props : {
                    theme : 'islands',
                    size : 'm',
                    placeholder : 'placeholder',
                    hasClear : true,
                    value : this.state.input,
                    onChange : this._onInputChange
                }
            }
        };
    }
});

bemReact.render({ block : App }, document.body);
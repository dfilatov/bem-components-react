require('../blocks/input/islands/input.styl');
require('../blocks/button/islands/button.styl');

var bemReact = require('bem-react'),
    Input = require('../blocks/input/input.js'),
    Button = require('../blocks/button/button.js'),
    Dropdown = require('../blocks/dropdown/dropdown.js');

var App = bemReact.createClass({
    getInitialState : function() {
        return {
            inputValue : 'test',
            dropdownOpened : false
        };
    },

    _onInputChange : function(value) {
        this.setState({ inputValue : value });
    },

    _onDropdownChangeOpened : function(opened) {
        this.setState({ dropdownOpened : opened });
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
                        value : this.state.inputValue,
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
                },
                {
                    block : Dropdown,
                    props : {
                        key : 'dropdown',
                        opened : this.state.dropdownOpened,
                        theme : 'islands',
                        size : 'm',
                        switcherText : 'dropdown',
                        content : 'dropdown content',
                        onChangeOpened : this._onDropdownChangeOpened
                    }
                }
            ]
        };
    }
});

bemReact.render({ block : App }, document.body);
var bemReact = require('bem-react');

module.exports = bemReact.createClass({
    getInitialState : function() {
        return {
            focused : this.props.focused
        };
    },

    render : function() {
        var content = [this._renderControl()];

        this.props.hasClear && content.push(this._renderClear());

        return {
            block : 'input',
            tag : 'span',
            mods : {
                theme : this.props.theme,
                view : this.props.view,
                size : this.props.size,
                focused : this.state.focused,
                disabled : this.props.disabled
            },
            content : {
                elem : 'box',
                tag : 'span',
                content : content
            }
        };
    },

    _renderControl : function() {
        return {
            elem : 'control',
            tag : 'input',
            props : {
                ref : 'control',
                key : 'control',
                disabled : this.props.disabled,
                placeholder : this.props.placeholder,
                value : this.props.value,
                onFocus : this._onFocus,
                onBlur : this._onBlur,
                onChange : this._onChange
            }
        };
    },

    _renderClear : function() {
        return {
            elem : 'clear',
            mods : { visible : !!this.props.value },
            tag : 'span',
            props : { key : 'clear' }
        };
    },

    _onFocus : function() {
        this.setState({ focused : true });
    },

    _onBlur : function() {
        this.setState({ focused : false });
    },

    _onChange : function() {
        this.props.onChange && this.props.onChange(this.refs.control.getDOMNode().value);
    }
});
var bemReact = require('bem-react');

module.exports = bemReact.createClass({
    getInitialState : function() {
        return {
            focused : this.props.focused,
            hovered : false,
            pressed : false
        };
    },

    componentWillUnmount : function() {
        document.removeEventListener('mouseup', this._onMouseUp);
    },

    render : function() {
        var content = [];

        if(this.props.icon) {
            (this.icon.props || (this.icon.props = {})).key = 'icon';
            content.push(this.icon);
        }

        if(this.props.text !== 'undefined') {
            content.push({
                elem : 'text',
                tag : 'span',
                props : { key : 'text' },
                content : this.props.text
            });
        }

        return {
            block : 'button',
            tag : 'button',
            mods : {
                theme : this.props.theme,
                view : this.props.view,
                size : this.props.size,
                hovered : this.state.hovered,
                pressed : this.state.pressed,
                focused : this.state.focused,
                disabled : this.props.disabled
            },
            props : {
                role : 'button',
                name : this.props.name,
                value : this.props.value,
                title : this.props.title,
                tabindex : this.props.tabindex,
                disabled : this.props.disabled,
                onFocus : this._onFocus,
                onBlur : this._onBlur,
                onMouseEnter : this._onMouseEnter,
                onMouseLeave : this._onMouseLeave,
                onMouseDown : this._onMouseDown
            },
            content : content
        };
    },

    _onFocus : function() {
        this.setState({ focused : true });
    },

    _onBlur : function() {
        this.setState({ focused : false });
    },

    _onMouseEnter : function() {
        this.setState({ hovered : true });
    },

    _onMouseLeave : function() {
        this.setState({ hovered : false });
    },

    _onMouseDown : function() {
        this.setState({ pressed : true });
        document.addEventListener('mouseup', this._onMouseUp);
    },

    _onMouseUp : function(e) {
        this.setState({ pressed : false });
        document.removeEventListener('mouseup', this._onMouseUp);
    }
});
var bemReact = require('bem-react'),
    Button = require('../button/button.js'),
    Popup = require('../popup/popup.js');

module.exports = bemReact.createClass({
    componentDidMount : function() {
        this.props.opened && this.forceUpdate();
    },

    render : function() {
        return {
            block : 'dropdown',
            mods : {
                disabled : this.props.disabled
            },
            content : [
                this._renderSwitcher(),
                this._renderPopup()
            ]
        };
    },

    _renderSwitcher : function() {
        return {
            block : Button,
            props : {
                key : 'button',
                ref : 'button',
                theme : this.props.theme,
                size : this.props.size,
                disabled : this.props.disabled,
                text : this.props.switcherText,
                onClick : this._onSwitcherClick
            }
        };
    },

    _renderPopup : function() {
        return {
            block : Popup,
            props : {
                key : 'popup',
                theme : this.props.theme,
                visible : this.props.opened,
                target : this.refs.button && this.refs.button.getDOMNode(),
                content : this.props.content
            }
        };
    },

    _onSwitcherClick : function() {
        this.props.onChangeOpened && this.props.onChangeOpened(!this.props.opened);
    }
});

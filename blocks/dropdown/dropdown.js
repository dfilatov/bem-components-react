var bemReact = require('bem-react'),
    Button = require('../button/button.js'),
    Popup = require('../popup/popup.js');

module.exports = bemReact.createClass({
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
                theme : this.props.theme,
                size : this.props.size,
                text : this.props.switcherText,
                onClick : this._onSwitcherClick
            }
        }
    },

    _renderPopup : function() {
        return {
            block : Popup,
            props : {
                key : 'popup',
                theme : this.props.theme,
                visible : this.props.opened,
                content : this.props.content
            }
        }
    },

    _onSwitcherClick : function() {
        this.props.onChangeOpened && this.props.onChangeOpened(!this.props.opened);
    }
});
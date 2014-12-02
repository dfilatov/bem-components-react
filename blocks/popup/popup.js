require('./popup.styl');

var bemReact = require('bem-react'),
    Popup = bemReact.createClass({
        render : function() {
            return {
                block : 'popup',
                mods : {
                    theme : this.props.theme,
                    visible : this.props.visible && !!this.props.target
                },
                content : this.props.content
            };
        }
    });

module.exports = bemReact.createClass({
    componentDidMount : function() {
        this._renderPopup();
    },

    componentDidUpdate : function() {
        this._renderPopup();
    },

    componentWillUnmount : function() {
        var container = this._getPopupContainerDOMNode();
        bemReact.unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
    },

    render : function() {
        return { block : 'popup-stub' };
    },

    _renderPopup : function() {
        bemReact.render(
            {
                block : Popup,
                props : this.props
            },
            this._getPopupContainerDOMNode());
    },

    _getPopupContainerDOMNode : function() {
        return this._popupContainerDOMNode ||
            (this._popupContainerDOMNode = document.body.appendChild(document.createElement('div')));
    }
});


import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { ButtonGlobalStyle } from './Style';
import ButtonComponent from './ButtonComponent';

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClick = function (e) {
      if (_this.props.onClick && !_this.props.loading) {
        _this.props.onClick(e);
      }
    };

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(ButtonGlobalStyle, null), React.createElement(ButtonComponent, Object.assign({}, this.props, {
        onClick: this.onClick
      }), this.props.children));
    }
  }]);

  return Button;
}(Component);

Button.defaulProps = {
  appearance: 'default'
};
export default Button;
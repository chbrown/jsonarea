'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var JSONArea = (function (_React$Component) {
  _inherits(JSONArea, _React$Component);

  function JSONArea(props) {
    _classCallCheck(this, JSONArea);

    _get(Object.getPrototypeOf(JSONArea.prototype), 'constructor', this).call(this, props);
    this.state = {
      json: JSON.stringify(this.props.value, null, '  '),
      error: undefined
    };
  }

  _createClass(JSONArea, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({
          json: JSON.stringify(nextProps.value, null, '  ')
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(ev) {
      var new_json = ev.target.value;
      try {
        var new_value = JSON.parse(new_json);
        this.setState({
          json: new_json,
          error: undefined
        });
        ev.target = { value: new_value }; // kind of a hack
        if (this.props.onChange) {
          this.props.onChange(ev);
        }
      } catch (exc) {
        this.setState({
          json: new_json,
          error: exc.message.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t')
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var result_className = this.state.error ? 'invalid' : 'valid';
      var result_content = this.state.error ? 'Invalid JSON: ' + this.state.error : 'Valid JSON';
      return _react2['default'].createElement(
        'div',
        { className: this.props.className },
        _react2['default'].createElement('textarea', { value: this.state.json, onChange: this.onChange.bind(this) }),
        _react2['default'].createElement(
          'div',
          { className: result_className },
          result_content
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      value: _react2['default'].PropTypes.any,
      onChange: _react2['default'].PropTypes.func
    },
    enumerable: true
  }]);

  return JSONArea;
})(_react2['default'].Component);

exports['default'] = JSONArea;
module.exports = exports['default'];


webpackHotUpdate(0,{

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(77);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(265);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavBar = function (_React$Component) {\n  _inherits(NavBar, _React$Component);\n\n  function NavBar(props) {\n    _classCallCheck(this, NavBar);\n\n    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));\n\n    _this.displayName = 'TGA Xchange';\n    return _this;\n  }\n\n  _createClass(NavBar, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'header' },\n        _react2.default.createElement(\n          'header',\n          null,\n          _react2.default.createElement(\n            'div',\n            { className: 'navigation' },\n            _react2.default.createElement(\n              _reactBootstrap.Navbar,\n              { inverse: true, fixedTop: true },\n              _react2.default.createElement(\n                _reactBootstrap.Navbar.Header,\n                null,\n                _react2.default.createElement(\n                  _reactBootstrap.Navbar.Brand,\n                  null,\n                  _react2.default.createElement(\n                    'a',\n                    { href: '#' },\n                    this.displayName\n                  )\n                ),\n                _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)\n              ),\n              _react2.default.createElement(\n                _reactBootstrap.Navbar.Collapse,\n                null,\n                _react2.default.createElement(\n                  _reactBootstrap.Nav,\n                  { pullRight: true },\n                  _react2.default.createElement(\n                    _reactBootstrap.NavItem,\n                    { eventKey: 1, href: '#' },\n                    'Login'\n                  ),\n                  _react2.default.createElement(\n                    _reactBootstrap.NavItem,\n                    { eventKey: 2, href: '#' },\n                    'Playbook'\n                  )\n                )\n              )\n            )\n          ),\n          _react2.default.createElement('div', null)\n        )\n      );\n    }\n  }]);\n\n  return NavBar;\n}(_react2.default.Component);\n// <img src=\"../images/headerphoto.jpg\" />\n\nexports.default = NavBar;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/components/Navbar.js\n ** module id = 264\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/components/Navbar.js?");

/***/ }

})
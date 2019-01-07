"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createI18NextProxy;

var _react = _interopRequireDefault(require("react"));

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function createI18NextProxy() {
  var I18NextProxy = function I18NextProxy(props) {
    var nextProxy = props.nextProxy,
        rest = _objectWithoutProperties(props, ["nextProxy"]);

    var NextProxy = nextProxy.value,
        next = nextProxy.next;
    var i18nOptions = props.fixture.i18nOptions || {
      fallbackLng: 'en',
      react: {
        wait: true
      }
    };

    var i18nInstance = _i18next.default.init(i18nOptions);

    return _react.default.createElement(_reactI18next.I18nextProvider, {
      i18n: i18nInstance
    }, _react.default.createElement(NextProxy, _extends({}, rest, {
      nextProxy: next()
    })));
  };

  return I18NextProxy;
}

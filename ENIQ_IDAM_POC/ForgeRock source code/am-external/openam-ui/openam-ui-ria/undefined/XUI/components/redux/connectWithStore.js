define(["exports", "react-redux", "react", "store/index"], function (exports, _reactRedux, _react, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var getDisplayName = function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  };

  /**
   * A HoC (higher-order component) that wraps another component to provide `this.props.store`.
   * Pass in your component and it will return the wrapped component.
   * @param {ReactComponent} WrappedComponent Component to wrap
   * @returns {ReactComponent} Wrapped component
   * @example
   * import connectWithStore from "components/redux/connectWithStore"
   * import store from "store/index";
   *
   * class MyReactComponent extends Component { ... }
   *
   * const mapStateToProps = (state) => { ... }
   * const mapDispatchToProps = (dispatch) => { ... )
   *
   * export default connectWithStore(MyReactComponent, mapStateToProps, mapDispatchToProps)
   * @see https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
   */
  var connectWithStore = function connectWithStore(WrappedComponent) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var ConnectedWrappedComponent = _reactRedux.connect.apply(undefined, args)(WrappedComponent);

    var component = function component(props) {
      return _react2.default.createElement(ConnectedWrappedComponent, _extends({}, props, { store: _index2.default }));
    };
    component.displayName = "connectWithStore(" + getDisplayName(WrappedComponent) + ")";
    component.WrappedComponent = WrappedComponent;

    return component;
  };

  exports.default = connectWithStore;
});
//# sourceMappingURL=connectWithStore.js.map

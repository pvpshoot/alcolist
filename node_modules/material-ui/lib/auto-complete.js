'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stylePropable = require('./mixins/style-propable');

var _stylePropable2 = _interopRequireDefault(_stylePropable);

var _keyCode = require('./utils/key-code');

var _keyCode2 = _interopRequireDefault(_keyCode);

var _textField = require('./text-field');

var _textField2 = _interopRequireDefault(_textField);

var _menu = require('./menus/menu');

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = require('./menus/menu-item');

var _menuItem2 = _interopRequireDefault(_menuItem);

var _divider = require('./divider');

var _divider2 = _interopRequireDefault(_divider);

var _popover = require('./popover/popover');

var _popover2 = _interopRequireDefault(_popover);

var _propTypes = require('./utils/prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AutoComplete = _react2.default.createClass({
  displayName: 'AutoComplete',

  propTypes: {
    anchorOrigin: _propTypes2.default.origin,
    animated: _react2.default.PropTypes.bool,
    dataSource: _react2.default.PropTypes.array,
    disableFocusRipple: _react2.default.PropTypes.bool,
    errorStyle: _react2.default.PropTypes.object,
    errorText: _react2.default.PropTypes.string,
    filter: _react2.default.PropTypes.func,
    floatingLabelText: _react2.default.PropTypes.string,
    fullWidth: _react2.default.PropTypes.bool,
    hintText: _react2.default.PropTypes.string,
    listStyle: _react2.default.PropTypes.object,
    menuCloseDelay: _react2.default.PropTypes.number,
    menuProps: _react2.default.PropTypes.object,
    menuStyle: _react2.default.PropTypes.object,
    onNewRequest: _react2.default.PropTypes.func,
    onUpdateInput: _react2.default.PropTypes.func,
    open: _react2.default.PropTypes.bool,
    searchText: _react2.default.PropTypes.string,
    showAllItems: _react2.default.PropTypes.bool,
    style: _react2.default.PropTypes.object,
    targetOrigin: _propTypes2.default.origin,
    touchTapCloseDelay: _react2.default.PropTypes.number,
    updateWhenFocused: _react2.default.PropTypes.bool
  },

  contextTypes: {
    muiTheme: _react2.default.PropTypes.object
  },

  mixins: [_stylePropable2.default],

  getDefaultProps: function getDefaultProps() {
    return {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      targetOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      animated: true,
      fullWidth: false,
      open: false,
      showAllItems: false,
      searchText: '',
      menuCloseDelay: 100,
      disableFocusRipple: true,
      updateWhenFocused: false,
      onUpdateInput: function onUpdateInput() {},
      onNewRequest: function onNewRequest() {},
      filter: function filter(searchText, key) {
        return key.includes(searchText);
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      searchText: this.props.searchText,
      open: this.props.open,
      anchorEl: null
    };
  },
  componentWillMount: function componentWillMount() {
    this.focusOnInput = false;
    this.requestsList = [];
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
      this.setState({
        searchText: nextProps.searchText
      });
    }
  },

  componentClickAway: function componentClickAway() {
    this._close();
    this.focusOnInput = false;
  },
  _open: function _open() {
    this.setState({
      open: true,
      anchorEl: _reactDom2.default.findDOMNode(this.refs.searchTextField)
    });
  },
  _close: function _close() {
    this.setState({
      open: false,
      anchorEl: null
    });
  },
  setValue: function setValue(textValue) {
    this.setState({
      searchText: textValue
    });
  },
  getValue: function getValue() {
    return this.state.searchText;
  },
  _updateRequests: function _updateRequests(searchText) {

    this.setState({
      searchText: searchText,
      open: true,
      anchorEl: _reactDom2.default.findDOMNode(this.refs.searchTextField)
    });

    this.focusOnInput = true;

    this.props.onUpdateInput(searchText, this.props.dataSource);
  },
  _handleItemTouchTap: function _handleItemTouchTap(e, child) {
    var _this = this;

    setTimeout(function () {
      _this._close();
    }, this.props.touchTapCloseDelay);

    var dataSource = this.props.dataSource;

    var chosenRequest = undefined,
        index = undefined,
        searchText = undefined;
    if (typeof dataSource[0] === 'string') {
      chosenRequest = this.requestsList[parseInt(child.key, 10)];
      index = dataSource.indexOf(chosenRequest);
      searchText = dataSource[index];
    } else {
      chosenRequest = child.key;
      index = dataSource.indexOf(dataSource.filter(function (item) {
        return chosenRequest === item.text;
      })[0]);
      searchText = chosenRequest;
    }

    this.setState({ searchText: searchText });

    this.props.onNewRequest(chosenRequest, index, dataSource);
  },
  _handleKeyDown: function _handleKeyDown(e) {
    switch (e.keyCode) {
      case _keyCode2.default.ESC:
        this._close();
        break;
      case _keyCode2.default.DOWN:
        if (this.focusOnInput && this.state.open) {
          e.preventDefault();
          this.focusOnInput = false;
          this._open();
        }
        break;
      default:
        break;
    }
  },
  render: function render() {
    var _this2 = this;

    var _props = this.props;
    var anchorOrigin = _props.anchorOrigin;
    var animated = _props.animated;
    var style = _props.style;
    var errorStyle = _props.errorStyle;
    var floatingLabelText = _props.floatingLabelText;
    var hintText = _props.hintText;
    var fullWidth = _props.fullWidth;
    var menuStyle = _props.menuStyle;
    var menuProps = _props.menuProps;
    var listStyle = _props.listStyle;
    var showAllItems = _props.showAllItems;
    var targetOrigin = _props.targetOrigin;

    var other = _objectWithoutProperties(_props, ['anchorOrigin', 'animated', 'style', 'errorStyle', 'floatingLabelText', 'hintText', 'fullWidth', 'menuStyle', 'menuProps', 'listStyle', 'showAllItems', 'targetOrigin']);

    var _state = this.state;
    var open = _state.open;
    var anchorEl = _state.anchorEl;

    var styles = {
      root: {
        display: 'inline-block',
        position: 'relative',
        width: this.props.fullWidth ? '100%' : 256
      },
      input: {},
      error: {},
      menu: {
        width: '100%'
      },
      list: {
        display: 'block',
        width: this.props.fullWidth ? '100%' : 256
      }
    };

    var textFieldProps = {
      style: this.mergeAndPrefix(styles.input, style),
      floatingLabelText: floatingLabelText,
      hintText: !hintText && !floatingLabelText ? '' : hintText,
      fullWidth: true,
      multiLine: false,
      errorStyle: this.mergeAndPrefix(styles.error, errorStyle)
    };

    var mergedRootStyles = this.mergeAndPrefix(styles.root, style);
    var mergedMenuStyles = this.mergeStyles(styles.menu, menuStyle);

    var displayFilter = showAllItems ? function () {
      return true;
    } : this.props.filter;
    var requestsList = [];

    this.props.dataSource.map(function (item) {
      switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
        case 'string':
          if (displayFilter(_this2.state.searchText, item, item)) {
            requestsList.push(item);
          }
          break;
        case 'object':
          if (typeof item.text === 'string') {
            if (displayFilter(_this2.state.searchText, item.text, item.value)) {
              requestsList.push(item);
            } else if (item.display) {
              requestsList.push(item);
            }
          }
          break;
      }
    });

    this.requestsList = requestsList;

    var menu = open && (this.state.searchText !== '' || showAllItems) && requestsList.length > 0 ? _react2.default.createElement(
      _menu2.default,
      _extends({}, menuProps, {
        ref: 'menu',
        key: 'dropDownMenu',
        autoWidth: false,
        onEscKeyDown: this._close,
        initiallyKeyboardFocused: false,
        onItemTouchTap: this._handleItemTouchTap,
        listStyle: this.mergeAndPrefix(styles.list, listStyle),
        style: mergedMenuStyles }),
      requestsList.map(function (request, index) {
        switch (typeof request === 'undefined' ? 'undefined' : _typeof(request)) {
          case 'string':
            return _react2.default.createElement(_menuItem2.default, {
              disableFocusRipple: _this2.props.disableFocusRipple,
              innerDivStyle: { overflow: 'hidden' },
              key: index,
              value: request,
              primaryText: request
            });
          case 'object':
            if (typeof request.text === 'string') {
              return _react2.default.cloneElement(request.value, {
                key: request.text,
                disableFocusRipple: _this2.props.disableFocusRipple
              });
            }
            return _react2.default.cloneElement(request, {
              key: index,
              disableFocusRipple: _this2.props.disableFocusRipple
            });
          default:
            return null;
        }
      })
    ) : null;

    var popoverStyle = undefined;
    if (anchorEl && fullWidth) {
      popoverStyle = { width: anchorEl.clientWidth };
    }

    return _react2.default.createElement(
      'div',
      { style: mergedRootStyles,
        onKeyDown: this._handleKeyDown },
      _react2.default.createElement(
        'div',
        {
          style: {
            width: '100%'
          } },
        _react2.default.createElement(_textField2.default, _extends({}, other, {
          ref: 'searchTextField',
          value: this.state.searchText,
          onEnterKeyDown: function onEnterKeyDown() {
            setTimeout(function () {
              _this2._close();
            }, _this2.props.touchTapCloseDelay);
            _this2.props.onNewRequest(_this2.state.searchText);
          },
          onChange: function onChange(e) {
            var searchText = e.target.value;
            _this2._updateRequests(searchText);
          },
          onBlur: function onBlur() {
            if (_this2.focusOnInput && open) _this2.refs.searchTextField.focus();
          },
          onFocus: function onFocus() {
            if (!open && (showAllItems || _this2.props.updateWhenFocused || _this2.state.searchText !== '')) {
              _this2._updateRequests(_this2.state.searchText);
            }
            _this2.focusOnInput = true;
          }

        }, textFieldProps))
      ),
      _react2.default.createElement(
        _popover2.default,
        {
          style: popoverStyle,
          anchorOrigin: anchorOrigin,
          targetOrigin: targetOrigin,
          open: open,
          anchorEl: anchorEl,
          useLayerForClickAway: false,
          onRequestClose: this._close },
        menu
      )
    );
  }
});

AutoComplete.Item = _menuItem2.default;
AutoComplete.Divider = _divider2.default;

exports.default = AutoComplete;
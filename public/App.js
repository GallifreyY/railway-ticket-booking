"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var initialTravelers = [// {
  //   id: 1, status: 'New', name: 'Ravan',
  //   created: new Date(), number: undefined
  // }
];

var Instructions = /*#__PURE__*/function (_React$Component) {
  _inherits(Instructions, _React$Component);

  var _super = _createSuper(Instructions);

  function Instructions() {
    _classCallCheck(this, Instructions);

    return _super.apply(this, arguments);
  }

  _createClass(Instructions, [{
    key: "render",
    value: function render() {
      //render is a constructor
      return /*#__PURE__*/React.createElement("div", null, "Please input your name and phone number to complete the ticket booking.");
    }
  }]);

  return Instructions;
}(React.Component);

var TravellerRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(TravellerRow, _React$Component2);

  var _super2 = _createSuper(TravellerRow);

  function TravellerRow() {
    _classCallCheck(this, TravellerRow);

    return _super2.apply(this, arguments);
  }

  _createClass(TravellerRow, [{
    key: "render",
    value: function render() {
      var traveller = this.props.traveller;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, traveller.id), /*#__PURE__*/React.createElement("td", null, traveller.status), /*#__PURE__*/React.createElement("td", null, traveller.name), /*#__PURE__*/React.createElement("td", null, traveller.created.toDateString()), /*#__PURE__*/React.createElement("td", null, traveller.number));
    }
  }]);

  return TravellerRow;
}(React.Component);

var DisplayTraveller = /*#__PURE__*/function (_React$Component3) {
  _inherits(DisplayTraveller, _React$Component3);

  var _super3 = _createSuper(DisplayTraveller);

  function DisplayTraveller() {
    _classCallCheck(this, DisplayTraveller);

    return _super3.apply(this, arguments);
  }

  _createClass(DisplayTraveller, [{
    key: "render",
    value: function render() {
      var travellerRows = this.props.travellers.map(function (traveller) {
        return /*#__PURE__*/React.createElement(TravellerRow, {
          key: traveller.id,
          traveller: traveller
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "bordered-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Number"))), /*#__PURE__*/React.createElement("tbody", null, travellerRows));
    }
  }]);

  return DisplayTraveller;
}(React.Component);

var AddTraveller = /*#__PURE__*/function (_React$Component4) {
  _inherits(AddTraveller, _React$Component4);

  var _super4 = _createSuper(AddTraveller);

  function AddTraveller() {
    var _this;

    _classCallCheck(this, AddTraveller);

    _this = _super4.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddTraveller, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.addTraveller;
      var traveller = {
        name: form.name.value,
        number: form.number.value,
        status: 'New'
      };
      this.props.createTraveller(traveller);
      form.name.value = "";
      form.number.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "addTraveller",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "number",
        placeholder: "number"
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return AddTraveller;
}(React.Component);

var DeleteTraveller = /*#__PURE__*/function (_React$Component5) {
  _inherits(DeleteTraveller, _React$Component5);

  var _super5 = _createSuper(DeleteTraveller);

  function DeleteTraveller() {
    var _this2;

    _classCallCheck(this, DeleteTraveller);

    _this2 = _super5.call(this);
    _this2.handleDelete = _this2.handleDelete.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(DeleteTraveller, [{
    key: "handleDelete",
    value: function handleDelete(e) {
      e.preventDefault();
      var form = document.forms.deleteTraveller;
      var traveller = {
        id: form.id.value
      };
      this.props.deleteTraveller(traveller);
      form.id.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "deleteTraveller",
        onSubmit: this.handleDelete
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "id",
        placeholder: "id"
      }), /*#__PURE__*/React.createElement("button", null, "Delete"));
    }
  }]);

  return DeleteTraveller;
}(React.Component);

var TravellerList = /*#__PURE__*/function (_React$Component6) {
  _inherits(TravellerList, _React$Component6);

  var _super6 = _createSuper(TravellerList);

  function TravellerList() {
    var _this3;

    _classCallCheck(this, TravellerList);

    _this3 = _super6.call(this);
    _this3.state = {
      travellers: []
    };
    _this3.createTraveller = _this3.createTraveller.bind(_assertThisInitialized(_this3));
    _this3.deleteTraveller = _this3.deleteTraveller.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(TravellerList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this4 = this;

      setTimeout(function () {
        _this4.setState({
          travellers: initialTravelers
        });
      }, 500);
    }
  }, {
    key: "createTraveller",
    value: function createTraveller(traveller) {
      if (this.state.travellers.length < 25) {
        traveller.id = this.state.travellers.length + 1;
        traveller.created = new Date();
        var newTravellerList = this.state.travellers.slice();
        newTravellerList.push(traveller);
        this.setState({
          travellers: newTravellerList
        });
      }
    }
  }, {
    key: "deleteTraveller",
    value: function deleteTraveller(traveller) {
      //copy array
      var newAray = this.state.travellers.slice(); //delete element by index

      newAray.splice(traveller.id - 1, 1);

      for (var i = traveller.id - 1; i < newAray.length; i++) {
        newAray[i].id = newAray[i].id - 1;
      }

      this.setState({
        travellers: newAray
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Railway Ticket System"), /*#__PURE__*/React.createElement(Instructions, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(DisplayTraveller, {
        travellers: this.state.travellers
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddTraveller, {
        createTraveller: this.createTraveller
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(DeleteTraveller, {
        deleteTraveller: this.deleteTraveller
      }));
    }
  }]);

  return TravellerList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(TravellerList, null);
ReactDOM.render(element, document.getElementById('contents'));
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var CustomerContext_1 = require("context/CustomerContext");
var useToggle_1 = require("Hooks/useToggle");
var antd_1 = require("antd");
var react_router_1 = require("react-router");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Overview_1 = require("./Overview");
var Comments_1 = require("./Comments");
var Transactions_1 = require("./Transactions");
var Mail_1 = require("./Mail");
var Statements_1 = require("./Statements");
var tabs = function (_a) {
    var currents = _a.currents;
    switch (currents) {
        case 'overview':
            return react_1["default"].createElement(Overview_1["default"], null);
        case 'comments':
            return react_1["default"].createElement(Comments_1["default"], null);
        case 'transactions':
            return react_1["default"].createElement(Transactions_1["default"], null);
        case 'mails':
            return react_1["default"].createElement(Mail_1["default"], null);
        case 'statement':
            return react_1["default"].createElement(Statements_1["default"], null);
        default:
            return react_1["default"].createElement(Overview_1["default"], null);
    }
};
var StyledLayout = styled_components_1["default"](antd_1.Layout)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: #fff;\n     border-left: 1px solid #eee;\n"], ["\n    background-color: #fff;\n     border-left: 1px solid #eee;\n"])));
var CustomerSidebar = function (_a) {
    var handleClicked = _a.handleClicked, current = _a.current;
    var _b = react_1["default"].useContext(useToggle_1.ToggleContext), collapsed = _b.value, toggleHandle = _b.toggleHandle;
    var _c = react_1["default"].useContext(CustomerContext_1.CustomerData), customer = _c.Customer, loading = _c.loading;
    var navigate = react_router_1.useNavigate();
    return (react_1["default"].createElement(StyledLayout, null,
        react_1["default"].createElement(StyledLayout, null, (current === 'overview' ||
            current === 'comments' ||
            current === 'transactions' ||
            current === 'mails' ||
            current === 'statement') && react_1["default"].createElement(react_1["default"].Fragment, null, tabs({ currents: current })))));
};
exports["default"] = CustomerSidebar;
var templateObject_1;

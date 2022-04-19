"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var antd_1 = require("antd");
var moment_1 = require("moment");
var ReactHookForms_1 = require("context/ReactHookForms");
var react_1 = require("react");
var TextArea_1 = require("antd/lib/input/TextArea");
var material_1 = require("@mui/material");
var utilityThemes_1 = require("Themes/utilityThemes");
var CustomerContext_1 = require("context/CustomerContext");
var Comments = function () {
    var _a = react_1["default"].useState([]), data = _a[0], setData = _a[1];
    var _b = react_1["default"].useContext(CustomerContext_1.CustomerData), Customer = _b.Customer, loading = _b.loading;
    var _c = react_1["default"].useContext(ReactHookForms_1.ReactHookForm), register = _c.register, handleSubmit = _c.handleSubmit, reset = _c.reset, control = _c.control, Controller = _c.Controller, watch = _c.watch, errors = _c.errors;
    console.log('Comment', Customer.comments);
    console.log('Comments', data);
    var onSubmit = function (e) {
        console.log('data', e);
    };
    react_1["default"].useEffect(function () {
        if (Customer) {
            setData(Customer.comments);
        }
    }, []);
    var momentYYMMDD = function (date) { return moment_1["default"]().format('YYYY-MM-DD'); };
    var momentYYMMDDHHMM = function (date) { return moment_1["default"]().format('HH:mm'); };
    var momentAMPM = function (date) { return moment_1["default"]().format('a'); };
    console.log();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("form", { onSubmit: handleSubmit(function (e) { return onSubmit(e); }), style: {
                width: '50%',
                position: "relative",
                top: 50,
                left: 100
            } }, (data === null || data === void 0 ? void 0 : data.length) > 0 ? (react_1["default"].createElement(antd_1.Timeline, null, (data === null || data === void 0 ? void 0 : data.length) === 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { style: { display: "flex", flexFlow: "column", gap: "5px" } },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Controller, { control: control, name: "comment", rules: { required: true }, render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(TextArea_1["default"], __assign({ status: errors.comment ? "error" : "", showCount: true, maxLength: 100 }, field)));
                        } }),
                    react_1["default"].createElement(material_1.FormHelperText, null, "(For internal use only)")),
                react_1["default"].createElement(material_1.Button, { type: "submit", variant: 'contained', size: "small", sx: { width: '20%' } }, "Submit")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(antd_1.Timeline.Item, null,
                react_1["default"].createElement(antd_1.Card, null,
                    react_1["default"].createElement("div", { style: { display: "flex", flexFlow: "column", gap: "5px" } },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Controller, { control: control, name: "name", rules: { required: true }, render: function (_a) {
                                    var field = _a.field;
                                    return (react_1["default"].createElement(TextArea_1["default"], __assign({ showCount: true, maxLength: 100 }, field)));
                                } }),
                            react_1["default"].createElement(material_1.FormHelperText, null, "(For internal use only)")),
                        react_1["default"].createElement(material_1.Button, { type: "submit", variant: 'contained', size: "small", sx: { width: '20%' } }, "Submit")))), data === null || data === void 0 ? void 0 :
            data.map(function (item, index) { return (react_1["default"].createElement(antd_1.Timeline.Item, { key: index },
                react_1["default"].createElement("p", null, item.comment),
                react_1["default"].createElement(utilityThemes_1.Item, { fontWeight: '400' },
                    item.createdAt,
                    ' by ',
                    react_1["default"].createElement(utilityThemes_1.Item, { fontWeight: '500' }, item.createdBy)))); })))))
            : (react_1["default"].createElement(antd_1.Spin, null)))));
};
exports["default"] = Comments;

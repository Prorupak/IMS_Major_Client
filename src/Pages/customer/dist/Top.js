"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var mentions_1 = require("antd/lib/mentions");
var ReactHookForms_1 = require("context/ReactHookForms");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledForm = styled_components_1["default"](antd_1.Form)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n .ant-row.ant-form-item {\n      gap: 40px;\n }\n"], ["\n .ant-row.ant-form-item {\n      gap: 40px;\n }\n"])));
var StyledInput = styled_components_1["default"](antd_1.Input)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var Top = function () {
    var _a = react_1["default"].useContext(ReactHookForms_1.ReactHookForm), errors = _a.errors, Controller = _a.Controller, control = _a.control;
    return (react_1["default"].createElement(StyledForm, null,
        react_1["default"].createElement(antd_1.Form.Item, { label: "Field A", validateStatus: errors.PrimaryContactSalutation ? "error" : "success" },
            react_1["default"].createElement(Controller, { control: control, name: "primaryContactSalutation", rules: true, render: function (_a) {
                    var field = _a.field;
                    return (react_1["default"].createElement(antd_1.Select, __assign({ "aria-errormessage": 'error', placeholder: "Salutation" }, field, { allowClear: true }),
                        react_1["default"].createElement(mentions_1.Option, { value: "Mr." }, "Mr."),
                        react_1["default"].createElement(mentions_1.Option, { value: "Mrs." }, "Mrs."),
                        react_1["default"].createElement(mentions_1.Option, { value: "Miss." }, "Miss."),
                        react_1["default"].createElement(mentions_1.Option, { value: "Ms" }, "Ms."),
                        react_1["default"].createElement(mentions_1.Option, { value: "Dr." }, "Dr.")));
                } })),
        react_1["default"].createElement(antd_1.Form.Item, { label: "Field B" },
            react_1["default"].createElement(Controller, { control: control, name: "primaryContactSalutation", render: function (_a) {
                    var field = _a.field;
                    return (react_1["default"].createElement(StyledInput, null));
                } }),
            "               ")));
};
exports["default"] = Top;
var templateObject_1, templateObject_2;

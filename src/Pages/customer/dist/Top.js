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
var error_message_1 = require("@hookform/error-message");
var antd_1 = require("antd");
var mentions_1 = require("antd/lib/mentions");
var ReactHookForms_1 = require("context/ReactHookForms");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var MaterialUI_1 = require("Themes/MaterialUI");
var utilityThemes_1 = require("Themes/utilityThemes");
var StyledForm = styled_components_1["default"](antd_1.Form)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ntext-align: left;\n .ant-row.ant-form-item {\n      gap: 30px;\n      text-align: left;\n }\n .ant-form-item-label > label {\n      width: 140px;\n }\n .ant-form-item-explain-error {\n      font-size: 12px;\n }\n\n .ant-select-selection-placeholder {\n    padding-right: 18px;\n    font-size: 12px;\n}\n\n.ant-input {\n     font-size: 12px;\n}\n"], ["\ntext-align: left;\n .ant-row.ant-form-item {\n      gap: 30px;\n      text-align: left;\n }\n .ant-form-item-label > label {\n      width: 140px;\n }\n .ant-form-item-explain-error {\n      font-size: 12px;\n }\n\n .ant-select-selection-placeholder {\n    padding-right: 18px;\n    font-size: 12px;\n}\n\n.ant-input {\n     font-size: 12px;\n}\n"])));
var StyledInput = styled_components_1["default"](antd_1.Input)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var Top = function () {
    var _a = react_1["default"].useContext(ReactHookForms_1.ReactHookForm), errors = _a.errors, Controller = _a.Controller, control = _a.control;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(StyledForm, null,
            react_1["default"].createElement(antd_1.Form.Item, { style: { marginBottom: "-28px" }, label: react_1["default"].createElement(MaterialUI_1.TooltipMui, { title: "The name you enter here will be for your primary contact." },
                    react_1["default"].createElement(utilityThemes_1.Item, { color: "var(--color-primary-dark)", fontSize: "14px", fontWeight: "medium", height: "65%", width: "72%", margin: "0px 0px", style: {
                            borderBottom: "1px dashed #969696"
                        } }, "Primary Name")), colon: false },
                react_1["default"].createElement(antd_1.Form, { layout: "inline", style: { display: "flex", flexFlow: "row", gap: 0 }, wrapperCol: { span: 0 } },
                    react_1["default"].createElement(antd_1.Form.Item, { validateStatus: errors.PrimaryContactSalutation ? "error" : "success", help: (react_1["default"].createElement(error_message_1.ErrorMessage, { errors: errors, name: "PrimaryContactSalutation" })), colon: false },
                        react_1["default"].createElement(Controller, { control: control, name: "primaryContactSalutation", render: function (_a) {
                                var field = _a.field;
                                return (react_1["default"].createElement(antd_1.Select, __assign({ placeholder: "Salutation" }, field, { allowClear: true }),
                                    react_1["default"].createElement(mentions_1.Option, { value: "Mr." }, "Mr."),
                                    react_1["default"].createElement(mentions_1.Option, { value: "Mrs." }, "Mrs."),
                                    react_1["default"].createElement(mentions_1.Option, { value: "Miss." }, "Miss."),
                                    react_1["default"].createElement(mentions_1.Option, { value: "Ms" }, "Ms."),
                                    react_1["default"].createElement(mentions_1.Option, { value: "Dr." }, "Dr.")));
                            } })),
                    react_1["default"].createElement(antd_1.Form.Item, { validateStatus: errors.FirstName ? "error" : "success", help: react_1["default"].createElement(error_message_1.ErrorMessage, { errors: errors, name: "FirstName" }) },
                        react_1["default"].createElement(Controller, { render: function (_a) {
                                var field = _a.field;
                                return (react_1["default"].createElement(antd_1.Input, __assign({ autoComplete: 'off', placeholder: 'First Name', id: errors.FirstName ? "error" : "success", status: errors.FirstName ? "error" : "", allowClear: true }, field, { style: { width: "200px" } })));
                            }, name: "FirstName", control: control, rules: {
                                pattern: {
                                    value: /^[a-zA-Z]*$/,
                                    message: "only letters"
                                }
                            }, defaultValue: "" })),
                    react_1["default"].createElement(antd_1.Form.Item, { validateStatus: errors.LastName ? "error" : "success", help: react_1["default"].createElement(error_message_1.ErrorMessage, { errors: errors, name: "LastName" }) },
                        react_1["default"].createElement(Controller, { render: function (_a) {
                                var field = _a.field;
                                return (react_1["default"].createElement(antd_1.Input, __assign({ autoComplete: 'off', placeholder: 'Last Name', id: errors.LastName ? "error" : "success", status: errors.LastName ? "error" : "", allowClear: true }, field, { style: { width: "200px" } })));
                            }, name: "LastName", control: control, rules: {
                                pattern: {
                                    value: /^[a-zA-Z]*$/,
                                    message: "only letters"
                                }
                            }, defaultValue: "" })))),
            react_1["default"].createElement(antd_1.Form.Item, { validateStatus: errors.company ? "error" : "success", label: "Company", colon: false, help: react_1["default"].createElement(error_message_1.ErrorMessage, { errors: errors, name: "company" }) },
                react_1["default"].createElement(Controller, { render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(antd_1.Input, __assign({ autoComplete: 'off', placeholder: '', id: errors.company ? "error" : "success", status: errors.company ? "error" : "", allowClear: true }, field, { style: { width: "320px" } })));
                    }, name: "company", control: control, rules: {
                        pattern: {
                            value: /^[a-zA-Z]*$/,
                            message: "only letters"
                        }
                    }, defaultValue: "" })),
            react_1["default"].createElement(antd_1.Form.Item, { validateStatus: errors.customerDisplayName ? "error" : "success", label: react_1["default"].createElement(MaterialUI_1.TooltipMui, { title: "This name will be displayed on the transactions you create for this customer" },
                    react_1["default"].createElement(utilityThemes_1.Item, { fontSize: "14px", fontWeight: "medium", height: "115%", width: "90%", color: "var(--color-required)", margin: "0px 0px", style: {
                            borderBottom: "1px dashed #969696",
                            // paddingBottom: "2px",
                            textAlign: "left",
                            textDecoration: ""
                        } },
                        "Customer Display",
                        react_1["default"].createElement("br", null),
                        "Name")), colon: false, help: react_1["default"].createElement(error_message_1.ErrorMessage, { errors: errors, name: "customerDisplayName" }) },
                react_1["default"].createElement(Controller, { render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(antd_1.Input, __assign({ autoComplete: 'off', placeholder: '', id: errors.customerDisplayName ? "error" : "success", status: errors.customerDisplayName ? "error" : "", allowClear: true }, field, { style: { width: "320px" } })));
                    }, name: "customerDisplayName", control: control, rules: {
                        required: "This Field is required.",
                        pattern: {
                            value: /^[a-zA-Z]*$/,
                            message: "only letters"
                        }
                    }, defaultValue: "" })),
            react_1["default"].createElement(antd_1.Form.Item, { validateStatus: errors.Email ? "error" : "success", label: react_1["default"].createElement(utilityThemes_1.Item, { fontSize: "14px", fontWeight: "medium", height: "115%", width: "90%", color: "var(--color-primary-dark)", margin: "0px 0px", style: {
                        textAlign: "left",
                        textDecoration: ""
                    } }, "Email"), colon: false, help: react_1["default"].createElement(error_message_1.ErrorMessage, { errors: errors, name: "Email" }) },
                react_1["default"].createElement(Controller, { render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(antd_1.Input, __assign({ autoComplete: 'off', placeholder: '', id: errors.Email ? "error" : "success", status: errors.Email ? "error" : "", allowClear: true }, field, { type: "email", style: { width: "320px" } })));
                    }, name: "Email", control: control, rules: {
                        pattern: {
                            value: /^[0-9]/,
                            message: "only Numbers are allowed."
                        }
                    }, defaultValue: "" })),
            react_1["default"].createElement(antd_1.Form.Item, { validateStatus: errors.phone ? "error" : "success", label: react_1["default"].createElement(utilityThemes_1.Item, { fontSize: "14px", fontWeight: "medium", height: "115%", width: "90%", color: "var(--color-primary-dark)", margin: "0px 0px", style: {
                        textAlign: "left",
                        textDecoration: ""
                    } }, "Customer Phone"), colon: false, help: react_1["default"].createElement(error_message_1.ErrorMessage, { errors: errors, name: "phone" }) },
                react_1["default"].createElement(Controller, { render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(antd_1.Input, __assign({ autoComplete: 'off', placeholder: '', id: errors.phone ? "error" : "success", status: errors.phone ? "error" : "", allowClear: true }, field, { style: { width: "320px" } })));
                    }, name: "phone", control: control, rules: {
                        pattern: {
                            value: /^[0-9]/,
                            message: "only Numbers are allowed."
                        }
                    }, defaultValue: "" })),
            react_1["default"].createElement(antd_1.Form.Item, { validateStatus: errors.website ? "error" : "success", label: react_1["default"].createElement(utilityThemes_1.Item, { fontSize: "14px", fontWeight: "medium", height: "115%", width: "90%", color: "var(--color-primary-dark)", margin: "0px 0px", style: {
                        textAlign: "left",
                        textDecoration: ""
                    } }, "website"), colon: false, help: react_1["default"].createElement(error_message_1.ErrorMessage, { errors: errors, name: "website" }) },
                react_1["default"].createElement(Controller, { render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(antd_1.Input, __assign({ autoComplete: 'off', placeholder: '', id: errors.website ? "error" : "success", status: errors.website ? "error" : "", allowClear: true }, field, { style: { width: "320px" } })));
                    }, name: "website", control: control, rules: {
                        pattern: {
                            value: /^[0-9]/,
                            message: "Please Enter the valid website"
                        }
                    }, defaultValue: "" })),
            react_1["default"].createElement(antd_1.Form.Item, { validateStatus: errors.paymentTerms ? "error" : "success", label: react_1["default"].createElement(utilityThemes_1.Item, { fontSize: "14px", fontWeight: "medium", height: "115%", width: "90%", color: "var(--color-primary-dark)", margin: "0px 0px", style: {
                        textAlign: "left",
                        textDecoration: ""
                    } }, "Payment Terms"), colon: false, help: react_1["default"].createElement(error_message_1.ErrorMessage, { errors: errors, name: "paymentTerms" }) },
                react_1["default"].createElement(Controller, { render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(antd_1.Select, __assign({ placeholder: "Payment Terms" }, field, { style: { width: "320px" }, id: errors.paymentTerms ? "error" : "success", allowClear: true }),
                            react_1["default"].createElement(mentions_1.Option, { value: "Mr." }, "Mr."),
                            react_1["default"].createElement(mentions_1.Option, { value: "Mrs." }, "Mrs."),
                            react_1["default"].createElement(mentions_1.Option, { value: "Miss." }, "Miss."),
                            react_1["default"].createElement(mentions_1.Option, { value: "Ms" }, "Ms."),
                            react_1["default"].createElement(mentions_1.Option, { value: "Dr." }, "Dr.")));
                    }, name: "paymentTerms", control: control, defaultValue: "" })))));
};
exports["default"] = Top;
var templateObject_1, templateObject_2;

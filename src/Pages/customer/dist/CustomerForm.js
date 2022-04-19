"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var antd_1 = require("antd");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var AddCustomer_1 = require("./AddCustomer");
var Address_1 = require("./Address");
var ContactPersons_1 = require("./ContactPersons");
var OtherDetails_1 = require("./OtherDetails");
var Remarks_1 = require("./Remarks");
var Top_1 = require("./Top");
var TabPane = antd_1.Tabs.TabPane;
var StyledLayout = styled_components_1["default"](antd_1.Layout)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #fafafa;\n  width: 100%;\n"], ["\n  background: #fafafa;\n  width: 100%;\n"])));
var StyledCard = styled_components_1["default"](antd_1.Card)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nbackground-color: #fafafa;\nwidth: 100%;\n\n"], ["\nbackground-color: #fafafa;\nwidth: 100%;\n\n"])));
var CustomerForm = function () {
    return (react_1["default"].createElement(AddCustomer_1["default"], null,
        react_1["default"].createElement(StyledLayout, null,
            react_1["default"].createElement(StyledLayout, null,
                react_1["default"].createElement(StyledLayout.Content, null,
                    react_1["default"].createElement(StyledCard, null,
                        react_1["default"].createElement(Top_1["default"], null)))),
            react_1["default"].createElement(StyledLayout, null,
                react_1["default"].createElement(StyledLayout.Content, null,
                    react_1["default"].createElement(antd_1.Tabs, { defaultActiveKey: "1" },
                        react_1["default"].createElement(TabPane, { tab: "Other Details", key: "1" },
                            react_1["default"].createElement(StyledCard, null,
                                react_1["default"].createElement(OtherDetails_1["default"], null))),
                        react_1["default"].createElement(TabPane, { tab: "Address", key: "2" },
                            react_1["default"].createElement(StyledCard, null,
                                "bottom",
                                react_1["default"].createElement(Address_1["default"], null))),
                        react_1["default"].createElement(TabPane, { tab: "Contact Persons", key: "3" },
                            react_1["default"].createElement(StyledCard, null,
                                react_1["default"].createElement(ContactPersons_1["default"], null))),
                        react_1["default"].createElement(TabPane, { tab: "Remarks", key: "4" },
                            react_1["default"].createElement(StyledCard, null,
                                react_1["default"].createElement(Remarks_1["default"], null)))))))));
};
exports["default"] = CustomerForm;
var templateObject_1, templateObject_2;

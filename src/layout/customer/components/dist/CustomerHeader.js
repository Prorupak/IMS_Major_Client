"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var antd_1 = require("antd");
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var react_router_1 = require("react-router");
var PageTips_1 = require("Components/shared/PageTips");
var CustomerContext_1 = require("context/CustomerContext");
var styled_components_1 = require("styled-components");
var layout_1 = require("antd/lib/layout/layout");
var StyledHeader = styled_components_1["default"](layout_1.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n background-color: #fff;\n padding: 0px;\n height: 0px;\n"], ["\n background-color: #fff;\n padding: 0px;\n height: 0px;\n"])));
var CustomerHeader = function () {
    var _a = react_1["default"].useContext(CustomerContext_1.CustomerData), customer = _a.Customer, loading = _a.loading;
    var navigate = react_router_1.useNavigate();
    return (react_1["default"].createElement(StyledHeader, null,
        react_1["default"].createElement(antd_1.PageHeader, { ghost: false, onBack: function () { return window.history.back(); }, title: "Customers", style: {
                padding: "8px 15px",
                borderBottom: "1px solid rgba(0, 0, 0, 0.09)"
            }, extra: [
                react_1["default"].createElement(antd_1.Button, { size: "small", type: "primary", onClick: function () { return navigate("/customer/add"); }, style: {
                        borderRadius: "5px",
                        marginLeft: "3px"
                    }, key: "3" },
                    react_1["default"].createElement(icons_1.PlusOutlined, null),
                    react_1["default"].createElement("span", { style: {
                            marginLeft: "3px"
                        } }, "New")),
                react_1["default"].createElement(antd_1.Button, { size: "small", style: {
                        borderRadius: "5px",
                        backgroundColor: "#f6f6f6"
                    }, key: "2" },
                    react_1["default"].createElement(icons_1.MenuOutlined, null)),
                react_1["default"].createElement(antd_1.Divider, { type: "vertical", style: {
                        height: "20px",
                        margin: "0px 5px",
                        borderLeft: "2px solid rgba(0, 0, 0, 0.1)"
                    }, key: "4" }),
                react_1["default"].createElement(PageTips_1["default"], { key: "5" }),
            ] })));
};
exports["default"] = CustomerHeader;
var templateObject_1;

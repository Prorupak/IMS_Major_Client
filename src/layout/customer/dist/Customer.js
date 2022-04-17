"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var antd_1 = require("antd");
var react_router_1 = require("react-router");
var CustomerContext_1 = require("context/CustomerContext");
var useToggle_1 = require("Hooks/useToggle");
var CustomerHeader_1 = require("layout/customer/components/CustomerHeader");
var CustomerSidebar_1 = require("./components/CustomerSidebar");
var Sider = antd_1.Layout.Sider, Content = antd_1.Layout.Content, Header = antd_1.Layout.Header;
var StyledLayout = styled_components_1["default"](antd_1.Layout)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n background-color: #f6f6f6;\n height: 100%;\n \n"], ["\n background-color: #f6f6f6;\n height: 100%;\n \n"])));
var StyledSubLayout = styled_components_1["default"](antd_1.Layout)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n background-color: #fff;\n"], ["\n background-color: #fff;\n"])));
var StyledContent = styled_components_1["default"](Content)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n background-color: #fff;\n overflow: scroll;\n\n"], ["\n background-color: #fff;\n overflow: scroll;\n\n"])));
var StyledHeader = styled_components_1["default"](Header)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n background-color: #fff;\n padding: 0px;\n height: 0px;\n"], ["\n background-color: #fff;\n padding: 0px;\n height: 0px;\n"])));
var StyledSider = styled_components_1["default"](Sider)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n background-color: #fff;\n  position: relative;\n top: 58px;\n overflow-y: scroll;\n\n"], ["\n background-color: #fff;\n  position: relative;\n top: 58px;\n overflow-y: scroll;\n\n"])));
var Customer = function (_a) {
    var children = _a.children;
    var _b = react_1["default"].useContext(CustomerContext_1.CustomerData), customer = _b.Customer, loading = _b.loading;
    var _c = react_1["default"].useContext(useToggle_1.ToggleContext), collapsed = _c.value, toggleHandle = _c.toggleHandle;
    var _d = react_1["default"].useState('overview'), current = _d[0], setCurrent = _d[1];
    var handleClicked = function (event) {
        console.log('click', event);
        setCurrent(event.key);
    };
    console.log("customer", customer);
    var navigate = react_router_1.useNavigate();
    return (react_1["default"].createElement(react_1["default"].Fragment, null, loading ? (react_1["default"].createElement(antd_1.Spin, null)) : customer ? (react_1["default"].createElement(StyledLayout, null, loading ? (react_1["default"].createElement("div", null, "Loading...")) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(StyledHeader, null,
            react_1["default"].createElement(CustomerHeader_1["default"], null)),
        react_1["default"].createElement(StyledSubLayout, null,
            react_1["default"].createElement(StyledContent, null, children),
            react_1["default"].createElement(StyledSider, { width: collapsed ? "1100px" : "0px" },
                react_1["default"].createElement(CustomerSidebar_1["default"], { handleClicked: handleClicked, current: current }))))))) : (react_1["default"].createElement("p", null, "Loading......."))));
};
exports["default"] = Customer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

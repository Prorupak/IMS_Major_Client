"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var CustomerContext_1 = require("context/CustomerContext");
var useToggle_1 = require("Hooks/useToggle");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_router_1 = require("react-router");
var react_1 = require("react");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var Overview_1 = require("./Overview");
var Comments_1 = require("./Comments");
var Transactions_1 = require("./Transactions");
var Mail_1 = require("./Mail");
var Statements_1 = require("./Statements");
var StyledMenuAntd = styled_components_1["default"](antd_1.Menu)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n && {\n  .ant-menu-horizontal {\n   padding: var(--spacing-5) var(--spacing-10);\n   font-size: var(--font-size-14);\n   background-color: red;\n  }\n }\n position: relative;\n left: -10px;\n bottom: -3px;\n"], ["\n && {\n  .ant-menu-horizontal {\n   padding: var(--spacing-5) var(--spacing-10);\n   font-size: var(--font-size-14);\n   background-color: red;\n  }\n }\n position: relative;\n left: -10px;\n bottom: -3px;\n"])));
var StyledLayout = styled_components_1["default"](antd_1.Layout)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n     background-color: #fff;\n border-left: 1px solid #eee;\n\n"], ["\n     background-color: #fff;\n border-left: 1px solid #eee;\n\n"])));
var StyledAntdItemGroup = styled_components_1["default"](antd_1.Menu.ItemGroup)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n font-weight: 600;\n"], ["\n font-weight: 600;\n"])));
var menu = (react_1["default"].createElement(antd_1.Menu, null,
    react_1["default"].createElement(antd_1.Menu.Item, { key: "0" },
        react_1["default"].createElement(react_router_dom_1.Link, { to: "#" }, "Email Customer")),
    react_1["default"].createElement(antd_1.Menu.Divider, null),
    react_1["default"].createElement(antd_1.Menu.Item, { key: "3" }, "Mark as Inactive"),
    react_1["default"].createElement(antd_1.Menu.Item, { key: "3" }, "Delete")));
var newTrans = (react_1["default"].createElement(antd_1.Menu, null,
    react_1["default"].createElement(StyledAntdItemGroup, { title: "SALES" },
        react_1["default"].createElement(react_router_dom_1.Link, { to: "#" },
            react_1["default"].createElement(antd_1.Menu.Item, { key: "0" }, "Customer Payment")),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "#" },
            react_1["default"].createElement(antd_1.Menu.Item, { key: "0" }, "Sales Order")),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "#" },
            react_1["default"].createElement(antd_1.Menu.Item, { key: "0" }, "Package")))));
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
var CustomerSidebar = function (_a) {
    var handleClicked = _a.handleClicked, current = _a.current;
    var _b = react_1["default"].useContext(useToggle_1.ToggleContext), collapsed = _b.value, toggleHandle = _b.toggleHandle;
    var _c = react_1["default"].useContext(CustomerContext_1.CustomerData), customer = _c.Customer, loading = _c.loading;
    var navigate = react_router_1.useNavigate();
    return (react_1["default"].createElement(StyledLayout, null,
        react_1["default"].createElement(antd_1.PageHeader, { className: "site-page-header-responsive", onBack: toggleHandle, style: {
                padding: "10px 10px 0px 10px",
                textTransform: "capitalize"
            }, title: customer.customerDisplayName, avatar: {
                src: "https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png",
                alt: "avatar"
            }, extra: [
                react_1["default"].createElement(antd_1.Button, { onClick: function () {
                        navigate("/customer/" + customer.id);
                    }, size: "small", style: {
                        borderRadius: "5px"
                    }, key: "2" }, "Edit"),
                react_1["default"].createElement(material_1.Tooltip, { title: "Attach Files" },
                    react_1["default"].createElement(antd_1.Button, { onClick: function () {
                            navigate("/customer/" + customer.map(function (item) { return item.id; }));
                        }, size: "small", style: {
                            borderRadius: "5px"
                        }, key: "2" },
                        react_1["default"].createElement(icons_1.LinkOutlined, null))),
                react_1["default"].createElement(antd_1.Dropdown, { overlay: newTrans, trigger: ["click"] },
                    react_1["default"].createElement(antd_1.Button, { size: "small", type: "primary", style: {
                            borderRadius: "5px",
                            marginLeft: "3px"
                        }, key: "3" },
                        "New Transaction",
                        react_1["default"].createElement("span", { style: {
                                marginLeft: "3px"
                            } },
                            react_1["default"].createElement(icons_1.CaretDownOutlined, { size: 24 })))),
                react_1["default"].createElement(antd_1.Dropdown, { overlay: menu, trigger: ["click"] },
                    react_1["default"].createElement(antd_1.Button, { size: "small", style: {
                            borderRadius: "5px",
                            marginLeft: "3px"
                        }, key: "3" },
                        "More",
                        react_1["default"].createElement("span", { style: {
                                marginLeft: "3px"
                            } },
                            react_1["default"].createElement(icons_1.CaretDownOutlined, { size: 24 })))),
            ], footer: react_1["default"].createElement(StyledMenuAntd, { mode: "horizontal", onClick: handleClicked, selectedKeys: [current], style: {
                    fontSize: "13px",
                    lineHeight: "20px"
                } },
                react_1["default"].createElement(antd_1.Menu.Item, { key: "overview", style: { padding: "10px" } }, "Overview"),
                react_1["default"].createElement(antd_1.Menu.Item, { key: "comments", style: { padding: "10px" } }, "Comments"),
                react_1["default"].createElement(antd_1.Menu.Item, { key: "transactions", style: { padding: "10px" } }, "Transactions"),
                react_1["default"].createElement(antd_1.Menu.Item, { key: "mails", style: { padding: "10px" } }, "Mails"),
                react_1["default"].createElement(antd_1.Menu.Item, { key: "statement", style: { padding: "10px" } }, "Statement")) }),
        react_1["default"].createElement(StyledLayout, null, (current === 'overview' ||
            current === 'comments' ||
            current === 'transactions' ||
            current === 'mails' ||
            current === 'statement') && react_1["default"].createElement(react_1["default"].Fragment, null, tabs({ currents: current })))));
};
exports["default"] = CustomerSidebar;
var templateObject_1, templateObject_2, templateObject_3;

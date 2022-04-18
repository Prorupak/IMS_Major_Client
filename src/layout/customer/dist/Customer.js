"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_dom_1 = require("react-router-dom");
var react_router_1 = require("react-router");
var CustomerContext_1 = require("context/CustomerContext");
var Tooltip_1 = require("@mui/material/Tooltip");
var useToggle_1 = require("Hooks/useToggle");
var CustomerHeader_1 = require("layout/customer/components/CustomerHeader");
var CustomerSidebar_1 = require("./components/CustomerSidebar");
var Sider = antd_1.Layout.Sider, Content = antd_1.Layout.Content, Header = antd_1.Layout.Header;
var StyledLayout = styled_components_1["default"](antd_1.Layout)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n background-color: #f6f6f6;\n height: 100%;\n \n"], ["\n background-color: #f6f6f6;\n height: 100%;\n \n"])));
var StyledSubLayout = styled_components_1["default"](antd_1.Layout)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n background-color: #fff;\n"], ["\n background-color: #fff;\n"])));
var StyledContent = styled_components_1["default"](Content)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n background-color: #fff;\n position: sticky;\n\n"], ["\n background-color: #fff;\n position: sticky;\n\n"])));
var StyledHeader = styled_components_1["default"](Header)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nposition: relative;\nz-index: 1;\n background-color: #fff;\n padding: 0px;\n height: 0px;\n"], ["\nposition: relative;\nz-index: 1;\n background-color: #fff;\n padding: 0px;\n height: 0px;\n"])));
var StyledSider = styled_components_1["default"](Sider)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n background-color: #fff;\n  position: relative;\n top: 58px;\n"], ["\n background-color: #fff;\n  position: relative;\n top: 58px;\n"])));
var StyledMenuAntd = styled_components_1["default"](antd_1.Menu)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n && {\n  .ant-menu-horizontal {\n   padding: var(--spacing-5) var(--spacing-10);\n   font-size: var(--font-size-14);\n   background-color: red;\n  }\n }\n position: relative;\n left: -10px;\n bottom: -3px;\n"], ["\n && {\n  .ant-menu-horizontal {\n   padding: var(--spacing-5) var(--spacing-10);\n   font-size: var(--font-size-14);\n   background-color: red;\n  }\n }\n position: relative;\n left: -10px;\n bottom: -3px;\n"])));
var StyledAntdItemGroup = styled_components_1["default"](antd_1.Menu.ItemGroup)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n font-weight: 600;\n"], ["\n font-weight: 600;\n"])));
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
    return (react_1["default"].createElement(react_1["default"].Fragment, null, loading ? (react_1["default"].createElement(antd_1.Spin, null)) : customer ? (react_1["default"].createElement(StyledLayout, null, loading ? (react_1["default"].createElement("div", null, "Loading...")) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(StyledHeader, { style: {
                position: "sticky",
                top: 0,
                zIndex: 999
            } },
            react_1["default"].createElement(CustomerHeader_1["default"], null)),
        react_1["default"].createElement(StyledSubLayout, { style: {
                // display: "initial",
                position: "relative",
                overflow: "scroll"
            } },
            react_1["default"].createElement(StyledContent, { style: {
                    position: "sticky",
                    top: 0
                } }, children),
            react_1["default"].createElement(StyledSider, { width: collapsed ? "1100px" : "0px", style: {
                // position: "sticky",
                // top: 0,
                // zIndex: 999,
                } },
                react_1["default"].createElement("div", { className: "", style: { position: "sticky", top: 0 } },
                    react_1["default"].createElement(antd_1.PageHeader, { className: "site-page-header-responsive", onBack: toggleHandle, style: {
                            padding: "10px 10px 0px 10px",
                            textTransform: "capitalize",
                            position: "sticky",
                            top: 0
                        }, title: customer.customerDisplayName, avatar: {
                            src: "https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png",
                            alt: "avatar"
                        }, extra: [
                            react_1["default"].createElement(antd_1.Button, { onClick: function () {
                                    navigate("/customer/" + customer.id);
                                }, size: "small", style: {
                                    borderRadius: "5px"
                                }, key: "2" }, "Edit"),
                            react_1["default"].createElement(Tooltip_1["default"], { title: "Attach Files" },
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
                            react_1["default"].createElement(antd_1.Menu.Item, { key: "statement", style: { padding: "10px" } }, "Statement")) })),
                react_1["default"].createElement(CustomerSidebar_1["default"], { handleClicked: handleClicked, current: current }))))))) : (react_1["default"].createElement("p", null, "Loading......."))));
};
exports["default"] = Customer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

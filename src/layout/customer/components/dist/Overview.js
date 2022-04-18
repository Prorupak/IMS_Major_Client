"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var antd_1 = require("antd");
var Meta_1 = require("antd/lib/card/Meta");
var CustomerContext_1 = require("context/CustomerContext");
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var utilityThemes_1 = require("Themes/utilityThemes");
var styled_components_1 = require("styled-components");
var StyledCard = styled_components_1["default"](antd_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nwidth: 300px;\nmargin-top: 16px;\nborder: none;\nbackground-color: #f6f6f6;\n.ant-card-body {\n     padding: 0px;\n}\n\n.ant-card-actions {\n     background-color: #f6f6f6;\n     margin: 10px 0px;\n}\n\n.ant-card-head-title{\n     padding: 0px;\n}\n.ant-card-head {\n     min-height: 10px;\n     margin-bottom: 15px;\n     border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n     padding: 0px;\n\n}\n\n.ant-card-meta-avatar {\n     padding: 20px 20px 0 0\n}\n\n.ant-avatar {\n     width: 42px;\n     height: 42px;\n}\n"], ["\nwidth: 300px;\nmargin-top: 16px;\nborder: none;\nbackground-color: #f6f6f6;\n.ant-card-body {\n     padding: 0px;\n}\n\n.ant-card-actions {\n     background-color: #f6f6f6;\n     margin: 10px 0px;\n}\n\n.ant-card-head-title{\n     padding: 0px;\n}\n.ant-card-head {\n     min-height: 10px;\n     margin-bottom: 15px;\n     border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n     padding: 0px;\n\n}\n\n.ant-card-meta-avatar {\n     padding: 20px 20px 0 0\n}\n\n.ant-avatar {\n     width: 42px;\n     height: 42px;\n}\n"])));
var StyledList = styled_components_1["default"](antd_1.List)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nborder-bottom: none;\npadding: 0px;\n\n.ant-list-split .ant-list-header {\n     border-bottom: none;\n}\n.ant-list-header {\n     padding: 0px;\n     border-bottom: none;\n}\n"], ["\nborder-bottom: none;\npadding: 0px;\n\n.ant-list-split .ant-list-header {\n     border-bottom: none;\n}\n.ant-list-header {\n     padding: 0px;\n     border-bottom: none;\n}\n"])));
var StyledItem = styled_components_1["default"](utilityThemes_1.Item)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\nalign-items: center;\ngap: 5px;\n"], ["\ndisplay: flex;\nalign-items: center;\ngap: 5px;\n"])));
var StyledDescriptions = styled_components_1["default"](antd_1.Descriptions.Item)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\nalign-items: center;\ngap: 1rem;\n"], ["\ndisplay: flex;\nalign-items: center;\ngap: 1rem;\n"])));
var Overview = function () {
    var _a, _b, _c, _d, _e;
    var _f = react_1["default"].useContext(CustomerContext_1.CustomerData), customer = _f.Customer, loading = _f.loading;
    console.log("customerOver", (_a = customer.address) === null || _a === void 0 ? void 0 : _a.map(function (item) { return item.billingAddress[0]; }));
    var billing = (_b = customer.address) === null || _b === void 0 ? void 0 : _b.map(function (item) { return item.billingAddress[0]; });
    var shipping = (_c = customer.address) === null || _c === void 0 ? void 0 : _c.map(function (item) { return item.shippingAddress[0]; });
    var other = (_d = customer.otherDetails) === null || _d === void 0 ? void 0 : _d.map(function (item) { return item[0]; });
    console.log("billing", billing === null || billing === void 0 ? void 0 : billing.map(function (item) { return item.country; }));
    var _g = react_1["default"].useState([]), data = _g[0], setData = _g[1];
    react_1["default"].useEffect(function () {
        for (var i in billing) {
            var data_1 = [
                billing[i].country,
                billing[i].city,
                billing[i].state,
                billing[i].addressLine1,
                billing[i].addressLine2,
                billing[i].zip,
                billing[i].phone,
            ];
            setData(data_1);
        }
    }, [customer]);
    console.log('billingADD', billing);
    console.log('billingADDDD', data);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(antd_1.Layout.Content, { style: {
                // flex: '0 0 400',
                width: '400px',
                minWidth: '400px',
                maxWidth: '400px',
                borderRight: "1px solid rgba(0, 0, 0, 0.1) ",
                padding: "15px 15px 20px 15px",
                background: "#F7F7F7"
            } },
            react_1["default"].createElement(StyledCard, { title: customer.customerDisplayName, actions: [
                    react_1["default"].createElement(StyledItem, { width: '0px', fontSize: '12px', fontWeight: '400', color: 'var(--color-secondary)' }, "Edit"),
                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: 'var(--color-secondary)' }, "Send Email"),
                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: 'var(--color-secondary)' }, "Delete"),
                ] },
                react_1["default"].createElement(antd_1.Skeleton, { loading: loading, avatar: true, active: true },
                    react_1["default"].createElement(Meta_1["default"], { avatar: react_1["default"].createElement(antd_1.Avatar, { src: "https://joeschmoe.io/api/v1/random" }), title: (react_1["default"].createElement(StyledItem, { fontSize: '14px', fontWeight: '500' }, customer.customerDisplayName)), description: (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(antd_1.Layout.Content, { style: {
                                    display: "flex",
                                    flexFlow: "column"
                                } },
                                react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' }, customer.email),
                                react_1["default"].createElement(StyledItem, { fontSize: '12px', margin: '3px', fontWeight: '400', color: '#777777' },
                                    react_1["default"].createElement(icons_1.PhoneOutlined, { color: 'var(--color-primary-dark)' }),
                                    customer.phone),
                                react_1["default"].createElement(StyledItem, { fontSize: '12px', margin: '3px', fontWeight: '400', color: '#777777' },
                                    react_1["default"].createElement(icons_1.MobileOutlined, { color: "var(--color-primary-dark)" }), (_e = customer.otherDetails) === null || _e === void 0 ? void 0 :
                                    _e.map(function (StyledItem) { return StyledItem.phone; }))))) }))),
            react_1["default"].createElement(StyledCard, { size: "small", title: "Address", style: { width: "100%" } },
                react_1["default"].createElement(antd_1.Skeleton, { loading: loading, active: true },
                    react_1["default"].createElement(StyledItem, { fontSize: "13px", fontWeight: '500' }, "Billing Address"),
                    (billing === null || billing === void 0 ? void 0 : billing.length) > 0 ? billing === null || billing === void 0 ? void 0 : billing.map(function (item, idx) { return (react_1["default"].createElement(antd_1.Layout.Content, { key: idx },
                        react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' }, item.addressLine1),
                        react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' }, item.addressLine2),
                        react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' },
                            item.state,
                            ", ",
                            item.city,
                            ", ",
                            item.zip),
                        react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' },
                            "Phone: ",
                            item.phone))); }) : (react_1["default"].createElement("p", null, "Loading"))),
                react_1["default"].createElement(antd_1.Skeleton, { loading: loading, active: true },
                    react_1["default"].createElement(StyledItem, { fontSize: "13px", fontWeight: '500' }, "Selling Address"),
                    (shipping === null || shipping === void 0 ? void 0 : shipping.length) > 0 ? shipping === null || shipping === void 0 ? void 0 : shipping.map(function (item, idx) { return (react_1["default"].createElement(antd_1.Layout.Content, { key: idx },
                        react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' }, item.addressLine1),
                        react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' }, item.addressLine2),
                        react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' },
                            item.state,
                            ", ",
                            item.city,
                            ", ",
                            item.zip),
                        react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' },
                            "Phone: ",
                            item.phone))); }) : (react_1["default"].createElement("p", null, "Loading")))),
            react_1["default"].createElement(StyledCard, { size: "small", title: "Other Details", style: { width: "100%" } },
                react_1["default"].createElement(antd_1.Skeleton, { loading: loading, active: true },
                    react_1["default"].createElement(Meta_1["default"], { description: (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(antd_1.Layout.Content, { style: {
                                    display: "flex",
                                    flexFlow: "column"
                                } },
                                react_1["default"].createElement(StyledItem, { style: {
                                        display: "flex"
                                    } },
                                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '500', color: 'var(--color-primary-dark)', margin: '3px' }, "Customer ID"),
                                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' }, customer.id)),
                                react_1["default"].createElement(StyledItem, { style: {
                                        display: "flex"
                                    } },
                                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '500', color: 'var(--color-primary-dark)', margin: '3px' }, "Customer Type"),
                                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' }, customer.customerType)),
                                react_1["default"].createElement(StyledItem, { style: {
                                        display: "flex"
                                    } },
                                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '500', color: 'var(--color-primary-dark)', margin: '3px' }, "Currency Code"),
                                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' }, "NPR")),
                                react_1["default"].createElement(StyledItem, { style: {
                                        display: "flex"
                                    } },
                                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '500', color: 'var(--color-primary-dark)', margin: '3px' }, "Payment Terms"),
                                    react_1["default"].createElement(StyledItem, { fontSize: '12px', fontWeight: '400', color: '#777777', margin: '3px' }, customer.paymentTerms))))) })))),
        react_1["default"].createElement(antd_1.Layout.Content, { style: {
                backgroundColor: "#fff",
                paddingTop: "-5px"
            } },
            react_1["default"].createElement("h1", null, "Sidebar"))));
};
exports["default"] = Overview;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

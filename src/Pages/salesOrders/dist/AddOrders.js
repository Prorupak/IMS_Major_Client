"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var react_router_1 = require("react-router");
var ReactHookForms_1 = require("context/ReactHookForms");
var notistack_1 = require("notistack");
var antd_1 = require("antd");
var Form = styled_components_1["default"].form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nposition: relative;\n  height: 100vh;\n  .spin {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n"], ["\nposition: relative;\n  height: 100vh;\n  .spin {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n"])));
var Grid = styled_components_1["default"](framer_motion_1.motion.div).attrs({})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  grid-template-rows: 45px auto 55px;\n  grid-template-columns: 100%;\n  height: 100vh;\n  background-color: #fbfafa;\n"], ["\n  display: grid;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  grid-template-rows: 45px auto 55px;\n  grid-template-columns: 100%;\n  height: 100vh;\n  background-color: #fbfafa;\n"])));
var Header = styled_components_1["default"](framer_motion_1.motion.div).attrs({})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  padding: 0 var(--spacing-15);\n\n  .rightSection {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-10);\n  }\n"], ["\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  padding: 0 var(--spacing-15);\n\n  .rightSection {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-10);\n  }\n"])));
var Content = styled_components_1["default"](framer_motion_1.motion.div).attrs({})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  grid-area: content;\n  min-height: 100%;\n  width: 70%;\n  padding: 15px 15px 70px 15px;\n"], ["\n  grid-area: content;\n  min-height: 100%;\n  width: 70%;\n  padding: 15px 15px 70px 15px;\n"])));
var ContentWrapper = styled_components_1["default"](framer_motion_1.motion.div).attrs({})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  overflow: scroll;\n"], ["\n  overflow: scroll;\n"])));
var Hr = styled_components_1["default"].hr(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: var(--spacing-18);\n  color: rgba(0, 0, 0, 0.3);\n"], ["\n  height: var(--spacing-18);\n  color: rgba(0, 0, 0, 0.3);\n"])));
var Footer = styled_components_1["default"](framer_motion_1.motion.div).attrs({})(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: sticky;\n  background-color: #fff;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-10);\n  padding: 0 var(--spacing-15);\n  grid-area: footer;\n  border-top: 1px solid rgba(0, 0, 0, 0.07);\n"], ["\n  position: sticky;\n  background-color: #fff;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-10);\n  padding: 0 var(--spacing-15);\n  grid-area: footer;\n  border-top: 1px solid rgba(0, 0, 0, 0.07);\n"])));
var AddOrders = function (_a) {
    var _b;
    var children = _a.children;
    var id = react_router_1.useParams().id;
    var _c = react_1["default"].useState(false), loading = _c[0], setLoading = _c[1];
    var location = react_router_1.useLocation();
    var _d = react_1["default"].useContext(ReactHookForms_1.ReactHookForm), handleSubmit = _d.handleSubmit, reset = _d.reset, setFocus = _d.setFocus, isSubmitSuccessful = _d.formState.isSubmitSuccessful, watch = _d.watch;
    console.log('watchhh', watch('salesTax'));
    var ProID = localStorage.getItem('saveId');
    // @ts-ignore
    var pathName = (_b = location.state) === null || _b === void 0 ? void 0 : _b.cus;
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, initialValues, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setLoading(true);
                    return [4 /*yield*/, axios_1["default"].get("http://localhost:9001/api/customer/" + ProID)];
                case 1:
                    res = _a.sent();
                    if (pathName === '/customers') {
                        initialValues = {};
                        reset(initialValues);
                    }
                    else {
                        reset();
                    }
                    setLoading(false);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log('error', e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1["default"].useEffect(function () { }, []);
    react_1.useEffect(function () {
        fetchData();
    }, [reset]);
    var navigate = react_router_1.useNavigate();
    var close = function () {
        // navigate('/products')
    };
    var onNavigate = function (res) {
        navigate('/products', { state: res });
    };
    var openNotification = function (res, error) {
        console.log('productNae', res);
        if (error) {
            antd_1.notification.error({
                message: 'Error',
                description: res,
                placement: 'bottomRight',
                duration: 2
            });
        }
        else {
            var key = "open" + Date.now();
            var btn = (react_1["default"].createElement("div", { style: { display: "flex", alignItems: 'center', gap: '5px' } },
                react_1["default"].createElement(antd_1.Button, { type: "primary", size: "small", onClick: onNavigate }, "View Details"),
                react_1["default"].createElement(antd_1.Button, { type: "primary", size: "small" }, "Add More")));
            antd_1.notification.open({
                type: 'success',
                message: res ? res.data.name + ' added successfully' : error,
                description: "If you wish to view details about " + res.data.name + " , tap on 'View Details'",
                btn: btn,
                key: key,
                duration: 5,
                onClose: close
            });
        }
    };
    var enqueueSnackbar = notistack_1.useSnackbar().enqueueSnackbar;
    var _e = react_1["default"].useState(''), error = _e[0], setError = _e[1];
    var onSubmit = function (data) {
        console.log('data===>', data.sellDescription);
        var PData = {};
        console.log('PData', PData);
        var postData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, productName, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].post("http://localhost:9001/api/categories/" + id + "/products", PData)];
                    case 1:
                        res = _a.sent();
                        console.log('res', res);
                        if (res.status === 200) {
                            productName = res.data.name;
                            console.log('resdata', res.data.name);
                            openNotification(res);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log('error', error_1);
                        openNotification(null, error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return postData();
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Form, { onSubmit: handleSubmit(function (e) { return console.log(e); }) }, loading ? (react_1["default"].createElement("div", { className: 'spin' },
            react_1["default"].createElement("p", null,
                react_1["default"].createElement(antd_1.Spin, null)))) : (react_1["default"].createElement(Grid, null,
            react_1["default"].createElement(Header, null,
                react_1["default"].createElement(antd_1.PageHeader, { className: "site-page-header", onBack: function () {
                        navigate('/products');
                    }, title: pathName === '/products' ? 'Edit Product' : 'Add Product', style: {
                        padding: 0
                    } })),
            react_1["default"].createElement(ContentWrapper, null,
                react_1["default"].createElement(Content, null, children)),
            react_1["default"].createElement(Footer, null,
                react_1["default"].createElement(material_1.Button, { color: "primary", 
                    // disabled={!postData.name}
                    size: "small", sx: {
                        boxShadow: 'none',
                        borderRadius: '6px',
                        backgroundColor: 'var(--color-secondary)',
                        '&:hover': {
                            boxShadow: 'none'
                        }
                    }, type: "submit", variant: "contained" }, pathName === '/products' ? 'Update' : 'Add'),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/products" },
                    react_1["default"].createElement(material_1.Button, { color: "primary", size: "small", sx: {
                            boxShadow: 'none',
                            borderRadius: '6px',
                            background: '#f5f5f5',
                            border: '1px solid #e0e0e0',
                            color: 'var(--color-primary-dark)',
                            '&:hover': {
                                boxShadow: 'none'
                            }
                        }, variant: "contained" }, "Cancel"))))))));
};
exports["default"] = AddOrders;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

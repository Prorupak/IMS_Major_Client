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
var antd_1 = require("antd");
var moment_1 = require("moment");
var ReactHookForms_1 = require("context/ReactHookForms");
var react_1 = require("react");
var TextArea_1 = require("antd/lib/input/TextArea");
var material_1 = require("@mui/material");
var utilityThemes_1 = require("Themes/utilityThemes");
var CustomerContext_1 = require("context/CustomerContext");
var axios_1 = require("axios");
var Comments = function () {
    var _a = react_1["default"].useState([]), data = _a[0], setData = _a[1];
    var _b = react_1["default"].useContext(CustomerContext_1.CustomerData), Customer = _b.Customer, loading = _b.loading;
    var _c = react_1["default"].useContext(ReactHookForms_1.ReactHookForm), register = _c.register, handleSubmit = _c.handleSubmit, reset = _c.reset, control = _c.control, Controller = _c.Controller, watch = _c.watch, errors = _c.errors;
    console.log('Comment', Customer.id);
    // console.log('Comments', data?.map((d: any) => d.map((dn: any) => dn.comments.map((dn: any) => dn.comment))))
    var close = function () {
        // navigate('/products')
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
            antd_1.notification.open({
                type: 'success',
                message: "Comment added successfully",
                key: key,
                duration: 5,
                onClose: close
            });
        }
    };
    var onSubmit = function (data) {
        console.log('data===>', data.sellDescription);
        var PData = {
            comments: [{
                    comment: data.comment
                }]
        };
        console.log('PData', PData);
        var postData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].post("http://localhost:9001/api/customer/" + Customer.id + "/comments", PData)];
                    case 1:
                        res = _a.sent();
                        console.log('res', res);
                        if (res.status === 200) {
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
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("http://localhost:9001/api/customer/" + Customer.id + "/comments")];
                case 1:
                    res = _a.sent();
                    console.log('res', res.data.comments.map(function (d) { return d.comments.map(function (dn) { return dn.comment; }); }));
                    setData(res.data.comments.map(function (d) { return d.comments; }));
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log('error', error_2);
                    openNotification(null, error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1["default"].useEffect(function () {
        fetchData();
    }, [Customer]);
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
            } },
            (data === null || data === void 0 ? void 0 : data.length) > 0 ? (react_1["default"].createElement(antd_1.Timeline, null,
                react_1["default"].createElement(antd_1.Timeline.Item, null,
                    react_1["default"].createElement(antd_1.Card, null,
                        react_1["default"].createElement("div", { style: { display: "flex", flexFlow: "column", gap: "5px" } },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(Controller, { control: control, name: "comment", rules: { required: true }, render: function (_a) {
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
                        react_1["default"].createElement(utilityThemes_1.Item, { fontWeight: '500' }, item.createdBy)))); })))
                : (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { style: { display: "flex", flexFlow: "column", gap: "5px" } },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Controller, { control: control, name: "comment", rules: { required: true }, render: function (_a) {
                                    var field = _a.field;
                                    return (react_1["default"].createElement(TextArea_1["default"], __assign({ status: errors.comment ? "error" : "", showCount: true, maxLength: 100 }, field)));
                                } }),
                            react_1["default"].createElement(material_1.FormHelperText, null, "(For internal use only)")),
                        react_1["default"].createElement(material_1.Button, { type: "submit", variant: 'contained', size: "small", sx: { width: '20%' } }, "Submit")))), data === null || data === void 0 ? void 0 :
            data.map(function (item, index) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("p", null, item.comment))); }))));
};
exports["default"] = Comments;

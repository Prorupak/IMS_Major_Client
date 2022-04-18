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
exports.__esModule = true;
var antd_1 = require("antd");
var moment_1 = require("moment");
var ReactHookForms_1 = require("context/ReactHookForms");
var react_1 = require("react");
var Comments = function () {
    var _a = react_1["default"].useState([]), data = _a[0], setData = _a[1];
    var _b = react_1["default"].useContext(ReactHookForms_1.ReactHookForm), register = _b.register, handleSubmit = _b.handleSubmit;
    // const onSubmit = (data: any) => {
    //      console.log('data===>', data)
    //      // setData(data)
    // }
    // const onSubmit = React.useCallback(
    //      (data: any) => {
    //           data.preventDefault()
    //           console.log('data===>', data)
    //           setData(data)
    //      },
    //      [data]
    // );
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("form", { onSubmit: handleSubmit(function (e) { return setData([e.name]); }) },
            react_1["default"].createElement("input", __assign({ type: "text" }, register("name"))),
            react_1["default"].createElement("button", { type: "submit" }, "Submit")),
        react_1["default"].createElement(antd_1.Timeline, { mode: 'left' }, data.map(function (item, idx) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(antd_1.Timeline.Item, { key: idx, 
                //  dot={ <Icon type="idcard" style={{ fontSize: '12px' }} /> }
                color: "red" },
                item,
                react_1["default"].createElement("span", null, moment_1["default"](item.date).format("DD MMM YYYY"))),
            "                              ")); }))));
};
exports["default"] = Comments;

"use strict";
exports.__esModule = true;
exports.ToggleProvider = exports.ToggleContext = void 0;
var react_1 = require("react");
exports.ToggleContext = react_1["default"].createContext({});
// provide a stored toggle state to global context
var useToggle = function (key, initValue) {
    // const [value, setValue] = useSessionStorage(key, initValue);
    var _a = react_1["default"].useState(initValue), value = _a[0], setValue = _a[1];
    var toggleHandle = function (action) {
        console.log('action===>', action);
        setValue(function (prev) {
            return typeof action === 'boolean' ? action : !prev;
        });
    };
    var handleOpen = function () {
        setValue(true);
    };
    return { value: value, toggleHandle: toggleHandle, handleOpen: handleOpen };
};
exports.ToggleProvider = function (props) {
    var children = props.children;
    var _a = useToggle('toggle', true), value = _a.value, toggleHandle = _a.toggleHandle, handleOpen = _a.handleOpen;
    console.log('value===>', value);
    return (react_1["default"].createElement(exports.ToggleContext.Provider, { value: { value: value, toggleHandle: toggleHandle, handleOpen: handleOpen } }, children));
};
exports["default"] = useToggle;

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var utilityThemes_1 = require("Themes/utilityThemes");
var material_1 = require("@mui/material");
var useDelete_1 = require("Hooks/useDelete");
var react_router_dom_1 = require("react-router-dom");
var CategoryContext_1 = require("context/CategoryContext");
var Icon_1 = require("../../Assets/Icons/Icon");
var react_router_1 = require("react-router");
var Nav = styled_components_1["default"].nav(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var Wrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  align-items: center;\n  padding: var(--spacing-10) var(--spacing-15);\n  .is-close {\n    min-width: 20px;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  align-items: center;\n  padding: var(--spacing-10) var(--spacing-15);\n  .is-close {\n    min-width: 20px;\n  }\n"])));
var LeftSection = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-5);\n"], ["\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-5);\n"])));
var RightSection = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var ItemDetailsHeader = function (_a) {
    var toggle = _a.toggle;
    var _b = react_1["default"].useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var categoryDetails = react_1["default"].useContext(CategoryContext_1.CategoryData).categoryDetails;
    var open = Boolean(anchorEl);
    console.log('categoryDetails', categoryDetails.id);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var id = react_router_1.useParams().id;
    console.log('id====>', id);
    console.log('cid', categoryDetails.id);
    var ProID = localStorage.getItem('CateID');
    console.log('ProID', ProID);
    var handleDelete = useDelete_1["default"]("http://localhost:9001/api/categories/" + id).handleDelete;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Nav, null,
            react_1["default"].createElement(Wrapper, null,
                react_1["default"].createElement(LeftSection, null,
                    react_1["default"].createElement(utilityThemes_1.ButtonWrapper, null,
                        react_1["default"].createElement(material_1.Tooltip, { title: "Edit Category" },
                            react_1["default"].createElement(utilityThemes_1.Button, null,
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/category/edit/" + categoryDetails.id },
                                    react_1["default"].createElement(utilityThemes_1.IconButton, { src: Icon_1["default"].Edit })))),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/product/" + categoryDetails.id },
                            react_1["default"].createElement(utilityThemes_1.Button, { style: { background: 'var(--color-secondary)' } },
                                react_1["default"].createElement(utilityThemes_1.IconButton, { src: Icon_1["default"].BPlus }),
                                react_1["default"].createElement("p", null, "Add Item"))),
                        react_1["default"].createElement(material_1.Menu, { anchorEl: anchorEl, id: "fade-menu", MenuListProps: {
                                'aria-labelledby': 'fade-button'
                            }, onClose: handleClose, open: open, TransitionComponent: material_1.Fade },
                            react_1["default"].createElement(material_1.MenuItem, { onClick: toggle },
                                react_1["default"].createElement("p", { onClick: handleDelete }, "Delete")),
                            react_1["default"].createElement(material_1.MenuItem, { onClick: handleClose }, "Mark as Inactive")),
                        react_1["default"].createElement(utilityThemes_1.Button, { "aria-controls": open ? 'fade-menu' : undefined, "aria-expanded": open ? 'true' : undefined, "aria-haspopup": "true", id: "fade-button", onClick: handleClick },
                            react_1["default"].createElement("span", null, "More"),
                            react_1["default"].createElement(utilityThemes_1.IconButton, { src: Icon_1["default"].DrpDwn })))),
                react_1["default"].createElement(RightSection, null,
                    react_1["default"].createElement(utilityThemes_1.Icon, { onClick: toggle, src: Icon_1["default"].Close }))))));
};
exports["default"] = ItemDetailsHeader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Grid = void 0;
var react_1 = require("react");
// import Close from '../../../../Assets/Icons/Close.svg';
var utilityThemes_1 = require("../../Themes/utilityThemes");
var x_data_grid_1 = require("@mui/x-data-grid");
var styled_components_1 = require("styled-components");
var ProductsContainer_1 = require("Components/shared/ProductsContainer");
var MaterialUI_1 = require("Themes/MaterialUI");
var CategoryContext_1 = require("context/CategoryContext");
exports.Grid = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow-x: hidden;\n  display: grid;\n  grid-template-areas:\n    'header'\n    'body';\n\n  grid-template-rows: auto auto fill-content;\n\n  margin: var(--spacing-15) var(--spacing-15);\n"], ["\n  overflow-x: hidden;\n  display: grid;\n  grid-template-areas:\n    'header'\n    'body';\n\n  grid-template-rows: auto auto fill-content;\n\n  margin: var(--spacing-15) var(--spacing-15);\n"])));
var Header = styled_components_1["default"].header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  grid-area: header;\n  grid-row: span 1;\n  margin: var(--spacing-5) 0;\n"], ["\n  grid-area: header;\n  grid-row: span 1;\n  margin: var(--spacing-5) 0;\n"])));
var Body = styled_components_1["default"].section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-area: body;\n  margin: var(--spacing-5) 0;\n"], ["\n  grid-area: body;\n  margin: var(--spacing-5) 0;\n"])));
var ProductDetails = function () {
    var categoryDetails = react_1["default"].useContext(CategoryContext_1.CategoryData).categoryDetails;
    console.log('categoryDetails', categoryDetails.id);
    var columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 5
        },
        {
            field: 'name',
            headerName: 'ITEMS SUMMARY',
            width: 200
        },
        {
            field: 'sellingPrice',
            headerName: 'SELLING PRICE',
            width: 200,
            valueGetter: function (params) {
                return params.row.SalesInformation.map(function (item) { return item.sellingPrice; });
            }
        },
        {
            field: 'costPrice',
            headerName: ' COST PRICE',
            width: 200,
            valueGetter: function (params) {
                return params.row.PurchaseInformation.map(function (item) { return item.costPrice; });
            }
        },
        {
            field: 'date',
            headerName: 'DATE',
            width: 200
        }
    ];
    return (react_1["default"].createElement(ProductsContainer_1["default"], null,
        react_1["default"].createElement(exports.Grid, null,
            react_1["default"].createElement(Header, null,
                react_1["default"].createElement(utilityThemes_1.Heading, null, categoryDetails.name),
                react_1["default"].createElement(utilityThemes_1.Item, { fontWeight: "500", height: "1%" },
                    categoryDetails.products.length,
                    " Item(s) Available")),
            react_1["default"].createElement(utilityThemes_1.Divider, null),
            react_1["default"].createElement(Body, null,
                react_1["default"].createElement("div", { style: { margin: '10px 0', height: '66vh', width: '100%' } },
                    react_1["default"].createElement("div", { style: { height: '66vh', width: '100%' } },
                        react_1["default"].createElement(x_data_grid_1.DataGrid, { columns: columns, components: {
                                Toolbar: MaterialUI_1.CustomToolbar
                            }, density: "compact", loading: false, rows: categoryDetails.products, sx: {
                                border: 'none'
                            } })))))));
};
exports["default"] = ProductDetails;
var templateObject_1, templateObject_2, templateObject_3;

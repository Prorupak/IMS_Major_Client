"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var Categories_1 = require("Pages/Categories/Categories");
var react_1 = require("react");
var react_router_1 = require("react-router");
var CategoryContainer_1 = require("Pages/Categories/CategoryContainer");
var CreateProducts_1 = require("Pages/Products/CreateProducts");
var Products_1 = require("Pages/Products/Components/productDetails/Products");
var CategoryForm_1 = require("Pages/Categories/CategoryForm");
var RequireAuth_1 = require("./RequireAuth");
var ProductsForm_1 = require("Pages/Products/ProductsForm");
var ProductContainer_1 = require("Pages/Products/ProductContainer");
var ProductContext_1 = require("context/ProductContext");
var UpdateCategories_1 = require("Pages/Categories/UpdateCategories");
var CustomerContainer_1 = require("container/CustomerContainer");
var Customers_1 = require("Pages/customer/Customers");
var CustomerForm_1 = require("Pages/customer/CustomerForm");
var PublicRoutes = function () {
    var product = react_1["default"].useContext(ProductContext_1.ProductData).product;
    var location = react_router_1.useLocation();
    var id = localStorage.getItem('saveId');
    react_1["default"].useEffect(function () {
        if (id) {
            sessionStorage.setItem('saveId', id);
        }
    }, [id]);
    setTimeout(function () {
        if (id) {
            sessionStorage.removeItem('saveId');
        }
    }, 1000);
    var ids = sessionStorage.getItem('saveId');
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(framer_motion_1.AnimatePresence, { exitBeforeEnter: true, initial: true },
            react_1["default"].createElement(react_router_1.Routes, { key: location.pathname, location: location },
                react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(RequireAuth_1["default"], null) },
                    react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(ProductContainer_1["default"], null), path: "/product" },
                        react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(ProductsForm_1["default"], null), path: ":id" })),
                    react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(CreateProducts_1["default"], null), path: "/create" }),
                    react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(CategoryContainer_1["default"], null), path: "/category" },
                        react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(CategoryForm_1["default"], null), path: "add" }),
                        react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(UpdateCategories_1["default"], null), path: "edit/:id" })),
                    react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(Categories_1["default"], null), path: "/details" }),
                    react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(Products_1["default"], null), path: "/products" }),
                    react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(Customers_1["default"], null), path: "/customers" }),
                    react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(CustomerContainer_1["default"], null), path: "/customer" },
                        react_1["default"].createElement(react_router_1.Route, { element: react_1["default"].createElement(CustomerForm_1["default"], null), path: "add" })))))));
};
exports["default"] = PublicRoutes;

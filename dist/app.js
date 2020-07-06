'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProjectRoutes = require('./Routes/ProjectRoutes');

var _ProjectRoutes2 = _interopRequireDefault(_ProjectRoutes);

var _RoutesProducts = require('./Routes/RoutesProducts');

var _RoutesProducts2 = _interopRequireDefault(_RoutesProducts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// middlewards
app.use("/static", _express2.default.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_express2.default.json());
app.use("/products", _RoutesProducts2.default);
app.use('/api/products', _ProjectRoutes2.default);

module.exports = app;
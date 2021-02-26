"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var PORT = process.env.PORT || 3333;
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    app.use(cors_1.default());
    next();
});
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(routes_1.default);
app.listen(PORT);

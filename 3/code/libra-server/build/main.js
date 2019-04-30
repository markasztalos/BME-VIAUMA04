"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const library_db_1 = require("./models/library-db");
const books_controller_1 = require("./controllers/books.controller");
const app_routing_1 = require("./app.routing");
// Create a new express application instance
const app = express_1.default();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const db = new library_db_1.LibraryDB();
db.reloadDB();
const booksController = new books_controller_1.BooksController(db);
app_routing_1.configureRouting(app, booksController);
app.listen(3000, function () {
    console.log('Libra server listening on port 3000!');
});

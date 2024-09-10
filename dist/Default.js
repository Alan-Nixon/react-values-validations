"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Alert_1 = __importDefault(require("@mui/material/Alert"));
function DefaultExport() {
    return react_1.default.createElement(Alert_1.default, { severity: "info" }, "Please destructure the methods and use we dont have default export  \uD83D\uDE1D \uD83D\uDE1D \uD83D\uDE1D");
}
exports.default = DefaultExport;

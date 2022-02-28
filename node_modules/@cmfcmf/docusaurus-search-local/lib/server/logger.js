"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function prefix(level) {
    return `[Local Search] [${level}]: `;
}
function suffix(options) {
    return options.url ? ` (url: ${options.url})` : "";
}
const DEBUG = !!process.env.DEBUG;
exports.default = {
    warn: (msg, options = {}) => console.warn(`${prefix("WARN")}${msg}${suffix(options)}`),
    info: (msg, options = {}) => console.info(`${prefix("INFO")}${msg}${suffix(options)}`),
    debug: (msg, options = {}) => DEBUG && console.debug(`${prefix("DEBUG")}${msg}${suffix(options)}`),
};

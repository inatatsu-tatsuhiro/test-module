"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveAddress = exports.getActiveAccountToken = exports.Greeter = void 0;
class Greeter {
    greet(to) {
        console.log(`Hello ${to}`);
    }
}
exports.Greeter = Greeter;
const getActiveAccountToken = (verifierPublicKey, customPayload, encriptedPayload) => {
    return window.SSS.getActiveAccountToken(verifierPublicKey, customPayload, encriptedPayload);
};
exports.getActiveAccountToken = getActiveAccountToken;
const getActiveAddress = () => window.SSS.activeAddress;
exports.getActiveAddress = getActiveAddress;
//# sourceMappingURL=Greeter.js.map
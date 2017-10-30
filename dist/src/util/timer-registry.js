"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimerRegistry {
    add(timeout) {
        return setTimeout(timeout.callback.bind(timeout.context, timeout.data), timeout.duration);
    }
    remove(timerId) {
        clearTimeout(timerId);
        return true;
    }
}
exports.TimerRegistry = TimerRegistry;
//# sourceMappingURL=timer-registry.js.map
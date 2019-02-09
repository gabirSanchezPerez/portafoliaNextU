"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concat_1 = require("../observable/concat");
/* tslint:enable:max-line-length */
/**
 * @deprecated Deprecated in favor of static {@link concat}.
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return function (source) { return source.lift.call(concat_1.concat.apply(void 0, [source].concat(observables))); };
}
exports.concat = concat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uY2F0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQStEO0FBcUIvRCxtQ0FBbUM7QUFFbkM7O0dBRUc7QUFDSCxTQUFnQixNQUFNO0lBQU8scUJBQTJEO1NBQTNELFVBQTJELEVBQTNELHFCQUEyRCxFQUEzRCxJQUEyRDtRQUEzRCxnQ0FBMkQ7O0lBQ3RGLE9BQU8sVUFBQyxNQUFxQixJQUFLLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBWSxnQkFBTyxNQUFNLFNBQUssV0FBVyxHQUFFLEVBQTVELENBQTRELENBQUM7QUFDakcsQ0FBQztBQUZELHdCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIGNvbmNhdCBhcyBjb25jYXRTdGF0aWMgfSBmcm9tICcuLi9vYnNlcnZhYmxlL2NvbmNhdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIE9wZXJhdG9yRnVuY3Rpb24sIE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgU2NoZWR1bGVyTGlrZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG4vKiogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZCBpbiBmYXZvciBvZiBzdGF0aWMgY29uY2F0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdDxUPihzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+O1xuLyoqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQgaW4gZmF2b3Igb2Ygc3RhdGljIGNvbmNhdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8VCwgVDI+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT3BlcmF0b3JGdW5jdGlvbjxULCBUIHwgVDI+O1xuLyoqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQgaW4gZmF2b3Igb2Ygc3RhdGljIGNvbmNhdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8VCwgVDIsIFQzPih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFQgfCBUMiB8IFQzPjtcbi8qKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkIGluIGZhdm9yIG9mIHN0YXRpYyBjb25jYXQuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PFQsIFQyLCBUMywgVDQ+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFQgfCBUMiB8IFQzIHwgVDQ+O1xuLyoqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQgaW4gZmF2b3Igb2Ygc3RhdGljIGNvbmNhdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8VCwgVDIsIFQzLCBUNCwgVDU+KHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHY1OiBPYnNlcnZhYmxlSW5wdXQ8VDU+LCBzY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlKTogT3BlcmF0b3JGdW5jdGlvbjxULCBUIHwgVDIgfCBUMyB8IFQ0IHwgVDU+O1xuLyoqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQgaW4gZmF2b3Igb2Ygc3RhdGljIGNvbmNhdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8VCwgVDIsIFQzLCBUNCwgVDUsIFQ2Pih2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgdjY6IE9ic2VydmFibGVJbnB1dDxUNj4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFQgfCBUMiB8IFQzIHwgVDQgfCBUNSB8IFQ2Pjtcbi8qKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkIGluIGZhdm9yIG9mIHN0YXRpYyBjb25jYXQuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PFQ+KC4uLm9ic2VydmFibGVzOiBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8VD4gfCBTY2hlZHVsZXJMaWtlPik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPjtcbi8qKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkIGluIGZhdm9yIG9mIHN0YXRpYyBjb25jYXQuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0PFQsIFI+KC4uLm9ic2VydmFibGVzOiBBcnJheTxPYnNlcnZhYmxlSW5wdXQ8YW55PiB8IFNjaGVkdWxlckxpa2U+KTogT3BlcmF0b3JGdW5jdGlvbjxULCBSPjtcbi8qIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZCBpbiBmYXZvciBvZiBzdGF0aWMge0BsaW5rIGNvbmNhdH0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQ8VCwgUj4oLi4ub2JzZXJ2YWJsZXM6IEFycmF5PE9ic2VydmFibGVJbnB1dDxhbnk+IHwgU2NoZWR1bGVyTGlrZT4pOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+IHtcbiAgcmV0dXJuIChzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IHNvdXJjZS5saWZ0LmNhbGwoY29uY2F0U3RhdGljPFQsIFI+KHNvdXJjZSwgLi4ub2JzZXJ2YWJsZXMpKTtcbn1cbiJdfQ==
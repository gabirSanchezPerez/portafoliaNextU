"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorObject_1 = require("./errorObject");
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5Q2F0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cnlDYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE0QztBQUU1QyxJQUFJLGNBQXdCLENBQUM7QUFFN0IsU0FBUyxVQUFVO0lBQ2pCLElBQUk7UUFDRixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQzlDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVix5QkFBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsT0FBTyx5QkFBVyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQztBQUVELFNBQWdCLFFBQVEsQ0FBcUIsRUFBSztJQUNoRCxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLE9BQVksVUFBVSxDQUFDO0FBQ3pCLENBQUM7QUFIRCw0QkFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVycm9yT2JqZWN0IH0gZnJvbSAnLi9lcnJvck9iamVjdCc7XG5cbmxldCB0cnlDYXRjaFRhcmdldDogRnVuY3Rpb247XG5cbmZ1bmN0aW9uIHRyeUNhdGNoZXIodGhpczogYW55KTogYW55IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHJ5Q2F0Y2hUYXJnZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVycm9yT2JqZWN0LmUgPSBlO1xuICAgIHJldHVybiBlcnJvck9iamVjdDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ5Q2F0Y2g8VCBleHRlbmRzIEZ1bmN0aW9uPihmbjogVCk6IFQge1xuICB0cnlDYXRjaFRhcmdldCA9IGZuO1xuICByZXR1cm4gPGFueT50cnlDYXRjaGVyO1xufVxuIl19
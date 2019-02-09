"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 *
 * @class ArgumentOutOfRangeError
 */
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcmd1bWVudE91dE9mUmFuZ2VFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLFNBQVMsMkJBQTJCO0lBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQztJQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUF5QixDQUFDO0lBQ3RDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELDJCQUEyQixDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV2RTs7Ozs7Ozs7O0dBU0c7QUFDVSxRQUFBLHVCQUF1QixHQUFnQywyQkFBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JDdG9yIHtcbiAgbmV3KCk6IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yO1xufVxuXG5mdW5jdGlvbiBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGwodGhpczogYW55KSB7XG4gIEVycm9yLmNhbGwodGhpcyk7XG4gIHRoaXMubWVzc2FnZSA9ICdhcmd1bWVudCBvdXQgb2YgcmFuZ2UnO1xuICB0aGlzLm5hbWUgPSAnQXJndW1lbnRPdXRPZlJhbmdlRXJyb3InO1xuICByZXR1cm4gdGhpcztcbn1cblxuQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcblxuLyoqXG4gKiBBbiBlcnJvciB0aHJvd24gd2hlbiBhbiBlbGVtZW50IHdhcyBxdWVyaWVkIGF0IGEgY2VydGFpbiBpbmRleCBvZiBhblxuICogT2JzZXJ2YWJsZSwgYnV0IG5vIHN1Y2ggaW5kZXggb3IgcG9zaXRpb24gZXhpc3RzIGluIHRoYXQgc2VxdWVuY2UuXG4gKlxuICogQHNlZSB7QGxpbmsgZWxlbWVudEF0fVxuICogQHNlZSB7QGxpbmsgdGFrZX1cbiAqIEBzZWUge0BsaW5rIHRha2VMYXN0fVxuICpcbiAqIEBjbGFzcyBBcmd1bWVudE91dE9mUmFuZ2VFcnJvclxuICovXG5leHBvcnQgY29uc3QgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3I6IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yQ3RvciA9IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbCBhcyBhbnk7Il19
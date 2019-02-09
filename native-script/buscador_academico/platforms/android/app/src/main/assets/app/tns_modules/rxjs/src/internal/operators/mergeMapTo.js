"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mergeMap_1 = require("./mergeMap");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * ![](mergeMapTo.png)
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * ## Example
 * For each click event, start an interval Observable ticking every 1 second
 * ```javascript
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(mergeMapTo(interval(1000)));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable`
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'function') {
        return mergeMap_1.mergeMap(function () { return innerObservable; }, resultSelector, concurrent);
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return mergeMap_1.mergeMap(function () { return innerObservable; }, concurrent);
}
exports.mergeMapTo = mergeMapTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VNYXBUby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lcmdlTWFwVG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx1Q0FBc0M7QUFPdEMsbUNBQW1DO0FBRW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0c7QUFDSCxTQUFnQixVQUFVLENBQ3hCLGVBQW1DLEVBQ25DLGNBQXVHLEVBQ3ZHLFVBQTZDO0lBQTdDLDJCQUFBLEVBQUEsYUFBcUIsTUFBTSxDQUFDLGlCQUFpQjtJQUU3QyxJQUFJLE9BQU8sY0FBYyxLQUFLLFVBQVUsRUFBRTtRQUN4QyxPQUFPLG1CQUFRLENBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLEVBQUUsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ3BFO0lBQ0QsSUFBSSxPQUFPLGNBQWMsS0FBSyxRQUFRLEVBQUU7UUFDdEMsVUFBVSxHQUFHLGNBQWMsQ0FBQztLQUM3QjtJQUNELE9BQU8sbUJBQVEsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBWkQsZ0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJuYWwvdHlwZXMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICcuL21lcmdlTWFwJztcbmltcG9ydCB7IE9ic2VydmFibGVJbnB1dCB9IGZyb20gJy4uL3R5cGVzJztcblxuLyogdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXBUbzxUPihpbm5lck9ic2VydmFibGU6IE9ic2VydmFibGVJbnB1dDxUPiwgY29uY3VycmVudD86IG51bWJlcik6IE9wZXJhdG9yRnVuY3Rpb248YW55LCBUPjtcbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTWFwVG88VCwgSSwgUj4oaW5uZXJPYnNlcnZhYmxlOiBPYnNlcnZhYmxlSW5wdXQ8ST4sIHJlc3VsdFNlbGVjdG9yOiAob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpID0+IFIsIGNvbmN1cnJlbnQ/OiBudW1iZXIpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+O1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuLyoqXG4gKiBQcm9qZWN0cyBlYWNoIHNvdXJjZSB2YWx1ZSB0byB0aGUgc2FtZSBPYnNlcnZhYmxlIHdoaWNoIGlzIG1lcmdlZCBtdWx0aXBsZVxuICogdGltZXMgaW4gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5JdCdzIGxpa2Uge0BsaW5rIG1lcmdlTWFwfSwgYnV0IG1hcHMgZWFjaCB2YWx1ZSBhbHdheXNcbiAqIHRvIHRoZSBzYW1lIGlubmVyIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqICFbXShtZXJnZU1hcFRvLnBuZylcbiAqXG4gKiBNYXBzIGVhY2ggc291cmNlIHZhbHVlIHRvIHRoZSBnaXZlbiBPYnNlcnZhYmxlIGBpbm5lck9ic2VydmFibGVgIHJlZ2FyZGxlc3NcbiAqIG9mIHRoZSBzb3VyY2UgdmFsdWUsIGFuZCB0aGVuIG1lcmdlcyB0aG9zZSByZXN1bHRpbmcgT2JzZXJ2YWJsZXMgaW50byBvbmVcbiAqIHNpbmdsZSBPYnNlcnZhYmxlLCB3aGljaCBpcyB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogIyMgRXhhbXBsZVxuICogRm9yIGVhY2ggY2xpY2sgZXZlbnQsIHN0YXJ0IGFuIGludGVydmFsIE9ic2VydmFibGUgdGlja2luZyBldmVyeSAxIHNlY29uZFxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgY2xpY2tzID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIGNvbnN0IHJlc3VsdCA9IGNsaWNrcy5waXBlKG1lcmdlTWFwVG8oaW50ZXJ2YWwoMTAwMCkpKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKiBgYGBcbiAqXG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXBUb31cbiAqIEBzZWUge0BsaW5rIG1lcmdlfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VBbGx9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlU2Nhbn1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaE1hcFRvfVxuICpcbiAqIEBwYXJhbSB7T2JzZXJ2YWJsZUlucHV0fSBpbm5lck9ic2VydmFibGUgQW4gT2JzZXJ2YWJsZSB0byByZXBsYWNlIGVhY2ggdmFsdWUgZnJvbVxuICogdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW50PU51bWJlci5QT1NJVElWRV9JTkZJTklUWV0gTWF4aW11bSBudW1iZXIgb2YgaW5wdXRcbiAqIE9ic2VydmFibGVzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5LlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGl0ZW1zIGZyb20gdGhlIGdpdmVuXG4gKiBgaW5uZXJPYnNlcnZhYmxlYFxuICogQG1ldGhvZCBtZXJnZU1hcFRvXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXBUbzxULCBJLCBSPihcbiAgaW5uZXJPYnNlcnZhYmxlOiBPYnNlcnZhYmxlSW5wdXQ8ST4sXG4gIHJlc3VsdFNlbGVjdG9yPzogKChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBJLCBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcikgPT4gUikgfCBudW1iZXIsXG4gIGNvbmN1cnJlbnQ6IG51bWJlciA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBJfFI+IHtcbiAgaWYgKHR5cGVvZiByZXN1bHRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtZXJnZU1hcCgoKSA9PiBpbm5lck9ic2VydmFibGUsIHJlc3VsdFNlbGVjdG9yLCBjb25jdXJyZW50KTtcbiAgfVxuICBpZiAodHlwZW9mIHJlc3VsdFNlbGVjdG9yID09PSAnbnVtYmVyJykge1xuICAgIGNvbmN1cnJlbnQgPSByZXN1bHRTZWxlY3RvcjtcbiAgfVxuICByZXR1cm4gbWVyZ2VNYXAoKCkgPT4gaW5uZXJPYnNlcnZhYmxlLCBjb25jdXJyZW50KTtcbn1cbiJdfQ==
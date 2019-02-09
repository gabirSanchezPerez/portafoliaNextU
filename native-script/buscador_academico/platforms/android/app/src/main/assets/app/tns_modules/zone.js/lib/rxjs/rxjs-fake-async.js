"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
Zone.__load_patch('rxjs.Scheduler.now', function (global, Zone, api) {
    api.patchMethod(rxjs_1.Scheduler, 'now', function (delegate) { return function (self, args) {
        return Date.now.apply(self, args);
    }; });
    api.patchMethod(rxjs_1.asyncScheduler, 'now', function (delegate) { return function (self, args) {
        return Date.now.apply(self, args);
    }; });
    api.patchMethod(rxjs_1.asapScheduler, 'now', function (delegate) { return function (self, args) {
        return Date.now.apply(self, args);
    }; });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnhqcy1mYWtlLWFzeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicnhqcy1mYWtlLWFzeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7O0FBRUgsNkJBQThEO0FBRTlELElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO0lBQ3JGLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQVMsRUFBRSxLQUFLLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsVUFBQyxJQUFTLEVBQUUsSUFBVztRQUMvRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBRnlELENBRXpELENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxXQUFXLENBQUMscUJBQWMsRUFBRSxLQUFLLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsVUFBQyxJQUFTLEVBQUUsSUFBVztRQUNwRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBRjhELENBRTlELENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxXQUFXLENBQUMsb0JBQWEsRUFBRSxLQUFLLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsVUFBQyxJQUFTLEVBQUUsSUFBVztRQUNuRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBRjZELENBRTdELENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2FzYXBTY2hlZHVsZXIsIGFzeW5jU2NoZWR1bGVyLCBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgncnhqcy5TY2hlZHVsZXIubm93JywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgYXBpLnBhdGNoTWV0aG9kKFNjaGVkdWxlciwgJ25vdycsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgcmV0dXJuIERhdGUubm93LmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9KTtcbiAgYXBpLnBhdGNoTWV0aG9kKGFzeW5jU2NoZWR1bGVyLCAnbm93JywgKGRlbGVnYXRlOiBGdW5jdGlvbikgPT4gKHNlbGY6IGFueSwgYXJnczogYW55W10pID0+IHtcbiAgICByZXR1cm4gRGF0ZS5ub3cuYXBwbHkoc2VsZiwgYXJncyk7XG4gIH0pO1xuICBhcGkucGF0Y2hNZXRob2QoYXNhcFNjaGVkdWxlciwgJ25vdycsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgcmV0dXJuIERhdGUubm93LmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9KTtcbn0pO1xuIl19
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@daign/math/dist/lib/angle.js":
/*!****************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/angle.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Angle = void 0;
var vector1_1 = __webpack_require__(/*! ./vector1 */ "./node_modules/@daign/math/dist/lib/vector1.js");
/**
 * Angle extension for the 1D vector class.
 */
var Angle = /** @class */ (function (_super) {
    __extends(Angle, _super);
    /**
     * Constructor.
     * @param rad - The angle in radians.
     */
    function Angle(radians) {
        return _super.call(this, radians) || this;
    }
    Object.defineProperty(Angle.prototype, "radians", {
        /**
         * Get angle in radians.
         * @returns The angle in radians.
         */
        get: function () {
            return this.x;
        },
        /**
         * Set angle in radians.
         * @param value - The value in radians.
         */
        set: function (value) {
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Angle.prototype, "degrees", {
        /**
         * Get angle in degrees.
         * @returns The angle in degrees.
         */
        get: function () {
            return (this.radians * 180 / Math.PI);
        },
        /**
         * Set angle in degrees.
         * @param value - The value in degrees.
         */
        set: function (value) {
            this.radians = value * Math.PI / 180;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Overwritten method to allow method chaining with base class methods.
     * @returns A reference to itself.
     */
    Angle.prototype.getThis = function () {
        return this;
    };
    /**
     * Setter for radians that allows method chaining.
     * @param value - The value in radians.
     * @returns A reference to itself.
     */
    Angle.prototype.setRadians = function (value) {
        this.radians = value;
        return this;
    };
    /**
     * Setter for degrees that allows method chaining.
     * @param value - The value in degrees.
     * @returns A reference to itself.
     */
    Angle.prototype.setDegrees = function (value) {
        this.degrees = value;
        return this;
    };
    /**
     * Create a new angle object with the same value.
     * @returns A new angle object.
     */
    Angle.prototype.clone = function () {
        return new Angle(this.radians);
    };
    /**
     * Remove full 360 degree turns. Negative angles remain negative.
     * @returns A reference to itself.
     */
    Angle.prototype.reduce = function () {
        this.radians = this.radians % (2 * Math.PI);
        return this;
    };
    /**
     * Normalize angle between 0 and 2 * Math.PI.
     * @returns A reference to itself.
     */
    Angle.prototype.normalize = function () {
        var value = this.radians % (2 * Math.PI);
        value = (2 * Math.PI + value) % (2 * Math.PI);
        this.radians = value;
        return this;
    };
    /**
     * Normalize angle between -Math.PI and Math.PI.
     * @returns A reference to itself.
     */
    Angle.prototype.normalizeMinimumAbsolute = function () {
        var value = this.radians % (2 * Math.PI);
        value = (2 * Math.PI + value) % (2 * Math.PI);
        if (value > Math.PI) {
            value -= 2 * Math.PI;
        }
        this.radians = value;
        return this;
    };
    /**
     * Round degree value of angle.
     * @param precision - The number of decimal places to round to. Optional.
     * @returns A reference to itself.
     */
    Angle.prototype.roundDegrees = function (precision) {
        if (precision) {
            var factor = Math.pow(10, precision);
            this.degrees = Math.round((this.degrees + Number.EPSILON) * factor) / factor;
        }
        else {
            this.degrees = Math.round(this.degrees);
        }
        return this;
    };
    return Angle;
}(vector1_1.Vector1));
exports.Angle = Angle;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/box2.js":
/*!***************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/box2.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Box2 = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
var vector2_1 = __webpack_require__(/*! ./vector2 */ "./node_modules/@daign/math/dist/lib/vector2.js");
/**
 * Rectangle shape that is defined by a min and max point. Used to represent bounding boxes.
 */
var Box2 = /** @class */ (function (_super) {
    __extends(Box2, _super);
    /**
     * Constructor.
     * @param min - The minimum vector.
     * @param max - The maximum vector.
     */
    function Box2(min, max) {
        var _this = _super.call(this) || this;
        // Passed points are used directly, not cloned. Also no non-empty check.
        _this._min = min || new vector2_1.Vector2(+Infinity, +Infinity);
        _this._max = max || new vector2_1.Vector2(-Infinity, -Infinity);
        // Notify observers when start or end point has changes.
        var callback = function () {
            _this.notifyObservers();
        };
        _this._min.subscribeToChanges(callback);
        _this._max.subscribeToChanges(callback);
        return _this;
    }
    Object.defineProperty(Box2.prototype, "min", {
        /**
         * Get the coordinates of the minimum point.
         * @returns The minimum point.
         */
        get: function () {
            return this._min.clone();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box2.prototype, "max", {
        /**
         * Get the coordinates of the maximum point.
         * @returns The maximum point.
         */
        get: function () {
            return this._max.clone();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box2.prototype, "isEmpty", {
        /**
         * Returns true if the box contains no points.
         * @returns The boolean result.
         */
        get: function () {
            return (this._max.x < this._min.x) || (this._max.y < this._min.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box2.prototype, "isArea", {
        /**
         * Returns true if the box contains more than one point on both axes.
         * @returns The boolean result.
         */
        get: function () {
            return (this._max.x > this._min.x) && (this._max.y > this._min.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box2.prototype, "size", {
        /**
         * Returns the size of the box.
         * @returns The size vector.
         */
        get: function () {
            if (this.isEmpty) {
                return new vector2_1.Vector2(0, 0);
            }
            return this._max.clone().sub(this._min);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box2.prototype, "center", {
        /**
         * Get the coordinates of the center point.
         * @returns The center point.
         */
        get: function () {
            if (this.isEmpty) {
                return new vector2_1.Vector2(0, 0);
            }
            return this._min.clone().add(this.size.multiplyScalar(0.5));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set from the values of another box.
     * @param b - Another box.
     * @returns A reference to itself.
     */
    Box2.prototype.copy = function (b) {
        this._min.copy(b.min);
        this._max.copy(b.max);
        return this;
    };
    /**
     * Create a new box with the same values.
     * @returns A new box.
     */
    Box2.prototype.clone = function () {
        return new Box2(this.min, this.max);
    };
    /**
     * Test equality of values for two boxes.
     * @param b - Another box.
     * @returns Whether boxes are equal.
     */
    Box2.prototype.equals = function (b) {
        return this.min.equals(b.min) && this.max.equals(b.max);
    };
    /**
     * Makes the box empty.
     * @returns A reference to itself.
     */
    Box2.prototype.makeEmpty = function () {
        this._min.x = this._min.y = +Infinity;
        this._max.x = this._max.y = -Infinity;
        return this;
    };
    /**
     * Expand or shrink the box by the given offset.
     * @param s - The distance to expand.
     * @returns A reference to itself.
     */
    Box2.prototype.expandByScalar = function (s) {
        var offset = new vector2_1.Vector2(s, s);
        var minimumOffset = this.size.multiplyScalar(-0.5);
        offset.max(minimumOffset);
        this._min.sub(offset);
        this._max.add(offset);
        return this;
    };
    /**
     * Scale the box relative to its current size while keeping its center.
     * @param s - The relative scale value to apply.
     * @returns A reference to itself.
     */
    Box2.prototype.scale = function (s) {
        var difference = this.size.multiplyScalar((Math.abs(s) - 1) / 2);
        this._min.sub(difference);
        this._max.add(difference);
        return this;
    };
    /**
     * Expand by including at least the given point.
     * @param p - The point by which to expand.
     * @returns A reference to itself.
     */
    Box2.prototype.expandByPoint = function (p) {
        this._min.min(p);
        this._max.max(p);
        return this;
    };
    /**
     * Expand by including at least the given box.
     * @param b - The box by which to expand.
     * @returns A reference to itself.
     */
    Box2.prototype.expandByBox = function (b) {
        this._min.min(b.min);
        this._max.max(b.max);
        return this;
    };
    /**
     * Apply a matrix transformation on the box.
     * @param m - The transformation matrix.
     * @returns A reference to itself.
     */
    Box2.prototype.transform = function (m) {
        // Don't calculate transformation if box is empty.
        if (this.isEmpty) {
            return this;
        }
        /* Transform all 4 corners of the box, to make sure that after a rotation all previously
         * contained points are still contained. */
        var corner1 = this.min.transform(m);
        var corner2 = this.max.transform(m);
        var corner3 = new vector2_1.Vector2(this.min.x, this.max.y).transform(m);
        var corner4 = new vector2_1.Vector2(this.max.x, this.min.y).transform(m);
        // Empty the box and expand by all 4 transformed corner points.
        this.makeEmpty();
        this.expandByPoint(corner1);
        this.expandByPoint(corner2);
        this.expandByPoint(corner3);
        this.expandByPoint(corner4);
        return this;
    };
    /**
     * Test whether point lies inside of box including the border.
     * @param p - The point.
     * @returns Whether point lies inside of box.
     */
    Box2.prototype.containsPoint = function (p) {
        return !(p.x < this.min.x || p.x > this.max.x ||
            p.y < this.min.y || p.y > this.max.y);
    };
    /**
     * Test whether another box lies inside of box including the border.
     * An empty box is contained by all boxes.
     * @param b - The other box.
     * @returns Whether box lies inside of box.
     */
    Box2.prototype.containsBox = function (b) {
        return (this.min.x <= b.min.x && b.max.x <= this.max.x &&
            this.min.y <= b.min.y && b.max.y <= this.max.y);
    };
    return Box2;
}(observable_1.Observable));
exports.Box2 = Box2;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/complexNumber.js":
/*!************************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/complexNumber.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComplexNumber = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
var mathHelper_1 = __webpack_require__(/*! ./mathHelper */ "./node_modules/@daign/math/dist/lib/mathHelper.js");
/**
 * Complex number.
 */
var ComplexNumber = /** @class */ (function (_super) {
    __extends(ComplexNumber, _super);
    /**
     * Constructor.
     * @param real - Real value.
     * @param imaginary - Imaginary value.
     */
    function ComplexNumber(real, imaginary) {
        var _this = _super.call(this) || this;
        _this._real = real || 0;
        _this._imaginary = imaginary || 0;
        return _this;
    }
    Object.defineProperty(ComplexNumber.prototype, "real", {
        /**
         * Get the real value.
         * @returns The real value.
         */
        get: function () {
            return this._real;
        },
        /**
         * Set the real value.
         * @param value - The numeric real value.
         */
        set: function (value) {
            // Only call observers if something changed.
            if (this._real !== value) {
                this._real = value;
                this.notifyObservers();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComplexNumber.prototype, "imaginary", {
        /**
         * Get the imaginary value.
         * @returns The imaginary value.
         */
        get: function () {
            return this._imaginary;
        },
        /**
         * Set the imaginary value.
         * @param value - The numeric imaginary value.
         */
        set: function (value) {
            // Only call observers if something changed.
            if (this._imaginary !== value) {
                this._imaginary = value;
                this.notifyObservers();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComplexNumber.prototype, "absolute", {
        /**
         * Get the absolute value.
         * @returns The absolute value.
         */
        get: function () {
            var a = this.real;
            var b = this.imaginary;
            return Math.sqrt(a * a + b * b);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComplexNumber.prototype, "argument", {
        /**
         * Get the argument (or angle) value.
         * @returns The argument value.
         */
        get: function () {
            return Math.atan2(this.imaginary, this.real);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the values.
     * @param real - Real value.
     * @param imaginary - Imaginary value.
     * @returns A reference to itself.
     */
    ComplexNumber.prototype.set = function (real, imaginary) {
        // Only call observers if something changed.
        if (this._real !== real || this._imaginary !== imaginary) {
            this._real = real;
            this._imaginary = imaginary;
            this.notifyObservers();
        }
        return this;
    };
    /**
     * Set the values without notifying observers.
     * @param real - Real value.
     * @param imaginary - Imaginary value.
     * @returns A reference to itself.
     */
    ComplexNumber.prototype.setSilent = function (real, imaginary) {
        this._real = real;
        this._imaginary = imaginary;
        return this;
    };
    /**
     * Set from the values of another complex number.
     * @param c - Another complex number.
     * @returns A reference to itself.
     */
    ComplexNumber.prototype.copy = function (c) {
        this.set(c.real, c.imaginary);
        return this;
    };
    /**
     * Create a new complex number with the same values.
     * @returns A new complex number.
     */
    ComplexNumber.prototype.clone = function () {
        return new ComplexNumber(this.real, this.imaginary);
    };
    /**
     * Test equality of values for two complex numbers.
     * @param c - Another complex number.
     * @returns Whether complex numbers are equal.
     */
    ComplexNumber.prototype.equals = function (c) {
        return ((this.real === c.real) && (this.imaginary === c.imaginary));
    };
    /**
     * Test whether the difference between two complex numbers is smaller than a given delta.
     * If no delta is passed the epsilon value is used.
     * @param c - Another complex number.
     * @param delta - The maximum difference.
     * @returns The result of the test.
     */
    ComplexNumber.prototype.closeTo = function (c, delta) {
        return (mathHelper_1.MathHelper.closeTo(this.real, c.real, delta) &&
            mathHelper_1.MathHelper.closeTo(this.imaginary, c.imaginary, delta));
    };
    /**
     * Add another complex number.
     * @param c - Another complex number.
     * @returns A reference to itself.
     */
    ComplexNumber.prototype.add = function (c) {
        this.set(this.real + c.real, this.imaginary + c.imaginary);
        return this;
    };
    /**
     * Subtract another complex number.
     * @param c - Another complex number.
     * @returns A reference to itself.
     */
    ComplexNumber.prototype.sub = function (c) {
        this.set(this.real - c.real, this.imaginary - c.imaginary);
        return this;
    };
    /**
     * Multiply with another complex number.
     * @param cn - Another complex number.
     * @returns A reference to itself.
     */
    ComplexNumber.prototype.multiply = function (cn) {
        var a = this.real;
        var b = this.imaginary;
        var c = cn.real;
        var d = cn.imaginary;
        var real = a * c - b * d;
        var imaginary = b * c + a * d;
        this.set(real, imaginary);
        return this;
    };
    /**
     * Divide with another complex number.
     * @param cn - Another complex number.
     * @returns A reference to itself.
     */
    ComplexNumber.prototype.divide = function (cn) {
        var a = this.real;
        var b = this.imaginary;
        var c = cn.real;
        var d = cn.imaginary;
        var real = (a * c + b * d) / (c * c + d * d);
        var imaginary = (b * c - a * d) / (c * c + d * d);
        this.set(real, imaginary);
        return this;
    };
    /**
     * Calculate the natural logarithm.
     * @returns A reference to itself.
     */
    ComplexNumber.prototype.log = function () {
        var real = Math.log(this.absolute);
        var imaginary = this.argument;
        this.set(real, imaginary);
        return this;
    };
    /**
     * Calculate the arctangent.
     * @returns A reference to itself.
     */
    ComplexNumber.prototype.atan = function () {
        var a = this.real;
        var b = this.imaginary;
        var x = 1 + 2 * b + b * b + a * a;
        var result = new ComplexNumber((1 - b * b - a * a) / x, (2 * a) / x);
        result.log();
        result.multiply(new ComplexNumber(0, -0.5));
        this.copy(result);
        return this;
    };
    /**
     * Return the complex result from the square root of a real number.
     * @param value - The real number.
     * @returns The complex result.
     */
    ComplexNumber.fromSqrt = function (value) {
        var a = Math.sqrt(Math.abs(value));
        if (value < 0) {
            return new ComplexNumber(0, a);
        }
        return new ComplexNumber(a, 0);
    };
    /**
     * Return the complex result from the arcsine of a real number.
     * @param value - The real number.
     * @returns The complex result.
     */
    ComplexNumber.fromAsin = function (value) {
        var result = ComplexNumber.fromSqrt(1 - value * value);
        result.add(new ComplexNumber(0, value));
        result.log();
        result.multiply(new ComplexNumber(0, -1));
        return result;
    };
    /**
     * Return the complex result from the arccosine of a real number.
     * @param value - The real number.
     * @returns The complex result.
     */
    ComplexNumber.fromAcos = function (value) {
        var result = new ComplexNumber(Math.PI / 2, 0);
        result.sub(ComplexNumber.fromAsin(value));
        return result;
    };
    return ComplexNumber;
}(observable_1.Observable));
exports.ComplexNumber = ComplexNumber;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/genericArray.js":
/*!***********************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/genericArray.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenericArray = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
/**
 * Abstract class for arrays of elements implementing the observable pattern.
 */
var GenericArray = /** @class */ (function (_super) {
    __extends(GenericArray, _super);
    /**
     * Constructor.
     */
    function GenericArray() {
        var _this = _super.call(this) || this;
        // The elements of the array.
        _this._elements = [];
        // The callbacks to remove the subscriptions on the elements.
        _this.subscriptionRemovers = [];
        // The array elements optionally referenced by name.
        _this.namedMapping = {};
        return _this;
    }
    Object.defineProperty(GenericArray.prototype, "elements", {
        /**
         * Get the elements.
         * @returns An array of elements.
         */
        get: function () {
            return __spreadArray([], this._elements, true);
        },
        /**
         * Set the elements.
         * @param elements - Array of elements.
         */
        set: function (elements) {
            var _this = this;
            // Remove subscriptions on previously contained elements.
            this.subscriptionRemovers.forEach(function (remover) {
                remover();
            });
            // Remove all named mappings.
            this.namedMapping = {};
            // Assign the new elements and subscribe to changes on them.
            this._elements = __spreadArray([], elements, true);
            this.subscriptionRemovers = this._elements.map(function (element) {
                var subscriptionRemover = element.subscribeToChanges(function () {
                    _this.notifyObservers();
                });
                return subscriptionRemover;
            });
            this.notifyObservers();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GenericArray.prototype, "length", {
        /**
         * Get the number of elements in the array.
         * @returns The number of elements in the array.
         */
        get: function () {
            return this._elements.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GenericArray.prototype, "names", {
        /**
         * Get all names form the named mapping.
         * @returns Array of mapping names.
         */
        get: function () {
            return Object.keys(this.namedMapping);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Check whether a name exists in the named mapping.
     * @param name - The name.
     * @returns Whether the name exists in the named mapping.
     */
    GenericArray.prototype.containsName = function (name) {
        return (name in this.namedMapping);
    };
    /**
     * Copy the elements of another array.
     * Does not copy the named mapping.
     * @param arr - Another array.
     * @returns A reference to itself.
     */
    GenericArray.prototype.copyElements = function (arr) {
        this.elements = arr.elements;
        return this;
    };
    /**
     * Get the i-th element of the array.
     * @param index - The index of the element to get.
     * @returns The element or undefined.
     */
    GenericArray.prototype.getElement = function (index) {
        return this._elements[index];
    };
    /**
     * Get an element by its name in the named mapping.
     * Will throw an error if an element with this name does not exist.
     * @param name - The name of the element.
     * @returns The element.
     */
    GenericArray.prototype.getByName = function (name) {
        if (!this.containsName(name)) {
            throw new Error('No element exists for the given name.');
        }
        return this.namedMapping[name];
    };
    /**
     * Assign a name for the named mapping to an element by index.
     * Will throw an error if the name is not unique.
     * Will throw an error if the index is out of bounds.
     * @param name - The new name of the element.
     * @param index - The index of the element to be named.
     * @returns A reference to itself.
     */
    GenericArray.prototype.assignName = function (name, index) {
        if (this.containsName(name)) {
            throw new Error('Name is not unique.');
        }
        if (index >= this.length) {
            throw new Error('The index of the element to be named is out of bounds.');
        }
        this.namedMapping[name] = this._elements[index];
        return this;
    };
    /**
     * Remove a name from the named mapping.
     * Does not remove the named element from the array.
     * Will throw an error if the name does not exist.
     * @param name - The name to remove.
     * @returns A reference to itself.
     */
    GenericArray.prototype.removeName = function (name) {
        if (!this.containsName(name)) {
            throw new Error('Name does not exist in mapping.');
        }
        delete this.namedMapping[name];
        return this;
    };
    /**
     * Add an element to the end of the array.
     * Will throw an error if the name is not unique.
     * @param element - The element to add.
     * @param name - The name of the element for the named mapping. Optional.
     * @returns A reference to itself.
     */
    GenericArray.prototype.push = function (element, name) {
        var _this = this;
        if (name && this.containsName(name)) {
            throw new Error('Name is not unique.');
        }
        this._elements.push(element);
        if (name) {
            this.namedMapping[name] = element;
        }
        var subscriptionRemover = element.subscribeToChanges(function () {
            _this.notifyObservers();
        });
        this.subscriptionRemovers.push(subscriptionRemover);
        this.notifyObservers();
        return this;
    };
    /**
     * Add an element at a specific index position to the array, shifting all following elements.
     * Will throw an error if the name is not unique.
     * Will throw an error if the index is out of bounds.
     * @param element - The element to add.
     * @param index - The position to insert the element.
     * @param name - The name of the element for the named mapping. Optional.
     * @returns A reference to itself.
     */
    GenericArray.prototype.insert = function (element, index, name) {
        var _this = this;
        if (name && this.containsName(name)) {
            throw new Error('Name is not unique.');
        }
        if (index < 0 || index > this._elements.length) {
            throw new Error('The index is out of bounds for array insertion.');
        }
        this._elements.splice(index, 0, element);
        if (name) {
            this.namedMapping[name] = element;
        }
        var subscriptionRemover = element.subscribeToChanges(function () {
            _this.notifyObservers();
        });
        this.subscriptionRemovers.push(subscriptionRemover);
        this.notifyObservers();
        return this;
    };
    /**
     * Remove and return the last element.
     * Does not remove the element from the named mapping, because the element can still exist in the
     * array at a different index.
     * @returns The last element or undefined if array is empty.
     */
    GenericArray.prototype.pop = function () {
        var result = this._elements.pop();
        var subscriptionRemover = this.subscriptionRemovers.pop();
        if (subscriptionRemover !== undefined) {
            subscriptionRemover();
        }
        if (result !== undefined) {
            this.notifyObservers();
        }
        return result;
    };
    /**
     * Remove and return an element at a specific index position in the array, shifting all following
     * elements.
     * Does not remove the element from the named mapping, because the element can still exist in the
     * array at a different index.
     * Will throw an error if the index is out of bounds.
     * @param index - The position of the element to remove.
     * @returns The removed element.
     */
    GenericArray.prototype.remove = function (index) {
        if (index < 0 || index >= this._elements.length) {
            throw new Error('The index is out of bounds for removal from array.');
        }
        var result = this._elements.splice(index, 1)[0];
        var subscriptionRemover = this.subscriptionRemovers.splice(index, 1)[0];
        subscriptionRemover();
        this.notifyObservers();
        return result;
    };
    /**
     * Call a function with every element of the array.
     * @param callback - The function to call the elements with.
     * @returns A reference to itself.
     */
    GenericArray.prototype.iterate = function (callback) {
        this._elements.forEach(function (element, index) {
            callback(element, index);
        });
        return this;
    };
    /**
     * Call a function with every pair of neighboring elements of the array.
     * @param callback - The function to call the elements with.
     * @returns A reference to itself.
     */
    GenericArray.prototype.iteratePairwise = function (callback) {
        for (var i = 0; i < this._elements.length - 1; i += 1) {
            callback(this._elements[i], this._elements[i + 1], i);
        }
        return this;
    };
    return GenericArray;
}(observable_1.Observable));
exports.GenericArray = GenericArray;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = exports.Vector2Array = exports.Vector2 = exports.Vector1 = exports.Value = exports.Triangle2 = exports.StringValue = exports.StringArray = exports.Matrix3 = exports.MathHelper = exports.Line2 = exports.GenericArray = exports.ComplexNumber = exports.Box2 = exports.Angle = void 0;
var angle_1 = __webpack_require__(/*! ./angle */ "./node_modules/@daign/math/dist/lib/angle.js");
Object.defineProperty(exports, "Angle", ({ enumerable: true, get: function () { return angle_1.Angle; } }));
var box2_1 = __webpack_require__(/*! ./box2 */ "./node_modules/@daign/math/dist/lib/box2.js");
Object.defineProperty(exports, "Box2", ({ enumerable: true, get: function () { return box2_1.Box2; } }));
var complexNumber_1 = __webpack_require__(/*! ./complexNumber */ "./node_modules/@daign/math/dist/lib/complexNumber.js");
Object.defineProperty(exports, "ComplexNumber", ({ enumerable: true, get: function () { return complexNumber_1.ComplexNumber; } }));
var genericArray_1 = __webpack_require__(/*! ./genericArray */ "./node_modules/@daign/math/dist/lib/genericArray.js");
Object.defineProperty(exports, "GenericArray", ({ enumerable: true, get: function () { return genericArray_1.GenericArray; } }));
var line2_1 = __webpack_require__(/*! ./line2 */ "./node_modules/@daign/math/dist/lib/line2.js");
Object.defineProperty(exports, "Line2", ({ enumerable: true, get: function () { return line2_1.Line2; } }));
var mathHelper_1 = __webpack_require__(/*! ./mathHelper */ "./node_modules/@daign/math/dist/lib/mathHelper.js");
Object.defineProperty(exports, "MathHelper", ({ enumerable: true, get: function () { return mathHelper_1.MathHelper; } }));
var matrix3_1 = __webpack_require__(/*! ./matrix3 */ "./node_modules/@daign/math/dist/lib/matrix3.js");
Object.defineProperty(exports, "Matrix3", ({ enumerable: true, get: function () { return matrix3_1.Matrix3; } }));
var stringArray_1 = __webpack_require__(/*! ./stringArray */ "./node_modules/@daign/math/dist/lib/stringArray.js");
Object.defineProperty(exports, "StringArray", ({ enumerable: true, get: function () { return stringArray_1.StringArray; } }));
var stringValue_1 = __webpack_require__(/*! ./stringValue */ "./node_modules/@daign/math/dist/lib/stringValue.js");
Object.defineProperty(exports, "StringValue", ({ enumerable: true, get: function () { return stringValue_1.StringValue; } }));
var triangle2_1 = __webpack_require__(/*! ./triangle2 */ "./node_modules/@daign/math/dist/lib/triangle2.js");
Object.defineProperty(exports, "Triangle2", ({ enumerable: true, get: function () { return triangle2_1.Triangle2; } }));
var value_1 = __webpack_require__(/*! ./value */ "./node_modules/@daign/math/dist/lib/value.js");
Object.defineProperty(exports, "Value", ({ enumerable: true, get: function () { return value_1.Value; } }));
var vector1_1 = __webpack_require__(/*! ./vector1 */ "./node_modules/@daign/math/dist/lib/vector1.js");
Object.defineProperty(exports, "Vector1", ({ enumerable: true, get: function () { return vector1_1.Vector1; } }));
var vector2_1 = __webpack_require__(/*! ./vector2 */ "./node_modules/@daign/math/dist/lib/vector2.js");
Object.defineProperty(exports, "Vector2", ({ enumerable: true, get: function () { return vector2_1.Vector2; } }));
var vector2Array_1 = __webpack_require__(/*! ./vector2Array */ "./node_modules/@daign/math/dist/lib/vector2Array.js");
Object.defineProperty(exports, "Vector2Array", ({ enumerable: true, get: function () { return vector2Array_1.Vector2Array; } }));
var vector3_1 = __webpack_require__(/*! ./vector3 */ "./node_modules/@daign/math/dist/lib/vector3.js");
Object.defineProperty(exports, "Vector3", ({ enumerable: true, get: function () { return vector3_1.Vector3; } }));


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/line2.js":
/*!****************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/line2.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Line2 = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
var vector2_1 = __webpack_require__(/*! ./vector2 */ "./node_modules/@daign/math/dist/lib/vector2.js");
/**
 * 2D line.
 */
var Line2 = /** @class */ (function (_super) {
    __extends(Line2, _super);
    /**
     * Constructor.
     * @param start - The start point.
     * @param end - The end point.
     */
    function Line2(start, end) {
        var _this = _super.call(this) || this;
        // Passed points are used directly, not cloned.
        _this._start = start || new vector2_1.Vector2();
        _this._end = end || new vector2_1.Vector2();
        // Notify observers when start or end point has changes.
        var callback = function () {
            _this.notifyObservers();
        };
        _this._start.subscribeToChanges(callback);
        _this._end.subscribeToChanges(callback);
        return _this;
    }
    Object.defineProperty(Line2.prototype, "start", {
        /**
         * Get the start point of the line.
         * @returns The start point.
         */
        get: function () {
            return this._start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line2.prototype, "end", {
        /**
         * Get the end point of the line.
         * @returns The end point.
         */
        get: function () {
            return this._end;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line2.prototype, "direction", {
        /**
         * Get a directional vector for the line.
         * @returns The directional vector.
         */
        get: function () {
            return this.end.clone().sub(this.start);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set from the values of another line.
     * @param l - Another line.
     * @returns A reference to itself.
     */
    Line2.prototype.copy = function (l) {
        this.start.copy(l.start);
        this.end.copy(l.end);
        return this;
    };
    /**
     * Create a new line with the same values.
     * @returns A new line.
     */
    Line2.prototype.clone = function () {
        return new Line2(this.start.clone(), this.end.clone());
    };
    /**
     * Test equality of values for two lines.
     * @param l - Another line.
     * @returns Whether lines are equal.
     */
    Line2.prototype.equals = function (l) {
        return this.start.equals(l.start) && this.end.equals(l.end);
    };
    /**
     * Get the center of the line.
     * @returns The center point.
     */
    Line2.prototype.getCenter = function () {
        return this.start.clone().add(this.end).multiplyScalar(0.5);
    };
    /**
     * Get the point at a position interpolated along the line segment.
     * @param t - The interpolation value, from 0 to 1 will give points on the line segment.
     * @returns The interpolated point.
     */
    Line2.prototype.interpolate = function (t) {
        return this.direction.multiplyScalar(t).add(this.start);
    };
    /**
     * Test parallelity of two lines.
     * @param l - Another line.
     * @returns Whether lines are parallel.
     */
    Line2.prototype.isParallel = function (l) {
        var direction1 = this.direction;
        var direction2 = l.direction;
        return (direction1.x * direction2.y === direction2.x * direction1.y);
    };
    /**
     * Test perpendicularity of two lines.
     * @param l - Another line.
     * @returns Whether lines are perpendicular.
     */
    Line2.prototype.isPerpendicular = function (l) {
        var direction1 = this.direction;
        var direction2 = l.direction;
        return (direction1.dot(direction2) === 0);
    };
    /**
     * Returns the intersection of both lines, when the lines are infinite straight lines.
     * @param l - Another line.
     * @returns The intersection point or null if lines are parallel.
     */
    Line2.prototype.getIntersection = function (l) {
        var ax = this.start.x;
        var ay = this.start.y;
        var bx = this.end.x;
        var by = this.end.y;
        var cx = l.start.x;
        var cy = l.start.y;
        var dx = l.end.x;
        var dy = l.end.y;
        var n = (bx - ax) * (dy - cy) - (by - ay) * (dx - cx);
        if (n !== 0) {
            var s = ((ax - cx) * (dy - cy) - (ay - cy) * (dx - cx)) / -n;
            var x = ax + s * (bx - ax);
            var y = ay + s * (by - ay);
            return new vector2_1.Vector2(x, y);
        }
        return null; // Returns null if lines are parallel.
    };
    /**
     * Returns the intersection of line segments.
     * The intersection point must lie between the end of both line segments.
     * @param l - Another line.
     * @returns The intersection point or null if lines don't intersect.
     */
    Line2.prototype.getSegmentIntersection = function (l) {
        var ax = this.start.x;
        var ay = this.start.y;
        var bx = this.end.x;
        var by = this.end.y;
        var cx = l.start.x;
        var cy = l.start.y;
        var dx = l.end.x;
        var dy = l.end.y;
        var n = (bx - ax) * (dy - cy) - (by - ay) * (dx - cx);
        if (n !== 0) {
            var s = ((ax - cx) * (dy - cy) - (ay - cy) * (dx - cx)) / -n;
            var t = ((cx - ax) * (by - ay) - (cy - ay) * (bx - ax)) / n;
            if (0 <= s && s <= 1 && 0 <= t && t <= 1) {
                var x = ax + s * (bx - ax);
                var y = ay + s * (by - ay);
                return new vector2_1.Vector2(x, y);
            }
        }
        return null; // Returns null if lines are parallel or intersection is outside of segment limits.
    };
    /**
     * Determines on which side of the line a point lies.
     * @param p - The point.
     * @returns -1 or 1 for the sides, or 0 if on the line.
     */
    Line2.prototype.getSideOfPoint = function (p) {
        var d = this.direction.cross(p.clone().sub(this.start));
        var sign = function (x) { return Number(x > 0) - Number(x < 0); };
        return sign(d);
    };
    return Line2;
}(observable_1.Observable));
exports.Line2 = Line2;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/mathHelper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/mathHelper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MathHelper = void 0;
/**
 * Helper functions for the math library.
 */
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    /**
     * Limit a value by lower and upper bounds.
     * @param value - The input value.
     * @param min - The lower limit.
     * @param max - The upper limit.
     * @returns The output value.
     */
    MathHelper.clamp = function (value, min, max) {
        return Math.max(min, Math.min(max, value));
    };
    /**
     * Linear interpolation between two values.
     * @param x - The start value.
     * @param y - The end value.
     * @param t - The interpolation rate from 0 to 1.
     * @returns The interpolated value.
     */
    MathHelper.lerp = function (x, y, t) {
        return (1 - t) * x + t * y;
    };
    /**
     * Test whether the difference between two numbers is smaller than a given delta.
     * If no delta is passed the epsilon value is used.
     * @param x - The first number.
     * @param y - The second number.
     * @param delta - The maximum difference.
     * @returns The result of the test.
     */
    MathHelper.closeTo = function (x, y, delta) {
        var epsilon = 2.220446049250313e-16;
        var d = (delta !== undefined) ? delta : epsilon;
        return Math.abs(x - y) < d;
    };
    return MathHelper;
}());
exports.MathHelper = MathHelper;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/matrix3.js":
/*!******************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/matrix3.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix3 = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
/**
 * 3x3 Matrix.
 */
var Matrix3 = /** @class */ (function (_super) {
    __extends(Matrix3, _super);
    /**
     * Constructor.
     */
    function Matrix3(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
        var _this = _super.call(this) || this;
        _this._elements = [];
        var e = _this._elements;
        e[0] = a11 || 0;
        e[1] = a12 || 0;
        e[2] = a13 || 0;
        e[3] = a21 || 0;
        e[4] = a22 || 0;
        e[5] = a23 || 0;
        e[6] = a31 || 0;
        e[7] = a32 || 0;
        e[8] = a33 || 0;
        return _this;
    }
    Object.defineProperty(Matrix3.prototype, "elements", {
        /**
         * Get the matrix entries as a one-dimensional array.
         * @returns The matrix entries.
         */
        get: function () {
            return __spreadArray([], this._elements, true);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the values.
     * @returns A reference to itself.
     */
    Matrix3.prototype.set = function (a11, a12, a13, a21, a22, a23, a31, a32, a33) {
        var e = this._elements;
        // Only call observers if something changed.
        if (e[0] !== a11 || e[1] !== a12 || e[2] !== a13 ||
            e[3] !== a21 || e[4] !== a22 || e[5] !== a23 ||
            e[6] !== a31 || e[7] !== a32 || e[8] !== a33) {
            e[0] = a11;
            e[1] = a12;
            e[2] = a13;
            e[3] = a21;
            e[4] = a22;
            e[5] = a23;
            e[6] = a31;
            e[7] = a32;
            e[8] = a33;
            this.notifyObservers();
        }
        return this;
    };
    /**
     * Set from the values of another matrix.
     * @param m - Another matrix.
     * @returns A reference to itself.
     */
    Matrix3.prototype.copy = function (m) {
        var e = m.elements;
        this.set(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
        return this;
    };
    /**
     * Create a new matrix with the same values.
     * @returns A new matrix.
     */
    Matrix3.prototype.clone = function () {
        var e = this.elements;
        return new Matrix3(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
    };
    /**
     * Test equality of values for two matrices.
     * @param m - Another matrix.
     * @returns Whether matrices are equal.
     */
    Matrix3.prototype.equals = function (m) {
        var e1 = this.elements;
        var e2 = m.elements;
        return ((e1[0] === e2[0]) && (e1[1] === e2[1]) && (e1[2] === e2[2]) &&
            (e1[3] === e2[3]) && (e1[4] === e2[4]) && (e1[5] === e2[5]) &&
            (e1[6] === e2[6]) && (e1[7] === e2[7]) && (e1[8] === e2[8]));
    };
    /**
     * Set the matrix to the result of the matrix multiplication m1 * m2.
     * @param m1 - The first matrix.
     * @param m2 - The second matrix.
     * @returns A reference to itself.
     */
    Matrix3.prototype.matrixMultiplication = function (m1, m2) {
        var a = m1.elements;
        var b = m2.elements;
        this.set(a[0] * b[0] + a[1] * b[3] + a[2] * b[6], a[0] * b[1] + a[1] * b[4] + a[2] * b[7], a[0] * b[2] + a[1] * b[5] + a[2] * b[8], a[3] * b[0] + a[4] * b[3] + a[5] * b[6], a[3] * b[1] + a[4] * b[4] + a[5] * b[7], a[3] * b[2] + a[4] * b[5] + a[5] * b[8], a[6] * b[0] + a[7] * b[3] + a[8] * b[6], a[6] * b[1] + a[7] * b[4] + a[8] * b[7], a[6] * b[2] + a[7] * b[5] + a[8] * b[8]);
        return this;
    };
    /**
     * Mutiply with another matrix.
     * @param m - The other matrix.
     * @returns A reference to itself.
     */
    Matrix3.prototype.multiply = function (m) {
        this.matrixMultiplication(this, m);
        return this;
    };
    /**
     * Combine two transformation matrices.
     * The transformation of the other matrix m is second in the order of transformations.
     * @param m - The other matrix.
     * @returns A reference to itself.
     */
    Matrix3.prototype.transform = function (m) {
        this.matrixMultiplication(m, this);
        return this;
    };
    /**
     * Set the identity transformation matrix.
     * @returns A reference to itself.
     */
    Matrix3.prototype.setIdentity = function () {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this;
    };
    /**
     * Set the translation transformation matrix.
     * @param t - The translation vector.
     * @returns A reference to itself.
     */
    Matrix3.prototype.setTranslation = function (t) {
        this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1);
        return this;
    };
    /**
     * Set the scaling transformation matrix.
     * @param s - The scaling vector.
     * @returns A reference to itself.
     */
    Matrix3.prototype.setScaling = function (s) {
        this.set(s.x, 0, 0, 0, s.y, 0, 0, 0, 1);
        return this;
    };
    /**
     * Set the rotation transformation matrix.
     * @param a - The rotation angle.
     * @param p - The center of rotation, or the origin of coordinates if missing.
     * @returns A reference to itself.
     */
    Matrix3.prototype.setRotation = function (a, p) {
        if (p === undefined) {
            // Rotation around the origin of coordinates.
            var sin = Math.sin(a.radians);
            var cos = Math.cos(a.radians);
            this.set(cos, -sin, 0, sin, cos, 0, 0, 0, 1);
        }
        else {
            // Rotation around point p.
            this.setTranslation(p.clone().multiplyScalar(-1));
            this.applyRotation(a);
            this.applyTranslation(p);
        }
        return this;
    };
    /**
     * Apply a translation transformation to the matrix.
     * @param t - The translation vector.
     * @returns A reference to itself.
     */
    Matrix3.prototype.applyTranslation = function (t) {
        this.transform(new Matrix3().setTranslation(t));
        return this;
    };
    /**
     * Apply a scaling transformation to the matrix.
     * @param s - The scaling vector.
     * @returns A reference to itself.
     */
    Matrix3.prototype.applyScaling = function (s) {
        this.transform(new Matrix3().setScaling(s));
        return this;
    };
    /**
     * Apply a rotation transformation to the matrix.
     * @param a - The rotation angle.
     * @param p - The center of rotation, or the origin of coordinates if missing.
     * @returns A reference to itself.
     */
    Matrix3.prototype.applyRotation = function (a, p) {
        this.transform(new Matrix3().setRotation(a, p));
        return this;
    };
    /**
     * Calculate the determinant of a matrix.
     * @returns The determinant of the matrix.
     */
    Matrix3.prototype.determinant = function () {
        var el = this.elements;
        var a = el[0];
        var b = el[1];
        var c = el[2];
        var d = el[3];
        var e = el[4];
        var f = el[5];
        var g = el[6];
        var h = el[7];
        var i = el[8];
        return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
    };
    /**
     * Set to the inverse of the passed matrix.
     * Will throw error if matrix cannot be inverted because determinant is 0.
     * Based on: https://github.com/mrdoob/three.js/blob/dev/src/math/Matrix3.js
     * @param m - The matrix to invert.
     * @returns A reference to itself.
     */
    Matrix3.prototype.setToInverse = function (m) {
        var det = m.determinant();
        if (det === 0) {
            throw new Error('Can not invert matrix because determinant is 0.');
        }
        var detInv = 1 / det;
        var me = m.elements;
        var a = me[0];
        var b = me[1];
        var c = me[2];
        var d = me[3];
        var e = me[4];
        var f = me[5];
        var g = me[6];
        var h = me[7];
        var i = me[8];
        this.set((i * e - f * h) * detInv, (c * h - i * b) * detInv, (f * b - c * e) * detInv, (f * g - i * d) * detInv, (i * a - c * g) * detInv, (c * d - f * a) * detInv, (h * d - e * g) * detInv, (b * g - h * a) * detInv, (e * a - b * d) * detInv);
        return this;
    };
    return Matrix3;
}(observable_1.Observable));
exports.Matrix3 = Matrix3;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/stringArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/stringArray.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringArray = void 0;
var genericArray_1 = __webpack_require__(/*! ./genericArray */ "./node_modules/@daign/math/dist/lib/genericArray.js");
/**
 * Class for arrays of strings implementing the observable pattern.
 */
var StringArray = /** @class */ (function (_super) {
    __extends(StringArray, _super);
    /**
     * Constructor.
     */
    function StringArray() {
        return _super.call(this) || this;
    }
    /**
     * Create an array with the same elements.
     * @returns A new array.
     */
    StringArray.prototype.clone = function () {
        var arr = new StringArray();
        arr.elements = this.elements;
        return arr;
    };
    /**
     * Create an array with copies of the elements.
     * @returns A new array.
     */
    StringArray.prototype.cloneDeep = function () {
        var arr = new StringArray();
        arr.elements = this.elements.map(function (element) { return element.clone(); });
        return arr;
    };
    return StringArray;
}(genericArray_1.GenericArray));
exports.StringArray = StringArray;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/stringValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/stringValue.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringValue = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
/**
 * String value that implements the observable pattern.
 */
var StringValue = /** @class */ (function (_super) {
    __extends(StringValue, _super);
    /**
     * Constructor.
     * @param value - Value.
     */
    function StringValue(value) {
        var _this = _super.call(this) || this;
        _this._value = value || '';
        return _this;
    }
    Object.defineProperty(StringValue.prototype, "value", {
        /**
         * Get the string value.
         * @returns The string value.
         */
        get: function () {
            return this._value;
        },
        /**
         * Set the string value.
         * @param value - The string value.
         */
        set: function (value) {
            // Only call observers if something changed.
            if (this._value !== value) {
                this._value = value;
                this.notifyObservers();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the values without notifying observers.
     * @param value - Value.
     * @returns A reference to itself.
     */
    StringValue.prototype.setSilent = function (value) {
        this._value = value;
        return this;
    };
    /**
     * Create a new string value object with the same value.
     * @returns A new string value object.
     */
    StringValue.prototype.clone = function () {
        return new StringValue(this.value);
    };
    /**
     * Test equality of values for string value objects.
     * @param s - Another StringValue.
     * @returns Whether values are equal.
     */
    StringValue.prototype.equals = function (s) {
        return (this.value === s.value);
    };
    return StringValue;
}(observable_1.Observable));
exports.StringValue = StringValue;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/triangle2.js":
/*!********************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/triangle2.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Triangle2 = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
var line2_1 = __webpack_require__(/*! ./line2 */ "./node_modules/@daign/math/dist/lib/line2.js");
var vector2_1 = __webpack_require__(/*! ./vector2 */ "./node_modules/@daign/math/dist/lib/vector2.js");
var vector3_1 = __webpack_require__(/*! ./vector3 */ "./node_modules/@daign/math/dist/lib/vector3.js");
/**
 * 2D triangle.
 */
var Triangle2 = /** @class */ (function (_super) {
    __extends(Triangle2, _super);
    /**
     * Constructor
     * @param a - First point.
     * @param b - Second point.
     * @param c - Third point.
     */
    function Triangle2(a, b, c) {
        var _this = _super.call(this) || this;
        // Passed points are used directly, not cloned.
        _this._a = a || new vector2_1.Vector2();
        _this._b = b || new vector2_1.Vector2();
        _this._c = c || new vector2_1.Vector2();
        // Notify observers when one of the points has changes.
        var callback = function () {
            _this.notifyObservers();
        };
        _this._a.subscribeToChanges(callback);
        _this._b.subscribeToChanges(callback);
        _this._c.subscribeToChanges(callback);
        return _this;
    }
    Object.defineProperty(Triangle2.prototype, "a", {
        /**
         * Get the first point of the triangle.
         * @returns The point a.
         */
        get: function () {
            return this._a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "b", {
        /**
         * Get the second point of the triangle.
         * @returns The point b.
         */
        get: function () {
            return this._b;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "c", {
        /**
         * Get the third point of the triangle.
         * @returns The point c.
         */
        get: function () {
            return this._c;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set from the values of another triangle.
     * @param t - Another triangle.
     * @returns A reference to itself.
     */
    Triangle2.prototype.copy = function (t) {
        this.a.copy(t.a);
        this.b.copy(t.b);
        this.c.copy(t.c);
        return this;
    };
    /**
     * Create a new trianlge with the same values.
     * @returns A new triangle.
     */
    Triangle2.prototype.clone = function () {
        return new Triangle2(this.a.clone(), this.b.clone(), this.c.clone());
    };
    /**
     * Test equality of values for two triangles.
     * @param t - Another triangle.
     * @returns Whether triangles are equal.
     */
    Triangle2.prototype.equals = function (t) {
        return this.a.equals(t.a) && this.b.equals(t.b) && this.c.equals(t.c);
    };
    /**
     * Calculates the barycentric coordinates for a point relative to the triangle.
     * Based on: https://github.com/mrdoob/three.js/blob/dev/src/math/Triangle.js
     * @param p - The point.
     * @returns 3D vector with barycentric coordinates or null if triangle is collinear.
     */
    Triangle2.prototype.getBarycoord = function (p) {
        var v0 = this.b.clone().sub(this.a);
        var v1 = this.c.clone().sub(this.a);
        var v2 = p.clone().sub(this.a);
        var dot00 = v0.dot(v0);
        var dot01 = v0.dot(v1);
        var dot02 = v0.dot(v2);
        var dot11 = v1.dot(v1);
        var dot12 = v1.dot(v2);
        var denom = (dot00 * dot11 - dot01 * dot01);
        // Collinear or singular triangle.
        if (denom === 0) {
            return null;
        }
        var invDenom = 1 / denom;
        var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
        var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
        return new vector3_1.Vector3(1 - u - v, v, u);
    };
    /**
     * Test whether a point is contained in the triangle including the border.
     * @param p - The point.
     * @returns Whether point is contained in triangle or null if triangle is collinear.
     */
    Triangle2.prototype.containsPoint = function (p) {
        var barycoord = this.getBarycoord(p);
        if (barycoord !== null) {
            return (barycoord.x >= 0) && (barycoord.y >= 0) && ((barycoord.x + barycoord.y) <= 1);
        }
        return null;
    };
    /**
     * Get the circumcenter point of the triangle.
     * @returns The circumcenter point or null if triangle is collinear.
     */
    Triangle2.prototype.getCircumcenter = function () {
        var side1 = this.b.clone().sub(this.a);
        var side2 = this.c.clone().sub(this.a);
        var midpoint1 = side1.clone().multiplyScalar(0.5).add(this.a);
        var midpoint2 = side2.clone().multiplyScalar(0.5).add(this.a);
        var line1 = new line2_1.Line2(midpoint1, side1.perpendicular().add(midpoint1));
        var line2 = new line2_1.Line2(midpoint2, side2.perpendicular().add(midpoint2));
        return line1.getIntersection(line2);
    };
    return Triangle2;
}(observable_1.Observable));
exports.Triangle2 = Triangle2;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/value.js":
/*!****************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/value.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Value = void 0;
var vector1_1 = __webpack_require__(/*! ./vector1 */ "./node_modules/@daign/math/dist/lib/vector1.js");
/**
 * Implementation for the 1D vector class of single numeric values.
 */
var Value = /** @class */ (function (_super) {
    __extends(Value, _super);
    /**
     * Constructor.
     * @param x - The x value.
     */
    function Value(x) {
        return _super.call(this, x) || this;
    }
    /**
     * Overwritten method to allow method chaining with base class methods.
     * @returns A reference to itself.
     */
    Value.prototype.getThis = function () {
        return this;
    };
    /**
     * Create a new value object with the same value.
     * @returns A new value object.
     */
    Value.prototype.clone = function () {
        return new Value(this.x);
    };
    return Value;
}(vector1_1.Vector1));
exports.Value = Value;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/vector1.js":
/*!******************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/vector1.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector1 = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
var mathHelper_1 = __webpack_require__(/*! ./mathHelper */ "./node_modules/@daign/math/dist/lib/mathHelper.js");
/**
 * Abstract class for 1D vectors that implement the Observable pattern.
 */
var Vector1 = /** @class */ (function (_super) {
    __extends(Vector1, _super);
    /**
     * Constructor.
     * @param x - The x value.
     */
    function Vector1(x) {
        var _this = _super.call(this) || this;
        _this._x = x || 0;
        _this.snapshot = undefined;
        return _this;
    }
    Object.defineProperty(Vector1.prototype, "x", {
        /**
         * Get the x value.
         * @returns The x value.
         */
        get: function () {
            return this._x;
        },
        /**
         * Set the x value.
         * @param value - The numeric x value.
         */
        set: function (value) {
            // Only call observers if something changed.
            if (this._x !== value) {
                this._x = value;
                this.notifyObservers();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the values without notifying observers.
     * @param x - The x value.
     * @returns A reference to itself.
     */
    Vector1.prototype.setSilent = function (x) {
        this._x = x;
        return this.getThis();
    };
    /**
     * Set from the value of another vector.
     * @param v - Another vector.
     * @returns A reference to itself.
     */
    Vector1.prototype.copy = function (v) {
        this.x = v.x;
        return this.getThis();
    };
    /**
     * Test equality of two vectors.
     * @param v - Another vector.
     * @returns Whether vectors are equal.
     */
    Vector1.prototype.equals = function (v) {
        return (this.x === v.x);
    };
    /**
     * Test whether the difference between two values is smaller than a given delta.
     * If no delta is passed the epsilon value is used.
     * @param v - Another Value.
     * @param delta - The maximum difference.
     * @returns The result of the test.
     */
    Vector1.prototype.closeTo = function (v, delta) {
        return mathHelper_1.MathHelper.closeTo(this.x, v.x, delta);
    };
    /**
     * Add another vector.
     * @param v - Another vector.
     * @returns A reference to itself.
     */
    Vector1.prototype.add = function (v) {
        this.x = this.x + v.x;
        return this.getThis();
    };
    /**
     * Subtract another vector.
     * @param v - Another vector.
     * @returns A reference to itself.
     */
    Vector1.prototype.sub = function (v) {
        this.x = this.x - v.x;
        return this.getThis();
    };
    /**
     * Multiply vector with a scalar.
     * @param s - A scalar.
     * @returns A reference to itself.
     */
    Vector1.prototype.multiplyScalar = function (s) {
        this.x = this.x * s;
        return this.getThis();
    };
    /**
     * Set to the absolute value of itself.
     * @returns A reference to itself.
     */
    Vector1.prototype.abs = function () {
        this.x = Math.abs(this.x);
        return this.getThis();
    };
    /**
     * Round the vector.
     * @param precision - The number of decimal places to round to. Optional.
     * @returns A reference to itself.
     */
    Vector1.prototype.round = function (precision) {
        if (precision) {
            var factor = Math.pow(10, precision);
            var x = Math.round((this.x + Number.EPSILON) * factor) / factor;
            this.x = x;
        }
        else {
            this.x = Math.round(this.x);
        }
        return this.getThis();
    };
    /**
     * Limit vector by lower and upper bounds.
     * @param min - The lower limit.
     * @param max - The upper limit.
     * @returns A reference to itself.
     */
    Vector1.prototype.clamp = function (min, max) {
        this.x = Math.max(min, Math.min(max, this.x));
        return this.getThis();
    };
    /**
     * Save an internal snapshot of itself.
     * @returns A reference to itself.
     */
    Vector1.prototype.snap = function () {
        this.snapshot = this.clone();
        return this.getThis();
    };
    /**
     * Set the vector by applying a drag value to the last saved snapshot.
     * @param v - The drag value.
     * @returns A reference to itself.
     */
    Vector1.prototype.drag = function (v) {
        if (this.snapshot !== undefined) {
            this.x = this.snapshot.x + v;
        }
        return this.getThis();
    };
    return Vector1;
}(observable_1.Observable));
exports.Vector1 = Vector1;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/vector2.js":
/*!******************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/vector2.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
var angle_1 = __webpack_require__(/*! ./angle */ "./node_modules/@daign/math/dist/lib/angle.js");
var mathHelper_1 = __webpack_require__(/*! ./mathHelper */ "./node_modules/@daign/math/dist/lib/mathHelper.js");
/**
 * 2D vector.
 */
var Vector2 = /** @class */ (function (_super) {
    __extends(Vector2, _super);
    /**
     * Constructor.
     * @param x - First value.
     * @param y - Second value.
     */
    function Vector2(x, y) {
        var _this = _super.call(this) || this;
        _this._x = x || 0;
        _this._y = y || 0;
        _this.snapshot = undefined;
        return _this;
    }
    Object.defineProperty(Vector2.prototype, "x", {
        /**
         * Get the x value.
         * @returns The x value.
         */
        get: function () {
            return this._x;
        },
        /**
         * Set the x value.
         * @param value - The numeric x value.
         */
        set: function (value) {
            // Only call observers if something changed.
            if (this._x !== value) {
                this._x = value;
                this.notifyObservers();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        /**
         * Get the y value.
         * @returns The y value.
         */
        get: function () {
            return this._y;
        },
        /**
         * Set the y value.
         * @param value - The numeric y value.
         */
        set: function (value) {
            // Only call observers if something changed.
            if (this._y !== value) {
                this._y = value;
                this.notifyObservers();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the values.
     * @param x - First value.
     * @param y - Second value.
     * @returns A reference to itself.
     */
    Vector2.prototype.set = function (x, y) {
        // Only call observers if something changed.
        if (this._x !== x || this._y !== y) {
            this._x = x;
            this._y = y;
            this.notifyObservers();
        }
        return this;
    };
    /**
     * Setter for x value that allows method chaining.
     * @param value - The x value.
     * @returns A reference to itself.
     */
    Vector2.prototype.setX = function (value) {
        this.x = value;
        return this;
    };
    /**
     * Setter for y value that allows method chaining.
     * @param value - The y value.
     * @returns A reference to itself.
     */
    Vector2.prototype.setY = function (value) {
        this.y = value;
        return this;
    };
    /**
     * Set the values without notifying observers.
     * @param x - First value.
     * @param y - Second value.
     * @returns A reference to itself.
     */
    Vector2.prototype.setSilent = function (x, y) {
        this._x = x;
        this._y = y;
        return this;
    };
    /**
     * Set the values from the mouse or touch position of an event.
     * @param event - The event to use.
     * @returns A reference to itself.
     */
    Vector2.prototype.setFromEvent = function (event) {
        if (event &&
            event.clientX !== undefined &&
            event.clientY !== undefined) {
            this.set(event.clientX, event.clientY);
            return this;
        }
        else {
            this.setFromTouchEvent(event, 0);
            return this;
        }
    };
    /**
     * Set the values from the mouse or touch position of an event relative to the events target.
     * @param event - The event to use.
     * @returns A reference to itself.
     */
    Vector2.prototype.setFromEventRelative = function (event) {
        if (event &&
            event.offsetX !== undefined &&
            event.offsetY !== undefined) {
            this.set(event.offsetX, event.offsetY);
            return this;
        }
        else {
            this.setFromTouchEventRelative(event, 0);
            return this;
        }
    };
    /**
     * Set the values from the touch position of an event.
     * @param event - The event to use.
     * @param touchIndex - The index of the touch point.
     * @returns A reference to itself.
     */
    Vector2.prototype.setFromTouchEvent = function (event, touchIndex) {
        if (event &&
            event.touches &&
            event.touches[touchIndex] &&
            event.touches[touchIndex].clientX &&
            event.touches[touchIndex].clientY) {
            this.set(event.touches[touchIndex].clientX, event.touches[touchIndex].clientY);
            return this;
        }
        else {
            return this;
        }
    };
    /**
     * Set the values from the touch position of an event relative to the events target.
     * @param event - The event to use.
     * @param touchIndex - The index of the touch point.
     * @returns A reference to itself.
     */
    Vector2.prototype.setFromTouchEventRelative = function (event, touchIndex) {
        if (event &&
            event.target &&
            event.targetTouches &&
            event.targetTouches[touchIndex] &&
            event.targetTouches[touchIndex].pageX &&
            event.targetTouches[touchIndex].pageY) {
            var rect = event.target.getBoundingClientRect();
            var x = event.targetTouches[touchIndex].pageX - rect.left;
            var y = event.targetTouches[touchIndex].pageY - rect.top;
            this.set(x, y);
            return this;
        }
        else {
            return this;
        }
    };
    /**
     * Set the values from the delta values of a scroll event.
     * @param event - The event to use.
     * @returns A reference to itself.
     */
    Vector2.prototype.setFromScrollEvent = function (event) {
        var delta = new Vector2();
        if (event.deltaX !== undefined) {
            delta.x = event.deltaX;
        }
        if (event.deltaY !== undefined) {
            delta.y = event.deltaY;
        }
        this.copy(delta);
        return this;
    };
    /**
     * Set from the values of another vector.
     * @param v - Another vector.
     * @returns A reference to itself.
     */
    Vector2.prototype.copy = function (v) {
        this.set(v.x, v.y);
        return this;
    };
    /**
     * Create a new vector with the same values.
     * @returns A new vector.
     */
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    /**
     * Test equality of values for two vectors.
     * @param v - Another Vector.
     * @returns Whether vectors are equal.
     */
    Vector2.prototype.equals = function (v) {
        return ((this.x === v.x) && (this.y === v.y));
    };
    /**
     * Test whether the difference between two vectors is smaller than a given delta.
     * If no delta is passed the epsilon value is used.
     * @param v - Another Vector.
     * @param delta - The maximum difference.
     * @returns The result of the test.
     */
    Vector2.prototype.closeTo = function (v, delta) {
        return (mathHelper_1.MathHelper.closeTo(this.x, v.x, delta) &&
            mathHelper_1.MathHelper.closeTo(this.y, v.y, delta));
    };
    /**
     * Add another vector.
     * @param v - Another vector.
     * @returns A reference to itself.
     */
    Vector2.prototype.add = function (v) {
        this.set(this.x + v.x, this.y + v.y);
        return this;
    };
    /**
     * Subtract another vector.
     * @param v - Another vector.
     * @returns A reference to itself.
     */
    Vector2.prototype.sub = function (v) {
        this.set(this.x - v.x, this.y - v.y);
        return this;
    };
    /**
     * Multiply with another vector elementwise.
     * @param v - Another vector.
     * @returns A reference to itself.
     */
    Vector2.prototype.multiply = function (v) {
        this.set(this.x * v.x, this.y * v.y);
        return this;
    };
    /**
     * Divide with another vector elementwise.
     * @param v - Another vector.
     * @returns A reference to itself.
     */
    Vector2.prototype.divide = function (v) {
        this.set(this.x / v.x, this.y / v.y);
        return this;
    };
    /**
     * Add a single value to all vector elements.
     * @param s - A single value.
     * @returns A reference to itself.
     */
    Vector2.prototype.addScalar = function (s) {
        this.set(this.x + s, this.y + s);
        return this;
    };
    /**
     * Multiply all vector elements with a single value.
     * @param s - A single value.
     * @returns A reference to itself.
     */
    Vector2.prototype.multiplyScalar = function (s) {
        this.set(this.x * s, this.y * s);
        return this;
    };
    /**
     * Calculate the modulo of all vector elements with a single value.
     * @param s - A single value.
     * @returns A reference to itself.
     */
    Vector2.prototype.modulo = function (s) {
        this.set(this.x % s, this.y % s);
        return this;
    };
    /**
     * Transform vector with a matrix.
     * @param m - A matrix.
     * @returns A reference to itself.
     */
    Vector2.prototype.transform = function (m) {
        var a = m.elements;
        var x = a[0] * this.x + a[1] * this.y + a[2];
        var y = a[3] * this.x + a[4] * this.y + a[5];
        var w = a[6] * this.x + a[7] * this.y + a[8];
        this.set(x / w, y / w);
        return this;
    };
    /**
     * Set to the elementwise minimum of two vectors.
     * @param v - Another vector to compare with.
     * @returns A reference to itself.
     */
    Vector2.prototype.min = function (v) {
        this.set(Math.min(this.x, v.x), Math.min(this.y, v.y));
        return this;
    };
    /**
     * Set to the elementwise maximum of two vectors.
     * @param v - Another vector to compare with.
     * @returns A reference to itself.
     */
    Vector2.prototype.max = function (v) {
        this.set(Math.max(this.x, v.x), Math.max(this.y, v.y));
        return this;
    };
    /**
     * Set to the elementwise absolute values of itself.
     * @returns A reference to itself.
     */
    Vector2.prototype.abs = function () {
        this.set(Math.abs(this.x), Math.abs(this.y));
        return this;
    };
    /**
     * Round vector elementwise.
     * @param precision - The number of decimal places to round to. Optional.
     * @returns A reference to itself.
     */
    Vector2.prototype.round = function (precision) {
        if (precision) {
            var factor = Math.pow(10, precision);
            var x = Math.round((this.x + Number.EPSILON) * factor) / factor;
            var y = Math.round((this.y + Number.EPSILON) * factor) / factor;
            this.set(x, y);
        }
        else {
            this.set(Math.round(this.x), Math.round(this.y));
        }
        return this;
    };
    /**
     * Floor vector elementwise.
     * @returns A reference to itself.
     */
    Vector2.prototype.floor = function () {
        this.set(Math.floor(this.x), Math.floor(this.y));
        return this;
    };
    /**
     * Ceil vector elementwise.
     * @returns A reference to itself.
     */
    Vector2.prototype.ceil = function () {
        this.set(Math.ceil(this.x), Math.ceil(this.y));
        return this;
    };
    /**
     * Confine point to nearest position inside box.
     * @param b - The bounding box.
     * @returns A reference to itself.
     */
    Vector2.prototype.clampInBox = function (b) {
        this.min(b.max);
        this.max(b.min);
        return this;
    };
    /**
     * Get the length of the vector.
     * @returns The length.
     */
    Vector2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    /**
     * Normalize vector to length 1.
     * @returns A reference to itself.
     */
    Vector2.prototype.normalize = function () {
        var length = this.length();
        if (length !== 0) {
            this.multiplyScalar(1 / length);
        }
        return this;
    };
    /**
     * Set vector to a specific length.
     * @param l - The intended length.
     * @returns A reference to itself.
     */
    Vector2.prototype.setLength = function (l) {
        var oldLength = this.length();
        if (oldLength !== 0) {
            this.multiplyScalar(l / oldLength);
        }
        return this;
    };
    /**
     * Get the distance to another vector.
     * @param v - Another vector.
     * @returns The distance to the other vector.
     */
    Vector2.prototype.distanceTo = function (v) {
        return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2));
    };
    /**
     * Get the angle to the x-axis in counterclockwise direction.
     * @returns The angle.
     */
    Vector2.prototype.angle = function () {
        var angle = Math.atan2(this.y, this.x);
        if (angle < 0) {
            angle += 2 * Math.PI;
        }
        return new angle_1.Angle(angle);
    };
    /**
     * Set the vector to the given angle relative to the x-axis in counterclockwise direction.
     * @param a - The angle.
     * @returns A reference to itself.
     */
    Vector2.prototype.setAngle = function (a) {
        var length = this.length();
        var x = Math.cos(a.radians);
        var y = Math.sin(a.radians);
        var v = new Vector2(x, y);
        // Apply old length to vector.
        v.setLength(length);
        this.copy(v);
        return this;
    };
    /**
     * Rotate the vector in counterclockwise direction.
     * @param a - The angle.
     * @returns A reference to itself.
     */
    Vector2.prototype.rotate = function (a) {
        var endAngle = this.angle().add(a);
        this.setAngle(endAngle);
        return this;
    };
    /**
     * Get the angle between two vectors in counterclockwise direction.
     * @param v - Another vector.
     * @returns The angle.
     */
    Vector2.prototype.angleTo = function (v) {
        return v.angle().sub(this.angle()).normalize();
    };
    /**
     * Get the dot product with another vector.
     * @param v - Another vector.
     * @returns The dot product with the other vector.
     */
    Vector2.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y;
    };
    /**
     * Get the cross product with another vector.
     * @param v - Another vector.
     * @returns The cross product with the other vector.
     */
    Vector2.prototype.cross = function (v) {
        return this.x * v.y - this.y * v.x;
    };
    /**
     * Save an internal snapshot of itself.
     * @returns A reference to itself.
     */
    Vector2.prototype.snap = function () {
        this.snapshot = this.clone();
        return this;
    };
    /**
     * Set the vector by applying a drag vector to the last saved snapshot.
     * @param v - The drag vector.
     * @returns A reference to itself.
     */
    Vector2.prototype.drag = function (v) {
        if (this.snapshot !== undefined) {
            this.copy(this.snapshot.clone().add(v));
        }
        return this;
    };
    /**
     * Create a new version of the vector projected on a line.
     * @param l - The line.
     * @returns A projected vector.
     */
    Vector2.prototype.projectOnLine = function (l) {
        var support = this.clone().sub(l.start);
        var direction = l.end.clone().sub(l.start);
        var directionN = direction.clone().normalize();
        var d = support.dot(directionN);
        return directionN.clone().multiplyScalar(d).add(l.start);
    };
    /**
     * Create a new version of the vector projected on a line segment.
     * @param l - The line.
     * @returns A projected vector or null if projection not possible.
     */
    Vector2.prototype.projectOnLineSegment = function (l) {
        var support = this.clone().sub(l.start);
        var direction = l.end.clone().sub(l.start);
        var directionN = direction.clone().normalize();
        var d = support.dot(directionN);
        // Check if the result of the projection would lie between the endpoints of the line segment.
        if (d >= 0 && d <= direction.length()) {
            return directionN.clone().multiplyScalar(d).add(l.start);
        }
        else {
            // Projection not possible because the projected point would not lie on the line segment.
            return null;
        }
    };
    /**
     * Create a new version of the vector perpendicular to it.
     * @returns A perpendicular vector.
     */
    Vector2.prototype.perpendicular = function () {
        return new Vector2(this.y, -this.x);
    };
    return Vector2;
}(observable_1.Observable));
exports.Vector2 = Vector2;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/vector2Array.js":
/*!***********************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/vector2Array.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2Array = void 0;
var box2_1 = __webpack_require__(/*! ./box2 */ "./node_modules/@daign/math/dist/lib/box2.js");
var genericArray_1 = __webpack_require__(/*! ./genericArray */ "./node_modules/@daign/math/dist/lib/genericArray.js");
var vector2_1 = __webpack_require__(/*! ./vector2 */ "./node_modules/@daign/math/dist/lib/vector2.js");
/**
 * Class for arrays of 2D vectors implementing the observable pattern.
 */
var Vector2Array = /** @class */ (function (_super) {
    __extends(Vector2Array, _super);
    /**
     * Constructor.
     */
    function Vector2Array() {
        return _super.call(this) || this;
    }
    /**
     * Initialize with a given number of vectors.
     * @param n - The number of vectors to initialize.
     * @returns A reference to itself.
     */
    Vector2Array.prototype.initializeElements = function (n) {
        var elements = [];
        for (var i = 0; i < n; i += 1) {
            elements.push(new vector2_1.Vector2());
        }
        this.elements = elements;
        return this;
    };
    /**
     * Set each vector to the value of the given array of vectors individually.
     * Will throw an error when the array lengths don't match.
     * Will notify observers for every individual change in actual value.
     * @param arr - Another array.
     * @returns A reference to itself.
     */
    Vector2Array.prototype.copyElementWise = function (arr) {
        if (this.length !== arr.length) {
            throw new Error('Array lengths do not match.');
        }
        this.iterate(function (element, index) {
            var sourceElement = arr.getElement(index);
            // Source element can't be undefined because of the length check.
            element.copy(sourceElement);
        });
        return this;
    };
    /**
     * Create an array with the same elements.
     * @returns A new array.
     */
    Vector2Array.prototype.clone = function () {
        var arr = new Vector2Array();
        arr.elements = this.elements;
        return arr;
    };
    /**
     * Create an array with copies of the elements.
     * @returns A new array.
     */
    Vector2Array.prototype.cloneDeep = function () {
        var arr = new Vector2Array();
        arr.elements = this.elements.map(function (element) { return element.clone(); });
        return arr;
    };
    /**
     * Apply a matrix transformation on every vector in the array.
     * @param m - The transformation matrix.
     * @returns A reference to itself.
     */
    Vector2Array.prototype.transform = function (m) {
        this.iterate(function (element) {
            element.transform(m);
        });
        return this;
    };
    /**
     * Get the bounding box of all vectors of the array.
     * @returns The bounding box.
     */
    Vector2Array.prototype.getBox = function () {
        var box = new box2_1.Box2();
        this.elements.forEach(function (element) {
            box.expandByPoint(element);
        });
        return box;
    };
    return Vector2Array;
}(genericArray_1.GenericArray));
exports.Vector2Array = Vector2Array;


/***/ }),

/***/ "./node_modules/@daign/math/dist/lib/vector3.js":
/*!******************************************************!*\
  !*** ./node_modules/@daign/math/dist/lib/vector3.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = void 0;
var observable_1 = __webpack_require__(/*! @daign/observable */ "./node_modules/@daign/observable/dist/lib/index.js");
/**
 * 3D vector.
 */
var Vector3 = /** @class */ (function (_super) {
    __extends(Vector3, _super);
    /**
     * Constructor.
     * @param x - First value.
     * @param y - Second value.
     * @param z - Third value.
     */
    function Vector3(x, y, z) {
        var _this = _super.call(this) || this;
        _this._x = x || 0;
        _this._y = y || 0;
        _this._z = z || 0;
        return _this;
    }
    Object.defineProperty(Vector3.prototype, "x", {
        /**
         * Get the x value.
         * @returns The x value.
         */
        get: function () {
            return this._x;
        },
        /**
         * Set the x value.
         * @param value - The numeric x value.
         */
        set: function (value) {
            // Only call observers if something changed.
            if (this._x !== value) {
                this._x = value;
                this.notifyObservers();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "y", {
        /**
         * Get the y value.
         * @returns The y value.
         */
        get: function () {
            return this._y;
        },
        /**
         * Set the y value.
         * @param value - The numeric y value.
         */
        set: function (value) {
            // Only call observers if something changed.
            if (this._y !== value) {
                this._y = value;
                this.notifyObservers();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "z", {
        /**
         * Get the z value.
         * @returns The z value.
         */
        get: function () {
            return this._z;
        },
        /**
         * Set the z value.
         * @param value - The numeric z value.
         */
        set: function (value) {
            // Only call observers if something changed.
            if (this._z !== value) {
                this._z = value;
                this.notifyObservers();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the values.
     * @param x - First value.
     * @param y - Second value.
     * @param z - Third value.
     * @returns A reference to itself.
     */
    Vector3.prototype.set = function (x, y, z) {
        // Only call observers if something changed.
        if (this._x !== x || this._y !== y || this._z !== z) {
            this._x = x;
            this._y = y;
            this._z = z;
            this.notifyObservers();
        }
        return this;
    };
    /**
     * Set the values without notifying observers.
     * @param x - First value.
     * @param y - Second value.
     * @param z - Third value.
     * @returns A reference to itself.
     */
    Vector3.prototype.setSilent = function (x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
        return this;
    };
    /**
     * Set from the values of another vector.
     * @param v - Another Vector.
     * @returns A reference to itself.
     */
    Vector3.prototype.copy = function (v) {
        this.set(v.x, v.y, v.z);
        return this;
    };
    /**
     * Create a new vector with the same values.
     * @returns A new vector.
     */
    Vector3.prototype.clone = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    /**
     * Test equality of values for two vectors.
     * @param v - Another Vector.
     * @returns Whether vectors are equal.
     */
    Vector3.prototype.equals = function (v) {
        return ((this.x === v.x) && (this.y === v.y) && (this.z === v.z));
    };
    /**
     * Add another vector.
     * @param v - Another Vector.
     * @returns A reference to itself.
     */
    Vector3.prototype.add = function (v) {
        this.set(this.x + v.x, this.y + v.y, this.z + v.z);
        return this;
    };
    /**
     * Subtract another vector.
     * @param v - Another Vector.
     * @returns A reference to itself.
     */
    Vector3.prototype.sub = function (v) {
        this.set(this.x - v.x, this.y - v.y, this.z - v.z);
        return this;
    };
    /**
     * Mutiply with another vector elementwise.
     * @param v - Another Vector.
     * @returns A reference to itself.
     */
    Vector3.prototype.multiply = function (v) {
        this.set(this.x * v.x, this.y * v.y, this.z * v.z);
        return this;
    };
    /**
     * Divide with another vector elementwise.
     * @param v - Another Vector.
     * @returns A reference to itself.
     */
    Vector3.prototype.divide = function (v) {
        this.set(this.x / v.x, this.y / v.y, this.z / v.z);
        return this;
    };
    /**
     * Add a single value to all vector elements.
     * @param s - A single value.
     * @returns A reference to itself.
     */
    Vector3.prototype.addScalar = function (s) {
        this.set(this.x + s, this.y + s, this.z + s);
        return this;
    };
    /**
     * Multiply all vector elements with a single value.
     * @param s - A single value.
     * @returns A reference to itself.
     */
    Vector3.prototype.multiplyScalar = function (s) {
        this.set(this.x * s, this.y * s, this.z * s);
        return this;
    };
    /**
     * Set to the elementwise minimum of two vectors.
     * @param v - Another vector to compare with.
     * @returns A reference to itself.
     */
    Vector3.prototype.min = function (v) {
        this.set(Math.min(this.x, v.x), Math.min(this.y, v.y), Math.min(this.z, v.z));
        return this;
    };
    /**
     * Set to the elementwise maximum of two vectors.
     * @param v - Another vector to compare with.
     * @returns A reference to itself.
     */
    Vector3.prototype.max = function (v) {
        this.set(Math.max(this.x, v.x), Math.max(this.y, v.y), Math.max(this.z, v.z));
        return this;
    };
    return Vector3;
}(observable_1.Observable));
exports.Vector3 = Vector3;


/***/ }),

/***/ "./node_modules/@daign/observable/dist/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@daign/observable/dist/lib/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Observable = void 0;
var observable_1 = __webpack_require__(/*! ./observable */ "./node_modules/@daign/observable/dist/lib/observable.js");
Object.defineProperty(exports, "Observable", ({ enumerable: true, get: function () { return observable_1.Observable; } }));


/***/ }),

/***/ "./node_modules/@daign/observable/dist/lib/observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/@daign/observable/dist/lib/observable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Observable = void 0;
/**
 * Basic implementation of observable pattern.
 */
var Observable = /** @class */ (function () {
    /**
     * Constructor
     */
    function Observable() {
        // Array of callbacks from the observers
        this.listeners = [];
    }
    /**
     * Add an observer by passing a callback
     * @param callback Callback of the observer
     * @returns A callback to remove the observer
     */
    Observable.prototype.subscribeToChanges = function (callback) {
        var _this = this;
        this.listeners.push(callback);
        // Return callback that removes the listener
        return function () {
            var i = _this.listeners.indexOf(callback);
            if (i > -1) {
                _this.listeners.splice(i, 1);
            }
        };
    };
    /**
     * Notify all observers by calling their callbacks
     */
    Observable.prototype.notifyObservers = function () {
        this.listeners.forEach(function (callback) {
            callback();
        });
    };
    /**
     * Remove all observers
     */
    Observable.prototype.clearObservers = function () {
        this.listeners = [];
    };
    return Observable;
}());
exports.Observable = Observable;


/***/ }),

/***/ "./node_modules/color-scheme/lib/color-scheme.js":
/*!*******************************************************!*\
  !*** ./node_modules/color-scheme/lib/color-scheme.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.12.7
(function() {
  var ColorScheme,
    slice = [].slice;

  ColorScheme = (function() {
    var clone, l, len, ref, typeIsArray, word;

    typeIsArray = Array.isArray || function(value) {
      return {}.toString.call(value) === '[object Array]';
    };

    ColorScheme.SCHEMES = {};

    ref = "mono monochromatic contrast triade tetrade analogic".split(/\s+/);
    for (l = 0, len = ref.length; l < len; l++) {
      word = ref[l];
      ColorScheme.SCHEMES[word] = true;
    }

    ColorScheme.PRESETS = {
      "default": [-1, -1, 1, -0.7, 0.25, 1, 0.5, 1],
      pastel: [0.5, -0.9, 0.5, 0.5, 0.1, 0.9, 0.75, 0.75],
      soft: [0.3, -0.8, 0.3, 0.5, 0.1, 0.9, 0.5, 0.75],
      light: [0.25, 1, 0.5, 0.75, 0.1, 1, 0.5, 1],
      hard: [1, -1, 1, -0.6, 0.1, 1, 0.6, 1],
      pale: [0.1, -0.85, 0.1, 0.5, 0.1, 1, 0.1, 0.75]
    };

    ColorScheme.COLOR_WHEEL = {
      0: [255, 0, 0, 100],
      15: [255, 51, 0, 100],
      30: [255, 102, 0, 100],
      45: [255, 128, 0, 100],
      60: [255, 153, 0, 100],
      75: [255, 178, 0, 100],
      90: [255, 204, 0, 100],
      105: [255, 229, 0, 100],
      120: [255, 255, 0, 100],
      135: [204, 255, 0, 100],
      150: [153, 255, 0, 100],
      165: [51, 255, 0, 100],
      180: [0, 204, 0, 80],
      195: [0, 178, 102, 70],
      210: [0, 153, 153, 60],
      225: [0, 102, 178, 70],
      240: [0, 51, 204, 80],
      255: [25, 25, 178, 70],
      270: [51, 0, 153, 60],
      285: [64, 0, 153, 60],
      300: [102, 0, 153, 60],
      315: [153, 0, 153, 60],
      330: [204, 0, 153, 80],
      345: [229, 0, 102, 90]
    };

    function ColorScheme() {
      var colors, m;
      colors = [];
      for (m = 1; m <= 4; m++) {
        colors.push(new ColorScheme.mutablecolor(60));
      }
      this.col = colors;
      this._scheme = 'mono';
      this._distance = 0.5;
      this._web_safe = false;
      this._add_complement = false;
    }


    /*
    
    colors()
    
    Returns an array of 4, 8, 12 or 16 colors in RRGGBB hexidecimal notation
    (without a leading "#") depending on the color scheme and addComplement
    parameter. For each set of four, the first is usually the most saturated color,
    the second a darkened version, the third a pale version and fourth
    a less-pale version.
    
    For example: With a contrast scheme, "colors()" would return eight colors.
    Indexes 1 and 5 could be background colors, 2 and 6 could be foreground colors.
    
    Trust me, it's much better if you check out the Color Scheme web site, whose
    URL is listed in "Description"
     */

    ColorScheme.prototype.colors = function() {
      var dispatch, h, i, j, m, n, output, ref1, used_colors;
      used_colors = 1;
      h = this.col[0].get_hue();
      dispatch = {
        mono: (function(_this) {
          return function() {};
        })(this),
        contrast: (function(_this) {
          return function() {
            used_colors = 2;
            _this.col[1].set_hue(h);
            return _this.col[1].rotate(180);
          };
        })(this),
        triade: (function(_this) {
          return function() {
            var dif;
            used_colors = 3;
            dif = 60 * _this._distance;
            _this.col[1].set_hue(h);
            _this.col[1].rotate(180 - dif);
            _this.col[2].set_hue(h);
            return _this.col[2].rotate(180 + dif);
          };
        })(this),
        tetrade: (function(_this) {
          return function() {
            var dif;
            used_colors = 4;
            dif = 90 * _this._distance;
            _this.col[1].set_hue(h);
            _this.col[1].rotate(180);
            _this.col[2].set_hue(h);
            _this.col[2].rotate(180 + dif);
            _this.col[3].set_hue(h);
            return _this.col[3].rotate(dif);
          };
        })(this),
        analogic: (function(_this) {
          return function() {
            var dif;
            used_colors = _this._add_complement ? 4 : 3;
            dif = 60 * _this._distance;
            _this.col[1].set_hue(h);
            _this.col[1].rotate(dif);
            _this.col[2].set_hue(h);
            _this.col[2].rotate(360 - dif);
            _this.col[3].set_hue(h);
            return _this.col[3].rotate(180);
          };
        })(this)
      };
      dispatch['monochromatic'] = dispatch['mono'];
      if (dispatch[this._scheme] != null) {
        dispatch[this._scheme]();
      } else {
        throw "Unknown color scheme name: " + this._scheme;
      }
      output = [];
      for (i = m = 0, ref1 = used_colors - 1; 0 <= ref1 ? m <= ref1 : m >= ref1; i = 0 <= ref1 ? ++m : --m) {
        for (j = n = 0; n <= 3; j = ++n) {
          output[i * 4 + j] = this.col[i].get_hex(this._web_safe, j);
        }
      }
      return output;
    };


    /*
    
    colorset()
    
    Returns a list of lists of the colors in groups of four. This method simply
    allows you to reference a color in the scheme by its group isntead of its
    absolute index in the list of colors.  I am assuming that "colorset()"
    will make it easier to use this module with the templating systems that are
    out there.
    
    For example, if you were to follow the synopsis, say you wanted to retrieve
    the two darkest colors from the first two groups of the scheme, which is
    typically the second color in the group. You could retrieve them with
    "colors()"
    
        first_background  = (scheme.colors())[1];
        second_background = (scheme.colors())[5];
    
    Or, with this method,
    
        first_background  = (scheme.colorset())[0][1]
        second_background = (scheme.colorset())[1][1]
     */

    ColorScheme.prototype.colorset = function() {
      var flat_colors, grouped_colors;
      flat_colors = clone(this.colors());
      grouped_colors = [];
      while (flat_colors.length > 0) {
        grouped_colors.push(flat_colors.splice(0, 4));
      }
      return grouped_colors;
    };


    /*
    
    from_hue( degrees )
    
    Sets the base color hue, where 'degrees' is an integer. (Values greater than
    359 and less than 0 wrap back around the wheel.)
    
    The default base hue is 0, or bright red.
     */

    ColorScheme.prototype.from_hue = function(h) {
      if (h == null) {
        throw "from_hue needs an argument";
      }
      this.col[0].set_hue(h);
      return this;
    };

    ColorScheme.prototype.rgb2ryb = function() {
      var blue, green, iN, maxgreen, maxyellow, red, rgb, white, yellow;
      rgb = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if ((rgb[0] != null) && typeIsArray(rgb[0])) {
        rgb = rgb[0];
      }
      red = rgb[0], green = rgb[1], blue = rgb[2];
      white = Math.min(red, green, blue);
      red -= white;
      green -= white;
      blue -= white;
      maxgreen = Math.max(red, green, blue);
      yellow = Math.min(red, green);
      red -= yellow;
      green -= yellow;
      if (blue > 0 && green > 0) {
        blue /= 2;
        green /= 2;
      }
      yellow += green;
      blue += green;
      maxyellow = Math.max(red, yellow, blue);
      if (maxyellow > 0) {
        iN = maxgreen / maxyellow;
        red *= iN;
        yellow *= iN;
        blue *= iN;
      }
      red += white;
      yellow += white;
      blue += white;
      return [Math.floor(red), Math.floor(yellow), Math.floor(blue)];
    };

    ColorScheme.prototype.rgb2hsv = function() {
      var b, d, g, h, max, min, r, rgb, s, v;
      rgb = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if ((rgb[0] != null) && typeIsArray(rgb[0])) {
        rgb = rgb[0];
      }
      r = rgb[0], g = rgb[1], b = rgb[2];
      r /= 255;
      g /= 255;
      b /= 255;
      min = Math.min.apply(Math, [r, g, b]);
      max = Math.max.apply(Math, [r, g, b]);
      d = max - min;
      v = max;
      s;
      if (d > 0) {
        s = d / max;
      } else {
        return [0, 0, v];
      }
      h = (r === max ? (g - b) / d : (g === max ? 2 + (b - r) / d : 4 + (r - g) / d));
      h *= 60;
      h %= 360;
      return [h, s, v];
    };

    ColorScheme.prototype.rgbToHsv = function() {
      var b, d, g, h, max, min, r, rgb, s, v;
      rgb = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if ((rgb[0] != null) && typeIsArray(rgb[0])) {
        rgb = rgb[0];
      }
      r = rgb[0], g = rgb[1], b = rgb[2];
      r /= 255;
      g /= 255;
      b /= 255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      h = void 0;
      s = void 0;
      v = max;
      d = max - min;
      s = max === 0 ? 0 : d / max;
      if (max === min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
        }
        h /= 6;
      }
      return [h, s, v];
    };


    /*
    
    from_hex( color )
    
    Sets the base color to the given color, where 'color' is in the hexidecimal
    form RRGGBB. 'color' should not be preceded with a hash (#).
    
    The default base color is the equivalent of #ff0000, or bright red.
     */

    ColorScheme.prototype.from_hex = function(hex) {
      var b, g, h, h0, h1, h2, hsv, i1, i2, num, r, ref1, ref2, rgbcap, s, v;
      if (hex == null) {
        throw "from_hex needs an argument";
      }
      if (!/^([0-9A-F]{2}){3}$/im.test(hex)) {
        throw "from_hex(" + hex + ") - argument must be in the form of RRGGBB";
      }
      rgbcap = /(..)(..)(..)/.exec(hex).slice(1, 4);
      ref1 = (function() {
        var len1, m, results;
        results = [];
        for (m = 0, len1 = rgbcap.length; m < len1; m++) {
          num = rgbcap[m];
          results.push(parseInt(num, 16));
        }
        return results;
      })(), r = ref1[0], g = ref1[1], b = ref1[2];
      ref2 = this.rgb2ryb([r, g, b]), r = ref2[0], g = ref2[1], b = ref2[2];
      hsv = this.rgbToHsv(r, g, b);
      h0 = hsv[0];
      h1 = 0;
      h2 = 1000;
      i1 = null;
      i2 = null;
      h = null;
      s = null;
      v = null;
      h = hsv[0];
      s = hsv[1];
      v = hsv[2];
      this.from_hue(h * 360);
      this._set_variant_preset([s, v, s, v * 0.7, s * 0.25, 1, s * 0.5, 1]);
      return this;
    };


    /*
    
    add_complement( BOOLEAN )
    
    If BOOLEAN is true, an extra set of colors will be produced using the
    complement of the selected color.
    
    This only works with the analogic color scheme. The default is false.
     */

    ColorScheme.prototype.add_complement = function(b) {
      if (b == null) {
        throw "add_complement needs an argument";
      }
      this._add_complement = b;
      return this;
    };


    /*
    
    web_safe( BOOL )
    
    Sets whether the colors returned by L<"colors()"> or L<"colorset()"> will be
    web-safe.
    
    The default is false.
     */

    ColorScheme.prototype.web_safe = function(b) {
      if (b == null) {
        throw "web_safe needs an argument";
      }
      this._web_safe = b;
      return this;
    };


    /*
    
    distance( FLOAT )
    
    'FLOAT'> must be a value from 0 to 1. You might use this with the "triade"
    "tetrade" or "analogic" color schemes.
    
    The default is 0.5.
     */

    ColorScheme.prototype.distance = function(d) {
      if (d == null) {
        throw "distance needs an argument";
      }
      if (d < 0) {
        throw "distance(" + d + ") - argument must be >= 0";
      }
      if (d > 1) {
        throw "distance(" + d + ") - argument must be <= 1";
      }
      this._distance = d;
      return this;
    };


    /*
    
    scheme( name )
    
    'name' must be a valid color scheme name. See "Color Schemes". The default
    is "mono"
     */

    ColorScheme.prototype.scheme = function(name) {
      if (name == null) {
        return this._scheme;
      } else {
        if (ColorScheme.SCHEMES[name] == null) {
          throw "'" + name + "' isn't a valid scheme name";
        }
        this._scheme = name;
        return this;
      }
    };


    /*
    
    variation( name )
    
    'name' must be a valid color variation name. See "Color Variations"
     */

    ColorScheme.prototype.variation = function(v) {
      if (v == null) {
        throw "variation needs an argument";
      }
      if (ColorScheme.PRESETS[v] == null) {
        throw "'$v' isn't a valid variation name";
      }
      this._set_variant_preset(ColorScheme.PRESETS[v]);
      return this;
    };

    ColorScheme.prototype._set_variant_preset = function(p) {
      var i, m, results;
      results = [];
      for (i = m = 0; m <= 3; i = ++m) {
        results.push(this.col[i].set_variant_preset(p));
      }
      return results;
    };

    clone = function(obj) {
      var flags, key, newInstance;
      if ((obj == null) || typeof obj !== 'object') {
        return obj;
      }
      if (obj instanceof Date) {
        return new Date(obj.getTime());
      }
      if (obj instanceof RegExp) {
        flags = '';
        if (obj.global != null) {
          flags += 'g';
        }
        if (obj.ignoreCase != null) {
          flags += 'i';
        }
        if (obj.multiline != null) {
          flags += 'm';
        }
        if (obj.sticky != null) {
          flags += 'y';
        }
        return new RegExp(obj.source, flags);
      }
      newInstance = new obj.constructor();
      for (key in obj) {
        newInstance[key] = clone(obj[key]);
      }
      return newInstance;
    };

    ColorScheme.mutablecolor = (function() {
      mutablecolor.prototype.hue = 0;

      mutablecolor.prototype.saturation = [];

      mutablecolor.prototype.value = [];

      mutablecolor.prototype.base_red = 0;

      mutablecolor.prototype.base_green = 0;

      mutablecolor.prototype.base_saturation = 0;

      mutablecolor.prototype.base_value = 0;

      function mutablecolor(hue) {
        if (hue == null) {
          throw "No hue specified";
        }
        this.saturation = [];
        this.value = [];
        this.base_red = 0;
        this.base_green = 0;
        this.base_blue = 0;
        this.base_saturation = 0;
        this.base_value = 0;
        this.set_hue(hue);
        this.set_variant_preset(ColorScheme.PRESETS['default']);
      }

      mutablecolor.prototype.get_hue = function() {
        return this.hue;
      };

      mutablecolor.prototype.set_hue = function(h) {
        var avrg, color, colorset1, colorset2, d, derivative1, derivative2, en, i, k;
        avrg = function(a, b, k) {
          return a + Math.round((b - a) * k);
        };
        this.hue = Math.round(h % 360);
        d = this.hue % 15 + (this.hue - Math.floor(this.hue));
        k = d / 15;
        derivative1 = this.hue - Math.floor(d);
        derivative2 = (derivative1 + 15) % 360;
        if (derivative1 === 360) {
          derivative1 = 0;
        }
        if (derivative2 === 360) {
          derivative2 = 0;
        }
        colorset1 = ColorScheme.COLOR_WHEEL[derivative1];
        colorset2 = ColorScheme.COLOR_WHEEL[derivative2];
        en = {
          red: 0,
          green: 1,
          blue: 2,
          value: 3
        };
        for (color in en) {
          i = en[color];
          this["base_" + color] = avrg(colorset1[i], colorset2[i], k);
        }
        this.base_saturation = avrg(100, 100, k) / 100;
        return this.base_value /= 100;
      };

      mutablecolor.prototype.rotate = function(angle) {
        var newhue;
        newhue = (this.hue + angle) % 360;
        return this.set_hue(newhue);
      };

      mutablecolor.prototype.get_saturation = function(variation) {
        var s, x;
        x = this.saturation[variation];
        s = x < 0 ? -x * this.base_saturation : x;
        if (s > 1) {
          s = 1;
        }
        if (s < 0) {
          s = 0;
        }
        return s;
      };

      mutablecolor.prototype.get_value = function(variation) {
        var v, x;
        x = this.value[variation];
        v = x < 0 ? -x * this.base_value : x;
        if (v > 1) {
          v = 1;
        }
        if (v < 0) {
          v = 0;
        }
        return v;
      };

      mutablecolor.prototype.set_variant = function(variation, s, v) {
        this.saturation[variation] = s;
        return this.value[variation] = v;
      };

      mutablecolor.prototype.set_variant_preset = function(p) {
        var i, m, results;
        results = [];
        for (i = m = 0; m <= 3; i = ++m) {
          results.push(this.set_variant(i, p[2 * i], p[2 * i + 1]));
        }
        return results;
      };

      mutablecolor.prototype.get_hex = function(web_safe, variation) {
        var c, color, formatted, i, k, len1, len2, m, max, min, n, ref1, rgb, rgbVal, s, str, v;
        max = Math.max.apply(Math, (function() {
          var len1, m, ref1, results;
          ref1 = ['red', 'green', 'blue'];
          results = [];
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            color = ref1[m];
            results.push(this["base_" + color]);
          }
          return results;
        }).call(this));
        min = Math.min.apply(Math, (function() {
          var len1, m, ref1, results;
          ref1 = ['red', 'green', 'blue'];
          results = [];
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            color = ref1[m];
            results.push(this["base_" + color]);
          }
          return results;
        }).call(this));
        v = (variation < 0 ? this.base_value : this.get_value(variation)) * 255;
        s = variation < 0 ? this.base_saturation : this.get_saturation(variation);
        k = max > 0 ? v / max : 0;
        rgb = [];
        ref1 = ['red', 'green', 'blue'];
        for (m = 0, len1 = ref1.length; m < len1; m++) {
          color = ref1[m];
          rgbVal = Math.min.apply(Math, [255, Math.round(v - (v - this["base_" + color] * k) * s)]);
          rgb.push(rgbVal);
        }
        if (web_safe) {
          rgb = (function() {
            var len2, n, results;
            results = [];
            for (n = 0, len2 = rgb.length; n < len2; n++) {
              c = rgb[n];
              results.push(Math.round(c / 51) * 51);
            }
            return results;
          })();
        }
        formatted = "";
        for (n = 0, len2 = rgb.length; n < len2; n++) {
          i = rgb[n];
          str = i.toString(16);
          if (str.length < 2) {
            str = "0" + str;
          }
          formatted += str;
        }
        return formatted;
      };

      return mutablecolor;

    })();

    return ColorScheme;

  })();

  if (( true && module !== null) && (module.exports != null)) {
    module.exports = ColorScheme;
  } else {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return ColorScheme;
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  }

}).call(this);

//# sourceMappingURL=color-scheme.js.map


/***/ }),

/***/ "./node_modules/dat.gui/build/dat.gui.module.js":
/*!******************************************************!*\
  !*** ./node_modules/dat.gui/build/dat.gui.module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GUI": () => (/* binding */ GUI$1),
/* harmony export */   "color": () => (/* binding */ color),
/* harmony export */   "controllers": () => (/* binding */ controllers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dom": () => (/* binding */ dom$1),
/* harmony export */   "gui": () => (/* binding */ gui)
/* harmony export */ });
/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return obj instanceof Function;
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
      this.__state.space = 'HEX';
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function () {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function () {
      dom.addClass(this, 'drag').bind(window, 'touchend', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller, {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}

var color = {
  Color: Color,
  math: ColorMath,
  interpret: interpret
};
var controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};
var dom$1 = { dom: dom };
var gui = { GUI: GUI };
var GUI$1 = GUI;
var index = {
  color: color,
  controllers: controllers,
  dom: dom$1,
  gui: gui,
  GUI: GUI$1
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
//# sourceMappingURL=dat.gui.module.js.map


/***/ }),

/***/ "./node_modules/event-lite/event-lite.js":
/*!***********************************************!*\
  !*** ./node_modules/event-lite/event-lite.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */

function EventLite() {
  if (!(this instanceof EventLite)) return new EventLite();
}

(function(EventLite) {
  // export the class for node.js
  if (true) module.exports = EventLite;

  // property name to hold listeners
  var LISTENERS = "listeners";

  // methods to export
  var methods = {
    on: on,
    once: once,
    off: off,
    emit: emit
  };

  // mixin to self
  mixin(EventLite.prototype);

  // export mixin function
  EventLite.mixin = mixin;

  /**
   * Import on(), once(), off() and emit() methods into target object.
   *
   * @function EventLite.mixin
   * @param target {Prototype}
   */

  function mixin(target) {
    for (var key in methods) {
      target[key] = methods[key];
    }
    return target;
  }

  /**
   * Add an event listener.
   *
   * @function EventLite.prototype.on
   * @param type {string}
   * @param func {Function}
   * @returns {EventLite} Self for method chaining
   */

  function on(type, func) {
    getListeners(this, type).push(func);
    return this;
  }

  /**
   * Add one-time event listener.
   *
   * @function EventLite.prototype.once
   * @param type {string}
   * @param func {Function}
   * @returns {EventLite} Self for method chaining
   */

  function once(type, func) {
    var that = this;
    wrap.originalListener = func;
    getListeners(that, type).push(wrap);
    return that;

    function wrap() {
      off.call(that, type, wrap);
      func.apply(this, arguments);
    }
  }

  /**
   * Remove an event listener.
   *
   * @function EventLite.prototype.off
   * @param [type] {string}
   * @param [func] {Function}
   * @returns {EventLite} Self for method chaining
   */

  function off(type, func) {
    var that = this;
    var listners;
    if (!arguments.length) {
      delete that[LISTENERS];
    } else if (!func) {
      listners = that[LISTENERS];
      if (listners) {
        delete listners[type];
        if (!Object.keys(listners).length) return off.call(that);
      }
    } else {
      listners = getListeners(that, type, true);
      if (listners) {
        listners = listners.filter(ne);
        if (!listners.length) return off.call(that, type);
        that[LISTENERS][type] = listners;
      }
    }
    return that;

    function ne(test) {
      return test !== func && test.originalListener !== func;
    }
  }

  /**
   * Dispatch (trigger) an event.
   *
   * @function EventLite.prototype.emit
   * @param type {string}
   * @param [value] {*}
   * @returns {boolean} True when a listener received the event
   */

  function emit(type, value) {
    var that = this;
    var listeners = getListeners(that, type, true);
    if (!listeners) return false;
    var arglen = arguments.length;
    if (arglen === 1) {
      listeners.forEach(zeroarg);
    } else if (arglen === 2) {
      listeners.forEach(onearg);
    } else {
      var args = Array.prototype.slice.call(arguments, 1);
      listeners.forEach(moreargs);
    }
    return !!listeners.length;

    function zeroarg(func) {
      func.call(that);
    }

    function onearg(func) {
      func.call(that, value);
    }

    function moreargs(func) {
      func.apply(that, args);
    }
  }

  /**
   * @ignore
   */

  function getListeners(that, type, readonly) {
    if (readonly && !that[LISTENERS]) return;
    var listeners = that[LISTENERS] || (that[LISTENERS] = {});
    return listeners[type] || (listeners[type] = []);
  }

})(EventLite);


/***/ }),

/***/ "./node_modules/htm/dist/htm.module.js":
/*!*********************************************!*\
  !*** ./node_modules/htm/dist/htm.module.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a)}return e},t=new Map;/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e=""},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0])}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}


/***/ }),

/***/ "./node_modules/htm/preact/index.module.js":
/*!*************************************************!*\
  !*** ./node_modules/htm/preact/index.module.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "h": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "html": () => (/* binding */ m),
/* harmony export */   "render": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
var m=htm__WEBPACK_IMPORTED_MODULE_1__["default"].bind(preact__WEBPACK_IMPORTED_MODULE_0__.h);


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/int64-buffer/int64-buffer.js":
/*!***************************************************!*\
  !*** ./node_modules/int64-buffer/int64-buffer.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

// int64-buffer.js

/*jshint -W018 */ // Confusing use of '!'.
/*jshint -W030 */ // Expected an assignment or function call and instead saw an expression.
/*jshint -W093 */ // Did you mean to return a conditional instead of an assignment?

var Uint64BE, Int64BE, Uint64LE, Int64LE;

!function(exports) {
  // constants

  var UNDEFINED = "undefined";
  var BUFFER = (UNDEFINED !== typeof Buffer) && Buffer;
  var UINT8ARRAY = (UNDEFINED !== typeof Uint8Array) && Uint8Array;
  var ARRAYBUFFER = (UNDEFINED !== typeof ArrayBuffer) && ArrayBuffer;
  var ZERO = [0, 0, 0, 0, 0, 0, 0, 0];
  var isArray = Array.isArray || _isArray;
  var BIT32 = 4294967296;
  var BIT24 = 16777216;

  // storage class

  var storage; // Array;

  // generate classes

  Uint64BE = factory("Uint64BE", true, true);
  Int64BE = factory("Int64BE", true, false);
  Uint64LE = factory("Uint64LE", false, true);
  Int64LE = factory("Int64LE", false, false);

  // class factory

  function factory(name, bigendian, unsigned) {
    var posH = bigendian ? 0 : 4;
    var posL = bigendian ? 4 : 0;
    var pos0 = bigendian ? 0 : 3;
    var pos1 = bigendian ? 1 : 2;
    var pos2 = bigendian ? 2 : 1;
    var pos3 = bigendian ? 3 : 0;
    var fromPositive = bigendian ? fromPositiveBE : fromPositiveLE;
    var fromNegative = bigendian ? fromNegativeBE : fromNegativeLE;
    var proto = Int64.prototype;
    var isName = "is" + name;
    var _isInt64 = "_" + isName;

    // properties
    proto.buffer = void 0;
    proto.offset = 0;
    proto[_isInt64] = true;

    // methods
    proto.toNumber = toNumber;
    proto.toString = toString;
    proto.toJSON = toNumber;
    proto.toArray = toArray;

    // add .toBuffer() method only when Buffer available
    if (BUFFER) proto.toBuffer = toBuffer;

    // add .toArrayBuffer() method only when Uint8Array available
    if (UINT8ARRAY) proto.toArrayBuffer = toArrayBuffer;

    // isUint64BE, isInt64BE
    Int64[isName] = isInt64;

    // CommonJS
    exports[name] = Int64;

    return Int64;

    // constructor
    function Int64(buffer, offset, value, raddix) {
      if (!(this instanceof Int64)) return new Int64(buffer, offset, value, raddix);
      return init(this, buffer, offset, value, raddix);
    }

    // isUint64BE, isInt64BE
    function isInt64(b) {
      return !!(b && b[_isInt64]);
    }

    // initializer
    function init(that, buffer, offset, value, raddix) {
      if (UINT8ARRAY && ARRAYBUFFER) {
        if (buffer instanceof ARRAYBUFFER) buffer = new UINT8ARRAY(buffer);
        if (value instanceof ARRAYBUFFER) value = new UINT8ARRAY(value);
      }

      // Int64BE() style
      if (!buffer && !offset && !value && !storage) {
        // shortcut to initialize with zero
        that.buffer = newArray(ZERO, 0);
        return;
      }

      // Int64BE(value, raddix) style
      if (!isValidBuffer(buffer, offset)) {
        var _storage = storage || Array;
        raddix = offset;
        value = buffer;
        offset = 0;
        buffer = new _storage(8);
      }

      that.buffer = buffer;
      that.offset = offset |= 0;

      // Int64BE(buffer, offset) style
      if (UNDEFINED === typeof value) return;

      // Int64BE(buffer, offset, value, raddix) style
      if ("string" === typeof value) {
        fromString(buffer, offset, value, raddix || 10);
      } else if (isValidBuffer(value, raddix)) {
        fromArray(buffer, offset, value, raddix);
      } else if ("number" === typeof raddix) {
        writeInt32(buffer, offset + posH, value); // high
        writeInt32(buffer, offset + posL, raddix); // low
      } else if (value > 0) {
        fromPositive(buffer, offset, value); // positive
      } else if (value < 0) {
        fromNegative(buffer, offset, value); // negative
      } else {
        fromArray(buffer, offset, ZERO, 0); // zero, NaN and others
      }
    }

    function fromString(buffer, offset, str, raddix) {
      var pos = 0;
      var len = str.length;
      var high = 0;
      var low = 0;
      if (str[0] === "-") pos++;
      var sign = pos;
      while (pos < len) {
        var chr = parseInt(str[pos++], raddix);
        if (!(chr >= 0)) break; // NaN
        low = low * raddix + chr;
        high = high * raddix + Math.floor(low / BIT32);
        low %= BIT32;
      }
      if (sign) {
        high = ~high;
        if (low) {
          low = BIT32 - low;
        } else {
          high++;
        }
      }
      writeInt32(buffer, offset + posH, high);
      writeInt32(buffer, offset + posL, low);
    }

    function toNumber() {
      var buffer = this.buffer;
      var offset = this.offset;
      var high = readInt32(buffer, offset + posH);
      var low = readInt32(buffer, offset + posL);
      if (!unsigned) high |= 0; // a trick to get signed
      return high ? (high * BIT32 + low) : low;
    }

    function toString(radix) {
      var buffer = this.buffer;
      var offset = this.offset;
      var high = readInt32(buffer, offset + posH);
      var low = readInt32(buffer, offset + posL);
      var str = "";
      var sign = !unsigned && (high & 0x80000000);
      if (sign) {
        high = ~high;
        low = BIT32 - low;
      }
      radix = radix || 10;
      while (1) {
        var mod = (high % radix) * BIT32 + low;
        high = Math.floor(high / radix);
        low = Math.floor(mod / radix);
        str = (mod % radix).toString(radix) + str;
        if (!high && !low) break;
      }
      if (sign) {
        str = "-" + str;
      }
      return str;
    }

    function writeInt32(buffer, offset, value) {
      buffer[offset + pos3] = value & 255;
      value = value >> 8;
      buffer[offset + pos2] = value & 255;
      value = value >> 8;
      buffer[offset + pos1] = value & 255;
      value = value >> 8;
      buffer[offset + pos0] = value & 255;
    }

    function readInt32(buffer, offset) {
      return (buffer[offset + pos0] * BIT24) +
        (buffer[offset + pos1] << 16) +
        (buffer[offset + pos2] << 8) +
        buffer[offset + pos3];
    }
  }

  function toArray(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    storage = null; // Array
    if (raw !== false && offset === 0 && buffer.length === 8 && isArray(buffer)) return buffer;
    return newArray(buffer, offset);
  }

  function toBuffer(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    storage = BUFFER;
    if (raw !== false && offset === 0 && buffer.length === 8 && Buffer.isBuffer(buffer)) return buffer;
    var dest = new BUFFER(8);
    fromArray(dest, 0, buffer, offset);
    return dest;
  }

  function toArrayBuffer(raw) {
    var buffer = this.buffer;
    var offset = this.offset;
    var arrbuf = buffer.buffer;
    storage = UINT8ARRAY;
    if (raw !== false && offset === 0 && (arrbuf instanceof ARRAYBUFFER) && arrbuf.byteLength === 8) return arrbuf;
    var dest = new UINT8ARRAY(8);
    fromArray(dest, 0, buffer, offset);
    return dest.buffer;
  }

  function isValidBuffer(buffer, offset) {
    var len = buffer && buffer.length;
    offset |= 0;
    return len && (offset + 8 <= len) && ("string" !== typeof buffer[offset]);
  }

  function fromArray(destbuf, destoff, srcbuf, srcoff) {
    destoff |= 0;
    srcoff |= 0;
    for (var i = 0; i < 8; i++) {
      destbuf[destoff++] = srcbuf[srcoff++] & 255;
    }
  }

  function newArray(buffer, offset) {
    return Array.prototype.slice.call(buffer, offset, offset + 8);
  }

  function fromPositiveBE(buffer, offset, value) {
    var pos = offset + 8;
    while (pos > offset) {
      buffer[--pos] = value & 255;
      value /= 256;
    }
  }

  function fromNegativeBE(buffer, offset, value) {
    var pos = offset + 8;
    value++;
    while (pos > offset) {
      buffer[--pos] = ((-value) & 255) ^ 255;
      value /= 256;
    }
  }

  function fromPositiveLE(buffer, offset, value) {
    var end = offset + 8;
    while (offset < end) {
      buffer[offset++] = value & 255;
      value /= 256;
    }
  }

  function fromNegativeLE(buffer, offset, value) {
    var end = offset + 8;
    value++;
    while (offset < end) {
      buffer[offset++] = ((-value) & 255) ^ 255;
      value /= 256;
    }
  }

  // https://github.com/retrofox/is-array
  function _isArray(val) {
    return !!val && "[object Array]" == Object.prototype.toString.call(val);
  }

}( true && typeof exports.nodeName !== 'string' ? exports : (this || {}));


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/browser.js":
/*!**************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/browser.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// browser.js

exports.encode = __webpack_require__(/*! ./encode */ "./node_modules/msgpack-lite/lib/encode.js").encode;
exports.decode = __webpack_require__(/*! ./decode */ "./node_modules/msgpack-lite/lib/decode.js").decode;

exports.Encoder = __webpack_require__(/*! ./encoder */ "./node_modules/msgpack-lite/lib/encoder.js").Encoder;
exports.Decoder = __webpack_require__(/*! ./decoder */ "./node_modules/msgpack-lite/lib/decoder.js").Decoder;

exports.createCodec = __webpack_require__(/*! ./ext */ "./node_modules/msgpack-lite/lib/ext.js").createCodec;
exports.codec = __webpack_require__(/*! ./codec */ "./node_modules/msgpack-lite/lib/codec.js").codec;


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/buffer-global.js":
/*!********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/buffer-global.js ***!
  \********************************************************/
/***/ (function(module) {

/* globals Buffer */

module.exports =
  c(("undefined" !== typeof Buffer) && Buffer) ||
  c(this.Buffer) ||
  c(("undefined" !== typeof window) && window.Buffer) ||
  this.Buffer;

function c(B) {
  return B && B.isBuffer && B;
}

/***/ }),

/***/ "./node_modules/msgpack-lite/lib/buffer-lite.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/buffer-lite.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

// buffer-lite.js

var MAXBUFLEN = 8192;

exports.copy = copy;
exports.toString = toString;
exports.write = write;

/**
 * Buffer.prototype.write()
 *
 * @param string {String}
 * @param [offset] {Number}
 * @returns {Number}
 */

function write(string, offset) {
  var buffer = this;
  var index = offset || (offset |= 0);
  var length = string.length;
  var chr = 0;
  var i = 0;
  while (i < length) {
    chr = string.charCodeAt(i++);

    if (chr < 128) {
      buffer[index++] = chr;
    } else if (chr < 0x800) {
      // 2 bytes
      buffer[index++] = 0xC0 | (chr >>> 6);
      buffer[index++] = 0x80 | (chr & 0x3F);
    } else if (chr < 0xD800 || chr > 0xDFFF) {
      // 3 bytes
      buffer[index++] = 0xE0 | (chr  >>> 12);
      buffer[index++] = 0x80 | ((chr >>> 6)  & 0x3F);
      buffer[index++] = 0x80 | (chr          & 0x3F);
    } else {
      // 4 bytes - surrogate pair
      chr = (((chr - 0xD800) << 10) | (string.charCodeAt(i++) - 0xDC00)) + 0x10000;
      buffer[index++] = 0xF0 | (chr >>> 18);
      buffer[index++] = 0x80 | ((chr >>> 12) & 0x3F);
      buffer[index++] = 0x80 | ((chr >>> 6)  & 0x3F);
      buffer[index++] = 0x80 | (chr          & 0x3F);
    }
  }
  return index - offset;
}

/**
 * Buffer.prototype.toString()
 *
 * @param [encoding] {String} ignored
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {String}
 */

function toString(encoding, start, end) {
  var buffer = this;
  var index = start|0;
  if (!end) end = buffer.length;
  var string = '';
  var chr = 0;

  while (index < end) {
    chr = buffer[index++];
    if (chr < 128) {
      string += String.fromCharCode(chr);
      continue;
    }

    if ((chr & 0xE0) === 0xC0) {
      // 2 bytes
      chr = (chr & 0x1F) << 6 |
            (buffer[index++] & 0x3F);

    } else if ((chr & 0xF0) === 0xE0) {
      // 3 bytes
      chr = (chr & 0x0F)             << 12 |
            (buffer[index++] & 0x3F) << 6  |
            (buffer[index++] & 0x3F);

    } else if ((chr & 0xF8) === 0xF0) {
      // 4 bytes
      chr = (chr & 0x07)             << 18 |
            (buffer[index++] & 0x3F) << 12 |
            (buffer[index++] & 0x3F) << 6  |
            (buffer[index++] & 0x3F);
    }

    if (chr >= 0x010000) {
      // A surrogate pair
      chr -= 0x010000;

      string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
    } else {
      string += String.fromCharCode(chr);
    }
  }

  return string;
}

/**
 * Buffer.prototype.copy()
 *
 * @param target {Buffer}
 * @param [targetStart] {Number}
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {number}
 */

function copy(target, targetStart, start, end) {
  var i;
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (!targetStart) targetStart = 0;
  var len = end - start;

  if (target === this && start < targetStart && targetStart < end) {
    // descending
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    // ascending
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start];
    }
  }

  return len;
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// bufferish-array.js

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

var exports = module.exports = alloc(0);

exports.alloc = alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Array(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Array}
 */

function from(value) {
  if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) {
    // TypedArray to Uint8Array
    value = Bufferish.Uint8Array.from(value);
  } else if (Bufferish.isArrayBuffer(value)) {
    // ArrayBuffer to Uint8Array
    value = new Uint8Array(value);
  } else if (typeof value === "string") {
    // String to Array
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  // Array-like to Array
  return Array.prototype.slice.call(value);
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish-buffer.js":
/*!***********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish-buffer.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// bufferish-buffer.js

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;

var exports = module.exports = Bufferish.hasBuffer ? alloc(0) : [];

exports.alloc = Bufferish.hasBuffer && Buffer.alloc || alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Buffer(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Buffer}
 */

function from(value) {
  if (!Bufferish.isBuffer(value) && Bufferish.isView(value)) {
    // TypedArray to Uint8Array
    value = Bufferish.Uint8Array.from(value);
  } else if (Bufferish.isArrayBuffer(value)) {
    // ArrayBuffer to Uint8Array
    value = new Uint8Array(value);
  } else if (typeof value === "string") {
    // String to Buffer
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  // Array-like to Buffer
  if (Buffer.from && Buffer.from.length !== 1) {
    return Buffer.from(value); // node v6+
  } else {
    return new Buffer(value); // node v4
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish-proto.js":
/*!**********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish-proto.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// bufferish-proto.js

/* jshint eqnull:true */

var BufferLite = __webpack_require__(/*! ./buffer-lite */ "./node_modules/msgpack-lite/lib/buffer-lite.js");

exports.copy = copy;
exports.slice = slice;
exports.toString = toString;
exports.write = gen("write");

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;

var isBufferShim = Bufferish.hasBuffer && ("TYPED_ARRAY_SUPPORT" in Buffer);
var brokenTypedArray = isBufferShim && !Buffer.TYPED_ARRAY_SUPPORT;

/**
 * @param target {Buffer|Uint8Array|Array}
 * @param [targetStart] {Number}
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function copy(target, targetStart, start, end) {
  var thisIsBuffer = Bufferish.isBuffer(this);
  var targetIsBuffer = Bufferish.isBuffer(target);
  if (thisIsBuffer && targetIsBuffer) {
    // Buffer to Buffer
    return this.copy(target, targetStart, start, end);
  } else if (!brokenTypedArray && !thisIsBuffer && !targetIsBuffer &&
    Bufferish.isView(this) && Bufferish.isView(target)) {
    // Uint8Array to Uint8Array (except for minor some browsers)
    var buffer = (start || end != null) ? slice.call(this, start, end) : this;
    target.set(buffer, targetStart);
    return buffer.length;
  } else {
    // other cases
    return BufferLite.copy.call(this, target, targetStart, start, end);
  }
}

/**
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function slice(start, end) {
  // for Buffer, Uint8Array (except for minor some browsers) and Array
  var f = this.slice || (!brokenTypedArray && this.subarray);
  if (f) return f.call(this, start, end);

  // Uint8Array (for minor some browsers)
  var target = Bufferish.alloc.call(this, end - start);
  copy.call(this, target, 0, start, end);
  return target;
}

/**
 * Buffer.prototype.toString()
 *
 * @param [encoding] {String} ignored
 * @param [start] {Number}
 * @param [end] {Number}
 * @returns {String}
 */

function toString(encoding, start, end) {
  var f = (!isBufferShim && Bufferish.isBuffer(this)) ? this.toString : BufferLite.toString;
  return f.apply(this, arguments);
}

/**
 * @private
 */

function gen(method) {
  return wrap;

  function wrap() {
    var f = this[method] || BufferLite[method];
    return f.apply(this, arguments);
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish-uint8array.js":
/*!***************************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish-uint8array.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// bufferish-uint8array.js

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

var exports = module.exports = Bufferish.hasArrayBuffer ? alloc(0) : [];

exports.alloc = alloc;
exports.concat = Bufferish.concat;
exports.from = from;

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return new Uint8Array(size);
}

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Uint8Array}
 */

function from(value) {
  if (Bufferish.isView(value)) {
    // TypedArray to ArrayBuffer
    var byteOffset = value.byteOffset;
    var byteLength = value.byteLength;
    value = value.buffer;
    if (value.byteLength !== byteLength) {
      if (value.slice) {
        value = value.slice(byteOffset, byteOffset + byteLength);
      } else {
        // Android 4.1 does not have ArrayBuffer.prototype.slice
        value = new Uint8Array(value);
        if (value.byteLength !== byteLength) {
          // TypedArray to ArrayBuffer to Uint8Array to Array
          value = Array.prototype.slice.call(value, byteOffset, byteOffset + byteLength);
        }
      }
    }
  } else if (typeof value === "string") {
    // String to Uint8Array
    return Bufferish.from.call(exports, value);
  } else if (typeof value === "number") {
    throw new TypeError('"value" argument must not be a number');
  }

  return new Uint8Array(value);
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/bufferish.js":
/*!****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/bufferish.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// bufferish.js

var Buffer = exports.global = __webpack_require__(/*! ./buffer-global */ "./node_modules/msgpack-lite/lib/buffer-global.js");
var hasBuffer = exports.hasBuffer = Buffer && !!Buffer.isBuffer;
var hasArrayBuffer = exports.hasArrayBuffer = ("undefined" !== typeof ArrayBuffer);

var isArray = exports.isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
exports.isArrayBuffer = hasArrayBuffer ? isArrayBuffer : _false;
var isBuffer = exports.isBuffer = hasBuffer ? Buffer.isBuffer : _false;
var isView = exports.isView = hasArrayBuffer ? (ArrayBuffer.isView || _is("ArrayBuffer", "buffer")) : _false;

exports.alloc = alloc;
exports.concat = concat;
exports.from = from;

var BufferArray = exports.Array = __webpack_require__(/*! ./bufferish-array */ "./node_modules/msgpack-lite/lib/bufferish-array.js");
var BufferBuffer = exports.Buffer = __webpack_require__(/*! ./bufferish-buffer */ "./node_modules/msgpack-lite/lib/bufferish-buffer.js");
var BufferUint8Array = exports.Uint8Array = __webpack_require__(/*! ./bufferish-uint8array */ "./node_modules/msgpack-lite/lib/bufferish-uint8array.js");
var BufferProto = exports.prototype = __webpack_require__(/*! ./bufferish-proto */ "./node_modules/msgpack-lite/lib/bufferish-proto.js");

/**
 * @param value {Array|ArrayBuffer|Buffer|String}
 * @returns {Buffer|Uint8Array|Array}
 */

function from(value) {
  if (typeof value === "string") {
    return fromString.call(this, value);
  } else {
    return auto(this).from(value);
  }
}

/**
 * @param size {Number}
 * @returns {Buffer|Uint8Array|Array}
 */

function alloc(size) {
  return auto(this).alloc(size);
}

/**
 * @param list {Array} array of (Buffer|Uint8Array|Array)s
 * @param [length]
 * @returns {Buffer|Uint8Array|Array}
 */

function concat(list, length) {
  if (!length) {
    length = 0;
    Array.prototype.forEach.call(list, dryrun);
  }
  var ref = (this !== exports) && this || list[0];
  var result = alloc.call(ref, length);
  var offset = 0;
  Array.prototype.forEach.call(list, append);
  return result;

  function dryrun(buffer) {
    length += buffer.length;
  }

  function append(buffer) {
    offset += BufferProto.copy.call(buffer, result, offset);
  }
}

var _isArrayBuffer = _is("ArrayBuffer");

function isArrayBuffer(value) {
  return (value instanceof ArrayBuffer) || _isArrayBuffer(value);
}

/**
 * @private
 */

function fromString(value) {
  var expected = value.length * 3;
  var that = alloc.call(this, expected);
  var actual = BufferProto.write.call(that, value);
  if (expected !== actual) {
    that = BufferProto.slice.call(that, 0, actual);
  }
  return that;
}

function auto(that) {
  return isBuffer(that) ? BufferBuffer
    : isView(that) ? BufferUint8Array
    : isArray(that) ? BufferArray
    : hasBuffer ? BufferBuffer
    : hasArrayBuffer ? BufferUint8Array
    : BufferArray;
}

function _false() {
  return false;
}

function _is(name, key) {
  /* jshint eqnull:true */
  name = "[object " + name + "]";
  return function(value) {
    return (value != null) && {}.toString.call(key ? value[key] : value) === name;
  };
}

/***/ }),

/***/ "./node_modules/msgpack-lite/lib/codec-base.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/codec-base.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// codec-base.js

var IS_ARRAY = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

exports.createCodec = createCodec;
exports.install = install;
exports.filter = filter;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

function Codec(options) {
  if (!(this instanceof Codec)) return new Codec(options);
  this.options = options;
  this.init();
}

Codec.prototype.init = function() {
  var options = this.options;

  if (options && options.uint8array) {
    this.bufferish = Bufferish.Uint8Array;
  }

  return this;
};

function install(props) {
  for (var key in props) {
    Codec.prototype[key] = add(Codec.prototype[key], props[key]);
  }
}

function add(a, b) {
  return (a && b) ? ab : (a || b);

  function ab() {
    a.apply(this, arguments);
    return b.apply(this, arguments);
  }
}

function join(filters) {
  filters = filters.slice();

  return function(value) {
    return filters.reduce(iterator, value);
  };

  function iterator(value, filter) {
    return filter(value);
  }
}

function filter(filter) {
  return IS_ARRAY(filter) ? join(filter) : filter;
}

// @public
// msgpack.createCodec()

function createCodec(options) {
  return new Codec(options);
}

// default shared codec

exports.preset = createCodec({preset: true});


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/codec.js":
/*!************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/codec.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// codec.js

// load both interfaces
__webpack_require__(/*! ./read-core */ "./node_modules/msgpack-lite/lib/read-core.js");
__webpack_require__(/*! ./write-core */ "./node_modules/msgpack-lite/lib/write-core.js");

// @public
// msgpack.codec.preset

exports.codec = {
  preset: (__webpack_require__(/*! ./codec-base */ "./node_modules/msgpack-lite/lib/codec-base.js").preset)
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/decode-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/decode-buffer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// decode-buffer.js

exports.DecodeBuffer = DecodeBuffer;

var preset = (__webpack_require__(/*! ./read-core */ "./node_modules/msgpack-lite/lib/read-core.js").preset);

var FlexDecoder = (__webpack_require__(/*! ./flex-buffer */ "./node_modules/msgpack-lite/lib/flex-buffer.js").FlexDecoder);

FlexDecoder.mixin(DecodeBuffer.prototype);

function DecodeBuffer(options) {
  if (!(this instanceof DecodeBuffer)) return new DecodeBuffer(options);

  if (options) {
    this.options = options;
    if (options.codec) {
      var codec = this.codec = options.codec;
      if (codec.bufferish) this.bufferish = codec.bufferish;
    }
  }
}

DecodeBuffer.prototype.codec = preset;

DecodeBuffer.prototype.fetch = function() {
  return this.codec.decode(this);
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/decode.js":
/*!*************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/decode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// decode.js

exports.decode = decode;

var DecodeBuffer = (__webpack_require__(/*! ./decode-buffer */ "./node_modules/msgpack-lite/lib/decode-buffer.js").DecodeBuffer);

function decode(input, options) {
  var decoder = new DecodeBuffer(options);
  decoder.write(input);
  return decoder.read();
}

/***/ }),

/***/ "./node_modules/msgpack-lite/lib/decoder.js":
/*!**************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/decoder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// decoder.js

exports.Decoder = Decoder;

var EventLite = __webpack_require__(/*! event-lite */ "./node_modules/event-lite/event-lite.js");
var DecodeBuffer = (__webpack_require__(/*! ./decode-buffer */ "./node_modules/msgpack-lite/lib/decode-buffer.js").DecodeBuffer);

function Decoder(options) {
  if (!(this instanceof Decoder)) return new Decoder(options);
  DecodeBuffer.call(this, options);
}

Decoder.prototype = new DecodeBuffer();

EventLite.mixin(Decoder.prototype);

Decoder.prototype.decode = function(chunk) {
  if (arguments.length) this.write(chunk);
  this.flush();
};

Decoder.prototype.push = function(chunk) {
  this.emit("data", chunk);
};

Decoder.prototype.end = function(chunk) {
  this.decode(chunk);
  this.emit("end");
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/encode-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/encode-buffer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// encode-buffer.js

exports.EncodeBuffer = EncodeBuffer;

var preset = (__webpack_require__(/*! ./write-core */ "./node_modules/msgpack-lite/lib/write-core.js").preset);

var FlexEncoder = (__webpack_require__(/*! ./flex-buffer */ "./node_modules/msgpack-lite/lib/flex-buffer.js").FlexEncoder);

FlexEncoder.mixin(EncodeBuffer.prototype);

function EncodeBuffer(options) {
  if (!(this instanceof EncodeBuffer)) return new EncodeBuffer(options);

  if (options) {
    this.options = options;
    if (options.codec) {
      var codec = this.codec = options.codec;
      if (codec.bufferish) this.bufferish = codec.bufferish;
    }
  }
}

EncodeBuffer.prototype.codec = preset;

EncodeBuffer.prototype.write = function(input) {
  this.codec.encode(this, input);
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/encode.js":
/*!*************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/encode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// encode.js

exports.encode = encode;

var EncodeBuffer = (__webpack_require__(/*! ./encode-buffer */ "./node_modules/msgpack-lite/lib/encode-buffer.js").EncodeBuffer);

function encode(input, options) {
  var encoder = new EncodeBuffer(options);
  encoder.write(input);
  return encoder.read();
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/encoder.js":
/*!**************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/encoder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// encoder.js

exports.Encoder = Encoder;

var EventLite = __webpack_require__(/*! event-lite */ "./node_modules/event-lite/event-lite.js");
var EncodeBuffer = (__webpack_require__(/*! ./encode-buffer */ "./node_modules/msgpack-lite/lib/encode-buffer.js").EncodeBuffer);

function Encoder(options) {
  if (!(this instanceof Encoder)) return new Encoder(options);
  EncodeBuffer.call(this, options);
}

Encoder.prototype = new EncodeBuffer();

EventLite.mixin(Encoder.prototype);

Encoder.prototype.encode = function(chunk) {
  this.write(chunk);
  this.emit("data", this.read());
};

Encoder.prototype.end = function(chunk) {
  if (arguments.length) this.encode(chunk);
  this.flush();
  this.emit("end");
};


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/ext-buffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/ext-buffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext-buffer.js

exports.ExtBuffer = ExtBuffer;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

function ExtBuffer(buffer, type) {
  if (!(this instanceof ExtBuffer)) return new ExtBuffer(buffer, type);
  this.buffer = Bufferish.from(buffer);
  this.type = type;
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/ext-packer.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/ext-packer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext-packer.js

exports.setExtPackers = setExtPackers;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;
var packTypedArray = Bufferish.Uint8Array.from;
var _encode;

var ERROR_COLUMNS = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};

function setExtPackers(codec) {
  codec.addExtPacker(0x0E, Error, [packError, encode]);
  codec.addExtPacker(0x01, EvalError, [packError, encode]);
  codec.addExtPacker(0x02, RangeError, [packError, encode]);
  codec.addExtPacker(0x03, ReferenceError, [packError, encode]);
  codec.addExtPacker(0x04, SyntaxError, [packError, encode]);
  codec.addExtPacker(0x05, TypeError, [packError, encode]);
  codec.addExtPacker(0x06, URIError, [packError, encode]);

  codec.addExtPacker(0x0A, RegExp, [packRegExp, encode]);
  codec.addExtPacker(0x0B, Boolean, [packValueOf, encode]);
  codec.addExtPacker(0x0C, String, [packValueOf, encode]);
  codec.addExtPacker(0x0D, Date, [Number, encode]);
  codec.addExtPacker(0x0F, Number, [packValueOf, encode]);

  if ("undefined" !== typeof Uint8Array) {
    codec.addExtPacker(0x11, Int8Array, packTypedArray);
    codec.addExtPacker(0x12, Uint8Array, packTypedArray);
    codec.addExtPacker(0x13, Int16Array, packTypedArray);
    codec.addExtPacker(0x14, Uint16Array, packTypedArray);
    codec.addExtPacker(0x15, Int32Array, packTypedArray);
    codec.addExtPacker(0x16, Uint32Array, packTypedArray);
    codec.addExtPacker(0x17, Float32Array, packTypedArray);

    // PhantomJS/1.9.7 doesn't have Float64Array
    if ("undefined" !== typeof Float64Array) {
      codec.addExtPacker(0x18, Float64Array, packTypedArray);
    }

    // IE10 doesn't have Uint8ClampedArray
    if ("undefined" !== typeof Uint8ClampedArray) {
      codec.addExtPacker(0x19, Uint8ClampedArray, packTypedArray);
    }

    codec.addExtPacker(0x1A, ArrayBuffer, packTypedArray);
    codec.addExtPacker(0x1D, DataView, packTypedArray);
  }

  if (Bufferish.hasBuffer) {
    codec.addExtPacker(0x1B, Buffer, Bufferish.from);
  }
}

function encode(input) {
  if (!_encode) _encode = (__webpack_require__(/*! ./encode */ "./node_modules/msgpack-lite/lib/encode.js").encode); // lazy load
  return _encode(input);
}

function packValueOf(value) {
  return (value).valueOf();
}

function packRegExp(value) {
  value = RegExp.prototype.toString.call(value).split("/");
  value.shift();
  var out = [value.pop()];
  out.unshift(value.join("/"));
  return out;
}

function packError(value) {
  var out = {};
  for (var key in ERROR_COLUMNS) {
    out[key] = value[key];
  }
  return out;
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/ext-unpacker.js":
/*!*******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/ext-unpacker.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext-unpacker.js

exports.setExtUnpackers = setExtUnpackers;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;
var _decode;

var ERROR_COLUMNS = {name: 1, message: 1, stack: 1, columnNumber: 1, fileName: 1, lineNumber: 1};

function setExtUnpackers(codec) {
  codec.addExtUnpacker(0x0E, [decode, unpackError(Error)]);
  codec.addExtUnpacker(0x01, [decode, unpackError(EvalError)]);
  codec.addExtUnpacker(0x02, [decode, unpackError(RangeError)]);
  codec.addExtUnpacker(0x03, [decode, unpackError(ReferenceError)]);
  codec.addExtUnpacker(0x04, [decode, unpackError(SyntaxError)]);
  codec.addExtUnpacker(0x05, [decode, unpackError(TypeError)]);
  codec.addExtUnpacker(0x06, [decode, unpackError(URIError)]);

  codec.addExtUnpacker(0x0A, [decode, unpackRegExp]);
  codec.addExtUnpacker(0x0B, [decode, unpackClass(Boolean)]);
  codec.addExtUnpacker(0x0C, [decode, unpackClass(String)]);
  codec.addExtUnpacker(0x0D, [decode, unpackClass(Date)]);
  codec.addExtUnpacker(0x0F, [decode, unpackClass(Number)]);

  if ("undefined" !== typeof Uint8Array) {
    codec.addExtUnpacker(0x11, unpackClass(Int8Array));
    codec.addExtUnpacker(0x12, unpackClass(Uint8Array));
    codec.addExtUnpacker(0x13, [unpackArrayBuffer, unpackClass(Int16Array)]);
    codec.addExtUnpacker(0x14, [unpackArrayBuffer, unpackClass(Uint16Array)]);
    codec.addExtUnpacker(0x15, [unpackArrayBuffer, unpackClass(Int32Array)]);
    codec.addExtUnpacker(0x16, [unpackArrayBuffer, unpackClass(Uint32Array)]);
    codec.addExtUnpacker(0x17, [unpackArrayBuffer, unpackClass(Float32Array)]);

    // PhantomJS/1.9.7 doesn't have Float64Array
    if ("undefined" !== typeof Float64Array) {
      codec.addExtUnpacker(0x18, [unpackArrayBuffer, unpackClass(Float64Array)]);
    }

    // IE10 doesn't have Uint8ClampedArray
    if ("undefined" !== typeof Uint8ClampedArray) {
      codec.addExtUnpacker(0x19, unpackClass(Uint8ClampedArray));
    }

    codec.addExtUnpacker(0x1A, unpackArrayBuffer);
    codec.addExtUnpacker(0x1D, [unpackArrayBuffer, unpackClass(DataView)]);
  }

  if (Bufferish.hasBuffer) {
    codec.addExtUnpacker(0x1B, unpackClass(Buffer));
  }
}

function decode(input) {
  if (!_decode) _decode = (__webpack_require__(/*! ./decode */ "./node_modules/msgpack-lite/lib/decode.js").decode); // lazy load
  return _decode(input);
}

function unpackRegExp(value) {
  return RegExp.apply(null, value);
}

function unpackError(Class) {
  return function(value) {
    var out = new Class();
    for (var key in ERROR_COLUMNS) {
      out[key] = value[key];
    }
    return out;
  };
}

function unpackClass(Class) {
  return function(value) {
    return new Class(value);
  };
}

function unpackArrayBuffer(value) {
  return (new Uint8Array(value)).buffer;
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/ext.js":
/*!**********************************************!*\
  !*** ./node_modules/msgpack-lite/lib/ext.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// ext.js

// load both interfaces
__webpack_require__(/*! ./read-core */ "./node_modules/msgpack-lite/lib/read-core.js");
__webpack_require__(/*! ./write-core */ "./node_modules/msgpack-lite/lib/write-core.js");

exports.createCodec = __webpack_require__(/*! ./codec-base */ "./node_modules/msgpack-lite/lib/codec-base.js").createCodec;


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/flex-buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/flex-buffer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// flex-buffer.js

exports.FlexDecoder = FlexDecoder;
exports.FlexEncoder = FlexEncoder;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");

var MIN_BUFFER_SIZE = 2048;
var MAX_BUFFER_SIZE = 65536;
var BUFFER_SHORTAGE = "BUFFER_SHORTAGE";

function FlexDecoder() {
  if (!(this instanceof FlexDecoder)) return new FlexDecoder();
}

function FlexEncoder() {
  if (!(this instanceof FlexEncoder)) return new FlexEncoder();
}

FlexDecoder.mixin = mixinFactory(getDecoderMethods());
FlexDecoder.mixin(FlexDecoder.prototype);

FlexEncoder.mixin = mixinFactory(getEncoderMethods());
FlexEncoder.mixin(FlexEncoder.prototype);

function getDecoderMethods() {
  return {
    bufferish: Bufferish,
    write: write,
    fetch: fetch,
    flush: flush,
    push: push,
    pull: pull,
    read: read,
    reserve: reserve,
    offset: 0
  };

  function write(chunk) {
    var prev = this.offset ? Bufferish.prototype.slice.call(this.buffer, this.offset) : this.buffer;
    this.buffer = prev ? (chunk ? this.bufferish.concat([prev, chunk]) : prev) : chunk;
    this.offset = 0;
  }

  function flush() {
    while (this.offset < this.buffer.length) {
      var start = this.offset;
      var value;
      try {
        value = this.fetch();
      } catch (e) {
        if (e && e.message != BUFFER_SHORTAGE) throw e;
        // rollback
        this.offset = start;
        break;
      }
      this.push(value);
    }
  }

  function reserve(length) {
    var start = this.offset;
    var end = start + length;
    if (end > this.buffer.length) throw new Error(BUFFER_SHORTAGE);
    this.offset = end;
    return start;
  }
}

function getEncoderMethods() {
  return {
    bufferish: Bufferish,
    write: write,
    fetch: fetch,
    flush: flush,
    push: push,
    pull: pull,
    read: read,
    reserve: reserve,
    send: send,
    maxBufferSize: MAX_BUFFER_SIZE,
    minBufferSize: MIN_BUFFER_SIZE,
    offset: 0,
    start: 0
  };

  function fetch() {
    var start = this.start;
    if (start < this.offset) {
      var end = this.start = this.offset;
      return Bufferish.prototype.slice.call(this.buffer, start, end);
    }
  }

  function flush() {
    while (this.start < this.offset) {
      var value = this.fetch();
      if (value) this.push(value);
    }
  }

  function pull() {
    var buffers = this.buffers || (this.buffers = []);
    var chunk = buffers.length > 1 ? this.bufferish.concat(buffers) : buffers[0];
    buffers.length = 0; // buffer exhausted
    return chunk;
  }

  function reserve(length) {
    var req = length | 0;

    if (this.buffer) {
      var size = this.buffer.length;
      var start = this.offset | 0;
      var end = start + req;

      // is it long enough?
      if (end < size) {
        this.offset = end;
        return start;
      }

      // flush current buffer
      this.flush();

      // resize it to 2x current length
      length = Math.max(length, Math.min(size * 2, this.maxBufferSize));
    }

    // minimum buffer size
    length = Math.max(length, this.minBufferSize);

    // allocate new buffer
    this.buffer = this.bufferish.alloc(length);
    this.start = 0;
    this.offset = req;
    return 0;
  }

  function send(buffer) {
    var length = buffer.length;
    if (length > this.minBufferSize) {
      this.flush();
      this.push(buffer);
    } else {
      var offset = this.reserve(length);
      Bufferish.prototype.copy.call(buffer, this.buffer, offset);
    }
  }
}

// common methods

function write() {
  throw new Error("method not implemented: write()");
}

function fetch() {
  throw new Error("method not implemented: fetch()");
}

function read() {
  var length = this.buffers && this.buffers.length;

  // fetch the first result
  if (!length) return this.fetch();

  // flush current buffer
  this.flush();

  // read from the results
  return this.pull();
}

function push(chunk) {
  var buffers = this.buffers || (this.buffers = []);
  buffers.push(chunk);
}

function pull() {
  var buffers = this.buffers || (this.buffers = []);
  return buffers.shift();
}

function mixinFactory(source) {
  return mixin;

  function mixin(target) {
    for (var key in source) {
      target[key] = source[key];
    }
    return target;
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/read-core.js":
/*!****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/read-core.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// read-core.js

var ExtBuffer = (__webpack_require__(/*! ./ext-buffer */ "./node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer);
var ExtUnpacker = __webpack_require__(/*! ./ext-unpacker */ "./node_modules/msgpack-lite/lib/ext-unpacker.js");
var readUint8 = (__webpack_require__(/*! ./read-format */ "./node_modules/msgpack-lite/lib/read-format.js").readUint8);
var ReadToken = __webpack_require__(/*! ./read-token */ "./node_modules/msgpack-lite/lib/read-token.js");
var CodecBase = __webpack_require__(/*! ./codec-base */ "./node_modules/msgpack-lite/lib/codec-base.js");

CodecBase.install({
  addExtUnpacker: addExtUnpacker,
  getExtUnpacker: getExtUnpacker,
  init: init
});

exports.preset = init.call(CodecBase.preset);

function getDecoder(options) {
  var readToken = ReadToken.getReadToken(options);
  return decode;

  function decode(decoder) {
    var type = readUint8(decoder);
    var func = readToken[type];
    if (!func) throw new Error("Invalid type: " + (type ? ("0x" + type.toString(16)) : type));
    return func(decoder);
  }
}

function init() {
  var options = this.options;
  this.decode = getDecoder(options);

  if (options && options.preset) {
    ExtUnpacker.setExtUnpackers(this);
  }

  return this;
}

function addExtUnpacker(etype, unpacker) {
  var unpackers = this.extUnpackers || (this.extUnpackers = []);
  unpackers[etype] = CodecBase.filter(unpacker);
}

function getExtUnpacker(type) {
  var unpackers = this.extUnpackers || (this.extUnpackers = []);
  return unpackers[type] || extUnpacker;

  function extUnpacker(buffer) {
    return new ExtBuffer(buffer, type);
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/read-format.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/read-format.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// read-format.js

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");
var Int64Buffer = __webpack_require__(/*! int64-buffer */ "./node_modules/int64-buffer/int64-buffer.js");
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

exports.getReadFormat = getReadFormat;
exports.readUint8 = uint8;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var BufferProto = __webpack_require__(/*! ./bufferish-proto */ "./node_modules/msgpack-lite/lib/bufferish-proto.js");

var HAS_MAP = ("undefined" !== typeof Map);
var NO_ASSERT = true;

function getReadFormat(options) {
  var binarraybuffer = Bufferish.hasArrayBuffer && options && options.binarraybuffer;
  var int64 = options && options.int64;
  var usemap = HAS_MAP && options && options.usemap;

  var readFormat = {
    map: (usemap ? map_to_map : map_to_obj),
    array: array,
    str: str,
    bin: (binarraybuffer ? bin_arraybuffer : bin_buffer),
    ext: ext,
    uint8: uint8,
    uint16: uint16,
    uint32: uint32,
    uint64: read(8, int64 ? readUInt64BE_int64 : readUInt64BE),
    int8: int8,
    int16: int16,
    int32: int32,
    int64: read(8, int64 ? readInt64BE_int64 : readInt64BE),
    float32: read(4, readFloatBE),
    float64: read(8, readDoubleBE)
  };

  return readFormat;
}

function map_to_obj(decoder, len) {
  var value = {};
  var i;
  var k = new Array(len);
  var v = new Array(len);

  var decode = decoder.codec.decode;
  for (i = 0; i < len; i++) {
    k[i] = decode(decoder);
    v[i] = decode(decoder);
  }
  for (i = 0; i < len; i++) {
    value[k[i]] = v[i];
  }
  return value;
}

function map_to_map(decoder, len) {
  var value = new Map();
  var i;
  var k = new Array(len);
  var v = new Array(len);

  var decode = decoder.codec.decode;
  for (i = 0; i < len; i++) {
    k[i] = decode(decoder);
    v[i] = decode(decoder);
  }
  for (i = 0; i < len; i++) {
    value.set(k[i], v[i]);
  }
  return value;
}

function array(decoder, len) {
  var value = new Array(len);
  var decode = decoder.codec.decode;
  for (var i = 0; i < len; i++) {
    value[i] = decode(decoder);
  }
  return value;
}

function str(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  return BufferProto.toString.call(decoder.buffer, "utf-8", start, end);
}

function bin_buffer(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return Bufferish.from(buf);
}

function bin_arraybuffer(decoder, len) {
  var start = decoder.reserve(len);
  var end = start + len;
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return Bufferish.Uint8Array.from(buf).buffer;
}

function ext(decoder, len) {
  var start = decoder.reserve(len+1);
  var type = decoder.buffer[start++];
  var end = start + len;
  var unpack = decoder.codec.getExtUnpacker(type);
  if (!unpack) throw new Error("Invalid ext type: " + (type ? ("0x" + type.toString(16)) : type));
  var buf = BufferProto.slice.call(decoder.buffer, start, end);
  return unpack(buf);
}

function uint8(decoder) {
  var start = decoder.reserve(1);
  return decoder.buffer[start];
}

function int8(decoder) {
  var start = decoder.reserve(1);
  var value = decoder.buffer[start];
  return (value & 0x80) ? value - 0x100 : value;
}

function uint16(decoder) {
  var start = decoder.reserve(2);
  var buffer = decoder.buffer;
  return (buffer[start++] << 8) | buffer[start];
}

function int16(decoder) {
  var start = decoder.reserve(2);
  var buffer = decoder.buffer;
  var value = (buffer[start++] << 8) | buffer[start];
  return (value & 0x8000) ? value - 0x10000 : value;
}

function uint32(decoder) {
  var start = decoder.reserve(4);
  var buffer = decoder.buffer;
  return (buffer[start++] * 16777216) + (buffer[start++] << 16) + (buffer[start++] << 8) + buffer[start];
}

function int32(decoder) {
  var start = decoder.reserve(4);
  var buffer = decoder.buffer;
  return (buffer[start++] << 24) | (buffer[start++] << 16) | (buffer[start++] << 8) | buffer[start];
}

function read(len, method) {
  return function(decoder) {
    var start = decoder.reserve(len);
    return method.call(decoder.buffer, start, NO_ASSERT);
  };
}

function readUInt64BE(start) {
  return new Uint64BE(this, start).toNumber();
}

function readInt64BE(start) {
  return new Int64BE(this, start).toNumber();
}

function readUInt64BE_int64(start) {
  return new Uint64BE(this, start);
}

function readInt64BE_int64(start) {
  return new Int64BE(this, start);
}

function readFloatBE(start) {
  return ieee754.read(this, start, false, 23, 4);
}

function readDoubleBE(start) {
  return ieee754.read(this, start, false, 52, 8);
}

/***/ }),

/***/ "./node_modules/msgpack-lite/lib/read-token.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/read-token.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// read-token.js

var ReadFormat = __webpack_require__(/*! ./read-format */ "./node_modules/msgpack-lite/lib/read-format.js");

exports.getReadToken = getReadToken;

function getReadToken(options) {
  var format = ReadFormat.getReadFormat(options);

  if (options && options.useraw) {
    return init_useraw(format);
  } else {
    return init_token(format);
  }
}

function init_token(format) {
  var i;
  var token = new Array(256);

  // positive fixint -- 0x00 - 0x7f
  for (i = 0x00; i <= 0x7f; i++) {
    token[i] = constant(i);
  }

  // fixmap -- 0x80 - 0x8f
  for (i = 0x80; i <= 0x8f; i++) {
    token[i] = fix(i - 0x80, format.map);
  }

  // fixarray -- 0x90 - 0x9f
  for (i = 0x90; i <= 0x9f; i++) {
    token[i] = fix(i - 0x90, format.array);
  }

  // fixstr -- 0xa0 - 0xbf
  for (i = 0xa0; i <= 0xbf; i++) {
    token[i] = fix(i - 0xa0, format.str);
  }

  // nil -- 0xc0
  token[0xc0] = constant(null);

  // (never used) -- 0xc1
  token[0xc1] = null;

  // false -- 0xc2
  // true -- 0xc3
  token[0xc2] = constant(false);
  token[0xc3] = constant(true);

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = flex(format.uint8, format.bin);
  token[0xc5] = flex(format.uint16, format.bin);
  token[0xc6] = flex(format.uint32, format.bin);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = flex(format.uint8, format.ext);
  token[0xc8] = flex(format.uint16, format.ext);
  token[0xc9] = flex(format.uint32, format.ext);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = format.float32;
  token[0xcb] = format.float64;

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = format.uint8;
  token[0xcd] = format.uint16;
  token[0xce] = format.uint32;
  token[0xcf] = format.uint64;

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = format.int8;
  token[0xd1] = format.int16;
  token[0xd2] = format.int32;
  token[0xd3] = format.int64;

  // fixext 1 -- 0xd4
  // fixext 2 -- 0xd5
  // fixext 4 -- 0xd6
  // fixext 8 -- 0xd7
  // fixext 16 -- 0xd8
  token[0xd4] = fix(1, format.ext);
  token[0xd5] = fix(2, format.ext);
  token[0xd6] = fix(4, format.ext);
  token[0xd7] = fix(8, format.ext);
  token[0xd8] = fix(16, format.ext);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = flex(format.uint8, format.str);
  token[0xda] = flex(format.uint16, format.str);
  token[0xdb] = flex(format.uint32, format.str);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = flex(format.uint16, format.array);
  token[0xdd] = flex(format.uint32, format.array);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = flex(format.uint16, format.map);
  token[0xdf] = flex(format.uint32, format.map);

  // negative fixint -- 0xe0 - 0xff
  for (i = 0xe0; i <= 0xff; i++) {
    token[i] = constant(i - 0x100);
  }

  return token;
}

function init_useraw(format) {
  var i;
  var token = init_token(format).slice();

  // raw 8 -- 0xd9
  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  token[0xd9] = token[0xc4];
  token[0xda] = token[0xc5];
  token[0xdb] = token[0xc6];

  // fixraw -- 0xa0 - 0xbf
  for (i = 0xa0; i <= 0xbf; i++) {
    token[i] = fix(i - 0xa0, format.bin);
  }

  return token;
}

function constant(value) {
  return function() {
    return value;
  };
}

function flex(lenFunc, decodeFunc) {
  return function(decoder) {
    var len = lenFunc(decoder);
    return decodeFunc(decoder, len);
  };
}

function fix(len, method) {
  return function(decoder) {
    return method(decoder, len);
  };
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/write-core.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/write-core.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// write-core.js

var ExtBuffer = (__webpack_require__(/*! ./ext-buffer */ "./node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer);
var ExtPacker = __webpack_require__(/*! ./ext-packer */ "./node_modules/msgpack-lite/lib/ext-packer.js");
var WriteType = __webpack_require__(/*! ./write-type */ "./node_modules/msgpack-lite/lib/write-type.js");
var CodecBase = __webpack_require__(/*! ./codec-base */ "./node_modules/msgpack-lite/lib/codec-base.js");

CodecBase.install({
  addExtPacker: addExtPacker,
  getExtPacker: getExtPacker,
  init: init
});

exports.preset = init.call(CodecBase.preset);

function getEncoder(options) {
  var writeType = WriteType.getWriteType(options);
  return encode;

  function encode(encoder, value) {
    var func = writeType[typeof value];
    if (!func) throw new Error("Unsupported type \"" + (typeof value) + "\": " + value);
    func(encoder, value);
  }
}

function init() {
  var options = this.options;
  this.encode = getEncoder(options);

  if (options && options.preset) {
    ExtPacker.setExtPackers(this);
  }

  return this;
}

function addExtPacker(etype, Class, packer) {
  packer = CodecBase.filter(packer);
  var name = Class.name;
  if (name && name !== "Object") {
    var packers = this.extPackers || (this.extPackers = {});
    packers[name] = extPacker;
  } else {
    // fallback for IE
    var list = this.extEncoderList || (this.extEncoderList = []);
    list.unshift([Class, extPacker]);
  }

  function extPacker(value) {
    if (packer) value = packer(value);
    return new ExtBuffer(value, etype);
  }
}

function getExtPacker(value) {
  var packers = this.extPackers || (this.extPackers = {});
  var c = value.constructor;
  var e = c && c.name && packers[c.name];
  if (e) return e;

  // fallback for IE
  var list = this.extEncoderList || (this.extEncoderList = []);
  var len = list.length;
  for (var i = 0; i < len; i++) {
    var pair = list[i];
    if (c === pair[0]) return pair[1];
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/write-token.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/write-token.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// write-token.js

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");
var Int64Buffer = __webpack_require__(/*! int64-buffer */ "./node_modules/int64-buffer/int64-buffer.js");
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

var uint8 = (__webpack_require__(/*! ./write-uint8 */ "./node_modules/msgpack-lite/lib/write-uint8.js").uint8);
var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var Buffer = Bufferish.global;
var IS_BUFFER_SHIM = Bufferish.hasBuffer && ("TYPED_ARRAY_SUPPORT" in Buffer);
var NO_TYPED_ARRAY = IS_BUFFER_SHIM && !Buffer.TYPED_ARRAY_SUPPORT;
var Buffer_prototype = Bufferish.hasBuffer && Buffer.prototype || {};

exports.getWriteToken = getWriteToken;

function getWriteToken(options) {
  if (options && options.uint8array) {
    return init_uint8array();
  } else if (NO_TYPED_ARRAY || (Bufferish.hasBuffer && options && options.safe)) {
    return init_safe();
  } else {
    return init_token();
  }
}

function init_uint8array() {
  var token = init_token();

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, writeFloatBE);
  token[0xcb] = writeN(0xcb, 8, writeDoubleBE);

  return token;
}

// Node.js and browsers with TypedArray

function init_token() {
  // (immediate values)
  // positive fixint -- 0x00 - 0x7f
  // nil -- 0xc0
  // false -- 0xc2
  // true -- 0xc3
  // negative fixint -- 0xe0 - 0xff
  var token = uint8.slice();

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = write1(0xc4);
  token[0xc5] = write2(0xc5);
  token[0xc6] = write4(0xc6);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = write1(0xc7);
  token[0xc8] = write2(0xc8);
  token[0xc9] = write4(0xc9);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, (Buffer_prototype.writeFloatBE || writeFloatBE), true);
  token[0xcb] = writeN(0xcb, 8, (Buffer_prototype.writeDoubleBE || writeDoubleBE), true);

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = write1(0xcc);
  token[0xcd] = write2(0xcd);
  token[0xce] = write4(0xce);
  token[0xcf] = writeN(0xcf, 8, writeUInt64BE);

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = write1(0xd0);
  token[0xd1] = write2(0xd1);
  token[0xd2] = write4(0xd2);
  token[0xd3] = writeN(0xd3, 8, writeInt64BE);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = write1(0xd9);
  token[0xda] = write2(0xda);
  token[0xdb] = write4(0xdb);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = write2(0xdc);
  token[0xdd] = write4(0xdd);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = write2(0xde);
  token[0xdf] = write4(0xdf);

  return token;
}

// safe mode: for old browsers and who needs asserts

function init_safe() {
  // (immediate values)
  // positive fixint -- 0x00 - 0x7f
  // nil -- 0xc0
  // false -- 0xc2
  // true -- 0xc3
  // negative fixint -- 0xe0 - 0xff
  var token = uint8.slice();

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  token[0xc4] = writeN(0xc4, 1, Buffer.prototype.writeUInt8);
  token[0xc5] = writeN(0xc5, 2, Buffer.prototype.writeUInt16BE);
  token[0xc6] = writeN(0xc6, 4, Buffer.prototype.writeUInt32BE);

  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  token[0xc7] = writeN(0xc7, 1, Buffer.prototype.writeUInt8);
  token[0xc8] = writeN(0xc8, 2, Buffer.prototype.writeUInt16BE);
  token[0xc9] = writeN(0xc9, 4, Buffer.prototype.writeUInt32BE);

  // float 32 -- 0xca
  // float 64 -- 0xcb
  token[0xca] = writeN(0xca, 4, Buffer.prototype.writeFloatBE);
  token[0xcb] = writeN(0xcb, 8, Buffer.prototype.writeDoubleBE);

  // uint 8 -- 0xcc
  // uint 16 -- 0xcd
  // uint 32 -- 0xce
  // uint 64 -- 0xcf
  token[0xcc] = writeN(0xcc, 1, Buffer.prototype.writeUInt8);
  token[0xcd] = writeN(0xcd, 2, Buffer.prototype.writeUInt16BE);
  token[0xce] = writeN(0xce, 4, Buffer.prototype.writeUInt32BE);
  token[0xcf] = writeN(0xcf, 8, writeUInt64BE);

  // int 8 -- 0xd0
  // int 16 -- 0xd1
  // int 32 -- 0xd2
  // int 64 -- 0xd3
  token[0xd0] = writeN(0xd0, 1, Buffer.prototype.writeInt8);
  token[0xd1] = writeN(0xd1, 2, Buffer.prototype.writeInt16BE);
  token[0xd2] = writeN(0xd2, 4, Buffer.prototype.writeInt32BE);
  token[0xd3] = writeN(0xd3, 8, writeInt64BE);

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  token[0xd9] = writeN(0xd9, 1, Buffer.prototype.writeUInt8);
  token[0xda] = writeN(0xda, 2, Buffer.prototype.writeUInt16BE);
  token[0xdb] = writeN(0xdb, 4, Buffer.prototype.writeUInt32BE);

  // array 16 -- 0xdc
  // array 32 -- 0xdd
  token[0xdc] = writeN(0xdc, 2, Buffer.prototype.writeUInt16BE);
  token[0xdd] = writeN(0xdd, 4, Buffer.prototype.writeUInt32BE);

  // map 16 -- 0xde
  // map 32 -- 0xdf
  token[0xde] = writeN(0xde, 2, Buffer.prototype.writeUInt16BE);
  token[0xdf] = writeN(0xdf, 4, Buffer.prototype.writeUInt32BE);

  return token;
}

function write1(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(2);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset] = value;
  };
}

function write2(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(3);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset++] = value >>> 8;
    buffer[offset] = value;
  };
}

function write4(type) {
  return function(encoder, value) {
    var offset = encoder.reserve(5);
    var buffer = encoder.buffer;
    buffer[offset++] = type;
    buffer[offset++] = value >>> 24;
    buffer[offset++] = value >>> 16;
    buffer[offset++] = value >>> 8;
    buffer[offset] = value;
  };
}

function writeN(type, len, method, noAssert) {
  return function(encoder, value) {
    var offset = encoder.reserve(len + 1);
    encoder.buffer[offset++] = type;
    method.call(encoder.buffer, value, offset, noAssert);
  };
}

function writeUInt64BE(value, offset) {
  new Uint64BE(this, offset, value);
}

function writeInt64BE(value, offset) {
  new Int64BE(this, offset, value);
}

function writeFloatBE(value, offset) {
  ieee754.write(this, value, offset, false, 23, 4);
}

function writeDoubleBE(value, offset) {
  ieee754.write(this, value, offset, false, 52, 8);
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/write-type.js":
/*!*****************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/write-type.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// write-type.js

var IS_ARRAY = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
var Int64Buffer = __webpack_require__(/*! int64-buffer */ "./node_modules/int64-buffer/int64-buffer.js");
var Uint64BE = Int64Buffer.Uint64BE;
var Int64BE = Int64Buffer.Int64BE;

var Bufferish = __webpack_require__(/*! ./bufferish */ "./node_modules/msgpack-lite/lib/bufferish.js");
var BufferProto = __webpack_require__(/*! ./bufferish-proto */ "./node_modules/msgpack-lite/lib/bufferish-proto.js");
var WriteToken = __webpack_require__(/*! ./write-token */ "./node_modules/msgpack-lite/lib/write-token.js");
var uint8 = (__webpack_require__(/*! ./write-uint8 */ "./node_modules/msgpack-lite/lib/write-uint8.js").uint8);
var ExtBuffer = (__webpack_require__(/*! ./ext-buffer */ "./node_modules/msgpack-lite/lib/ext-buffer.js").ExtBuffer);

var HAS_UINT8ARRAY = ("undefined" !== typeof Uint8Array);
var HAS_MAP = ("undefined" !== typeof Map);

var extmap = [];
extmap[1] = 0xd4;
extmap[2] = 0xd5;
extmap[4] = 0xd6;
extmap[8] = 0xd7;
extmap[16] = 0xd8;

exports.getWriteType = getWriteType;

function getWriteType(options) {
  var token = WriteToken.getWriteToken(options);
  var useraw = options && options.useraw;
  var binarraybuffer = HAS_UINT8ARRAY && options && options.binarraybuffer;
  var isBuffer = binarraybuffer ? Bufferish.isArrayBuffer : Bufferish.isBuffer;
  var bin = binarraybuffer ? bin_arraybuffer : bin_buffer;
  var usemap = HAS_MAP && options && options.usemap;
  var map = usemap ? map_to_map : obj_to_map;

  var writeType = {
    "boolean": bool,
    "function": nil,
    "number": number,
    "object": (useraw ? object_raw : object),
    "string": _string(useraw ? raw_head_size : str_head_size),
    "symbol": nil,
    "undefined": nil
  };

  return writeType;

  // false -- 0xc2
  // true -- 0xc3
  function bool(encoder, value) {
    var type = value ? 0xc3 : 0xc2;
    token[type](encoder, value);
  }

  function number(encoder, value) {
    var ivalue = value | 0;
    var type;
    if (value !== ivalue) {
      // float 64 -- 0xcb
      type = 0xcb;
      token[type](encoder, value);
      return;
    } else if (-0x20 <= ivalue && ivalue <= 0x7F) {
      // positive fixint -- 0x00 - 0x7f
      // negative fixint -- 0xe0 - 0xff
      type = ivalue & 0xFF;
    } else if (0 <= ivalue) {
      // uint 8 -- 0xcc
      // uint 16 -- 0xcd
      // uint 32 -- 0xce
      type = (ivalue <= 0xFF) ? 0xcc : (ivalue <= 0xFFFF) ? 0xcd : 0xce;
    } else {
      // int 8 -- 0xd0
      // int 16 -- 0xd1
      // int 32 -- 0xd2
      type = (-0x80 <= ivalue) ? 0xd0 : (-0x8000 <= ivalue) ? 0xd1 : 0xd2;
    }
    token[type](encoder, ivalue);
  }

  // uint 64 -- 0xcf
  function uint64(encoder, value) {
    var type = 0xcf;
    token[type](encoder, value.toArray());
  }

  // int 64 -- 0xd3
  function int64(encoder, value) {
    var type = 0xd3;
    token[type](encoder, value.toArray());
  }

  // str 8 -- 0xd9
  // str 16 -- 0xda
  // str 32 -- 0xdb
  // fixstr -- 0xa0 - 0xbf
  function str_head_size(length) {
    return (length < 32) ? 1 : (length <= 0xFF) ? 2 : (length <= 0xFFFF) ? 3 : 5;
  }

  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  // fixraw -- 0xa0 - 0xbf
  function raw_head_size(length) {
    return (length < 32) ? 1 : (length <= 0xFFFF) ? 3 : 5;
  }

  function _string(head_size) {
    return string;

    function string(encoder, value) {
      // prepare buffer
      var length = value.length;
      var maxsize = 5 + length * 3;
      encoder.offset = encoder.reserve(maxsize);
      var buffer = encoder.buffer;

      // expected header size
      var expected = head_size(length);

      // expected start point
      var start = encoder.offset + expected;

      // write string
      length = BufferProto.write.call(buffer, value, start);

      // actual header size
      var actual = head_size(length);

      // move content when needed
      if (expected !== actual) {
        var targetStart = start + actual - expected;
        var end = start + length;
        BufferProto.copy.call(buffer, buffer, targetStart, start, end);
      }

      // write header
      var type = (actual === 1) ? (0xa0 + length) : (actual <= 3) ? (0xd7 + actual) : 0xdb;
      token[type](encoder, length);

      // move cursor
      encoder.offset += length;
    }
  }

  function object(encoder, value) {
    // null
    if (value === null) return nil(encoder, value);

    // Buffer
    if (isBuffer(value)) return bin(encoder, value);

    // Array
    if (IS_ARRAY(value)) return array(encoder, value);

    // int64-buffer objects
    if (Uint64BE.isUint64BE(value)) return uint64(encoder, value);
    if (Int64BE.isInt64BE(value)) return int64(encoder, value);

    // ext formats
    var packer = encoder.codec.getExtPacker(value);
    if (packer) value = packer(value);
    if (value instanceof ExtBuffer) return ext(encoder, value);

    // plain old Objects or Map
    map(encoder, value);
  }

  function object_raw(encoder, value) {
    // Buffer
    if (isBuffer(value)) return raw(encoder, value);

    // others
    object(encoder, value);
  }

  // nil -- 0xc0
  function nil(encoder, value) {
    var type = 0xc0;
    token[type](encoder, value);
  }

  // fixarray -- 0x90 - 0x9f
  // array 16 -- 0xdc
  // array 32 -- 0xdd
  function array(encoder, value) {
    var length = value.length;
    var type = (length < 16) ? (0x90 + length) : (length <= 0xFFFF) ? 0xdc : 0xdd;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    for (var i = 0; i < length; i++) {
      encode(encoder, value[i]);
    }
  }

  // bin 8 -- 0xc4
  // bin 16 -- 0xc5
  // bin 32 -- 0xc6
  function bin_buffer(encoder, value) {
    var length = value.length;
    var type = (length < 0xFF) ? 0xc4 : (length <= 0xFFFF) ? 0xc5 : 0xc6;
    token[type](encoder, length);
    encoder.send(value);
  }

  function bin_arraybuffer(encoder, value) {
    bin_buffer(encoder, new Uint8Array(value));
  }

  // fixext 1 -- 0xd4
  // fixext 2 -- 0xd5
  // fixext 4 -- 0xd6
  // fixext 8 -- 0xd7
  // fixext 16 -- 0xd8
  // ext 8 -- 0xc7
  // ext 16 -- 0xc8
  // ext 32 -- 0xc9
  function ext(encoder, value) {
    var buffer = value.buffer;
    var length = buffer.length;
    var type = extmap[length] || ((length < 0xFF) ? 0xc7 : (length <= 0xFFFF) ? 0xc8 : 0xc9);
    token[type](encoder, length);
    uint8[value.type](encoder);
    encoder.send(buffer);
  }

  // fixmap -- 0x80 - 0x8f
  // map 16 -- 0xde
  // map 32 -- 0xdf
  function obj_to_map(encoder, value) {
    var keys = Object.keys(value);
    var length = keys.length;
    var type = (length < 16) ? (0x80 + length) : (length <= 0xFFFF) ? 0xde : 0xdf;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    keys.forEach(function(key) {
      encode(encoder, key);
      encode(encoder, value[key]);
    });
  }

  // fixmap -- 0x80 - 0x8f
  // map 16 -- 0xde
  // map 32 -- 0xdf
  function map_to_map(encoder, value) {
    if (!(value instanceof Map)) return obj_to_map(encoder, value);

    var length = value.size;
    var type = (length < 16) ? (0x80 + length) : (length <= 0xFFFF) ? 0xde : 0xdf;
    token[type](encoder, length);

    var encode = encoder.codec.encode;
    value.forEach(function(val, key, m) {
      encode(encoder, key);
      encode(encoder, val);
    });
  }

  // raw 16 -- 0xda
  // raw 32 -- 0xdb
  // fixraw -- 0xa0 - 0xbf
  function raw(encoder, value) {
    var length = value.length;
    var type = (length < 32) ? (0xa0 + length) : (length <= 0xFFFF) ? 0xda : 0xdb;
    token[type](encoder, length);
    encoder.send(value);
  }
}


/***/ }),

/***/ "./node_modules/msgpack-lite/lib/write-uint8.js":
/*!******************************************************!*\
  !*** ./node_modules/msgpack-lite/lib/write-uint8.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

// write-unit8.js

var constant = exports.uint8 = new Array(256);

for (var i = 0x00; i <= 0xFF; i++) {
  constant[i] = write0(i);
}

function write0(type) {
  return function(encoder) {
    var offset = encoder.reserve(1);
    encoder.buffer[offset] = type;
  };
}


/***/ }),

/***/ "./node_modules/p5/lib/p5.min.js":
/*!***************************************!*\
  !*** ./node_modules/p5/lib/p5.min.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! p5.js v1.4.0 June 29, 2021 */


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ d),
/* harmony export */   "Fragment": () => (/* binding */ p),
/* harmony export */   "cloneElement": () => (/* binding */ q),
/* harmony export */   "createContext": () => (/* binding */ B),
/* harmony export */   "createElement": () => (/* binding */ h),
/* harmony export */   "createRef": () => (/* binding */ y),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "hydrate": () => (/* binding */ S),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "options": () => (/* binding */ l),
/* harmony export */   "render": () => (/* binding */ P),
/* harmony export */   "toChildArray": () => (/* binding */ x)
/* harmony export */ });
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v(l,f,t,o,null)}function v(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function y(){return{current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?_(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function b(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||setTimeout)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_(t):o,t.__h),z(u,t),t.__e!=o&&k(t)))})}function w(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(p,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null}j(n,k,d=d||f,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_(d))}for(u.__e=g,h=C;h--;)null!=x[h]&&N(x[h],x[h]);if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h])}function m(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m(i,l,u):A(u,i,i,t,i.__e,l));return l}function x(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x(n,l)}):l.push(n)),l}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l.__b)&&a(u);try{n:if("function"==typeof T){if(g=u.props,m=(a=T.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in T&&T.prototype.render?u.__c=h=new T(g,x):(u.__c=h=new d(g,x),h.constructor=T,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,T.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==T.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){for(h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k)})}if(h.context=x,h.props=g,h.__v=u,h.__P=n,C=l.__r,$=0,"prototype"in T&&T.prototype.render){for(h.state=h.__s,h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),I=null!=a&&a.type===p&&null==a.key?a.props.children:a,w(n,Array.isArray(I)?I:[I],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(a=l.diffed)&&a(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),h=(y=i.props||f).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H(l,"checked",k,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null,n.__c=void 0}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||a(n.__e),n.__=n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function P(u,i,t){var o,r,e;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j(i,u=(!o&&t||i).__k=h(p,null,[u]),r||f,f,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z(e,u)}function S(n,l){P(n,l,S)}function q(l,u,i){var t,o,r,f=s({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),v(l.type,f,t||l.key,o||l.ref,null)}function B(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=e.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),b(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b(this))},d.prototype.render=p,t=[],g.__r=0,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* binding */ T),
/* harmony export */   "useContext": () => (/* binding */ q),
/* harmony export */   "useDebugValue": () => (/* binding */ x),
/* harmony export */   "useEffect": () => (/* binding */ h),
/* harmony export */   "useErrorBoundary": () => (/* binding */ P),
/* harmony export */   "useId": () => (/* binding */ V),
/* harmony export */   "useImperativeHandle": () => (/* binding */ A),
/* harmony export */   "useLayoutEffect": () => (/* binding */ s),
/* harmony export */   "useMemo": () => (/* binding */ F),
/* harmony export */   "useReducer": () => (/* binding */ y),
/* harmony export */   "useRef": () => (/* binding */ _),
/* harmony export */   "useState": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,f=[],c=[],e=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,l=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,m=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function p(n){return o=1,y(B,n)}function y(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){r.u=!0;var f=r.shouldComponentUpdate;r.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!f||f.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!f||f.call(this,n,t,r))}}return o.__N||o.__}function h(u,i){var o=d(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o))}function s(u,i){var o=d(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o))}function _(n){return o=5,F(function(){return{current:n}},[])}function A(n,t,r){o=6,s(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function x(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r?r(t):t)}function P(n){var u=d(t++,10),i=p();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function V(){var n=d(t++,11);return n.__||(n.__="P"+function(n){for(var t=0,r=n.length;r>0;)t=(t<<5)-t+n.charCodeAt(--r)|0;return t}(r.__v.__m)+t),n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[]}catch(r){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){"function"!=typeof n.type||n.__m||null===n.__?n.__m||(n.__m=n.__&&n.__.__m?n.__.__m:""):n.__m=(n.__&&n.__.__m?n.__.__m:"")+(n.__&&n.__.__k?n.__.__k.indexOf(n):0),r=null,e&&e(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[])),u=r},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((i=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c})),u=r=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return!n.__||w(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),l&&l(t,r)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n)}catch(n){r=n}}),u.__H=void 0,r&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,u.__v))};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r))}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function w(n){var t=r;n.__c=n.__(),r=t}function z(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPLETE_NOTIFICATION": () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   "createNotification": () => (/* binding */ createNotification),
/* harmony export */   "errorNotification": () => (/* binding */ errorNotification),
/* harmony export */   "nextNotification": () => (/* binding */ nextNotification)
/* harmony export */ });
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Observable.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Observable.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js");







var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) || (isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value));
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subject.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subject.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousSubject": () => (/* binding */ AnonymousSubject),
/* harmony export */   "Subject": () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js");






var Subject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(function () {
            _this.currentObservers = null;
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_5__.Observable));

var AnonymousSubject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscriber.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_OBSERVER": () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   "SafeSubscriber": () => (/* binding */ SafeSubscriber),
/* harmony export */   "Subscriber": () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/reportUnhandledError */ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/noop */ "./node_modules/rxjs/dist/esm5/internal/util/noop.js");
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationFactories */ "./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/errorContext */ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js");









var Subscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_1__.isSubscription)(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.nextNotification)(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.errorNotification)(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && _config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_5__.captureError)(error);
    }
    else {
        (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__.reportUnhandledError)(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = _config__WEBPACK_IMPORTED_MODULE_4__.config.onStoppedNotification;
    onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__.timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
    error: defaultErrorHandler,
    complete: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
};
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscription.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscription.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_SUBSCRIPTION": () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   "Subscription": () => (/* binding */ Subscription),
/* harmony export */   "isSubscription": () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/arrRemove */ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError) {
                                errors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(errors)), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/config.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/config.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/empty.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/empty.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY": () => (/* binding */ EMPTY),
/* harmony export */   "empty": () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");

var EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorSubscriber": () => (/* binding */ OperatorSubscriber),
/* harmony export */   "createOperatorSubscriber": () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js");


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/filter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");


function filter(predicate, thisArg) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        var index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");


function map(project, thisArg) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        var index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/scan.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/scan.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scan": () => (/* binding */ scan)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _scanInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanInternals */ "./node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js");


function scan(accumulator, seed) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((0,_scanInternals__WEBPACK_IMPORTED_MODULE_1__.scanInternals)(accumulator, seed, arguments.length >= 2, true));
}
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scanInternals": () => (/* binding */ scanInternals)
/* harmony export */ });
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");

function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function (source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_0__.createOperatorSubscriber)(subscriber, function (value) {
            var i = index++;
            state = hasState
                ?
                    accumulator(state, value, i)
                :
                    ((hasState = true), value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete &&
            (function () {
                hasState && subscriber.next(state);
                subscriber.complete();
            })));
    };
}
//# sourceMappingURL=scanInternals.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/take.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/take.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "take": () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/dist/esm5/internal/observable/empty.js");
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");



function take(count) {
    return count <= 0
        ?
            function () { return _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY; }
        : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)(function (source, subscriber) {
            var seen = 0;
            source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, function (value) {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/tap.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/tap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tap": () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/dist/esm5/internal/util/identity.js");




function tap(observerOrNext, error, complete) {
    var tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observerOrNext) || error || complete
        ?
            { next: observerOrNext, error: error, complete: complete }
        : observerOrNext;
    return tapObserver
        ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)(function (source, subscriber) {
            var _a;
            (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            var isUnsub = true;
            source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, function (value) {
                var _a;
                (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
                subscriber.next(value);
            }, function () {
                var _a;
                isUnsub = false;
                (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                subscriber.complete();
            }, function (err) {
                var _a;
                isUnsub = false;
                (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
                subscriber.error(err);
            }, function () {
                var _a, _b;
                if (isUnsub) {
                    (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                }
                (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
            }));
        })
        :
            _util_identity__WEBPACK_IMPORTED_MODULE_3__.identity;
}
//# sourceMappingURL=tap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutProvider": () => (/* binding */ timeoutProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
        }
        return setTimeout.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observable": () => (/* binding */ observable)
/* harmony export */ });
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectUnsubscribedError": () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscriptionError": () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrRemove": () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createErrorClass": () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "captureError": () => (/* binding */ captureError),
/* harmony export */   "errorContext": () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./node_modules/rxjs/dist/esm5/internal/config.js");

var context = null;
function errorContext(cb) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/identity.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/identity.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/lift.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/lift.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasLift": () => (/* binding */ hasLift),
/* harmony export */   "operate": () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");

function hasLift(source) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/noop.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/noop.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop() { }
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/pipe.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/pipe.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "pipeFromArray": () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/dist/esm5/internal/util/identity.js");

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reportUnhandledError": () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");


function reportUnhandledError(err) {
    _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(function () {
        var onUnhandledError = _config__WEBPACK_IMPORTED_MODULE_1__.config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var _settingTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingTypes */ "./src/settingTypes.ts");
/* harmony import */ var _utils_colorUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/colorUtil */ "./src/utils/colorUtil.ts");


//default configurations
const config = {
    //In execution order.
    //In future it would be nice to let user decide from UI if they want to draw helpers or not.
    USED_STATES: [
        _settingTypes__WEBPACK_IMPORTED_MODULE_0__.StateOfArt.SETUP,
        //StateOfArt.DRAW_GRID,
        //StateOfArt.DRAW_HELPER_GRID,
        //StateOfArt.DRAW_MAGNETS,
        //StateOfArt.CONFIRM_DRAW,
        //StateOfArt.CLEAR_SCREEN,
        _settingTypes__WEBPACK_IMPORTED_MODULE_0__.StateOfArt.DRAW_AGENTS,
        _settingTypes__WEBPACK_IMPORTED_MODULE_0__.StateOfArt.END,
        _settingTypes__WEBPACK_IMPORTED_MODULE_0__.StateOfArt.RESET,
        _settingTypes__WEBPACK_IMPORTED_MODULE_0__.StateOfArt.CONFIRM_DRAW,
        _settingTypes__WEBPACK_IMPORTED_MODULE_0__.StateOfArt.CLEAR_SCREEN,
    ],
    CANVAS_WIDTH: window.innerWidth,
    CANVAS_HEIGHT: window.innerHeight,
    SHOW_CONTROLS: true,
    SHOW_BUTTONS: true,
    TOTAL_BURSTS: 100,
    BURST_SIZE: 200,
    OFFSET: 5,
    MIN_AGENTS: 200,
    RANDOM_START: true,
    GRID_SIZE: 10,
    HELPER_GRID_SIZE: 100,
    NUM_OF_MAGNETS: 4,
    MAGNET_STRENGTH_MAX: 30,
    //Multiplier constant. Similar to G in gravity calculations.
    MAGNET_FORCE_MULTIPLIER: 10.0,
    MAX_STROKE: 5,
    DEFAULT_LIFESPAN: 5,
    MAXIMUM_VELOCITY: 5.0,
    MAXIMUM_ACC: 1.0,
    ADD_TO_OLD_VELOCITY: true,
    VELOCITY_MULTIPLIER: 0.5,
    COLOR_PALETTE: (0,_utils_colorUtil__WEBPACK_IMPORTED_MODULE_1__.getScheme)(),
    BACKGROUND_COLOR: { r: 35, g: 38, b: 38, opacity: 255 },
    FADING: 0.8,
    AGENT_DRAWING_MODES: { [_settingTypes__WEBPACK_IMPORTED_MODULE_0__.AgentDrawingModeType.CIRCLE]: { percentage: 1 } },
    UI_CONFIGS: [
        ["DEFAULT_LIFESPAN", 1, 150, 1],
        ["MAXIMUM_VELOCITY", 0.001, 300, undefined],
        ["MAXIMUM_ACC", 0.001, 10, undefined],
        ["MAX_STROKE", 1, 50, undefined],
        ["BURST_SIZE", 1, 1000, undefined],
        ["TOTAL_BURSTS", 1, 2000, 1],
        ["MIN_AGENTS", 1, 300, 1],
        ["FADING", 0.001, 100, undefined],
        ["NUM_OF_MAGNETS", 1, 20, 1]
    ],
};


/***/ }),

/***/ "./src/entities/Agent.ts":
/*!*******************************!*\
  !*** ./src/entities/Agent.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfAgentAlive": () => (/* binding */ checkIfAgentAlive),
/* harmony export */   "createDummyAgents": () => (/* binding */ createDummyAgents),
/* harmony export */   "dummyAgent": () => (/* binding */ dummyAgent),
/* harmony export */   "moveAgent": () => (/* binding */ moveAgent),
/* harmony export */   "updateAcceleration": () => (/* binding */ updateAcceleration)
/* harmony export */ });
/* harmony import */ var _utils_gridUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/gridUtil */ "./src/utils/gridUtil.ts");
/* harmony import */ var _utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mathUtils */ "./src/utils/mathUtils.ts");
/* harmony import */ var _ArtVector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArtVector */ "./src/entities/ArtVector.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");




const getDefaultSettings = (settings) => ({
    lifespanInFrames: settings.DEFAULT_LIFESPAN,
    color: (agent, canvas) => 
    //Todo: Should be given in config.
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.colorByVelocity)(agent, canvas, settings),
    strokeWidth: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.getRandomFloat)(settings.MAX_STROKE),
    acceleration: new _ArtVector__WEBPACK_IMPORTED_MODULE_2__.ArtVector(0, 0),
    isAlive: true,
});
const dummyAgent = (x, y, settings, color, velocityX = 0, velocityY = 0) => {
    return {
        ...{
            position: new _ArtVector__WEBPACK_IMPORTED_MODULE_2__.ArtVector(x, y),
            previousPos: new _ArtVector__WEBPACK_IMPORTED_MODULE_2__.ArtVector(x, y),
            velocity: new _ArtVector__WEBPACK_IMPORTED_MODULE_2__.ArtVector(velocityX, velocityY),
            color: color,
        },
        ...getDefaultSettings(settings),
    };
};
//Adds steering force to agents acceleration.
// https://p5js.org/examples/hello-p5-flocking.html <= example with boids used as a guide.
const updateAcceleration = (agent, grid, addToOldVelocity, maximumAcceleration) => {
    const { row, column } = (0,_utils_gridUtil__WEBPACK_IMPORTED_MODULE_0__.getCurrentGridPosition)(agent.position.x, agent.position.y, grid.gridSize);
    if (!grid.gridValues[column] || !grid.gridValues[column][row]) {
        console.log(grid);
        console.log(agent);
        throw Error('Faulty agent position or grid');
    }
    const position = grid.gridValues[column][row];
    const gridVelocity = position.velocity;
    let steer = addToOldVelocity
        ? agent.acceleration.copy().addMe(gridVelocity)
        : gridVelocity.copy();
    steer.limitMe(maximumAcceleration);
    agent.acceleration = steer;
};
/**
 * Modifies existing agent
 */
const updateVelocity = (agent, addToOldVelocity, frictionMultiplier, maximumVelocity) => {
    if (addToOldVelocity) {
        agent.velocity = agent.velocity.multiplyMe(frictionMultiplier);
        agent.velocity.addMe(agent.acceleration);
    }
    else {
        agent.velocity = agent.acceleration.copy();
    }
    agent.velocity.limitMe(maximumVelocity);
};
const moveAgent = (agent, grid, addToOldVelocity, maximumAcceleration, frictionMultiplier, maximumVelocity) => {
    agent.lifespanInFrames--;
    agent.previousPos = agent.position.copy();
    updateAcceleration(agent, grid, addToOldVelocity, maximumAcceleration);
    updateVelocity(agent, addToOldVelocity, frictionMultiplier, maximumVelocity);
    agent.position.addMe(agent.velocity);
};
const onKillPoint = (agent, killPoints, gridSize) => (0,_utils_gridUtil__WEBPACK_IMPORTED_MODULE_0__.isOnSameGridPoint)({ x: agent.position.x, y: agent.position.y }, killPoints.map((magnet) => ({ x: magnet.locationX, y: magnet.locationY })), gridSize);
const checkIfAgentAlive = (agent, canvas, killPoints, gridSize) => {
    const isKilled = onKillPoint(agent, killPoints, gridSize);
    if (agent.lifespanInFrames <= 0 || isKilled) {
        agent.isAlive = false;
    }
    else if (agent.position.x >= canvas.width ||
        agent.position.x < 0 ||
        agent.position.y >= canvas.height ||
        agent.position.y < 0) {
        agent.isAlive = false;
    }
};
const getStartingPoint = (creatingPoints, canvas, offset) => {
    let point = !!creatingPoints && creatingPoints.length > 0
        ? creatingPoints[(0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(creatingPoints.length)]
        : {
            locationX: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(canvas.width),
            locationY: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(canvas.height),
        };
    return {
        locationX: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.addOffset)(point.locationX, offset, canvas.width),
        locationY: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.addOffset)(point.locationY, offset, canvas.height),
    };
};
const createDummyAgents = (magnets, canvas, settings, color) => {
    const agents = [];
    for (let i = 0; i < settings.BURST_SIZE; i++) {
        const point = settings.RANDOM_START
            ? {
                locationX: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(canvas.width),
                locationY: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(canvas.height),
            }
            : getStartingPoint(magnets, canvas, settings.OFFSET);
        const dummy = dummyAgent(point.locationX, point.locationY, settings, color);
        agents.push(dummy);
    }
    return agents;
};


/***/ }),

/***/ "./src/entities/ArtVector.ts":
/*!***********************************!*\
  !*** ./src/entities/ArtVector.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtVector": () => (/* binding */ ArtVector),
/* harmony export */   "createVector": () => (/* binding */ createVector),
/* harmony export */   "createVectorByAngle": () => (/* binding */ createVectorByAngle)
/* harmony export */ });
/* harmony import */ var _daign_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @daign/math */ "./node_modules/@daign/math/dist/lib/index.js");

const limitVector = (vector, maxValue) => {
    const square = vector.x * vector.x + vector.y * vector.y;
    if (square > maxValue * maxValue) {
        //Normalizing
        const divider = Math.sqrt(square);
        let x = vector.x / divider;
        let y = vector.y / divider;
        //Multiplying
        x = x * maxValue;
        y = y * maxValue;
        return new _daign_math__WEBPACK_IMPORTED_MODULE_0__.Vector2(x, y);
    }
    return vector;
};
const multiplyVector = (vector, multiplier) => {
    return new _daign_math__WEBPACK_IMPORTED_MODULE_0__.Vector2(vector.x * multiplier, vector.y * multiplier);
};
const copy = (vector) => {
    return createVector(vector.x, vector.y);
};
const strengthOfVector = (vector) => {
    return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
};
const byAngle = (angle, magnitude) => {
    return { x: Math.cos(angle) * magnitude, y: Math.sin(angle) * magnitude };
};
const getAngle = (vector) => {
    return vector.angle().radians;
};
//A wrapper class for vector maths used
class ArtVector {
    constructor(x, y) {
        this._vector = new _daign_math__WEBPACK_IMPORTED_MODULE_0__.Vector2(x, y);
    }
    get x() {
        return this._vector.x;
    }
    get y() {
        return this._vector.y;
    }
    get strength() {
        return strengthOfVector(this._vector);
    }
    get direction() {
        return getAngle(this._vector);
    }
    dangerousInnerVector() {
        return this._vector;
    }
    limitMe(maxValue) {
        this._vector = limitVector(this._vector, maxValue);
        return this;
    }
    multiplyMe(multiplier) {
        this._vector = multiplyVector(this._vector, multiplier);
        return this;
    }
    copy() {
        return copy(this._vector);
    }
    addMe(artVector) {
        this._vector.add(artVector.dangerousInnerVector());
        return this;
    }
}
const createVector = (x, y) => new ArtVector(x, y);
const createVectorByAngle = (angle, magnitude) => {
    let components = byAngle(angle, magnitude);
    return createVector(components.x, components.y);
};


/***/ }),

/***/ "./src/entities/Grid.ts":
/*!******************************!*\
  !*** ./src/entities/Grid.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillGridUsingFunction": () => (/* binding */ fillGridUsingFunction),
/* harmony export */   "gridFactory": () => (/* binding */ gridFactory)
/* harmony export */ });
/* harmony import */ var _ArtVector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArtVector */ "./src/entities/ArtVector.ts");

const EXTRA_LEFT = 0;
const EXTRA_RIGHT = 0;
const EXTRA_TOP = 0;
const EXTRA_BOTTOM = 0;
const numberOfCols = (width, gridSize) => Math.ceil((width * EXTRA_RIGHT + width + width * EXTRA_LEFT) / gridSize);
const numberOfRows = (height, gridSize) => Math.ceil((height * EXTRA_TOP + height + height * EXTRA_BOTTOM) / gridSize);
const gridFactory = (width, height, gridSize) => {
    //Creating empty grid. Note that for... in loops only set indexes, for... of loops all.
    const gridValues = [];
    gridSize = gridSize;
    const numOfCols = numberOfCols(width, gridSize);
    const numOfRows = numberOfRows(height, gridSize);
    for (let column = 0; column < numOfCols; column++) {
        gridValues.push(Array(numOfRows));
    }
    return {
        gridSize: gridSize,
        gridValues: gridValues,
    };
};
//Modifies existing grid by applying function to all members of grid.
const fillGridUsingFunction = (grid, magnetPoints, forceMultiplier, countAngleCallBack) => {
    let gridValues = grid.gridValues;
    for (let column = 0; column < gridValues.length; column++) {
        for (let row = 0; row < gridValues[column].length; row++) {
            let { direction, velocity } = countAngleCallBack(row, column, grid, magnetPoints, forceMultiplier);
            const xStep = velocity * Math.cos(direction);
            const yStep = velocity * Math.sin(direction);
            //Should we create vector at this point or would it be more performant to use just angle and strength?
            let gridPoint = {
                velocity: (0,_ArtVector__WEBPACK_IMPORTED_MODULE_0__.createVector)(xStep, yStep),
            };
            gridValues[column][row] = gridPoint;
        }
    }
    return grid;
};


/***/ }),

/***/ "./src/entities/MagnetPoint.ts":
/*!*************************************!*\
  !*** ./src/entities/MagnetPoint.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMagnets": () => (/* binding */ createMagnets),
/* harmony export */   "dummyMagnet": () => (/* binding */ dummyMagnet),
/* harmony export */   "getCreators": () => (/* binding */ getCreators),
/* harmony export */   "getSinks": () => (/* binding */ getSinks)
/* harmony export */ });
/* harmony import */ var _utils_mathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mathUtils */ "./src/utils/mathUtils.ts");

const dummyMagnet = (xMax, yMax, magnetStrengthMax) => {
    return {
        locationX: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(xMax),
        locationY: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(yMax),
        strength: (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_0__.getRandomPosOrNegInt)(magnetStrengthMax),
    };
};
const createMagnets = (width, height, numOfMagnets, magnetStrengthMax) => {
    const magnets = [];
    for (let i = 0; i < numOfMagnets; i++) {
        magnets.push(dummyMagnet(width, height, magnetStrengthMax));
    }
    return magnets;
};
const getCreators = (magnetPoints = []) => {
    return magnetPoints.filter((point) => point.strength < 0);
};
const getSinks = (magnetPoints = []) => {
    return magnetPoints.filter((point) => point.strength > 0);
};


/***/ }),

/***/ "./src/p5/drawingUtils.ts":
/*!********************************!*\
  !*** ./src/p5/drawingUtils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawAgent": () => (/* binding */ drawAgent),
/* harmony export */   "drawGridCellContents": () => (/* binding */ drawGridCellContents),
/* harmony export */   "drawHelpGrid": () => (/* binding */ drawHelpGrid),
/* harmony export */   "drawHelperMatrix": () => (/* binding */ drawHelperMatrix),
/* harmony export */   "drawMagnetPoints": () => (/* binding */ drawMagnetPoints),
/* harmony export */   "rgbToP5Color": () => (/* binding */ rgbToP5Color)
/* harmony export */ });
/* harmony import */ var _utils_gridUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/gridUtil */ "./src/utils/gridUtil.ts");
/* harmony import */ var _settingTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settingTypes */ "./src/settingTypes.ts");


const rgbToP5Color = (p5, color, opacity) => {
    var _a;
    return opacity
        ? p5.color(color.r, color.g, color.b, opacity)
        : p5.color(color.r, color.g, color.b, (_a = color.opacity) !== null && _a !== void 0 ? _a : 255);
};
/**
 * Draws horizontal and vertical lines.
 */
const drawHelpGrid = (p5, canvas, helperGridSize) => {
    for (let i = 0; i < canvas.width; i += helperGridSize) {
        p5.line(i, 0, i, canvas.height);
    }
    for (let i = 0; i < canvas.height; i += helperGridSize) {
        p5.line(0, i, canvas.width, i);
    }
};
const drawAgent = (agent, p5, canvas, agentDrawingModes) => {
    var _a, _b;
    const color = typeof agent.color === 'function'
        ? agent.color(agent, canvas)
        : agent.color;
    const p5Color = rgbToP5Color(p5, color, undefined);
    p5.stroke(p5Color);
    p5.fill(p5Color);
    p5.strokeWeight(agent.strokeWidth);
    //draws occasional circles
    if ((_b = p5.random(1) < ((_a = agentDrawingModes[_settingTypes__WEBPACK_IMPORTED_MODULE_1__.AgentDrawingModeType.CIRCLE]) === null || _a === void 0 ? void 0 : _a.percentage) / 100) !== null && _b !== void 0 ? _b : 0.01) {
        p5.circle(agent.position.x, agent.position.y, p5.random(1, 10));
    }
    else {
        p5.strokeCap(p5.SQUARE);
        p5.line(agent.previousPos.x, agent.previousPos.y, agent.position.x, agent.position.y);
    }
};
const drawGridCellContents = (grid, row, column, p5) => {
    if (column >= grid.gridValues.length) {
        throw 'DrawGridCellContents: Illegal row';
    }
    else if (row >= grid.gridValues[column].length) {
        throw 'DrawGridCellContents: Illegal column';
    }
    const { x: locationX, y: locationY } = (0,_utils_gridUtil__WEBPACK_IMPORTED_MODULE_0__.getLocationOfCell)(row, column, grid);
    const velocity = grid.gridValues[column][row].velocity;
    p5.line(locationX, locationY, locationX + velocity.x, locationY + velocity.y);
};
/**
 * Draws strength and direction of matrix.
 */
function* drawHelperMatrix(grid, p5) {
    const gridValues = grid.gridValues;
    for (let column = 0; column < gridValues.length; column++) {
        for (let row = 0; row < gridValues[column].length; row++) {
            drawGridCellContents(grid, row, column, p5);
        }
        yield;
    }
}
/**
 * Draws circles at magnet points, size depends on the strength
 * @param p5
 * @param magnets
 */
function drawMagnetPoints(p5, magnets, colorPalette, magnetStrengthMax) {
    for (let magnet of magnets) {
        p5.fill(magnet.strength < 0
            ? rgbToP5Color(p5, colorPalette[0])
            : rgbToP5Color(p5, colorPalette[colorPalette.length - 1]));
        p5.text(`x: ${magnet.locationX}, y: ${magnet.locationY}, mag: ${magnet.strength}`, magnet.locationX + magnetStrengthMax, magnet.locationY);
        p5.circle(magnet.locationX, magnet.locationY, Math.abs(magnet.strength));
    }
}
/* Drawing vertex
  // starting point
  let x = agent.position.x;
  let y = agent.position.y;
  let step = stepLength ?? grid.gridSize * 1;

  p5.push();
  p5.noFill();
  p5.strokeWeight(agent.strokeWidth);
  p5.beginShape();

  for (let n = 0; n < steps; n++) {
    p5.vertex(x, y);
    move(agent);
   }

  p5.endShape();
  p5.pop();
  return;
};
*/


/***/ }),

/***/ "./src/p5/renderer.ts":
/*!****************************!*\
  !*** ./src/p5/renderer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderer": () => (/* binding */ renderer)
/* harmony export */ });
/* harmony import */ var _drawingUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawingUtils */ "./src/p5/drawingUtils.ts");

const renderer = function (p5, settings) {
    let drawingGenerator;
    const clearScreen = function (color) {
        p5.background(color.r, color.g, color.b);
        p5.stroke(0, 0, 0);
        p5.strokeWeight(0.5);
    };
    const canvas = function ({ width, height, color }) {
        p5.createCanvas(width, height);
        clearScreen(color);
    };
    const reset = function (bgColor) {
        clearScreen(bgColor);
    };
    /**
     * @return true, if the grid is fully drawn.
     */
    const grid = function (grid) {
        if (!drawingGenerator) {
            drawingGenerator = (0,_drawingUtils__WEBPACK_IMPORTED_MODULE_0__.drawHelperMatrix)(grid, p5);
        }
        const val = drawingGenerator.next();
        return val.done;
    };
    const agents = function (agents, canvas, fading, drawingModes) {
        //Fades also grid
        p5.background(canvas.color.r, canvas.color.g, canvas.color.b, fading);
        for (let movingAgent of agents) {
            (0,_drawingUtils__WEBPACK_IMPORTED_MODULE_0__.drawAgent)(movingAgent, p5, canvas, drawingModes);
        }
    };
    const helperLines = function (canvas) {
        (0,_drawingUtils__WEBPACK_IMPORTED_MODULE_0__.drawHelpGrid)(p5, canvas, settings().HELPER_GRID_SIZE);
    };
    const magnetPoints = function (magnetPoints) {
        (0,_drawingUtils__WEBPACK_IMPORTED_MODULE_0__.drawMagnetPoints)(p5, magnetPoints, settings().COLOR_PALETTE, settings().MAGNET_STRENGTH_MAX);
    };
    return { canvas, grid, helperLines, agents, magnetPoints, reset, clearScreen };
};


/***/ }),

/***/ "./src/p5/sketch.ts":
/*!**************************!*\
  !*** ./src/p5/sketch.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/p5/renderer.ts");
/* harmony import */ var _stateHandling_reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stateHandling/reducers/drawingStateReducer */ "./src/stateHandling/reducers/drawingStateReducer.ts");
/* harmony import */ var _stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stateHandling/storeCreators/settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/take.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _settingTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settingTypes */ "./src/settingTypes.ts");
/* harmony import */ var _stateHandling_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stateHandling/storeCreators/drawingStore */ "./src/stateHandling/storeCreators/drawingStore.ts");
/* harmony import */ var _stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stateHandling/subscriptions */ "./src/stateHandling/subscriptions.ts");








/**TODO:
 * 1. FIX: When agent is created to max value, grid point is not found when agent is moved => error.
 * 2. Better separation of generic code for reuse and artsy, unclean test code. Get rid of p5js?
 * 3. Lazy calculation of force grid.
 * 4. Add barriers. Current ideas:
 *     - check how flocking/boid examples work.
 *     - should barrier affect the force grid or only the moving agents?
 *       (Maybe if the steering force of agent is different from the one saved in grid, the grid is updated with some weighted value?)
 *     - Barrier has a force vector in it and it turns approaching agent to steer away from it (depending on the distance)?
 *     - I may be simpler to pass barrier always from one direction, but not so nice (aka. has the barrier force a direction)?
 *     - there needs to be a range for spotting barriers as we don't want to loop everything through?
 *     - do agents affect each others (aka. are we talking about fluid or particles without mass)?
 *     - should barrier block also magnets? (Probably better to simplify first)
 * 5. Configs can set from UI? Configs are stored nicely.
 * 6. Consider if browser performance is enough. (Check Nannou, p5 nodejs port, canvas vs webgl)
 * 7. Add offset for agents => they would be not drawn perfectly on their agent.position, but on their offset position.
 * 8. Magnet points:
 *      - could move or be recalculated
 *      - Magnets could be just one kind of agent with extra properties.
 *      - Entities to classes?
 * 9. Shake the grid.
 * 10. General cleanup & refactoring.
 * 11. Make it art.
 **/
let loopingOn;
let settings;
let drawing;
let renderSettings;
/**
 * @return true if can move to next state
 * @param state
 * @param p5
 */
const sketch = function (p5) {
    renderSettings = settings;
    const getSettings = () => renderSettings;
    const render = (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderer)(p5, getSettings);
    loopingOn = () => p5.loop();
    let renderState = (renderState) => {
        const { grid, agents, stateIndex, canvas, magnets } = renderState;
        //todo: Some other solution?
        let payload = {};
        switch (getSettings().USED_STATES[stateIndex]) {
            case _settingTypes__WEBPACK_IMPORTED_MODULE_4__.StateOfArt.DRAW_GRID:
                let gridDone = render.grid(grid);
                payload = { phaseDone: gridDone };
                break;
            case _settingTypes__WEBPACK_IMPORTED_MODULE_4__.StateOfArt.DRAW_HELPER_GRID:
                render.helperLines(canvas);
                break;
            case _settingTypes__WEBPACK_IMPORTED_MODULE_4__.StateOfArt.DRAW_MAGNETS:
                render.magnetPoints(magnets);
                break;
            case _settingTypes__WEBPACK_IMPORTED_MODULE_4__.StateOfArt.CLEAR_SCREEN:
                render.clearScreen(canvas.color);
                break;
            case _settingTypes__WEBPACK_IMPORTED_MODULE_4__.StateOfArt.DRAW_AGENTS:
                render.agents(agents, canvas, getSettings().FADING, getSettings().AGENT_DRAWING_MODES);
                break;
            case _settingTypes__WEBPACK_IMPORTED_MODULE_4__.StateOfArt.END:
                console.log('done'); //DEBUG
                p5.noLoop();
                break;
            case _settingTypes__WEBPACK_IMPORTED_MODULE_4__.StateOfArt.RESET:
                render.reset(canvas.color);
                break;
        }
        return payload;
    };
    p5.setup = () => {
        const drawingState = drawing;
        renderSettings = settings;
        render.canvas(drawingState.canvas);
        (0,_stateHandling_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_5__["default"])().dispatch({ type: _stateHandling_reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_2__.DrawingActionType.SETUP_DRAW });
    };
    // Main render loop
    p5.draw = () => {
        const drawingState = drawing;
        renderSettings = settings;
        let payload = renderState(drawingState);
        (0,_stateHandling_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_5__["default"])().dispatch({ type: _stateHandling_reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_2__.DrawingActionType.SETUP_DRAW, payload: payload });
    };
};
const render = function () {
    let p5Instance;
    const init$ = (0,_stateHandling_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_5__["default"])().state$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1));
    init$.subscribe(newState => {
        p5Instance = new p5__WEBPACK_IMPORTED_MODULE_0__(sketch, document.getElementById('p5-container'));
    });
    //TODO: Refactor
    //We want the store to keep the same settings during a rendering round. 
    const drawingStore$ = (0,_stateHandling_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_5__["default"])().state$.subscribe((state) => drawing = state);
    const settingsState$ = (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_3__["default"])().state$.subscribe((state) => settings = state);
    const usedStates$ = (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_3__["default"])().state$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((state) => state.USED_STATES));
    const restart$ = (0,_stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_6__.subscribeToStateOfArtIndex)((index) => { if (_settingTypes__WEBPACK_IMPORTED_MODULE_4__.StateOfArt.RESET === (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_3__.getInitialSettings)().USED_STATES[index]) {
        loopingOn();
    } });
};


/***/ }),

/***/ "./src/settingTypes.ts":
/*!*****************************!*\
  !*** ./src/settingTypes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentDrawingModeType": () => (/* binding */ AgentDrawingModeType),
/* harmony export */   "StateOfArt": () => (/* binding */ StateOfArt)
/* harmony export */ });
var StateOfArt;
(function (StateOfArt) {
    StateOfArt["SETUP"] = "SETUP";
    StateOfArt["DRAW_GRID"] = "DRAW_GRID";
    StateOfArt["DRAW_AGENTS"] = "DRAW_AGENTS";
    StateOfArt["DRAW_HELPER_GRID"] = "DRAW_HELPER_GRID";
    StateOfArt["DRAW_MAGNETS"] = "DRAW_MAGNETS";
    StateOfArt["CONFIRM_DRAW"] = "CONFIRM_DRAW";
    StateOfArt["CLEAR_SCREEN"] = "CLEAR_SCREEN";
    StateOfArt["PAUSE"] = "PAUSE";
    StateOfArt["RESET"] = "RESET";
    StateOfArt["END"] = "END";
})(StateOfArt || (StateOfArt = {}));
var AgentDrawingModeType;
(function (AgentDrawingModeType) {
    AgentDrawingModeType["RECTANGLE"] = "RECTANGLE";
    AgentDrawingModeType["CIRCLE"] = "CIRCLE";
})(AgentDrawingModeType || (AgentDrawingModeType = {}));


/***/ }),

/***/ "./src/stateHandling/epics/recalculateMagnets.ts":
/*!*******************************************************!*\
  !*** ./src/stateHandling/epics/recalculateMagnets.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "recalculateMagnets": () => (/* binding */ recalculateMagnets)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/drawingStateReducer */ "./src/stateHandling/reducers/drawingStateReducer.ts");
/* harmony import */ var _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/settingsReducer */ "./src/stateHandling/reducers/settingsReducer.ts");
/* harmony import */ var _storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storeCreators/drawingStore */ "./src/stateHandling/storeCreators/drawingStore.ts");




const recalculateMagnets = (action$, state$) => {
    return action$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((action) => action.type === _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_1__.SettingsActionType.VALUE_CHANGE), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((action) => !!action.payload.change["NUM_OF_MAGNETS"]), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => (0,_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_2__["default"])().dispatch({ type: _reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_0__.DrawingActionType.RESET_MAGNETS })))
        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => { return { type: _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_1__.SettingsActionType.SUCCESS }; }));
};


/***/ }),

/***/ "./src/stateHandling/epics/saveImage.ts":
/*!**********************************************!*\
  !*** ./src/stateHandling/epics/saveImage.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "save": () => (/* binding */ save),
/* harmony export */   "saveCanvas": () => (/* binding */ saveCanvas)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _reducers_userActionReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/userActionReducer */ "./src/stateHandling/reducers/userActionReducer.ts");
/*global browser*/


const _isSafari = function () {
    const x = Object.prototype.toString.call(window.HTMLElement);
    return x.indexOf('Constructor') > 0;
};
//TODO: Not handling errors in any way 
const save = () => {
    console.log("in save");
    const canvas = document.getElementById('p5-container').getElementsByTagName('canvas')[0];
    const dataURL = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = "myCanvas";
    // Firefox requires the link to be added to the DOM before click()
    a.onclick = e => {
        document.body.removeChild(e.target);
        e.stopPropagation();
    };
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
};
const saveCanvas = (action$, state$) => {
    return action$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)((action) => action.type === _reducers_userActionReducer__WEBPACK_IMPORTED_MODULE_0__.UserActionType.SAVE), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(() => save()))
        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => { return { type: _reducers_userActionReducer__WEBPACK_IMPORTED_MODULE_0__.UserActionType.SUCCESS }; }));
};


/***/ }),

/***/ "./src/stateHandling/reducers/drawingStateReducer.ts":
/*!***********************************************************!*\
  !*** ./src/stateHandling/reducers/drawingStateReducer.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawingActionType": () => (/* binding */ DrawingActionType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _drawingStateUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawingStateUtil */ "./src/stateHandling/reducers/drawingStateUtil.ts");
/* harmony import */ var _subscriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subscriptions */ "./src/stateHandling/subscriptions.ts");


;
var DrawingActionType;
(function (DrawingActionType) {
    DrawingActionType[DrawingActionType["INIT"] = 0] = "INIT";
    DrawingActionType[DrawingActionType["READY_RENDER"] = 1] = "READY_RENDER";
    DrawingActionType[DrawingActionType["SETUP_DRAW"] = 2] = "SETUP_DRAW";
    DrawingActionType[DrawingActionType["JUMP_TO_INDEX"] = 3] = "JUMP_TO_INDEX";
    DrawingActionType[DrawingActionType["RESET_MAGNETS"] = 4] = "RESET_MAGNETS";
})(DrawingActionType || (DrawingActionType = {}));
const init = (initialSettings) => {
    return (0,_drawingStateUtil__WEBPACK_IMPORTED_MODULE_0__.initialState)({
        //todo: solve why p5 gives faulty values for width & height
        width: initialSettings.CANVAS_WIDTH,
        height: initialSettings.CANVAS_HEIGHT,
        color: initialSettings.BACKGROUND_COLOR,
    }, initialSettings);
};
let settingsState;
const createDrawingStateReducer = (initialSettings) => {
    let initState = init(initialSettings);
    (0,_subscriptions__WEBPACK_IMPORTED_MODULE_1__.subscribeToSettings)((state) => settingsState = state);
    const drawingStateReducer = (prevState, action) => {
        if (!prevState) {
            console.log("INITIALIZING !!!!");
            prevState = initState;
        }
        switch (action.type) {
            case DrawingActionType.SETUP_DRAW:
                return (0,_drawingStateUtil__WEBPACK_IMPORTED_MODULE_0__.setupNextRender)(prevState, action, settingsState);
            case DrawingActionType.JUMP_TO_INDEX:
                return (0,_drawingStateUtil__WEBPACK_IMPORTED_MODULE_0__.changeStateIndex)(prevState, action, settingsState);
            case DrawingActionType.RESET_MAGNETS:
                return (0,_drawingStateUtil__WEBPACK_IMPORTED_MODULE_0__.resetMagnets)(prevState, settingsState);
            default:
                return { ...prevState };
        }
    };
    return drawingStateReducer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDrawingStateReducer);


/***/ }),

/***/ "./src/stateHandling/reducers/drawingStateUtil.ts":
/*!********************************************************!*\
  !*** ./src/stateHandling/reducers/drawingStateUtil.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeStateIndex": () => (/* binding */ changeStateIndex),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "resetMagnets": () => (/* binding */ resetMagnets),
/* harmony export */   "setupNextRender": () => (/* binding */ setupNextRender)
/* harmony export */ });
/* harmony import */ var _entities_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../entities/Grid */ "./src/entities/Grid.ts");
/* harmony import */ var _entities_Agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Agent */ "./src/entities/Agent.ts");
/* harmony import */ var _entities_MagnetPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/MagnetPoint */ "./src/entities/MagnetPoint.ts");
/* harmony import */ var _settingTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settingTypes */ "./src/settingTypes.ts");
/* harmony import */ var _utils_gridUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/gridUtil */ "./src/utils/gridUtil.ts");





const getCurrentAgents = (agents, canvas, magnets, agentBurst, settings) => {
    const living = agents.filter((agent) => agent.isAlive);
    if (living.length < settings.MIN_AGENTS && agentBurst < settings.TOTAL_BURSTS) {
        agentBurst++;
        const startingPoints = (0,_entities_MagnetPoint__WEBPACK_IMPORTED_MODULE_2__.getCreators)(magnets);
        living.push(...(0,_entities_Agent__WEBPACK_IMPORTED_MODULE_1__.createDummyAgents)(startingPoints, canvas, settings));
    }
    return { agents: living, currentBurst: agentBurst };
};
const updateAgents = function (state, settings) {
    const { agents, grid, canvas, magnets, nextAgentBurst } = state;
    const { ADD_TO_OLD_VELOCITY, MAXIMUM_ACC, VELOCITY_MULTIPLIER, MAXIMUM_VELOCITY } = settings;
    for (let agent of agents) {
        (0,_entities_Agent__WEBPACK_IMPORTED_MODULE_1__.moveAgent)(agent, grid, ADD_TO_OLD_VELOCITY, MAXIMUM_ACC, VELOCITY_MULTIPLIER, MAXIMUM_VELOCITY);
        (0,_entities_Agent__WEBPACK_IMPORTED_MODULE_1__.checkIfAgentAlive)(agent, canvas, (0,_entities_MagnetPoint__WEBPACK_IMPORTED_MODULE_2__.getSinks)(magnets), grid.gridSize);
    }
    return getCurrentAgents(agents, canvas, magnets, nextAgentBurst, settings);
};
const reset = function (state, settings) {
    return initialState(state.canvas, settings);
};
//TODO: Change how grid is calculated. 
const resetMagnets = function (state, settings) {
    const grid = (0,_entities_Grid__WEBPACK_IMPORTED_MODULE_0__.gridFactory)(state.canvas.width, state.canvas.height, settings.GRID_SIZE);
    const magnets = (0,_entities_MagnetPoint__WEBPACK_IMPORTED_MODULE_2__.createMagnets)(state.canvas.width, state.canvas.height, settings.NUM_OF_MAGNETS, settings.MAGNET_STRENGTH_MAX);
    (0,_entities_Grid__WEBPACK_IMPORTED_MODULE_0__.fillGridUsingFunction)(grid, magnets, settings.MAGNET_FORCE_MULTIPLIER, _utils_gridUtil__WEBPACK_IMPORTED_MODULE_4__.calculateForces);
    return { ...state, ...{ magnets: magnets, grid: grid } };
};
const initialState = function (canvasSettings, settings) {
    const { width, height } = canvasSettings;
    const grid = (0,_entities_Grid__WEBPACK_IMPORTED_MODULE_0__.gridFactory)(width, height, settings.GRID_SIZE);
    const magnets = (0,_entities_MagnetPoint__WEBPACK_IMPORTED_MODULE_2__.createMagnets)(width, height, settings.NUM_OF_MAGNETS, settings.MAGNET_STRENGTH_MAX);
    (0,_entities_Grid__WEBPACK_IMPORTED_MODULE_0__.fillGridUsingFunction)(grid, magnets, settings.MAGNET_FORCE_MULTIPLIER, _utils_gridUtil__WEBPACK_IMPORTED_MODULE_4__.calculateForces);
    let startingPoints = (0,_entities_MagnetPoint__WEBPACK_IMPORTED_MODULE_2__.getCreators)(magnets);
    let agents = (0,_entities_Agent__WEBPACK_IMPORTED_MODULE_1__.createDummyAgents)(startingPoints, canvasSettings, settings);
    return {
        grid: grid,
        agents: agents,
        canvas: canvasSettings,
        stateIndex: 0,
        magnets: magnets,
        nextAgentBurst: 0
    };
};
const setupNextRender = (state, action, settings) => {
    const { stateIndex } = state;
    const { payload } = action;
    let next = false;
    let definedState;
    const { USED_STATES } = settings;
    if (USED_STATES[stateIndex] === _settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt.SETUP ||
        USED_STATES[stateIndex] === _settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt.DRAW_HELPER_GRID ||
        USED_STATES[stateIndex] === _settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt.DRAW_MAGNETS) {
        next = true;
    }
    else if (USED_STATES[stateIndex] === _settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt.END) {
        next = false;
        definedState = undefined;
    }
    else if (USED_STATES[stateIndex] === _settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt.DRAW_AGENTS) {
        let update = updateAgents(state, settings);
        state.agents = update.agents;
        state.nextAgentBurst = update.currentBurst;
        if (state.agents.length === 0) {
            next = true;
        }
    }
    else if (USED_STATES[stateIndex] === _settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt.RESET) {
        state = reset(state, settings);
        definedState = USED_STATES.indexOf(_settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt.SETUP) + 1;
    }
    else if (USED_STATES[stateIndex] === _settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt.CLEAR_SCREEN) {
        definedState = USED_STATES.indexOf(_settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt.CONFIRM_DRAW);
    }
    else {
        next = payload === null || payload === void 0 ? void 0 : payload.phaseDone;
    }
    return {
        ...state, ...{
            stateIndex: definedState ? definedState : (next ? stateIndex + 1 : stateIndex),
        }
    };
};
const changeStateIndex = (state, action, settings) => {
    let definedState = 0;
    const jumpToStage = action.payload.jumpToStage;
    const { USED_STATES } = settings;
    if (jumpToStage) {
        definedState = USED_STATES.indexOf(action.payload.jumpToStage);
    }
    //TODO: Remove debug
    if (definedState) {
        console.log(`Moving to stage: ${_settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt[USED_STATES[definedState]]}`);
    }
    console.log(`Def: ${definedState}, current: ${_settingTypes__WEBPACK_IMPORTED_MODULE_3__.StateOfArt[USED_STATES[definedState]]}`);
    return {
        ...state,
        ...{ stateIndex: definedState }
    };
};


/***/ }),

/***/ "./src/stateHandling/reducers/settingsReducer.ts":
/*!*******************************************************!*\
  !*** ./src/stateHandling/reducers/settingsReducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsActionType": () => (/* binding */ SettingsActionType),
/* harmony export */   "changeSettingValue": () => (/* binding */ changeSettingValue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SettingsActionType;
(function (SettingsActionType) {
    SettingsActionType[SettingsActionType["INIT"] = 0] = "INIT";
    SettingsActionType[SettingsActionType["VALUE_CHANGE"] = 1] = "VALUE_CHANGE";
    SettingsActionType[SettingsActionType["RELOAD_SETTINGS"] = 2] = "RELOAD_SETTINGS";
    SettingsActionType[SettingsActionType["SUCCESS"] = 3] = "SUCCESS";
})(SettingsActionType || (SettingsActionType = {}));
const changeSettingValue = (previousState, action) => ({
    ...previousState,
    ...action.payload.change
});
const createSettingsReducer = (initialSettings) => {
    const settingsReducer = (prevState = initialSettings, action) => {
        switch (action.type) {
            case SettingsActionType.VALUE_CHANGE:
                return changeSettingValue(prevState, action);
            case SettingsActionType.RELOAD_SETTINGS:
                return action.payload.settings;
            default:
                return { ...prevState };
        }
    };
    return settingsReducer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSettingsReducer);


/***/ }),

/***/ "./src/stateHandling/reducers/userActionReducer.ts":
/*!*********************************************************!*\
  !*** ./src/stateHandling/reducers/userActionReducer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserActionType": () => (/* binding */ UserActionType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.ts");

var UserActionType;
(function (UserActionType) {
    UserActionType[UserActionType["SAVE"] = 0] = "SAVE";
    UserActionType[UserActionType["SUCCESS"] = 1] = "SUCCESS";
})(UserActionType || (UserActionType = {}));
//All the settings need to be in config file, so that in future we can have multiple config files.!
const initialState = { ..._config__WEBPACK_IMPORTED_MODULE_0__.config };
const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        default:
            return prevState;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);


/***/ }),

/***/ "./src/stateHandling/store.ts":
/*!************************************!*\
  !*** ./src/stateHandling/store.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/internal/operators/scan.js");


;
const createStore = (reducer, epics) => {
    const action$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    const state$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Each dispatched action will be reduced by the reducer.
    const stateObs$ = action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.scan)(reducer, undefined));
    //As subjects are multicast and observables are unicast, we want to use subject here. 
    stateObs$.subscribe(state$);
    //Side effects of an action are handled in the epics. 
    if (!!epics) {
        epics(action$, state$).subscribe(action$);
    }
    return {
        dispatch: action$.next.bind(action$),
        state$: state$,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore);


/***/ }),

/***/ "./src/stateHandling/storeCreators/drawingStore.ts":
/*!*********************************************************!*\
  !*** ./src/stateHandling/storeCreators/drawingStore.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDrawingsStore": () => (/* binding */ createDrawingsStore),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/drawingStateReducer */ "./src/stateHandling/reducers/drawingStateReducer.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/stateHandling/store.ts");
/* harmony import */ var _settingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");



let store;
function createDrawingsStore() {
    store = (0,_store__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_settingsStore__WEBPACK_IMPORTED_MODULE_2__.getInitialSettings)()));
    return store;
}
;
const drawingStore = () => {
    if (!store) {
        throw new Error("Uninitialized drawing store error");
    }
    return store;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawingStore);


/***/ }),

/***/ "./src/stateHandling/storeCreators/settingsStore.ts":
/*!**********************************************************!*\
  !*** ./src/stateHandling/storeCreators/settingsStore.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInitialSettings": () => (/* binding */ createInitialSettings),
/* harmony export */   "createSettingsStore": () => (/* binding */ createSettingsStore),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getInitialSettings": () => (/* binding */ getInitialSettings)
/* harmony export */ });
/* harmony import */ var _utils_parseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/parseUrl */ "./src/utils/parseUrl.ts");
/* harmony import */ var _epics_recalculateMagnets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../epics/recalculateMagnets */ "./src/stateHandling/epics/recalculateMagnets.ts");
/* harmony import */ var _reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/settingsReducer */ "./src/stateHandling/reducers/settingsReducer.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/stateHandling/store.ts");




const epics = _epics_recalculateMagnets__WEBPACK_IMPORTED_MODULE_1__.recalculateMagnets;
let store;
let initialSettings;
function createSettingsStore() {
    store = (0,_store__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_2__["default"])(getInitialSettings()), epics);
    return store;
}
;
function createInitialSettings() {
    initialSettings = { ...(0,_utils_parseUrl__WEBPACK_IMPORTED_MODULE_0__.getInitialConfigObj)() };
    return initialSettings;
}
;
const settingsStore = () => {
    if (!store) {
        throw new Error("Uninitialized settings store error");
    }
    return store;
};
function getInitialSettings() {
    if (!initialSettings) {
        createInitialSettings();
    }
    return initialSettings;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settingsStore);


/***/ }),

/***/ "./src/stateHandling/storeCreators/userActionStore.ts":
/*!************************************************************!*\
  !*** ./src/stateHandling/storeCreators/userActionStore.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _epics_saveImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../epics/saveImage */ "./src/stateHandling/epics/saveImage.ts");
/* harmony import */ var _reducers_userActionReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/userActionReducer */ "./src/stateHandling/reducers/userActionReducer.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/stateHandling/store.ts");



//Just one epic for now
const epics = _epics_saveImage__WEBPACK_IMPORTED_MODULE_0__.saveCanvas;
const userActionStore = (0,_store__WEBPACK_IMPORTED_MODULE_2__["default"])(_reducers_userActionReducer__WEBPACK_IMPORTED_MODULE_1__["default"], epics);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userActionStore);


/***/ }),

/***/ "./src/stateHandling/subscriptions.ts":
/*!********************************************!*\
  !*** ./src/stateHandling/subscriptions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onEmit": () => (/* binding */ onEmit),
/* harmony export */   "subscribeToButtonConfs": () => (/* binding */ subscribeToButtonConfs),
/* harmony export */   "subscribeToDrawingState": () => (/* binding */ subscribeToDrawingState),
/* harmony export */   "subscribeToMagnets": () => (/* binding */ subscribeToMagnets),
/* harmony export */   "subscribeToPalette": () => (/* binding */ subscribeToPalette),
/* harmony export */   "subscribeToSettings": () => (/* binding */ subscribeToSettings),
/* harmony export */   "subscribeToStateOfArtIndex": () => (/* binding */ subscribeToStateOfArtIndex),
/* harmony export */   "subscribeUsedStateOfArt": () => (/* binding */ subscribeUsedStateOfArt)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _utils_parseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/parseUrl */ "./src/utils/parseUrl.ts");
/* harmony import */ var _storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeCreators/drawingStore */ "./src/stateHandling/storeCreators/drawingStore.ts");
/* harmony import */ var _storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storeCreators/settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");




//Todo: Performance improvements. This is doing quite a lot of extra unneeded stuff. Check also preact rendering as it can be reduced. 
const stateOfArtIndex$ = () => (0,_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_1__["default"])().state$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((state) => state.stateIndex));
const usedStates$ = () => (0,_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])().state$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((state) => state.USED_STATES));
const palette$ = () => (0,_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])().state$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((state) => state.COLOR_PALETTE));
const showButtons$ = () => (0,_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])().state$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((state) => ({ showControls: state.SHOW_CONTROLS, showButtons: state.SHOW_BUTTONS, showAdvanced: (0,_utils_parseUrl__WEBPACK_IMPORTED_MODULE_0__.showAdvanced)() })));
function onEmit(source$, nextFn) {
    return source$.subscribe((value) => { nextFn(value); });
}
const subscribeToSettings = (nextFn) => {
    return onEmit((0,_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])().state$, nextFn);
};
const subscribeToPalette = (nextFn) => {
    return onEmit(palette$(), nextFn);
};
const subscribeToButtonConfs = (nextFn) => {
    return onEmit(showButtons$(), nextFn);
};
const subscribeToDrawingState = (nextFn) => {
    return onEmit((0,_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_1__["default"])().state$, nextFn);
};
const subscribeToMagnets = (nextFn) => {
    return onEmit((0,_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_1__["default"])().state$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((state) => JSON.parse(JSON.stringify(state.magnets)))), nextFn);
};
const subscribeToStateOfArtIndex = (nextFn) => {
    return onEmit(stateOfArtIndex$(), nextFn);
};
const subscribeUsedStateOfArt = (nextFn) => {
    return onEmit(usedStates$(), nextFn);
};


/***/ }),

/***/ "./src/userInput/components/AdvancedSettings.tsx":
/*!*******************************************************!*\
  !*** ./src/userInput/components/AdvancedSettings.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedSettings": () => (/* binding */ AdvancedSettings)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useSettings */ "./src/userInput/hooks/useSettings.ts");
/* harmony import */ var _CreateUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateUrl */ "./src/userInput/components/CreateUrl.tsx");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/userInput/components/Button.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/config.ts");






const getNames = (settings) => {
    const keys = Object.keys(settings);
    return keys.map(key => ({ key: key, type: typeof settings[key], value: settings[key] }));
};
function SettingInputField({ setting, onInput }) {
    if (setting.type === "number") {
        return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", { style: { width: "100px" }, type: "number", value: setting.value, onInput: (e) => onInput(Number.parseFloat(e.target.value), setting.key) }));
    }
    else if (setting.type === "boolean") {
        return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", { style: { width: "100px" }, type: "checkbox", checked: setting.value, onInput: (e) => onInput(e.target.checked, setting.key) }));
    }
    else {
        return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("pre", { style: { margin: 0 } },
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { style: { whiteSpace: "pre-wrap", margin: 0 }, value: JSON.stringify(setting.value), onInput: (e) => onInput(JSON.parse(e.target.value), setting.key) })));
    }
}
function AdvancedSettings({}) {
    const [settings, setSettings] = (0,_hooks_useSettings__WEBPACK_IMPORTED_MODULE_1__.useSettings)();
    const [show, setShowing] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [userSettings, setUserSettings] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)({ ...settings });
    const toggleShow = (e) => {
        setShowing(e.target.checked);
        //setUserSettings({...settings});
    };
    const onInput = (value, key) => {
        console.log({ [key]: value });
        setUserSettings({ ...userSettings, ...{ [key]: value } });
        console.dir(userSettings);
    };
    const typedSettingsToSettingsState = (typed) => {
        return JSON.parse(typed);
    };
    return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { width: "100%" } },
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { display: "block" } },
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", { key: "showButtons", onClick: (e) => toggleShow(e), type: "checkbox", checked: show }),
            "Show advanced"),
        show &&
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { display: "block", backgroundColor: "white", width: "100%" } },
                getNames(userSettings).map((setting) => {
                    return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null,
                        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", { style: { width: "250px", display: "inline-block" } }, setting.key),
                        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(SettingInputField, { setting: setting, onInput: onInput }),
                        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Button__WEBPACK_IMPORTED_MODULE_4__.Button, { className: "button button-clear", title: "Reset", onClick: () => { onInput(settings[setting.key], setting.key); } }),
                        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Button__WEBPACK_IMPORTED_MODULE_4__.Button, { className: "button button-clear", title: "Default", onClick: () => { onInput(_config__WEBPACK_IMPORTED_MODULE_5__.config[setting.key], setting.key); } })));
                }),
                ";",
                (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { position: "fixed", left: "50%", bottom: 0 } },
                    (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Button__WEBPACK_IMPORTED_MODULE_4__.Button, { title: "Save changes", onClick: () => { setSettings(typedSettingsToSettingsState(JSON.stringify(userSettings))); } })),
                (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_CreateUrl__WEBPACK_IMPORTED_MODULE_2__.CreateUrl, null))));
}
/*
<pre>
                <textarea style={{ whiteSpace: "pre-wrap", height: "200px" }} value={JSON.stringify(userSettings)} onInput={(e) => onInput(e, settingKey.name)} id="commentField"></textarea>
            </pre>
Array(12) [ "003ac9", "002379", "e6edff", "6692ff", "ff5f00", "993900", "ffefe6", "ff9f66", "ffc900", "997900", … ]
 ​
0: "003ac9"
 ​
1: "002379"
 ​
2: "e6edff"
 ​
3: "6692ff"
 ​
4: "ff5f00"
 ​
5: "993900"
 ​
6: "ffefe6"
 ​
7: "ff9f66"
 ​
8: "ffc900"
 ​
9: "997900"
 ​
10: "fffae6"
 ​
11: "ffdf66"
 ​
length: 12
 ​
<prototype>: Array []
colorUtil.ts:22:10
*/ 


/***/ }),

/***/ "./src/userInput/components/Button.tsx":
/*!*********************************************!*\
  !*** ./src/userInput/components/Button.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");

function Button({ title, onClick, disabled, className }) {
    return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { display: "inline-block", margin: "5px 3px" } },
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { disabled: disabled, className: className !== null && className !== void 0 ? className : "button-small", onClick: () => onClick() }, title)));
}


/***/ }),

/***/ "./src/userInput/components/Buttons.tsx":
/*!**********************************************!*\
  !*** ./src/userInput/components/Buttons.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Buttons": () => (/* binding */ Buttons)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _settingTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settingTypes */ "./src/settingTypes.ts");
/* harmony import */ var _stateHandling_reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stateHandling/reducers/drawingStateReducer */ "./src/stateHandling/reducers/drawingStateReducer.ts");
/* harmony import */ var _stateHandling_reducers_userActionReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stateHandling/reducers/userActionReducer */ "./src/stateHandling/reducers/userActionReducer.ts");
/* harmony import */ var _hooks_useStateOfArt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useStateOfArt */ "./src/userInput/hooks/useStateOfArt.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./src/userInput/components/Button.tsx");







const start = (dispatch) => {
    dispatch({ type: _stateHandling_reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_3__.DrawingActionType.JUMP_TO_INDEX, payload: { jumpToStage: _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.DRAW_AGENTS } });
};
const stop = (dispatch) => {
    dispatch({ type: _stateHandling_reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_3__.DrawingActionType.JUMP_TO_INDEX, payload: { jumpToStage: _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.CONFIRM_DRAW } });
};
const clear = (dispatch) => {
    dispatch({ type: _stateHandling_reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_3__.DrawingActionType.JUMP_TO_INDEX, payload: { jumpToStage: _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.CLEAR_SCREEN } });
};
const restart = (dispatch) => {
    dispatch({ type: _stateHandling_reducers_drawingStateReducer__WEBPACK_IMPORTED_MODULE_3__.DrawingActionType.JUMP_TO_INDEX, payload: { jumpToStage: _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.RESET } });
};
const save = (userActionDispatch) => {
    userActionDispatch({ type: _stateHandling_reducers_userActionReducer__WEBPACK_IMPORTED_MODULE_4__.UserActionType.SAVE });
};
const waitingForConfirm = (state) => {
    return _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.CONFIRM_DRAW === state;
};
const notRendering = (stateOfArt) => {
    return stateOfArt !== _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.SETUP && stateOfArt !== _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.END && stateOfArt !== _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.CONFIRM_DRAW;
};
const possiblyArtDone = (stateOfArt) => {
    return stateOfArt === _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.CONFIRM_DRAW || stateOfArt === _settingTypes__WEBPACK_IMPORTED_MODULE_2__.StateOfArt.END;
};
function Buttons({}) {
    const [stateOfArt, drawingDispatch, userActionDispatch] = (0,_hooks_useStateOfArt__WEBPACK_IMPORTED_MODULE_5__.useStateOfArt)();
    return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        waitingForConfirm(stateOfArt) && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Button__WEBPACK_IMPORTED_MODULE_6__.Button, { title: "Continue", onClick: () => { start(drawingDispatch); } }),
        notRendering(stateOfArt) && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Button__WEBPACK_IMPORTED_MODULE_6__.Button, { title: "Stop", onClick: () => { stop(drawingDispatch); } }),
        waitingForConfirm(stateOfArt) && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Button__WEBPACK_IMPORTED_MODULE_6__.Button, { title: "Clear screen", onClick: () => { clear(drawingDispatch); } }),
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Button__WEBPACK_IMPORTED_MODULE_6__.Button, { title: "Restart", onClick: () => { restart(drawingDispatch); } }),
        possiblyArtDone(stateOfArt) && (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_Button__WEBPACK_IMPORTED_MODULE_6__.Button, { title: "Take a picture", onClick: () => { save(userActionDispatch); } })));
}


/***/ }),

/***/ "./src/userInput/components/CreateUrl.tsx":
/*!************************************************!*\
  !*** ./src/userInput/components/CreateUrl.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUrl": () => (/* binding */ CreateUrl)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var _utils_parseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/parseUrl */ "./src/utils/parseUrl.ts");
/* harmony import */ var _hooks_useCreateUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useCreateUrl */ "./src/userInput/hooks/useCreateUrl.ts");



function CreateUrl({}) {
    const [state, setState] = (0,_hooks_useCreateUrl__WEBPACK_IMPORTED_MODULE_2__.useCreateUrl)();
    const combinedSettings = () => {
        return {
            ...state.settings,
            ...{
                SHOW_BUTTONS: state.showButtons,
                SHOW_CONTROLS: state.showConfigs,
            }
        };
    };
    const createHashUrl = () => {
        //const state: SettingsState = { ...settingsStore.last(), ...{ SHOW_BUTTONS: this.state.showButtons, SHOW_CONTROLS: this.state.showConfigs } }
        const encodedState = (0,_utils_parseUrl__WEBPACK_IMPORTED_MODULE_1__.uniencode)(combinedSettings());
        let url = location.host;
        setState({
            ...state, ...{
                urlCreated: `http://${url}?settings=${encodedState}`
            }
        });
        setTimeout(() => {
            setState({
                ...state,
                ...{ urlCreated: "" }
            });
        }, 30 * 1000);
    };
    const toggleShowButtons = (e) => {
        setState({
            ...state, ...{
                showButtons: e.target.checked
            }
        });
    };
    const toggleShowConfigs = (e) => {
        setState({
            ...state, ...{ showConfigs: e.target.checked }
        });
    };
    const toggleShowAdvanced = (e) => {
        setState({
            ...state, ...{ showAdvanced: e.target.checked }
        });
    };
    return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { display: "block" } },
        state.urlCreated &&
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null,
                (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null,
                    (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", { key: "urlHash", style: { width: 200 }, value: state.urlCreated })),
                (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null,
                    (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", { target: "_blank", href: state.urlCreated }, "Link"),
                    (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { className: "button-small button button-clear", onClick: () => alert(JSON.stringify(combinedSettings())) }, "JSON"))),
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { display: "block" } },
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", { key: "showButtons", onClick: (e) => toggleShowButtons(e), type: "checkbox", checked: state.showButtons }),
            "Show buttons in url"),
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { display: "block" } },
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", { key: "showConfigs", onClick: (e) => toggleShowConfigs(e), type: "checkbox", checked: state.showConfigs }),
            "Show configs in url"),
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { display: "block" } },
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { className: "button-small", onClick: () => createHashUrl() }, "Create url"))));
}


/***/ }),

/***/ "./src/userInput/components/FinishedInfo.tsx":
/*!***************************************************!*\
  !*** ./src/userInput/components/FinishedInfo.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinishedInfo": () => (/* binding */ FinishedInfo)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _settingTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settingTypes */ "./src/settingTypes.ts");


function FinishedInfo({ stateOfArt }) {
    return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, stateOfArt === _settingTypes__WEBPACK_IMPORTED_MODULE_1__.StateOfArt.END &&
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", { style: { padding: "8px", backgroundColor: "white" } }, "Finished drawing!")));
}


/***/ }),

/***/ "./src/userInput/components/Magnets.tsx":
/*!**********************************************!*\
  !*** ./src/userInput/components/Magnets.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Magnet": () => (/* binding */ Magnet),
/* harmony export */   "Magnets": () => (/* binding */ Magnets)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _hooks_useMagnets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useMagnets */ "./src/userInput/hooks/useMagnets.ts");



function Magnet({ x, y, strength, color }) {
    return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null,
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { position: "absolute", top: y - strength / 2, left: x - strength / 2, display: "inline-block", width: strength, height: strength, borderRadius: "50%", backgroundColor: color } }),
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", { style: { position: "absolute", top: y, left: x } },
            "x: ",
            x,
            ", y: ",
            y,
            ", strength: ",
            strength)));
}
function Magnets({}) {
    var _a;
    const [state, setState] = (0,_hooks_useMagnets__WEBPACK_IMPORTED_MODULE_2__.useMagnets)();
    const showMagnets = (showMagnets) => {
        setState({
            ...state, ...{
                showMagnets: showMagnets,
                showButton: !showMagnets
            }
        });
        setTimeout(() => {
            setState({
                ...state, ...{
                    showMagnets: !showMagnets,
                    showButton: showMagnets
                }
            });
        }, 10 * 1000);
    };
    return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        state.showButton &&
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { className: "button-small", onClick: () => showMagnets(true) }, "Show magnets"),
        state.showMagnets &&
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { pointerEvents: "none", display: "block", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" } }, ((_a = state.magnets) === null || _a === void 0 ? void 0 : _a.length) && (state.magnets.map(magnet => (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(Magnet, { x: magnet.locationX, y: magnet.locationY, strength: Math.abs(magnet.strength), color: magnet.strength > 0 ? "red" : "blue" }))))));
}


/***/ }),

/***/ "./src/userInput/components/Palette.tsx":
/*!**********************************************!*\
  !*** ./src/userInput/components/Palette.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Palette": () => (/* binding */ Palette)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");

function Palette({ palette }) {
    return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { display: "inline-block", margin: 10 } }, palette.length && (palette.map(paletteColor => (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { display: "inline-block", width: 10, height: 10, borderRadius: "50%", backgroundColor: `rgb(${paletteColor.r}, ${paletteColor.g}, ${paletteColor.b})` } })))));
}


/***/ }),

/***/ "./src/userInput/configInput.ts":
/*!**************************************!*\
  !*** ./src/userInput/configInput.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addConfigInputs": () => (/* binding */ addConfigInputs)
/* harmony export */ });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
/* harmony import */ var _stateHandling_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stateHandling/reducers/settingsReducer */ "./src/stateHandling/reducers/settingsReducer.ts");
/* harmony import */ var _stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stateHandling/storeCreators/settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");
/* harmony import */ var _utils_colorUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/colorUtil */ "./src/utils/colorUtil.ts");




const createInitialUISettings = (settings) => {
    return {
        TOTAL_BURSTS: settings.TOTAL_BURSTS,
        RANDOM_START: settings.RANDOM_START,
        BURST_SIZE: settings.BURST_SIZE,
        MIN_AGENTS: settings.MIN_AGENTS,
        NUM_OF_MAGNETS: settings.NUM_OF_MAGNETS,
        MAGNET_STRENGTH_MAX: settings.MAGNET_STRENGTH_MAX,
        //Multiplier constant. Similar to G in gravity calculations.
        MAGNET_FORCE_MULTIPLIER: settings.MAGNET_FORCE_MULTIPLIER,
        MAX_STROKE: settings.MAX_STROKE,
        DEFAULT_LIFESPAN: settings.DEFAULT_LIFESPAN,
        MAXIMUM_VELOCITY: settings.MAXIMUM_VELOCITY,
        MAXIMUM_ACC: settings.MAXIMUM_ACC,
        ADD_TO_OLD_VELOCITY: settings.ADD_TO_OLD_VELOCITY,
        VELOCITY_MULTIPLIER: settings.VELOCITY_MULTIPLIER,
        COLOR_PALETTE: [...settings.COLOR_PALETTE],
        BACKGROUND_COLOR: settings.BACKGROUND_COLOR,
        FADING: settings.FADING
    };
};
//Local state of setting controllers for dat.gui
let UIsettings;
const paletteUpdateObj = {
    RELOAD_PALETTE: function () {
        let scheme = (0,_utils_colorUtil__WEBPACK_IMPORTED_MODULE_3__.getScheme)();
        UIsettings.COLOR_PALETTE = scheme;
        (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])().dispatch({
            type: _stateHandling_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_1__.SettingsActionType.VALUE_CHANGE,
            payload: { change: { COLOR_PALETTE: scheme } }
        });
    }
};
const addListener = (guiC, key) => {
    return guiC.onFinishChange((value) => {
        console.log(value);
        (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])().dispatch({
            type: _stateHandling_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_1__.SettingsActionType.VALUE_CHANGE,
            payload: { change: { [key]: value } }
        });
    });
};
const controllers = {};
const addConfigInputs = function (initialSettings) {
    UIsettings = createInitialUISettings(initialSettings);
    //TODO:FIX UGLINESS!! 
    let gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI();
    for (let sets of initialSettings.UI_CONFIGS) {
        const [key, min, max, step] = sets;
        const guiC = gui.add(UIsettings, key, min, max, step);
        addListener(guiC, key);
        controllers[key] = guiC;
    }
    const randomGui = gui.add(UIsettings, "RANDOM_START", true);
    addListener(randomGui, "RANDOM_START");
    controllers["RANDOM_START"] = randomGui;
    const paletteGui = gui.add(paletteUpdateObj, 'RELOAD_PALETTE');
    controllers['RELOAD_PALETTE'] = paletteGui;
    gui.close(); // start the sketch with the GUI closed 
};


/***/ }),

/***/ "./src/userInput/controlButtons.tsx":
/*!******************************************!*\
  !*** ./src/userInput/controlButtons.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var htm_preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm/preact */ "./node_modules/htm/preact/index.module.js");
/* harmony import */ var _components_Palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Palette */ "./src/userInput/components/Palette.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Buttons */ "./src/userInput/components/Buttons.tsx");
/* harmony import */ var _components_FinishedInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FinishedInfo */ "./src/userInput/components/FinishedInfo.tsx");
/* harmony import */ var _components_Magnets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Magnets */ "./src/userInput/components/Magnets.tsx");
/* harmony import */ var _hooks_usePalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/usePalette */ "./src/userInput/hooks/usePalette.ts");
/* harmony import */ var _hooks_useStateOfArt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStateOfArt */ "./src/userInput/hooks/useStateOfArt.ts");
/* harmony import */ var _hooks_useButtonConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useButtonConfig */ "./src/userInput/hooks/useButtonConfig.ts");
/* harmony import */ var _components_AdvancedSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/AdvancedSettings */ "./src/userInput/components/AdvancedSettings.tsx");









function ControlButtons({}) {
    const [palette] = (0,_hooks_usePalette__WEBPACK_IMPORTED_MODULE_5__.usePalette)();
    const [stateOfArt] = (0,_hooks_useStateOfArt__WEBPACK_IMPORTED_MODULE_6__.useStateOfArt)();
    const [buttonConfig] = (0,_hooks_useButtonConfig__WEBPACK_IMPORTED_MODULE_7__.useButtonConfig)();
    return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { position: "relative" } },
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null,
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_Palette__WEBPACK_IMPORTED_MODULE_1__.Palette, { palette: palette }),
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__.Buttons, null),
            buttonConfig.showControls &&
                (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_Magnets__WEBPACK_IMPORTED_MODULE_4__.Magnets, null)),
        (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_FinishedInfo__WEBPACK_IMPORTED_MODULE_3__.FinishedInfo, { stateOfArt: stateOfArt }),
        buttonConfig.showAdvanced &&
            (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(_components_AdvancedSettings__WEBPACK_IMPORTED_MODULE_8__.AdvancedSettings, null)));
}
const createControlButtons = () => {
    //TODO:Clean up
    let buttons = function () {
        return ((0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.h)(ControlButtons, null));
    };
    (0,htm_preact__WEBPACK_IMPORTED_MODULE_0__.render)(buttons(), document.getElementById("user-controls"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createControlButtons);


/***/ }),

/***/ "./src/userInput/hooks/useButtonConfig.ts":
/*!************************************************!*\
  !*** ./src/userInput/hooks/useButtonConfig.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useButtonConfig": () => (/* binding */ useButtonConfig)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stateHandling/storeCreators/settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");
/* harmony import */ var _stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stateHandling/subscriptions */ "./src/stateHandling/subscriptions.ts");
/* harmony import */ var _utils_parseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/parseUrl */ "./src/utils/parseUrl.ts");




function useButtonConfig() {
    const { SHOW_BUTTONS, SHOW_CONTROLS } = (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_1__.getInitialSettings)();
    const [buttonConfs, setButtonConfs] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)({ showButtons: SHOW_BUTTONS, showControls: SHOW_CONTROLS, showAdvanced: (0,_utils_parseUrl__WEBPACK_IMPORTED_MODULE_3__.showAdvanced)() });
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const subscriptions = [
            (0,_stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_2__.subscribeToButtonConfs)(state => setButtonConfs(state))
        ];
        return () => { subscriptions.map(it => it.unsubscribe()); };
    }, []);
    return [buttonConfs];
}


/***/ }),

/***/ "./src/userInput/hooks/useCreateUrl.ts":
/*!*********************************************!*\
  !*** ./src/userInput/hooks/useCreateUrl.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateUrl": () => (/* binding */ useCreateUrl)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stateHandling/storeCreators/settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");
/* harmony import */ var _stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stateHandling/subscriptions */ "./src/stateHandling/subscriptions.ts");



function useCreateUrl() {
    const settings = (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_1__.getInitialSettings)();
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)({
        urlCreated: "",
        showButtons: settings.SHOW_BUTTONS,
        showConfigs: settings.SHOW_CONTROLS,
        settings: settings
    });
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const subscriptions = [
            (0,_stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_2__.subscribeToSettings)(settings => setState(state => ({ ...state, settings }))),
        ];
        return () => { subscriptions.map(it => it.unsubscribe()); };
    }, []);
    return [state, setState];
}


/***/ }),

/***/ "./src/userInput/hooks/useMagnets.ts":
/*!*******************************************!*\
  !*** ./src/userInput/hooks/useMagnets.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMagnets": () => (/* binding */ useMagnets)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stateHandling/subscriptions */ "./src/stateHandling/subscriptions.ts");


function useMagnets() {
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)({ magnets: [], showMagnets: false, showButton: true });
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const subscriptions = [
            (0,_stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_1__.subscribeToMagnets)(magnets => { setState(state => ({ ...state, ...{ magnets: [...magnets] } })); })
        ];
        return () => { console.log("cleared"); subscriptions.map(it => it.unsubscribe()); };
    }, []);
    return [state, setState];
}


/***/ }),

/***/ "./src/userInput/hooks/usePalette.ts":
/*!*******************************************!*\
  !*** ./src/userInput/hooks/usePalette.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePalette": () => (/* binding */ usePalette)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stateHandling/storeCreators/settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");
/* harmony import */ var _stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stateHandling/subscriptions */ "./src/stateHandling/subscriptions.ts");



function usePalette() {
    const { COLOR_PALETTE } = (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_1__.getInitialSettings)();
    const [palette, setPalette] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(COLOR_PALETTE);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const subscriptions = [
            (0,_stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_2__.subscribeToPalette)(palette => { setPalette(state => (palette !== null && palette !== void 0 ? palette : [])); })
        ];
        return () => { subscriptions.map(it => it.unsubscribe()); };
    }, []);
    return [palette];
}


/***/ }),

/***/ "./src/userInput/hooks/useSettings.ts":
/*!********************************************!*\
  !*** ./src/userInput/hooks/useSettings.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSettings": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _stateHandling_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stateHandling/reducers/settingsReducer */ "./src/stateHandling/reducers/settingsReducer.ts");
/* harmony import */ var _stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stateHandling/storeCreators/settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");
/* harmony import */ var _stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stateHandling/subscriptions */ "./src/stateHandling/subscriptions.ts");




function useSettings() {
    const settings = (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__.getInitialSettings)();
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)({ ...settings });
    const setSettings = (settings) => (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__["default"])().dispatch({ type: _stateHandling_reducers_settingsReducer__WEBPACK_IMPORTED_MODULE_1__.SettingsActionType.RELOAD_SETTINGS,
        payload: { settings: settings } });
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const subscriptions = [
            (0,_stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_3__.subscribeToSettings)(settings => setState(state => ({ ...state, ...settings }))),
        ];
        return () => { subscriptions.map(it => it.unsubscribe()); };
    }, []);
    return [state, setSettings];
}


/***/ }),

/***/ "./src/userInput/hooks/useStateOfArt.ts":
/*!**********************************************!*\
  !*** ./src/userInput/hooks/useStateOfArt.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStateOfArt": () => (/* binding */ useStateOfArt)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _stateHandling_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stateHandling/storeCreators/drawingStore */ "./src/stateHandling/storeCreators/drawingStore.ts");
/* harmony import */ var _stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stateHandling/storeCreators/settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");
/* harmony import */ var _stateHandling_storeCreators_userActionStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stateHandling/storeCreators/userActionStore */ "./src/stateHandling/storeCreators/userActionStore.ts");
/* harmony import */ var _stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stateHandling/subscriptions */ "./src/stateHandling/subscriptions.ts");





function useStateOfArt() {
    const { USED_STATES } = (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_2__.getInitialSettings)();
    const [state, setState] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)(USED_STATES[0]);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const subscriptions = [
            (0,_stateHandling_subscriptions__WEBPACK_IMPORTED_MODULE_4__.subscribeToStateOfArtIndex)(index => { setState(USED_STATES[index]); }),
        ];
        return () => { console.log("unsubscribing"); subscriptions.map(it => it.unsubscribe()); };
    }, []);
    return [state, (0,_stateHandling_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_1__["default"])().dispatch, _stateHandling_storeCreators_userActionStore__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch];
}


/***/ }),

/***/ "./src/utils/colorUtil.ts":
/*!********************************!*\
  !*** ./src/utils/colorUtil.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScheme": () => (/* binding */ getScheme),
/* harmony export */   "paletteSchemes": () => (/* binding */ paletteSchemes),
/* harmony export */   "variations": () => (/* binding */ variations)
/* harmony export */ });
/* harmony import */ var _mathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathUtils */ "./src/utils/mathUtils.ts");
/* harmony import */ var color_scheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-scheme */ "./node_modules/color-scheme/lib/color-scheme.js");
/* harmony import */ var color_scheme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color_scheme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hex_rgb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hex-rgb */ "./node_modules/hex-rgb/index.js");



const paletteSchemes = ['mono', 'contrast', 'triade', 'tetrade', 'analogic'];
const variations = ['default', 'pastel', 'soft', 'light', 'hard', 'pale'];
const getScheme = () => {
    const paletteScheme = paletteSchemes[(0,_mathUtils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(paletteSchemes.length)];
    const variation = variations[(0,_mathUtils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(variations.length - 1)];
    const scheme = new color_scheme__WEBPACK_IMPORTED_MODULE_1__();
    scheme.from_hue((0,_mathUtils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(359)).scheme(paletteScheme);
    scheme.variation(variation);
    const colors = scheme.colors();
    console.log(paletteScheme);
    console.log(variation);
    console.log(colors);
    const rgbs = colors.map((color) => (0,hex_rgb__WEBPACK_IMPORTED_MODULE_2__["default"])(color));
    return rgbs.map((rgba) => ({
        r: rgba.red,
        b: rgba.blue,
        g: rgba.green,
        opacity: 95
    }));
};


/***/ }),

/***/ "./src/utils/gridUtil.ts":
/*!*******************************!*\
  !*** ./src/utils/gridUtil.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateForces": () => (/* binding */ calculateForces),
/* harmony export */   "dummyAngleCB": () => (/* binding */ dummyAngleCB),
/* harmony export */   "getCurrentGridPosition": () => (/* binding */ getCurrentGridPosition),
/* harmony export */   "getLocationOfCell": () => (/* binding */ getLocationOfCell),
/* harmony export */   "getNumOfColumns": () => (/* binding */ getNumOfColumns),
/* harmony export */   "getNumOfRows": () => (/* binding */ getNumOfRows),
/* harmony export */   "isOnSameGridPoint": () => (/* binding */ isOnSameGridPoint)
/* harmony export */ });
/* harmony import */ var _mathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathUtils */ "./src/utils/mathUtils.ts");
/* harmony import */ var _entities_ArtVector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/ArtVector */ "./src/entities/ArtVector.ts");


const getNumOfColumns = (grid) => {
    return grid.gridValues ? grid.gridValues.length : 0;
};
//Expecting grid having the same number of rows in each column.
const getNumOfRows = (grid) => {
    return grid.gridValues && grid.gridValues[0] ? grid.gridValues[0].length : 0;
};
const getCurrentGridPosition = (positionX, positionY, gridSize) => {
    return {
        row: Math.floor(positionY / gridSize),
        column: Math.floor(positionX / gridSize),
    };
};
/**
 * @return the top left corner of cell.
 */
const getLocationOfCell = (row, column, grid) => {
    return { x: column * grid.gridSize, y: row * grid.gridSize };
};
const calculateForces = (row, column, grid, magnetPoints, forceMultiplier) => {
    if (!magnetPoints || magnetPoints.length === 0) {
        throw 'Please, do not try to calc forces if there are no sinks or creators';
    }
    let effectOfMagnetPoint;
    const { x: locationX, y: locationY } = getLocationOfCell(row, column, grid);
    //Using modified gravity calculations as the base of how magnet points affect to the certain cells on the grid.
    //Equation for gravity: F = (Gravity constant * (m1)*(m2)) / distance^2, using 1 as mass of cell
    for (let magnet of magnetPoints) {
        if ((!locationX && locationX !== 0) ||
            (!locationY && locationY !== 0) ||
            !magnet.locationX ||
            !magnet.locationY) {
            throw "Please, do not do calculations if you don't have the numbers.";
        }
        const distance = (0,_mathUtils__WEBPACK_IMPORTED_MODULE_0__.distanceBetweenPoints)(locationX, locationY, magnet.locationX, magnet.locationY);
        const angle = (0,_mathUtils__WEBPACK_IMPORTED_MODULE_0__.angleOfLineBetweenPoints)(locationX, locationY, magnet.locationX, magnet.locationY);
        const strength = (forceMultiplier * magnet.strength) / distance;
        const strengthVector = (0,_entities_ArtVector__WEBPACK_IMPORTED_MODULE_1__.createVectorByAngle)(angle, strength);
        effectOfMagnetPoint = !!effectOfMagnetPoint
            ? effectOfMagnetPoint.copy().addMe(strengthVector)
            : strengthVector;
    }
    return {
        direction: effectOfMagnetPoint.direction,
        velocity: effectOfMagnetPoint.strength,
    };
};
//For testing
const dummyAngleCB = (row, column, grid) => {
    return { direction: Math.sin(column), velocity: grid.gridSize / 1.5 };
};
/**
 * @point
 * @targets
 * @returns true if point is on the same grid point as one of the targets
 */
const isOnSameGridPoint = (point, targets, gridSize) => {
    const agentGridPoint = getCurrentGridPosition(point.x, point.y, gridSize);
    for (let target of targets) {
        const targetGridPoint = getCurrentGridPosition(target.x, target.y, gridSize);
        if (agentGridPoint.row === targetGridPoint.row &&
            agentGridPoint.column === targetGridPoint.column) {
            return true;
        }
    }
    return false;
};


/***/ }),

/***/ "./src/utils/mathUtils.ts":
/*!********************************!*\
  !*** ./src/utils/mathUtils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOffset": () => (/* binding */ addOffset),
/* harmony export */   "angleOfLineBetweenPoints": () => (/* binding */ angleOfLineBetweenPoints),
/* harmony export */   "distanceBetweenPoints": () => (/* binding */ distanceBetweenPoints),
/* harmony export */   "getRandomFloat": () => (/* binding */ getRandomFloat),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "getRandomPosOrNegInt": () => (/* binding */ getRandomPosOrNegInt),
/* harmony export */   "getRandonBetweenValues": () => (/* binding */ getRandonBetweenValues),
/* harmony export */   "mapToBoundaries": () => (/* binding */ mapToBoundaries)
/* harmony export */ });
const angleOfLineBetweenPoints = (x1, y1, x2, y2) => {
    return Math.atan2(y2 - y1, x2 - x1);
};
const distanceBetweenPoints = (x1, y1, x2, y2) => {
    const xComponent = Math.pow(x2 - x1, 2);
    const yComponent = Math.pow(y2 - y1, 2);
    return Math.sqrt(xComponent + yComponent);
};
const addOffset = (num, maxOffset, maxNum) => {
    let offsetNum = num + getRandomPosOrNegInt(maxOffset);
    if (offsetNum < 0) {
        return 0;
    }
    else if (offsetNum >= maxNum) {
        return maxNum;
    }
    return offsetNum;
};
const getRandomPosOrNegInt = (max) => {
    return Math.random() < 0.5 ? getRandomInt(max) * -1 : getRandomInt(max);
};
const getRandonBetweenValues = (min, max) => {
    return Math.random() * (max - min) + min;
};
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};
const getRandomFloat = (max) => {
    return Math.random() * max;
};
const constrain = (n, low, high) => {
    return Math.max(Math.min(n, high), low);
};
//Copies implementation from p5.
const mapToBoundaries = (n, start1, stop1, start2, stop2) => {
    const withinBounds = true;
    const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (!withinBounds) {
        return newval;
    }
    if (start2 < stop2) {
        return constrain(newval, start2, stop2);
    }
    else {
        return constrain(newval, stop2, start2);
    }
};


/***/ }),

/***/ "./src/utils/parseUrl.ts":
/*!*******************************!*\
  !*** ./src/utils/parseUrl.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInitialConfigObj": () => (/* binding */ getInitialConfigObj),
/* harmony export */   "showAdvanced": () => (/* binding */ showAdvanced),
/* harmony export */   "unidecode": () => (/* binding */ unidecode),
/* harmony export */   "uniencode": () => (/* binding */ uniencode)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var msgpack_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! msgpack-lite */ "./node_modules/msgpack-lite/lib/browser.js");
/* harmony import */ var base65536__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! base65536 */ "./node_modules/base65536/src/index.js");



function uniencode(obj) {
    return (0,base65536__WEBPACK_IMPORTED_MODULE_2__.encode)(msgpack_lite__WEBPACK_IMPORTED_MODULE_1__.encode(obj));
}
function unidecode(str) {
    return msgpack_lite__WEBPACK_IMPORTED_MODULE_1__.decode((0,base65536__WEBPACK_IMPORTED_MODULE_2__.decode)(str));
}
const getUrlSettings = (settings) => {
    return unidecode(settings);
};
const showAdvanced = () => {
    let location = document.location.href;
    let params = (new URL(location)).searchParams;
    return params.get('advanced') === "true";
};
const getInitialConfigObj = () => {
    let location = document.location.href;
    let params = (new URL(location)).searchParams;
    let settings = params.get('settings');
    if (settings) {
        return getUrlSettings(settings);
    }
    else {
        return _config__WEBPACK_IMPORTED_MODULE_0__.config;
    }
};


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorByVelocity": () => (/* binding */ colorByVelocity)
/* harmony export */ });
/* harmony import */ var _mathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathUtils */ "./src/utils/mathUtils.ts");

///Test function for selecting color
/*const getRandomColor = (p5: p5, agent: AgentType) => {
  const index = Math.floor(p5.random(COLOR_PALETTE.length));
  const color = COLOR_PALETTE[index];
  agent.color = p5.color(color.r, color.g, color.b);
  return p5.color(color.r, color.g, color.b);
};

///Test function for selecting color
export const colorByXPos = (
  p5: p5,
  agent: AgentType,
  canvas: CanvasSettings
) => {
  let index = 0;

  if (
    agent.position.x > canvas.width * 0.3 &&
    agent.position.x < canvas.width * 0.6
  ) {
    index = 1;
  }
  if (agent.position.x > canvas.width * 0.6) {
    index = 2;
  }

  let color =
    COLOR_PALETTE.length > index
      ? rgbToP5Color(p5, COLOR_PALETTE[index])
      : getRandomColor(p5, agent);

  agent.color = color;

  return color;
};*/
///Test function for selecting color
/*export const colorNoise = (
  p5: p5,
  agent: AgentType,
  canvas: CanvasSettings
) => {
  const noise = p5.noise(0.0005 * agent.position.x, 0.0005 * agent.position.y);
  const color = rgbToP5Color(
    p5,
    COLOR_PALETTE[Math.floor(noise * COLOR_PALETTE.length)]
  );
  agent.color = color;
  return color;
};
*/
///Test function for selecting color
const colorByVelocity = (agent, canvas, settings) => {
    const acc = agent.acceleration.strength;
    const index = Math.floor((0,_mathUtils__WEBPACK_IMPORTED_MODULE_0__.mapToBoundaries)(acc, 0, settings.MAXIMUM_ACC, 0, settings.COLOR_PALETTE.length - 1)) %
        settings.COLOR_PALETTE.length;
    const color = settings.COLOR_PALETTE[index];
    color.opacity = color.opacity;
    if (acc !== 0) {
        agent.color = color;
    }
    return color;
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/base65536/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/base65536/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode)
/* harmony export */ });
/**
 * Routines for converting binary data into text data which can be sent safely
 * through 'Unicode-clean' text systems without information being lost. Analogous
 * to Base64 with a significantly larger character repertoire enabling the
 * encoding of 2.00 bytes per character (for comparison, Base64 manages 0.75 bytes
 * per character).
 */



// Z is a number, usually a uint16 but sometimes a uint8

const BITS_PER_CHAR = 16 // Base65536 is an 16-bit encoding
const BITS_PER_BYTE = 8

// Compressed representation of inclusive-exclusive ranges of characters used in this encoding.
const pairStrings = [
  '㐀䳿一黿ꄀꏿꔀꗿ𐘀𐛿𒀀𒋿𓀀𓏿𔐀𔗿𖠀𖧿𠀀𨗿',
  'ᔀᗿ'
]

// Decompression
const lookupE = {}
const lookupD = {}
pairStrings.forEach((pairString, r) => {
  const numZBits = BITS_PER_CHAR - BITS_PER_BYTE * r // 0 -> 16, 1 -> 8
  lookupE[numZBits] = {}
  let z2 = 0
  pairString.match(/../gu).forEach(pair => {
    const [first, last] = [...pair].map(x => x.codePointAt(0))
    for (let codePoint = first; codePoint <= last; codePoint++) {
      const chr = String.fromCodePoint(codePoint)

      // SPECIAL CASE: flip the bytes around, because Base65536 was constructed to take the bytes
      // in the wrong order originally
      const z = numZBits === BITS_PER_CHAR ? 256 * (z2 % 256) + (z2 >> 8) : z2
      lookupE[numZBits][z] = chr
      lookupD[chr] = [numZBits, z]
      z2++
    }
  })
})

const encode = uint8Array => {
  const length = uint8Array.length

  let str = ''
  let z = 0
  let numZBits = 0

  for (let i = 0; i < length; i++) {
    const uint8 = uint8Array[i]

    // Take most significant bit first
    for (let j = BITS_PER_BYTE - 1; j >= 0; j--) {
      const bit = (uint8 >> j) & 1

      z = (z << 1) + bit
      numZBits++

      if (numZBits === BITS_PER_CHAR) {
        str += lookupE[numZBits][z]
        z = 0
        numZBits = 0
      }
    }
  }

  if (numZBits !== 0) {
    // Final bits require special treatment.
    while (!(numZBits in lookupE)) {
      z = (z << 1) + 1
      numZBits++
    }

    str += lookupE[numZBits][z]
  }

  return str
}

const decode = str => {
  const length = str.length

  // This length is a guess. There's a chance we allocate one more byte here
  // than we actually need. But we can count and slice it off later
  const uint8Array = new Uint8Array(Math.floor(length * BITS_PER_CHAR / BITS_PER_BYTE))
  let numUint8s = 0
  let uint8 = 0
  let numUint8Bits = 0
  let shouldBeNoMoreChars = false

  for (const chr of str) {
    if (shouldBeNoMoreChars) {
      throw new Error('Secondary character found before end of input')
    }

    if (!(chr in lookupD)) {
      throw new Error(`Unrecognised Base65536 character: ${chr}`)
    }

    const [numZBits, z] = lookupD[chr]

    // Take most significant bit first
    for (let j = numZBits - 1; j >= 0; j--) {
      const bit = (z >> j) & 1

      uint8 = (uint8 << 1) + bit
      numUint8Bits++

      if (numUint8Bits === BITS_PER_BYTE) {
        uint8Array[numUint8s] = uint8
        numUint8s++
        uint8 = 0
        numUint8Bits = 0
      }
    }

    if (numZBits !== BITS_PER_CHAR) {
      shouldBeNoMoreChars = true
    }
  }

  // Final padding bits! Requires special consideration!
  // Remember how we always pad with 1s?
  // Note: there could be 0 such bits, check still works though
  if (uint8 !== ((1 << numUint8Bits) - 1)) {
    throw new Error('Padding mismatch')
  }

  return new Uint8Array(uint8Array.buffer, 0, numUint8s)
}




/***/ }),

/***/ "./node_modules/hex-rgb/index.js":
/*!***************************************!*\
  !*** ./node_modules/hex-rgb/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hexRgb)
/* harmony export */ });
const hexCharacters = 'a-f\\d';
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

function hexRgb(hex, options = {}) {
	if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
		throw new TypeError('Expected a valid hex string');
	}

	hex = hex.replace(/^#/, '');
	let alphaFromHex = 1;

	if (hex.length === 8) {
		alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
		hex = hex.slice(0, 6);
	}

	if (hex.length === 4) {
		alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
		hex = hex.slice(0, 3);
	}

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	const number = Number.parseInt(hex, 16);
	const red = number >> 16;
	const green = (number >> 8) & 255;
	const blue = number & 255;
	const alpha = typeof options.alpha === 'number' ? options.alpha : alphaFromHex;

	if (options.format === 'array') {
		return [red, green, blue, alpha];
	}

	if (options.format === 'css') {
		const alphaString = alpha === 1 ? '' : ` / ${Number((alpha * 100).toFixed(2))}%`;
		return `rgb(${red} ${green} ${blue}${alphaString})`;
	}

	return {red, green, blue, alpha};
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _p5_sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p5/sketch */ "./src/p5/sketch.ts");
/* harmony import */ var _stateHandling_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateHandling/storeCreators/drawingStore */ "./src/stateHandling/storeCreators/drawingStore.ts");
/* harmony import */ var _userInput_configInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInput/configInput */ "./src/userInput/configInput.ts");
/* harmony import */ var _userInput_controlButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userInput/controlButtons */ "./src/userInput/controlButtons.tsx");
/* harmony import */ var _stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateHandling/storeCreators/settingsStore */ "./src/stateHandling/storeCreators/settingsStore.ts");





const settingsStore = (0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_4__.createSettingsStore)();
const drawingStore = (0,_stateHandling_storeCreators_drawingStore__WEBPACK_IMPORTED_MODULE_1__.createDrawingsStore)();
if ((0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_4__.getInitialSettings)().SHOW_CONTROLS) {
    (0,_userInput_configInput__WEBPACK_IMPORTED_MODULE_2__.addConfigInputs)((0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_4__.getInitialSettings)());
}
if ((0,_stateHandling_storeCreators_settingsStore__WEBPACK_IMPORTED_MODULE_4__.getInitialSettings)().SHOW_BUTTONS) {
    (0,_userInput_controlButtons__WEBPACK_IMPORTED_MODULE_3__["default"])();
}
(0,_p5_sketch__WEBPACK_IMPORTED_MODULE_0__.render)();
//TODO: these are here just to make sure all listeners have values. Remove this hack. 
settingsStore.dispatch({ type: "START_RENDER" });
drawingStore.dispatch({ type: "START_RENDER" });

})();

/******/ })()
;
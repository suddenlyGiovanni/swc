function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
function _get(target, property, receiver) {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (base) {
            var desc = Object.getOwnPropertyDescriptor(base, property);
            return desc.get ? desc.get.call(receiver) : desc.value;
        }
    }, _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : (function(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    })(self);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    for(; !Object.prototype.hasOwnProperty.call(object, property) && null !== (object = _getPrototypeOf(object)););
    return object;
}
var _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
}, A = function() {
    "use strict";
    function A() {
        _classCallCheck(this, A);
    }
    return _createClass(A, [
        {
            key: "foo",
            value: function() {
                return 1;
            }
        }
    ]), A;
}(), B = function(A) {
    "use strict";
    function B() {
        return _classCallCheck(this, B), _possibleConstructorReturn(this, _getPrototypeOf(B).apply(this, arguments));
    }
    return _inherits(B, A), _createClass(B, [
        {
            key: "bar",
            value: function() {
                _get(_getPrototypeOf(B.prototype), "foo", this).call(this);
            }
        },
        {
            key: "baz",
            value: function() {
                return this.foo;
            }
        }
    ]), B;
}(A), C = function(B) {
    "use strict";
    function C() {
        return _classCallCheck(this, C), _possibleConstructorReturn(this, _getPrototypeOf(C).apply(this, arguments));
    }
    return _inherits(C, B), _createClass(C, [
        {
            key: "foo",
            value: function() {
                return 2;
            }
        },
        {
            key: "qux",
            value: function() {
                return _get(_getPrototypeOf(C.prototype), "foo", this).call(this) || _get(_getPrototypeOf(C.prototype), "foo", this);
            }
        },
        {
            key: "norf",
            value: function() {
                return _get(_getPrototypeOf(C.prototype), "bar", this).call(this);
            }
        }
    ]), C;
}(B), AA = function() {
    "use strict";
    function AA() {
        _classCallCheck(this, AA);
    }
    return _createClass(AA, [
        {
            key: "foo",
            value: function() {
                return 1;
            }
        },
        {
            key: "bar",
            value: function() {
                return this.foo();
            }
        }
    ]), AA;
}(), BB = function(AA) {
    "use strict";
    function BB() {
        return _classCallCheck(this, BB), _possibleConstructorReturn(this, _getPrototypeOf(BB).apply(this, arguments));
    }
    return _inherits(BB, AA), BB;
}(AA);
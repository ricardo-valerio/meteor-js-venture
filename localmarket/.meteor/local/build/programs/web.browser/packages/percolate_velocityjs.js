//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/percolate:velocityjs/velocity.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! VelocityJS.org (1.2.1). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */                // 1
                                                                                                                       // 2
/*************************                                                                                            // 3
   Velocity jQuery Shim                                                                                               // 4
*************************/                                                                                            // 5
                                                                                                                      // 6
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
                                                                                                                      // 8
/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */                              // 11
                                                                                                                      // 12
;(function (window) {                                                                                                 // 13
    /***************                                                                                                  // 14
         Setup                                                                                                        // 15
    ***************/                                                                                                  // 16
                                                                                                                      // 17
    /* If jQuery is already loaded, there's no point in loading this shim. */                                         // 18
    if (window.jQuery) {                                                                                              // 19
        return;                                                                                                       // 20
    }                                                                                                                 // 21
                                                                                                                      // 22
    /* jQuery base. */                                                                                                // 23
    var $ = function (selector, context) {                                                                            // 24
        return new $.fn.init(selector, context);                                                                      // 25
    };                                                                                                                // 26
                                                                                                                      // 27
    /********************                                                                                             // 28
       Private Methods                                                                                                // 29
    ********************/                                                                                             // 30
                                                                                                                      // 31
    /* jQuery */                                                                                                      // 32
    $.isWindow = function (obj) {                                                                                     // 33
        /* jshint eqeqeq: false */                                                                                    // 34
        return obj != null && obj == obj.window;                                                                      // 35
    };                                                                                                                // 36
                                                                                                                      // 37
    /* jQuery */                                                                                                      // 38
    $.type = function (obj) {                                                                                         // 39
        if (obj == null) {                                                                                            // 40
            return obj + "";                                                                                          // 41
        }                                                                                                             // 42
                                                                                                                      // 43
        return typeof obj === "object" || typeof obj === "function" ?                                                 // 44
            class2type[toString.call(obj)] || "object" :                                                              // 45
            typeof obj;                                                                                               // 46
    };                                                                                                                // 47
                                                                                                                      // 48
    /* jQuery */                                                                                                      // 49
    $.isArray = Array.isArray || function (obj) {                                                                     // 50
        return $.type(obj) === "array";                                                                               // 51
    };                                                                                                                // 52
                                                                                                                      // 53
    /* jQuery */                                                                                                      // 54
    function isArraylike (obj) {                                                                                      // 55
        var length = obj.length,                                                                                      // 56
            type = $.type(obj);                                                                                       // 57
                                                                                                                      // 58
        if (type === "function" || $.isWindow(obj)) {                                                                 // 59
            return false;                                                                                             // 60
        }                                                                                                             // 61
                                                                                                                      // 62
        if (obj.nodeType === 1 && length) {                                                                           // 63
            return true;                                                                                              // 64
        }                                                                                                             // 65
                                                                                                                      // 66
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;   // 67
    }                                                                                                                 // 68
                                                                                                                      // 69
    /***************                                                                                                  // 70
       $ Methods                                                                                                      // 71
    ***************/                                                                                                  // 72
                                                                                                                      // 73
    /* jQuery: Support removed for IE<9. */                                                                           // 74
    $.isPlainObject = function (obj) {                                                                                // 75
        var key;                                                                                                      // 76
                                                                                                                      // 77
        if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {                                    // 78
            return false;                                                                                             // 79
        }                                                                                                             // 80
                                                                                                                      // 81
        try {                                                                                                         // 82
            if (obj.constructor &&                                                                                    // 83
                !hasOwn.call(obj, "constructor") &&                                                                   // 84
                !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {                                           // 85
                return false;                                                                                         // 86
            }                                                                                                         // 87
        } catch (e) {                                                                                                 // 88
            return false;                                                                                             // 89
        }                                                                                                             // 90
                                                                                                                      // 91
        for (key in obj) {}                                                                                           // 92
                                                                                                                      // 93
        return key === undefined || hasOwn.call(obj, key);                                                            // 94
    };                                                                                                                // 95
                                                                                                                      // 96
    /* jQuery */                                                                                                      // 97
    $.each = function(obj, callback, args) {                                                                          // 98
        var value,                                                                                                    // 99
            i = 0,                                                                                                    // 100
            length = obj.length,                                                                                      // 101
            isArray = isArraylike(obj);                                                                               // 102
                                                                                                                      // 103
        if (args) {                                                                                                   // 104
            if (isArray) {                                                                                            // 105
                for (; i < length; i++) {                                                                             // 106
                    value = callback.apply(obj[i], args);                                                             // 107
                                                                                                                      // 108
                    if (value === false) {                                                                            // 109
                        break;                                                                                        // 110
                    }                                                                                                 // 111
                }                                                                                                     // 112
            } else {                                                                                                  // 113
                for (i in obj) {                                                                                      // 114
                    value = callback.apply(obj[i], args);                                                             // 115
                                                                                                                      // 116
                    if (value === false) {                                                                            // 117
                        break;                                                                                        // 118
                    }                                                                                                 // 119
                }                                                                                                     // 120
            }                                                                                                         // 121
                                                                                                                      // 122
        } else {                                                                                                      // 123
            if (isArray) {                                                                                            // 124
                for (; i < length; i++) {                                                                             // 125
                    value = callback.call(obj[i], i, obj[i]);                                                         // 126
                                                                                                                      // 127
                    if (value === false) {                                                                            // 128
                        break;                                                                                        // 129
                    }                                                                                                 // 130
                }                                                                                                     // 131
            } else {                                                                                                  // 132
                for (i in obj) {                                                                                      // 133
                    value = callback.call(obj[i], i, obj[i]);                                                         // 134
                                                                                                                      // 135
                    if (value === false) {                                                                            // 136
                        break;                                                                                        // 137
                    }                                                                                                 // 138
                }                                                                                                     // 139
            }                                                                                                         // 140
        }                                                                                                             // 141
                                                                                                                      // 142
        return obj;                                                                                                   // 143
    };                                                                                                                // 144
                                                                                                                      // 145
    /* Custom */                                                                                                      // 146
    $.data = function (node, key, value) {                                                                            // 147
        /* $.getData() */                                                                                             // 148
        if (value === undefined) {                                                                                    // 149
            var id = node[$.expando],                                                                                 // 150
                store = id && cache[id];                                                                              // 151
                                                                                                                      // 152
            if (key === undefined) {                                                                                  // 153
                return store;                                                                                         // 154
            } else if (store) {                                                                                       // 155
                if (key in store) {                                                                                   // 156
                    return store[key];                                                                                // 157
                }                                                                                                     // 158
            }                                                                                                         // 159
        /* $.setData() */                                                                                             // 160
        } else if (key !== undefined) {                                                                               // 161
            var id = node[$.expando] || (node[$.expando] = ++$.uuid);                                                 // 162
                                                                                                                      // 163
            cache[id] = cache[id] || {};                                                                              // 164
            cache[id][key] = value;                                                                                   // 165
                                                                                                                      // 166
            return value;                                                                                             // 167
        }                                                                                                             // 168
    };                                                                                                                // 169
                                                                                                                      // 170
    /* Custom */                                                                                                      // 171
    $.removeData = function (node, keys) {                                                                            // 172
        var id = node[$.expando],                                                                                     // 173
            store = id && cache[id];                                                                                  // 174
                                                                                                                      // 175
        if (store) {                                                                                                  // 176
            $.each(keys, function(_, key) {                                                                           // 177
                delete store[key];                                                                                    // 178
            });                                                                                                       // 179
        }                                                                                                             // 180
    };                                                                                                                // 181
                                                                                                                      // 182
    /* jQuery */                                                                                                      // 183
    $.extend = function () {                                                                                          // 184
        var src, copyIsArray, copy, name, options, clone,                                                             // 185
            target = arguments[0] || {},                                                                              // 186
            i = 1,                                                                                                    // 187
            length = arguments.length,                                                                                // 188
            deep = false;                                                                                             // 189
                                                                                                                      // 190
        if (typeof target === "boolean") {                                                                            // 191
            deep = target;                                                                                            // 192
                                                                                                                      // 193
            target = arguments[i] || {};                                                                              // 194
            i++;                                                                                                      // 195
        }                                                                                                             // 196
                                                                                                                      // 197
        if (typeof target !== "object" && $.type(target) !== "function") {                                            // 198
            target = {};                                                                                              // 199
        }                                                                                                             // 200
                                                                                                                      // 201
        if (i === length) {                                                                                           // 202
            target = this;                                                                                            // 203
            i--;                                                                                                      // 204
        }                                                                                                             // 205
                                                                                                                      // 206
        for (; i < length; i++) {                                                                                     // 207
            if ((options = arguments[i]) != null) {                                                                   // 208
                for (name in options) {                                                                               // 209
                    src = target[name];                                                                               // 210
                    copy = options[name];                                                                             // 211
                                                                                                                      // 212
                    if (target === copy) {                                                                            // 213
                        continue;                                                                                     // 214
                    }                                                                                                 // 215
                                                                                                                      // 216
                    if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {                 // 217
                        if (copyIsArray) {                                                                            // 218
                            copyIsArray = false;                                                                      // 219
                            clone = src && $.isArray(src) ? src : [];                                                 // 220
                                                                                                                      // 221
                        } else {                                                                                      // 222
                            clone = src && $.isPlainObject(src) ? src : {};                                           // 223
                        }                                                                                             // 224
                                                                                                                      // 225
                        target[name] = $.extend(deep, clone, copy);                                                   // 226
                                                                                                                      // 227
                    } else if (copy !== undefined) {                                                                  // 228
                        target[name] = copy;                                                                          // 229
                    }                                                                                                 // 230
                }                                                                                                     // 231
            }                                                                                                         // 232
        }                                                                                                             // 233
                                                                                                                      // 234
        return target;                                                                                                // 235
    };                                                                                                                // 236
                                                                                                                      // 237
    /* jQuery 1.4.3 */                                                                                                // 238
    $.queue = function (elem, type, data) {                                                                           // 239
        function $makeArray (arr, results) {                                                                          // 240
            var ret = results || [];                                                                                  // 241
                                                                                                                      // 242
            if (arr != null) {                                                                                        // 243
                if (isArraylike(Object(arr))) {                                                                       // 244
                    /* $.merge */                                                                                     // 245
                    (function(first, second) {                                                                        // 246
                        var len = +second.length,                                                                     // 247
                            j = 0,                                                                                    // 248
                            i = first.length;                                                                         // 249
                                                                                                                      // 250
                        while (j < len) {                                                                             // 251
                            first[i++] = second[j++];                                                                 // 252
                        }                                                                                             // 253
                                                                                                                      // 254
                        if (len !== len) {                                                                            // 255
                            while (second[j] !== undefined) {                                                         // 256
                                first[i++] = second[j++];                                                             // 257
                            }                                                                                         // 258
                        }                                                                                             // 259
                                                                                                                      // 260
                        first.length = i;                                                                             // 261
                                                                                                                      // 262
                        return first;                                                                                 // 263
                    })(ret, typeof arr === "string" ? [arr] : arr);                                                   // 264
                } else {                                                                                              // 265
                    [].push.call(ret, arr);                                                                           // 266
                }                                                                                                     // 267
            }                                                                                                         // 268
                                                                                                                      // 269
            return ret;                                                                                               // 270
        }                                                                                                             // 271
                                                                                                                      // 272
        if (!elem) {                                                                                                  // 273
            return;                                                                                                   // 274
        }                                                                                                             // 275
                                                                                                                      // 276
        type = (type || "fx") + "queue";                                                                              // 277
                                                                                                                      // 278
        var q = $.data(elem, type);                                                                                   // 279
                                                                                                                      // 280
        if (!data) {                                                                                                  // 281
            return q || [];                                                                                           // 282
        }                                                                                                             // 283
                                                                                                                      // 284
        if (!q || $.isArray(data)) {                                                                                  // 285
            q = $.data(elem, type, $makeArray(data));                                                                 // 286
        } else {                                                                                                      // 287
            q.push(data);                                                                                             // 288
        }                                                                                                             // 289
                                                                                                                      // 290
        return q;                                                                                                     // 291
    };                                                                                                                // 292
                                                                                                                      // 293
    /* jQuery 1.4.3 */                                                                                                // 294
    $.dequeue = function (elems, type) {                                                                              // 295
        /* Custom: Embed element iteration. */                                                                        // 296
        $.each(elems.nodeType ? [ elems ] : elems, function(i, elem) {                                                // 297
            type = type || "fx";                                                                                      // 298
                                                                                                                      // 299
            var queue = $.queue(elem, type),                                                                          // 300
                fn = queue.shift();                                                                                   // 301
                                                                                                                      // 302
            if (fn === "inprogress") {                                                                                // 303
                fn = queue.shift();                                                                                   // 304
            }                                                                                                         // 305
                                                                                                                      // 306
            if (fn) {                                                                                                 // 307
                if (type === "fx") {                                                                                  // 308
                    queue.unshift("inprogress");                                                                      // 309
                }                                                                                                     // 310
                                                                                                                      // 311
                fn.call(elem, function() {                                                                            // 312
                    $.dequeue(elem, type);                                                                            // 313
                });                                                                                                   // 314
            }                                                                                                         // 315
        });                                                                                                           // 316
    };                                                                                                                // 317
                                                                                                                      // 318
    /******************                                                                                               // 319
       $.fn Methods                                                                                                   // 320
    ******************/                                                                                               // 321
                                                                                                                      // 322
    /* jQuery */                                                                                                      // 323
    $.fn = $.prototype = {                                                                                            // 324
        init: function (selector) {                                                                                   // 325
            /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
            if (selector.nodeType) {                                                                                  // 327
                this[0] = selector;                                                                                   // 328
                                                                                                                      // 329
                return this;                                                                                          // 330
            } else {                                                                                                  // 331
                throw new Error("Not a DOM node.");                                                                   // 332
            }                                                                                                         // 333
        },                                                                                                            // 334
                                                                                                                      // 335
        offset: function () {                                                                                         // 336
            /* jQuery altered code: Dropped disconnected DOM node checking. */                                        // 337
            var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };          // 338
                                                                                                                      // 339
            return {                                                                                                  // 340
                top: box.top + (window.pageYOffset || document.scrollTop  || 0)  - (document.clientTop  || 0),        // 341
                left: box.left + (window.pageXOffset || document.scrollLeft  || 0) - (document.clientLeft || 0)       // 342
            };                                                                                                        // 343
        },                                                                                                            // 344
                                                                                                                      // 345
        position: function () {                                                                                       // 346
            /* jQuery */                                                                                              // 347
            function offsetParent() {                                                                                 // 348
                var offsetParent = this.offsetParent || document;                                                     // 349
                                                                                                                      // 350
                while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
                    offsetParent = offsetParent.offsetParent;                                                         // 352
                }                                                                                                     // 353
                                                                                                                      // 354
                return offsetParent || document;                                                                      // 355
            }                                                                                                         // 356
                                                                                                                      // 357
            /* Zepto */                                                                                               // 358
            var elem = this[0],                                                                                       // 359
                offsetParent = offsetParent.apply(elem),                                                              // 360
                offset = this.offset(),                                                                               // 361
                parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset()
                                                                                                                      // 363
            offset.top -= parseFloat(elem.style.marginTop) || 0;                                                      // 364
            offset.left -= parseFloat(elem.style.marginLeft) || 0;                                                    // 365
                                                                                                                      // 366
            if (offsetParent.style) {                                                                                 // 367
                parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0                                // 368
                parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0                              // 369
            }                                                                                                         // 370
                                                                                                                      // 371
            return {                                                                                                  // 372
                top: offset.top - parentOffset.top,                                                                   // 373
                left: offset.left - parentOffset.left                                                                 // 374
            };                                                                                                        // 375
        }                                                                                                             // 376
    };                                                                                                                // 377
                                                                                                                      // 378
    /**********************                                                                                           // 379
       Private Variables                                                                                              // 380
    **********************/                                                                                           // 381
                                                                                                                      // 382
    /* For $.data() */                                                                                                // 383
    var cache = {};                                                                                                   // 384
    $.expando = "velocity" + (new Date().getTime());                                                                  // 385
    $.uuid = 0;                                                                                                       // 386
                                                                                                                      // 387
    /* For $.queue() */                                                                                               // 388
    var class2type = {},                                                                                              // 389
        hasOwn = class2type.hasOwnProperty,                                                                           // 390
        toString = class2type.toString;                                                                               // 391
                                                                                                                      // 392
    var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");                           // 393
    for (var i = 0; i < types.length; i++) {                                                                          // 394
        class2type["[object " + types[i] + "]"] = types[i].toLowerCase();                                             // 395
    }                                                                                                                 // 396
                                                                                                                      // 397
    /* Makes $(node) possible, without having to call init. */                                                        // 398
    $.fn.init.prototype = $.fn;                                                                                       // 399
                                                                                                                      // 400
    /* Globalize Velocity onto the window, and assign its Utilities property. */                                      // 401
    window.Velocity = { Utilities: $ };                                                                               // 402
})(window);                                                                                                            // 403
                                                                                                                       // 404
/******************                                                                                                    // 405
    Velocity.js                                                                                                        // 406
******************/                                                                                                    // 407
                                                                                                                       // 408
;(function (factory) {                                                                                                 // 409
    /* CommonJS module. */                                                                                             // 410
    if (typeof module === "object" && typeof module.exports === "object") {                                            // 411
        module.exports = factory();                                                                                    // 412
    /* AMD module. */                                                                                                  // 413
    } else if (typeof define === "function" && define.amd) {                                                           // 414
        define(factory);                                                                                               // 415
    /* Browser globals. */                                                                                             // 416
    } else {                                                                                                           // 417
        factory();                                                                                                     // 418
    }                                                                                                                  // 419
}(function() {                                                                                                         // 420
return function (global, window, document, undefined) {                                                                // 421
                                                                                                                       // 422
    /***************                                                                                                   // 423
        Summary                                                                                                        // 424
    ***************/                                                                                                   // 425
                                                                                                                       // 426
    /*                                                                                                                 // 427
    - CSS: CSS stack that works independently from the rest of Velocity.                                               // 428
    - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
      - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
      - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
                  Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
      - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.     // 433
    - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.                    // 434
    - completeCall(): Handles the cleanup process for each Velocity call.                                              // 435
    */                                                                                                                 // 436
                                                                                                                       // 437
    /*********************                                                                                             // 438
       Helper Functions                                                                                                // 439
    *********************/                                                                                             // 440
                                                                                                                       // 441
    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */                                            // 442
    var IE = (function() {                                                                                             // 443
        if (document.documentMode) {                                                                                   // 444
            return document.documentMode;                                                                              // 445
        } else {                                                                                                       // 446
            for (var i = 7; i > 4; i--) {                                                                              // 447
                var div = document.createElement("div");                                                               // 448
                                                                                                                       // 449
                div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";                                     // 450
                                                                                                                       // 451
                if (div.getElementsByTagName("span").length) {                                                         // 452
                    div = null;                                                                                        // 453
                                                                                                                       // 454
                    return i;                                                                                          // 455
                }                                                                                                      // 456
            }                                                                                                          // 457
        }                                                                                                              // 458
                                                                                                                       // 459
        return undefined;                                                                                              // 460
    })();                                                                                                              // 461
                                                                                                                       // 462
    /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */                                                // 463
    var rAFShim = (function() {                                                                                        // 464
        var timeLast = 0;                                                                                              // 465
                                                                                                                       // 466
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {           // 467
            var timeCurrent = (new Date()).getTime(),                                                                  // 468
                timeDelta;                                                                                             // 469
                                                                                                                       // 470
            /* Dynamically set delay on a per-tick basis to match 60fps. */                                            // 471
            /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */                     // 472
            timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));                                                    // 473
            timeLast = timeCurrent + timeDelta;                                                                        // 474
                                                                                                                       // 475
            return setTimeout(function() { callback(timeCurrent + timeDelta); }, timeDelta);                           // 476
        };                                                                                                             // 477
    })();                                                                                                              // 478
                                                                                                                       // 479
    /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */   // 480
    function compactSparseArray (array) {                                                                              // 481
        var index = -1,                                                                                                // 482
            length = array ? array.length : 0,                                                                         // 483
            result = [];                                                                                               // 484
                                                                                                                       // 485
        while (++index < length) {                                                                                     // 486
            var value = array[index];                                                                                  // 487
                                                                                                                       // 488
            if (value) {                                                                                               // 489
                result.push(value);                                                                                    // 490
            }                                                                                                          // 491
        }                                                                                                              // 492
                                                                                                                       // 493
        return result;                                                                                                 // 494
    }                                                                                                                  // 495
                                                                                                                       // 496
    function sanitizeElements (elements) {                                                                             // 497
        /* Unwrap jQuery/Zepto objects. */                                                                             // 498
        if (Type.isWrapped(elements)) {                                                                                // 499
            elements = [].slice.call(elements);                                                                        // 500
        /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
        } else if (Type.isNode(elements)) {                                                                            // 502
            elements = [ elements ];                                                                                   // 503
        }                                                                                                              // 504
                                                                                                                       // 505
        return elements;                                                                                               // 506
    }                                                                                                                  // 507
                                                                                                                       // 508
    var Type = {                                                                                                       // 509
        isString: function (variable) {                                                                                // 510
            return (typeof variable === "string");                                                                     // 511
        },                                                                                                             // 512
        isArray: Array.isArray || function (variable) {                                                                // 513
            return Object.prototype.toString.call(variable) === "[object Array]";                                      // 514
        },                                                                                                             // 515
        isFunction: function (variable) {                                                                              // 516
            return Object.prototype.toString.call(variable) === "[object Function]";                                   // 517
        },                                                                                                             // 518
        isNode: function (variable) {                                                                                  // 519
            return variable && variable.nodeType;                                                                      // 520
        },                                                                                                             // 521
        /* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */                 // 522
        isNodeList: function (variable) {                                                                              // 523
            return typeof variable === "object" &&                                                                     // 524
                /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&      // 525
                variable.length !== undefined &&                                                                       // 526
                (variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));              // 527
        },                                                                                                             // 528
        /* Determine if variable is a wrapped jQuery or Zepto element. */                                              // 529
        isWrapped: function (variable) {                                                                               // 530
            return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));                // 531
        },                                                                                                             // 532
        isSVG: function (variable) {                                                                                   // 533
            return window.SVGElement && (variable instanceof window.SVGElement);                                       // 534
        },                                                                                                             // 535
        isEmptyObject: function (variable) {                                                                           // 536
            for (var name in variable) {                                                                               // 537
                return false;                                                                                          // 538
            }                                                                                                          // 539
                                                                                                                       // 540
            return true;                                                                                               // 541
        }                                                                                                              // 542
    };                                                                                                                 // 543
                                                                                                                       // 544
    /*****************                                                                                                 // 545
       Dependencies                                                                                                    // 546
    *****************/                                                                                                 // 547
                                                                                                                       // 548
    var $,                                                                                                             // 549
        isJQuery = false;                                                                                              // 550
                                                                                                                       // 551
    if (global.fn && global.fn.jquery) {                                                                               // 552
        $ = global;                                                                                                    // 553
        isJQuery = true;                                                                                               // 554
    } else {                                                                                                           // 555
        $ = window.Velocity.Utilities;                                                                                 // 556
    }                                                                                                                  // 557
                                                                                                                       // 558
    if (IE <= 8 && !isJQuery) {                                                                                        // 559
        throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");                       // 560
    } else if (IE <= 7) {                                                                                              // 561
        /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */                                      // 562
        jQuery.fn.velocity = jQuery.fn.animate;                                                                        // 563
                                                                                                                       // 564
        /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */                                      // 565
        return;                                                                                                        // 566
    }                                                                                                                  // 567
                                                                                                                       // 568
    /*****************                                                                                                 // 569
        Constants                                                                                                      // 570
    *****************/                                                                                                 // 571
                                                                                                                       // 572
    var DURATION_DEFAULT = 400,                                                                                        // 573
        EASING_DEFAULT = "swing";                                                                                      // 574
                                                                                                                       // 575
    /*************                                                                                                     // 576
        State                                                                                                          // 577
    *************/                                                                                                     // 578
                                                                                                                       // 579
    var Velocity = {                                                                                                   // 580
        /* Container for page-wide Velocity state data. */                                                             // 581
        State: {                                                                                                       // 582
            /* Detect mobile devices to determine if mobileHA should be turned on. */                                  // 583
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),      // 584
            /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */ // 585
            isAndroid: /Android/i.test(navigator.userAgent),                                                           // 586
            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),                                           // 587
            isChrome: window.chrome,                                                                                   // 588
            isFirefox: /Firefox/i.test(navigator.userAgent),                                                           // 589
            /* Create a cached element for re-use when checking for CSS property prefixes. */                          // 590
            prefixElement: document.createElement("div"),                                                              // 591
            /* Cache every prefix match to avoid repeating lookups. */                                                 // 592
            prefixMatches: {},                                                                                         // 593
            /* Cache the anchor used for animating window scrolling. */                                                // 594
            scrollAnchor: null,                                                                                        // 595
            /* Cache the browser-specific property names associated with the scroll anchor. */                         // 596
            scrollPropertyLeft: null,                                                                                  // 597
            scrollPropertyTop: null,                                                                                   // 598
            /* Keep track of whether our RAF tick is running. */                                                       // 599
            isTicking: false,                                                                                          // 600
            /* Container for every in-progress call to Velocity. */                                                    // 601
            calls: []                                                                                                  // 602
        },                                                                                                             // 603
        /* Velocity's custom CSS stack. Made global for unit testing. */                                               // 604
        CSS: { /* Defined below. */ },                                                                                 // 605
        /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */  // 606
        Utilities: $,                                                                                                  // 607
        /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
        Redirects: { /* Manually registered by the user. */ },                                                         // 609
        Easings: { /* Defined below. */ },                                                                             // 610
        /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */     // 611
        Promise: window.Promise,                                                                                       // 612
        /* Velocity option defaults, which can be overriden by the user. */                                            // 613
        defaults: {                                                                                                    // 614
            queue: "",                                                                                                 // 615
            duration: DURATION_DEFAULT,                                                                                // 616
            easing: EASING_DEFAULT,                                                                                    // 617
            begin: undefined,                                                                                          // 618
            complete: undefined,                                                                                       // 619
            progress: undefined,                                                                                       // 620
            display: undefined,                                                                                        // 621
            visibility: undefined,                                                                                     // 622
            loop: false,                                                                                               // 623
            delay: false,                                                                                              // 624
            mobileHA: true,                                                                                            // 625
            /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
            _cacheValues: true                                                                                         // 627
        },                                                                                                             // 628
        /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
        init: function (element) {                                                                                     // 630
            $.data(element, "velocity", {                                                                              // 631
                /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
                isSVG: Type.isSVG(element),                                                                            // 633
                /* Keep track of whether the element is currently being animated by Velocity.                          // 634
                   This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
                isAnimating: false,                                                                                    // 636
                /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
                computedStyle: null,                                                                                   // 638
                /* Tween data is cached for each animation on the element so that data can be passed across calls --   // 639
                   in particular, end values are used as subsequent start values in consecutive Velocity calls. */     // 640
                tweensContainer: null,                                                                                 // 641
                /* The full root property values of each CSS hook being animated on this element are cached so that:   // 642
                   1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
                   2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
                rootPropertyValueCache: {},                                                                            // 645
                /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */     // 646
                transformCache: {}                                                                                     // 647
            });                                                                                                        // 648
        },                                                                                                             // 649
        /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */               // 650
        hook: null, /* Defined below. */                                                                               // 651
        /* Velocity-wide animation time remapping for testing purposes. */                                             // 652
        mock: false,                                                                                                   // 653
        version: { major: 1, minor: 2, patch: 1 },                                                                     // 654
        /* Set to 1 or 2 (most verbose) to output debug info to console. */                                            // 655
        debug: false                                                                                                   // 656
    };                                                                                                                 // 657
                                                                                                                       // 658
    /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
    if (window.pageYOffset !== undefined) {                                                                            // 660
        Velocity.State.scrollAnchor = window;                                                                          // 661
        Velocity.State.scrollPropertyLeft = "pageXOffset";                                                             // 662
        Velocity.State.scrollPropertyTop = "pageYOffset";                                                              // 663
    } else {                                                                                                           // 664
        Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;           // 665
        Velocity.State.scrollPropertyLeft = "scrollLeft";                                                              // 666
        Velocity.State.scrollPropertyTop = "scrollTop";                                                                // 667
    }                                                                                                                  // 668
                                                                                                                       // 669
    /* Shorthand alias for jQuery's $.data() utility. */                                                               // 670
    function Data (element) {                                                                                          // 671
        /* Hardcode a reference to the plugin name. */                                                                 // 672
        var response = $.data(element, "velocity");                                                                    // 673
                                                                                                                       // 674
        /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */     // 675
        return response === null ? undefined : response;                                                               // 676
    };                                                                                                                 // 677
                                                                                                                       // 678
    /**************                                                                                                    // 679
        Easing                                                                                                         // 680
    **************/                                                                                                    // 681
                                                                                                                       // 682
    /* Step easing generator. */                                                                                       // 683
    function generateStep (steps) {                                                                                    // 684
        return function (p) {                                                                                          // 685
            return Math.round(p * steps) * (1 / steps);                                                                // 686
        };                                                                                                             // 687
    }                                                                                                                  // 688
                                                                                                                       // 689
    /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    function generateBezier (mX1, mY1, mX2, mY2) {                                                                     // 691
        var NEWTON_ITERATIONS = 4,                                                                                     // 692
            NEWTON_MIN_SLOPE = 0.001,                                                                                  // 693
            SUBDIVISION_PRECISION = 0.0000001,                                                                         // 694
            SUBDIVISION_MAX_ITERATIONS = 10,                                                                           // 695
            kSplineTableSize = 11,                                                                                     // 696
            kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),                                                          // 697
            float32ArraySupported = "Float32Array" in window;                                                          // 698
                                                                                                                       // 699
        /* Must contain four arguments. */                                                                             // 700
        if (arguments.length !== 4) {                                                                                  // 701
            return false;                                                                                              // 702
        }                                                                                                              // 703
                                                                                                                       // 704
        /* Arguments must be numbers. */                                                                               // 705
        for (var i = 0; i < 4; ++i) {                                                                                  // 706
            if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {                  // 707
                return false;                                                                                          // 708
            }                                                                                                          // 709
        }                                                                                                              // 710
                                                                                                                       // 711
        /* X values must be in the [0, 1] range. */                                                                    // 712
        mX1 = Math.min(mX1, 1);                                                                                        // 713
        mX2 = Math.min(mX2, 1);                                                                                        // 714
        mX1 = Math.max(mX1, 0);                                                                                        // 715
        mX2 = Math.max(mX2, 0);                                                                                        // 716
                                                                                                                       // 717
        var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);  // 718
                                                                                                                       // 719
        function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }                                                  // 720
        function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }                                                        // 721
        function C (aA1)      { return 3.0 * aA1; }                                                                    // 722
                                                                                                                       // 723
        function calcBezier (aT, aA1, aA2) {                                                                           // 724
            return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;                                                    // 725
        }                                                                                                              // 726
                                                                                                                       // 727
        function getSlope (aT, aA1, aA2) {                                                                             // 728
            return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);                                          // 729
        }                                                                                                              // 730
                                                                                                                       // 731
        function newtonRaphsonIterate (aX, aGuessT) {                                                                  // 732
            for (var i = 0; i < NEWTON_ITERATIONS; ++i) {                                                              // 733
                var currentSlope = getSlope(aGuessT, mX1, mX2);                                                        // 734
                                                                                                                       // 735
                if (currentSlope === 0.0) return aGuessT;                                                              // 736
                                                                                                                       // 737
                var currentX = calcBezier(aGuessT, mX1, mX2) - aX;                                                     // 738
                aGuessT -= currentX / currentSlope;                                                                    // 739
            }                                                                                                          // 740
                                                                                                                       // 741
            return aGuessT;                                                                                            // 742
        }                                                                                                              // 743
                                                                                                                       // 744
        function calcSampleValues () {                                                                                 // 745
            for (var i = 0; i < kSplineTableSize; ++i) {                                                               // 746
                mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);                                          // 747
            }                                                                                                          // 748
        }                                                                                                              // 749
                                                                                                                       // 750
        function binarySubdivide (aX, aA, aB) {                                                                        // 751
            var currentX, currentT, i = 0;                                                                             // 752
                                                                                                                       // 753
            do {                                                                                                       // 754
                currentT = aA + (aB - aA) / 2.0;                                                                       // 755
                currentX = calcBezier(currentT, mX1, mX2) - aX;                                                        // 756
                if (currentX > 0.0) {                                                                                  // 757
                  aB = currentT;                                                                                       // 758
                } else {                                                                                               // 759
                  aA = currentT;                                                                                       // 760
                }                                                                                                      // 761
            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);                  // 762
                                                                                                                       // 763
            return currentT;                                                                                           // 764
        }                                                                                                              // 765
                                                                                                                       // 766
        function getTForX (aX) {                                                                                       // 767
            var intervalStart = 0.0,                                                                                   // 768
                currentSample = 1,                                                                                     // 769
                lastSample = kSplineTableSize - 1;                                                                     // 770
                                                                                                                       // 771
            for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {               // 772
                intervalStart += kSampleStepSize;                                                                      // 773
            }                                                                                                          // 774
                                                                                                                       // 775
            --currentSample;                                                                                           // 776
                                                                                                                       // 777
            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]),
                guessForT = intervalStart + dist * kSampleStepSize,                                                    // 779
                initialSlope = getSlope(guessForT, mX1, mX2);                                                          // 780
                                                                                                                       // 781
            if (initialSlope >= NEWTON_MIN_SLOPE) {                                                                    // 782
                return newtonRaphsonIterate(aX, guessForT);                                                            // 783
            } else if (initialSlope == 0.0) {                                                                          // 784
                return guessForT;                                                                                      // 785
            } else {                                                                                                   // 786
                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);                            // 787
            }                                                                                                          // 788
        }                                                                                                              // 789
                                                                                                                       // 790
        var _precomputed = false;                                                                                      // 791
                                                                                                                       // 792
        function precompute() {                                                                                        // 793
            _precomputed = true;                                                                                       // 794
            if (mX1 != mY1 || mX2 != mY2) calcSampleValues();                                                          // 795
        }                                                                                                              // 796
                                                                                                                       // 797
        var f = function (aX) {                                                                                        // 798
            if (!_precomputed) precompute();                                                                           // 799
            if (mX1 === mY1 && mX2 === mY2) return aX;                                                                 // 800
            if (aX === 0) return 0;                                                                                    // 801
            if (aX === 1) return 1;                                                                                    // 802
                                                                                                                       // 803
            return calcBezier(getTForX(aX), mY1, mY2);                                                                 // 804
        };                                                                                                             // 805
                                                                                                                       // 806
        f.getControlPoints = function() { return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }]; };                          // 807
                                                                                                                       // 808
        var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";                                                      // 809
        f.toString = function () { return str; };                                                                      // 810
                                                                                                                       // 811
        return f;                                                                                                      // 812
    }                                                                                                                  // 813
                                                                                                                       // 814
    /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
    var generateSpringRK4 = (function () {                                                                             // 818
        function springAccelerationForState (state) {                                                                  // 819
            return (-state.tension * state.x) - (state.friction * state.v);                                            // 820
        }                                                                                                              // 821
                                                                                                                       // 822
        function springEvaluateStateWithDerivative (initialState, dt, derivative) {                                    // 823
            var state = {                                                                                              // 824
                x: initialState.x + derivative.dx * dt,                                                                // 825
                v: initialState.v + derivative.dv * dt,                                                                // 826
                tension: initialState.tension,                                                                         // 827
                friction: initialState.friction                                                                        // 828
            };                                                                                                         // 829
                                                                                                                       // 830
            return { dx: state.v, dv: springAccelerationForState(state) };                                             // 831
        }                                                                                                              // 832
                                                                                                                       // 833
        function springIntegrateState (state, dt) {                                                                    // 834
            var a = {                                                                                                  // 835
                    dx: state.v,                                                                                       // 836
                    dv: springAccelerationForState(state)                                                              // 837
                },                                                                                                     // 838
                b = springEvaluateStateWithDerivative(state, dt * 0.5, a),                                             // 839
                c = springEvaluateStateWithDerivative(state, dt * 0.5, b),                                             // 840
                d = springEvaluateStateWithDerivative(state, dt, c),                                                   // 841
                dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),                                                // 842
                dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);                                                // 843
                                                                                                                       // 844
            state.x = state.x + dxdt * dt;                                                                             // 845
            state.v = state.v + dvdt * dt;                                                                             // 846
                                                                                                                       // 847
            return state;                                                                                              // 848
        }                                                                                                              // 849
                                                                                                                       // 850
        return function springRK4Factory (tension, friction, duration) {                                               // 851
                                                                                                                       // 852
            var initState = {                                                                                          // 853
                    x: -1,                                                                                             // 854
                    v: 0,                                                                                              // 855
                    tension: null,                                                                                     // 856
                    friction: null                                                                                     // 857
                },                                                                                                     // 858
                path = [0],                                                                                            // 859
                time_lapsed = 0,                                                                                       // 860
                tolerance = 1 / 10000,                                                                                 // 861
                DT = 16 / 1000,                                                                                        // 862
                have_duration, dt, last_state;                                                                         // 863
                                                                                                                       // 864
            tension = parseFloat(tension) || 500;                                                                      // 865
            friction = parseFloat(friction) || 20;                                                                     // 866
            duration = duration || null;                                                                               // 867
                                                                                                                       // 868
            initState.tension = tension;                                                                               // 869
            initState.friction = friction;                                                                             // 870
                                                                                                                       // 871
            have_duration = duration !== null;                                                                         // 872
                                                                                                                       // 873
            /* Calculate the actual time it takes for this animation to complete with the provided conditions. */      // 874
            if (have_duration) {                                                                                       // 875
                /* Run the simulation without a duration. */                                                           // 876
                time_lapsed = springRK4Factory(tension, friction);                                                     // 877
                /* Compute the adjusted time delta. */                                                                 // 878
                dt = time_lapsed / duration * DT;                                                                      // 879
            } else {                                                                                                   // 880
                dt = DT;                                                                                               // 881
            }                                                                                                          // 882
                                                                                                                       // 883
            while (true) {                                                                                             // 884
                /* Next/step function .*/                                                                              // 885
                last_state = springIntegrateState(last_state || initState, dt);                                        // 886
                /* Store the position. */                                                                              // 887
                path.push(1 + last_state.x);                                                                           // 888
                time_lapsed += 16;                                                                                     // 889
                /* If the change threshold is reached, break. */                                                       // 890
                if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {                     // 891
                    break;                                                                                             // 892
                }                                                                                                      // 893
            }                                                                                                          // 894
                                                                                                                       // 895
            /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
               computed path and returns a snapshot of the position according to a given percentComplete. */           // 897
            return !have_duration ? time_lapsed : function(percentComplete) { return path[ (percentComplete * (path.length - 1)) | 0 ]; };
        };                                                                                                             // 899
    }());                                                                                                              // 900
                                                                                                                       // 901
    /* jQuery easings. */                                                                                              // 902
    Velocity.Easings = {                                                                                               // 903
        linear: function(p) { return p; },                                                                             // 904
        swing: function(p) { return 0.5 - Math.cos( p * Math.PI ) / 2 },                                               // 905
        /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */                          // 906
        spring: function(p) { return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6)); }                           // 907
    };                                                                                                                 // 908
                                                                                                                       // 909
    /* CSS3 and Robert Penner easings. */                                                                              // 910
    $.each(                                                                                                            // 911
        [                                                                                                              // 912
            [ "ease", [ 0.25, 0.1, 0.25, 1.0 ] ],                                                                      // 913
            [ "ease-in", [ 0.42, 0.0, 1.00, 1.0 ] ],                                                                   // 914
            [ "ease-out", [ 0.00, 0.0, 0.58, 1.0 ] ],                                                                  // 915
            [ "ease-in-out", [ 0.42, 0.0, 0.58, 1.0 ] ],                                                               // 916
            [ "easeInSine", [ 0.47, 0, 0.745, 0.715 ] ],                                                               // 917
            [ "easeOutSine", [ 0.39, 0.575, 0.565, 1 ] ],                                                              // 918
            [ "easeInOutSine", [ 0.445, 0.05, 0.55, 0.95 ] ],                                                          // 919
            [ "easeInQuad", [ 0.55, 0.085, 0.68, 0.53 ] ],                                                             // 920
            [ "easeOutQuad", [ 0.25, 0.46, 0.45, 0.94 ] ],                                                             // 921
            [ "easeInOutQuad", [ 0.455, 0.03, 0.515, 0.955 ] ],                                                        // 922
            [ "easeInCubic", [ 0.55, 0.055, 0.675, 0.19 ] ],                                                           // 923
            [ "easeOutCubic", [ 0.215, 0.61, 0.355, 1 ] ],                                                             // 924
            [ "easeInOutCubic", [ 0.645, 0.045, 0.355, 1 ] ],                                                          // 925
            [ "easeInQuart", [ 0.895, 0.03, 0.685, 0.22 ] ],                                                           // 926
            [ "easeOutQuart", [ 0.165, 0.84, 0.44, 1 ] ],                                                              // 927
            [ "easeInOutQuart", [ 0.77, 0, 0.175, 1 ] ],                                                               // 928
            [ "easeInQuint", [ 0.755, 0.05, 0.855, 0.06 ] ],                                                           // 929
            [ "easeOutQuint", [ 0.23, 1, 0.32, 1 ] ],                                                                  // 930
            [ "easeInOutQuint", [ 0.86, 0, 0.07, 1 ] ],                                                                // 931
            [ "easeInExpo", [ 0.95, 0.05, 0.795, 0.035 ] ],                                                            // 932
            [ "easeOutExpo", [ 0.19, 1, 0.22, 1 ] ],                                                                   // 933
            [ "easeInOutExpo", [ 1, 0, 0, 1 ] ],                                                                       // 934
            [ "easeInCirc", [ 0.6, 0.04, 0.98, 0.335 ] ],                                                              // 935
            [ "easeOutCirc", [ 0.075, 0.82, 0.165, 1 ] ],                                                              // 936
            [ "easeInOutCirc", [ 0.785, 0.135, 0.15, 0.86 ] ]                                                          // 937
        ], function(i, easingArray) {                                                                                  // 938
            Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);                             // 939
        });                                                                                                            // 940
                                                                                                                       // 941
    /* Determine the appropriate easing type given an easing input. */                                                 // 942
    function getEasing(value, duration) {                                                                              // 943
        var easing = value;                                                                                            // 944
                                                                                                                       // 945
        /* The easing option can either be a string that references a pre-registered easing,                           // 946
           or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */           // 947
        if (Type.isString(value)) {                                                                                    // 948
            /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */                        // 949
            if (!Velocity.Easings[value]) {                                                                            // 950
                easing = false;                                                                                        // 951
            }                                                                                                          // 952
        } else if (Type.isArray(value) && value.length === 1) {                                                        // 953
            easing = generateStep.apply(null, value);                                                                  // 954
        } else if (Type.isArray(value) && value.length === 2) {                                                        // 955
            /* springRK4 must be passed the animation's duration. */                                                   // 956
            /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing                // 957
               function generated with default tension and friction values. */                                         // 958
            easing = generateSpringRK4.apply(null, value.concat([ duration ]));                                        // 959
        } else if (Type.isArray(value) && value.length === 4) {                                                        // 960
            /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */                      // 961
            easing = generateBezier.apply(null, value);                                                                // 962
        } else {                                                                                                       // 963
            easing = false;                                                                                            // 964
        }                                                                                                              // 965
                                                                                                                       // 966
        /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)   // 967
           if the Velocity-wide default has been incorrectly modified. */                                              // 968
        if (easing === false) {                                                                                        // 969
            if (Velocity.Easings[Velocity.defaults.easing]) {                                                          // 970
                easing = Velocity.defaults.easing;                                                                     // 971
            } else {                                                                                                   // 972
                easing = EASING_DEFAULT;                                                                               // 973
            }                                                                                                          // 974
        }                                                                                                              // 975
                                                                                                                       // 976
        return easing;                                                                                                 // 977
    }                                                                                                                  // 978
                                                                                                                       // 979
    /*****************                                                                                                 // 980
        CSS Stack                                                                                                      // 981
    *****************/                                                                                                 // 982
                                                                                                                       // 983
    /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.                     // 984
       It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */      // 985
    /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */                                       // 986
    var CSS = Velocity.CSS = {                                                                                         // 987
                                                                                                                       // 988
        /*************                                                                                                 // 989
            RegEx                                                                                                      // 990
        *************/                                                                                                 // 991
                                                                                                                       // 992
        RegEx: {                                                                                                       // 993
            isHex: /^#([A-f\d]{3}){1,2}$/i,                                                                            // 994
            /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
            valueUnwrap: /^[A-z]+\((.*)\)$/i,                                                                          // 996
            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,                                        // 997
            /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig                                                   // 999
        },                                                                                                             // 1000
                                                                                                                       // 1001
        /************                                                                                                  // 1002
            Lists                                                                                                      // 1003
        ************/                                                                                                  // 1004
                                                                                                                       // 1005
        Lists: {                                                                                                       // 1006
            colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
            transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],  // 1008
            transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]                     // 1009
        },                                                                                                             // 1010
                                                                                                                       // 1011
        /************                                                                                                  // 1012
            Hooks                                                                                                      // 1013
        ************/                                                                                                  // 1014
                                                                                                                       // 1015
        /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property                           // 1016
           (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */              // 1017
        /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only             // 1018
           tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
        Hooks: {                                                                                                       // 1020
            /********************                                                                                      // 1021
                Registration                                                                                           // 1022
            ********************/                                                                                      // 1023
                                                                                                                       // 1024
            /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
            /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
            templates: {                                                                                               // 1027
                "textShadow": [ "Color X Y Blur", "black 0px 0px 0px" ],                                               // 1028
                "boxShadow": [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],                                     // 1029
                "clip": [ "Top Right Bottom Left", "0px 0px 0px 0px" ],                                                // 1030
                "backgroundPosition": [ "X Y", "0% 0%" ],                                                              // 1031
                "transformOrigin": [ "X Y Z", "50% 50% 0px" ],                                                         // 1032
                "perspectiveOrigin": [ "X Y", "50% 50%" ]                                                              // 1033
            },                                                                                                         // 1034
                                                                                                                       // 1035
            /* A "registered" hook is one that has been converted from its template form into a live,                  // 1036
               tweenable property. It contains data to associate it with its root property. */                         // 1037
            registered: {                                                                                              // 1038
                /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],                    // 1039
                   which consists of the subproperty's name, the associated root property's name,                      // 1040
                   and the subproperty's position in the root's value. */                                              // 1041
            },                                                                                                         // 1042
            /* Convert the templates into individual hooks then append them to the registered object above. */         // 1043
            register: function () {                                                                                    // 1044
                /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
                   currently set to "transparent" default to their respective template below when color-animated,      // 1046
                   and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
                   which is almost always set closer to black than white. */                                           // 1048
                for (var i = 0; i < CSS.Lists.colors.length; i++) {                                                    // 1049
                    var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";               // 1050
                    CSS.Hooks.templates[CSS.Lists.colors[i]] = [ "Red Green Blue Alpha", rgbComponents ];              // 1051
                }                                                                                                      // 1052
                                                                                                                       // 1053
                var rootProperty,                                                                                      // 1054
                    hookTemplate,                                                                                      // 1055
                    hookNames;                                                                                         // 1056
                                                                                                                       // 1057
                /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
                   Thus, we re-arrange the templates accordingly. */                                                   // 1059
                if (IE) {                                                                                              // 1060
                    for (rootProperty in CSS.Hooks.templates) {                                                        // 1061
                        hookTemplate = CSS.Hooks.templates[rootProperty];                                              // 1062
                        hookNames = hookTemplate[0].split(" ");                                                        // 1063
                                                                                                                       // 1064
                        var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);                               // 1065
                                                                                                                       // 1066
                        if (hookNames[0] === "Color") {                                                                // 1067
                            /* Reposition both the hook's name and its default value to the end of their respective strings. */
                            hookNames.push(hookNames.shift());                                                         // 1069
                            defaultValues.push(defaultValues.shift());                                                 // 1070
                                                                                                                       // 1071
                            /* Replace the existing template for the hook's root property. */                          // 1072
                            CSS.Hooks.templates[rootProperty] = [ hookNames.join(" "), defaultValues.join(" ") ];      // 1073
                        }                                                                                              // 1074
                    }                                                                                                  // 1075
                }                                                                                                      // 1076
                                                                                                                       // 1077
                /* Hook registration. */                                                                               // 1078
                for (rootProperty in CSS.Hooks.templates) {                                                            // 1079
                    hookTemplate = CSS.Hooks.templates[rootProperty];                                                  // 1080
                    hookNames = hookTemplate[0].split(" ");                                                            // 1081
                                                                                                                       // 1082
                    for (var i in hookNames) {                                                                         // 1083
                        var fullHookName = rootProperty + hookNames[i],                                                // 1084
                            hookPosition = i;                                                                          // 1085
                                                                                                                       // 1086
                        /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
                           and the hook's position in its template's default value string. */                          // 1088
                        CSS.Hooks.registered[fullHookName] = [ rootProperty, hookPosition ];                           // 1089
                    }                                                                                                  // 1090
                }                                                                                                      // 1091
            },                                                                                                         // 1092
                                                                                                                       // 1093
            /*****************************                                                                             // 1094
               Injection and Extraction                                                                                // 1095
            *****************************/                                                                             // 1096
                                                                                                                       // 1097
            /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */  // 1098
            /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
            getRoot: function (property) {                                                                             // 1100
                var hookData = CSS.Hooks.registered[property];                                                         // 1101
                                                                                                                       // 1102
                if (hookData) {                                                                                        // 1103
                    return hookData[0];                                                                                // 1104
                } else {                                                                                               // 1105
                    /* If there was no hook match, return the property name untouched. */                              // 1106
                    return property;                                                                                   // 1107
                }                                                                                                      // 1108
            },                                                                                                         // 1109
            /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that    // 1110
               the targeted hook can be injected or extracted at its standard position. */                             // 1111
            cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {                                        // 1112
                /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
                if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {                                                   // 1114
                    rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];                             // 1115
                }                                                                                                      // 1116
                                                                                                                       // 1117
                /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),  // 1118
                   default to the root's default value as defined in CSS.Hooks.templates. */                           // 1119
                /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their  // 1120
                   zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
                if (CSS.Values.isCSSNullValue(rootPropertyValue)) {                                                    // 1122
                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];                                          // 1123
                }                                                                                                      // 1124
                                                                                                                       // 1125
                return rootPropertyValue;                                                                              // 1126
            },                                                                                                         // 1127
            /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
            extractValue: function (fullHookName, rootPropertyValue) {                                                 // 1129
                var hookData = CSS.Hooks.registered[fullHookName];                                                     // 1130
                                                                                                                       // 1131
                if (hookData) {                                                                                        // 1132
                    var hookRoot = hookData[0],                                                                        // 1133
                        hookPosition = hookData[1];                                                                    // 1134
                                                                                                                       // 1135
                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);                 // 1136
                                                                                                                       // 1137
                    /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
                    return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];                     // 1139
                } else {                                                                                               // 1140
                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
                    return rootPropertyValue;                                                                          // 1142
                }                                                                                                      // 1143
            },                                                                                                         // 1144
            /* Inject the hook's value into its root property's value. This is used to piece back together the root property
               once Velocity has updated one of its individually hooked values through tweening. */                    // 1146
            injectValue: function (fullHookName, hookValue, rootPropertyValue) {                                       // 1147
                var hookData = CSS.Hooks.registered[fullHookName];                                                     // 1148
                                                                                                                       // 1149
                if (hookData) {                                                                                        // 1150
                    var hookRoot = hookData[0],                                                                        // 1151
                        hookPosition = hookData[1],                                                                    // 1152
                        rootPropertyValueParts,                                                                        // 1153
                        rootPropertyValueUpdated;                                                                      // 1154
                                                                                                                       // 1155
                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);                 // 1156
                                                                                                                       // 1157
                    /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
                       then reconstruct the rootPropertyValue string. */                                               // 1159
                    rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);                 // 1160
                    rootPropertyValueParts[hookPosition] = hookValue;                                                  // 1161
                    rootPropertyValueUpdated = rootPropertyValueParts.join(" ");                                       // 1162
                                                                                                                       // 1163
                    return rootPropertyValueUpdated;                                                                   // 1164
                } else {                                                                                               // 1165
                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
                    return rootPropertyValue;                                                                          // 1167
                }                                                                                                      // 1168
            }                                                                                                          // 1169
        },                                                                                                             // 1170
                                                                                                                       // 1171
        /*******************                                                                                           // 1172
           Normalizations                                                                                              // 1173
        *******************/                                                                                           // 1174
                                                                                                                       // 1175
        /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
           and reformatting special properties (e.g. clip, rgba) to look like standard ones. */                        // 1177
        Normalizations: {                                                                                              // 1178
            /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
               the targeted element (which may need to be queried), and the targeted property value. */                // 1180
            registered: {                                                                                              // 1181
                clip: function (type, element, propertyValue) {                                                        // 1182
                    switch (type) {                                                                                    // 1183
                        case "name":                                                                                   // 1184
                            return "clip";                                                                             // 1185
                        /* Clip needs to be unwrapped and stripped of its commas during extraction. */                 // 1186
                        case "extract":                                                                                // 1187
                            var extracted;                                                                             // 1188
                                                                                                                       // 1189
                            /* If Velocity also extracted this value, skip extraction. */                              // 1190
                            if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {                          // 1191
                                extracted = propertyValue;                                                             // 1192
                            } else {                                                                                   // 1193
                                /* Remove the "rect()" wrapper. */                                                     // 1194
                                extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);                     // 1195
                                                                                                                       // 1196
                                /* Strip off commas. */                                                                // 1197
                                extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;         // 1198
                            }                                                                                          // 1199
                                                                                                                       // 1200
                            return extracted;                                                                          // 1201
                        /* Clip needs to be re-wrapped during injection. */                                            // 1202
                        case "inject":                                                                                 // 1203
                            return "rect(" + propertyValue + ")";                                                      // 1204
                    }                                                                                                  // 1205
                },                                                                                                     // 1206
                                                                                                                       // 1207
                blur: function(type, element, propertyValue) {                                                         // 1208
                    switch (type) {                                                                                    // 1209
                        case "name":                                                                                   // 1210
                            return Velocity.State.isFirefox ? "filter" : "-webkit-filter";                             // 1211
                        case "extract":                                                                                // 1212
                            var extracted = parseFloat(propertyValue);                                                 // 1213
                                                                                                                       // 1214
                            /* If extracted is NaN, meaning the value isn't already extracted. */                      // 1215
                            if (!(extracted || extracted === 0)) {                                                     // 1216
                                var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);         // 1217
                                                                                                                       // 1218
                                /* If the filter string had a blur component, return just the blur value and unit type. */
                                if (blurComponent) {                                                                   // 1220
                                    extracted = blurComponent[1];                                                      // 1221
                                /* If the component doesn't exist, default blur to 0. */                               // 1222
                                } else {                                                                               // 1223
                                    extracted = 0;                                                                     // 1224
                                }                                                                                      // 1225
                            }                                                                                          // 1226
                                                                                                                       // 1227
                            return extracted;                                                                          // 1228
                        /* Blur needs to be re-wrapped during injection. */                                            // 1229
                        case "inject":                                                                                 // 1230
                            /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
                            if (!parseFloat(propertyValue)) {                                                          // 1232
                                return "none";                                                                         // 1233
                            } else {                                                                                   // 1234
                                return "blur(" + propertyValue + ")";                                                  // 1235
                            }                                                                                          // 1236
                    }                                                                                                  // 1237
                },                                                                                                     // 1238
                                                                                                                       // 1239
                /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */  // 1240
                opacity: function (type, element, propertyValue) {                                                     // 1241
                    if (IE <= 8) {                                                                                     // 1242
                        switch (type) {                                                                                // 1243
                            case "name":                                                                               // 1244
                                return "filter";                                                                       // 1245
                            case "extract":                                                                            // 1246
                                /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".                          // 1247
                                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
                                var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);              // 1249
                                                                                                                       // 1250
                                if (extracted) {                                                                       // 1251
                                    /* Convert to decimal value. */                                                    // 1252
                                    propertyValue = extracted[1] / 100;                                                // 1253
                                } else {                                                                               // 1254
                                    /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
                                    propertyValue = 1;                                                                 // 1256
                                }                                                                                      // 1257
                                                                                                                       // 1258
                                return propertyValue;                                                                  // 1259
                            case "inject":                                                                             // 1260
                                /* Opacified elements are required to have their zoom property set to a non-zero value. */
                                element.style.zoom = 1;                                                                // 1262
                                                                                                                       // 1263
                                /* Setting the filter property on elements with certain font property combinations can result in a
                                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
                                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
                                if (parseFloat(propertyValue) >= 1) {                                                  // 1267
                                    return "";                                                                         // 1268
                                } else {                                                                               // 1269
                                  /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
                                  return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";       // 1271
                                }                                                                                      // 1272
                        }                                                                                              // 1273
                    /* With all other browsers, normalization is not required; return the same values that were passed in. */
                    } else {                                                                                           // 1275
                        switch (type) {                                                                                // 1276
                            case "name":                                                                               // 1277
                                return "opacity";                                                                      // 1278
                            case "extract":                                                                            // 1279
                                return propertyValue;                                                                  // 1280
                            case "inject":                                                                             // 1281
                                return propertyValue;                                                                  // 1282
                        }                                                                                              // 1283
                    }                                                                                                  // 1284
                }                                                                                                      // 1285
            },                                                                                                         // 1286
                                                                                                                       // 1287
            /*****************************                                                                             // 1288
                Batched Registrations                                                                                  // 1289
            *****************************/                                                                             // 1290
                                                                                                                       // 1291
            /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */                        // 1292
            register: function () {                                                                                    // 1293
                                                                                                                       // 1294
                /*****************                                                                                     // 1295
                    Transforms                                                                                         // 1296
                *****************/                                                                                     // 1297
                                                                                                                       // 1298
                /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
                   so that they can be referenced in a properties map by their individual names. */                    // 1300
                /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
                   setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
                   Transform setting is batched in this way to improve performance: the transform style only needs to be updated
                   once when multiple transform subproperties are being animated simultaneously. */                    // 1304
                /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
                   transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
                   from being normalized for these browsers so that tweening skips these properties altogether         // 1307
                   (since it will ignore them as being unsupported by the browser.) */                                 // 1308
                if (!(IE <= 9) && !Velocity.State.isGingerbread) {                                                     // 1309
                    /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
                    share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
                    CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);                // 1312
                }                                                                                                      // 1313
                                                                                                                       // 1314
                for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {                                            // 1315
                    /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
                    paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
                    (function() {                                                                                      // 1318
                        var transformName = CSS.Lists.transformsBase[i];                                               // 1319
                                                                                                                       // 1320
                        CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {       // 1321
                            switch (type) {                                                                            // 1322
                                /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
                                case "name":                                                                           // 1324
                                    return "transform";                                                                // 1325
                                /* Transform values are cached onto a per-element transformCache object. */            // 1326
                                case "extract":                                                                        // 1327
                                    /* If this transform has yet to be assigned a value, return its null value. */     // 1328
                                    if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
                                        /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
                                        return /^scale/i.test(transformName) ? 1 : 0;                                  // 1331
                                    /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
                                       Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
                                    } else {                                                                           // 1334
                                        return Data(element).transformCache[transformName].replace(/[()]/g, "");       // 1335
                                    }                                                                                  // 1336
                                case "inject":                                                                         // 1337
                                    var invalid = false;                                                               // 1338
                                                                                                                       // 1339
                                    /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
                                       Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
                                    /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
                                    switch (transformName.substr(0, transformName.length - 1)) {                       // 1343
                                        /* Whitelist unit types for each transform. */                                 // 1344
                                        case "translate":                                                              // 1345
                                            invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);                 // 1346
                                            break;                                                                     // 1347
                                        /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
                                        case "scal":                                                                   // 1349
                                        case "scale":                                                                  // 1350
                                            /* Chrome on Android has a bug in which scaled elements blur if their initial scale
                                               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
                                               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
                                            if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
                                                propertyValue = 1;                                                     // 1355
                                            }                                                                          // 1356
                                                                                                                       // 1357
                                            invalid = !/(\d)$/i.test(propertyValue);                                   // 1358
                                            break;                                                                     // 1359
                                        case "skew":                                                                   // 1360
                                            invalid = !/(deg|\d)$/i.test(propertyValue);                               // 1361
                                            break;                                                                     // 1362
                                        case "rotate":                                                                 // 1363
                                            invalid = !/(deg|\d)$/i.test(propertyValue);                               // 1364
                                            break;                                                                     // 1365
                                    }                                                                                  // 1366
                                                                                                                       // 1367
                                    if (!invalid) {                                                                    // 1368
                                        /* As per the CSS spec, wrap the value in parentheses. */                      // 1369
                                        Data(element).transformCache[transformName] = "(" + propertyValue + ")";       // 1370
                                    }                                                                                  // 1371
                                                                                                                       // 1372
                                    /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
                                    return Data(element).transformCache[transformName];                                // 1374
                            }                                                                                          // 1375
                        };                                                                                             // 1376
                    })();                                                                                              // 1377
                }                                                                                                      // 1378
                                                                                                                       // 1379
                /*************                                                                                         // 1380
                    Colors                                                                                             // 1381
                *************/                                                                                         // 1382
                                                                                                                       // 1383
                /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
                   Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
                for (var i = 0; i < CSS.Lists.colors.length; i++) {                                                    // 1386
                    /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
                       (Otherwise, all functions would take the final for loop's colorName.) */                        // 1388
                    (function () {                                                                                     // 1389
                        var colorName = CSS.Lists.colors[i];                                                           // 1390
                                                                                                                       // 1391
                        /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
                        CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {            // 1393
                            switch (type) {                                                                            // 1394
                                case "name":                                                                           // 1395
                                    return colorName;                                                                  // 1396
                                /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
                                case "extract":                                                                        // 1398
                                    var extracted;                                                                     // 1399
                                                                                                                       // 1400
                                    /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
                                    if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {                  // 1402
                                        extracted = propertyValue;                                                     // 1403
                                    } else {                                                                           // 1404
                                        var converted,                                                                 // 1405
                                            colorNames = {                                                             // 1406
                                                black: "rgb(0, 0, 0)",                                                 // 1407
                                                blue: "rgb(0, 0, 255)",                                                // 1408
                                                gray: "rgb(128, 128, 128)",                                            // 1409
                                                green: "rgb(0, 128, 0)",                                               // 1410
                                                red: "rgb(255, 0, 0)",                                                 // 1411
                                                white: "rgb(255, 255, 255)"                                            // 1412
                                            };                                                                         // 1413
                                                                                                                       // 1414
                                        /* Convert color names to rgb. */                                              // 1415
                                        if (/^[A-z]+$/i.test(propertyValue)) {                                         // 1416
                                            if (colorNames[propertyValue] !== undefined) {                             // 1417
                                                converted = colorNames[propertyValue]                                  // 1418
                                            } else {                                                                   // 1419
                                                /* If an unmatched color name is provided, default to black. */        // 1420
                                                converted = colorNames.black;                                          // 1421
                                            }                                                                          // 1422
                                        /* Convert hex values to rgb. */                                               // 1423
                                        } else if (CSS.RegEx.isHex.test(propertyValue)) {                              // 1424
                                            converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";   // 1425
                                        /* If the provided color doesn't match any of the accepted color formats, default to black. */
                                        } else if (!(/^rgba?\(/i.test(propertyValue))) {                               // 1427
                                            converted = colorNames.black;                                              // 1428
                                        }                                                                              // 1429
                                                                                                                       // 1430
                                        /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
                                           repeated spaces (in case the value included spaces to begin with). */       // 1432
                                        extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                    }                                                                                  // 1434
                                                                                                                       // 1435
                                    /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
                                    if (!(IE <= 8) && extracted.split(" ").length === 3) {                             // 1437
                                        extracted += " 1";                                                             // 1438
                                    }                                                                                  // 1439
                                                                                                                       // 1440
                                    return extracted;                                                                  // 1441
                                case "inject":                                                                         // 1442
                                    /* If this is IE<=8 and an alpha component exists, strip it off. */                // 1443
                                    if (IE <= 8) {                                                                     // 1444
                                        if (propertyValue.split(" ").length === 4) {                                   // 1445
                                            propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");          // 1446
                                        }                                                                              // 1447
                                    /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
                                    } else if (propertyValue.split(" ").length === 3) {                                // 1449
                                        propertyValue += " 1";                                                         // 1450
                                    }                                                                                  // 1451
                                                                                                                       // 1452
                                    /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
                                       on all values but the fourth (R, G, and B only accept whole numbers). */        // 1454
                                    return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                            }                                                                                          // 1456
                        };                                                                                             // 1457
                    })();                                                                                              // 1458
                }                                                                                                      // 1459
            }                                                                                                          // 1460
        },                                                                                                             // 1461
                                                                                                                       // 1462
        /************************                                                                                      // 1463
           CSS Property Names                                                                                          // 1464
        ************************/                                                                                      // 1465
                                                                                                                       // 1466
        Names: {                                                                                                       // 1467
            /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor"). // 1468
               Camelcasing is used to normalize property names between and across calls. */                            // 1469
            camelCase: function (property) {                                                                           // 1470
                return property.replace(/-(\w)/g, function (match, subMatch) {                                         // 1471
                    return subMatch.toUpperCase();                                                                     // 1472
                });                                                                                                    // 1473
            },                                                                                                         // 1474
                                                                                                                       // 1475
            /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
            SVGAttribute: function (property) {                                                                        // 1477
                var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";                                      // 1478
                                                                                                                       // 1479
                /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
                if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {                                    // 1481
                    SVGAttributes += "|transform";                                                                     // 1482
                }                                                                                                      // 1483
                                                                                                                       // 1484
                return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);                                    // 1485
            },                                                                                                         // 1486
                                                                                                                       // 1487
            /* Determine whether a property should be set with a vendor prefix. */                                     // 1488
            /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.  // 1489
               If the property is not at all supported by the browser, return a false flag. */                         // 1490
            prefixCheck: function (property) {                                                                         // 1491
                /* If this property has already been checked, return the cached value. */                              // 1492
                if (Velocity.State.prefixMatches[property]) {                                                          // 1493
                    return [ Velocity.State.prefixMatches[property], true ];                                           // 1494
                } else {                                                                                               // 1495
                    var vendors = [ "", "Webkit", "Moz", "ms", "O" ];                                                  // 1496
                                                                                                                       // 1497
                    for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {                          // 1498
                        var propertyPrefixed;                                                                          // 1499
                                                                                                                       // 1500
                        if (i === 0) {                                                                                 // 1501
                            propertyPrefixed = property;                                                               // 1502
                        } else {                                                                                       // 1503
                            /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
                            propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) { return match.toUpperCase(); });
                        }                                                                                              // 1506
                                                                                                                       // 1507
                        /* Check if the browser supports this property as prefixed. */                                 // 1508
                        if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {                     // 1509
                            /* Cache the match. */                                                                     // 1510
                            Velocity.State.prefixMatches[property] = propertyPrefixed;                                 // 1511
                                                                                                                       // 1512
                            return [ propertyPrefixed, true ];                                                         // 1513
                        }                                                                                              // 1514
                    }                                                                                                  // 1515
                                                                                                                       // 1516
                    /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
                    return [ property, false ];                                                                        // 1518
                }                                                                                                      // 1519
            }                                                                                                          // 1520
        },                                                                                                             // 1521
                                                                                                                       // 1522
        /************************                                                                                      // 1523
           CSS Property Values                                                                                         // 1524
        ************************/                                                                                      // 1525
                                                                                                                       // 1526
        Values: {                                                                                                      // 1527
            /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
            hexToRgb: function (hex) {                                                                                 // 1529
                var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,                                               // 1530
                    longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,                                       // 1531
                    rgbParts;                                                                                          // 1532
                                                                                                                       // 1533
                hex = hex.replace(shortformRegex, function (m, r, g, b) {                                              // 1534
                    return r + r + g + g + b + b;                                                                      // 1535
                });                                                                                                    // 1536
                                                                                                                       // 1537
                rgbParts = longformRegex.exec(hex);                                                                    // 1538
                                                                                                                       // 1539
                return rgbParts ? [ parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16) ] : [ 0, 0, 0 ];
            },                                                                                                         // 1541
                                                                                                                       // 1542
            isCSSNullValue: function (value) {                                                                         // 1543
                /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
                   Thus, we check for both falsiness and these special strings. */                                     // 1545
                /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
                   templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */                   // 1547
                /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */ // 1548
                return (value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));               // 1549
            },                                                                                                         // 1550
                                                                                                                       // 1551
            /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
            getUnitType: function (property) {                                                                         // 1553
                if (/^(rotate|skew)/i.test(property)) {                                                                // 1554
                    return "deg";                                                                                      // 1555
                } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
                    /* The above properties are unitless. */                                                           // 1557
                    return "";                                                                                         // 1558
                } else {                                                                                               // 1559
                    /* Default to px for all other properties. */                                                      // 1560
                    return "px";                                                                                       // 1561
                }                                                                                                      // 1562
            },                                                                                                         // 1563
                                                                                                                       // 1564
            /* HTML elements default to an associated display type when they're not set to display:none. */            // 1565
            /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
            getDisplayType: function (element) {                                                                       // 1567
                var tagName = element && element.tagName.toString().toLowerCase();                                     // 1568
                                                                                                                       // 1569
                if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
                    return "inline";                                                                                   // 1571
                } else if (/^(li)$/i.test(tagName)) {                                                                  // 1572
                    return "list-item";                                                                                // 1573
                } else if (/^(tr)$/i.test(tagName)) {                                                                  // 1574
                    return "table-row";                                                                                // 1575
                } else if (/^(table)$/i.test(tagName)) {                                                               // 1576
                    return "table";                                                                                    // 1577
                } else if (/^(tbody)$/i.test(tagName)) {                                                               // 1578
                    return "table-row-group";                                                                          // 1579
                /* Default to "block" when no match is found. */                                                       // 1580
                } else {                                                                                               // 1581
                    return "block";                                                                                    // 1582
                }                                                                                                      // 1583
            },                                                                                                         // 1584
                                                                                                                       // 1585
            /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
            addClass: function (element, className) {                                                                  // 1587
                if (element.classList) {                                                                               // 1588
                    element.classList.add(className);                                                                  // 1589
                } else {                                                                                               // 1590
                    element.className += (element.className.length ? " " : "") + className;                            // 1591
                }                                                                                                      // 1592
            },                                                                                                         // 1593
                                                                                                                       // 1594
            removeClass: function (element, className) {                                                               // 1595
                if (element.classList) {                                                                               // 1596
                    element.classList.remove(className);                                                               // 1597
                } else {                                                                                               // 1598
                    element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                }                                                                                                      // 1600
            }                                                                                                          // 1601
        },                                                                                                             // 1602
                                                                                                                       // 1603
        /****************************                                                                                  // 1604
           Style Getting & Setting                                                                                     // 1605
        ****************************/                                                                                  // 1606
                                                                                                                       // 1607
        /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
        getPropertyValue: function (element, property, rootPropertyValue, forceStyleLookup) {                          // 1609
            /* Get an element's computed property value. */                                                            // 1610
            /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's        // 1611
               style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
               *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
            function computePropertyValue (element, property) {                                                        // 1614
                /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
                   element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
                   offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
                   We subtract border and padding to get the sum of interior + scrollbar. */                           // 1618
                var computedValue = 0;                                                                                 // 1619
                                                                                                                       // 1620
                /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
                   of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
                   codebase for a dying browser. The performance repercussions of using jQuery here are minimal since  // 1623
                   Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
                if (IE <= 8) {                                                                                         // 1625
                    computedValue = $.css(element, property); /* GET */                                                // 1626
                /* All other browsers support getComputedStyle. The returned live object reference is cached onto its  // 1627
                   associated element so that it does not need to be refetched upon every GET. */                      // 1628
                } else {                                                                                               // 1629
                    /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
                       toggle display to the element type's default value. */                                          // 1631
                    var toggleDisplay = false;                                                                         // 1632
                                                                                                                       // 1633
                    if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {         // 1634
                        toggleDisplay = true;                                                                          // 1635
                        CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));                  // 1636
                    }                                                                                                  // 1637
                                                                                                                       // 1638
                    function revertDisplay () {                                                                        // 1639
                        if (toggleDisplay) {                                                                           // 1640
                            CSS.setPropertyValue(element, "display", "none");                                          // 1641
                        }                                                                                              // 1642
                    }                                                                                                  // 1643
                                                                                                                       // 1644
                    if (!forceStyleLookup) {                                                                           // 1645
                        if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                            var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
                            revertDisplay();                                                                           // 1648
                                                                                                                       // 1649
                            return contentBoxHeight;                                                                   // 1650
                        } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
                            var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
                            revertDisplay();                                                                           // 1653
                                                                                                                       // 1654
                            return contentBoxWidth;                                                                    // 1655
                        }                                                                                              // 1656
                    }                                                                                                  // 1657
                                                                                                                       // 1658
                    var computedStyle;                                                                                 // 1659
                                                                                                                       // 1660
                    /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
                       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
                    if (Data(element) === undefined) {                                                                 // 1663
                        computedStyle = window.getComputedStyle(element, null); /* GET */                              // 1664
                    /* If the computedStyle object has yet to be cached, do so now. */                                 // 1665
                    } else if (!Data(element).computedStyle) {                                                         // 1666
                        computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
                    /* If computedStyle is cached, use it. */                                                          // 1668
                    } else {                                                                                           // 1669
                        computedStyle = Data(element).computedStyle;                                                   // 1670
                    }                                                                                                  // 1671
                                                                                                                       // 1672
                    /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
                       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
                       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
                    if (property === "borderColor") {                                                                  // 1676
                        property = "borderTopColor";                                                                   // 1677
                    }                                                                                                  // 1678
                                                                                                                       // 1679
                    /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
                       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
                    if (IE === 9 && property === "filter") {                                                           // 1682
                        computedValue = computedStyle.getPropertyValue(property); /* GET */                            // 1683
                    } else {                                                                                           // 1684
                        computedValue = computedStyle[property];                                                       // 1685
                    }                                                                                                  // 1686
                                                                                                                       // 1687
                    /* Fall back to the property's style value (if defined) when computedValue returns nothing,        // 1688
                       which can happen when the element hasn't been painted. */                                       // 1689
                    if (computedValue === "" || computedValue === null) {                                              // 1690
                        computedValue = element.style[property];                                                       // 1691
                    }                                                                                                  // 1692
                                                                                                                       // 1693
                    revertDisplay();                                                                                   // 1694
                }                                                                                                      // 1695
                                                                                                                       // 1696
                /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
                   defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
                   effect as being set to 0, so no conversion is necessary.) */                                        // 1699
                /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
                   property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
                   to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
                if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {                         // 1703
                    var position = computePropertyValue(element, "position"); /* GET */                                // 1704
                                                                                                                       // 1705
                    /* For absolute positioning, jQuery's $.position() only returns values for top and left;           // 1706
                       right and bottom will have their "auto" value reverted to 0. */                                 // 1707
                    /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
                       Not a big deal since we're currently in a GET batch anyway. */                                  // 1709
                    if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {             // 1710
                        /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
                        computedValue = $(element).position()[property] + "px"; /* GET */                              // 1712
                    }                                                                                                  // 1713
                }                                                                                                      // 1714
                                                                                                                       // 1715
                return computedValue;                                                                                  // 1716
            }                                                                                                          // 1717
                                                                                                                       // 1718
            var propertyValue;                                                                                         // 1719
                                                                                                                       // 1720
            /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),                  // 1721
               extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */         // 1722
            if (CSS.Hooks.registered[property]) {                                                                      // 1723
                var hook = property,                                                                                   // 1724
                    hookRoot = CSS.Hooks.getRoot(hook);                                                                // 1725
                                                                                                                       // 1726
                /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
                   query the DOM for the root property's value. */                                                     // 1728
                if (rootPropertyValue === undefined) {                                                                 // 1729
                    /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
                    rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */   // 1731
                }                                                                                                      // 1732
                                                                                                                       // 1733
                /* If this root has a normalization registered, peform the associated normalization extraction. */     // 1734
                if (CSS.Normalizations.registered[hookRoot]) {                                                         // 1735
                    rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
                }                                                                                                      // 1737
                                                                                                                       // 1738
                /* Extract the hook's value. */                                                                        // 1739
                propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);                                       // 1740
                                                                                                                       // 1741
            /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
               normalize the property's name and value, and handle the special case of transforms. */                  // 1743
            /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
               numerical and therefore do not require normalization extraction. */                                     // 1745
            } else if (CSS.Normalizations.registered[property]) {                                                      // 1746
                var normalizedPropertyName,                                                                            // 1747
                    normalizedPropertyValue;                                                                           // 1748
                                                                                                                       // 1749
                normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);                     // 1750
                                                                                                                       // 1751
                /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
                   At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
                   This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;  // 1754
                   thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
                if (normalizedPropertyName !== "transform") {                                                          // 1756
                    normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */
                                                                                                                       // 1758
                    /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
                    if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {         // 1760
                        normalizedPropertyValue = CSS.Hooks.templates[property][1];                                    // 1761
                    }                                                                                                  // 1762
                }                                                                                                      // 1763
                                                                                                                       // 1764
                propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);  // 1765
            }                                                                                                          // 1766
                                                                                                                       // 1767
            /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */            // 1768
            if (!/^[\d-]/.test(propertyValue)) {                                                                       // 1769
                /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via             // 1770
                   their HTML attribute values instead of their CSS style values. */                                   // 1771
                if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {                        // 1772
                    /* Since the height/width attribute values must be set manually, they don't reflect computed values.
                       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
                    if (/^(height|width)$/i.test(property)) {                                                          // 1775
                        /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
                        try {                                                                                          // 1777
                            propertyValue = element.getBBox()[property];                                               // 1778
                        } catch (error) {                                                                              // 1779
                            propertyValue = 0;                                                                         // 1780
                        }                                                                                              // 1781
                    /* Otherwise, access the attribute value directly. */                                              // 1782
                    } else {                                                                                           // 1783
                        propertyValue = element.getAttribute(property);                                                // 1784
                    }                                                                                                  // 1785
                } else {                                                                                               // 1786
                    propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */       // 1787
                }                                                                                                      // 1788
            }                                                                                                          // 1789
                                                                                                                       // 1790
            /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
               convert CSS null-values to an integer of value 0. */                                                    // 1792
            if (CSS.Values.isCSSNullValue(propertyValue)) {                                                            // 1793
                propertyValue = 0;                                                                                     // 1794
            }                                                                                                          // 1795
                                                                                                                       // 1796
            if (Velocity.debug >= 2) console.log("Get " + property + ": " + propertyValue);                            // 1797
                                                                                                                       // 1798
            return propertyValue;                                                                                      // 1799
        },                                                                                                             // 1800
                                                                                                                       // 1801
        /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
        setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {                  // 1803
            var propertyName = property;                                                                               // 1804
                                                                                                                       // 1805
            /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
            if (property === "scroll") {                                                                               // 1807
                /* If a container option is present, scroll the container instead of the browser window. */            // 1808
                if (scrollData.container) {                                                                            // 1809
                    scrollData.container["scroll" + scrollData.direction] = propertyValue;                             // 1810
                /* Otherwise, Velocity defaults to scrolling the browser window. */                                    // 1811
                } else {                                                                                               // 1812
                    if (scrollData.direction === "Left") {                                                             // 1813
                        window.scrollTo(propertyValue, scrollData.alternateValue);                                     // 1814
                    } else {                                                                                           // 1815
                        window.scrollTo(scrollData.alternateValue, propertyValue);                                     // 1816
                    }                                                                                                  // 1817
                }                                                                                                      // 1818
            } else {                                                                                                   // 1819
                /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
                   Thus, for now, we merely cache transforms being SET. */                                             // 1821
                if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
                    /* Perform a normalization injection. */                                                           // 1823
                    /* Note: The normalization logic handles the transformCache updating. */                           // 1824
                    CSS.Normalizations.registered[property]("inject", element, propertyValue);                         // 1825
                                                                                                                       // 1826
                    propertyName = "transform";                                                                        // 1827
                    propertyValue = Data(element).transformCache[property];                                            // 1828
                } else {                                                                                               // 1829
                    /* Inject hooks. */                                                                                // 1830
                    if (CSS.Hooks.registered[property]) {                                                              // 1831
                        var hookName = property,                                                                       // 1832
                            hookRoot = CSS.Hooks.getRoot(property);                                                    // 1833
                                                                                                                       // 1834
                        /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
                        rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */    // 1836
                                                                                                                       // 1837
                        propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);             // 1838
                        property = hookRoot;                                                                           // 1839
                    }                                                                                                  // 1840
                                                                                                                       // 1841
                    /* Normalize names and values. */                                                                  // 1842
                    if (CSS.Normalizations.registered[property]) {                                                     // 1843
                        propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);     // 1844
                        property = CSS.Normalizations.registered[property]("name", element);                           // 1845
                    }                                                                                                  // 1846
                                                                                                                       // 1847
                    /* Assign the appropriate vendor prefix before performing an official style update. */             // 1848
                    propertyName = CSS.Names.prefixCheck(property)[0];                                                 // 1849
                                                                                                                       // 1850
                    /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
                       Try/catch is avoided for other browsers since it incurs a performance overhead. */              // 1852
                    if (IE <= 8) {                                                                                     // 1853
                        try {                                                                                          // 1854
                            element.style[propertyName] = propertyValue;                                               // 1855
                        } catch (error) { if (Velocity.debug) console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]"); }
                    /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
                    /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */     // 1858
                    } else if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {             // 1859
                        /* Note: For SVG attributes, vendor-prefixed property names are never used. */                 // 1860
                        /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
                        element.setAttribute(property, propertyValue);                                                 // 1862
                    } else {                                                                                           // 1863
                        element.style[propertyName] = propertyValue;                                                   // 1864
                    }                                                                                                  // 1865
                                                                                                                       // 1866
                    if (Velocity.debug >= 2) console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
                }                                                                                                      // 1868
            }                                                                                                          // 1869
                                                                                                                       // 1870
            /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
            return [ propertyName, propertyValue ];                                                                    // 1872
        },                                                                                                             // 1873
                                                                                                                       // 1874
        /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
        /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
        flushTransformCache: function(element) {                                                                       // 1877
            var transformString = "";                                                                                  // 1878
                                                                                                                       // 1879
            /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
               (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
            if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && Data(element).isSVG) {               // 1882
                /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
                   Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
                function getTransformFloat (transformProperty) {                                                       // 1885
                    return parseFloat(CSS.getPropertyValue(element, transformProperty));                               // 1886
                }                                                                                                      // 1887
                                                                                                                       // 1888
                /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
                   we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
                var SVGTransforms = {                                                                                  // 1891
                    translate: [ getTransformFloat("translateX"), getTransformFloat("translateY") ],                   // 1892
                    skewX: [ getTransformFloat("skewX") ], skewY: [ getTransformFloat("skewY") ],                      // 1893
                    /* If the scale property is set (non-1), use that value for the scaleX and scaleY values           // 1894
                       (this behavior mimics the result of animating all these properties at once on HTML elements). */
                    scale: getTransformFloat("scale") !== 1 ? [ getTransformFloat("scale"), getTransformFloat("scale") ] : [ getTransformFloat("scaleX"), getTransformFloat("scaleY") ],
                    /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
                       defining the rotation's origin point. We ignore the origin values (default them to 0). */       // 1898
                    rotate: [ getTransformFloat("rotateZ"), 0, 0 ]                                                     // 1899
                };                                                                                                     // 1900
                                                                                                                       // 1901
                /* Iterate through the transform properties in the user-defined property map order.                    // 1902
                   (This mimics the behavior of non-SVG transform animation.) */                                       // 1903
                $.each(Data(element).transformCache, function(transformName) {                                         // 1904
                    /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
                       properties so that they match up with SVG's accepted transform properties. */                   // 1906
                    if (/^translate/i.test(transformName)) {                                                           // 1907
                        transformName = "translate";                                                                   // 1908
                    } else if (/^scale/i.test(transformName)) {                                                        // 1909
                        transformName = "scale";                                                                       // 1910
                    } else if (/^rotate/i.test(transformName)) {                                                       // 1911
                        transformName = "rotate";                                                                      // 1912
                    }                                                                                                  // 1913
                                                                                                                       // 1914
                    /* Check that we haven't yet deleted the property from the SVGTransforms container. */             // 1915
                    if (SVGTransforms[transformName]) {                                                                // 1916
                        /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
                        transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";   // 1918
                                                                                                                       // 1919
                        /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
                           re-insert the same master property if we encounter another one of its axis-specific properties. */
                        delete SVGTransforms[transformName];                                                           // 1922
                    }                                                                                                  // 1923
                });                                                                                                    // 1924
            } else {                                                                                                   // 1925
                var transformValue,                                                                                    // 1926
                    perspective;                                                                                       // 1927
                                                                                                                       // 1928
                /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
                $.each(Data(element).transformCache, function(transformName) {                                         // 1930
                    transformValue = Data(element).transformCache[transformName];                                      // 1931
                                                                                                                       // 1932
                    /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
                    if (transformName === "transformPerspective") {                                                    // 1934
                        perspective = transformValue;                                                                  // 1935
                        return true;                                                                                   // 1936
                    }                                                                                                  // 1937
                                                                                                                       // 1938
                    /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */                // 1939
                    if (IE === 9 && transformName === "rotateZ") {                                                     // 1940
                        transformName = "rotate";                                                                      // 1941
                    }                                                                                                  // 1942
                                                                                                                       // 1943
                    transformString += transformName + transformValue + " ";                                           // 1944
                });                                                                                                    // 1945
                                                                                                                       // 1946
                /* If present, set the perspective subproperty first. */                                               // 1947
                if (perspective) {                                                                                     // 1948
                    transformString = "perspective" + perspective + " " + transformString;                             // 1949
                }                                                                                                      // 1950
            }                                                                                                          // 1951
                                                                                                                       // 1952
            CSS.setPropertyValue(element, "transform", transformString);                                               // 1953
        }                                                                                                              // 1954
    };                                                                                                                 // 1955
                                                                                                                       // 1956
    /* Register hooks and normalizations. */                                                                           // 1957
    CSS.Hooks.register();                                                                                              // 1958
    CSS.Normalizations.register();                                                                                     // 1959
                                                                                                                       // 1960
    /* Allow hook setting in the same fashion as jQuery's $.css(). */                                                  // 1961
    Velocity.hook = function (elements, arg2, arg3) {                                                                  // 1962
        var value = undefined;                                                                                         // 1963
                                                                                                                       // 1964
        elements = sanitizeElements(elements);                                                                         // 1965
                                                                                                                       // 1966
        $.each(elements, function(i, element) {                                                                        // 1967
            /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */        // 1968
            if (Data(element) === undefined) {                                                                         // 1969
                Velocity.init(element);                                                                                // 1970
            }                                                                                                          // 1971
                                                                                                                       // 1972
            /* Get property value. If an element set was passed in, only return the value for the first element. */    // 1973
            if (arg3 === undefined) {                                                                                  // 1974
                if (value === undefined) {                                                                             // 1975
                    value = Velocity.CSS.getPropertyValue(element, arg2);                                              // 1976
                }                                                                                                      // 1977
            /* Set property value. */                                                                                  // 1978
            } else {                                                                                                   // 1979
                /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */   // 1980
                var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);                                  // 1981
                                                                                                                       // 1982
                /* Transform properties don't automatically set. They have to be flushed to the DOM. */                // 1983
                if (adjustedSet[0] === "transform") {                                                                  // 1984
                    Velocity.CSS.flushTransformCache(element);                                                         // 1985
                }                                                                                                      // 1986
                                                                                                                       // 1987
                value = adjustedSet;                                                                                   // 1988
            }                                                                                                          // 1989
        });                                                                                                            // 1990
                                                                                                                       // 1991
        return value;                                                                                                  // 1992
    };                                                                                                                 // 1993
                                                                                                                       // 1994
    /*****************                                                                                                 // 1995
        Animation                                                                                                      // 1996
    *****************/                                                                                                 // 1997
                                                                                                                       // 1998
    var animate = function() {                                                                                         // 1999
                                                                                                                       // 2000
        /******************                                                                                            // 2001
            Call Chain                                                                                                 // 2002
        ******************/                                                                                            // 2003
                                                                                                                       // 2004
        /* Logic for determining what to return to the call stack when exiting out of Velocity. */                     // 2005
        function getChain () {                                                                                         // 2006
            /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
               default to null instead of returning the targeted elements so that utility function's return value is standardized. */
            if (isUtility) {                                                                                           // 2009
                return promiseData.promise || null;                                                                    // 2010
            /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */                        // 2011
            } else {                                                                                                   // 2012
                return elementsWrapped;                                                                                // 2013
            }                                                                                                          // 2014
        }                                                                                                              // 2015
                                                                                                                       // 2016
        /*************************                                                                                     // 2017
           Arguments Assignment                                                                                        // 2018
        *************************/                                                                                     // 2019
                                                                                                                       // 2020
        /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
           objects are defined on a container object that's passed in as Velocity's sole argument. */                  // 2022
        /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
        var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
            /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */       // 2025
            isUtility,                                                                                                 // 2026
            /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly     // 2027
               passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */         // 2028
            elementsWrapped,                                                                                           // 2029
            argumentIndex;                                                                                             // 2030
                                                                                                                       // 2031
        var elements,                                                                                                  // 2032
            propertiesMap,                                                                                             // 2033
            options;                                                                                                   // 2034
                                                                                                                       // 2035
        /* Detect jQuery/Zepto elements being animated via the $.fn method. */                                         // 2036
        if (Type.isWrapped(this)) {                                                                                    // 2037
            isUtility = false;                                                                                         // 2038
                                                                                                                       // 2039
            argumentIndex = 0;                                                                                         // 2040
            elements = this;                                                                                           // 2041
            elementsWrapped = this;                                                                                    // 2042
        /* Otherwise, raw elements are being animated via the utility function. */                                     // 2043
        } else {                                                                                                       // 2044
            isUtility = true;                                                                                          // 2045
                                                                                                                       // 2046
            argumentIndex = 1;                                                                                         // 2047
            elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];                      // 2048
        }                                                                                                              // 2049
                                                                                                                       // 2050
        elements = sanitizeElements(elements);                                                                         // 2051
                                                                                                                       // 2052
        if (!elements) {                                                                                               // 2053
            return;                                                                                                    // 2054
        }                                                                                                              // 2055
                                                                                                                       // 2056
        if (syntacticSugar) {                                                                                          // 2057
            propertiesMap = arguments[0].properties || arguments[0].p;                                                 // 2058
            options = arguments[0].options || arguments[0].o;                                                          // 2059
        } else {                                                                                                       // 2060
            propertiesMap = arguments[argumentIndex];                                                                  // 2061
            options = arguments[argumentIndex + 1];                                                                    // 2062
        }                                                                                                              // 2063
                                                                                                                       // 2064
        /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
           single raw DOM element is passed in (which doesn't contain a length property). */                           // 2066
        var elementsLength = elements.length,                                                                          // 2067
            elementsIndex = 0;                                                                                         // 2068
                                                                                                                       // 2069
        /***************************                                                                                   // 2070
            Argument Overloading                                                                                       // 2071
        ***************************/                                                                                   // 2072
                                                                                                                       // 2073
        /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
           Overloading is detected by checking for the absence of an object being passed into options. */              // 2075
        /* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */
        if (!/^(stop|finish)$/i.test(propertiesMap) && !$.isPlainObject(options)) {                                    // 2077
            /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */   // 2078
            var startingArgumentPosition = argumentIndex + 1;                                                          // 2079
                                                                                                                       // 2080
            options = {};                                                                                              // 2081
                                                                                                                       // 2082
            /* Iterate through all options arguments */                                                                // 2083
            for (var i = startingArgumentPosition; i < arguments.length; i++) {                                        // 2084
                /* Treat a number as a duration. Parse it out. */                                                      // 2085
                /* Note: The following RegEx will return true if passed an array with a number as its first item.      // 2086
                   Thus, arrays are skipped from this check. */                                                        // 2087
                if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
                    options.duration = arguments[i];                                                                   // 2089
                /* Treat strings and arrays as easings. */                                                             // 2090
                } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {                                // 2091
                    options.easing = arguments[i];                                                                     // 2092
                /* Treat a function as a complete callback. */                                                         // 2093
                } else if (Type.isFunction(arguments[i])) {                                                            // 2094
                    options.complete = arguments[i];                                                                   // 2095
                }                                                                                                      // 2096
            }                                                                                                          // 2097
        }                                                                                                              // 2098
                                                                                                                       // 2099
        /***************                                                                                               // 2100
            Promises                                                                                                   // 2101
        ***************/                                                                                               // 2102
                                                                                                                       // 2103
        var promiseData = {                                                                                            // 2104
                promise: null,                                                                                         // 2105
                resolver: null,                                                                                        // 2106
                rejecter: null                                                                                         // 2107
            };                                                                                                         // 2108
                                                                                                                       // 2109
        /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
           promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
           method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
           call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
        /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
           triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
           grouped together for the purposes of resolving and rejecting a promise. */                                  // 2116
        if (isUtility && Velocity.Promise) {                                                                           // 2117
            promiseData.promise = new Velocity.Promise(function (resolve, reject) {                                    // 2118
                promiseData.resolver = resolve;                                                                        // 2119
                promiseData.rejecter = reject;                                                                         // 2120
            });                                                                                                        // 2121
        }                                                                                                              // 2122
                                                                                                                       // 2123
        /*********************                                                                                         // 2124
           Action Detection                                                                                            // 2125
        *********************/                                                                                         // 2126
                                                                                                                       // 2127
        /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,     // 2128
           or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
           first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */
        var action;                                                                                                    // 2131
                                                                                                                       // 2132
        switch (propertiesMap) {                                                                                       // 2133
            case "scroll":                                                                                             // 2134
                action = "scroll";                                                                                     // 2135
                break;                                                                                                 // 2136
                                                                                                                       // 2137
            case "reverse":                                                                                            // 2138
                action = "reverse";                                                                                    // 2139
                break;                                                                                                 // 2140
                                                                                                                       // 2141
            case "finish":                                                                                             // 2142
            case "stop":                                                                                               // 2143
                /*******************                                                                                   // 2144
                    Action: Stop                                                                                       // 2145
                *******************/                                                                                   // 2146
                                                                                                                       // 2147
                /* Clear the currently-active delay on each targeted element. */                                       // 2148
                $.each(elements, function(i, element) {                                                                // 2149
                    if (Data(element) && Data(element).delayTimer) {                                                   // 2150
                        /* Stop the timer from triggering its cached next() function. */                               // 2151
                        clearTimeout(Data(element).delayTimer.setTimeout);                                             // 2152
                                                                                                                       // 2153
                        /* Manually call the next() function so that the subsequent queue items can progress. */       // 2154
                        if (Data(element).delayTimer.next) {                                                           // 2155
                            Data(element).delayTimer.next();                                                           // 2156
                        }                                                                                              // 2157
                                                                                                                       // 2158
                        delete Data(element).delayTimer;                                                               // 2159
                    }                                                                                                  // 2160
                });                                                                                                    // 2161
                                                                                                                       // 2162
                var callsToStop = [];                                                                                  // 2163
                                                                                                                       // 2164
                /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
                   been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
                   is stopped, the next item in its animation queue is immediately triggered. */                       // 2167
                /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
                   or a custom queue string can be passed in. */                                                       // 2169
                /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
                   regardless of the element's current queue state. */                                                 // 2171
                                                                                                                       // 2172
                /* Iterate through every active call. */                                                               // 2173
                $.each(Velocity.State.calls, function(i, activeCall) {                                                 // 2174
                    /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */               // 2175
                    if (activeCall) {                                                                                  // 2176
                        /* Iterate through the active call's targeted elements. */                                     // 2177
                        $.each(activeCall[1], function(k, activeElement) {                                             // 2178
                            /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
                               clear calls associated with the relevant queue. */                                      // 2180
                            /* Call stopping logic works as follows:                                                   // 2181
                               - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
                               - options === undefined --> stop current queue:"" call and all queue:false calls.       // 2183
                               - options === false --> stop only queue:false calls.                                    // 2184
                               - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
                            var queueName = (options === undefined) ? "" : options;                                    // 2186
                                                                                                                       // 2187
                            if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
                                return true;                                                                           // 2189
                            }                                                                                          // 2190
                                                                                                                       // 2191
                            /* Iterate through the calls targeted by the stop command. */                              // 2192
                            $.each(elements, function(l, element) {                                                    // 2193
                                /* Check that this call was applied to the target element. */                          // 2194
                                if (element === activeElement) {                                                       // 2195
                                    /* Optionally clear the remaining queued calls. */                                 // 2196
                                    if (options === true || Type.isString(options)) {                                  // 2197
                                        /* Iterate through the items in the element's queue. */                        // 2198
                                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
                                            /* The queue array can contain an "inprogress" string, which we skip. */   // 2200
                                            if (Type.isFunction(item)) {                                               // 2201
                                                /* Pass the item's callback a flag indicating that we want to abort from the queue call.
                                                   (Specifically, the queue will resolve the call's associated promise then abort.)  */
                                                item(null, true);                                                      // 2204
                                            }                                                                          // 2205
                                        });                                                                            // 2206
                                                                                                                       // 2207
                                        /* Clearing the $.queue() array is achieved by resetting it to []. */          // 2208
                                        $.queue(element, Type.isString(options) ? options : "", []);                   // 2209
                                    }                                                                                  // 2210
                                                                                                                       // 2211
                                    if (propertiesMap === "stop") {                                                    // 2212
                                        /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
                                           changed to reflect the final value that the elements were actually tweened to. */
                                        /* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
                                           object. Also, queue:false animations can't be reversed. */                  // 2216
                                        if (Data(element) && Data(element).tweensContainer && queueName !== false) {   // 2217
                                            $.each(Data(element).tweensContainer, function(m, activeTween) {           // 2218
                                                activeTween.endValue = activeTween.currentValue;                       // 2219
                                            });                                                                        // 2220
                                        }                                                                              // 2221
                                                                                                                       // 2222
                                        callsToStop.push(i);                                                           // 2223
                                    } else if (propertiesMap === "finish") {                                           // 2224
                                        /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
                                        they finish upon the next rAf tick then proceed with normal call completion logic. */
                                        activeCall[2].duration = 1;                                                    // 2227
                                    }                                                                                  // 2228
                                }                                                                                      // 2229
                            });                                                                                        // 2230
                        });                                                                                            // 2231
                    }                                                                                                  // 2232
                });                                                                                                    // 2233
                                                                                                                       // 2234
                /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
                   that the complete callback and display:none setting should be skipped since we're completing prematurely. */
                if (propertiesMap === "stop") {                                                                        // 2237
                    $.each(callsToStop, function(i, j) {                                                               // 2238
                        completeCall(j, true);                                                                         // 2239
                    });                                                                                                // 2240
                                                                                                                       // 2241
                    if (promiseData.promise) {                                                                         // 2242
                        /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
                        promiseData.resolver(elements);                                                                // 2244
                    }                                                                                                  // 2245
                }                                                                                                      // 2246
                                                                                                                       // 2247
                /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */                    // 2248
                return getChain();                                                                                     // 2249
                                                                                                                       // 2250
            default:                                                                                                   // 2251
                /* Treat a non-empty plain object as a literal properties map. */                                      // 2252
                if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {                            // 2253
                    action = "start";                                                                                  // 2254
                                                                                                                       // 2255
                /****************                                                                                      // 2256
                    Redirects                                                                                          // 2257
                ****************/                                                                                      // 2258
                                                                                                                       // 2259
                /* Check if a string matches a registered redirect (see Redirects above). */                           // 2260
                } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {                        // 2261
                    var opts = $.extend({}, options),                                                                  // 2262
                        durationOriginal = opts.duration,                                                              // 2263
                        delayOriginal = opts.delay || 0;                                                               // 2264
                                                                                                                       // 2265
                    /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
                    if (opts.backwards === true) {                                                                     // 2267
                        elements = $.extend(true, [], elements).reverse();                                             // 2268
                    }                                                                                                  // 2269
                                                                                                                       // 2270
                    /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
                    $.each(elements, function(elementIndex, element) {                                                 // 2272
                        /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
                        if (parseFloat(opts.stagger)) {                                                                // 2274
                            opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);                    // 2275
                        } else if (Type.isFunction(opts.stagger)) {                                                    // 2276
                            opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);     // 2277
                        }                                                                                              // 2278
                                                                                                                       // 2279
                        /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
                           the duration of each element's animation, using floors to prevent producing very short durations. */
                        if (opts.drag) {                                                                               // 2282
                            /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
                            opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
                                                                                                                       // 2285
                            /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
                               B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
                               The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
                            opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex/elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
                        }                                                                                              // 2290
                                                                                                                       // 2291
                        /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
                           reduce the opts checking logic required inside the redirect. */                             // 2293
                        Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
                    });                                                                                                // 2295
                                                                                                                       // 2296
                    /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
                       (The performance overhead up to this point is virtually non-existant.) */                       // 2298
                    /* Note: The jQuery call chain is kept intact by returning the complete element set. */            // 2299
                    return getChain();                                                                                 // 2300
                } else {                                                                                               // 2301
                    var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                                                                                                       // 2303
                    if (promiseData.promise) {                                                                         // 2304
                        promiseData.rejecter(new Error(abortError));                                                   // 2305
                    } else {                                                                                           // 2306
                        console.log(abortError);                                                                       // 2307
                    }                                                                                                  // 2308
                                                                                                                       // 2309
                    return getChain();                                                                                 // 2310
                }                                                                                                      // 2311
        }                                                                                                              // 2312
                                                                                                                       // 2313
        /**************************                                                                                    // 2314
            Call-Wide Variables                                                                                        // 2315
        **************************/                                                                                    // 2316
                                                                                                                       // 2317
        /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
           being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
           avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
           conversion metrics across Velocity animations that are not immediately consecutively chained. */            // 2321
        var callUnitConversionData = {                                                                                 // 2322
                lastParent: null,                                                                                      // 2323
                lastPosition: null,                                                                                    // 2324
                lastFontSize: null,                                                                                    // 2325
                lastPercentToPxWidth: null,                                                                            // 2326
                lastPercentToPxHeight: null,                                                                           // 2327
                lastEmToPx: null,                                                                                      // 2328
                remToPx: null,                                                                                         // 2329
                vwToPx: null,                                                                                          // 2330
                vhToPx: null                                                                                           // 2331
            };                                                                                                         // 2332
                                                                                                                       // 2333
        /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
           Velocity.State.calls array that is processed during animation ticking. */                                   // 2335
        var call = [];                                                                                                 // 2336
                                                                                                                       // 2337
        /************************                                                                                      // 2338
           Element Processing                                                                                          // 2339
        ************************/                                                                                      // 2340
                                                                                                                       // 2341
        /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
           1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
           2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
           3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
        */                                                                                                             // 2346
                                                                                                                       // 2347
        function processElement () {                                                                                   // 2348
                                                                                                                       // 2349
            /*************************                                                                                 // 2350
               Part I: Pre-Queueing                                                                                    // 2351
            *************************/                                                                                 // 2352
                                                                                                                       // 2353
            /***************************                                                                               // 2354
               Element-Wide Variables                                                                                  // 2355
            ***************************/                                                                               // 2356
                                                                                                                       // 2357
            var element = this,                                                                                        // 2358
                /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
                opts = $.extend({}, Velocity.defaults, options),                                                       // 2360
                /* A container for the processed data associated with each property in the propertyMap.                // 2361
                   (Each property in the map produces its own "tween".) */                                             // 2362
                tweensContainer = {},                                                                                  // 2363
                elementUnitConversionData;                                                                             // 2364
                                                                                                                       // 2365
            /******************                                                                                        // 2366
               Element Init                                                                                            // 2367
            ******************/                                                                                        // 2368
                                                                                                                       // 2369
            if (Data(element) === undefined) {                                                                         // 2370
                Velocity.init(element);                                                                                // 2371
            }                                                                                                          // 2372
                                                                                                                       // 2373
            /******************                                                                                        // 2374
               Option: Delay                                                                                           // 2375
            ******************/                                                                                        // 2376
                                                                                                                       // 2377
            /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
            /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()  // 2379
               (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
            if (parseFloat(opts.delay) && opts.queue !== false) {                                                      // 2381
                $.queue(element, opts.queue, function(next) {                                                          // 2382
                    /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
                    Velocity.velocityQueueEntryFlag = true;                                                            // 2384
                                                                                                                       // 2385
                    /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
                       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
                    Data(element).delayTimer = {                                                                       // 2388
                        setTimeout: setTimeout(next, parseFloat(opts.delay)),                                          // 2389
                        next: next                                                                                     // 2390
                    };                                                                                                 // 2391
                });                                                                                                    // 2392
            }                                                                                                          // 2393
                                                                                                                       // 2394
            /*********************                                                                                     // 2395
               Option: Duration                                                                                        // 2396
            *********************/                                                                                     // 2397
                                                                                                                       // 2398
            /* Support for jQuery's named durations. */                                                                // 2399
            switch (opts.duration.toString().toLowerCase()) {                                                          // 2400
                case "fast":                                                                                           // 2401
                    opts.duration = 200;                                                                               // 2402
                    break;                                                                                             // 2403
                                                                                                                       // 2404
                case "normal":                                                                                         // 2405
                    opts.duration = DURATION_DEFAULT;                                                                  // 2406
                    break;                                                                                             // 2407
                                                                                                                       // 2408
                case "slow":                                                                                           // 2409
                    opts.duration = 600;                                                                               // 2410
                    break;                                                                                             // 2411
                                                                                                                       // 2412
                default:                                                                                               // 2413
                    /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
                    opts.duration = parseFloat(opts.duration) || 1;                                                    // 2415
            }                                                                                                          // 2416
                                                                                                                       // 2417
            /************************                                                                                  // 2418
               Global Option: Mock                                                                                     // 2419
            ************************/                                                                                  // 2420
                                                                                                                       // 2421
            if (Velocity.mock !== false) {                                                                             // 2422
                /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
                   Alternatively, a multiplier can be passed in to time remap all delays and durations. */             // 2424
                if (Velocity.mock === true) {                                                                          // 2425
                    opts.duration = opts.delay = 1;                                                                    // 2426
                } else {                                                                                               // 2427
                    opts.duration *= parseFloat(Velocity.mock) || 1;                                                   // 2428
                    opts.delay *= parseFloat(Velocity.mock) || 1;                                                      // 2429
                }                                                                                                      // 2430
            }                                                                                                          // 2431
                                                                                                                       // 2432
            /*******************                                                                                       // 2433
               Option: Easing                                                                                          // 2434
            *******************/                                                                                       // 2435
                                                                                                                       // 2436
            opts.easing = getEasing(opts.easing, opts.duration);                                                       // 2437
                                                                                                                       // 2438
            /**********************                                                                                    // 2439
               Option: Callbacks                                                                                       // 2440
            **********************/                                                                                    // 2441
                                                                                                                       // 2442
            /* Callbacks must functions. Otherwise, default to null. */                                                // 2443
            if (opts.begin && !Type.isFunction(opts.begin)) {                                                          // 2444
                opts.begin = null;                                                                                     // 2445
            }                                                                                                          // 2446
                                                                                                                       // 2447
            if (opts.progress && !Type.isFunction(opts.progress)) {                                                    // 2448
                opts.progress = null;                                                                                  // 2449
            }                                                                                                          // 2450
                                                                                                                       // 2451
            if (opts.complete && !Type.isFunction(opts.complete)) {                                                    // 2452
                opts.complete = null;                                                                                  // 2453
            }                                                                                                          // 2454
                                                                                                                       // 2455
            /*********************************                                                                         // 2456
               Option: Display & Visibility                                                                            // 2457
            *********************************/                                                                         // 2458
                                                                                                                       // 2459
            /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
            /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
            if (opts.display !== undefined && opts.display !== null) {                                                 // 2462
                opts.display = opts.display.toString().toLowerCase();                                                  // 2463
                                                                                                                       // 2464
                /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
                if (opts.display === "auto") {                                                                         // 2466
                    opts.display = Velocity.CSS.Values.getDisplayType(element);                                        // 2467
                }                                                                                                      // 2468
            }                                                                                                          // 2469
                                                                                                                       // 2470
            if (opts.visibility !== undefined && opts.visibility !== null) {                                           // 2471
                opts.visibility = opts.visibility.toString().toLowerCase();                                            // 2472
            }                                                                                                          // 2473
                                                                                                                       // 2474
            /**********************                                                                                    // 2475
               Option: mobileHA                                                                                        // 2476
            **********************/                                                                                    // 2477
                                                                                                                       // 2478
            /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
               on animating elements. HA is removed from the element at the completion of its animation. */            // 2480
            /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
            /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
            opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);               // 2483
                                                                                                                       // 2484
            /***********************                                                                                   // 2485
               Part II: Queueing                                                                                       // 2486
            ***********************/                                                                                   // 2487
                                                                                                                       // 2488
            /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
               In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
            /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
               the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
            function buildQueue (next) {                                                                               // 2493
                                                                                                                       // 2494
                /*******************                                                                                   // 2495
                   Option: Begin                                                                                       // 2496
                *******************/                                                                                   // 2497
                                                                                                                       // 2498
                /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
                if (opts.begin && elementsIndex === 0) {                                                               // 2500
                    /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
                    try {                                                                                              // 2502
                        opts.begin.call(elements, elements);                                                           // 2503
                    } catch (error) {                                                                                  // 2504
                        setTimeout(function() { throw error; }, 1);                                                    // 2505
                    }                                                                                                  // 2506
                }                                                                                                      // 2507
                                                                                                                       // 2508
                /*****************************************                                                             // 2509
                   Tween Data Construction (for Scroll)                                                                // 2510
                *****************************************/                                                             // 2511
                                                                                                                       // 2512
                /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
                if (action === "scroll") {                                                                             // 2514
                    /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
                    var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),                                   // 2516
                        scrollOffset = parseFloat(opts.offset) || 0,                                                   // 2517
                        scrollPositionCurrent,                                                                         // 2518
                        scrollPositionCurrentAlternate,                                                                // 2519
                        scrollPositionEnd;                                                                             // 2520
                                                                                                                       // 2521
                    /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
                       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
                    if (opts.container) {                                                                              // 2524
                        /* Ensure that either a jQuery object or a raw DOM element was passed in. */                   // 2525
                        if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {                           // 2526
                            /* Extract the raw DOM element from the jQuery wrapper. */                                 // 2527
                            opts.container = opts.container[0] || opts.container;                                      // 2528
                            /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
                               (due to the user's natural interaction with the page). */                               // 2530
                            scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */              // 2531
                                                                                                                       // 2532
                            /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
                               -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
                               the scroll container's current scroll position. */                                      // 2535
                            scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
                        /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
                        } else {                                                                                       // 2538
                            opts.container = null;                                                                     // 2539
                        }                                                                                              // 2540
                    } else {                                                                                           // 2541
                        /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
                           the appropriate cached property names (which differ based on browser type). */              // 2543
                        scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
                        /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
                        scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */
                                                                                                                       // 2547
                        /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
                           and therefore end values do not need to be compounded onto current values. */               // 2549
                        scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
                    }                                                                                                  // 2551
                                                                                                                       // 2552
                    /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
                    tweensContainer = {                                                                                // 2554
                        scroll: {                                                                                      // 2555
                            rootPropertyValue: false,                                                                  // 2556
                            startValue: scrollPositionCurrent,                                                         // 2557
                            currentValue: scrollPositionCurrent,                                                       // 2558
                            endValue: scrollPositionEnd,                                                               // 2559
                            unitType: "",                                                                              // 2560
                            easing: opts.easing,                                                                       // 2561
                            scrollData: {                                                                              // 2562
                                container: opts.container,                                                             // 2563
                                direction: scrollDirection,                                                            // 2564
                                alternateValue: scrollPositionCurrentAlternate                                         // 2565
                            }                                                                                          // 2566
                        },                                                                                             // 2567
                        element: element                                                                               // 2568
                    };                                                                                                 // 2569
                                                                                                                       // 2570
                    if (Velocity.debug) console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);    // 2571
                                                                                                                       // 2572
                /******************************************                                                            // 2573
                   Tween Data Construction (for Reverse)                                                               // 2574
                ******************************************/                                                            // 2575
                                                                                                                       // 2576
                /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
                   that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
                   the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
                /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
                /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
                   there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
                   as reverting to the element's values as they were prior to the previous *Velocity* call. */         // 2583
                } else if (action === "reverse") {                                                                     // 2584
                    /* Abort if there is no prior animation data to reverse to. */                                     // 2585
                    if (!Data(element).tweensContainer) {                                                              // 2586
                        /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
                        $.dequeue(element, opts.queue);                                                                // 2588
                                                                                                                       // 2589
                        return;                                                                                        // 2590
                    } else {                                                                                           // 2591
                        /*********************                                                                         // 2592
                           Options Parsing                                                                             // 2593
                        *********************/                                                                         // 2594
                                                                                                                       // 2595
                        /* If the element was hidden via the display option in the previous call,                      // 2596
                           revert display to "auto" prior to reversal so that the element is visible again. */         // 2597
                        if (Data(element).opts.display === "none") {                                                   // 2598
                            Data(element).opts.display = "auto";                                                       // 2599
                        }                                                                                              // 2600
                                                                                                                       // 2601
                        if (Data(element).opts.visibility === "hidden") {                                              // 2602
                            Data(element).opts.visibility = "visible";                                                 // 2603
                        }                                                                                              // 2604
                                                                                                                       // 2605
                        /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
                           Further, remove the previous call's callback options; typically, users do not want these to be refired. */
                        Data(element).opts.loop = false;                                                               // 2608
                        Data(element).opts.begin = null;                                                               // 2609
                        Data(element).opts.complete = null;                                                            // 2610
                                                                                                                       // 2611
                        /* Since we're extending an opts object that has already been extended with the defaults options object,
                           we remove non-explicitly-defined properties that are auto-assigned values. */               // 2613
                        if (!options.easing) {                                                                         // 2614
                            delete opts.easing;                                                                        // 2615
                        }                                                                                              // 2616
                                                                                                                       // 2617
                        if (!options.duration) {                                                                       // 2618
                            delete opts.duration;                                                                      // 2619
                        }                                                                                              // 2620
                                                                                                                       // 2621
                        /* The opts object used for reversal is an extension of the options object optionally passed into this
                           reverse call plus the options used in the previous Velocity call. */                        // 2623
                        opts = $.extend({}, Data(element).opts, opts);                                                 // 2624
                                                                                                                       // 2625
                        /*************************************                                                         // 2626
                           Tweens Container Reconstruction                                                             // 2627
                        *************************************/                                                         // 2628
                                                                                                                       // 2629
                        /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
                        var lastTweensContainer = $.extend(true, {}, Data(element).tweensContainer);                   // 2631
                                                                                                                       // 2632
                        /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
                        for (var lastTween in lastTweensContainer) {                                                   // 2634
                            /* In addition to tween data, tweensContainers contain an element property that we ignore here. */
                            if (lastTween !== "element") {                                                             // 2636
                                var lastStartValue = lastTweensContainer[lastTween].startValue;                        // 2637
                                                                                                                       // 2638
                                lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
                                lastTweensContainer[lastTween].endValue = lastStartValue;                              // 2640
                                                                                                                       // 2641
                                /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
                                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
                                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
                                if (!Type.isEmptyObject(options)) {                                                    // 2645
                                    lastTweensContainer[lastTween].easing = opts.easing;                               // 2646
                                }                                                                                      // 2647
                                                                                                                       // 2648
                                if (Velocity.debug) console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
                            }                                                                                          // 2650
                        }                                                                                              // 2651
                                                                                                                       // 2652
                        tweensContainer = lastTweensContainer;                                                         // 2653
                    }                                                                                                  // 2654
                                                                                                                       // 2655
                /*****************************************                                                             // 2656
                   Tween Data Construction (for Start)                                                                 // 2657
                *****************************************/                                                             // 2658
                                                                                                                       // 2659
                } else if (action === "start") {                                                                       // 2660
                                                                                                                       // 2661
                    /*************************                                                                         // 2662
                        Value Transferring                                                                             // 2663
                    *************************/                                                                         // 2664
                                                                                                                       // 2665
                    /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
                       while the element was in the process of being animated by Velocity, then this current call is safe to use
                       the end values from the prior call as its start values. Velocity attempts to perform this value transfer
                       process whenever possible in order to avoid requerying the DOM. */                              // 2669
                    /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
                       then the DOM is queried for the element's current values as a last resort. */                   // 2671
                    /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
                    var lastTweensContainer;                                                                           // 2673
                                                                                                                       // 2674
                    /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
                       to transfer over end values to use as start values. If it's set to true and there is a previous // 2676
                       Velocity call to pull values from, do so. */                                                    // 2677
                    if (Data(element).tweensContainer && Data(element).isAnimating === true) {                         // 2678
                        lastTweensContainer = Data(element).tweensContainer;                                           // 2679
                    }                                                                                                  // 2680
                                                                                                                       // 2681
                    /***************************                                                                       // 2682
                       Tween Data Calculation                                                                          // 2683
                    ***************************/                                                                       // 2684
                                                                                                                       // 2685
                    /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
                    /* Property map values can either take the form of 1) a single value representing the end value,   // 2687
                       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].                          // 2688
                       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
                       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
                    function parsePropertyValue (valueData, skipResolvingEasing) {                                     // 2691
                        var endValue = undefined,                                                                      // 2692
                            easing = undefined,                                                                        // 2693
                            startValue = undefined;                                                                    // 2694
                                                                                                                       // 2695
                        /* Handle the array format, which can be structured as one of three potential overloads:       // 2696
                           A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
                        if (Type.isArray(valueData)) {                                                                 // 2698
                            /* endValue is always the first item in the array. Don't bother validating endValue's value now
                               since the ensuing property cycling logic does that. */                                  // 2700
                            endValue = valueData[0];                                                                   // 2701
                                                                                                                       // 2702
                            /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
                               start value since easings can only be non-hex strings or arrays. */                     // 2704
                            if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
                                startValue = valueData[1];                                                             // 2706
                            /* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */
                            } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
                                easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);  // 2709
                                                                                                                       // 2710
                                /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
                                if (valueData[2] !== undefined) {                                                      // 2712
                                    startValue = valueData[2];                                                         // 2713
                                }                                                                                      // 2714
                            }                                                                                          // 2715
                        /* Handle the single-value format. */                                                          // 2716
                        } else {                                                                                       // 2717
                            endValue = valueData;                                                                      // 2718
                        }                                                                                              // 2719
                                                                                                                       // 2720
                        /* Default to the call's easing if a per-property easing type was not defined. */              // 2721
                        if (!skipResolvingEasing) {                                                                    // 2722
                            easing = easing || opts.easing;                                                            // 2723
                        }                                                                                              // 2724
                                                                                                                       // 2725
                        /* If functions were passed in as values, pass the function the current element as its context,
                           plus the element's index and the element set's size as arguments. Then, assign the returned value. */
                        if (Type.isFunction(endValue)) {                                                               // 2728
                            endValue = endValue.call(element, elementsIndex, elementsLength);                          // 2729
                        }                                                                                              // 2730
                                                                                                                       // 2731
                        if (Type.isFunction(startValue)) {                                                             // 2732
                            startValue = startValue.call(element, elementsIndex, elementsLength);                      // 2733
                        }                                                                                              // 2734
                                                                                                                       // 2735
                        /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
                        return [ endValue || 0, easing, startValue ];                                                  // 2737
                    }                                                                                                  // 2738
                                                                                                                       // 2739
                    /* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
                       colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
                    $.each(propertiesMap, function(property, value) {                                                  // 2742
                        /* Find shorthand color properties that have been passed a hex string. */                      // 2743
                        if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)) {                         // 2744
                            /* Parse the value data for each shorthand. */                                             // 2745
                            var valueData = parsePropertyValue(value, true),                                           // 2746
                                endValue = valueData[0],                                                               // 2747
                                easing = valueData[1],                                                                 // 2748
                                startValue = valueData[2];                                                             // 2749
                                                                                                                       // 2750
                            if (CSS.RegEx.isHex.test(endValue)) {                                                      // 2751
                                /* Convert the hex strings into their RGB component arrays. */                         // 2752
                                var colorComponents = [ "Red", "Green", "Blue" ],                                      // 2753
                                    endValueRGB = CSS.Values.hexToRgb(endValue),                                       // 2754
                                    startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;          // 2755
                                                                                                                       // 2756
                                /* Inject the RGB component tweens into propertiesMap. */                              // 2757
                                for (var i = 0; i < colorComponents.length; i++) {                                     // 2758
                                    var dataArray = [ endValueRGB[i] ];                                                // 2759
                                                                                                                       // 2760
                                    if (easing) {                                                                      // 2761
                                        dataArray.push(easing);                                                        // 2762
                                    }                                                                                  // 2763
                                                                                                                       // 2764
                                    if (startValueRGB !== undefined) {                                                 // 2765
                                        dataArray.push(startValueRGB[i]);                                              // 2766
                                    }                                                                                  // 2767
                                                                                                                       // 2768
                                    propertiesMap[property + colorComponents[i]] = dataArray;                          // 2769
                                }                                                                                      // 2770
                                                                                                                       // 2771
                                /* Remove the intermediary shorthand property entry now that we've processed it. */    // 2772
                                delete propertiesMap[property];                                                        // 2773
                            }                                                                                          // 2774
                        }                                                                                              // 2775
                    });                                                                                                // 2776
                                                                                                                       // 2777
                    /* Create a tween out of each property, and append its associated data to tweensContainer. */      // 2778
                    for (var property in propertiesMap) {                                                              // 2779
                                                                                                                       // 2780
                        /**************************                                                                    // 2781
                           Start Value Sourcing                                                                        // 2782
                        **************************/                                                                    // 2783
                                                                                                                       // 2784
                        /* Parse out endValue, easing, and startValue from the property's data. */                     // 2785
                        var valueData = parsePropertyValue(propertiesMap[property]),                                   // 2786
                            endValue = valueData[0],                                                                   // 2787
                            easing = valueData[1],                                                                     // 2788
                            startValue = valueData[2];                                                                 // 2789
                                                                                                                       // 2790
                        /* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
                           we force the property to its camelCase styling to normalize it for manipulation. */         // 2792
                        property = CSS.Names.camelCase(property);                                                      // 2793
                                                                                                                       // 2794
                        /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
                        var rootProperty = CSS.Hooks.getRoot(property),                                                // 2796
                            rootPropertyValue = false;                                                                 // 2797
                                                                                                                       // 2798
                        /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
                           inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
                           Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
                        /* Note: Since SVG elements have some of their properties directly applied as HTML attributes, // 2802
                           there is no way to check for their explicit browser support, and so we skip skip this check for them. */
                        if (!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
                            if (Velocity.debug) console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
                                                                                                                       // 2806
                            continue;                                                                                  // 2807
                        }                                                                                              // 2808
                                                                                                                       // 2809
                        /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
                           animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
                           a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
                        if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
                            startValue = 0;                                                                            // 2814
                        }                                                                                              // 2815
                                                                                                                       // 2816
                        /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
                           for all of the current call's properties that were *also* animated in the previous call. */ // 2818
                        /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
                        if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {               // 2820
                            if (startValue === undefined) {                                                            // 2821
                                startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
                            }                                                                                          // 2823
                                                                                                                       // 2824
                            /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
                               instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
                               attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
                            rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty];                    // 2828
                        /* If values were not transferred from a previous Velocity call, query the DOM as needed. */   // 2829
                        } else {                                                                                       // 2830
                            /* Handle hooked properties. */                                                            // 2831
                            if (CSS.Hooks.registered[property]) {                                                      // 2832
                               if (startValue === undefined) {                                                         // 2833
                                    rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */         // 2834
                                    /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
                                       getPropertyValue() will extract the hook from rootPropertyValue. */             // 2836
                                    startValue = CSS.getPropertyValue(element, property, rootPropertyValue);           // 2837
                                /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
                                   just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
                                   root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
                                   to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
                                } else {                                                                               // 2842
                                    /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */              // 2843
                                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];                          // 2844
                                }                                                                                      // 2845
                            /* Handle non-hooked properties that haven't already been defined via forcefeeding. */     // 2846
                            } else if (startValue === undefined) {                                                     // 2847
                                startValue = CSS.getPropertyValue(element, property); /* GET */                        // 2848
                            }                                                                                          // 2849
                        }                                                                                              // 2850
                                                                                                                       // 2851
                        /**************************                                                                    // 2852
                           Value Data Extraction                                                                       // 2853
                        **************************/                                                                    // 2854
                                                                                                                       // 2855
                        var separatedValue,                                                                            // 2856
                            endValueUnitType,                                                                          // 2857
                            startValueUnitType,                                                                        // 2858
                            operator = false;                                                                          // 2859
                                                                                                                       // 2860
                        /* Separates a property value into its numeric value and its unit type. */                     // 2861
                        function separateValue (property, value) {                                                     // 2862
                            var unitType,                                                                              // 2863
                                numericValue;                                                                          // 2864
                                                                                                                       // 2865
                            numericValue = (value || "0")                                                              // 2866
                                .toString()                                                                            // 2867
                                .toLowerCase()                                                                         // 2868
                                /* Match the unit type at the end of the value. */                                     // 2869
                                .replace(/[%A-z]+$/, function(match) {                                                 // 2870
                                    /* Grab the unit type. */                                                          // 2871
                                    unitType = match;                                                                  // 2872
                                                                                                                       // 2873
                                    /* Strip the unit type off of value. */                                            // 2874
                                    return "";                                                                         // 2875
                                });                                                                                    // 2876
                                                                                                                       // 2877
                            /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
                            if (!unitType) {                                                                           // 2879
                                unitType = CSS.Values.getUnitType(property);                                           // 2880
                            }                                                                                          // 2881
                                                                                                                       // 2882
                            return [ numericValue, unitType ];                                                         // 2883
                        }                                                                                              // 2884
                                                                                                                       // 2885
                        /* Separate startValue. */                                                                     // 2886
                        separatedValue = separateValue(property, startValue);                                          // 2887
                        startValue = separatedValue[0];                                                                // 2888
                        startValueUnitType = separatedValue[1];                                                        // 2889
                                                                                                                       // 2890
                        /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */         // 2891
                        separatedValue = separateValue(property, endValue);                                            // 2892
                        endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {                // 2893
                            operator = subMatch;                                                                       // 2894
                                                                                                                       // 2895
                            /* Strip the operator off of the value. */                                                 // 2896
                            return "";                                                                                 // 2897
                        });                                                                                            // 2898
                        endValueUnitType = separatedValue[1];                                                          // 2899
                                                                                                                       // 2900
                        /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */        // 2901
                        startValue = parseFloat(startValue) || 0;                                                      // 2902
                        endValue = parseFloat(endValue) || 0;                                                          // 2903
                                                                                                                       // 2904
                        /***************************************                                                       // 2905
                           Property-Specific Value Conversion                                                          // 2906
                        ***************************************/                                                       // 2907
                                                                                                                       // 2908
                        /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
                        if (endValueUnitType === "%") {                                                                // 2910
                            /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
                               which is identical to the em unit's behavior, so we piggyback off of that. */           // 2912
                            if (/^(fontSize|lineHeight)$/.test(property)) {                                            // 2913
                                /* Convert % into an em decimal value. */                                              // 2914
                                endValue = endValue / 100;                                                             // 2915
                                endValueUnitType = "em";                                                               // 2916
                            /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
                            } else if (/^scale/.test(property)) {                                                      // 2918
                                endValue = endValue / 100;                                                             // 2919
                                endValueUnitType = "";                                                                 // 2920
                            /* For RGB components, take the defined percentage of 255 and strip off the unit type. */  // 2921
                            } else if (/(Red|Green|Blue)$/i.test(property)) {                                          // 2922
                                endValue = (endValue / 100) * 255;                                                     // 2923
                                endValueUnitType = "";                                                                 // 2924
                            }                                                                                          // 2925
                        }                                                                                              // 2926
                                                                                                                       // 2927
                        /***************************                                                                   // 2928
                           Unit Ratio Calculation                                                                      // 2929
                        ***************************/                                                                   // 2930
                                                                                                                       // 2931
                        /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
                           %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
                           for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
                           from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
                           1) Calculating the ratio of %/em/rem/vh/vw relative to pixels                               // 2936
                           2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
                        /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
                           setting values with the target unit type then comparing the returned pixel value. */        // 2939
                        /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
                           of batching the SETs and GETs together upfront outweights the potential overhead            // 2941
                           of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
                        /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */ // 2943
                        function calculateUnitRatios () {                                                              // 2944
                                                                                                                       // 2945
                            /************************                                                                  // 2946
                                Same Ratio Checks                                                                      // 2947
                            ************************/                                                                  // 2948
                                                                                                                       // 2949
                            /* The properties below are used to determine whether the element differs sufficiently from this call's
                               previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
                               of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
                               this is done to minimize DOM querying. */                                               // 2953
                            var sameRatioIndicators = {                                                                // 2954
                                    myParent: element.parentNode || document.body, /* GET */                           // 2955
                                    position: CSS.getPropertyValue(element, "position"), /* GET */                     // 2956
                                    fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */                      // 2957
                                },                                                                                     // 2958
                                /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
                                samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
                                /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
                                sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);  // 2962
                                                                                                                       // 2963
                            /* Store these ratio indicators call-wide for the next element to compare against. */      // 2964
                            callUnitConversionData.lastParent = sameRatioIndicators.myParent;                          // 2965
                            callUnitConversionData.lastPosition = sameRatioIndicators.position;                        // 2966
                            callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;                        // 2967
                                                                                                                       // 2968
                            /***************************                                                               // 2969
                               Element-Specific Units                                                                  // 2970
                            ***************************/                                                               // 2971
                                                                                                                       // 2972
                            /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
                               of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */   // 2974
                            var measurement = 100,                                                                     // 2975
                                unitRatios = {};                                                                       // 2976
                                                                                                                       // 2977
                            if (!sameEmRatio || !samePercentRatio) {                                                   // 2978
                                var dummy = Data(element).isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
                                                                                                                       // 2980
                                Velocity.init(dummy);                                                                  // 2981
                                sameRatioIndicators.myParent.appendChild(dummy);                                       // 2982
                                                                                                                       // 2983
                                /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
                                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
                                /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
                                $.each([ "overflow", "overflowX", "overflowY" ], function(i, property) {               // 2987
                                    Velocity.CSS.setPropertyValue(dummy, property, "hidden");                          // 2988
                                });                                                                                    // 2989
                                Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);        // 2990
                                Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);        // 2991
                                Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");                      // 2992
                                                                                                                       // 2993
                                /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
                                $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(i, property) {
                                    Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");                 // 2996
                                });                                                                                    // 2997
                                /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */             // 2998
                                Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");               // 2999
                                                                                                                       // 3000
                                /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
                                unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */
                                                                                                                       // 3005
                                sameRatioIndicators.myParent.removeChild(dummy);                                       // 3006
                            } else {                                                                                   // 3007
                                unitRatios.emToPx = callUnitConversionData.lastEmToPx;                                 // 3008
                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;             // 3009
                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;           // 3010
                            }                                                                                          // 3011
                                                                                                                       // 3012
                            /***************************                                                               // 3013
                               Element-Agnostic Units                                                                  // 3014
                            ***************************/                                                               // 3015
                                                                                                                       // 3016
                            /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
                               once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
                               that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
                               so we calculate it now. */                                                              // 3020
                            if (callUnitConversionData.remToPx === null) {                                             // 3021
                                /* Default to browsers' default fontSize of 16px in the case of 0. */                  // 3022
                                callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
                            }                                                                                          // 3024
                                                                                                                       // 3025
                            /* Similarly, viewport units are %-relative to the window's inner dimensions. */           // 3026
                            if (callUnitConversionData.vwToPx === null) {                                              // 3027
                                callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */         // 3028
                                callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */        // 3029
                            }                                                                                          // 3030
                                                                                                                       // 3031
                            unitRatios.remToPx = callUnitConversionData.remToPx;                                       // 3032
                            unitRatios.vwToPx = callUnitConversionData.vwToPx;                                         // 3033
                            unitRatios.vhToPx = callUnitConversionData.vhToPx;                                         // 3034
                                                                                                                       // 3035
                            if (Velocity.debug >= 1) console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
                                                                                                                       // 3037
                            return unitRatios;                                                                         // 3038
                        }                                                                                              // 3039
                                                                                                                       // 3040
                        /********************                                                                          // 3041
                           Unit Conversion                                                                             // 3042
                        ********************/                                                                          // 3043
                                                                                                                       // 3044
                        /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
                        if (/[\/*]/.test(operator)) {                                                                  // 3046
                            endValueUnitType = startValueUnitType;                                                     // 3047
                        /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
                           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
                           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
                           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
                        /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
                        } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {                    // 3053
                            /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
                            /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
                               match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
                               which remains past the point of the animation's completion. */                          // 3057
                            if (endValue === 0) {                                                                      // 3058
                                endValueUnitType = startValueUnitType;                                                 // 3059
                            } else {                                                                                   // 3060
                                /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
                                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
                                elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();        // 3063
                                                                                                                       // 3064
                                /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
                                /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
                                var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
                                                                                                                       // 3068
                                /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
                                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
                                switch (startValueUnitType) {                                                          // 3071
                                    case "%":                                                                          // 3072
                                        /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
                                           Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
                                           to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
                                        startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                                        break;                                                                         // 3077
                                                                                                                       // 3078
                                    case "px":                                                                         // 3079
                                        /* px acts as our midpoint in the unit conversion process; do nothing. */      // 3080
                                        break;                                                                         // 3081
                                                                                                                       // 3082
                                    default:                                                                           // 3083
                                        startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];          // 3084
                                }                                                                                      // 3085
                                                                                                                       // 3086
                                /* Invert the px ratios to convert into to the target unit. */                         // 3087
                                switch (endValueUnitType) {                                                            // 3088
                                    case "%":                                                                          // 3089
                                        startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
                                        break;                                                                         // 3091
                                                                                                                       // 3092
                                    case "px":                                                                         // 3093
                                        /* startValue is already in px, do nothing; we're done. */                     // 3094
                                        break;                                                                         // 3095
                                                                                                                       // 3096
                                    default:                                                                           // 3097
                                        startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];        // 3098
                                }                                                                                      // 3099
                            }                                                                                          // 3100
                        }                                                                                              // 3101
                                                                                                                       // 3102
                        /*********************                                                                         // 3103
                           Relative Values                                                                             // 3104
                        *********************/                                                                         // 3105
                                                                                                                       // 3106
                        /* Operator logic must be performed last since it requires unit-normalized start and end values. */
                        /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
                           to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
                           50 points is added on top of the current % value. */                                        // 3110
                        switch (operator) {                                                                            // 3111
                            case "+":                                                                                  // 3112
                                endValue = startValue + endValue;                                                      // 3113
                                break;                                                                                 // 3114
                                                                                                                       // 3115
                            case "-":                                                                                  // 3116
                                endValue = startValue - endValue;                                                      // 3117
                                break;                                                                                 // 3118
                                                                                                                       // 3119
                            case "*":                                                                                  // 3120
                                endValue = startValue * endValue;                                                      // 3121
                                break;                                                                                 // 3122
                                                                                                                       // 3123
                            case "/":                                                                                  // 3124
                                endValue = startValue / endValue;                                                      // 3125
                                break;                                                                                 // 3126
                        }                                                                                              // 3127
                                                                                                                       // 3128
                        /**************************                                                                    // 3129
                           tweensContainer Push                                                                        // 3130
                        **************************/                                                                    // 3131
                                                                                                                       // 3132
                        /* Construct the per-property tween object, and push it to the element's tweensContainer. */   // 3133
                        tweensContainer[property] = {                                                                  // 3134
                            rootPropertyValue: rootPropertyValue,                                                      // 3135
                            startValue: startValue,                                                                    // 3136
                            currentValue: startValue,                                                                  // 3137
                            endValue: endValue,                                                                        // 3138
                            unitType: endValueUnitType,                                                                // 3139
                            easing: easing                                                                             // 3140
                        };                                                                                             // 3141
                                                                                                                       // 3142
                        if (Velocity.debug) console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
                    }                                                                                                  // 3144
                                                                                                                       // 3145
                    /* Along with its property data, store a reference to the element itself onto tweensContainer. */  // 3146
                    tweensContainer.element = element;                                                                 // 3147
                }                                                                                                      // 3148
                                                                                                                       // 3149
                /*****************                                                                                     // 3150
                    Call Push                                                                                          // 3151
                *****************/                                                                                     // 3152
                                                                                                                       // 3153
                /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
                   being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
                if (tweensContainer.element) {                                                                         // 3156
                    /* Apply the "velocity-animating" indicator class. */                                              // 3157
                    CSS.Values.addClass(element, "velocity-animating");                                                // 3158
                                                                                                                       // 3159
                    /* The call array houses the tweensContainers for each element being animated in the current call. */
                    call.push(tweensContainer);                                                                        // 3161
                                                                                                                       // 3162
                    /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
                    if (opts.queue === "") {                                                                           // 3164
                        Data(element).tweensContainer = tweensContainer;                                               // 3165
                        Data(element).opts = opts;                                                                     // 3166
                    }                                                                                                  // 3167
                                                                                                                       // 3168
                    /* Switch on the element's animating flag. */                                                      // 3169
                    Data(element).isAnimating = true;                                                                  // 3170
                                                                                                                       // 3171
                    /* Once the final element in this call's element set has been processed, push the call array onto  // 3172
                       Velocity.State.calls for the animation tick to immediately begin processing. */                 // 3173
                    if (elementsIndex === elementsLength - 1) {                                                        // 3174
                        /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
                           Anything on this call container is subjected to tick() processing. */                       // 3176
                        Velocity.State.calls.push([ call, elements, opts, null, promiseData.resolver ]);               // 3177
                                                                                                                       // 3178
                        /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
                        if (Velocity.State.isTicking === false) {                                                      // 3180
                            Velocity.State.isTicking = true;                                                           // 3181
                                                                                                                       // 3182
                            /* Start the tick loop. */                                                                 // 3183
                            tick();                                                                                    // 3184
                        }                                                                                              // 3185
                    } else {                                                                                           // 3186
                        elementsIndex++;                                                                               // 3187
                    }                                                                                                  // 3188
                }                                                                                                      // 3189
            }                                                                                                          // 3190
                                                                                                                       // 3191
            /* When the queue option is set to false, the call skips the element's queue and fires immediately. */     // 3192
            if (opts.queue === false) {                                                                                // 3193
                /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
                   we manually inject the delay property here with an explicit setTimeout. */                          // 3195
                if (opts.delay) {                                                                                      // 3196
                    setTimeout(buildQueue, opts.delay);                                                                // 3197
                } else {                                                                                               // 3198
                    buildQueue();                                                                                      // 3199
                }                                                                                                      // 3200
            /* Otherwise, the call undergoes element queueing as normal. */                                            // 3201
            /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */     // 3202
            } else {                                                                                                   // 3203
                $.queue(element, opts.queue, function(next, clearQueue) {                                              // 3204
                    /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
                       so it's fine if this is repeatedly triggered for each element in the associated call.) */       // 3206
                    if (clearQueue === true) {                                                                         // 3207
                        if (promiseData.promise) {                                                                     // 3208
                            promiseData.resolver(elements);                                                            // 3209
                        }                                                                                              // 3210
                                                                                                                       // 3211
                        /* Do not continue with animation queueing. */                                                 // 3212
                        return true;                                                                                   // 3213
                    }                                                                                                  // 3214
                                                                                                                       // 3215
                    /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
                       See completeCall() for further details. */                                                      // 3217
                    Velocity.velocityQueueEntryFlag = true;                                                            // 3218
                                                                                                                       // 3219
                    buildQueue(next);                                                                                  // 3220
                });                                                                                                    // 3221
            }                                                                                                          // 3222
                                                                                                                       // 3223
            /*********************                                                                                     // 3224
                Auto-Dequeuing                                                                                         // 3225
            *********************/                                                                                     // 3226
                                                                                                                       // 3227
            /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element // 3228
               must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
               for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
               queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
               first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
            /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
               each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
            /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.   // 3235
               Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */   // 3236
            if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {                  // 3237
                $.dequeue(element);                                                                                    // 3238
            }                                                                                                          // 3239
        }                                                                                                              // 3240
                                                                                                                       // 3241
        /**************************                                                                                    // 3242
           Element Set Iteration                                                                                       // 3243
        **************************/                                                                                    // 3244
                                                                                                                       // 3245
        /* If the "nodeType" property exists on the elements variable, we're animating a single element.               // 3246
           Place it in an array so that $.each() can iterate over it. */                                               // 3247
        $.each(elements, function(i, element) {                                                                        // 3248
            /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */            // 3249
            if (Type.isNode(element)) {                                                                                // 3250
                processElement.call(element);                                                                          // 3251
            }                                                                                                          // 3252
        });                                                                                                            // 3253
                                                                                                                       // 3254
        /******************                                                                                            // 3255
           Option: Loop                                                                                                // 3256
        ******************/                                                                                            // 3257
                                                                                                                       // 3258
        /* The loop option accepts an integer indicating how many times the element should loop between the values in the
           current call's properties map and the element's property values prior to this call. */                      // 3260
        /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
           to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
           which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */          // 3263
        var opts = $.extend({}, Velocity.defaults, options),                                                           // 3264
            reverseCallsCount;                                                                                         // 3265
                                                                                                                       // 3266
        opts.loop = parseInt(opts.loop);                                                                               // 3267
        reverseCallsCount = (opts.loop * 2) - 1;                                                                       // 3268
                                                                                                                       // 3269
        if (opts.loop) {                                                                                               // 3270
            /* Double the loop count to convert it into its appropriate number of "reverse" calls.                     // 3271
               Subtract 1 from the resulting value since the current call is included in the total alternation count. */
            for (var x = 0; x < reverseCallsCount; x++) {                                                              // 3273
                /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
                   isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
                   call so that the delay logic that occurs inside *Pre-Queueing* can process it. */                   // 3276
                var reverseOptions = {                                                                                 // 3277
                    delay: opts.delay,                                                                                 // 3278
                    progress: opts.progress                                                                            // 3279
                };                                                                                                     // 3280
                                                                                                                       // 3281
                /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
                   so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
                if (x === reverseCallsCount - 1) {                                                                     // 3284
                    reverseOptions.display = opts.display;                                                             // 3285
                    reverseOptions.visibility = opts.visibility;                                                       // 3286
                    reverseOptions.complete = opts.complete;                                                           // 3287
                }                                                                                                      // 3288
                                                                                                                       // 3289
                animate(elements, "reverse", reverseOptions);                                                          // 3290
            }                                                                                                          // 3291
        }                                                                                                              // 3292
                                                                                                                       // 3293
        /***************                                                                                               // 3294
            Chaining                                                                                                   // 3295
        ***************/                                                                                               // 3296
                                                                                                                       // 3297
        /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
        return getChain();                                                                                             // 3299
    };                                                                                                                 // 3300
                                                                                                                       // 3301
    /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */                   // 3302
    Velocity = $.extend(animate, Velocity);                                                                            // 3303
    /* For legacy support, also expose the literal animate method. */                                                  // 3304
    Velocity.animate = animate;                                                                                        // 3305
                                                                                                                       // 3306
    /**************                                                                                                    // 3307
        Timing                                                                                                         // 3308
    **************/                                                                                                    // 3309
                                                                                                                       // 3310
    /* Ticker function. */                                                                                             // 3311
    var ticker = window.requestAnimationFrame || rAFShim;                                                              // 3312
                                                                                                                       // 3313
    /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
       To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
       devices to avoid wasting battery power on inactive tabs. */                                                     // 3316
    /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
    if (!Velocity.State.isMobile && document.hidden !== undefined) {                                                   // 3318
        document.addEventListener("visibilitychange", function() {                                                     // 3319
            /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */    // 3320
            if (document.hidden) {                                                                                     // 3321
                ticker = function(callback) {                                                                          // 3322
                    /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
                    return setTimeout(function() { callback(true) }, 16);                                              // 3324
                };                                                                                                     // 3325
                                                                                                                       // 3326
                /* The rAF loop has been paused by the browser, so we manually restart the tick. */                    // 3327
                tick();                                                                                                // 3328
            } else {                                                                                                   // 3329
                ticker = window.requestAnimationFrame || rAFShim;                                                      // 3330
            }                                                                                                          // 3331
        });                                                                                                            // 3332
    }                                                                                                                  // 3333
                                                                                                                       // 3334
    /************                                                                                                      // 3335
        Tick                                                                                                           // 3336
    ************/                                                                                                      // 3337
                                                                                                                       // 3338
    /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
    function tick (timestamp) {                                                                                        // 3340
        /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.    // 3341
           We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever    // 3342
           the browser's next tick sync time occurs, which results in the first elements subjected to Velocity         // 3343
           calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore     // 3344
           the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
           by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
        if (timestamp) {                                                                                               // 3347
            /* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is      // 3348
               under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */    // 3349
            var timeCurrent = (new Date).getTime();                                                                    // 3350
                                                                                                                       // 3351
            /********************                                                                                      // 3352
               Call Iteration                                                                                          // 3353
            ********************/                                                                                      // 3354
                                                                                                                       // 3355
            var callsLength = Velocity.State.calls.length;                                                             // 3356
                                                                                                                       // 3357
            /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
               when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
               has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
            if (callsLength > 10000) {                                                                                 // 3361
                Velocity.State.calls = compactSparseArray(Velocity.State.calls);                                       // 3362
            }                                                                                                          // 3363
                                                                                                                       // 3364
            /* Iterate through each active call. */                                                                    // 3365
            for (var i = 0; i < callsLength; i++) {                                                                    // 3366
                /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
                if (!Velocity.State.calls[i]) {                                                                        // 3368
                    continue;                                                                                          // 3369
                }                                                                                                      // 3370
                                                                                                                       // 3371
                /************************                                                                              // 3372
                   Call-Wide Variables                                                                                 // 3373
                ************************/                                                                              // 3374
                                                                                                                       // 3375
                var callContainer = Velocity.State.calls[i],                                                           // 3376
                    call = callContainer[0],                                                                           // 3377
                    opts = callContainer[2],                                                                           // 3378
                    timeStart = callContainer[3],                                                                      // 3379
                    firstTick = !!timeStart,                                                                           // 3380
                    tweenDummyValue = null;                                                                            // 3381
                                                                                                                       // 3382
                /* If timeStart is undefined, then this is the first time that this call has been processed by tick(). // 3383
                   We assign timeStart now so that its value is as close to the real animation start time as possible. // 3384
                   (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay // 3385
                   between that time and now would cause the first few frames of the tween to be skipped since         // 3386
                   percentComplete is calculated relative to timeStart.) */                                            // 3387
                /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the  // 3388
                   first tick iteration isn't wasted by animating at 0% tween completion, which would produce the      // 3389
                   same style value as the element's current value. */                                                 // 3390
                if (!timeStart) {                                                                                      // 3391
                    timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;                                         // 3392
                }                                                                                                      // 3393
                                                                                                                       // 3394
                /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
                   (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
                   Accordingly, we ensure that percentComplete does not exceed 1. */                                   // 3397
                var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);                          // 3398
                                                                                                                       // 3399
                /**********************                                                                                // 3400
                   Element Iteration                                                                                   // 3401
                **********************/                                                                                // 3402
                                                                                                                       // 3403
                /* For every call, iterate through each of the elements in its set. */                                 // 3404
                for (var j = 0, callLength = call.length; j < callLength; j++) {                                       // 3405
                    var tweensContainer = call[j],                                                                     // 3406
                        element = tweensContainer.element;                                                             // 3407
                                                                                                                       // 3408
                    /* Check to see if this element has been deleted midway through the animation by checking for the  // 3409
                       continued existence of its data cache. If it's gone, skip animating this element. */            // 3410
                    if (!Data(element)) {                                                                              // 3411
                        continue;                                                                                      // 3412
                    }                                                                                                  // 3413
                                                                                                                       // 3414
                    var transformPropertyExists = false;                                                               // 3415
                                                                                                                       // 3416
                    /**********************************                                                                // 3417
                       Display & Visibility Toggling                                                                   // 3418
                    **********************************/                                                                // 3419
                                                                                                                       // 3420
                    /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
                       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
                    if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {              // 3423
                        if (opts.display === "flex") {                                                                 // 3424
                            var flexValues = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];             // 3425
                                                                                                                       // 3426
                            $.each(flexValues, function(i, flexValue) {                                                // 3427
                                CSS.setPropertyValue(element, "display", flexValue);                                   // 3428
                            });                                                                                        // 3429
                        }                                                                                              // 3430
                                                                                                                       // 3431
                        CSS.setPropertyValue(element, "display", opts.display);                                        // 3432
                    }                                                                                                  // 3433
                                                                                                                       // 3434
                    /* Same goes with the visibility option, but its "none" equivalent is "hidden". */                 // 3435
                    if (opts.visibility !== undefined && opts.visibility !== "hidden") {                               // 3436
                        CSS.setPropertyValue(element, "visibility", opts.visibility);                                  // 3437
                    }                                                                                                  // 3438
                                                                                                                       // 3439
                    /************************                                                                          // 3440
                       Property Iteration                                                                              // 3441
                    ************************/                                                                          // 3442
                                                                                                                       // 3443
                    /* For every element, iterate through each property. */                                            // 3444
                    for (var property in tweensContainer) {                                                            // 3445
                        /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
                        if (property !== "element") {                                                                  // 3447
                            var tween = tweensContainer[property],                                                     // 3448
                                currentValue,                                                                          // 3449
                                /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
                                   on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
                                easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;  // 3452
                                                                                                                       // 3453
                            /******************************                                                            // 3454
                               Current Value Calculation                                                               // 3455
                            ******************************/                                                            // 3456
                                                                                                                       // 3457
                            /* If this is the last tick pass (if we've reached 100% completion for this tween),        // 3458
                               ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
                            if (percentComplete === 1) {                                                               // 3460
                                currentValue = tween.endValue;                                                         // 3461
                            /* Otherwise, calculate currentValue based on the current delta from startValue. */        // 3462
                            } else {                                                                                   // 3463
                                var tweenDelta = tween.endValue - tween.startValue;                                    // 3464
                                currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
                                                                                                                       // 3466
                                /* If no value change is occurring, don't proceed with DOM updating. */                // 3467
                                if (!firstTick && (currentValue === tween.currentValue)) {                             // 3468
                                    continue;                                                                          // 3469
                                }                                                                                      // 3470
                            }                                                                                          // 3471
                                                                                                                       // 3472
                            tween.currentValue = currentValue;                                                         // 3473
                                                                                                                       // 3474
                            /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
                               it can be passed into the progress callback. */                                         // 3476
                            if (property === "tween") {                                                                // 3477
                                tweenDummyValue = currentValue;                                                        // 3478
                            } else {                                                                                   // 3479
                                /******************                                                                    // 3480
                                   Hooks: Part I                                                                       // 3481
                                ******************/                                                                    // 3482
                                                                                                                       // 3483
                                /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
                                   for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
                                   rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
                                   updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
                                   subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
                                if (CSS.Hooks.registered[property]) {                                                  // 3489
                                    var hookRoot = CSS.Hooks.getRoot(property),                                        // 3490
                                        rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];       // 3491
                                                                                                                       // 3492
                                    if (rootPropertyValueCache) {                                                      // 3493
                                        tween.rootPropertyValue = rootPropertyValueCache;                              // 3494
                                    }                                                                                  // 3495
                                }                                                                                      // 3496
                                                                                                                       // 3497
                                /*****************                                                                     // 3498
                                    DOM Update                                                                         // 3499
                                *****************/                                                                     // 3500
                                                                                                                       // 3501
                                /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
                                /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
                                var adjustedSetData = CSS.setPropertyValue(element, /* SET */                          // 3504
                                                                           property,                                   // 3505
                                                                           tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType),
                                                                           tween.rootPropertyValue,                    // 3507
                                                                           tween.scrollData);                          // 3508
                                                                                                                       // 3509
                                /*******************                                                                   // 3510
                                   Hooks: Part II                                                                      // 3511
                                *******************/                                                                   // 3512
                                                                                                                       // 3513
                                /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
                                if (CSS.Hooks.registered[property]) {                                                  // 3515
                                    /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
                                    if (CSS.Normalizations.registered[hookRoot]) {                                     // 3517
                                        Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
                                    } else {                                                                           // 3519
                                        Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];           // 3520
                                    }                                                                                  // 3521
                                }                                                                                      // 3522
                                                                                                                       // 3523
                                /***************                                                                       // 3524
                                   Transforms                                                                          // 3525
                                ***************/                                                                       // 3526
                                                                                                                       // 3527
                                /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
                                if (adjustedSetData[0] === "transform") {                                              // 3529
                                    transformPropertyExists = true;                                                    // 3530
                                }                                                                                      // 3531
                                                                                                                       // 3532
                            }                                                                                          // 3533
                        }                                                                                              // 3534
                    }                                                                                                  // 3535
                                                                                                                       // 3536
                    /****************                                                                                  // 3537
                        mobileHA                                                                                       // 3538
                    ****************/                                                                                  // 3539
                                                                                                                       // 3540
                    /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.   // 3541
                       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
                    if (opts.mobileHA) {                                                                               // 3543
                        /* Don't set the null transform hack if we've already done so. */                              // 3544
                        if (Data(element).transformCache.translate3d === undefined) {                                  // 3545
                            /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
                            Data(element).transformCache.translate3d = "(0px, 0px, 0px)";                              // 3547
                                                                                                                       // 3548
                            transformPropertyExists = true;                                                            // 3549
                        }                                                                                              // 3550
                    }                                                                                                  // 3551
                                                                                                                       // 3552
                    if (transformPropertyExists) {                                                                     // 3553
                        CSS.flushTransformCache(element);                                                              // 3554
                    }                                                                                                  // 3555
                }                                                                                                      // 3556
                                                                                                                       // 3557
                /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
                   Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */      // 3559
                if (opts.display !== undefined && opts.display !== "none") {                                           // 3560
                    Velocity.State.calls[i][2].display = false;                                                        // 3561
                }                                                                                                      // 3562
                if (opts.visibility !== undefined && opts.visibility !== "hidden") {                                   // 3563
                    Velocity.State.calls[i][2].visibility = false;                                                     // 3564
                }                                                                                                      // 3565
                                                                                                                       // 3566
                /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
                if (opts.progress) {                                                                                   // 3568
                    opts.progress.call(callContainer[1],                                                               // 3569
                                       callContainer[1],                                                               // 3570
                                       percentComplete,                                                                // 3571
                                       Math.max(0, (timeStart + opts.duration) - timeCurrent),                         // 3572
                                       timeStart,                                                                      // 3573
                                       tweenDummyValue);                                                               // 3574
                }                                                                                                      // 3575
                                                                                                                       // 3576
                /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */     // 3577
                if (percentComplete === 1) {                                                                           // 3578
                    completeCall(i);                                                                                   // 3579
                }                                                                                                      // 3580
            }                                                                                                          // 3581
        }                                                                                                              // 3582
                                                                                                                       // 3583
        /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
        if (Velocity.State.isTicking) {                                                                                // 3585
            ticker(tick);                                                                                              // 3586
        }                                                                                                              // 3587
    }                                                                                                                  // 3588
                                                                                                                       // 3589
    /**********************                                                                                            // 3590
        Call Completion                                                                                                // 3591
    **********************/                                                                                            // 3592
                                                                                                                       // 3593
    /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
    function completeCall (callIndex, isStopped) {                                                                     // 3595
        /* Ensure the call exists. */                                                                                  // 3596
        if (!Velocity.State.calls[callIndex]) {                                                                        // 3597
            return false;                                                                                              // 3598
        }                                                                                                              // 3599
                                                                                                                       // 3600
        /* Pull the metadata from the call. */                                                                         // 3601
        var call = Velocity.State.calls[callIndex][0],                                                                 // 3602
            elements = Velocity.State.calls[callIndex][1],                                                             // 3603
            opts = Velocity.State.calls[callIndex][2],                                                                 // 3604
            resolver = Velocity.State.calls[callIndex][4];                                                             // 3605
                                                                                                                       // 3606
        var remainingCallsExist = false;                                                                               // 3607
                                                                                                                       // 3608
        /*************************                                                                                     // 3609
           Element Finalization                                                                                        // 3610
        *************************/                                                                                     // 3611
                                                                                                                       // 3612
        for (var i = 0, callLength = call.length; i < callLength; i++) {                                               // 3613
            var element = call[i].element;                                                                             // 3614
                                                                                                                       // 3615
            /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
            /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */                  // 3617
            /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
            if (!isStopped && !opts.loop) {                                                                            // 3619
                if (opts.display === "none") {                                                                         // 3620
                    CSS.setPropertyValue(element, "display", opts.display);                                            // 3621
                }                                                                                                      // 3622
                                                                                                                       // 3623
                if (opts.visibility === "hidden") {                                                                    // 3624
                    CSS.setPropertyValue(element, "visibility", opts.visibility);                                      // 3625
                }                                                                                                      // 3626
            }                                                                                                          // 3627
                                                                                                                       // 3628
            /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
               a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
               an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
               we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
               is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */                 // 3633
            if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
                /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */  // 3635
                if (Data(element)) {                                                                                   // 3636
                    Data(element).isAnimating = false;                                                                 // 3637
                    /* Clear the element's rootPropertyValueCache, which will become stale. */                         // 3638
                    Data(element).rootPropertyValueCache = {};                                                         // 3639
                                                                                                                       // 3640
                    var transformHAPropertyExists = false;                                                             // 3641
                    /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
                    $.each(CSS.Lists.transforms3D, function(i, transformName) {                                        // 3643
                        var defaultValue = /^scale/.test(transformName) ? 1 : 0,                                       // 3644
                            currentValue = Data(element).transformCache[transformName];                                // 3645
                                                                                                                       // 3646
                        if (Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
                            transformHAPropertyExists = true;                                                          // 3648
                                                                                                                       // 3649
                            delete Data(element).transformCache[transformName];                                        // 3650
                        }                                                                                              // 3651
                    });                                                                                                // 3652
                                                                                                                       // 3653
                    /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
                    if (opts.mobileHA) {                                                                               // 3655
                        transformHAPropertyExists = true;                                                              // 3656
                        delete Data(element).transformCache.translate3d;                                               // 3657
                    }                                                                                                  // 3658
                                                                                                                       // 3659
                    /* Flush the subproperty removals to the DOM. */                                                   // 3660
                    if (transformHAPropertyExists) {                                                                   // 3661
                        CSS.flushTransformCache(element);                                                              // 3662
                    }                                                                                                  // 3663
                                                                                                                       // 3664
                    /* Remove the "velocity-animating" indicator class. */                                             // 3665
                    CSS.Values.removeClass(element, "velocity-animating");                                             // 3666
                }                                                                                                      // 3667
            }                                                                                                          // 3668
                                                                                                                       // 3669
            /*********************                                                                                     // 3670
               Option: Complete                                                                                        // 3671
            *********************/                                                                                     // 3672
                                                                                                                       // 3673
            /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
            /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */                  // 3675
            if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {                                 // 3676
                /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
                try {                                                                                                  // 3678
                    opts.complete.call(elements, elements);                                                            // 3679
                } catch (error) {                                                                                      // 3680
                    setTimeout(function() { throw error; }, 1);                                                        // 3681
                }                                                                                                      // 3682
            }                                                                                                          // 3683
                                                                                                                       // 3684
            /**********************                                                                                    // 3685
               Promise Resolving                                                                                       // 3686
            **********************/                                                                                    // 3687
                                                                                                                       // 3688
            /* Note: Infinite loops don't return promises. */                                                          // 3689
            if (resolver && opts.loop !== true) {                                                                      // 3690
                resolver(elements);                                                                                    // 3691
            }                                                                                                          // 3692
                                                                                                                       // 3693
            /****************************                                                                              // 3694
               Option: Loop (Infinite)                                                                                 // 3695
            ****************************/                                                                              // 3696
                                                                                                                       // 3697
            if (opts.loop === true && !isStopped) {                                                                    // 3698
                /* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
                   continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */ // 3700
                $.each(Data(element).tweensContainer, function(propertyName, tweenContainer) {                         // 3701
                    if (/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360) {                 // 3702
                        tweenContainer.endValue = 0;                                                                   // 3703
                        tweenContainer.startValue = 360;                                                               // 3704
                    }                                                                                                  // 3705
                                                                                                                       // 3706
                    if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
                        tweenContainer.endValue = 0;                                                                   // 3708
                        tweenContainer.startValue = 100;                                                               // 3709
                    }                                                                                                  // 3710
                });                                                                                                    // 3711
                                                                                                                       // 3712
                Velocity(element, "reverse", { loop: true, delay: opts.delay });                                       // 3713
            }                                                                                                          // 3714
                                                                                                                       // 3715
            /***************                                                                                           // 3716
               Dequeueing                                                                                              // 3717
            ***************/                                                                                           // 3718
                                                                                                                       // 3719
            /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
               which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
               $.dequeue() must still be called in order to completely clear jQuery's animation queue. */              // 3722
            if (opts.queue !== false) {                                                                                // 3723
                $.dequeue(element, opts.queue);                                                                        // 3724
            }                                                                                                          // 3725
        }                                                                                                              // 3726
                                                                                                                       // 3727
        /************************                                                                                      // 3728
           Calls Array Cleanup                                                                                         // 3729
        ************************/                                                                                      // 3730
                                                                                                                       // 3731
        /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
          (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
        Velocity.State.calls[callIndex] = false;                                                                       // 3734
                                                                                                                       // 3735
        /* Iterate through the calls array to determine if this was the final in-progress animation.                   // 3736
           If so, set a flag to end ticking and clear the calls array. */                                              // 3737
        for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {                             // 3738
            if (Velocity.State.calls[j] !== false) {                                                                   // 3739
                remainingCallsExist = true;                                                                            // 3740
                                                                                                                       // 3741
                break;                                                                                                 // 3742
            }                                                                                                          // 3743
        }                                                                                                              // 3744
                                                                                                                       // 3745
        if (remainingCallsExist === false) {                                                                           // 3746
            /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */               // 3747
            Velocity.State.isTicking = false;                                                                          // 3748
                                                                                                                       // 3749
            /* Clear the calls array so that its length is reset. */                                                   // 3750
            delete Velocity.State.calls;                                                                               // 3751
            Velocity.State.calls = [];                                                                                 // 3752
        }                                                                                                              // 3753
    }                                                                                                                  // 3754
                                                                                                                       // 3755
    /******************                                                                                                // 3756
        Frameworks                                                                                                     // 3757
    ******************/                                                                                                // 3758
                                                                                                                       // 3759
    /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
       If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
       also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
       accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
       (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
    global.Velocity = Velocity;                                                                                        // 3765
                                                                                                                       // 3766
    if (global !== window) {                                                                                           // 3767
        /* Assign the element function to Velocity's core animate() method. */                                         // 3768
        global.fn.velocity = animate;                                                                                  // 3769
        /* Assign the object function's defaults to Velocity's global defaults object. */                              // 3770
        global.fn.velocity.defaults = Velocity.defaults;                                                               // 3771
    }                                                                                                                  // 3772
                                                                                                                       // 3773
    /***********************                                                                                           // 3774
       Packaged Redirects                                                                                              // 3775
    ***********************/                                                                                           // 3776
                                                                                                                       // 3777
    /* slideUp, slideDown */                                                                                           // 3778
    $.each([ "Down", "Up" ], function(i, direction) {                                                                  // 3779
        Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
            var opts = $.extend({}, options),                                                                          // 3781
                begin = opts.begin,                                                                                    // 3782
                complete = opts.complete,                                                                              // 3783
                computedValues = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },   // 3784
                inlineValues = {};                                                                                     // 3785
                                                                                                                       // 3786
            if (opts.display === undefined) {                                                                          // 3787
                /* Show the element before slideDown begins and hide the element after slideUp completes. */           // 3788
                /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */      // 3789
                opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
            }                                                                                                          // 3791
                                                                                                                       // 3792
            opts.begin = function() {                                                                                  // 3793
                /* If the user passed in a begin callback, fire it now. */                                             // 3794
                begin && begin.call(elements, elements);                                                               // 3795
                                                                                                                       // 3796
                /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
                for (var property in computedValues) {                                                                 // 3798
                    inlineValues[property] = element.style[property];                                                  // 3799
                                                                                                                       // 3800
                    /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,         // 3801
                       use forcefeeding to start from computed values and animate down to 0. */                        // 3802
                    var propertyValue = Velocity.CSS.getPropertyValue(element, property);                              // 3803
                    computedValues[property] = (direction === "Down") ? [ propertyValue, 0 ] : [ 0, propertyValue ];   // 3804
                }                                                                                                      // 3805
                                                                                                                       // 3806
                /* Force vertical overflow content to clip so that sliding works as expected. */                       // 3807
                inlineValues.overflow = element.style.overflow;                                                        // 3808
                element.style.overflow = "hidden";                                                                     // 3809
            }                                                                                                          // 3810
                                                                                                                       // 3811
            opts.complete = function() {                                                                               // 3812
                /* Reset element to its pre-slide inline values once its slide animation is complete. */               // 3813
                for (var property in inlineValues) {                                                                   // 3814
                    element.style[property] = inlineValues[property];                                                  // 3815
                }                                                                                                      // 3816
                                                                                                                       // 3817
                /* If the user passed in a complete callback, fire it now. */                                          // 3818
                complete && complete.call(elements, elements);                                                         // 3819
                promiseData && promiseData.resolver(elements);                                                         // 3820
            };                                                                                                         // 3821
                                                                                                                       // 3822
            Velocity(element, computedValues, opts);                                                                   // 3823
        };                                                                                                             // 3824
    });                                                                                                                // 3825
                                                                                                                       // 3826
    /* fadeIn, fadeOut */                                                                                              // 3827
    $.each([ "In", "Out" ], function(i, direction) {                                                                   // 3828
        Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
            var opts = $.extend({}, options),                                                                          // 3830
                propertiesMap = { opacity: (direction === "In") ? 1 : 0 },                                             // 3831
                originalComplete = opts.complete;                                                                      // 3832
                                                                                                                       // 3833
            /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
               callbacks by firing them only when the final element has been reached. */                               // 3835
            if (elementsIndex !== elementsSize - 1) {                                                                  // 3836
                opts.complete = opts.begin = null;                                                                     // 3837
            } else {                                                                                                   // 3838
                opts.complete = function() {                                                                           // 3839
                    if (originalComplete) {                                                                            // 3840
                        originalComplete.call(elements, elements);                                                     // 3841
                    }                                                                                                  // 3842
                                                                                                                       // 3843
                    promiseData && promiseData.resolver(elements);                                                     // 3844
                }                                                                                                      // 3845
            }                                                                                                          // 3846
                                                                                                                       // 3847
            /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
            /* Note: We allow users to pass in "null" to skip display setting altogether. */                           // 3849
            if (opts.display === undefined) {                                                                          // 3850
                opts.display = (direction === "In" ? "auto" : "none");                                                 // 3851
            }                                                                                                          // 3852
                                                                                                                       // 3853
            Velocity(this, propertiesMap, opts);                                                                       // 3854
        };                                                                                                             // 3855
    });                                                                                                                // 3856
                                                                                                                       // 3857
    return Velocity;                                                                                                   // 3858
}((window.jQuery || window.Zepto || window), window, document);                                                        // 3859
}));                                                                                                                   // 3860
                                                                                                                       // 3861
/******************                                                                                                    // 3862
   Known Issues                                                                                                        // 3863
******************/                                                                                                    // 3864
                                                                                                                       // 3865
/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.    // 3866
Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties      // 3867
will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/percolate:velocityjs/velocity.ui.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**********************                                                                                                // 1
   Velocity UI Pack                                                                                                    // 2
**********************/                                                                                                // 3
                                                                                                                       // 4
/* VelocityJS.org UI Pack (5.0.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
                                                                                                                       // 6
;(function (factory) {                                                                                                 // 7
    /* CommonJS module. */                                                                                             // 8
    if (typeof require === "function" && typeof exports === "object" ) {                                               // 9
        module.exports = factory();                                                                                    // 10
    /* AMD module. */                                                                                                  // 11
    } else if (typeof define === "function" && define.amd) {                                                           // 12
        define([ "velocity" ], factory);                                                                               // 13
    /* Browser globals. */                                                                                             // 14
    } else {                                                                                                           // 15
        factory();                                                                                                     // 16
    }                                                                                                                  // 17
}(function() {                                                                                                         // 18
return function (global, window, document, undefined) {                                                                // 19
                                                                                                                       // 20
    /*************                                                                                                     // 21
        Checks                                                                                                         // 22
    *************/                                                                                                     // 23
                                                                                                                       // 24
    if (!global.Velocity || !global.Velocity.Utilities) {                                                              // 25
        window.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");                   // 26
        return;                                                                                                        // 27
    } else {                                                                                                           // 28
        var Velocity = global.Velocity,                                                                                // 29
            $ = Velocity.Utilities;                                                                                    // 30
    }                                                                                                                  // 31
                                                                                                                       // 32
    var velocityVersion = Velocity.version,                                                                            // 33
        requiredVersion = { major: 1, minor: 1, patch: 0 };                                                            // 34
                                                                                                                       // 35
    function greaterSemver (primary, secondary) {                                                                      // 36
        var versionInts = [];                                                                                          // 37
                                                                                                                       // 38
        if (!primary || !secondary) { return false; }                                                                  // 39
                                                                                                                       // 40
        $.each([ primary, secondary ], function(i, versionObject) {                                                    // 41
            var versionIntsComponents = [];                                                                            // 42
                                                                                                                       // 43
            $.each(versionObject, function(component, value) {                                                         // 44
                while (value.toString().length < 5) {                                                                  // 45
                    value = "0" + value;                                                                               // 46
                }                                                                                                      // 47
                versionIntsComponents.push(value);                                                                     // 48
            });                                                                                                        // 49
                                                                                                                       // 50
            versionInts.push(versionIntsComponents.join(""))                                                           // 51
        });                                                                                                            // 52
                                                                                                                       // 53
        return (parseFloat(versionInts[0]) > parseFloat(versionInts[1]));                                              // 54
    }                                                                                                                  // 55
                                                                                                                       // 56
    if (greaterSemver(requiredVersion, velocityVersion)){                                                              // 57
        var abortError = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
        alert(abortError);                                                                                             // 59
        throw new Error(abortError);                                                                                   // 60
    }                                                                                                                  // 61
                                                                                                                       // 62
    /************************                                                                                          // 63
       Effect Registration                                                                                             // 64
    ************************/                                                                                          // 65
                                                                                                                       // 66
    /* Note: RegisterUI is a legacy name. */                                                                           // 67
    Velocity.RegisterEffect = Velocity.RegisterUI = function (effectName, properties) {                                // 68
        /* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */                   // 69
        function animateParentHeight (elements, direction, totalDuration, stagger) {                                   // 70
            var totalHeightDelta = 0,                                                                                  // 71
                parentNode;                                                                                            // 72
                                                                                                                       // 73
            /* Sum the total height (including padding and margin) of all targeted elements. */                        // 74
            $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {                                 // 75
                if (stagger) {                                                                                         // 76
                    /* Increase the totalDuration by the successive delay amounts produced by the stagger option. */   // 77
                    totalDuration += i * stagger;                                                                      // 78
                }                                                                                                      // 79
                                                                                                                       // 80
                parentNode = element.parentNode;                                                                       // 81
                                                                                                                       // 82
                $.each([ "height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(i, property) {
                    totalHeightDelta += parseFloat(Velocity.CSS.getPropertyValue(element, property));                  // 84
                });                                                                                                    // 85
            });                                                                                                        // 86
                                                                                                                       // 87
            /* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
            Velocity.animate(                                                                                          // 89
                parentNode,                                                                                            // 90
                { height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta },                                 // 91
                { queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1) }      // 92
            );                                                                                                         // 93
        }                                                                                                              // 94
                                                                                                                       // 95
        /* Register a custom redirect for each effect. */                                                              // 96
        Velocity.Redirects[effectName] = function (element, redirectOptions, elementsIndex, elementsSize, elements, promiseData) {
            var finalElement = (elementsIndex === elementsSize - 1);                                                   // 98
                                                                                                                       // 99
            if (typeof properties.defaultDuration === "function") {                                                    // 100
                properties.defaultDuration = properties.defaultDuration.call(elements, elements);                      // 101
            } else {                                                                                                   // 102
                properties.defaultDuration = parseFloat(properties.defaultDuration);                                   // 103
            }                                                                                                          // 104
                                                                                                                       // 105
            /* Iterate through each effect's call array. */                                                            // 106
            for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {                                // 107
                var call = properties.calls[callIndex],                                                                // 108
                    propertyMap = call[0],                                                                             // 109
                    redirectDuration = (redirectOptions.duration || properties.defaultDuration || 1000),               // 110
                    durationPercentage = call[1],                                                                      // 111
                    callOptions = call[2] || {},                                                                       // 112
                    opts = {};                                                                                         // 113
                                                                                                                       // 114
                /* Assign the whitelisted per-call options. */                                                         // 115
                opts.duration = redirectDuration * (durationPercentage || 1);                                          // 116
                opts.queue = redirectOptions.queue || "";                                                              // 117
                opts.easing = callOptions.easing || "ease";                                                            // 118
                opts.delay = parseFloat(callOptions.delay) || 0;                                                       // 119
                opts._cacheValues = callOptions._cacheValues || true;                                                  // 120
                                                                                                                       // 121
                /* Special processing for the first effect call. */                                                    // 122
                if (callIndex === 0) {                                                                                 // 123
                    /* If a delay was passed into the redirect, combine it with the first call's delay. */             // 124
                    opts.delay += (parseFloat(redirectOptions.delay) || 0);                                            // 125
                                                                                                                       // 126
                    if (elementsIndex === 0) {                                                                         // 127
                        opts.begin = function() {                                                                      // 128
                            /* Only trigger a begin callback on the first effect call with the first element in the set. */
                            redirectOptions.begin && redirectOptions.begin.call(elements, elements);                   // 130
                                                                                                                       // 131
                            var direction = effectName.match(/(In|Out)$/);                                             // 132
                                                                                                                       // 133
                            /* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
                               and the first RAF tick. */                                                              // 135
                            if ((direction && direction[0] === "In") && propertyMap.opacity !== undefined) {           // 136
                                $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {             // 137
                                    Velocity.CSS.setPropertyValue(element, "opacity", 0);                              // 138
                                });                                                                                    // 139
                            }                                                                                          // 140
                                                                                                                       // 141
                            /* Only trigger animateParentHeight() if we're using an In/Out transition. */              // 142
                            if (redirectOptions.animateParentHeight && direction) {                                    // 143
                                animateParentHeight(elements, direction[0], redirectDuration + opts.delay, redirectOptions.stagger);
                            }                                                                                          // 145
                        }                                                                                              // 146
                    }                                                                                                  // 147
                                                                                                                       // 148
                    /* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
                    if (redirectOptions.display !== null) {                                                            // 150
                        if (redirectOptions.display !== undefined && redirectOptions.display !== "none") {             // 151
                            opts.display = redirectOptions.display;                                                    // 152
                        } else if (/In$/.test(effectName)) {                                                           // 153
                            /* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
                            var defaultDisplay = Velocity.CSS.Values.getDisplayType(element);                          // 155
                            opts.display = (defaultDisplay === "inline") ? "inline-block" : defaultDisplay;            // 156
                        }                                                                                              // 157
                    }                                                                                                  // 158
                                                                                                                       // 159
                    if (redirectOptions.visibility && redirectOptions.visibility !== "hidden") {                       // 160
                        opts.visibility = redirectOptions.visibility;                                                  // 161
                    }                                                                                                  // 162
                }                                                                                                      // 163
                                                                                                                       // 164
                /* Special processing for the last effect call. */                                                     // 165
                if (callIndex === properties.calls.length - 1) {                                                       // 166
                    /* Append promise resolving onto the user's redirect callback. */                                  // 167
                    function injectFinalCallbacks () {                                                                 // 168
                        if ((redirectOptions.display === undefined || redirectOptions.display === "none") && /Out$/.test(effectName)) {
                            $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {                 // 170
                                Velocity.CSS.setPropertyValue(element, "display", "none");                             // 171
                            });                                                                                        // 172
                        }                                                                                              // 173
                                                                                                                       // 174
                        redirectOptions.complete && redirectOptions.complete.call(elements, elements);                 // 175
                                                                                                                       // 176
                        if (promiseData) {                                                                             // 177
                            promiseData.resolver(elements || element);                                                 // 178
                        }                                                                                              // 179
                    }                                                                                                  // 180
                                                                                                                       // 181
                    opts.complete = function() {                                                                       // 182
                        if (properties.reset) {                                                                        // 183
                            for (var resetProperty in properties.reset) {                                              // 184
                                var resetValue = properties.reset[resetProperty];                                      // 185
                                                                                                                       // 186
                                /* Format each non-array value in the reset property map to [ value, value ] so that changes apply
                                   immediately and DOM querying is avoided (via forcefeeding). */                      // 188
                                /* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */
                                if (Velocity.CSS.Hooks.registered[resetProperty] === undefined && (typeof resetValue === "string" || typeof resetValue === "number")) {
                                    properties.reset[resetProperty] = [ properties.reset[resetProperty], properties.reset[resetProperty] ];
                                }                                                                                      // 192
                            }                                                                                          // 193
                                                                                                                       // 194
                            /* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
                            var resetOptions = { duration: 0, queue: false };                                          // 196
                                                                                                                       // 197
                            /* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
                            if (finalElement) {                                                                        // 199
                                resetOptions.complete = injectFinalCallbacks;                                          // 200
                            }                                                                                          // 201
                                                                                                                       // 202
                            Velocity.animate(element, properties.reset, resetOptions);                                 // 203
                        /* Only trigger the user's complete callback on the last effect call with the last element in the set. */
                        } else if (finalElement) {                                                                     // 205
                            injectFinalCallbacks();                                                                    // 206
                        }                                                                                              // 207
                    };                                                                                                 // 208
                                                                                                                       // 209
                    if (redirectOptions.visibility === "hidden") {                                                     // 210
                        opts.visibility = redirectOptions.visibility;                                                  // 211
                    }                                                                                                  // 212
                }                                                                                                      // 213
                                                                                                                       // 214
                Velocity.animate(element, propertyMap, opts);                                                          // 215
            }                                                                                                          // 216
        };                                                                                                             // 217
                                                                                                                       // 218
        /* Return the Velocity object so that RegisterUI calls can be chained. */                                      // 219
        return Velocity;                                                                                               // 220
    };                                                                                                                 // 221
                                                                                                                       // 222
    /*********************                                                                                             // 223
       Packaged Effects                                                                                                // 224
    *********************/                                                                                             // 225
                                                                                                                       // 226
    /* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */              // 227
    /* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
    Velocity.RegisterEffect.packagedEffects =                                                                          // 229
        {                                                                                                              // 230
            /* Animate.css */                                                                                          // 231
            "callout.bounce": {                                                                                        // 232
                defaultDuration: 550,                                                                                  // 233
                calls: [                                                                                               // 234
                    [ { translateY: -30 }, 0.25 ],                                                                     // 235
                    [ { translateY: 0 }, 0.125 ],                                                                      // 236
                    [ { translateY: -15 }, 0.125 ],                                                                    // 237
                    [ { translateY: 0 }, 0.25 ]                                                                        // 238
                ]                                                                                                      // 239
            },                                                                                                         // 240
            /* Animate.css */                                                                                          // 241
            "callout.shake": {                                                                                         // 242
                defaultDuration: 800,                                                                                  // 243
                calls: [                                                                                               // 244
                    [ { translateX: -11 }, 0.125 ],                                                                    // 245
                    [ { translateX: 11 }, 0.125 ],                                                                     // 246
                    [ { translateX: -11 }, 0.125 ],                                                                    // 247
                    [ { translateX: 11 }, 0.125 ],                                                                     // 248
                    [ { translateX: -11 }, 0.125 ],                                                                    // 249
                    [ { translateX: 11 }, 0.125 ],                                                                     // 250
                    [ { translateX: -11 }, 0.125 ],                                                                    // 251
                    [ { translateX: 0 }, 0.125 ]                                                                       // 252
                ]                                                                                                      // 253
            },                                                                                                         // 254
            /* Animate.css */                                                                                          // 255
            "callout.flash": {                                                                                         // 256
                defaultDuration: 1100,                                                                                 // 257
                calls: [                                                                                               // 258
                    [ { opacity: [ 0, "easeInOutQuad", 1 ] }, 0.25 ],                                                  // 259
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ],                                                     // 260
                    [ { opacity: [ 0, "easeInOutQuad" ] }, 0.25 ],                                                     // 261
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ]                                                      // 262
                ]                                                                                                      // 263
            },                                                                                                         // 264
            /* Animate.css */                                                                                          // 265
            "callout.pulse": {                                                                                         // 266
                defaultDuration: 825,                                                                                  // 267
                calls: [                                                                                               // 268
                    [ { scaleX: 1.1, scaleY: 1.1 }, 0.50, { easing: "easeInExpo" } ],                                  // 269
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]                                                                 // 270
                ]                                                                                                      // 271
            },                                                                                                         // 272
            /* Animate.css */                                                                                          // 273
            "callout.swing": {                                                                                         // 274
                defaultDuration: 950,                                                                                  // 275
                calls: [                                                                                               // 276
                    [ { rotateZ: 15 }, 0.20 ],                                                                         // 277
                    [ { rotateZ: -10 }, 0.20 ],                                                                        // 278
                    [ { rotateZ: 5 }, 0.20 ],                                                                          // 279
                    [ { rotateZ: -5 }, 0.20 ],                                                                         // 280
                    [ { rotateZ: 0 }, 0.20 ]                                                                           // 281
                ]                                                                                                      // 282
            },                                                                                                         // 283
            /* Animate.css */                                                                                          // 284
            "callout.tada": {                                                                                          // 285
                defaultDuration: 1000,                                                                                 // 286
                calls: [                                                                                               // 287
                    [ { scaleX: 0.9, scaleY: 0.9, rotateZ: -3 }, 0.10 ],                                               // 288
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.10 ],                                                // 289
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.10 ],                                               // 290
                    [ "reverse", 0.125 ],                                                                              // 291
                    [ "reverse", 0.125 ],                                                                              // 292
                    [ "reverse", 0.125 ],                                                                              // 293
                    [ "reverse", 0.125 ],                                                                              // 294
                    [ "reverse", 0.125 ],                                                                              // 295
                    [ { scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.20 ]                                                     // 296
                ]                                                                                                      // 297
            },                                                                                                         // 298
            "transition.fadeIn": {                                                                                     // 299
                defaultDuration: 500,                                                                                  // 300
                calls: [                                                                                               // 301
                    [ { opacity: [ 1, 0 ] } ]                                                                          // 302
                ]                                                                                                      // 303
            },                                                                                                         // 304
            "transition.fadeOut": {                                                                                    // 305
                defaultDuration: 500,                                                                                  // 306
                calls: [                                                                                               // 307
                    [ { opacity: [ 0, 1 ] } ]                                                                          // 308
                ]                                                                                                      // 309
            },                                                                                                         // 310
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 311
            "transition.flipXIn": {                                                                                    // 312
                defaultDuration: 700,                                                                                  // 313
                calls: [                                                                                               // 314
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateY: [ 0, -55 ] } ]                 // 315
                ],                                                                                                     // 316
                reset: { transformPerspective: 0 }                                                                     // 317
            },                                                                                                         // 318
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 319
            "transition.flipXOut": {                                                                                   // 320
                defaultDuration: 700,                                                                                  // 321
                calls: [                                                                                               // 322
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateY: 55 } ]                         // 323
                ],                                                                                                     // 324
                reset: { transformPerspective: 0, rotateY: 0 }                                                         // 325
            },                                                                                                         // 326
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 327
            "transition.flipYIn": {                                                                                    // 328
                defaultDuration: 800,                                                                                  // 329
                calls: [                                                                                               // 330
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateX: [ 0, -45 ] } ]                 // 331
                ],                                                                                                     // 332
                reset: { transformPerspective: 0 }                                                                     // 333
            },                                                                                                         // 334
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 335
            "transition.flipYOut": {                                                                                   // 336
                defaultDuration: 800,                                                                                  // 337
                calls: [                                                                                               // 338
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateX: 25 } ]                         // 339
                ],                                                                                                     // 340
                reset: { transformPerspective: 0, rotateX: 0 }                                                         // 341
            },                                                                                                         // 342
            /* Animate.css */                                                                                          // 343
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 344
            "transition.flipBounceXIn": {                                                                              // 345
                defaultDuration: 900,                                                                                  // 346
                calls: [                                                                                               // 347
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateY: [ -10, 90 ] }, 0.50 ],     // 348
                    [ { opacity: 0.80, rotateY: 10 }, 0.25 ],                                                          // 349
                    [ { opacity: 1, rotateY: 0 }, 0.25 ]                                                               // 350
                ],                                                                                                     // 351
                reset: { transformPerspective: 0 }                                                                     // 352
            },                                                                                                         // 353
            /* Animate.css */                                                                                          // 354
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 355
            "transition.flipBounceXOut": {                                                                             // 356
                defaultDuration: 800,                                                                                  // 357
                calls: [                                                                                               // 358
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateY: -10 }, 0.50 ],               // 359
                    [ { opacity: 0, rotateY: 90 }, 0.50 ]                                                              // 360
                ],                                                                                                     // 361
                reset: { transformPerspective: 0, rotateY: 0 }                                                         // 362
            },                                                                                                         // 363
            /* Animate.css */                                                                                          // 364
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 365
            "transition.flipBounceYIn": {                                                                              // 366
                defaultDuration: 850,                                                                                  // 367
                calls: [                                                                                               // 368
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateX: [ -10, 90 ] }, 0.50 ],     // 369
                    [ { opacity: 0.80, rotateX: 10 }, 0.25 ],                                                          // 370
                    [ { opacity: 1, rotateX: 0 }, 0.25 ]                                                               // 371
                ],                                                                                                     // 372
                reset: { transformPerspective: 0 }                                                                     // 373
            },                                                                                                         // 374
            /* Animate.css */                                                                                          // 375
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 376
            "transition.flipBounceYOut": {                                                                             // 377
                defaultDuration: 800,                                                                                  // 378
                calls: [                                                                                               // 379
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateX: -15 }, 0.50 ],               // 380
                    [ { opacity: 0, rotateX: 90 }, 0.50 ]                                                              // 381
                ],                                                                                                     // 382
                reset: { transformPerspective: 0, rotateX: 0 }                                                         // 383
            },                                                                                                         // 384
            /* Magic.css */                                                                                            // 385
            "transition.swoopIn": {                                                                                    // 386
                defaultDuration: 850,                                                                                  // 387
                calls: [                                                                                               // 388
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "100%", "50%" ], transformOriginY: [ "100%", "100%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], translateX: [ 0, -700 ], translateZ: 0 } ]
                ],                                                                                                     // 390
                reset: { transformOriginX: "50%", transformOriginY: "50%" }                                            // 391
            },                                                                                                         // 392
            /* Magic.css */                                                                                            // 393
            "transition.swoopOut": {                                                                                   // 394
                defaultDuration: 850,                                                                                  // 395
                calls: [                                                                                               // 396
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "100%" ], transformOriginY: [ "100%", "100%" ], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 } ]
                ],                                                                                                     // 398
                reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 }       // 399
            },                                                                                                         // 400
            /* Magic.css */                                                                                            // 401
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */                                 // 402
            "transition.whirlIn": {                                                                                    // 403
                defaultDuration: 850,                                                                                  // 404
                calls: [                                                                                               // 405
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], rotateY: [ 0, 160 ] }, 1, { easing: "easeInOutSine" } ]
                ]                                                                                                      // 407
            },                                                                                                         // 408
            /* Magic.css */                                                                                            // 409
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */                                 // 410
            "transition.whirlOut": {                                                                                   // 411
                defaultDuration: 750,                                                                                  // 412
                calls: [                                                                                               // 413
                    [ { opacity: [ 0, "easeInOutQuint", 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" } ]
                ],                                                                                                     // 415
                reset: { scaleX: 1, scaleY: 1, rotateY: 0 }                                                            // 416
            },                                                                                                         // 417
            "transition.shrinkIn": {                                                                                   // 418
                defaultDuration: 750,                                                                                  // 419
                calls: [                                                                                               // 420
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 1.5 ], scaleY: [ 1, 1.5 ], translateZ: 0 } ]
                ]                                                                                                      // 422
            },                                                                                                         // 423
            "transition.shrinkOut": {                                                                                  // 424
                defaultDuration: 600,                                                                                  // 425
                calls: [                                                                                               // 426
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 1.3, scaleY: 1.3, translateZ: 0 } ]
                ],                                                                                                     // 428
                reset: { scaleX: 1, scaleY: 1 }                                                                        // 429
            },                                                                                                         // 430
            "transition.expandIn": {                                                                                   // 431
                defaultDuration: 700,                                                                                  // 432
                calls: [                                                                                               // 433
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0.625 ], scaleY: [ 1, 0.625 ], translateZ: 0 } ]
                ]                                                                                                      // 435
            },                                                                                                         // 436
            "transition.expandOut": {                                                                                  // 437
                defaultDuration: 700,                                                                                  // 438
                calls: [                                                                                               // 439
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0.5, scaleY: 0.5, translateZ: 0 } ]
                ],                                                                                                     // 441
                reset: { scaleX: 1, scaleY: 1 }                                                                        // 442
            },                                                                                                         // 443
            /* Animate.css */                                                                                          // 444
            "transition.bounceIn": {                                                                                   // 445
                defaultDuration: 800,                                                                                  // 446
                calls: [                                                                                               // 447
                    [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ] }, 0.40 ],                     // 448
                    [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.20 ],                                             // 449
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]                                                                 // 450
                ]                                                                                                      // 451
            },                                                                                                         // 452
            /* Animate.css */                                                                                          // 453
            "transition.bounceOut": {                                                                                  // 454
                defaultDuration: 800,                                                                                  // 455
                calls: [                                                                                               // 456
                    [ { scaleX: 0.95, scaleY: 0.95 }, 0.35 ],                                                          // 457
                    [ { scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35 ],                                             // 458
                    [ { opacity: [ 0, 1 ], scaleX: 0.3, scaleY: 0.3 }, 0.30 ]                                          // 459
                ],                                                                                                     // 460
                reset: { scaleX: 1, scaleY: 1 }                                                                        // 461
            },                                                                                                         // 462
            /* Animate.css */                                                                                          // 463
            "transition.bounceUpIn": {                                                                                 // 464
                defaultDuration: 800,                                                                                  // 465
                calls: [                                                                                               // 466
                    [ { opacity: [ 1, 0 ], translateY: [ -30, 1000 ] }, 0.60, { easing: "easeOutCirc" } ],             // 467
                    [ { translateY: 10 }, 0.20 ],                                                                      // 468
                    [ { translateY: 0 }, 0.20 ]                                                                        // 469
                ]                                                                                                      // 470
            },                                                                                                         // 471
            /* Animate.css */                                                                                          // 472
            "transition.bounceUpOut": {                                                                                // 473
                defaultDuration: 1000,                                                                                 // 474
                calls: [                                                                                               // 475
                    [ { translateY: 20 }, 0.20 ],                                                                      // 476
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: -1000 }, 0.80 ]                                   // 477
                ],                                                                                                     // 478
                reset: { translateY: 0 }                                                                               // 479
            },                                                                                                         // 480
            /* Animate.css */                                                                                          // 481
            "transition.bounceDownIn": {                                                                               // 482
                defaultDuration: 800,                                                                                  // 483
                calls: [                                                                                               // 484
                    [ { opacity: [ 1, 0 ], translateY: [ 30, -1000 ] }, 0.60, { easing: "easeOutCirc" } ],             // 485
                    [ { translateY: -10 }, 0.20 ],                                                                     // 486
                    [ { translateY: 0 }, 0.20 ]                                                                        // 487
                ]                                                                                                      // 488
            },                                                                                                         // 489
            /* Animate.css */                                                                                          // 490
            "transition.bounceDownOut": {                                                                              // 491
                defaultDuration: 1000,                                                                                 // 492
                calls: [                                                                                               // 493
                    [ { translateY: -20 }, 0.20 ],                                                                     // 494
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: 1000 }, 0.80 ]                                    // 495
                ],                                                                                                     // 496
                reset: { translateY: 0 }                                                                               // 497
            },                                                                                                         // 498
            /* Animate.css */                                                                                          // 499
            "transition.bounceLeftIn": {                                                                               // 500
                defaultDuration: 750,                                                                                  // 501
                calls: [                                                                                               // 502
                    [ { opacity: [ 1, 0 ], translateX: [ 30, -1250 ] }, 0.60, { easing: "easeOutCirc" } ],             // 503
                    [ { translateX: -10 }, 0.20 ],                                                                     // 504
                    [ { translateX: 0 }, 0.20 ]                                                                        // 505
                ]                                                                                                      // 506
            },                                                                                                         // 507
            /* Animate.css */                                                                                          // 508
            "transition.bounceLeftOut": {                                                                              // 509
                defaultDuration: 750,                                                                                  // 510
                calls: [                                                                                               // 511
                    [ { translateX: 30 }, 0.20 ],                                                                      // 512
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: -1250 }, 0.80 ]                                   // 513
                ],                                                                                                     // 514
                reset: { translateX: 0 }                                                                               // 515
            },                                                                                                         // 516
            /* Animate.css */                                                                                          // 517
            "transition.bounceRightIn": {                                                                              // 518
                defaultDuration: 750,                                                                                  // 519
                calls: [                                                                                               // 520
                    [ { opacity: [ 1, 0 ], translateX: [ -30, 1250 ] }, 0.60, { easing: "easeOutCirc" } ],             // 521
                    [ { translateX: 10 }, 0.20 ],                                                                      // 522
                    [ { translateX: 0 }, 0.20 ]                                                                        // 523
                ]                                                                                                      // 524
            },                                                                                                         // 525
            /* Animate.css */                                                                                          // 526
            "transition.bounceRightOut": {                                                                             // 527
                defaultDuration: 750,                                                                                  // 528
                calls: [                                                                                               // 529
                    [ { translateX: -30 }, 0.20 ],                                                                     // 530
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: 1250 }, 0.80 ]                                    // 531
                ],                                                                                                     // 532
                reset: { translateX: 0 }                                                                               // 533
            },                                                                                                         // 534
            "transition.slideUpIn": {                                                                                  // 535
                defaultDuration: 900,                                                                                  // 536
                calls: [                                                                                               // 537
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 20 ], translateZ: 0 } ]                                    // 538
                ]                                                                                                      // 539
            },                                                                                                         // 540
            "transition.slideUpOut": {                                                                                 // 541
                defaultDuration: 900,                                                                                  // 542
                calls: [                                                                                               // 543
                    [ { opacity: [ 0, 1 ], translateY: -20, translateZ: 0 } ]                                          // 544
                ],                                                                                                     // 545
                reset: { translateY: 0 }                                                                               // 546
            },                                                                                                         // 547
            "transition.slideDownIn": {                                                                                // 548
                defaultDuration: 900,                                                                                  // 549
                calls: [                                                                                               // 550
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -20 ], translateZ: 0 } ]                                   // 551
                ]                                                                                                      // 552
            },                                                                                                         // 553
            "transition.slideDownOut": {                                                                               // 554
                defaultDuration: 900,                                                                                  // 555
                calls: [                                                                                               // 556
                    [ { opacity: [ 0, 1 ], translateY: 20, translateZ: 0 } ]                                           // 557
                ],                                                                                                     // 558
                reset: { translateY: 0 }                                                                               // 559
            },                                                                                                         // 560
            "transition.slideLeftIn": {                                                                                // 561
                defaultDuration: 1000,                                                                                 // 562
                calls: [                                                                                               // 563
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -20 ], translateZ: 0 } ]                                   // 564
                ]                                                                                                      // 565
            },                                                                                                         // 566
            "transition.slideLeftOut": {                                                                               // 567
                defaultDuration: 1050,                                                                                 // 568
                calls: [                                                                                               // 569
                    [ { opacity: [ 0, 1 ], translateX: -20, translateZ: 0 } ]                                          // 570
                ],                                                                                                     // 571
                reset: { translateX: 0 }                                                                               // 572
            },                                                                                                         // 573
            "transition.slideRightIn": {                                                                               // 574
                defaultDuration: 1000,                                                                                 // 575
                calls: [                                                                                               // 576
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 20 ], translateZ: 0 } ]                                    // 577
                ]                                                                                                      // 578
            },                                                                                                         // 579
            "transition.slideRightOut": {                                                                              // 580
                defaultDuration: 1050,                                                                                 // 581
                calls: [                                                                                               // 582
                    [ { opacity: [ 0, 1 ], translateX: 20, translateZ: 0 } ]                                           // 583
                ],                                                                                                     // 584
                reset: { translateX: 0 }                                                                               // 585
            },                                                                                                         // 586
            "transition.slideUpBigIn": {                                                                               // 587
                defaultDuration: 850,                                                                                  // 588
                calls: [                                                                                               // 589
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 75 ], translateZ: 0 } ]                                    // 590
                ]                                                                                                      // 591
            },                                                                                                         // 592
            "transition.slideUpBigOut": {                                                                              // 593
                defaultDuration: 800,                                                                                  // 594
                calls: [                                                                                               // 595
                    [ { opacity: [ 0, 1 ], translateY: -75, translateZ: 0 } ]                                          // 596
                ],                                                                                                     // 597
                reset: { translateY: 0 }                                                                               // 598
            },                                                                                                         // 599
            "transition.slideDownBigIn": {                                                                             // 600
                defaultDuration: 850,                                                                                  // 601
                calls: [                                                                                               // 602
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -75 ], translateZ: 0 } ]                                   // 603
                ]                                                                                                      // 604
            },                                                                                                         // 605
            "transition.slideDownBigOut": {                                                                            // 606
                defaultDuration: 800,                                                                                  // 607
                calls: [                                                                                               // 608
                    [ { opacity: [ 0, 1 ], translateY: 75, translateZ: 0 } ]                                           // 609
                ],                                                                                                     // 610
                reset: { translateY: 0 }                                                                               // 611
            },                                                                                                         // 612
            "transition.slideLeftBigIn": {                                                                             // 613
                defaultDuration: 800,                                                                                  // 614
                calls: [                                                                                               // 615
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -75 ], translateZ: 0 } ]                                   // 616
                ]                                                                                                      // 617
            },                                                                                                         // 618
            "transition.slideLeftBigOut": {                                                                            // 619
                defaultDuration: 750,                                                                                  // 620
                calls: [                                                                                               // 621
                    [ { opacity: [ 0, 1 ], translateX: -75, translateZ: 0 } ]                                          // 622
                ],                                                                                                     // 623
                reset: { translateX: 0 }                                                                               // 624
            },                                                                                                         // 625
            "transition.slideRightBigIn": {                                                                            // 626
                defaultDuration: 800,                                                                                  // 627
                calls: [                                                                                               // 628
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 75 ], translateZ: 0 } ]                                    // 629
                ]                                                                                                      // 630
            },                                                                                                         // 631
            "transition.slideRightBigOut": {                                                                           // 632
                defaultDuration: 750,                                                                                  // 633
                calls: [                                                                                               // 634
                    [ { opacity: [ 0, 1 ], translateX: 75, translateZ: 0 } ]                                           // 635
                ],                                                                                                     // 636
                reset: { translateX: 0 }                                                                               // 637
            },                                                                                                         // 638
            /* Magic.css */                                                                                            // 639
            "transition.perspectiveUpIn": {                                                                            // 640
                defaultDuration: 800,                                                                                  // 641
                calls: [                                                                                               // 642
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: [ 0, -180 ] } ]
                ]                                                                                                      // 644
            },                                                                                                         // 645
            /* Magic.css */                                                                                            // 646
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 647
            "transition.perspectiveUpOut": {                                                                           // 648
                defaultDuration: 850,                                                                                  // 649
                calls: [                                                                                               // 650
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: -180 } ]
                ],                                                                                                     // 652
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }       // 653
            },                                                                                                         // 654
            /* Magic.css */                                                                                            // 655
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 656
            "transition.perspectiveDownIn": {                                                                          // 657
                defaultDuration: 800,                                                                                  // 658
                calls: [                                                                                               // 659
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: [ 0, 180 ] } ]
                ],                                                                                                     // 661
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }                   // 662
            },                                                                                                         // 663
            /* Magic.css */                                                                                            // 664
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 665
            "transition.perspectiveDownOut": {                                                                         // 666
                defaultDuration: 850,                                                                                  // 667
                calls: [                                                                                               // 668
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: 180 } ]
                ],                                                                                                     // 670
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }       // 671
            },                                                                                                         // 672
            /* Magic.css */                                                                                            // 673
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 674
            "transition.perspectiveLeftIn": {                                                                          // 675
                defaultDuration: 950,                                                                                  // 676
                calls: [                                                                                               // 677
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: [ 0, -180 ] } ]
                ],                                                                                                     // 679
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }                   // 680
            },                                                                                                         // 681
            /* Magic.css */                                                                                            // 682
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 683
            "transition.perspectiveLeftOut": {                                                                         // 684
                defaultDuration: 950,                                                                                  // 685
                calls: [                                                                                               // 686
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: -180 } ]
                ],                                                                                                     // 688
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }       // 689
            },                                                                                                         // 690
            /* Magic.css */                                                                                            // 691
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 692
            "transition.perspectiveRightIn": {                                                                         // 693
                defaultDuration: 950,                                                                                  // 694
                calls: [                                                                                               // 695
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: [ 0, 180 ] } ]
                ],                                                                                                     // 697
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }                   // 698
            },                                                                                                         // 699
            /* Magic.css */                                                                                            // 700
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */                                             // 701
            "transition.perspectiveRightOut": {                                                                        // 702
                defaultDuration: 950,                                                                                  // 703
                calls: [                                                                                               // 704
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: 180 } ]
                ],                                                                                                     // 706
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }       // 707
            }                                                                                                          // 708
        };                                                                                                             // 709
                                                                                                                       // 710
    /* Register the packaged effects. */                                                                               // 711
    for (var effectName in Velocity.RegisterEffect.packagedEffects) {                                                  // 712
        Velocity.RegisterEffect(effectName, Velocity.RegisterEffect.packagedEffects[effectName]);                      // 713
    }                                                                                                                  // 714
                                                                                                                       // 715
    /*********************                                                                                             // 716
       Sequence Running                                                                                                // 717
    **********************/                                                                                            // 718
                                                                                                                       // 719
    /* Note: Sequence calls must use Velocity's single-object arguments syntax. */                                     // 720
    Velocity.RunSequence = function (originalSequence) {                                                               // 721
        var sequence = $.extend(true, [], originalSequence);                                                           // 722
                                                                                                                       // 723
        if (sequence.length > 1) {                                                                                     // 724
            $.each(sequence.reverse(), function(i, currentCall) {                                                      // 725
                var nextCall = sequence[i + 1];                                                                        // 726
                                                                                                                       // 727
                if (nextCall) {                                                                                        // 728
                    /* Parallel sequence calls (indicated via sequenceQueue:false) are triggered                       // 729
                       in the previous call's begin callback. Otherwise, chained calls are normally triggered          // 730
                       in the previous call's complete callback. */                                                    // 731
                    var currentCallOptions = currentCall.options || currentCall.o,                                     // 732
                        nextCallOptions = nextCall.options || nextCall.o;                                              // 733
                                                                                                                       // 734
                    var timing = (currentCallOptions && currentCallOptions.sequenceQueue === false) ? "begin" : "complete",
                        callbackOriginal = nextCallOptions && nextCallOptions[timing],                                 // 736
                        options = {};                                                                                  // 737
                                                                                                                       // 738
                    options[timing] = function() {                                                                     // 739
                        var nextCallElements = nextCall.elements || nextCall.e;                                        // 740
                        var elements = nextCallElements.nodeType ? [ nextCallElements ] : nextCallElements;            // 741
                                                                                                                       // 742
                        callbackOriginal && callbackOriginal.call(elements, elements);                                 // 743
                        Velocity(currentCall);                                                                         // 744
                    }                                                                                                  // 745
                                                                                                                       // 746
                    nextCall.options = $.extend({}, nextCall.options, options);                                        // 747
                }                                                                                                      // 748
            });                                                                                                        // 749
                                                                                                                       // 750
            sequence.reverse();                                                                                        // 751
        }                                                                                                              // 752
                                                                                                                       // 753
        Velocity(sequence[0]);                                                                                         // 754
    };                                                                                                                 // 755
}((window.jQuery || window.Zepto || window), window, document);                                                        // 756
}));                                                                                                                   // 757
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['percolate:velocityjs'] = {};

})();

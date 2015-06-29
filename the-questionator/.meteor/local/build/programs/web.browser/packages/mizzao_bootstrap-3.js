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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mizzao:bootstrap-3/bootstrap-3/js/bootstrap.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Bootstrap v3.3.0 (http://getbootstrap.com)                                                                          // 2
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 3
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 4
 */                                                                                                                    // 5
                                                                                                                       // 6
if (typeof jQuery === 'undefined') {                                                                                   // 7
  throw new Error('Bootstrap\'s JavaScript requires jQuery')                                                           // 8
}                                                                                                                      // 9
                                                                                                                       // 10
+function ($) {                                                                                                        // 11
  var version = $.fn.jquery.split(' ')[0].split('.')                                                                   // 12
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {                  // 13
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')                                 // 14
  }                                                                                                                    // 15
}(jQuery);                                                                                                             // 16
                                                                                                                       // 17
/* ========================================================================                                            // 18
 * Bootstrap: transition.js v3.3.0                                                                                     // 19
 * http://getbootstrap.com/javascript/#transitions                                                                     // 20
 * ========================================================================                                            // 21
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 22
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 23
 * ======================================================================== */                                         // 24
                                                                                                                       // 25
                                                                                                                       // 26
+function ($) {                                                                                                        // 27
  'use strict';                                                                                                        // 28
                                                                                                                       // 29
  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)                                                      // 30
  // ============================================================                                                      // 31
                                                                                                                       // 32
  function transitionEnd() {                                                                                           // 33
    var el = document.createElement('bootstrap')                                                                       // 34
                                                                                                                       // 35
    var transEndEventNames = {                                                                                         // 36
      WebkitTransition : 'webkitTransitionEnd',                                                                        // 37
      MozTransition    : 'transitionend',                                                                              // 38
      OTransition      : 'oTransitionEnd otransitionend',                                                              // 39
      transition       : 'transitionend'                                                                               // 40
    }                                                                                                                  // 41
                                                                                                                       // 42
    for (var name in transEndEventNames) {                                                                             // 43
      if (el.style[name] !== undefined) {                                                                              // 44
        return { end: transEndEventNames[name] }                                                                       // 45
      }                                                                                                                // 46
    }                                                                                                                  // 47
                                                                                                                       // 48
    return false // explicit for ie8 (  ._.)                                                                           // 49
  }                                                                                                                    // 50
                                                                                                                       // 51
  // http://blog.alexmaccaw.com/css-transitions                                                                        // 52
  $.fn.emulateTransitionEnd = function (duration) {                                                                    // 53
    var called = false                                                                                                 // 54
    var $el = this                                                                                                     // 55
    $(this).one('bsTransitionEnd', function () { called = true })                                                      // 56
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }                               // 57
    setTimeout(callback, duration)                                                                                     // 58
    return this                                                                                                        // 59
  }                                                                                                                    // 60
                                                                                                                       // 61
  $(function () {                                                                                                      // 62
    $.support.transition = transitionEnd()                                                                             // 63
                                                                                                                       // 64
    if (!$.support.transition) return                                                                                  // 65
                                                                                                                       // 66
    $.event.special.bsTransitionEnd = {                                                                                // 67
      bindType: $.support.transition.end,                                                                              // 68
      delegateType: $.support.transition.end,                                                                          // 69
      handle: function (e) {                                                                                           // 70
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)                                    // 71
      }                                                                                                                // 72
    }                                                                                                                  // 73
  })                                                                                                                   // 74
                                                                                                                       // 75
}(jQuery);                                                                                                             // 76
                                                                                                                       // 77
/* ========================================================================                                            // 78
 * Bootstrap: alert.js v3.3.0                                                                                          // 79
 * http://getbootstrap.com/javascript/#alerts                                                                          // 80
 * ========================================================================                                            // 81
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 82
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 83
 * ======================================================================== */                                         // 84
                                                                                                                       // 85
                                                                                                                       // 86
+function ($) {                                                                                                        // 87
  'use strict';                                                                                                        // 88
                                                                                                                       // 89
  // ALERT CLASS DEFINITION                                                                                            // 90
  // ======================                                                                                            // 91
                                                                                                                       // 92
  var dismiss = '[data-dismiss="alert"]'                                                                               // 93
  var Alert   = function (el) {                                                                                        // 94
    $(el).on('click', dismiss, this.close)                                                                             // 95
  }                                                                                                                    // 96
                                                                                                                       // 97
  Alert.VERSION = '3.3.0'                                                                                              // 98
                                                                                                                       // 99
  Alert.TRANSITION_DURATION = 150                                                                                      // 100
                                                                                                                       // 101
  Alert.prototype.close = function (e) {                                                                               // 102
    var $this    = $(this)                                                                                             // 103
    var selector = $this.attr('data-target')                                                                           // 104
                                                                                                                       // 105
    if (!selector) {                                                                                                   // 106
      selector = $this.attr('href')                                                                                    // 107
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7                                   // 108
    }                                                                                                                  // 109
                                                                                                                       // 110
    var $parent = $(selector)                                                                                          // 111
                                                                                                                       // 112
    if (e) e.preventDefault()                                                                                          // 113
                                                                                                                       // 114
    if (!$parent.length) {                                                                                             // 115
      $parent = $this.closest('.alert')                                                                                // 116
    }                                                                                                                  // 117
                                                                                                                       // 118
    $parent.trigger(e = $.Event('close.bs.alert'))                                                                     // 119
                                                                                                                       // 120
    if (e.isDefaultPrevented()) return                                                                                 // 121
                                                                                                                       // 122
    $parent.removeClass('in')                                                                                          // 123
                                                                                                                       // 124
    function removeElement() {                                                                                         // 125
      // detach from parent, fire event then clean up data                                                             // 126
      $parent.detach().trigger('closed.bs.alert').remove()                                                             // 127
    }                                                                                                                  // 128
                                                                                                                       // 129
    $.support.transition && $parent.hasClass('fade') ?                                                                 // 130
      $parent                                                                                                          // 131
        .one('bsTransitionEnd', removeElement)                                                                         // 132
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :                                                             // 133
      removeElement()                                                                                                  // 134
  }                                                                                                                    // 135
                                                                                                                       // 136
                                                                                                                       // 137
  // ALERT PLUGIN DEFINITION                                                                                           // 138
  // =======================                                                                                           // 139
                                                                                                                       // 140
  function Plugin(option) {                                                                                            // 141
    return this.each(function () {                                                                                     // 142
      var $this = $(this)                                                                                              // 143
      var data  = $this.data('bs.alert')                                                                               // 144
                                                                                                                       // 145
      if (!data) $this.data('bs.alert', (data = new Alert(this)))                                                      // 146
      if (typeof option == 'string') data[option].call($this)                                                          // 147
    })                                                                                                                 // 148
  }                                                                                                                    // 149
                                                                                                                       // 150
  var old = $.fn.alert                                                                                                 // 151
                                                                                                                       // 152
  $.fn.alert             = Plugin                                                                                      // 153
  $.fn.alert.Constructor = Alert                                                                                       // 154
                                                                                                                       // 155
                                                                                                                       // 156
  // ALERT NO CONFLICT                                                                                                 // 157
  // =================                                                                                                 // 158
                                                                                                                       // 159
  $.fn.alert.noConflict = function () {                                                                                // 160
    $.fn.alert = old                                                                                                   // 161
    return this                                                                                                        // 162
  }                                                                                                                    // 163
                                                                                                                       // 164
                                                                                                                       // 165
  // ALERT DATA-API                                                                                                    // 166
  // ==============                                                                                                    // 167
                                                                                                                       // 168
  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)                                            // 169
                                                                                                                       // 170
}(jQuery);                                                                                                             // 171
                                                                                                                       // 172
/* ========================================================================                                            // 173
 * Bootstrap: button.js v3.3.0                                                                                         // 174
 * http://getbootstrap.com/javascript/#buttons                                                                         // 175
 * ========================================================================                                            // 176
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 177
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 178
 * ======================================================================== */                                         // 179
                                                                                                                       // 180
                                                                                                                       // 181
+function ($) {                                                                                                        // 182
  'use strict';                                                                                                        // 183
                                                                                                                       // 184
  // BUTTON PUBLIC CLASS DEFINITION                                                                                    // 185
  // ==============================                                                                                    // 186
                                                                                                                       // 187
  var Button = function (element, options) {                                                                           // 188
    this.$element  = $(element)                                                                                        // 189
    this.options   = $.extend({}, Button.DEFAULTS, options)                                                            // 190
    this.isLoading = false                                                                                             // 191
  }                                                                                                                    // 192
                                                                                                                       // 193
  Button.VERSION  = '3.3.0'                                                                                            // 194
                                                                                                                       // 195
  Button.DEFAULTS = {                                                                                                  // 196
    loadingText: 'loading...'                                                                                          // 197
  }                                                                                                                    // 198
                                                                                                                       // 199
  Button.prototype.setState = function (state) {                                                                       // 200
    var d    = 'disabled'                                                                                              // 201
    var $el  = this.$element                                                                                           // 202
    var val  = $el.is('input') ? 'val' : 'html'                                                                        // 203
    var data = $el.data()                                                                                              // 204
                                                                                                                       // 205
    state = state + 'Text'                                                                                             // 206
                                                                                                                       // 207
    if (data.resetText == null) $el.data('resetText', $el[val]())                                                      // 208
                                                                                                                       // 209
    // push to event loop to allow forms to submit                                                                     // 210
    setTimeout($.proxy(function () {                                                                                   // 211
      $el[val](data[state] == null ? this.options[state] : data[state])                                                // 212
                                                                                                                       // 213
      if (state == 'loadingText') {                                                                                    // 214
        this.isLoading = true                                                                                          // 215
        $el.addClass(d).attr(d, d)                                                                                     // 216
      } else if (this.isLoading) {                                                                                     // 217
        this.isLoading = false                                                                                         // 218
        $el.removeClass(d).removeAttr(d)                                                                               // 219
      }                                                                                                                // 220
    }, this), 0)                                                                                                       // 221
  }                                                                                                                    // 222
                                                                                                                       // 223
  Button.prototype.toggle = function () {                                                                              // 224
    var changed = true                                                                                                 // 225
    var $parent = this.$element.closest('[data-toggle="buttons"]')                                                     // 226
                                                                                                                       // 227
    if ($parent.length) {                                                                                              // 228
      var $input = this.$element.find('input')                                                                         // 229
      if ($input.prop('type') == 'radio') {                                                                            // 230
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false                                // 231
        else $parent.find('.active').removeClass('active')                                                             // 232
      }                                                                                                                // 233
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')                         // 234
    } else {                                                                                                           // 235
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))                                            // 236
    }                                                                                                                  // 237
                                                                                                                       // 238
    if (changed) this.$element.toggleClass('active')                                                                   // 239
  }                                                                                                                    // 240
                                                                                                                       // 241
                                                                                                                       // 242
  // BUTTON PLUGIN DEFINITION                                                                                          // 243
  // ========================                                                                                          // 244
                                                                                                                       // 245
  function Plugin(option) {                                                                                            // 246
    return this.each(function () {                                                                                     // 247
      var $this   = $(this)                                                                                            // 248
      var data    = $this.data('bs.button')                                                                            // 249
      var options = typeof option == 'object' && option                                                                // 250
                                                                                                                       // 251
      if (!data) $this.data('bs.button', (data = new Button(this, options)))                                           // 252
                                                                                                                       // 253
      if (option == 'toggle') data.toggle()                                                                            // 254
      else if (option) data.setState(option)                                                                           // 255
    })                                                                                                                 // 256
  }                                                                                                                    // 257
                                                                                                                       // 258
  var old = $.fn.button                                                                                                // 259
                                                                                                                       // 260
  $.fn.button             = Plugin                                                                                     // 261
  $.fn.button.Constructor = Button                                                                                     // 262
                                                                                                                       // 263
                                                                                                                       // 264
  // BUTTON NO CONFLICT                                                                                                // 265
  // ==================                                                                                                // 266
                                                                                                                       // 267
  $.fn.button.noConflict = function () {                                                                               // 268
    $.fn.button = old                                                                                                  // 269
    return this                                                                                                        // 270
  }                                                                                                                    // 271
                                                                                                                       // 272
                                                                                                                       // 273
  // BUTTON DATA-API                                                                                                   // 274
  // ===============                                                                                                   // 275
                                                                                                                       // 276
  $(document)                                                                                                          // 277
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {                                          // 278
      var $btn = $(e.target)                                                                                           // 279
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')                                                           // 280
      Plugin.call($btn, 'toggle')                                                                                      // 281
      e.preventDefault()                                                                                               // 282
    })                                                                                                                 // 283
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {                  // 284
      $(e.target).closest('.btn').toggleClass('focus', e.type == 'focus')                                              // 285
    })                                                                                                                 // 286
                                                                                                                       // 287
}(jQuery);                                                                                                             // 288
                                                                                                                       // 289
/* ========================================================================                                            // 290
 * Bootstrap: carousel.js v3.3.0                                                                                       // 291
 * http://getbootstrap.com/javascript/#carousel                                                                        // 292
 * ========================================================================                                            // 293
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 294
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 295
 * ======================================================================== */                                         // 296
                                                                                                                       // 297
                                                                                                                       // 298
+function ($) {                                                                                                        // 299
  'use strict';                                                                                                        // 300
                                                                                                                       // 301
  // CAROUSEL CLASS DEFINITION                                                                                         // 302
  // =========================                                                                                         // 303
                                                                                                                       // 304
  var Carousel = function (element, options) {                                                                         // 305
    this.$element    = $(element)                                                                                      // 306
    this.$indicators = this.$element.find('.carousel-indicators')                                                      // 307
    this.options     = options                                                                                         // 308
    this.paused      =                                                                                                 // 309
    this.sliding     =                                                                                                 // 310
    this.interval    =                                                                                                 // 311
    this.$active     =                                                                                                 // 312
    this.$items      = null                                                                                            // 313
                                                                                                                       // 314
    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))                      // 315
                                                                                                                       // 316
    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element                    // 317
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))                                                         // 318
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))                                                         // 319
  }                                                                                                                    // 320
                                                                                                                       // 321
  Carousel.VERSION  = '3.3.0'                                                                                          // 322
                                                                                                                       // 323
  Carousel.TRANSITION_DURATION = 600                                                                                   // 324
                                                                                                                       // 325
  Carousel.DEFAULTS = {                                                                                                // 326
    interval: 5000,                                                                                                    // 327
    pause: 'hover',                                                                                                    // 328
    wrap: true,                                                                                                        // 329
    keyboard: true                                                                                                     // 330
  }                                                                                                                    // 331
                                                                                                                       // 332
  Carousel.prototype.keydown = function (e) {                                                                          // 333
    switch (e.which) {                                                                                                 // 334
      case 37: this.prev(); break                                                                                      // 335
      case 39: this.next(); break                                                                                      // 336
      default: return                                                                                                  // 337
    }                                                                                                                  // 338
                                                                                                                       // 339
    e.preventDefault()                                                                                                 // 340
  }                                                                                                                    // 341
                                                                                                                       // 342
  Carousel.prototype.cycle = function (e) {                                                                            // 343
    e || (this.paused = false)                                                                                         // 344
                                                                                                                       // 345
    this.interval && clearInterval(this.interval)                                                                      // 346
                                                                                                                       // 347
    this.options.interval                                                                                              // 348
      && !this.paused                                                                                                  // 349
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))                                // 350
                                                                                                                       // 351
    return this                                                                                                        // 352
  }                                                                                                                    // 353
                                                                                                                       // 354
  Carousel.prototype.getItemIndex = function (item) {                                                                  // 355
    this.$items = item.parent().children('.item')                                                                      // 356
    return this.$items.index(item || this.$active)                                                                     // 357
  }                                                                                                                    // 358
                                                                                                                       // 359
  Carousel.prototype.getItemForDirection = function (direction, active) {                                              // 360
    var delta = direction == 'prev' ? -1 : 1                                                                           // 361
    var activeIndex = this.getItemIndex(active)                                                                        // 362
    var itemIndex = (activeIndex + delta) % this.$items.length                                                         // 363
    return this.$items.eq(itemIndex)                                                                                   // 364
  }                                                                                                                    // 365
                                                                                                                       // 366
  Carousel.prototype.to = function (pos) {                                                                             // 367
    var that        = this                                                                                             // 368
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))                             // 369
                                                                                                                       // 370
    if (pos > (this.$items.length - 1) || pos < 0) return                                                              // 371
                                                                                                                       // 372
    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"  // 373
    if (activeIndex == pos) return this.pause().cycle()                                                                // 374
                                                                                                                       // 375
    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))                                        // 376
  }                                                                                                                    // 377
                                                                                                                       // 378
  Carousel.prototype.pause = function (e) {                                                                            // 379
    e || (this.paused = true)                                                                                          // 380
                                                                                                                       // 381
    if (this.$element.find('.next, .prev').length && $.support.transition) {                                           // 382
      this.$element.trigger($.support.transition.end)                                                                  // 383
      this.cycle(true)                                                                                                 // 384
    }                                                                                                                  // 385
                                                                                                                       // 386
    this.interval = clearInterval(this.interval)                                                                       // 387
                                                                                                                       // 388
    return this                                                                                                        // 389
  }                                                                                                                    // 390
                                                                                                                       // 391
  Carousel.prototype.next = function () {                                                                              // 392
    if (this.sliding) return                                                                                           // 393
    return this.slide('next')                                                                                          // 394
  }                                                                                                                    // 395
                                                                                                                       // 396
  Carousel.prototype.prev = function () {                                                                              // 397
    if (this.sliding) return                                                                                           // 398
    return this.slide('prev')                                                                                          // 399
  }                                                                                                                    // 400
                                                                                                                       // 401
  Carousel.prototype.slide = function (type, next) {                                                                   // 402
    var $active   = this.$element.find('.item.active')                                                                 // 403
    var $next     = next || this.getItemForDirection(type, $active)                                                    // 404
    var isCycling = this.interval                                                                                      // 405
    var direction = type == 'next' ? 'left' : 'right'                                                                  // 406
    var fallback  = type == 'next' ? 'first' : 'last'                                                                  // 407
    var that      = this                                                                                               // 408
                                                                                                                       // 409
    if (!$next.length) {                                                                                               // 410
      if (!this.options.wrap) return                                                                                   // 411
      $next = this.$element.find('.item')[fallback]()                                                                  // 412
    }                                                                                                                  // 413
                                                                                                                       // 414
    if ($next.hasClass('active')) return (this.sliding = false)                                                        // 415
                                                                                                                       // 416
    var relatedTarget = $next[0]                                                                                       // 417
    var slideEvent = $.Event('slide.bs.carousel', {                                                                    // 418
      relatedTarget: relatedTarget,                                                                                    // 419
      direction: direction                                                                                             // 420
    })                                                                                                                 // 421
    this.$element.trigger(slideEvent)                                                                                  // 422
    if (slideEvent.isDefaultPrevented()) return                                                                        // 423
                                                                                                                       // 424
    this.sliding = true                                                                                                // 425
                                                                                                                       // 426
    isCycling && this.pause()                                                                                          // 427
                                                                                                                       // 428
    if (this.$indicators.length) {                                                                                     // 429
      this.$indicators.find('.active').removeClass('active')                                                           // 430
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])                                    // 431
      $nextIndicator && $nextIndicator.addClass('active')                                                              // 432
    }                                                                                                                  // 433
                                                                                                                       // 434
    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid" // 435
    if ($.support.transition && this.$element.hasClass('slide')) {                                                     // 436
      $next.addClass(type)                                                                                             // 437
      $next[0].offsetWidth // force reflow                                                                             // 438
      $active.addClass(direction)                                                                                      // 439
      $next.addClass(direction)                                                                                        // 440
      $active                                                                                                          // 441
        .one('bsTransitionEnd', function () {                                                                          // 442
          $next.removeClass([type, direction].join(' ')).addClass('active')                                            // 443
          $active.removeClass(['active', direction].join(' '))                                                         // 444
          that.sliding = false                                                                                         // 445
          setTimeout(function () {                                                                                     // 446
            that.$element.trigger(slidEvent)                                                                           // 447
          }, 0)                                                                                                        // 448
        })                                                                                                             // 449
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)                                                            // 450
    } else {                                                                                                           // 451
      $active.removeClass('active')                                                                                    // 452
      $next.addClass('active')                                                                                         // 453
      this.sliding = false                                                                                             // 454
      this.$element.trigger(slidEvent)                                                                                 // 455
    }                                                                                                                  // 456
                                                                                                                       // 457
    isCycling && this.cycle()                                                                                          // 458
                                                                                                                       // 459
    return this                                                                                                        // 460
  }                                                                                                                    // 461
                                                                                                                       // 462
                                                                                                                       // 463
  // CAROUSEL PLUGIN DEFINITION                                                                                        // 464
  // ==========================                                                                                        // 465
                                                                                                                       // 466
  function Plugin(option) {                                                                                            // 467
    return this.each(function () {                                                                                     // 468
      var $this   = $(this)                                                                                            // 469
      var data    = $this.data('bs.carousel')                                                                          // 470
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)                 // 471
      var action  = typeof option == 'string' ? option : options.slide                                                 // 472
                                                                                                                       // 473
      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))                                       // 474
      if (typeof option == 'number') data.to(option)                                                                   // 475
      else if (action) data[action]()                                                                                  // 476
      else if (options.interval) data.pause().cycle()                                                                  // 477
    })                                                                                                                 // 478
  }                                                                                                                    // 479
                                                                                                                       // 480
  var old = $.fn.carousel                                                                                              // 481
                                                                                                                       // 482
  $.fn.carousel             = Plugin                                                                                   // 483
  $.fn.carousel.Constructor = Carousel                                                                                 // 484
                                                                                                                       // 485
                                                                                                                       // 486
  // CAROUSEL NO CONFLICT                                                                                              // 487
  // ====================                                                                                              // 488
                                                                                                                       // 489
  $.fn.carousel.noConflict = function () {                                                                             // 490
    $.fn.carousel = old                                                                                                // 491
    return this                                                                                                        // 492
  }                                                                                                                    // 493
                                                                                                                       // 494
                                                                                                                       // 495
  // CAROUSEL DATA-API                                                                                                 // 496
  // =================                                                                                                 // 497
                                                                                                                       // 498
  var clickHandler = function (e) {                                                                                    // 499
    var href                                                                                                           // 500
    var $this   = $(this)                                                                                              // 501
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return                                                                          // 503
    var options = $.extend({}, $target.data(), $this.data())                                                           // 504
    var slideIndex = $this.attr('data-slide-to')                                                                       // 505
    if (slideIndex) options.interval = false                                                                           // 506
                                                                                                                       // 507
    Plugin.call($target, options)                                                                                      // 508
                                                                                                                       // 509
    if (slideIndex) {                                                                                                  // 510
      $target.data('bs.carousel').to(slideIndex)                                                                       // 511
    }                                                                                                                  // 512
                                                                                                                       // 513
    e.preventDefault()                                                                                                 // 514
  }                                                                                                                    // 515
                                                                                                                       // 516
  $(document)                                                                                                          // 517
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)                                                    // 518
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)                                                 // 519
                                                                                                                       // 520
  $(window).on('load', function () {                                                                                   // 521
    $('[data-ride="carousel"]').each(function () {                                                                     // 522
      var $carousel = $(this)                                                                                          // 523
      Plugin.call($carousel, $carousel.data())                                                                         // 524
    })                                                                                                                 // 525
  })                                                                                                                   // 526
                                                                                                                       // 527
}(jQuery);                                                                                                             // 528
                                                                                                                       // 529
/* ========================================================================                                            // 530
 * Bootstrap: collapse.js v3.3.0                                                                                       // 531
 * http://getbootstrap.com/javascript/#collapse                                                                        // 532
 * ========================================================================                                            // 533
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 534
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 535
 * ======================================================================== */                                         // 536
                                                                                                                       // 537
                                                                                                                       // 538
+function ($) {                                                                                                        // 539
  'use strict';                                                                                                        // 540
                                                                                                                       // 541
  // COLLAPSE PUBLIC CLASS DEFINITION                                                                                  // 542
  // ================================                                                                                  // 543
                                                                                                                       // 544
  var Collapse = function (element, options) {                                                                         // 545
    this.$element      = $(element)                                                                                    // 546
    this.options       = $.extend({}, Collapse.DEFAULTS, options)                                                      // 547
    this.$trigger      = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]')
    this.transitioning = null                                                                                          // 549
                                                                                                                       // 550
    if (this.options.parent) {                                                                                         // 551
      this.$parent = this.getParent()                                                                                  // 552
    } else {                                                                                                           // 553
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)                                                      // 554
    }                                                                                                                  // 555
                                                                                                                       // 556
    if (this.options.toggle) this.toggle()                                                                             // 557
  }                                                                                                                    // 558
                                                                                                                       // 559
  Collapse.VERSION  = '3.3.0'                                                                                          // 560
                                                                                                                       // 561
  Collapse.TRANSITION_DURATION = 350                                                                                   // 562
                                                                                                                       // 563
  Collapse.DEFAULTS = {                                                                                                // 564
    toggle: true,                                                                                                      // 565
    trigger: '[data-toggle="collapse"]'                                                                                // 566
  }                                                                                                                    // 567
                                                                                                                       // 568
  Collapse.prototype.dimension = function () {                                                                         // 569
    var hasWidth = this.$element.hasClass('width')                                                                     // 570
    return hasWidth ? 'width' : 'height'                                                                               // 571
  }                                                                                                                    // 572
                                                                                                                       // 573
  Collapse.prototype.show = function () {                                                                              // 574
    if (this.transitioning || this.$element.hasClass('in')) return                                                     // 575
                                                                                                                       // 576
    var activesData                                                                                                    // 577
    var actives = this.$parent && this.$parent.find('> .panel').children('.in, .collapsing')                           // 578
                                                                                                                       // 579
    if (actives && actives.length) {                                                                                   // 580
      activesData = actives.data('bs.collapse')                                                                        // 581
      if (activesData && activesData.transitioning) return                                                             // 582
    }                                                                                                                  // 583
                                                                                                                       // 584
    var startEvent = $.Event('show.bs.collapse')                                                                       // 585
    this.$element.trigger(startEvent)                                                                                  // 586
    if (startEvent.isDefaultPrevented()) return                                                                        // 587
                                                                                                                       // 588
    if (actives && actives.length) {                                                                                   // 589
      Plugin.call(actives, 'hide')                                                                                     // 590
      activesData || actives.data('bs.collapse', null)                                                                 // 591
    }                                                                                                                  // 592
                                                                                                                       // 593
    var dimension = this.dimension()                                                                                   // 594
                                                                                                                       // 595
    this.$element                                                                                                      // 596
      .removeClass('collapse')                                                                                         // 597
      .addClass('collapsing')[dimension](0)                                                                            // 598
      .attr('aria-expanded', true)                                                                                     // 599
                                                                                                                       // 600
    this.$trigger                                                                                                      // 601
      .removeClass('collapsed')                                                                                        // 602
      .attr('aria-expanded', true)                                                                                     // 603
                                                                                                                       // 604
    this.transitioning = 1                                                                                             // 605
                                                                                                                       // 606
    var complete = function () {                                                                                       // 607
      this.$element                                                                                                    // 608
        .removeClass('collapsing')                                                                                     // 609
        .addClass('collapse in')[dimension]('')                                                                        // 610
      this.transitioning = 0                                                                                           // 611
      this.$element                                                                                                    // 612
        .trigger('shown.bs.collapse')                                                                                  // 613
    }                                                                                                                  // 614
                                                                                                                       // 615
    if (!$.support.transition) return complete.call(this)                                                              // 616
                                                                                                                       // 617
    var scrollSize = $.camelCase(['scroll', dimension].join('-'))                                                      // 618
                                                                                                                       // 619
    this.$element                                                                                                      // 620
      .one('bsTransitionEnd', $.proxy(complete, this))                                                                 // 621
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])                     // 622
  }                                                                                                                    // 623
                                                                                                                       // 624
  Collapse.prototype.hide = function () {                                                                              // 625
    if (this.transitioning || !this.$element.hasClass('in')) return                                                    // 626
                                                                                                                       // 627
    var startEvent = $.Event('hide.bs.collapse')                                                                       // 628
    this.$element.trigger(startEvent)                                                                                  // 629
    if (startEvent.isDefaultPrevented()) return                                                                        // 630
                                                                                                                       // 631
    var dimension = this.dimension()                                                                                   // 632
                                                                                                                       // 633
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight                                               // 634
                                                                                                                       // 635
    this.$element                                                                                                      // 636
      .addClass('collapsing')                                                                                          // 637
      .removeClass('collapse in')                                                                                      // 638
      .attr('aria-expanded', false)                                                                                    // 639
                                                                                                                       // 640
    this.$trigger                                                                                                      // 641
      .addClass('collapsed')                                                                                           // 642
      .attr('aria-expanded', false)                                                                                    // 643
                                                                                                                       // 644
    this.transitioning = 1                                                                                             // 645
                                                                                                                       // 646
    var complete = function () {                                                                                       // 647
      this.transitioning = 0                                                                                           // 648
      this.$element                                                                                                    // 649
        .removeClass('collapsing')                                                                                     // 650
        .addClass('collapse')                                                                                          // 651
        .trigger('hidden.bs.collapse')                                                                                 // 652
    }                                                                                                                  // 653
                                                                                                                       // 654
    if (!$.support.transition) return complete.call(this)                                                              // 655
                                                                                                                       // 656
    this.$element                                                                                                      // 657
      [dimension](0)                                                                                                   // 658
      .one('bsTransitionEnd', $.proxy(complete, this))                                                                 // 659
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)                                                              // 660
  }                                                                                                                    // 661
                                                                                                                       // 662
  Collapse.prototype.toggle = function () {                                                                            // 663
    this[this.$element.hasClass('in') ? 'hide' : 'show']()                                                             // 664
  }                                                                                                                    // 665
                                                                                                                       // 666
  Collapse.prototype.getParent = function () {                                                                         // 667
    return $(this.options.parent)                                                                                      // 668
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')                                     // 669
      .each($.proxy(function (i, element) {                                                                            // 670
        var $element = $(element)                                                                                      // 671
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)                                        // 672
      }, this))                                                                                                        // 673
      .end()                                                                                                           // 674
  }                                                                                                                    // 675
                                                                                                                       // 676
  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {                                        // 677
    var isOpen = $element.hasClass('in')                                                                               // 678
                                                                                                                       // 679
    $element.attr('aria-expanded', isOpen)                                                                             // 680
    $trigger                                                                                                           // 681
      .toggleClass('collapsed', !isOpen)                                                                               // 682
      .attr('aria-expanded', isOpen)                                                                                   // 683
  }                                                                                                                    // 684
                                                                                                                       // 685
  function getTargetFromTrigger($trigger) {                                                                            // 686
    var href                                                                                                           // 687
    var target = $trigger.attr('data-target')                                                                          // 688
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7                         // 689
                                                                                                                       // 690
    return $(target)                                                                                                   // 691
  }                                                                                                                    // 692
                                                                                                                       // 693
                                                                                                                       // 694
  // COLLAPSE PLUGIN DEFINITION                                                                                        // 695
  // ==========================                                                                                        // 696
                                                                                                                       // 697
  function Plugin(option) {                                                                                            // 698
    return this.each(function () {                                                                                     // 699
      var $this   = $(this)                                                                                            // 700
      var data    = $this.data('bs.collapse')                                                                          // 701
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)                 // 702
                                                                                                                       // 703
      if (!data && options.toggle && option == 'show') options.toggle = false                                          // 704
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))                                       // 705
      if (typeof option == 'string') data[option]()                                                                    // 706
    })                                                                                                                 // 707
  }                                                                                                                    // 708
                                                                                                                       // 709
  var old = $.fn.collapse                                                                                              // 710
                                                                                                                       // 711
  $.fn.collapse             = Plugin                                                                                   // 712
  $.fn.collapse.Constructor = Collapse                                                                                 // 713
                                                                                                                       // 714
                                                                                                                       // 715
  // COLLAPSE NO CONFLICT                                                                                              // 716
  // ====================                                                                                              // 717
                                                                                                                       // 718
  $.fn.collapse.noConflict = function () {                                                                             // 719
    $.fn.collapse = old                                                                                                // 720
    return this                                                                                                        // 721
  }                                                                                                                    // 722
                                                                                                                       // 723
                                                                                                                       // 724
  // COLLAPSE DATA-API                                                                                                 // 725
  // =================                                                                                                 // 726
                                                                                                                       // 727
  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {                              // 728
    var $this   = $(this)                                                                                              // 729
                                                                                                                       // 730
    if (!$this.attr('data-target')) e.preventDefault()                                                                 // 731
                                                                                                                       // 732
    var $target = getTargetFromTrigger($this)                                                                          // 733
    var data    = $target.data('bs.collapse')                                                                          // 734
    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })                                      // 735
                                                                                                                       // 736
    Plugin.call($target, option)                                                                                       // 737
  })                                                                                                                   // 738
                                                                                                                       // 739
}(jQuery);                                                                                                             // 740
                                                                                                                       // 741
/* ========================================================================                                            // 742
 * Bootstrap: dropdown.js v3.3.0                                                                                       // 743
 * http://getbootstrap.com/javascript/#dropdowns                                                                       // 744
 * ========================================================================                                            // 745
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 746
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 747
 * ======================================================================== */                                         // 748
                                                                                                                       // 749
                                                                                                                       // 750
+function ($) {                                                                                                        // 751
  'use strict';                                                                                                        // 752
                                                                                                                       // 753
  // DROPDOWN CLASS DEFINITION                                                                                         // 754
  // =========================                                                                                         // 755
                                                                                                                       // 756
  var backdrop = '.dropdown-backdrop'                                                                                  // 757
  var toggle   = '[data-toggle="dropdown"]'                                                                            // 758
  var Dropdown = function (element) {                                                                                  // 759
    $(element).on('click.bs.dropdown', this.toggle)                                                                    // 760
  }                                                                                                                    // 761
                                                                                                                       // 762
  Dropdown.VERSION = '3.3.0'                                                                                           // 763
                                                                                                                       // 764
  Dropdown.prototype.toggle = function (e) {                                                                           // 765
    var $this = $(this)                                                                                                // 766
                                                                                                                       // 767
    if ($this.is('.disabled, :disabled')) return                                                                       // 768
                                                                                                                       // 769
    var $parent  = getParent($this)                                                                                    // 770
    var isActive = $parent.hasClass('open')                                                                            // 771
                                                                                                                       // 772
    clearMenus()                                                                                                       // 773
                                                                                                                       // 774
    if (!isActive) {                                                                                                   // 775
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {                      // 776
        // if mobile we use a backdrop because click events don't delegate                                             // 777
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)                             // 778
      }                                                                                                                // 779
                                                                                                                       // 780
      var relatedTarget = { relatedTarget: this }                                                                      // 781
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))                                                  // 782
                                                                                                                       // 783
      if (e.isDefaultPrevented()) return                                                                               // 784
                                                                                                                       // 785
      $this                                                                                                            // 786
        .trigger('focus')                                                                                              // 787
        .attr('aria-expanded', 'true')                                                                                 // 788
                                                                                                                       // 789
      $parent                                                                                                          // 790
        .toggleClass('open')                                                                                           // 791
        .trigger('shown.bs.dropdown', relatedTarget)                                                                   // 792
    }                                                                                                                  // 793
                                                                                                                       // 794
    return false                                                                                                       // 795
  }                                                                                                                    // 796
                                                                                                                       // 797
  Dropdown.prototype.keydown = function (e) {                                                                          // 798
    if (!/(38|40|27|32)/.test(e.which)) return                                                                         // 799
                                                                                                                       // 800
    var $this = $(this)                                                                                                // 801
                                                                                                                       // 802
    e.preventDefault()                                                                                                 // 803
    e.stopPropagation()                                                                                                // 804
                                                                                                                       // 805
    if ($this.is('.disabled, :disabled')) return                                                                       // 806
                                                                                                                       // 807
    var $parent  = getParent($this)                                                                                    // 808
    var isActive = $parent.hasClass('open')                                                                            // 809
                                                                                                                       // 810
    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {                                                 // 811
      if (e.which == 27) $parent.find(toggle).trigger('focus')                                                         // 812
      return $this.trigger('click')                                                                                    // 813
    }                                                                                                                  // 814
                                                                                                                       // 815
    var desc = ' li:not(.divider):visible a'                                                                           // 816
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)                                    // 817
                                                                                                                       // 818
    if (!$items.length) return                                                                                         // 819
                                                                                                                       // 820
    var index = $items.index(e.target)                                                                                 // 821
                                                                                                                       // 822
    if (e.which == 38 && index > 0)                 index--                        // up                               // 823
    if (e.which == 40 && index < $items.length - 1) index++                        // down                             // 824
    if (!~index)                                      index = 0                                                        // 825
                                                                                                                       // 826
    $items.eq(index).trigger('focus')                                                                                  // 827
  }                                                                                                                    // 828
                                                                                                                       // 829
  function clearMenus(e) {                                                                                             // 830
    if (e && e.which === 3) return                                                                                     // 831
    $(backdrop).remove()                                                                                               // 832
    $(toggle).each(function () {                                                                                       // 833
      var $this         = $(this)                                                                                      // 834
      var $parent       = getParent($this)                                                                             // 835
      var relatedTarget = { relatedTarget: this }                                                                      // 836
                                                                                                                       // 837
      if (!$parent.hasClass('open')) return                                                                            // 838
                                                                                                                       // 839
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))                                                  // 840
                                                                                                                       // 841
      if (e.isDefaultPrevented()) return                                                                               // 842
                                                                                                                       // 843
      $this.attr('aria-expanded', 'false')                                                                             // 844
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)                                         // 845
    })                                                                                                                 // 846
  }                                                                                                                    // 847
                                                                                                                       // 848
  function getParent($this) {                                                                                          // 849
    var selector = $this.attr('data-target')                                                                           // 850
                                                                                                                       // 851
    if (!selector) {                                                                                                   // 852
      selector = $this.attr('href')                                                                                    // 853
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7     // 854
    }                                                                                                                  // 855
                                                                                                                       // 856
    var $parent = selector && $(selector)                                                                              // 857
                                                                                                                       // 858
    return $parent && $parent.length ? $parent : $this.parent()                                                        // 859
  }                                                                                                                    // 860
                                                                                                                       // 861
                                                                                                                       // 862
  // DROPDOWN PLUGIN DEFINITION                                                                                        // 863
  // ==========================                                                                                        // 864
                                                                                                                       // 865
  function Plugin(option) {                                                                                            // 866
    return this.each(function () {                                                                                     // 867
      var $this = $(this)                                                                                              // 868
      var data  = $this.data('bs.dropdown')                                                                            // 869
                                                                                                                       // 870
      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))                                                // 871
      if (typeof option == 'string') data[option].call($this)                                                          // 872
    })                                                                                                                 // 873
  }                                                                                                                    // 874
                                                                                                                       // 875
  var old = $.fn.dropdown                                                                                              // 876
                                                                                                                       // 877
  $.fn.dropdown             = Plugin                                                                                   // 878
  $.fn.dropdown.Constructor = Dropdown                                                                                 // 879
                                                                                                                       // 880
                                                                                                                       // 881
  // DROPDOWN NO CONFLICT                                                                                              // 882
  // ====================                                                                                              // 883
                                                                                                                       // 884
  $.fn.dropdown.noConflict = function () {                                                                             // 885
    $.fn.dropdown = old                                                                                                // 886
    return this                                                                                                        // 887
  }                                                                                                                    // 888
                                                                                                                       // 889
                                                                                                                       // 890
  // APPLY TO STANDARD DROPDOWN ELEMENTS                                                                               // 891
  // ===================================                                                                               // 892
                                                                                                                       // 893
  $(document)                                                                                                          // 894
    .on('click.bs.dropdown.data-api', clearMenus)                                                                      // 895
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })                          // 896
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)                                               // 897
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)                                            // 898
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)                                   // 899
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)                                // 900
                                                                                                                       // 901
}(jQuery);                                                                                                             // 902
                                                                                                                       // 903
/* ========================================================================                                            // 904
 * Bootstrap: modal.js v3.3.0                                                                                          // 905
 * http://getbootstrap.com/javascript/#modals                                                                          // 906
 * ========================================================================                                            // 907
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 908
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 909
 * ======================================================================== */                                         // 910
                                                                                                                       // 911
                                                                                                                       // 912
+function ($) {                                                                                                        // 913
  'use strict';                                                                                                        // 914
                                                                                                                       // 915
  // MODAL CLASS DEFINITION                                                                                            // 916
  // ======================                                                                                            // 917
                                                                                                                       // 918
  var Modal = function (element, options) {                                                                            // 919
    this.options        = options                                                                                      // 920
    this.$body          = $(document.body)                                                                             // 921
    this.$element       = $(element)                                                                                   // 922
    this.$backdrop      =                                                                                              // 923
    this.isShown        = null                                                                                         // 924
    this.scrollbarWidth = 0                                                                                            // 925
                                                                                                                       // 926
    if (this.options.remote) {                                                                                         // 927
      this.$element                                                                                                    // 928
        .find('.modal-content')                                                                                        // 929
        .load(this.options.remote, $.proxy(function () {                                                               // 930
          this.$element.trigger('loaded.bs.modal')                                                                     // 931
        }, this))                                                                                                      // 932
    }                                                                                                                  // 933
  }                                                                                                                    // 934
                                                                                                                       // 935
  Modal.VERSION  = '3.3.0'                                                                                             // 936
                                                                                                                       // 937
  Modal.TRANSITION_DURATION = 300                                                                                      // 938
  Modal.BACKDROP_TRANSITION_DURATION = 150                                                                             // 939
                                                                                                                       // 940
  Modal.DEFAULTS = {                                                                                                   // 941
    backdrop: true,                                                                                                    // 942
    keyboard: true,                                                                                                    // 943
    show: true                                                                                                         // 944
  }                                                                                                                    // 945
                                                                                                                       // 946
  Modal.prototype.toggle = function (_relatedTarget) {                                                                 // 947
    return this.isShown ? this.hide() : this.show(_relatedTarget)                                                      // 948
  }                                                                                                                    // 949
                                                                                                                       // 950
  Modal.prototype.show = function (_relatedTarget) {                                                                   // 951
    var that = this                                                                                                    // 952
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })                                             // 953
                                                                                                                       // 954
    this.$element.trigger(e)                                                                                           // 955
                                                                                                                       // 956
    if (this.isShown || e.isDefaultPrevented()) return                                                                 // 957
                                                                                                                       // 958
    this.isShown = true                                                                                                // 959
                                                                                                                       // 960
    this.checkScrollbar()                                                                                              // 961
    this.$body.addClass('modal-open')                                                                                  // 962
                                                                                                                       // 963
    this.setScrollbar()                                                                                                // 964
    this.escape()                                                                                                      // 965
                                                                                                                       // 966
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))                     // 967
                                                                                                                       // 968
    this.backdrop(function () {                                                                                        // 969
      var transition = $.support.transition && that.$element.hasClass('fade')                                          // 970
                                                                                                                       // 971
      if (!that.$element.parent().length) {                                                                            // 972
        that.$element.appendTo(that.$body) // don't move modals dom position                                           // 973
      }                                                                                                                // 974
                                                                                                                       // 975
      that.$element                                                                                                    // 976
        .show()                                                                                                        // 977
        .scrollTop(0)                                                                                                  // 978
                                                                                                                       // 979
      if (transition) {                                                                                                // 980
        that.$element[0].offsetWidth // force reflow                                                                   // 981
      }                                                                                                                // 982
                                                                                                                       // 983
      that.$element                                                                                                    // 984
        .addClass('in')                                                                                                // 985
        .attr('aria-hidden', false)                                                                                    // 986
                                                                                                                       // 987
      that.enforceFocus()                                                                                              // 988
                                                                                                                       // 989
      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })                                             // 990
                                                                                                                       // 991
      transition ?                                                                                                     // 992
        that.$element.find('.modal-dialog') // wait for modal to slide in                                              // 993
          .one('bsTransitionEnd', function () {                                                                        // 994
            that.$element.trigger('focus').trigger(e)                                                                  // 995
          })                                                                                                           // 996
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :                                                           // 997
        that.$element.trigger('focus').trigger(e)                                                                      // 998
    })                                                                                                                 // 999
  }                                                                                                                    // 1000
                                                                                                                       // 1001
  Modal.prototype.hide = function (e) {                                                                                // 1002
    if (e) e.preventDefault()                                                                                          // 1003
                                                                                                                       // 1004
    e = $.Event('hide.bs.modal')                                                                                       // 1005
                                                                                                                       // 1006
    this.$element.trigger(e)                                                                                           // 1007
                                                                                                                       // 1008
    if (!this.isShown || e.isDefaultPrevented()) return                                                                // 1009
                                                                                                                       // 1010
    this.isShown = false                                                                                               // 1011
                                                                                                                       // 1012
    this.escape()                                                                                                      // 1013
                                                                                                                       // 1014
    $(document).off('focusin.bs.modal')                                                                                // 1015
                                                                                                                       // 1016
    this.$element                                                                                                      // 1017
      .removeClass('in')                                                                                               // 1018
      .attr('aria-hidden', true)                                                                                       // 1019
      .off('click.dismiss.bs.modal')                                                                                   // 1020
                                                                                                                       // 1021
    $.support.transition && this.$element.hasClass('fade') ?                                                           // 1022
      this.$element                                                                                                    // 1023
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))                                                         // 1024
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :                                                             // 1025
      this.hideModal()                                                                                                 // 1026
  }                                                                                                                    // 1027
                                                                                                                       // 1028
  Modal.prototype.enforceFocus = function () {                                                                         // 1029
    $(document)                                                                                                        // 1030
      .off('focusin.bs.modal') // guard against infinite focus loop                                                    // 1031
      .on('focusin.bs.modal', $.proxy(function (e) {                                                                   // 1032
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {                                    // 1033
          this.$element.trigger('focus')                                                                               // 1034
        }                                                                                                              // 1035
      }, this))                                                                                                        // 1036
  }                                                                                                                    // 1037
                                                                                                                       // 1038
  Modal.prototype.escape = function () {                                                                               // 1039
    if (this.isShown && this.options.keyboard) {                                                                       // 1040
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {                                              // 1041
        e.which == 27 && this.hide()                                                                                   // 1042
      }, this))                                                                                                        // 1043
    } else if (!this.isShown) {                                                                                        // 1044
      this.$element.off('keydown.dismiss.bs.modal')                                                                    // 1045
    }                                                                                                                  // 1046
  }                                                                                                                    // 1047
                                                                                                                       // 1048
  Modal.prototype.hideModal = function () {                                                                            // 1049
    var that = this                                                                                                    // 1050
    this.$element.hide()                                                                                               // 1051
    this.backdrop(function () {                                                                                        // 1052
      that.$body.removeClass('modal-open')                                                                             // 1053
      that.resetScrollbar()                                                                                            // 1054
      that.$element.trigger('hidden.bs.modal')                                                                         // 1055
    })                                                                                                                 // 1056
  }                                                                                                                    // 1057
                                                                                                                       // 1058
  Modal.prototype.removeBackdrop = function () {                                                                       // 1059
    this.$backdrop && this.$backdrop.remove()                                                                          // 1060
    this.$backdrop = null                                                                                              // 1061
  }                                                                                                                    // 1062
                                                                                                                       // 1063
  Modal.prototype.backdrop = function (callback) {                                                                     // 1064
    var that = this                                                                                                    // 1065
    var animate = this.$element.hasClass('fade') ? 'fade' : ''                                                         // 1066
                                                                                                                       // 1067
    if (this.isShown && this.options.backdrop) {                                                                       // 1068
      var doAnimate = $.support.transition && animate                                                                  // 1069
                                                                                                                       // 1070
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')                                             // 1071
        .prependTo(this.$element)                                                                                      // 1072
        .on('click.dismiss.bs.modal', $.proxy(function (e) {                                                           // 1073
          if (e.target !== e.currentTarget) return                                                                     // 1074
          this.options.backdrop == 'static'                                                                            // 1075
            ? this.$element[0].focus.call(this.$element[0])                                                            // 1076
            : this.hide.call(this)                                                                                     // 1077
        }, this))                                                                                                      // 1078
                                                                                                                       // 1079
      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow                                                     // 1080
                                                                                                                       // 1081
      this.$backdrop.addClass('in')                                                                                    // 1082
                                                                                                                       // 1083
      if (!callback) return                                                                                            // 1084
                                                                                                                       // 1085
      doAnimate ?                                                                                                      // 1086
        this.$backdrop                                                                                                 // 1087
          .one('bsTransitionEnd', callback)                                                                            // 1088
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :                                                  // 1089
        callback()                                                                                                     // 1090
                                                                                                                       // 1091
    } else if (!this.isShown && this.$backdrop) {                                                                      // 1092
      this.$backdrop.removeClass('in')                                                                                 // 1093
                                                                                                                       // 1094
      var callbackRemove = function () {                                                                               // 1095
        that.removeBackdrop()                                                                                          // 1096
        callback && callback()                                                                                         // 1097
      }                                                                                                                // 1098
      $.support.transition && this.$element.hasClass('fade') ?                                                         // 1099
        this.$backdrop                                                                                                 // 1100
          .one('bsTransitionEnd', callbackRemove)                                                                      // 1101
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :                                                  // 1102
        callbackRemove()                                                                                               // 1103
                                                                                                                       // 1104
    } else if (callback) {                                                                                             // 1105
      callback()                                                                                                       // 1106
    }                                                                                                                  // 1107
  }                                                                                                                    // 1108
                                                                                                                       // 1109
  Modal.prototype.checkScrollbar = function () {                                                                       // 1110
    this.scrollbarWidth = this.measureScrollbar()                                                                      // 1111
  }                                                                                                                    // 1112
                                                                                                                       // 1113
  Modal.prototype.setScrollbar = function () {                                                                         // 1114
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)                                                 // 1115
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)                            // 1116
  }                                                                                                                    // 1117
                                                                                                                       // 1118
  Modal.prototype.resetScrollbar = function () {                                                                       // 1119
    this.$body.css('padding-right', '')                                                                                // 1120
  }                                                                                                                    // 1121
                                                                                                                       // 1122
  Modal.prototype.measureScrollbar = function () { // thx walsh                                                        // 1123
    if (document.body.clientWidth >= window.innerWidth) return 0                                                       // 1124
    var scrollDiv = document.createElement('div')                                                                      // 1125
    scrollDiv.className = 'modal-scrollbar-measure'                                                                    // 1126
    this.$body.append(scrollDiv)                                                                                       // 1127
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth                                                 // 1128
    this.$body[0].removeChild(scrollDiv)                                                                               // 1129
    return scrollbarWidth                                                                                              // 1130
  }                                                                                                                    // 1131
                                                                                                                       // 1132
                                                                                                                       // 1133
  // MODAL PLUGIN DEFINITION                                                                                           // 1134
  // =======================                                                                                           // 1135
                                                                                                                       // 1136
  function Plugin(option, _relatedTarget) {                                                                            // 1137
    return this.each(function () {                                                                                     // 1138
      var $this   = $(this)                                                                                            // 1139
      var data    = $this.data('bs.modal')                                                                             // 1140
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)                    // 1141
                                                                                                                       // 1142
      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))                                             // 1143
      if (typeof option == 'string') data[option](_relatedTarget)                                                      // 1144
      else if (options.show) data.show(_relatedTarget)                                                                 // 1145
    })                                                                                                                 // 1146
  }                                                                                                                    // 1147
                                                                                                                       // 1148
  var old = $.fn.modal                                                                                                 // 1149
                                                                                                                       // 1150
  $.fn.modal             = Plugin                                                                                      // 1151
  $.fn.modal.Constructor = Modal                                                                                       // 1152
                                                                                                                       // 1153
                                                                                                                       // 1154
  // MODAL NO CONFLICT                                                                                                 // 1155
  // =================                                                                                                 // 1156
                                                                                                                       // 1157
  $.fn.modal.noConflict = function () {                                                                                // 1158
    $.fn.modal = old                                                                                                   // 1159
    return this                                                                                                        // 1160
  }                                                                                                                    // 1161
                                                                                                                       // 1162
                                                                                                                       // 1163
  // MODAL DATA-API                                                                                                    // 1164
  // ==============                                                                                                    // 1165
                                                                                                                       // 1166
  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {                                    // 1167
    var $this   = $(this)                                                                                              // 1168
    var href    = $this.attr('href')                                                                                   // 1169
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7        // 1170
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
                                                                                                                       // 1172
    if ($this.is('a')) e.preventDefault()                                                                              // 1173
                                                                                                                       // 1174
    $target.one('show.bs.modal', function (showEvent) {                                                                // 1175
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown      // 1176
      $target.one('hidden.bs.modal', function () {                                                                     // 1177
        $this.is(':visible') && $this.trigger('focus')                                                                 // 1178
      })                                                                                                               // 1179
    })                                                                                                                 // 1180
    Plugin.call($target, option, this)                                                                                 // 1181
  })                                                                                                                   // 1182
                                                                                                                       // 1183
}(jQuery);                                                                                                             // 1184
                                                                                                                       // 1185
/* ========================================================================                                            // 1186
 * Bootstrap: tooltip.js v3.3.0                                                                                        // 1187
 * http://getbootstrap.com/javascript/#tooltip                                                                         // 1188
 * Inspired by the original jQuery.tipsy by Jason Frame                                                                // 1189
 * ========================================================================                                            // 1190
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 1191
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1192
 * ======================================================================== */                                         // 1193
                                                                                                                       // 1194
                                                                                                                       // 1195
+function ($) {                                                                                                        // 1196
  'use strict';                                                                                                        // 1197
                                                                                                                       // 1198
  // TOOLTIP PUBLIC CLASS DEFINITION                                                                                   // 1199
  // ===============================                                                                                   // 1200
                                                                                                                       // 1201
  var Tooltip = function (element, options) {                                                                          // 1202
    this.type       =                                                                                                  // 1203
    this.options    =                                                                                                  // 1204
    this.enabled    =                                                                                                  // 1205
    this.timeout    =                                                                                                  // 1206
    this.hoverState =                                                                                                  // 1207
    this.$element   = null                                                                                             // 1208
                                                                                                                       // 1209
    this.init('tooltip', element, options)                                                                             // 1210
  }                                                                                                                    // 1211
                                                                                                                       // 1212
  Tooltip.VERSION  = '3.3.0'                                                                                           // 1213
                                                                                                                       // 1214
  Tooltip.TRANSITION_DURATION = 150                                                                                    // 1215
                                                                                                                       // 1216
  Tooltip.DEFAULTS = {                                                                                                 // 1217
    animation: true,                                                                                                   // 1218
    placement: 'top',                                                                                                  // 1219
    selector: false,                                                                                                   // 1220
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',                                                                                            // 1222
    title: '',                                                                                                         // 1223
    delay: 0,                                                                                                          // 1224
    html: false,                                                                                                       // 1225
    container: false,                                                                                                  // 1226
    viewport: {                                                                                                        // 1227
      selector: 'body',                                                                                                // 1228
      padding: 0                                                                                                       // 1229
    }                                                                                                                  // 1230
  }                                                                                                                    // 1231
                                                                                                                       // 1232
  Tooltip.prototype.init = function (type, element, options) {                                                         // 1233
    this.enabled   = true                                                                                              // 1234
    this.type      = type                                                                                              // 1235
    this.$element  = $(element)                                                                                        // 1236
    this.options   = this.getOptions(options)                                                                          // 1237
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)               // 1238
                                                                                                                       // 1239
    var triggers = this.options.trigger.split(' ')                                                                     // 1240
                                                                                                                       // 1241
    for (var i = triggers.length; i--;) {                                                                              // 1242
      var trigger = triggers[i]                                                                                        // 1243
                                                                                                                       // 1244
      if (trigger == 'click') {                                                                                        // 1245
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))                      // 1246
      } else if (trigger != 'manual') {                                                                                // 1247
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'                                                   // 1248
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'                                                  // 1249
                                                                                                                       // 1250
        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))                 // 1251
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))                 // 1252
      }                                                                                                                // 1253
    }                                                                                                                  // 1254
                                                                                                                       // 1255
    this.options.selector ?                                                                                            // 1256
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :                              // 1257
      this.fixTitle()                                                                                                  // 1258
  }                                                                                                                    // 1259
                                                                                                                       // 1260
  Tooltip.prototype.getDefaults = function () {                                                                        // 1261
    return Tooltip.DEFAULTS                                                                                            // 1262
  }                                                                                                                    // 1263
                                                                                                                       // 1264
  Tooltip.prototype.getOptions = function (options) {                                                                  // 1265
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)                                          // 1266
                                                                                                                       // 1267
    if (options.delay && typeof options.delay == 'number') {                                                           // 1268
      options.delay = {                                                                                                // 1269
        show: options.delay,                                                                                           // 1270
        hide: options.delay                                                                                            // 1271
      }                                                                                                                // 1272
    }                                                                                                                  // 1273
                                                                                                                       // 1274
    return options                                                                                                     // 1275
  }                                                                                                                    // 1276
                                                                                                                       // 1277
  Tooltip.prototype.getDelegateOptions = function () {                                                                 // 1278
    var options  = {}                                                                                                  // 1279
    var defaults = this.getDefaults()                                                                                  // 1280
                                                                                                                       // 1281
    this._options && $.each(this._options, function (key, value) {                                                     // 1282
      if (defaults[key] != value) options[key] = value                                                                 // 1283
    })                                                                                                                 // 1284
                                                                                                                       // 1285
    return options                                                                                                     // 1286
  }                                                                                                                    // 1287
                                                                                                                       // 1288
  Tooltip.prototype.enter = function (obj) {                                                                           // 1289
    var self = obj instanceof this.constructor ?                                                                       // 1290
      obj : $(obj.currentTarget).data('bs.' + this.type)                                                               // 1291
                                                                                                                       // 1292
    if (self && self.$tip && self.$tip.is(':visible')) {                                                               // 1293
      self.hoverState = 'in'                                                                                           // 1294
      return                                                                                                           // 1295
    }                                                                                                                  // 1296
                                                                                                                       // 1297
    if (!self) {                                                                                                       // 1298
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())                                        // 1299
      $(obj.currentTarget).data('bs.' + this.type, self)                                                               // 1300
    }                                                                                                                  // 1301
                                                                                                                       // 1302
    clearTimeout(self.timeout)                                                                                         // 1303
                                                                                                                       // 1304
    self.hoverState = 'in'                                                                                             // 1305
                                                                                                                       // 1306
    if (!self.options.delay || !self.options.delay.show) return self.show()                                            // 1307
                                                                                                                       // 1308
    self.timeout = setTimeout(function () {                                                                            // 1309
      if (self.hoverState == 'in') self.show()                                                                         // 1310
    }, self.options.delay.show)                                                                                        // 1311
  }                                                                                                                    // 1312
                                                                                                                       // 1313
  Tooltip.prototype.leave = function (obj) {                                                                           // 1314
    var self = obj instanceof this.constructor ?                                                                       // 1315
      obj : $(obj.currentTarget).data('bs.' + this.type)                                                               // 1316
                                                                                                                       // 1317
    if (!self) {                                                                                                       // 1318
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())                                        // 1319
      $(obj.currentTarget).data('bs.' + this.type, self)                                                               // 1320
    }                                                                                                                  // 1321
                                                                                                                       // 1322
    clearTimeout(self.timeout)                                                                                         // 1323
                                                                                                                       // 1324
    self.hoverState = 'out'                                                                                            // 1325
                                                                                                                       // 1326
    if (!self.options.delay || !self.options.delay.hide) return self.hide()                                            // 1327
                                                                                                                       // 1328
    self.timeout = setTimeout(function () {                                                                            // 1329
      if (self.hoverState == 'out') self.hide()                                                                        // 1330
    }, self.options.delay.hide)                                                                                        // 1331
  }                                                                                                                    // 1332
                                                                                                                       // 1333
  Tooltip.prototype.show = function () {                                                                               // 1334
    var e = $.Event('show.bs.' + this.type)                                                                            // 1335
                                                                                                                       // 1336
    if (this.hasContent() && this.enabled) {                                                                           // 1337
      this.$element.trigger(e)                                                                                         // 1338
                                                                                                                       // 1339
      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])                         // 1340
      if (e.isDefaultPrevented() || !inDom) return                                                                     // 1341
      var that = this                                                                                                  // 1342
                                                                                                                       // 1343
      var $tip = this.tip()                                                                                            // 1344
                                                                                                                       // 1345
      var tipId = this.getUID(this.type)                                                                               // 1346
                                                                                                                       // 1347
      this.setContent()                                                                                                // 1348
      $tip.attr('id', tipId)                                                                                           // 1349
      this.$element.attr('aria-describedby', tipId)                                                                    // 1350
                                                                                                                       // 1351
      if (this.options.animation) $tip.addClass('fade')                                                                // 1352
                                                                                                                       // 1353
      var placement = typeof this.options.placement == 'function' ?                                                    // 1354
        this.options.placement.call(this, $tip[0], this.$element[0]) :                                                 // 1355
        this.options.placement                                                                                         // 1356
                                                                                                                       // 1357
      var autoToken = /\s?auto?\s?/i                                                                                   // 1358
      var autoPlace = autoToken.test(placement)                                                                        // 1359
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'                                             // 1360
                                                                                                                       // 1361
      $tip                                                                                                             // 1362
        .detach()                                                                                                      // 1363
        .css({ top: 0, left: 0, display: 'block' })                                                                    // 1364
        .addClass(placement)                                                                                           // 1365
        .data('bs.' + this.type, this)                                                                                 // 1366
                                                                                                                       // 1367
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)                 // 1368
                                                                                                                       // 1369
      var pos          = this.getPosition()                                                                            // 1370
      var actualWidth  = $tip[0].offsetWidth                                                                           // 1371
      var actualHeight = $tip[0].offsetHeight                                                                          // 1372
                                                                                                                       // 1373
      if (autoPlace) {                                                                                                 // 1374
        var orgPlacement = placement                                                                                   // 1375
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()                 // 1376
        var containerDim = this.getPosition($container)                                                                // 1377
                                                                                                                       // 1378
        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :              // 1379
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :              // 1380
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :              // 1381
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :              // 1382
                    placement                                                                                          // 1383
                                                                                                                       // 1384
        $tip                                                                                                           // 1385
          .removeClass(orgPlacement)                                                                                   // 1386
          .addClass(placement)                                                                                         // 1387
      }                                                                                                                // 1388
                                                                                                                       // 1389
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)                       // 1390
                                                                                                                       // 1391
      this.applyPlacement(calculatedOffset, placement)                                                                 // 1392
                                                                                                                       // 1393
      var complete = function () {                                                                                     // 1394
        var prevHoverState = that.hoverState                                                                           // 1395
        that.$element.trigger('shown.bs.' + that.type)                                                                 // 1396
        that.hoverState = null                                                                                         // 1397
                                                                                                                       // 1398
        if (prevHoverState == 'out') that.leave(that)                                                                  // 1399
      }                                                                                                                // 1400
                                                                                                                       // 1401
      $.support.transition && this.$tip.hasClass('fade') ?                                                             // 1402
        $tip                                                                                                           // 1403
          .one('bsTransitionEnd', complete)                                                                            // 1404
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :                                                         // 1405
        complete()                                                                                                     // 1406
    }                                                                                                                  // 1407
  }                                                                                                                    // 1408
                                                                                                                       // 1409
  Tooltip.prototype.applyPlacement = function (offset, placement) {                                                    // 1410
    var $tip   = this.tip()                                                                                            // 1411
    var width  = $tip[0].offsetWidth                                                                                   // 1412
    var height = $tip[0].offsetHeight                                                                                  // 1413
                                                                                                                       // 1414
    // manually read margins because getBoundingClientRect includes difference                                         // 1415
    var marginTop = parseInt($tip.css('margin-top'), 10)                                                               // 1416
    var marginLeft = parseInt($tip.css('margin-left'), 10)                                                             // 1417
                                                                                                                       // 1418
    // we must check for NaN for ie 8/9                                                                                // 1419
    if (isNaN(marginTop))  marginTop  = 0                                                                              // 1420
    if (isNaN(marginLeft)) marginLeft = 0                                                                              // 1421
                                                                                                                       // 1422
    offset.top  = offset.top  + marginTop                                                                              // 1423
    offset.left = offset.left + marginLeft                                                                             // 1424
                                                                                                                       // 1425
    // $.fn.offset doesn't round pixel values                                                                          // 1426
    // so we use setOffset directly with our own function B-0                                                          // 1427
    $.offset.setOffset($tip[0], $.extend({                                                                             // 1428
      using: function (props) {                                                                                        // 1429
        $tip.css({                                                                                                     // 1430
          top: Math.round(props.top),                                                                                  // 1431
          left: Math.round(props.left)                                                                                 // 1432
        })                                                                                                             // 1433
      }                                                                                                                // 1434
    }, offset), 0)                                                                                                     // 1435
                                                                                                                       // 1436
    $tip.addClass('in')                                                                                                // 1437
                                                                                                                       // 1438
    // check to see if placing tip in new offset caused the tip to resize itself                                       // 1439
    var actualWidth  = $tip[0].offsetWidth                                                                             // 1440
    var actualHeight = $tip[0].offsetHeight                                                                            // 1441
                                                                                                                       // 1442
    if (placement == 'top' && actualHeight != height) {                                                                // 1443
      offset.top = offset.top + height - actualHeight                                                                  // 1444
    }                                                                                                                  // 1445
                                                                                                                       // 1446
    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)                            // 1447
                                                                                                                       // 1448
    if (delta.left) offset.left += delta.left                                                                          // 1449
    else offset.top += delta.top                                                                                       // 1450
                                                                                                                       // 1451
    var isVertical          = /top|bottom/.test(placement)                                                             // 1452
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'                                              // 1454
                                                                                                                       // 1455
    $tip.offset(offset)                                                                                                // 1456
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)                                            // 1457
  }                                                                                                                    // 1458
                                                                                                                       // 1459
  Tooltip.prototype.replaceArrow = function (delta, dimension, isHorizontal) {                                         // 1460
    this.arrow()                                                                                                       // 1461
      .css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')                                          // 1462
      .css(isHorizontal ? 'top' : 'left', '')                                                                          // 1463
  }                                                                                                                    // 1464
                                                                                                                       // 1465
  Tooltip.prototype.setContent = function () {                                                                         // 1466
    var $tip  = this.tip()                                                                                             // 1467
    var title = this.getTitle()                                                                                        // 1468
                                                                                                                       // 1469
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)                                            // 1470
    $tip.removeClass('fade in top bottom left right')                                                                  // 1471
  }                                                                                                                    // 1472
                                                                                                                       // 1473
  Tooltip.prototype.hide = function (callback) {                                                                       // 1474
    var that = this                                                                                                    // 1475
    var $tip = this.tip()                                                                                              // 1476
    var e    = $.Event('hide.bs.' + this.type)                                                                         // 1477
                                                                                                                       // 1478
    function complete() {                                                                                              // 1479
      if (that.hoverState != 'in') $tip.detach()                                                                       // 1480
      that.$element                                                                                                    // 1481
        .removeAttr('aria-describedby')                                                                                // 1482
        .trigger('hidden.bs.' + that.type)                                                                             // 1483
      callback && callback()                                                                                           // 1484
    }                                                                                                                  // 1485
                                                                                                                       // 1486
    this.$element.trigger(e)                                                                                           // 1487
                                                                                                                       // 1488
    if (e.isDefaultPrevented()) return                                                                                 // 1489
                                                                                                                       // 1490
    $tip.removeClass('in')                                                                                             // 1491
                                                                                                                       // 1492
    $.support.transition && this.$tip.hasClass('fade') ?                                                               // 1493
      $tip                                                                                                             // 1494
        .one('bsTransitionEnd', complete)                                                                              // 1495
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :                                                           // 1496
      complete()                                                                                                       // 1497
                                                                                                                       // 1498
    this.hoverState = null                                                                                             // 1499
                                                                                                                       // 1500
    return this                                                                                                        // 1501
  }                                                                                                                    // 1502
                                                                                                                       // 1503
  Tooltip.prototype.fixTitle = function () {                                                                           // 1504
    var $e = this.$element                                                                                             // 1505
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {                                     // 1506
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')                                         // 1507
    }                                                                                                                  // 1508
  }                                                                                                                    // 1509
                                                                                                                       // 1510
  Tooltip.prototype.hasContent = function () {                                                                         // 1511
    return this.getTitle()                                                                                             // 1512
  }                                                                                                                    // 1513
                                                                                                                       // 1514
  Tooltip.prototype.getPosition = function ($element) {                                                                // 1515
    $element   = $element || this.$element                                                                             // 1516
                                                                                                                       // 1517
    var el     = $element[0]                                                                                           // 1518
    var isBody = el.tagName == 'BODY'                                                                                  // 1519
                                                                                                                       // 1520
    var elRect    = el.getBoundingClientRect()                                                                         // 1521
    if (elRect.width == null) {                                                                                        // 1522
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })         // 1524
    }                                                                                                                  // 1525
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()                                                   // 1526
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null                           // 1528
                                                                                                                       // 1529
    return $.extend({}, elRect, scroll, outerDims, elOffset)                                                           // 1530
  }                                                                                                                    // 1531
                                                                                                                       // 1532
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {                       // 1533
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }  // 1537
                                                                                                                       // 1538
  }                                                                                                                    // 1539
                                                                                                                       // 1540
  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {                  // 1541
    var delta = { top: 0, left: 0 }                                                                                    // 1542
    if (!this.$viewport) return delta                                                                                  // 1543
                                                                                                                       // 1544
    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0                                  // 1545
    var viewportDimensions = this.getPosition(this.$viewport)                                                          // 1546
                                                                                                                       // 1547
    if (/right|left/.test(placement)) {                                                                                // 1548
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll                                     // 1549
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight                      // 1550
      if (topEdgeOffset < viewportDimensions.top) { // top overflow                                                    // 1551
        delta.top = viewportDimensions.top - topEdgeOffset                                                             // 1552
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow           // 1553
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset                              // 1554
      }                                                                                                                // 1555
    } else {                                                                                                           // 1556
      var leftEdgeOffset  = pos.left - viewportPadding                                                                 // 1557
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth                                                   // 1558
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow                                                 // 1559
        delta.left = viewportDimensions.left - leftEdgeOffset                                                          // 1560
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow                                       // 1561
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset                              // 1562
      }                                                                                                                // 1563
    }                                                                                                                  // 1564
                                                                                                                       // 1565
    return delta                                                                                                       // 1566
  }                                                                                                                    // 1567
                                                                                                                       // 1568
  Tooltip.prototype.getTitle = function () {                                                                           // 1569
    var title                                                                                                          // 1570
    var $e = this.$element                                                                                             // 1571
    var o  = this.options                                                                                              // 1572
                                                                                                                       // 1573
    title = $e.attr('data-original-title')                                                                             // 1574
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)                                               // 1575
                                                                                                                       // 1576
    return title                                                                                                       // 1577
  }                                                                                                                    // 1578
                                                                                                                       // 1579
  Tooltip.prototype.getUID = function (prefix) {                                                                       // 1580
    do prefix += ~~(Math.random() * 1000000)                                                                           // 1581
    while (document.getElementById(prefix))                                                                            // 1582
    return prefix                                                                                                      // 1583
  }                                                                                                                    // 1584
                                                                                                                       // 1585
  Tooltip.prototype.tip = function () {                                                                                // 1586
    return (this.$tip = this.$tip || $(this.options.template))                                                         // 1587
  }                                                                                                                    // 1588
                                                                                                                       // 1589
  Tooltip.prototype.arrow = function () {                                                                              // 1590
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))                                            // 1591
  }                                                                                                                    // 1592
                                                                                                                       // 1593
  Tooltip.prototype.enable = function () {                                                                             // 1594
    this.enabled = true                                                                                                // 1595
  }                                                                                                                    // 1596
                                                                                                                       // 1597
  Tooltip.prototype.disable = function () {                                                                            // 1598
    this.enabled = false                                                                                               // 1599
  }                                                                                                                    // 1600
                                                                                                                       // 1601
  Tooltip.prototype.toggleEnabled = function () {                                                                      // 1602
    this.enabled = !this.enabled                                                                                       // 1603
  }                                                                                                                    // 1604
                                                                                                                       // 1605
  Tooltip.prototype.toggle = function (e) {                                                                            // 1606
    var self = this                                                                                                    // 1607
    if (e) {                                                                                                           // 1608
      self = $(e.currentTarget).data('bs.' + this.type)                                                                // 1609
      if (!self) {                                                                                                     // 1610
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())                                        // 1611
        $(e.currentTarget).data('bs.' + this.type, self)                                                               // 1612
      }                                                                                                                // 1613
    }                                                                                                                  // 1614
                                                                                                                       // 1615
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)                                                    // 1616
  }                                                                                                                    // 1617
                                                                                                                       // 1618
  Tooltip.prototype.destroy = function () {                                                                            // 1619
    var that = this                                                                                                    // 1620
    clearTimeout(this.timeout)                                                                                         // 1621
    this.hide(function () {                                                                                            // 1622
      that.$element.off('.' + that.type).removeData('bs.' + that.type)                                                 // 1623
    })                                                                                                                 // 1624
  }                                                                                                                    // 1625
                                                                                                                       // 1626
                                                                                                                       // 1627
  // TOOLTIP PLUGIN DEFINITION                                                                                         // 1628
  // =========================                                                                                         // 1629
                                                                                                                       // 1630
  function Plugin(option) {                                                                                            // 1631
    return this.each(function () {                                                                                     // 1632
      var $this    = $(this)                                                                                           // 1633
      var data     = $this.data('bs.tooltip')                                                                          // 1634
      var options  = typeof option == 'object' && option                                                               // 1635
      var selector = options && options.selector                                                                       // 1636
                                                                                                                       // 1637
      if (!data && option == 'destroy') return                                                                         // 1638
      if (selector) {                                                                                                  // 1639
        if (!data) $this.data('bs.tooltip', (data = {}))                                                               // 1640
        if (!data[selector]) data[selector] = new Tooltip(this, options)                                               // 1641
      } else {                                                                                                         // 1642
        if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))                                       // 1643
      }                                                                                                                // 1644
      if (typeof option == 'string') data[option]()                                                                    // 1645
    })                                                                                                                 // 1646
  }                                                                                                                    // 1647
                                                                                                                       // 1648
  var old = $.fn.tooltip                                                                                               // 1649
                                                                                                                       // 1650
  $.fn.tooltip             = Plugin                                                                                    // 1651
  $.fn.tooltip.Constructor = Tooltip                                                                                   // 1652
                                                                                                                       // 1653
                                                                                                                       // 1654
  // TOOLTIP NO CONFLICT                                                                                               // 1655
  // ===================                                                                                               // 1656
                                                                                                                       // 1657
  $.fn.tooltip.noConflict = function () {                                                                              // 1658
    $.fn.tooltip = old                                                                                                 // 1659
    return this                                                                                                        // 1660
  }                                                                                                                    // 1661
                                                                                                                       // 1662
}(jQuery);                                                                                                             // 1663
                                                                                                                       // 1664
/* ========================================================================                                            // 1665
 * Bootstrap: popover.js v3.3.0                                                                                        // 1666
 * http://getbootstrap.com/javascript/#popovers                                                                        // 1667
 * ========================================================================                                            // 1668
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 1669
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1670
 * ======================================================================== */                                         // 1671
                                                                                                                       // 1672
                                                                                                                       // 1673
+function ($) {                                                                                                        // 1674
  'use strict';                                                                                                        // 1675
                                                                                                                       // 1676
  // POPOVER PUBLIC CLASS DEFINITION                                                                                   // 1677
  // ===============================                                                                                   // 1678
                                                                                                                       // 1679
  var Popover = function (element, options) {                                                                          // 1680
    this.init('popover', element, options)                                                                             // 1681
  }                                                                                                                    // 1682
                                                                                                                       // 1683
  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')                                                    // 1684
                                                                                                                       // 1685
  Popover.VERSION  = '3.3.0'                                                                                           // 1686
                                                                                                                       // 1687
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {                                                 // 1688
    placement: 'right',                                                                                                // 1689
    trigger: 'click',                                                                                                  // 1690
    content: '',                                                                                                       // 1691
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })                                                                                                                   // 1693
                                                                                                                       // 1694
                                                                                                                       // 1695
  // NOTE: POPOVER EXTENDS tooltip.js                                                                                  // 1696
  // ================================                                                                                  // 1697
                                                                                                                       // 1698
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)                                                 // 1699
                                                                                                                       // 1700
  Popover.prototype.constructor = Popover                                                                              // 1701
                                                                                                                       // 1702
  Popover.prototype.getDefaults = function () {                                                                        // 1703
    return Popover.DEFAULTS                                                                                            // 1704
  }                                                                                                                    // 1705
                                                                                                                       // 1706
  Popover.prototype.setContent = function () {                                                                         // 1707
    var $tip    = this.tip()                                                                                           // 1708
    var title   = this.getTitle()                                                                                      // 1709
    var content = this.getContent()                                                                                    // 1710
                                                                                                                       // 1711
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)                                            // 1712
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events   // 1713
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'                                    // 1714
    ](content)                                                                                                         // 1715
                                                                                                                       // 1716
    $tip.removeClass('fade top bottom left right in')                                                                  // 1717
                                                                                                                       // 1718
    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do                                       // 1719
    // this manually by checking the contents.                                                                         // 1720
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()                                        // 1721
  }                                                                                                                    // 1722
                                                                                                                       // 1723
  Popover.prototype.hasContent = function () {                                                                         // 1724
    return this.getTitle() || this.getContent()                                                                        // 1725
  }                                                                                                                    // 1726
                                                                                                                       // 1727
  Popover.prototype.getContent = function () {                                                                         // 1728
    var $e = this.$element                                                                                             // 1729
    var o  = this.options                                                                                              // 1730
                                                                                                                       // 1731
    return $e.attr('data-content')                                                                                     // 1732
      || (typeof o.content == 'function' ?                                                                             // 1733
            o.content.call($e[0]) :                                                                                    // 1734
            o.content)                                                                                                 // 1735
  }                                                                                                                    // 1736
                                                                                                                       // 1737
  Popover.prototype.arrow = function () {                                                                              // 1738
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))                                                    // 1739
  }                                                                                                                    // 1740
                                                                                                                       // 1741
  Popover.prototype.tip = function () {                                                                                // 1742
    if (!this.$tip) this.$tip = $(this.options.template)                                                               // 1743
    return this.$tip                                                                                                   // 1744
  }                                                                                                                    // 1745
                                                                                                                       // 1746
                                                                                                                       // 1747
  // POPOVER PLUGIN DEFINITION                                                                                         // 1748
  // =========================                                                                                         // 1749
                                                                                                                       // 1750
  function Plugin(option) {                                                                                            // 1751
    return this.each(function () {                                                                                     // 1752
      var $this    = $(this)                                                                                           // 1753
      var data     = $this.data('bs.popover')                                                                          // 1754
      var options  = typeof option == 'object' && option                                                               // 1755
      var selector = options && options.selector                                                                       // 1756
                                                                                                                       // 1757
      if (!data && option == 'destroy') return                                                                         // 1758
      if (selector) {                                                                                                  // 1759
        if (!data) $this.data('bs.popover', (data = {}))                                                               // 1760
        if (!data[selector]) data[selector] = new Popover(this, options)                                               // 1761
      } else {                                                                                                         // 1762
        if (!data) $this.data('bs.popover', (data = new Popover(this, options)))                                       // 1763
      }                                                                                                                // 1764
      if (typeof option == 'string') data[option]()                                                                    // 1765
    })                                                                                                                 // 1766
  }                                                                                                                    // 1767
                                                                                                                       // 1768
  var old = $.fn.popover                                                                                               // 1769
                                                                                                                       // 1770
  $.fn.popover             = Plugin                                                                                    // 1771
  $.fn.popover.Constructor = Popover                                                                                   // 1772
                                                                                                                       // 1773
                                                                                                                       // 1774
  // POPOVER NO CONFLICT                                                                                               // 1775
  // ===================                                                                                               // 1776
                                                                                                                       // 1777
  $.fn.popover.noConflict = function () {                                                                              // 1778
    $.fn.popover = old                                                                                                 // 1779
    return this                                                                                                        // 1780
  }                                                                                                                    // 1781
                                                                                                                       // 1782
}(jQuery);                                                                                                             // 1783
                                                                                                                       // 1784
/* ========================================================================                                            // 1785
 * Bootstrap: scrollspy.js v3.3.0                                                                                      // 1786
 * http://getbootstrap.com/javascript/#scrollspy                                                                       // 1787
 * ========================================================================                                            // 1788
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 1789
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1790
 * ======================================================================== */                                         // 1791
                                                                                                                       // 1792
                                                                                                                       // 1793
+function ($) {                                                                                                        // 1794
  'use strict';                                                                                                        // 1795
                                                                                                                       // 1796
  // SCROLLSPY CLASS DEFINITION                                                                                        // 1797
  // ==========================                                                                                        // 1798
                                                                                                                       // 1799
  function ScrollSpy(element, options) {                                                                               // 1800
    var process  = $.proxy(this.process, this)                                                                         // 1801
                                                                                                                       // 1802
    this.$body          = $('body')                                                                                    // 1803
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)                                               // 1804
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)                                                    // 1805
    this.selector       = (this.options.target || '') + ' .nav li > a'                                                 // 1806
    this.offsets        = []                                                                                           // 1807
    this.targets        = []                                                                                           // 1808
    this.activeTarget   = null                                                                                         // 1809
    this.scrollHeight   = 0                                                                                            // 1810
                                                                                                                       // 1811
    this.$scrollElement.on('scroll.bs.scrollspy', process)                                                             // 1812
    this.refresh()                                                                                                     // 1813
    this.process()                                                                                                     // 1814
  }                                                                                                                    // 1815
                                                                                                                       // 1816
  ScrollSpy.VERSION  = '3.3.0'                                                                                         // 1817
                                                                                                                       // 1818
  ScrollSpy.DEFAULTS = {                                                                                               // 1819
    offset: 10                                                                                                         // 1820
  }                                                                                                                    // 1821
                                                                                                                       // 1822
  ScrollSpy.prototype.getScrollHeight = function () {                                                                  // 1823
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }                                                                                                                    // 1825
                                                                                                                       // 1826
  ScrollSpy.prototype.refresh = function () {                                                                          // 1827
    var offsetMethod = 'offset'                                                                                        // 1828
    var offsetBase   = 0                                                                                               // 1829
                                                                                                                       // 1830
    if (!$.isWindow(this.$scrollElement[0])) {                                                                         // 1831
      offsetMethod = 'position'                                                                                        // 1832
      offsetBase   = this.$scrollElement.scrollTop()                                                                   // 1833
    }                                                                                                                  // 1834
                                                                                                                       // 1835
    this.offsets = []                                                                                                  // 1836
    this.targets = []                                                                                                  // 1837
    this.scrollHeight = this.getScrollHeight()                                                                         // 1838
                                                                                                                       // 1839
    var self     = this                                                                                                // 1840
                                                                                                                       // 1841
    this.$body                                                                                                         // 1842
      .find(this.selector)                                                                                             // 1843
      .map(function () {                                                                                               // 1844
        var $el   = $(this)                                                                                            // 1845
        var href  = $el.data('target') || $el.attr('href')                                                             // 1846
        var $href = /^#./.test(href) && $(href)                                                                        // 1847
                                                                                                                       // 1848
        return ($href                                                                                                  // 1849
          && $href.length                                                                                              // 1850
          && $href.is(':visible')                                                                                      // 1851
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null                                                 // 1852
      })                                                                                                               // 1853
      .sort(function (a, b) { return a[0] - b[0] })                                                                    // 1854
      .each(function () {                                                                                              // 1855
        self.offsets.push(this[0])                                                                                     // 1856
        self.targets.push(this[1])                                                                                     // 1857
      })                                                                                                               // 1858
  }                                                                                                                    // 1859
                                                                                                                       // 1860
  ScrollSpy.prototype.process = function () {                                                                          // 1861
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset                                           // 1862
    var scrollHeight = this.getScrollHeight()                                                                          // 1863
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()                               // 1864
    var offsets      = this.offsets                                                                                    // 1865
    var targets      = this.targets                                                                                    // 1866
    var activeTarget = this.activeTarget                                                                               // 1867
    var i                                                                                                              // 1868
                                                                                                                       // 1869
    if (this.scrollHeight != scrollHeight) {                                                                           // 1870
      this.refresh()                                                                                                   // 1871
    }                                                                                                                  // 1872
                                                                                                                       // 1873
    if (scrollTop >= maxScroll) {                                                                                      // 1874
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)                                     // 1875
    }                                                                                                                  // 1876
                                                                                                                       // 1877
    if (activeTarget && scrollTop < offsets[0]) {                                                                      // 1878
      this.activeTarget = null                                                                                         // 1879
      return this.clear()                                                                                              // 1880
    }                                                                                                                  // 1881
                                                                                                                       // 1882
    for (i = offsets.length; i--;) {                                                                                   // 1883
      activeTarget != targets[i]                                                                                       // 1884
        && scrollTop >= offsets[i]                                                                                     // 1885
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])                                                            // 1886
        && this.activate(targets[i])                                                                                   // 1887
    }                                                                                                                  // 1888
  }                                                                                                                    // 1889
                                                                                                                       // 1890
  ScrollSpy.prototype.activate = function (target) {                                                                   // 1891
    this.activeTarget = target                                                                                         // 1892
                                                                                                                       // 1893
    this.clear()                                                                                                       // 1894
                                                                                                                       // 1895
    var selector = this.selector +                                                                                     // 1896
        '[data-target="' + target + '"],' +                                                                            // 1897
        this.selector + '[href="' + target + '"]'                                                                      // 1898
                                                                                                                       // 1899
    var active = $(selector)                                                                                           // 1900
      .parents('li')                                                                                                   // 1901
      .addClass('active')                                                                                              // 1902
                                                                                                                       // 1903
    if (active.parent('.dropdown-menu').length) {                                                                      // 1904
      active = active                                                                                                  // 1905
        .closest('li.dropdown')                                                                                        // 1906
        .addClass('active')                                                                                            // 1907
    }                                                                                                                  // 1908
                                                                                                                       // 1909
    active.trigger('activate.bs.scrollspy')                                                                            // 1910
  }                                                                                                                    // 1911
                                                                                                                       // 1912
  ScrollSpy.prototype.clear = function () {                                                                            // 1913
    $(this.selector)                                                                                                   // 1914
      .parentsUntil(this.options.target, '.active')                                                                    // 1915
      .removeClass('active')                                                                                           // 1916
  }                                                                                                                    // 1917
                                                                                                                       // 1918
                                                                                                                       // 1919
  // SCROLLSPY PLUGIN DEFINITION                                                                                       // 1920
  // ===========================                                                                                       // 1921
                                                                                                                       // 1922
  function Plugin(option) {                                                                                            // 1923
    return this.each(function () {                                                                                     // 1924
      var $this   = $(this)                                                                                            // 1925
      var data    = $this.data('bs.scrollspy')                                                                         // 1926
      var options = typeof option == 'object' && option                                                                // 1927
                                                                                                                       // 1928
      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))                                     // 1929
      if (typeof option == 'string') data[option]()                                                                    // 1930
    })                                                                                                                 // 1931
  }                                                                                                                    // 1932
                                                                                                                       // 1933
  var old = $.fn.scrollspy                                                                                             // 1934
                                                                                                                       // 1935
  $.fn.scrollspy             = Plugin                                                                                  // 1936
  $.fn.scrollspy.Constructor = ScrollSpy                                                                               // 1937
                                                                                                                       // 1938
                                                                                                                       // 1939
  // SCROLLSPY NO CONFLICT                                                                                             // 1940
  // =====================                                                                                             // 1941
                                                                                                                       // 1942
  $.fn.scrollspy.noConflict = function () {                                                                            // 1943
    $.fn.scrollspy = old                                                                                               // 1944
    return this                                                                                                        // 1945
  }                                                                                                                    // 1946
                                                                                                                       // 1947
                                                                                                                       // 1948
  // SCROLLSPY DATA-API                                                                                                // 1949
  // ==================                                                                                                // 1950
                                                                                                                       // 1951
  $(window).on('load.bs.scrollspy.data-api', function () {                                                             // 1952
    $('[data-spy="scroll"]').each(function () {                                                                        // 1953
      var $spy = $(this)                                                                                               // 1954
      Plugin.call($spy, $spy.data())                                                                                   // 1955
    })                                                                                                                 // 1956
  })                                                                                                                   // 1957
                                                                                                                       // 1958
}(jQuery);                                                                                                             // 1959
                                                                                                                       // 1960
/* ========================================================================                                            // 1961
 * Bootstrap: tab.js v3.3.0                                                                                            // 1962
 * http://getbootstrap.com/javascript/#tabs                                                                            // 1963
 * ========================================================================                                            // 1964
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 1965
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 1966
 * ======================================================================== */                                         // 1967
                                                                                                                       // 1968
                                                                                                                       // 1969
+function ($) {                                                                                                        // 1970
  'use strict';                                                                                                        // 1971
                                                                                                                       // 1972
  // TAB CLASS DEFINITION                                                                                              // 1973
  // ====================                                                                                              // 1974
                                                                                                                       // 1975
  var Tab = function (element) {                                                                                       // 1976
    this.element = $(element)                                                                                          // 1977
  }                                                                                                                    // 1978
                                                                                                                       // 1979
  Tab.VERSION = '3.3.0'                                                                                                // 1980
                                                                                                                       // 1981
  Tab.TRANSITION_DURATION = 150                                                                                        // 1982
                                                                                                                       // 1983
  Tab.prototype.show = function () {                                                                                   // 1984
    var $this    = this.element                                                                                        // 1985
    var $ul      = $this.closest('ul:not(.dropdown-menu)')                                                             // 1986
    var selector = $this.data('target')                                                                                // 1987
                                                                                                                       // 1988
    if (!selector) {                                                                                                   // 1989
      selector = $this.attr('href')                                                                                    // 1990
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7                                   // 1991
    }                                                                                                                  // 1992
                                                                                                                       // 1993
    if ($this.parent('li').hasClass('active')) return                                                                  // 1994
                                                                                                                       // 1995
    var $previous = $ul.find('.active:last a')                                                                         // 1996
    var hideEvent = $.Event('hide.bs.tab', {                                                                           // 1997
      relatedTarget: $this[0]                                                                                          // 1998
    })                                                                                                                 // 1999
    var showEvent = $.Event('show.bs.tab', {                                                                           // 2000
      relatedTarget: $previous[0]                                                                                      // 2001
    })                                                                                                                 // 2002
                                                                                                                       // 2003
    $previous.trigger(hideEvent)                                                                                       // 2004
    $this.trigger(showEvent)                                                                                           // 2005
                                                                                                                       // 2006
    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return                                       // 2007
                                                                                                                       // 2008
    var $target = $(selector)                                                                                          // 2009
                                                                                                                       // 2010
    this.activate($this.closest('li'), $ul)                                                                            // 2011
    this.activate($target, $target.parent(), function () {                                                             // 2012
      $previous.trigger({                                                                                              // 2013
        type: 'hidden.bs.tab',                                                                                         // 2014
        relatedTarget: $this[0]                                                                                        // 2015
      })                                                                                                               // 2016
      $this.trigger({                                                                                                  // 2017
        type: 'shown.bs.tab',                                                                                          // 2018
        relatedTarget: $previous[0]                                                                                    // 2019
      })                                                                                                               // 2020
    })                                                                                                                 // 2021
  }                                                                                                                    // 2022
                                                                                                                       // 2023
  Tab.prototype.activate = function (element, container, callback) {                                                   // 2024
    var $active    = container.find('> .active')                                                                       // 2025
    var transition = callback                                                                                          // 2026
      && $.support.transition                                                                                          // 2027
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)                          // 2028
                                                                                                                       // 2029
    function next() {                                                                                                  // 2030
      $active                                                                                                          // 2031
        .removeClass('active')                                                                                         // 2032
        .find('> .dropdown-menu > .active')                                                                            // 2033
          .removeClass('active')                                                                                       // 2034
        .end()                                                                                                         // 2035
        .find('[data-toggle="tab"]')                                                                                   // 2036
          .attr('aria-expanded', false)                                                                                // 2037
                                                                                                                       // 2038
      element                                                                                                          // 2039
        .addClass('active')                                                                                            // 2040
        .find('[data-toggle="tab"]')                                                                                   // 2041
          .attr('aria-expanded', true)                                                                                 // 2042
                                                                                                                       // 2043
      if (transition) {                                                                                                // 2044
        element[0].offsetWidth // reflow for transition                                                                // 2045
        element.addClass('in')                                                                                         // 2046
      } else {                                                                                                         // 2047
        element.removeClass('fade')                                                                                    // 2048
      }                                                                                                                // 2049
                                                                                                                       // 2050
      if (element.parent('.dropdown-menu')) {                                                                          // 2051
        element                                                                                                        // 2052
          .closest('li.dropdown')                                                                                      // 2053
            .addClass('active')                                                                                        // 2054
          .end()                                                                                                       // 2055
          .find('[data-toggle="tab"]')                                                                                 // 2056
            .attr('aria-expanded', true)                                                                               // 2057
      }                                                                                                                // 2058
                                                                                                                       // 2059
      callback && callback()                                                                                           // 2060
    }                                                                                                                  // 2061
                                                                                                                       // 2062
    $active.length && transition ?                                                                                     // 2063
      $active                                                                                                          // 2064
        .one('bsTransitionEnd', next)                                                                                  // 2065
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :                                                               // 2066
      next()                                                                                                           // 2067
                                                                                                                       // 2068
    $active.removeClass('in')                                                                                          // 2069
  }                                                                                                                    // 2070
                                                                                                                       // 2071
                                                                                                                       // 2072
  // TAB PLUGIN DEFINITION                                                                                             // 2073
  // =====================                                                                                             // 2074
                                                                                                                       // 2075
  function Plugin(option) {                                                                                            // 2076
    return this.each(function () {                                                                                     // 2077
      var $this = $(this)                                                                                              // 2078
      var data  = $this.data('bs.tab')                                                                                 // 2079
                                                                                                                       // 2080
      if (!data) $this.data('bs.tab', (data = new Tab(this)))                                                          // 2081
      if (typeof option == 'string') data[option]()                                                                    // 2082
    })                                                                                                                 // 2083
  }                                                                                                                    // 2084
                                                                                                                       // 2085
  var old = $.fn.tab                                                                                                   // 2086
                                                                                                                       // 2087
  $.fn.tab             = Plugin                                                                                        // 2088
  $.fn.tab.Constructor = Tab                                                                                           // 2089
                                                                                                                       // 2090
                                                                                                                       // 2091
  // TAB NO CONFLICT                                                                                                   // 2092
  // ===============                                                                                                   // 2093
                                                                                                                       // 2094
  $.fn.tab.noConflict = function () {                                                                                  // 2095
    $.fn.tab = old                                                                                                     // 2096
    return this                                                                                                        // 2097
  }                                                                                                                    // 2098
                                                                                                                       // 2099
                                                                                                                       // 2100
  // TAB DATA-API                                                                                                      // 2101
  // ============                                                                                                      // 2102
                                                                                                                       // 2103
  var clickHandler = function (e) {                                                                                    // 2104
    e.preventDefault()                                                                                                 // 2105
    Plugin.call($(this), 'show')                                                                                       // 2106
  }                                                                                                                    // 2107
                                                                                                                       // 2108
  $(document)                                                                                                          // 2109
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)                                                  // 2110
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)                                                 // 2111
                                                                                                                       // 2112
}(jQuery);                                                                                                             // 2113
                                                                                                                       // 2114
/* ========================================================================                                            // 2115
 * Bootstrap: affix.js v3.3.0                                                                                          // 2116
 * http://getbootstrap.com/javascript/#affix                                                                           // 2117
 * ========================================================================                                            // 2118
 * Copyright 2011-2014 Twitter, Inc.                                                                                   // 2119
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                          // 2120
 * ======================================================================== */                                         // 2121
                                                                                                                       // 2122
                                                                                                                       // 2123
+function ($) {                                                                                                        // 2124
  'use strict';                                                                                                        // 2125
                                                                                                                       // 2126
  // AFFIX CLASS DEFINITION                                                                                            // 2127
  // ======================                                                                                            // 2128
                                                                                                                       // 2129
  var Affix = function (element, options) {                                                                            // 2130
    this.options = $.extend({}, Affix.DEFAULTS, options)                                                               // 2131
                                                                                                                       // 2132
    this.$target = $(this.options.target)                                                                              // 2133
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))                                               // 2134
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))                                  // 2135
                                                                                                                       // 2136
    this.$element     = $(element)                                                                                     // 2137
    this.affixed      =                                                                                                // 2138
    this.unpin        =                                                                                                // 2139
    this.pinnedOffset = null                                                                                           // 2140
                                                                                                                       // 2141
    this.checkPosition()                                                                                               // 2142
  }                                                                                                                    // 2143
                                                                                                                       // 2144
  Affix.VERSION  = '3.3.0'                                                                                             // 2145
                                                                                                                       // 2146
  Affix.RESET    = 'affix affix-top affix-bottom'                                                                      // 2147
                                                                                                                       // 2148
  Affix.DEFAULTS = {                                                                                                   // 2149
    offset: 0,                                                                                                         // 2150
    target: window                                                                                                     // 2151
  }                                                                                                                    // 2152
                                                                                                                       // 2153
  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {                                // 2154
    var scrollTop    = this.$target.scrollTop()                                                                        // 2155
    var position     = this.$element.offset()                                                                          // 2156
    var targetHeight = this.$target.height()                                                                           // 2157
                                                                                                                       // 2158
    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false                       // 2159
                                                                                                                       // 2160
    if (this.affixed == 'bottom') {                                                                                    // 2161
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'                        // 2162
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'                              // 2163
    }                                                                                                                  // 2164
                                                                                                                       // 2165
    var initializing   = this.affixed == null                                                                          // 2166
    var colliderTop    = initializing ? scrollTop : position.top                                                       // 2167
    var colliderHeight = initializing ? targetHeight : height                                                          // 2168
                                                                                                                       // 2169
    if (offsetTop != null && colliderTop <= offsetTop) return 'top'                                                    // 2170
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'         // 2171
                                                                                                                       // 2172
    return false                                                                                                       // 2173
  }                                                                                                                    // 2174
                                                                                                                       // 2175
  Affix.prototype.getPinnedOffset = function () {                                                                      // 2176
    if (this.pinnedOffset) return this.pinnedOffset                                                                    // 2177
    this.$element.removeClass(Affix.RESET).addClass('affix')                                                           // 2178
    var scrollTop = this.$target.scrollTop()                                                                           // 2179
    var position  = this.$element.offset()                                                                             // 2180
    return (this.pinnedOffset = position.top - scrollTop)                                                              // 2181
  }                                                                                                                    // 2182
                                                                                                                       // 2183
  Affix.prototype.checkPositionWithEventLoop = function () {                                                           // 2184
    setTimeout($.proxy(this.checkPosition, this), 1)                                                                   // 2185
  }                                                                                                                    // 2186
                                                                                                                       // 2187
  Affix.prototype.checkPosition = function () {                                                                        // 2188
    if (!this.$element.is(':visible')) return                                                                          // 2189
                                                                                                                       // 2190
    var height       = this.$element.height()                                                                          // 2191
    var offset       = this.options.offset                                                                             // 2192
    var offsetTop    = offset.top                                                                                      // 2193
    var offsetBottom = offset.bottom                                                                                   // 2194
    var scrollHeight = $('body').height()                                                                              // 2195
                                                                                                                       // 2196
    if (typeof offset != 'object')         offsetBottom = offsetTop = offset                                           // 2197
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)                                    // 2198
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)                                 // 2199
                                                                                                                       // 2200
    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)                                           // 2201
                                                                                                                       // 2202
    if (this.affixed != affix) {                                                                                       // 2203
      if (this.unpin != null) this.$element.css('top', '')                                                             // 2204
                                                                                                                       // 2205
      var affixType = 'affix' + (affix ? '-' + affix : '')                                                             // 2206
      var e         = $.Event(affixType + '.bs.affix')                                                                 // 2207
                                                                                                                       // 2208
      this.$element.trigger(e)                                                                                         // 2209
                                                                                                                       // 2210
      if (e.isDefaultPrevented()) return                                                                               // 2211
                                                                                                                       // 2212
      this.affixed = affix                                                                                             // 2213
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null                                                   // 2214
                                                                                                                       // 2215
      this.$element                                                                                                    // 2216
        .removeClass(Affix.RESET)                                                                                      // 2217
        .addClass(affixType)                                                                                           // 2218
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')                                                  // 2219
    }                                                                                                                  // 2220
                                                                                                                       // 2221
    if (affix == 'bottom') {                                                                                           // 2222
      this.$element.offset({                                                                                           // 2223
        top: scrollHeight - height - offsetBottom                                                                      // 2224
      })                                                                                                               // 2225
    }                                                                                                                  // 2226
  }                                                                                                                    // 2227
                                                                                                                       // 2228
                                                                                                                       // 2229
  // AFFIX PLUGIN DEFINITION                                                                                           // 2230
  // =======================                                                                                           // 2231
                                                                                                                       // 2232
  function Plugin(option) {                                                                                            // 2233
    return this.each(function () {                                                                                     // 2234
      var $this   = $(this)                                                                                            // 2235
      var data    = $this.data('bs.affix')                                                                             // 2236
      var options = typeof option == 'object' && option                                                                // 2237
                                                                                                                       // 2238
      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))                                             // 2239
      if (typeof option == 'string') data[option]()                                                                    // 2240
    })                                                                                                                 // 2241
  }                                                                                                                    // 2242
                                                                                                                       // 2243
  var old = $.fn.affix                                                                                                 // 2244
                                                                                                                       // 2245
  $.fn.affix             = Plugin                                                                                      // 2246
  $.fn.affix.Constructor = Affix                                                                                       // 2247
                                                                                                                       // 2248
                                                                                                                       // 2249
  // AFFIX NO CONFLICT                                                                                                 // 2250
  // =================                                                                                                 // 2251
                                                                                                                       // 2252
  $.fn.affix.noConflict = function () {                                                                                // 2253
    $.fn.affix = old                                                                                                   // 2254
    return this                                                                                                        // 2255
  }                                                                                                                    // 2256
                                                                                                                       // 2257
                                                                                                                       // 2258
  // AFFIX DATA-API                                                                                                    // 2259
  // ==============                                                                                                    // 2260
                                                                                                                       // 2261
  $(window).on('load', function () {                                                                                   // 2262
    $('[data-spy="affix"]').each(function () {                                                                         // 2263
      var $spy = $(this)                                                                                               // 2264
      var data = $spy.data()                                                                                           // 2265
                                                                                                                       // 2266
      data.offset = data.offset || {}                                                                                  // 2267
                                                                                                                       // 2268
      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom                                            // 2269
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop                                               // 2270
                                                                                                                       // 2271
      Plugin.call($spy, data)                                                                                          // 2272
    })                                                                                                                 // 2273
  })                                                                                                                   // 2274
                                                                                                                       // 2275
}(jQuery);                                                                                                             // 2276
                                                                                                                       // 2277
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mizzao:bootstrap-3'] = {};

})();

(function(){
Template.__checkName("recipe");
Template["recipe"] = new Template("Template.recipe", (function() {
  var view = this;
  return HTML.DIV({
    "class": function() {
      return [ "page recipe ", Spacebars.mustache(view.lookup("activeTabClass")) ];
    }
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Recipe"),
      black: Spacebars.call(true),
      back: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"), function() {
      return [ "\n      ", Blaze.If(function() {
        return Spacebars.call(view.lookup("bookmarked"));
      }, function() {
        return [ "\n        ", HTML.A({
          href: "#",
          "class": "nav-item js-remove-bookmark bookmarked"
        }, HTML.SPAN({
          "class": "icon-bookmark"
        })), "\n      " ];
      }, function() {
        return [ "\n        ", HTML.A({
          href: "#",
          "class": "nav-item js-add-bookmark"
        }, HTML.SPAN({
          "class": "icon-bookmark-hollow"
        })), "\n      " ];
      }), "\n      ", HTML.A({
        href: "#",
        "class": "nav-item js-share"
      }, HTML.SPAN({
        "class": "icon-camera"
      })), "\n    " ];
    });
  }), "\n\n    ", HTML.DIV({
    "class": "image-recipe",
    style: function() {
      return [ "background-image: url('", Spacebars.mustache(view.lookup("recipeImage"), Spacebars.kw({
        recipe: view.lookup("."),
        size: "full"
      })), "')" ];
    }
  }), "\n\n    ", HTML.DIV({
    "class": "attribution-recipe js-uncollapse"
  }, "\n      ", HTML.H1({
    "class": "title-recipe"
  }, Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n      ", HTML.DIV({
    "class": "metadata-wrapper"
  }, "\n        ", HTML.P({
    "class": "description-recipe"
  }, Blaze.View("lookup:excerpt", function() {
    return Spacebars.mustache(view.lookup("excerpt"));
  })), "\n        ", HTML.SPAN({
    "class": "source"
  }, Blaze.View("lookup:source.name", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("source"), "name"));
  })), "\n        ", HTML.SPAN({
    "class": "time"
  }, Blaze.View("lookup:cookTime", function() {
    return Spacebars.mustache(view.lookup("cookTime"));
  })), "\n      "), "\n\n      ", HTML.DIV({
    "class": "btns-group"
  }, "\n        ", HTML.A({
    "class": function() {
      return [ "btn-secondary ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isActiveTab"), "make");
      }, function() {
        return "active";
      }), " ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isActiveTab"), "recipe");
      }, function() {
        return "no-state";
      }), " js-show-recipe" ];
    }
  }, "Make It"), "\n        ", HTML.A({
    "class": function() {
      return [ "btn-secondary ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isActiveTab"), "feed");
      }, function() {
        return "active";
      }), " ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isActiveTab"), "recipe");
      }, function() {
        return "no-state";
      }), " js-show-feed" ];
    }
  }, "Pictures"), "\n      "), "\n    "), "\n\n\n    ", HTML.DIV({
    "class": "content-scrollable static-nav make-scrollable"
  }, "\n      ", HTML.Raw('<a class="btn-tertiary js-share"><span class="icon-camera"></span> Share that you made this</a>'), "\n\n      ", HTML.Raw('<h2 class="list-title">Ingredients</h2>'), "\n      ", HTML.UL({
    "class": "list-ingredients"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("ingredients"));
  }, function() {
    return [ "\n          ", HTML.LI({
      "class": "item-ingredient"
    }, Blaze.View("lookup:.", function() {
      return Spacebars.mustache(view.lookup("."));
    })), "\n        " ];
  }), "\n      "), "\n\n      ", HTML.Raw('<h2 class="list-title">Directions</h2>'), "\n      ", HTML.OL({
    "class": "list-directions"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("directions"));
  }, function() {
    return [ "\n          ", HTML.LI({
      "class": "item-direction"
    }, "\n            ", HTML.SPAN({
      "class": "text"
    }, Blaze.View("lookup:.", function() {
      return Spacebars.mustache(view.lookup("."));
    })), "\n          "), "\n        " ];
  }), "\n          ", HTML.Raw('<li class="item-direction">\n          ...\n          </li>'), "\n      "), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("source"), "url"));
    },
    target: "_blank",
    "class": "btn-primary js-open"
  }, "See full recipe on ", Blaze.View("lookup:source.name", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("source"), "name"));
  })), "\n    "), "\n\n    ", HTML.DIV({
    "class": "content-scrollable static-nav feed-scrollable"
  }, "\n      ", HTML.Raw('<a class="btn-tertiary js-share"><span class="icon-camera"></span> Share that you made this</a>'), "\n      ", HTML.DIV({
    "class": "list-activities"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("activities"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("activity")), "\n        " ];
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "wrapper-message"
    }, "\n            ", HTML.DIV({
      "class": "title-message"
    }, "No feed activity yet"), "\n            ", HTML.DIV({
      "class": "subtitle-message"
    }, "Be the first to share that you made this recipe. ", HTML.A({
      "class": "js-share"
    }, "Share now")), "\n          "), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

})();

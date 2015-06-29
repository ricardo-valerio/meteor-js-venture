(function(){
Template.__checkName("shareOverlay");
Template["shareOverlay"] = new Template("Template.shareOverlay", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": "overlay share"
    }, "\n\n      ", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("attachedImage"));
    }, function() {
      return [ "\n        ", HTML.A({
        href: "#",
        "class": "js-close-overlay overlay-dismiss"
      }, HTML.SPAN({
        "class": "icon-cross"
      })), "\n        ", HTML.DIV({
        "class": "wrapper-heading"
      }, "\n          ", HTML.DIV({
        "class": "title-overlay"
      }, "Share"), "\n          ", HTML.DIV({
        "class": "subtitle-overlay"
      }, "Share that you made this recipe with the Local Market community."), "\n        "), "\n\n        ", HTML.DIV({
        "class": "wrapper-camera"
      }, "\n          ", HTML.A({
        "class": "js-attach-image btn-camera"
      }, HTML.SPAN({
        "class": "icon-camera"
      })), "\n          ", HTML.DIV({
        "class": "subtext-camera"
      }, "Add your photo"), "\n        "), "\n      " ];
    }, function() {
      return [ "\n        ", HTML.A({
        href: "#",
        "class": "js-unattach-image overlay-back"
      }, HTML.SPAN({
        "class": "icon-arrow-left-alt"
      })), "\n        ", HTML.DIV({
        "class": "title-page"
      }, "Share"), "\n        ", HTML.A({
        href: "#",
        "class": "js-close-overlay overlay-dismiss"
      }, HTML.SPAN({
        "class": "icon-cross"
      })), "\n\n        ", HTML.DIV({
        "class": "bg-image",
        style: function() {
          return [ "background-image: url('", Spacebars.mustache(view.lookup("attachedImage")), "')" ];
        }
      }), "\n\n        ", HTML.FORM({
        "class": "form-share"
      }, "\n          ", HTML.DIV({
        "class": "form-group"
      }, "\n            ", HTML.DIV({
        "class": "avatar"
      }, "\n              ", HTML.IMG({
        src: function() {
          return Spacebars.mustache(view.lookup("avatar"));
        },
        "class": "image-avatar"
      }), "\n            "), "\n\n            ", HTML.TEXTAREA({
        name: "text",
        type: "text",
        autocapitalize: "off",
        autocorrect: "off",
        required: "",
        maxlength: "140",
        "class": "message-share",
        placeholder: "Add advice, suggestions, or thoughts to share with the community..."
      }), "\n          "), "\n\n          ", HTML.DIV({
        "class": "wrapper-checkbox"
      }, "\n            ", HTML.LABEL({
        "for": "tweeting",
        "class": "checkbox"
      }, "\n              ", HTML.INPUT({
        type: "checkbox",
        name: "tweeting",
        id: "tweeting",
        checked: ""
      }), "\n              ", HTML.SPAN("Post to Twitter"), "\n            "), "\n          "), "\n\n          ", HTML.BUTTON({
        "class": "btn-primary",
        type: "submit"
      }, "\n            ", Blaze.If(function() {
        return Spacebars.call(view.lookup("tweeting"));
      }, function() {
        return [ "\n              Share ", HTML.CharRef({
          html: "&amp;",
          str: "&"
        }), " Tweet\n            " ];
      }, function() {
        return "\n              Share\n            ";
      }), "\n          "), "\n        "), "\n      " ];
    }), "\n\n    "), "\n  " ];
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("authOverlay")), "\n  " ];
  });
}));

})();

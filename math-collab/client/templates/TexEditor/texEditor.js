if (Meteor.isClient) {

  /***********************************************************
  *     Created
  ***********************************************************/

  Template.texEditor.onCreated(function () {
    $.ajax({
      url: 'https://api.github.com/emojis',
      async: false
    }).then(function(data) {
      window.emojis = Object.keys(data);
      window.emojiUrls = data;
    });
  });

  /***********************************************************
  *     Rendered
  ***********************************************************/

  Template.texEditor.onRendered(function () {
    $('.bs-callout').flowtype({
     minimum : 500,
     maximum : 1200,
    });

    $('.summernote').summernote({
      height             : 300,
      disableDragAndDrop : true,
      shortcuts          : false,
      codemirror: {
        lineNumbers  : true,
        mode         : "stex",
        theme        : "mdn-like",
        lineWrapping : true,
      },
      hint: {
        match: /:([\-+\w]+)$/,
        search: function (keyword, callback) {
          callback($.grep(emojis, function (item) {
            return item.indexOf(keyword)  === 0;
          }));
        },
        template: function (item) {
          var content = emojiUrls[item];
          return '<img src="' + content + '" width="20" /> :' + item + ':';
        },
        content: function (item) {
          var url = emojiUrls[item];
          if (url) {
            return $('<img />').attr('src', url).css('width', 20)[0];
          }
          return '';
        }
      },
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['mybutton', ['hello']]
      ],
      buttons: {
        hello: HelloButton
      }
    });

  });


  /***********************************************************
  *     Helpers
  ***********************************************************/

  Template.texEditor.helpers({
  });

  /***********************************************************
  *     Events
  ***********************************************************/

  Template.texEditor.events({
  });


  /***********************************************************
  *     Destroyed
  ***********************************************************/

  Template.texEditor.onDestroyed(function () {
  });

}


/***********************************************************
*     Utility Functions
***********************************************************/

var HelloButton = function (context) {
  var ui = $.summernote.ui;

  var button = ui.button({
    contents: '<i class="fa fa-hand-spock-o"/> Math Symbols',
    tooltip: 'hello',
    click: function () {
      $('#mathSymbols').toggleClass("hidden");
    }
  });

  return button.render();   // return button as jquery object
}

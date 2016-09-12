tinymce.PluginManager.add('arelia', function(editor, url) {
  // Add a button that opens a window
  editor.addButton('arelia', {
    text: 'Arelia',
    icon: false,
    onclick: function() {
      editor.insertContent('Arelia!');
    }
  });
});

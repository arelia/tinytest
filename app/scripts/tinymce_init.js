$(document).ready(function(){
  var editable_areas = $('snippet');

  editable_areas.each(function(){
    var snippet = $(this).attr('id');
    var selector = "#" + snippet;

    tinymce.init({
      selector: selector,
      inline: true,
      schema: 'html5',
      toolbar: [
        'save cancel restoredraft | undo redo | cut copy paste pastetext | formatselect | bold italic underline strikethrough code subscript superscript',
        'link quicklink unlink anchor image media | alignleft aligncenter alignright alignjustify | numlist bullist | hr | table tabeldelete',
        'indent outdent | spellchecker searchreplace | preview fullscreen a11ycheck | removeformat arelia'
      ],
      menubar: false,
      plugins: 'arelia advlist autolink link image lists charmap preview hr save table anchor spellchecker searchreplace media'
    });

  });
});

//

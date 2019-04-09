$(document).ready(function() {
  $.ajax({
    url: './images/album.json5',
    method: 'get',
    dataType: 'text',
    success: function(data) {
      let ul    = $('<ul/>').addClass('album').appendTo('.content'),
          album = JSON5.parse(data);
          
      album = Object.assign({}, album.album.image);
  
      $.each(album, function(i, entry) {
        let li = $('<li/>').appendTo(ul),
            a  = $('<a/>').attr({ href: 'javascript:void(0)' }).appendTo(li);
        
        $('<img/>').attr({
            src: entry,
            width:  512,
            height: 512
        }).appendTo(a);
      });
    }
  }); 
});

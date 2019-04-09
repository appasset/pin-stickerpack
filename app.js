$(document).ready(function() {
  $.ajax({
    url: './images/album.json5',
    method: 'get',
    dataType: 'text',
    success: function(data) {  
      data  = JSON5.parse(data);    
      document.title = data.album.title;
      
      let ul    = $('<ul/>').addClass('album').appendTo('.content'),
          album = Object.assign({}, data.album.image);
  
      $.each(album, function(i, entry) {
        let li = $('<li/>').appendTo(ul),
            a  = $('<a/>').attr({ href: entry }).appendTo(li);
        
        $('<img/>').attr({
            src: entry,
            width:  128,
            height: 128
        }).appendTo(a);
        
        a.click(function() {
          return false;
        });
      });
    }
  }); 
});

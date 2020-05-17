$(document).ready(function (){
  let doc = {};
  $('INPUT:checkbox').change(function() {
    if (this.checked) {
      doc[$(this).data('id')] = $(this).data('name');
    }
    else {
      delete doc[$(this).data('id')];
    }
    let val = object.values(doc);
    if (val.length > 0) {
      $('div.amenities > h4').text(val.join(', '));
    }
  });
});

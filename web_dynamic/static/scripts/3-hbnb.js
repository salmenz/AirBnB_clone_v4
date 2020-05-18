const $ = window.$;
$(document).ready(function () {
  const doc = {};
  $('INPUT:checkbox').change(function () {
    if (this.checked) {
      doc[$(this).data('id')] = $(this).data('name');
    } else {
      delete doc[$(this).data('id')];
    }
    const val = Object.values(doc);
    if (val.length > 0) {
      $('div.amenities > h4').text(val.join(', '));
    }
  });

  const add = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(add, function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});

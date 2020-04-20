

setTimeout(function(){
  wireButtons();
},500);

var course = "";

function wireButtons(){
  $('#signUpModal').on('show.bs.modal', function (event) {
    console.log('HELLLLLO');
    var button = $(event.relatedTarget) // Button that triggered the modal
    course = button.data('course');
    console.log(button);
    var image = $(button).parent().parent().parent().find('img')[0].src;
    
    // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-image').attr('src',image);
    modal.find('.modal-title').text('Register for - ' + course)
    modal.find('.modal-body #coursename').val(course);
  })

  $('#signup-button').on('click',function(){
    console.log('submit form');
    $('#signUpModal').modal('hide');
    $('body').append('<div id="alertMsg" class="alert alert-success" role="alert">Thank you for registering for '+ course +' course!</div>');
    //fadeOut alert
    setTimeout(function(){
      $('#alertMsg').fadeOut().remove();
    },2000)
  });

  $('#contact-form').submit(function(e){
    console.log('submit form');
    e.preventDefault();
    $('body').append('<div id="alertMsg" class="alert alert-success" role="alert">Thank you for your feedback, we will be in touch soon!</div>');
    //fadeOut alert
    setTimeout(function(){
      $('#alertMsg').fadeOut().remove();
    },2000)
  })
};
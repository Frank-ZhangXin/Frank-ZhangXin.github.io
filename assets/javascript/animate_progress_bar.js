$(document).ready(function() {

    $('#create_host').click(function() {
    
      $('#host_progress_bar').animate(
              {value: '100'}, 
              {
                easing: 'swing', 
                duration: 3000, 
                complete: 
                function() { 
                  $('#host_tip').html("Host create complete!");
                  $('#host_list').show();
                }  
              }
          );
      
      
    });
  
});
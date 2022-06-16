$('#movie-rate').on('change', function(){
    $('#show-movie-rate').replaceWith(`<span id="show-movie-rate"><label>Your Rating: <b>${$('#movie-rate').val()}</b></label></span>`)
})

$("#submit-movie").on('click', function(){
    if($('#movie-title').val().length <= 2){
        alert('Movie Title too short!')
        $('#movie-title').val('');
        $('#show-movie-rate').replaceWith(`<span id="show-movie-rate"><label>Your Rating:<b>5</b></label></span>`)
    }
    else{
        $('#movies').append(
            `<tr>
            <td>${$('#movie-title').val()}</td>
            <td>${$('#movie-rate').val()}</td>
            </tr>`)
        $('#movie-title').val('') 
    }
})
$(document).ready(() => {
    console.log('Ready!');

    $('#speaker').mouseenter((e) => { 
        console.log(e); 
        $('body').append(`
            <div id="player-options" 
                style="
                    flex-direction:row;
                    width:300px; 
                    height:50px; 
                    z-index:9999; 
                    border:1px solid black; 
                    position:absolute; 
                    top:50px; 
                    right:30px;
                    background-color:white;
                ">
                    <div style="flex-grow:1">XXX</div>
                    <div style="flex-grow:1">XXX</div>
                    <div style="flex-grow:1">XXX</div>
            </div>`);
    });

    $('#player-options').on('mouseout', (e) => {
        $('#player-options').remove();
    });

    /*$('#speaker #player-options').mouseout((e) => {
        $('#player-options').remove();
    });*/


});
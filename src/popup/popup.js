var playerOptionsMenuOpened = false;
var isPlaying = false;

$(document).ready(() => {
    console.log('Ready!');
    var server = localStorage.getItem('store.settings.server');
    server = server.slice(1, -1);

    console.log('>> ' + chrome.runtime.id);

    fetch(`${server}/api/http-stream`)
        .then((response) => {
            let streamChunkExtractor = (reader) => {
                return reader.read().then((result) => {
                    if(result.done) {
                        return;
                    }

                    let chunk = result.value;
                    let streamChunk = '';
                    for(let i=0; i<chunk.byteLength; i++) {
                        streamChunk += String.fromCharCode(chunk[i]);
                    }

                    updateDashboard(JSON.parse(streamChunk));
                    return streamChunkExtractor(reader);
                });
            };
            return streamChunkExtractor(response.body.getReader());
        })
        .catch((err) => {
            console.log('err: ', err);
        });

    updateDashboard = (backendInfo) => {
        $('#air-quality-label').text(backendInfo.sensors.airQualityValue);
        $('#light-label').text(backendInfo.sensors.lightValue);
        $('#temp-label').text(backendInfo.sensors.tempValue);
        $('#terrarium-label').text(backendInfo.sensors.moistureValue);
        $('#water-label').text(backendInfo.sensors.waterValue);

        // Specific management for gas sensor
        if(backendInfo.sensors.gasValue.gas)
            $('#gas-label').text(backendInfo.sensors.gasValue.status);
        else
            $('#gas-label').text(backendInfo.sensors.gasValue.status);
    };

    $('#settings').click(() => {
        chrome.runtime.openOptionsPage();
    })
    
    document.querySelector('#settings').addEventListener(function() {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();  // supported in Chrome 42+
        } else {
            window.open(chrome.runtime.getURL('src/options/index.html'));  // Reasonable fallback.
        }
    }, false);

    $('#speaker').click((e) => { 
        if(playerOptionsMenuOpened) {
            $('#player-options').remove();
            $('#dashboard-row').css('margin-left', '0');
        } else{
            $('#dashboard-row').css('margin-left', '-50px');
            $('#dashboard-row').append(`
                <div id="player-options" 
                    style="
                        flex-grow:1;
                        display:flex;
                        align-items:center;
                        justify-content: center;
                        flex-direction:column;
                        padding-top:0;
                        padding-bottom:0;
                    ">
                        <div id="player-rw" class="card" style="flex-grow:1; text-align:center; padding-top:0;">
                            <img width="32px" src="./../icons/music-rewind.png" />
                        </div>
                        <div id="player-play" class="card" style="flex-grow:1; text-align:center; padding-top:0;">
                            <img id="player-play-img" width="32px" src="./../icons/music-play.png" />
                        </div>
                        <div id="player-fw" class="card" style="flex-grow:1; text-align:center; padding-top:0;">
                            <img width="32px" src="./../../icons/music-forward.png" />
                        </div>
                </div>
            `);
        }
        playerOptionsMenuOpened = !playerOptionsMenuOpened;
    });

    $('#dashboard-row').on('click', '#player-rw', function(e) {
        console.log('rw');
    });

    $('#dashboard-row').on('click', '#player-play', function(e) {
        if(isPlaying) {
            $('#player-play-img').attr('src', './../icons/music-play.png');
        } else {
            $('#player-play-img').attr('src', './../icons/music-pause.png');
        }
        isPlaying = !isPlaying;
    });

    $('#dashboard-row').on('click', '#player-fw', function(e) {
        console.log('fw');
    });

});
// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org

var download_timeout, current_song_number = 0;
var songs_number = 500;
var last_size = -1;
var failed_retry = 0;

function go()
{
    var link_song={};

        while(current_song_number<songs_number){
            var link=document.getElementById("fm-download-link");
            link_song[current_song_number]=link;
            console.log(current_song_number);
            current_song_number++;
            window.DBR.act("skip");     // next song
            var len = Object.keys(link_song).length;
              if ( len % 10 === 0)
                {
                    download_json();
                }
                var sleep_time = Math.ceil(Math.random() * (6 - 4) + 4);
        }
        
        
     
  
}

function download_json()
{
    $("<a href='" + "data:application/x-json;base64," + encodeURIComponent(JSON.stringify(link_song)) + "' download='list.json'/>")[0].click();
}

go();

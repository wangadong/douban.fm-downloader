// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.1.1.min.js"></script>
var current_song_number = 0;
var songs_number = 500;
var link_song;
function go()
{
   
            window.DBR.act("skip");     // next song
                
            var link=document.getElementById("fm-download-link");
            if(link_song.indexOf(link)==-1)
            link_song=link_song+'<br>'+link;
            open_in_new_tab(link);
            console.log(current_song_number);
            current_song_number++;            
            var sleep_time = Math.ceil(Math.random() * (6 - 4) + 4);
            download_timeout = setTimeout(go, sleep_time * 1000);
        
}
function open_in_new_tab(url )
{
  var win=window.open(url, '_blank');
  win.focus();
}

go();

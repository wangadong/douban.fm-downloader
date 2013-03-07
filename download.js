// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org

var current_song_number = 0;
var songs_number = 500;
var link_song;

function go()
{
   
            window.DBR.act("skip");     // next song
                
            var link=document.getElementById("fm-download-link");
//            if(link_song.indexOf(link)==-1)
            link_song=link_song+'<br>'+link;
            var popup = window.open("about:blank","Popup");
            //popup.document.write(link_song);
            popup.window.open(link,"_self");
         
            console.log(current_song_number);
            current_song_number++;            
            download_timeout = setTimeout(go, 20000);
            if(current_song_number>50)
              stop();
}

function stop()
{
    clearTimeout(download_timeout);
}


// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org

var current_song_number = 0;
var songs_number = 500;
var link_song;
function go()
{
   
            window.DBR.act("skip");     // next song
                
            var link=document.getElementById("fm-download-link");
            link_song=link_song+'<br>'+link;
            console.log(current_song_number);
            current_song_number++;
            
         var sleep_time = Math.ceil(Math.random() * (6 - 4) + 4);
        
        download_timeout = setTimeout(go, sleep_time * 1000);
        
     
  
}


go();

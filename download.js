// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org
// var script = document.createElement('script');
// script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
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
            popup.document.write(link_song);
         
            console.log(current_song_number);
            current_song_number++;            
            download_timeout = setTimeout(go, 10000);
        
}


go();

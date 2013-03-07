// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org
var script = document.createElement('script');
script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var current_song_number = 0;
var songs_number = 500;
var link_song;
var link;
function go()
{
   
            window.DBR.act("skip");     // next song
                
            link=document.getElementById("fm-download-link");
//            if(link_song.indexOf(link)==-1)
            link_song=link_song+'<br>'+link;
            open_in_new_tab(link);
            console.log(current_song_number);
            current_song_number++;            
            var sleep_time = Math.ceil(Math.random() * (6 - 4) + 4);
            download_timeout = setTimeout(go, sleep_time * 10000);
        
}
function open_in_new_tab(url)
{
 $("a.runReport").click(function(evt) {
    // open a popup within the click handler
    // this should open in a new tab
    var popup = window.open("about:blank","Popup");

    //do some ajax calls
    
        popup.document.write(link_song);

     
});
}

go();

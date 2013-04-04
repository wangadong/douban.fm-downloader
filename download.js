// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org

var current_song_number = 0;
var songs_number = 500;
var link_song=new Array();
var timeout=1000;
var link;
function go()
{
           download_timeout = setTimeout(go, timeout);
            // next song

            link=document.getElementById("fm-download-link");
            if(contains(link)){
            var popup = window.open("about:blank","Popup");
            //popup.document.write(link_song);
            popup.window.open(link,"_self");
         
            console.log(current_song_number);
            link_song[current_song_number]=link;
            current_song_number=current_song_number+1;            
            
           }
            window.DBR.act("skip"); 
            link=document.getElementById("fm-download-link");
            if(current_song_number>songs_number)
              stop();
}

 //JS判断某一项是否在数组中
 function contains(str)
    {

      var i =link_song.length;
      while (i--){
                 console.log(link_song[i]);
                 console.log(str);
           if (link_song[i] == str){
               return false;
           }
       }
      return true;
    }
function stop()
{
    clearTimeout(download_timeout);
}


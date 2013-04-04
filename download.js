// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org

var current_song_number = 0;
var songs_number = 500;
var link_song=new Array();
var timeout=1000;
function go()
{
           download_timeout = setTimeout(go, timeout);
            window.DBR.act("skip");     // next song

            var link=document.getElementById("fm-download-link");
            var i=current_song_number;
           if(contains(link)){
           }
           else{

            var popup = window.open("about:blank","Popup");
            //popup.document.write(link_song);
            popup.window.open(link,"_self");
         
            console.log(current_song_number);
            link_song[current_song_number]=link;
            current_song_number++;            
            
           }
            if(current_song_number>songs_number)
              stop();
}

 //JS判断某一项是否在数组中
 function contains(str)
    {

      for(var i = 0;i < link_song.length;i++)
      {
        if(link_song[i] == str)
        {
         return true;
        }
      }
      return false;
    }
function stop()
{
    clearTimeout(download_timeout);
}


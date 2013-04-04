// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org

var current_song_number = 0;
var songs_number = 500;
var link_song=new Array();
var timeout=1000;
var link;
var link_url;
var last_repeat_number;
var repeat_time=0;
var start_download=false;
var downcnt=0;
function go()
{
           download_timeout = setTimeout(go, timeout);
                                  // next song

           link=document.getElementById("fm-download-link");
           link_url=link+"";
           if(contains(link_url)){
                      if(start_download){
            var popup = window.open("about:blank","Popup");
            //popup.document.write(link_song);
            popup.window.open(link,"_self");
                      }
         
           console.log(current_song_number);
              
            link_song.push(link_url);
           }

            window.DBR.act("skip"); 
         current_song_number=current_song_number+1;      
           console.log(link);
            if(current_song_number>songs_number)
              stop();
}

 //JS判断某一项是否在数组中
 function contains(str)
    {
               if(current_song_number-last_repeat_number==1){
                          repeat_time++;
                          if(repeat_time>20){
                                     stop();
                          }
}
      var i =link_song.length;
      while (i--){
           if (link_song[i] == str){
               return false;
               last_repeat_number=current_song_number;
           }
       }
      return true;
    }
function stop()
{
    clearTimeout(download_timeout);
}
function download()
{
           download_timeout1 = setTimeout(download, timeout);
           var popup = window.open("about:blank","Popup");
            //popup.document.write(link_song);

       if(downcnt<link_song.length){
           popup.window.open(link_song[downcnt],"_self");
           downcnt++;
       }else{
             clearTimeout(download_timeout1);  
       }
            
}


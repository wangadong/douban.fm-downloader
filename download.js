// Author: Hua Liang[Stupid ET]
// Website: http://EverET.org

var download_timeout, current_song_number = 0;
var songs_number = 500;
var last_size = -1;
var failed_retry = 0;

function go()
{
    try
    {
        window.DBR.act("skip");     // next song
        var len = Object.keys(links_json).length;
        if (last_size === len)
        {
            if (failed_retry++ > 10)
            {
                console.log("## Stopped ##");
                return;
            }
            else
            {
                console.log("## Retrying " + failed_retry + " times ##");
            }
        }

        // failed_retry = 0;
        console.log("Current list size: " + len);
        last_size = len;
        if (len % 10 === 0)
        {
            download_json();
        }

        var sleep_time = Math.ceil(Math.random() * (6 - 4) + 4);
        download_timeout = setTimeout(go, sleep_time * 1000);
    }
    catch (err)
    {
        console.error(err);
        download_timeout = setTimeout(go, 60 * 1000);
    }
}

function stop()
{
    clearTimeout(download_timeout);
}

function download_json()
{
    $("<a href='" + "data:application/x-json;base64," + encodeURIComponent(JSON.stringify(links_json)) + "' download='list.json'/>")[0].click();
}


// Thanks to `douban.fm Hacker`
// hook to douban.fm's handler
var extStatusHandlerBak = window.extStatusHandler;
var links_json = {};
window.extStatusHandler = function(a) {
    extStatusHandlerBak(a);
    var o = eval('(' + a + ')');
    if (o.type == 'start') {
        var s = o.song;
        var name = s.title + ".mp3";
        links_json[s.url] = name;
        // links_json[name] = s.url;
    }
}

go();

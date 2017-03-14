chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.method == "run") {
            $('a#spotifylink').remove();
            
            var title = document.getElementById("eow-title").innerHTML.split("(");
            var title1 = title[0].split("[");
            var title2 = title1[0].replace(/&amp;|ft.|feat/g,"");
            var punctuationless = title2.replace(/[.,\/#!|$%\^&\*;:&{}=\-_`~()]/g,"");
            var finalString = punctuationless.replace(/\s{2,}/g," ");
            
            $.get( "https://api.spotify.com/v1/search?query="+finalString+"&type=track&offset=0&limit=1", function( data ) {
                $("#eow-title").append("<a id='spotifylink' style='color: green' href='" + data.tracks.items[0].uri+ "'><img width=100 height=25 src='http://i.imgur.com/IB44OmJ.png'></a>")
            });

        } 
    }
); 

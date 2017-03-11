var oldLocation = location.href;
setInterval(function() {
if(location.href != oldLocation) {
    title = document.getElementById("eow-title").innerHTML.split("(");
    title1 = title[0].split("[");
    punctuationless = title1[0].replace(/[.,\/#!|$%\^&\*;:&{}=\-_`~()]/g,"");
    finalString = punctuationless.replace(/\s{2,}/g," ");
    finalstring1 = finalString.split("ft")
    finalstring2 = finalstring1[0].split("feat")

    $.get( "https://api.spotify.com/v1/search?query="+finalstring2[0]+"&type=track&offset=0&limit=1", function( data ) {
        $("#eow-title").append("<a style='color: green' href='" + data.tracks.items[0].uri+ "'><b>LISTEN ON SPOTIFY</b></a>")  
    });

    oldLocation = location.href
}
}, 1000);

var req = new XMLHttpRequest();
req.responseType = 'json';
const url = "https://api.lanyard.rest/v1/users/351661012627226625";
req.open('GET', url, true);

function log(x) {
   console.log("info: " + x)
}


req.onload  = function() {
   var jsonResponse = req.response;
   console.log(jsonResponse)
   
   if (jsonResponse.success == true) {
      log('API online')
      document.getElementById('welcomename').textContent = jsonResponse.data.discord_user.username
      document.getElementById('pfp').src = "https://cdn.discordapp.com/avatars/" + jsonResponse.data.discord_user.id + "/" + jsonResponse.data.discord_user.avatar
   } else {
      const h1 = document.createElement('h1');
      h1.textContent = 'We got a few issues. Please try again later.';
      h1.style.textAlign = 'center';
      document.body.innerHTML = '';
      document.body.appendChild(h1);

      const allH1 = document.querySelectorAll('h1');
      allH1.forEach((h1) => {
         if (h1 !== document.querySelector('h1')) {
            h1.style.display = 'none';
         }
      });
   }

   if (jsonResponse.data.discord_status == "offline") {
    document.getElementById('welcomename').style = "color: gray"
    document.getElementById('pfp').style = "border-color: gray;"
    log("discord " + jsonResponse.data.discord_status)
   } else if (jsonResponse.data.discord_status == "idle") {
    document.getElementById('welcomename').style = "color: yellow"
    document.getElementById('pfp').style = "border-color: yellow;"
    log("discord " + jsonResponse.data.discord_status)
   } else if (jsonResponse.data.discord_status == "dnd") {
    document.getElementById('welcomename').style = "color: red"
    document.getElementById('pfp').style = "border-color: red;"
    log("discord " + jsonResponse.data.discord_status)
   } else if (jsonResponse.data.discord_status == "online") {
    document.getElementById('welcomename').style = "color: lightgreen"
    document.getElementById('pfp').style = "border-color: lightgreen;"
    log("discord " + jsonResponse.data.discord_status)
   }

   if (jsonResponse.data.spotify !== null) {
    log("spotify online")

    document.getElementById("spotify").style.display = 'block'
    document.getElementById("song").textContent = jsonResponse.data.spotify.song
    document.getElementById("artist").textContent = jsonResponse.data.spotify.artist
   }
   
   if (jsonResponse.data.spotify == null) {
    log("spotify offline")
    document.getElementById("spotify").style.display = 'none'
    log("spotify-block hidden")
    document.getElementById("main").style.marginTop = "10%"
    log("moved main div down due to spotify-block being hidden")
   }
        
};
req.send(null);
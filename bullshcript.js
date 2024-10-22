/* YouTube Playlists
3D Videos PL24rMr-iJJ1LwIG3SPYtnJa3qd3O4F-oQ
*/

/* Screencast - https://screen.sdq.st:8443/?room=3dcinema */
/* YouTube Live - https://www.youtube.com/embed/EF0-j9ORe2Y?autoplay=1&controls=0 */
let websiteurl = "https://screen.sdq.st:8443/?room=3dcinema"; /* ?autoplay=1&controls=0 For YouTube Live */
let youtubePlaylist = `PL24rMr-iJJ1LwIG3SPYtnJa3qd3O4F-oQ`;

BS.BanterScene.GetInstance().On("loaded", () => {
	console.log("Scene loaded");
	/* COMMENTED THIS OUT TO REMOVE THE YOUTUBE PLAYER */
		// enableYouTube();
	/* UNCOMMENTED THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
		 enableTheFireScreen();
});

// videoplayer toggle by HBR.& Fire Thank you HBR!
let ytplayerdisabled = true;
  function enableYouTube() {
  if (ytplayerdisabled){ ytplayerdisabled = false;
    console.log("YouTube player Loading");
    const videoplayer = document.createElement("script");
		videoplayer.id = "3dcinema-videoplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("mip-maps", "0");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0.002 -5 0");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "-18.4 1.45 -1.45");
		videoplayer.setAttribute("volume", "3");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "0.4 0.4 0.4");
		videoplayer.setAttribute("spatial-min-distance", "1");
		videoplayer.setAttribute("spatial-max-distance", "1000");
		videoplayer.setAttribute("playlist", youtubePlaylist);
		videoplayer.setAttribute("announce", "false");
		// videoplayer.setAttribute("announce-four-twenty", "false");
		videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Playlist.png?v=1713028119937");
		videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolUp.png?v=1713028119640");
		videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolDown.png?v=1713028119279");
		videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Mute.png?v=1713028120228");
		videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Forward.png?v=1713028118642");
		videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Backwardsd.png?v=1713028118986");
		videoplayer.setAttribute("src", "https://vidya.sdq.st/playlist.js"); // https://best-v-player.glitch.me/playlist.js
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("YouTube Player Loading...");}
};

let screenDisabled = true;
function enableTheFireScreen() {
  if (screenDisabled){ screenDisabled = false;
	console.log("Adding Screen Cast");
	const firescreen = document.createElement("script");
	firescreen.id = "3dcinema-firescreen";
	firescreen.setAttribute("scale", "0.515 0.515 1");
	firescreen.setAttribute("rotation", "0 0 0");
	firescreen.setAttribute("position", "0.002 -5 0");
	firescreen.setAttribute("mipmaps", "0");
	firescreen.setAttribute("pixelsperunit", "1200");
	firescreen.setAttribute("width", "1920");
	firescreen.setAttribute("height", "1080");
	firescreen.setAttribute("castmode", "true");
	firescreen.setAttribute("backdrop", "false");
	firescreen.setAttribute("hand-controls", "true");
	firescreen.setAttribute("announce", "false");
	firescreen.setAttribute("announce-four-twenty", "false");
	firescreen.setAttribute("announce-events", "true");
	firescreen.setAttribute("volume", "0.5");
	firescreen.setAttribute("button-position", "0 -10 0");
	firescreen.setAttribute("website", websiteurl);
	firescreen.setAttribute("src", "https://firer.at/scripts/firescreen.js");
	document.querySelector("a-scene").appendChild(firescreen);
  }
  // setTimeout(() => { 
  //   let firescreencast = document.getElementById("fires-browser1");
  //   firescreencast.browser.RunActions(JSON.stringify({"actions":[{"actionType": "click2d","strparam1": "0.5,0.5;"}]}));
  //   console.log("Click Browser");
  // }, 3000); 
    console.log("Screen Stuff enabled");
};

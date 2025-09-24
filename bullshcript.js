/* YouTube Playlists
3D Videos PL24rMr-iJJ1LwIG3SPYtnJa3qd3O4F-oQ
*/

/* Screencast - https://screen.sdq.st:8443/?room=3dcinema */
/* Old Screencast - https://sidequestvr.github.io/SideQuest.Banter.Spaces/screen-cast/?sid=42424242 */
/* YouTube Live - https://www.youtube.com/embed/EF0-j9ORe2Y?autoplay=1&controls=0 */
let youtubePlaylist = `PL24rMr-iJJ1LwIG3SPYtnJa3qd3O4F-oQ`;
// let websiteurl = "https://sidequestvr.github.io/SideQuest.Banter.Spaces/screen-cast/?sid=42424242"; /* ?autoplay=1&controls=0 For YouTube Live */ 
let otherwebsiteurl = "https://firer.at/pages/games.html";

BS.BanterScene.GetInstance().On("loaded", () => {
 	console.log("Scene loaded");
	/* UNCOMMENTED THIS TO ENABLE THE YOUTUBE PLAYER */
		// enableYouTube();
	/* UNCOMMENTED THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
		// enableTheFireScreen();
	/* UNCOMMENTED THIS TO ENABLE FIRE TABLET */
		// enableThePortableFireScreen();
});


// videoplayer toggle by HBR & FireRat
let ytplayerdisabled = true;
  function enableYouTube() {
  if (ytplayerdisabled){ ytplayerdisabled = false;
    console.log("YouTube Player Loading");
    const videoplayer = document.createElement("script");
		videoplayer.id = "3dcinema-videoplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("mip-maps", "0");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0.002 -5 0");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "-18.4 1.45 -1.45");
		videoplayer.setAttribute("volume", "5");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "1 1 1");
		videoplayer.setAttribute("spatial-min-distance", "1");
		videoplayer.setAttribute("spatial-max-distance", "1000");
		videoplayer.setAttribute("playlist", youtubePlaylist);
		videoplayer.setAttribute("announce", "false");
		// videoplayer.setAttribute("announce-four-twenty", "false");
		// videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Playlist.png?v=1713028119937");
		// videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolUp.png?v=1713028119640");
		// videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolDown.png?v=1713028119279");
		// videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Mute.png?v=1713028120228");
		// videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Forward.png?v=1713028118642");
		// videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Backwardsd.png?v=1713028118986");
		videoplayer.setAttribute("src", "https://vidya.firer.at/playlist.js"); // https://vidya.sdq.st/playlist.js
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("YouTube Player Loading...");}
};

// Fire Screen Toggle
let screenstuffDisabled = true;
function enableTheFireScreen() {
  if (screenstuffDisabled){
		screenstuffDisabled = false;
		console.log("Adding Screen Cast");
		const firescreen = document.createElement("script");
		firescreen.id = "cannabanter-firescreen";
		firescreen.setAttribute("scale", "1 1 1");
		firescreen.setAttribute("rotation", "0 0 0");
		firescreen.setAttribute("screen-rotation", "0 0 0");
		firescreen.setAttribute("screen-scale", "0.515 0.515 1");
		firescreen.setAttribute("position", "-18.2 0.9 1.451");
		firescreen.setAttribute("lock-position", "true");
		firescreen.setAttribute("mipmaps", "0");
		firescreen.setAttribute("pixelsperunit", "1600");
		firescreen.setAttribute("castmode", "true");
		firescreen.setAttribute("backdrop", "false");
		firescreen.setAttribute("disable-rotation", "true");
		firescreen.setAttribute("hand-controls", "false");
		firescreen.setAttribute("announce", "false");
		firescreen.setAttribute("announce-events", "false");
		firescreen.setAttribute("announce-420", "false");
		firescreen.setAttribute("volume", "0.2");
		firescreen.setAttribute("width", "1920");
		firescreen.setAttribute("height", "1080");
		firescreen.setAttribute("screen-position", "18.2028 -5.9 -1.451");
		firescreen.setAttribute("website", websiteurl);
		firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
		document.querySelector("a-scene").appendChild(firescreen);
		if (websiteurl.includes("hyperbeam.com/i/")) {
			setTimeout(async () => { 
				let theBrowserthingy = await cannascene.Find(`MyBrowser1`);
				let thebrowserpart = theBrowserthingy.GetComponent(BS.ComponentType.BanterBrowser);
				thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "const checkbox = document.querySelector(`.p-checkbox-box[role='checkbox']`); const joinButton = document.querySelector('.footer_3Yiou .joinBtn_1TAU6'); if (checkbox) checkbox.click(); if (joinButton) { const observer = new MutationObserver(() => { if (!joinButton.classList.contains('p-disabled')) { joinButton.click(); observer.disconnect(); setTimeout(() => { const skipButton = document.querySelector('.dialog-secondary-btn'); if (skipButton) skipButton.click(); }, 3000); } }); observer.observe(joinButton, { attributes: true, attributeFilter: ['class'] }); }" }]}));
				setTimeout(async () => {
					thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "var fullscreenButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.btn_2YRyp svg path[d^='M3 3h6.429']`); if (fullscreenButton) { fullscreenButton.closest('button').click(); } setTimeout(async () => { var chatButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.fsChatBtn_2cCyy svg path[d^='M22 22h-2V2h2v20zM2 11h12.17']`); if (chatButton) { chatButton.closest('button').click(); } }, 3500);" }]}));
				}, 5000);
			}, 3000);
		}
  }
	console.log("Screen Stuff enabled: " + screenstuffDisabled);
};

// Fire Tablet
let screenPortableDisabled = true;
function enableThePortableFireScreen() {
  if (screenPortableDisabled){ screenPortableDisabled = false;
   setTimeout(() => { 
	console.log("Adding Fire Tablet");
	const firescreen = document.createElement("script");
	firescreen.id = "3dcinema-portable-firescreen";
	firescreen.setAttribute("scale", "0.7 0.7 1");
	firescreen.setAttribute("rotation", "0 0 0");
	firescreen.setAttribute("position", "-16.45 1.269 0.75");
	firescreen.setAttribute("mipmaps", "0");
	firescreen.setAttribute("pixelsperunit", "1200");
	firescreen.setAttribute("width", "1280");
	firescreen.setAttribute("height", "720");
	firescreen.setAttribute("announce", "false");
	firescreen.setAttribute("announce-events", "true");
	firescreen.setAttribute("volume", "0");
   	firescreen.setAttribute("backdrop", "true");
	firescreen.setAttribute("hand-controls", "true");
	firescreen.setAttribute("custom-button01-url", "https://jackbox.tv");
	firescreen.setAttribute("custom-button01-text", "Jackbox.tv");
	firescreen.setAttribute("custom-button02-url", "https://papas.tv");
	firescreen.setAttribute("custom-button02-text", "Papas.tv");
	firescreen.setAttribute("custom-button03-url", "https://songpop-party.com/join");
	firescreen.setAttribute("custom-button03-text", "SongPop Party");	   
	firescreen.setAttribute("custom-button04-url", "https://firer.at/pages/scuffeduno.html");
	firescreen.setAttribute("custom-button04-text", "ScuffedUNO");   
	firescreen.setAttribute("custom-button05-url", "https://paperpirat.es/");
	firescreen.setAttribute("custom-button05-text", "PaperPirat.es");
	firescreen.setAttribute("website", otherwebsiteurl);
	firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
	document.querySelector("a-scene").appendChild(firescreen);
   }, 5000); 
  }
    console.log("Fire Tablet enabled");

};

// BobCast Home Button Auto Play
document.addEventListener('CustomButtonClick', async function(event) {
 // console.log('--- 1 Detected a Button Click event in another script! ---');
 // console.log('Button Name:', event.detail.buttonName);
 // console.log('Detail:', event.detail);
 // console.log('Message:', event.detail.message);
 // console.log('Timestamp:', event.detail.timestamp);
  switch (event.detail.buttonName) {
    case 'Home':
     // console.log('Handling action for: Primary Action Button HOME HOME');
      if (String(event.detail.message).includes("embed/video")) {
      // console.log('HOME IS watch.owncast.online');
        setTimeout(async () => { 
          (await BS.BanterScene.GetInstance().Find(`MyBrowser1`)).GetComponent(BS.ComponentType.BanterBrowser).RunActions(JSON.stringify({
          actions: [
            {
              actionType: "runscript",
              strparam1: `document.querySelector('[title="Play Video"]').click();`
            },
            {
              actionType: "keypress",
              strparam1: "f"
            }
          ]
        }));
        }, 2000);
      } else {
       // console.log(`HOME IS NOT watch.owncast.online`, event.detail.message);
      };
      break;
    case 'Info':
     // console.log('Handling action for: More Info Button');
      // Do something specific for button 2
      break;
    case 'Google':
     // console.log('Handling action for: Google Button');
      // Do something specific for button 3
      break;
    default:
     // console.log('An unknown button triggered the custom event.');
  }
});

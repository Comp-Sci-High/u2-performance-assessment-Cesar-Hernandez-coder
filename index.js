


let createPlaylistURL = "";
let apiKey = ""



async function createPlaylist(playlistData) {
const options = {  
    method: "POST",
    headers: {
      Authorization: `Bearer ` + apiKey,
      'Content-Type':  'application/json',
    },
  body: JSON.stringify(playlistData),};


const response = await fetch(createPlaylistURL, options);

  const data = await response.json();
  console.log(data); 
  return data;

}




















// const authEndpoint = "https://accounts.spotify.com/authorize"
// const clientId = "0513051e89a44a13bd41a77ab5bee971"
// const redirectUri = "http://localhost:3000"


const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "10ff71b2181a4ee19909431870ef03f4";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

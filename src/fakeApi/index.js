import { Server } from "miragejs";

const fakeApi = new Server({
  routes() {
    this.namespace = "api";

    this.get("/card/games", () => {
      return [
        { id:123, name: "Minecraft", viewer: 5400, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg" },
        { id:124, name: "VALORANT", viewer: 8521, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg" },
        { id:125, name: "Grand Theft Auto V", viewer: 6742, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg" },
        { id:126, name: "Teamfight Tactics", viewer: 4765, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg" },
        { id:127, name: "Counter-Strike", viewer: 76852, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg" },
        { id:129, name: "League of Legends", viewer: 131743, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" },
        { id:128, name: "Fortnite", viewer: 64600, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg" },
        { id:130, name: "Apex Legends", viewer: 95600, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg" }
      ];
    });

    this.get("/card/selectors", () => {
      return [
        { id:200, name: "Games",  imgSrc:"https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg" },
        { id:200, name: "IRL",  imgSrc:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg" },
        { id:200, name: "Music",  imgSrc:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg" },
        { id:200, name: "Esports",  imgSrc:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg" },
        { id:200, name: "Creative",  imgSrc:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg" }
      ];
    });
  }
});

export default fakeApi;
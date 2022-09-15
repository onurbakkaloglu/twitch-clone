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
        { id:127, name: "Counter-Strike: Global Offensive", viewer: 76852, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg" },
        { id:128, name: "League of Legends", viewer: 131743, imgSrc:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" }
      ];
    });
  }
});

export default fakeApi;
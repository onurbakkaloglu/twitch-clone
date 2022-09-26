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
        { id:201, name: "IRL",  imgSrc:"https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg" },
        { id:202, name: "Music",  imgSrc:"https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg" },
        { id:203, name: "Esports",  imgSrc:"https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg" },
        { id:204, name: "Creative",  imgSrc:"https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg" }
      ];
    });

    this.get("/card/shelfs", () => {
      return [
        { id:300, name: "Play Apex Legends", viewer: 5400, subject: "Apex Legends", avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png",  imgSrc:"https://static-cdn.jtvnw.net/previews-ttv/live_user_tsm_imperialhal-440x248.jpg" },
        { id:301, name: "Play Apex Legends", viewer: 5400, subject: "Apex Legends", avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png",   imgSrc:"https://static-cdn.jtvnw.net/previews-ttv/live_user_tsm_imperialhal-440x248.jpg" },
        { id:302, name: "Play Apex Legends",  viewer: 5400, subject: "Apex Legends", avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png",  imgSrc:"https://static-cdn.jtvnw.net/previews-ttv/live_user_tsm_imperialhal-440x248.jpg" },
        { id:303, name: "Play Apex Legends", viewer: 5400, subject: "Apex Legends", avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png",  imgSrc:"https://static-cdn.jtvnw.net/previews-ttv/live_user_tsm_imperialhal-440x248.jpg" },
        { id:304, name: "Play Apex Legends", viewer: 5400, subject: "Apex Legends", avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png",  imgSrc:"https://static-cdn.jtvnw.net/previews-ttv/live_user_tsm_imperialhal-440x248.jpg" }
      ];
    });

    this.get("/card/clips", () => {
      return [
        { id:300, name: "Elraenn", views: 620, profile: "Elraenn", date: "2 days ago", duration: "0:55",  clip: "true" ,avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/0294fec8-8572-4517-9b60-12e0705a8893-profile_image-70x70.png",  imgSrc:"https://clips-media-assets2.twitch.tv/pe3DA4mi7yeCyg5JDEhdig/AT-cm%7Cpe3DA4mi7yeCyg5JDEhdig-preview-480x272.jpg" },
        { id:301, name: "Elraenn", views: 530, profile: "Elraenn", date: "1 days ago", duration: "0:55", clip: "true", avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/0294fec8-8572-4517-9b60-12e0705a8893-profile_image-70x70.png",   imgSrc:"https://clips-media-assets2.twitch.tv/pe3DA4mi7yeCyg5JDEhdig/AT-cm%7Cpe3DA4mi7yeCyg5JDEhdig-preview-480x272.jpg" },
        { id:302, name: "Elraenn",  views: 3080, profile: "Elraenn", date: "Last month",duration: "0:55",  clip: "true", avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/0294fec8-8572-4517-9b60-12e0705a8893-profile_image-70x70.png",  imgSrc:"https://clips-media-assets2.twitch.tv/pe3DA4mi7yeCyg5JDEhdig/AT-cm%7Cpe3DA4mi7yeCyg5JDEhdig-preview-480x272.jpg" },
        { id:303, name: "Elraenn", views: 1100, profile: "Elraenn", date: "15 days ago", duration: "0:55", clip: "true", avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/0294fec8-8572-4517-9b60-12e0705a8893-profile_image-70x70.png",  imgSrc:"https://clips-media-assets2.twitch.tv/pe3DA4mi7yeCyg5JDEhdig/AT-cm%7Cpe3DA4mi7yeCyg5JDEhdig-preview-480x272.jpg" },
        { id:304, name: "Elraenn", views: 2880, profile: "Elraenn", date: "18 days ago", duration: "0:55", clip: "true", avatarSrc:"https://static-cdn.jtvnw.net/jtv_user_pictures/0294fec8-8572-4517-9b60-12e0705a8893-profile_image-70x70.png",  imgSrc:"https://clips-media-assets2.twitch.tv/pe3DA4mi7yeCyg5JDEhdig/AT-cm%7Cpe3DA4mi7yeCyg5JDEhdig-preview-480x272.jpg" }
      ];
    });
  }
});

export default fakeApi;
var AboutUs = document.getElementById("About-Us");
var Services = document.getElementById("Services");
var Photos = document.getElementById("Photos");
var Videos = document.getElementById("Videos");
var AboutContainer = document.querySelector(".Content-1-Div-Wrapper");
var ServicesContainer = document.querySelector(".Content-2-Div-Wrapper");
var PhotoContainer = document.querySelector(".Content-3-Div-Wrapper");
var VideoContainer = document.querySelector(".Content-4-Div-Wrapper");

AboutUs.addEventListener("click", function () {
  // AboutContainer.style.position = "static";
  // AboutContainer.style.right = "0px";
  // ServicesContainer.style.position = "absolute";
  // ServicesContainer.style.left = "133px";
  // PhotoContainer.style.position = "absolute";
  // PhotoContainer.style.left = "133px";
  // VideoContainer.style.position = "absolute";
  // VideoContainer.style.left = "133px";
  PhotoContainer.style =
    "transition:right 1s ease,opacity .1s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  VideoContainer.style =
    "transition:right 1s ease,opacity .1s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  ServicesContainer.style =
    "transition:right 1s ease,opacity .1s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  AboutContainer.style =
    "transition:right 1s ease,opacity 1s ease,position 1s ease;z-index:2;right:0px;opacity:1;position:static;";
});

Services.addEventListener("click", function () {
  // AboutContainer.style.position = "absolute";
  // AboutContainer.style.left = "133px";
  // ServicesContainer.style.position = "static";
  // ServicesContainer.style.right = "0px";
  // PhotoContainer.style.position = "absolute";
  // PhotoContainer.style.left = "133px";
  // VideoContainer.style.position = "absolute";
  // VideoContainer.style.left = "133px";
  AboutContainer.style =
    "transition:right 1s ease,opacity .5s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  PhotoContainer.style =
    "transition:right 1s ease,opacity .5s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  VideoContainer.style =
    "transition:right 1s ease,opacity .5s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  ServicesContainer.style =
    "transition:right 1s ease,opacity 1s ease,position 1s ease;z-index:2;right:0px;opacity:1;position:static;";
});

Photos.addEventListener("click", function () {
  // AboutContainer.style.position = "absolute";
  // AboutContainer.style.left = "133px";
  // ServicesContainer.style.position = "absolute";
  // ServicesContainer.style.left = "133px";
  // PhotoContainer.style.position = "static";
  // PhotoContainer.style.right = "0px";
  // VideoContainer.style.position = "absolute";
  // VideoContainer.style.left = "133px";
  AboutContainer.style =
    "transition:right 1s ease,opacity .5s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  ServicesContainer.style =
    "transition:right 1s ease,opacity .5s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  VideoContainer.style =
    "transition:right 1s ease,opacity .5s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  PhotoContainer.style =
    "transition:right 1s ease,opacity 1s ease,position 1s ease;z-index:2;right:0px;opacity:1;position:static;";
});

Videos.addEventListener("click", function () {
  // AboutContainer.style.position = "absolute";
  // AboutContainer.style.left = "133px";
  // ServicesContainer.style.position = "absolute";
  // ServicesContainer.style.left = "133px";
  // PhotoContainer.style.position = "absolute";
  // PhotoContainer.style.left = "133px";
  // VideoContainer.style.position = "static";
  // VideoContainer.style.right = "0px";
  AboutContainer.style =
    "transition:right 1s ease,opacity .5s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  ServicesContainer.style =
    "transition:right 1s ease,opacity .5s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  PhotoContainer.style =
    "transition:right 1s ease,opacity .5s ease,position 1s ease;z-index:1;right:500px;opacity:0;position:absolute;";
  VideoContainer.style =
    "transition:right 1s ease,opacity 1s ease,position 1s ease;z-index:2;right:0px;opacity:1;position:static;";
});

"use strict";

(function() {
  function init() {
    var router = new Router([
      new Route("login", "login.html", true),
      new Route("home", "home.html"),
      new Route("trafego", "trafego.html"),
      new Route("dash", "dash.html"),
      new Route("access", "access.html")
      ]);
  }
  init();
})();

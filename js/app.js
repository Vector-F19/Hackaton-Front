"use strict";

(function() {
  function init() {
    var router = new Router([
      new Route("login", "login.html", true),
      new Route("home", "home.html"),
      new Route("up", "up.html"),
      new Route("dash", "dash.html"),
      new Route("auditoria", "auditoria.html"),
      new Route("trafego", "trafego.html")
      ]);
  }
  init();
})();

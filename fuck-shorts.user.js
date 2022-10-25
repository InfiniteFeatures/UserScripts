// ==UserScript==
// @name         Fuck Shorts
// @namespace    dev.youko.fuckshorts
// @version      1.0
// @description  Redirect from youtube shorts to a normal video.
// @author       Youko
// @match        https://www.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let videoId = window.location.href.split('/shorts/')[1]?.split('&')[0] || "";
    if (videoId !== "") {
        window.location = "https://www.youtube.com/watch?v="+videoId;
    }
})();
// var cheet = require('cheet');

var serverless = (function () {

    'use strict';

    var navList;
    var navToggle;
    var navActiveClass = '';

    function navToggleEventHandler(e) {
        e.preventDefault();
        navList.classList.toggle(navActiveClass);
    }

    function setupSiteNav() {
        var toggleInfo = [];
        navToggle = document.querySelector('#site-nav-toggle');
        toggleInfo = navToggle.getAttribute('data-toggle').split(':');
        navList = document.querySelector(toggleInfo[0]);
        navActiveClass = toggleInfo[1];
        navToggle.onclick = navToggleEventHandler;
    }

    function init() {
        console.log('serverlesscode.com');
        setupSiteNav();
        // cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () { alert('Voilà!'); });
    }

    return {
        init: init
    };

}());

window.onload = serverless.init;

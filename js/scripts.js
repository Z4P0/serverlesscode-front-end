(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);

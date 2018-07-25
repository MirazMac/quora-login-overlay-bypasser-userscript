// ==UserScript==
// @name         Quora Non Logged Nag ByPasser
// @namespace    MirazMac\UserScripts\QuoraBypasser
// @version      0.1
// @description  Bypass those annoying as fuck sign-in nags from Quora
// @author       Miraz Mac
// @match        *://www.quora.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var body = document.querySelector("body");

    // check current user state
    var isNonLogged = false;

    if (body.classList.contains('logged_out')) {
        isNonLogged = true;
    }

    // user's logged in, no point in wasting memory then
    if (!isNonLogged) {
        return false;
    }

    // Remove the preventation class
    body.classList.remove("signup_wall_prevent_scroll");

    // Remove the modal
    var baseSignUpForm = document.querySelector('.BaseSignupForm');
    baseSignUpForm.style.display = 'none';

    // Add additional css fix, in case the methods above don't work
    var css = '.signup_wall_prevent_scroll{overflow:auto!important} .signup_wall_prevent_scroll .SiteHeader, .signup_wall_prevent_scroll .LoggedOutFooter, .signup_wall_prevent_scroll .ContentWrapper {filter:none!important}';
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
       style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
})();

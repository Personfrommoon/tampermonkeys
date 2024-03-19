// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-03-19
// @description  try to take over the world!
// @author       You
// @match        https://tahvel.edu.ee/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=edu.ee
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

        function getCookie(name) {
        const dc = document.cookie;
        const prefix = name + "=";
        let begin = dc.indexOf("; " + prefix);
        let end;

        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        } else {
            begin += 2;
            end = document.cookie.indexOf(";", begin);

            if (end == -1) {
                end = dc.length;
            }
        }

        return decodeURI(dc.substring(begin + prefix.length, end));
    }
        function Login() {
        var myCookie = getCookie("XSRF-TOKEN");

        if (myCookie != null) {
            console.log("Logged In")


            sideBar();

            window.addEventListener('popstate', function(event) {
                setTimeout(pages, 1000)
            });

            return
        }

        console.log("Not Logged In")
        document.querySelector('body').remove();
        window.location.href = "https://tahvel.edu.ee/hois_back/haridLogin"
        return
    }

    function sideBar() {
        const sideNav = document.getElementById("sidenav-list");

        sideNav.children[10].remove();
        sideNav.children[8].remove();
        sideNav.children[7].remove();
        sideNav.children[6].remove();
        sideNav.children[4].remove();

        const sideNavSide = document.getElementById("docs-menu-main.menu.otherStudyInformation.label");

        sideNavSide.children[5].remove();
        sideNavSide.children[4].remove();
        sideNavSide.children[2].remove();
        sideNavSide.children[1].remove();
    };

    function pages() {

    }

        setTimeout(Login, 500);

    GM_addStyle(`

    #main-toolbar{
    background-color: MediumSpringGreen;
    }
    .home-data-section{
    background-color: black !important;
    }

    `)
})();

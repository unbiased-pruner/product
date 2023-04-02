/*

=========================================================
* Swipe - Mobile App One Page Bootstrap 5 Template
=========================================================

* Product Page: https://themesberg.com/product/bootstrap/swipe-free-mobile-app-one-page-bootstrap-5-template
* Copyright 2019 Themesberg (https://www.themesberg.com)

* Coded by https://themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Contact us if you want to remove it.

*/

"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function(event) {

    if (d.querySelector('.headroom')) {
        var headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 0,
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }

    // Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

    document.getElementById("prune-button").onclick = () => {

        setTimeout(() => {
            document.getElementById("pruned-info").classList.remove("display-none")
            document.getElementById("run-inference").classList.remove("display-none")

            document.getElementById("pruned-info").classList.remove("display-none");
            setTimeout(() => {
                document.getElementById("pruned-info").classList.add("display-block");
            }, 100);

            document.getElementById("run-inference").classList.remove("display-none");
            setTimeout(() => {
                document.getElementById("run-inference").classList.add("display-block");
            }, 100);

        }, 100)


    }

    document.getElementById("inference-button").onclick = () => {
        setTimeout(() => {
            document.querySelector("#inference-large h4").textContent = 81.54;
            document.querySelector("#inference-large span").textContent = "Test Results";
            document.querySelector("#inference-large h4").classList.add("display-block");
            document.querySelector("#inference-large span").classList.add("display-block");

            document.querySelector("#inference-comp h4").textContent = 78.1;
            document.querySelector("#inference-comp span").textContent = "Test Results";
            document.querySelector("#inference-comp h4").classList.add("display-block");
            document.querySelector("#inference-comp span").classList.add("display-block");
        }, 100);
    };

    d.querySelector('.current-year').textContent = new Date().getFullYear();

});
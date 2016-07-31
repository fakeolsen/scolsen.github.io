/**
 * Created by scottolsen on 7/31/16.
 */

var mobileMenuButton  = document.querySelector(".mobile-menu-button");
var menuClicked = false;

function clicker () {
    var menu = document.querySelector('.nav-info-container');
    var navigation = document.querySelector('.site-nav');
    var infoSec = document.querySelector('.page-info');
    if(menuClicked == false) {
        menu.classList.add('nav-mobile-show');
        navigation.classList.add('site-nav-show');
        infoSec.classList.add('page-info-alt');
        mobileMenuButton.classList.add('mobile-menu-button-alt');
        mobileMenuButton.innerHTML = 'Close Menu';
        menuClicked = true;
    } else {
        menu = document.querySelector('.nav-info-container');
        navigation = document.querySelector('.site-nav');
        menu.classList.remove('nav-mobile-show');
        navigation.classList.remove('site-nav-show');
        infoSec.classList.remove('page-info-alt');
        mobileMenuButton.classList.remove('mobile-menu-button-alt');
        mobileMenuButton.innerHTML = 'Menu';
        menuClicked = false;
    }
}

(function () {
    mobileMenuButton.addEventListener('click', clicker);
})();
/*!
 * 
 * GKPress
 * 
 * @author 
 * @version 0.1.0
 * @link UNLICENSED
 * @license UNLICENSED
 * 
 * Copyright (c) 2023 
 * 
 * This software is released under the UNLICENSED License
 * https://opensource.org/licenses/UNLICENSED
 * 
 * Compiled with the help of https://wpack.io
 * A zero setup Webpack Bundler Script for WordPress
 */
(window.wpackioGKPressappJsonp=window.wpackioGKPressappJsonp||[]).push([[2],[function(a,s,e){"use strict";var n="GKPressdist".replace(/[^a-zA-Z0-9_-]/g,"");e.p=window["__wpackIo".concat(n)]},function(a,s,e){e(0),a.exports=e(2)},function(a,s,e){"use strict";e.r(s);e(3);jQuery(document).ready((function(a){console.log("Js loading from child theme!"),a(".option").on("click",(function(){var s=a(this).parent(".options-wrapper");"enable"==s.data("quiz")&&(a(this).hasClass("ans")?(s.data("quiz","disable"),a(this).addClass("border-success bg-success text-light"),a(".check-icon").removeClass("d-none"),a(".check-icon").fadeIn(),setTimeout((function(){a(".check-icon").addClass("d-none")}),1500)):(s.data("quiz","disable"),a(this).addClass("border-danger bg-danger text-light animate__animated animate__headShake"),s.children(".ans").addClass("border-success bg-success text-light animate__animated animate__pulse")))}))}))},function(a,s,e){}],[[1,0]]]);
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
(window.wpackioGKPressappJsonp=window.wpackioGKPressappJsonp||[]).push([[2],[function(e,s,t){"use strict";var n="GKPressdist".replace(/[^a-zA-Z0-9_-]/g,"");t.p=window["__wpackIo".concat(n)]},function(e,s,t){t(0),e.exports=t(2)},function(e,s,t){"use strict";t.r(s);t(3);jQuery(document).ready((function(e){function s(){var s=sessionStorage.getItem("correct"),t=sessionStorage.getItem("incorrect");if(null===t&&null===t)return!1;var n=parseInt(s)-parseInt(t);e(".raw-score").html(n)}console.log("Js loading from child theme!"),e(".option").on("click",(function(){var t=e(this).parent(".options-wrapper");"enable"==t.data("quiz")&&(e(this).hasClass("ans")?(t.data("quiz","disable"),e(this).addClass("border-success bg-success text-light"),e(".check-icon").removeClass("d-none"),e(".check-icon").fadeIn(),setTimeout((function(){e(".check-icon").addClass("d-none")}),1500),function(){var e=sessionStorage.getItem("correct");if(null===e)sessionStorage.setItem("correct",1);else{var t=parseInt(e);t++,sessionStorage.setItem("correct",t)}console.log(sessionStorage.getItem(e)),s()}()):(t.data("quiz","disable"),e(this).addClass("border-danger bg-danger text-light animate__animated animate__headShake"),t.children(".ans").addClass("border-success bg-success text-light animate__animated animate__pulse"),function(){var e=sessionStorage.getItem("incorrect");if(null===e)sessionStorage.setItem("incorrect",1);else{var t=parseInt(e);t++,sessionStorage.setItem("incorrect",t)}console.log(sessionStorage.getItem("incorrect")),s()}()))})),s()}))},function(e,s,t){}],[[1,0]]]);
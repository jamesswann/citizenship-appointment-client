!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";function o(){var e=location.hash;"#add-to-wallet-modal"===e&&i("#add-to-wallet-modal").show()}function a(){var e=document.getElementById("addToCalendarDropdown");e.parentElement.removeChild(e)}var l=n(214),i=n(215),r=document.getElementsByClassName("cal_option");document.addEventListener("touchstart",function(){document.getElementById("calendarOptions").className=""},null);for(var s=0;s<r.length;s++)r[s].addEventListener("focus",function(){document.getElementById("calendarOptions").className="show-menu"},null),r[s].addEventListener("blur",function(){document.getElementById("calendarOptions").className=""},null);location.hash&&o(),window.addEventListener("hashchange",o,null),Array.prototype.forEach.call(document.querySelectorAll(".add-to-wallet-modal-link"),function(e){e.removeAttribute("href"),e.setAttribute("href","#add-to-wallet-modal"),e.removeAttribute("target")}),l().setTimeoutEvent(a),document.getElementById("print-page").addEventListener("click",function(){window.print()},null),document.getElementById("print-page").style.display="inline"},200:function(e,t){"use strict";var n=e.exports={};n.addClass=function(e,t){Array.prototype.forEach.call(document.querySelectorAll(e),function(e){e.classList?e.classList.add(t):e.className+=" "+t})},n.removeClass=function(e,t){Array.prototype.forEach.call(document.querySelectorAll(e),function(e){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")})},n.hideElementsBySelectors=function(e){Array.prototype.forEach.call(document.querySelectorAll(e),function(e){e.style.display="none"})},n.clearHTML=function(e){Array.prototype.forEach.call(document.querySelectorAll(e),function(e){e.innerHTML=""})},n.highlightDateCell=function(e){n.removeClass(".Calendar-date--bookable.is-active","is-active"),n.addClass(".Calendar-date--bookable.date-"+e,"is-active")},n.unhighlightDateCells=function(){n.removeClass(".Calendar-date--bookable.is-active","is-active")},n.highlightTimesCell=function(e){n.removeClass(".AppointmentTimes-list--item.is-active","is-active"),n.addClass(".AppointmentTimes-list--item.datetime-"+e,"is-active")},n.renderSystemError=function(e){var t=document.querySelector(e);t.innerHTML="An error has occurred in the system. Please try again in a few minutes"},n.focusMonthNav=function(e){var t=document.querySelector(".Calendar.month-"+e+" a.Calendar-nav--next")||document.querySelector(".Calendar.month-"+e+" a.Calendar-nav--prev");t?t.focus():n.focusFirstActiveMonthDate(e)},n.focusFirstActiveMonthDate=function(e){var t=document.querySelectorAll("[class^='DateCell Calendar-date--bookable date-"+e+"'] a");t.length>0&&t[0].focus()}},214:function(e,t){"use strict";var n=1799e3,o=1679e3;e.exports=function(){return{setTimeoutEvent:function(e){return setTimeout(e,n)},setNotificationBeforeExpiry:function(e){setTimeout(e,o)}}}},215:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(216),i=n(200),r=27,s=function(){function e(t){o(this,e),this.popupDOMid=t}return a(e,[{key:"show",value:function(){window.location.hash=this.popupDOMid,i.addClass(this.popupDOMid,"modalDialog-bg--display"),i.addClass("body","scroll-disabled"),this.setEventListeners(),document.querySelector("div"+this.popupDOMid+" .log-out").focus()}},{key:"setEventListeners",value:function(){var e=this;window.addEventListener("keydown",function(t){t.which==r||t.keyCode==r?e.closeModal():l.trapFocus(document.querySelector(".modalDialog-bg"),t)},null),document.querySelector(this.popupDOMid+" .close").addEventListener("click",function(){e.closeModal()})}},{key:"closeModal",value:function(){i.removeClass(this.popupDOMid,"modalDialog-bg--display"),i.removeClass("body","scroll-disabled"),location.hash="#close-modal"}}]),e}();e.exports=function(e){return new s(e)}},216:function(e,t){"use strict";var n=e.exports={},o=9;n.trapFocus=function(e,t){var n=[document.getElementById("log-out"),document.getElementById("extend-session"),document.getElementById("close-modal")];if(t.which==o||t.keyCode==o){var a=(e.querySelectorAll("*"),n.length),l=document.activeElement,i=n.indexOf(l);t.shiftKey?0==i&&(n[a-1].focus(),t.preventDefault()):i==a-1&&(n[0].focus(),t.preventDefault())}}}});
//# sourceMappingURL=confirmation.js.map
const facebookBtn=document.querySelector(".facebook-btn"),twitterBtn=document.querySelector(".twitter-btn"),linkedinBtn=document.querySelector(".linkedin-btn"),whatsappBtn=document.querySelector(".whatsapp-btn"),facSideBtn=document.querySelector(".facebook-side-btn"),twiSideBtn=document.querySelector(".twitter-side-btn"),whaSideBtn=document.querySelector(".whatsapp-side-btn"),linSideBtn=document.querySelector(".linkedin-side-btn");function init(){let t=encodeURI(document.location.href),e=encodeURI("Hi everyone, please check this out: ");facebookBtn.setAttribute("href",`https://www.facebook.com/sharer.php?u=${t}`),twitterBtn.setAttribute("href",`https://twitter.com/share?url=${t}&text=${e}`),linkedinBtn.setAttribute("href",`https://www.linkedin.com/shareArticle?url=${t}&title=${e}`),whatsappBtn.setAttribute("href",`https://wa.me/?text=${e} ${t}`),facSideBtn.setAttribute("href",`https://www.facebook.com/sharer.php?u=${t}`),twiSideBtn.setAttribute("href",`https://twitter.com/share?url=${t}&text=${e}`),linSideBtn.setAttribute("href",`https://www.linkedin.com/shareArticle?url=${t}&title=${e}`),whaSideBtn.setAttribute("href",`https://wa.me/?text=${e} ${t}`)}init(),window.addEventListener("load",()=>{let t=select(".portfolio-container");if(t){let e=new Isotope(t,{itemSelector:".portfolio-item"}),i=select("#portfolio-flters li",!0);on("click","#portfolio-flters li",function(t){t.preventDefault(),i.forEach(function(t){t.classList.remove("filter-active")}),this.classList.add("filter-active"),e.arrange({filter:this.getAttribute("data-filter")}),e.on("arrangeComplete",function(){AOS.refresh()})},!0)}}),jQuery(document).ready(function(t){"use strict";t(function(){var e=t("#modBtn"),i=t("#modal"),o=i.find(".close-btn img"),n=i.find(".modal-content");e.on("click",function(){i.css("display","block"),n.removeClass("modal-animated-out").addClass("modal-animated-in")}),t(document).on("click",function(e){var r=t(e.target);(r.is(i)||r.is(o))&&n.removeClass("modal-animated-in").addClass("modal-animated-out").delay(300).queue(function(t){i.css("display","none"),t()})})}),t("a.scrollTo").on("click",function(){var e=t(this).attr("data-scrollTo");return t("a.scrollTo").each(function(){e==t(this).attr("data-scrollTo")?t(this).addClass("active"):t(this).removeClass("active")}),t("body, html").animate({scrollTop:t("#"+e).offset().top},1e3),!1}),t(".menu-icon").click(function(){t(this).toggleClass("active"),t(".overlay-menu").toggleClass("open")})});
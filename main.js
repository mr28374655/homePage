// $(document).ready(function () {
// Code

// // Start Button
// $(".start").click(function () {
//     $("section").hide(1000).show(1000).slideUp(1000);
// });

// // Stop Button
// $(".stop").click(function () {
//     $("section").stop();
// });

// // Div demo
// const text = $("#demo");
// text.text("this is new text");
// text.html("<h1> this is new text 2 </h1>");

// console.log(text.attr("id"));
// console.log(text.attr("class" , "test"));
// // Input
// console.log($("input").val("mohamed"));
// });

// important functions in JQuery:

// ready(() =>){}
// hide( , )
// show( , )
// slideToggle()
// toggle()
// stop()
// fadeIn() , fadeOut() , slidUp() , slideDown()
// animate({})
// text()
// html(" ")
// val()
// attr(" ") , attr(" " , " ")
// append() inside
// prepend inside
// after() outside
// before() outside
// remove()
// addClass()
// removeClass()
// toggleClass(
// click()
// on(" ", () =>{})
// css({})
// width()
// innerWidth() width + padding
// outerWidth() width + padding + border
// outerWidth(true) width + padding + border + margin
// height()
// innerHeight() width + padding
// outerHeight() width + padding + border
// outerHeight(true) width + padding + border + margin
// parent()
// parents() ,parents(" ")
// parentUntil(" ")
// childern()
// find() childern || parent
// siblings() , siblings(" ") other elements
// next()
// nextAll()
// prev()
// prevAll()
// prevUntil(" ")
// first()
// last()
// filter()
// eq() (index)
// not()

// $.ajax({
//     type: "GET",
//     url: "",
//     data: {
//         format: "json",
//     },
//     error: function() {
//         $("#info").html("<p>an error has occurred</p>");
//     },
//     success: function(data) {
//         let $title = $("<h1>").text(data.talks[0].talk_title);
//         let $description = $("<p>").text(data.talks[0].talk.$description);
//         $("#info").append($title).append($description);
//     },
// });

// // Document
// $(document).ready(function () {
// 	$("header li").on("click", function () {
// 		$(this).addClass("active").siblings().removeClass("active");
// 		let sectionName = $(this).attr("id");
// 		$("." + sectionName)
// 			.fadeIn(1000)
// 			.siblings("section")
// 			.hide();
// 	});
// });

// // Window
// $(window).scroll(function () {
// 	if ($(window).scrollTop() >= $(".about").offset().top) {
// 		// console.log("yes");
// 	}
// 	// console.log($(window).scrollTop());
// });

$(document).ready(function(){

// alert
	$('#btnAlert').on('click', 
		function(){
		alert("Welcome to Jquery 101");
	});

	$('.rome').on('click', 
		function(){
		alert("this is rome");
	});

//------------------------------------------------------------------------

// mouseover
	$('.rome').on('mouseover',
		function(){
			$('.alerth2').css('color','red');
	});

	$('.rome').on('mouseout', 
		function(){
			$('.alerth2').css('color', 'black');
	});

//------------------------------------------------------------------------

// showhide
	$('#btnShow').on('click', 
		function(){
			$('.london').fadeIn()
	});

	$('#btnHide').on('click', 
		function(){
			$('.london').fadeOut()
	});

	$('#btntg').on('click', 
		function(){
			$('.london').fadeToggle(2000)
	});

	$('.ques').on('click', 
		function(){
			$('.answ').slideToggle(500);
	});

//------------------------------------------------------------------------

// animation 1
	$('.btnanim').on('click',function(){
			$('.europe').animate({opacity : 1,left: "+=100",width:["toggle", "linear"], height: ["toggle", "linear"]}, 5000, "linear", function(){
				$(this).after("<p>Animation Complete.</p>");
			});
	});

//------------------------------------------------------------------------

// animation 2
	$('.btnanim2').on('click', function(){
		$('.anmtext').animate({width: "350px"}, 2000, "linear", function(){
			$(this).css("color", "red");
			$(this).css("background-color", "lightblue");
		});
	});

//------------------------------------------------------------------------

// animation 3
	$('.btnanim3').on('click', function(){
		$('.text1').animate({width: "70%", height: "90%", opacity: 0.6, fontSize: "60px"}, 1500, "swing", function(){
			$(this).css("border", "10px solid black");
		});
	});

//-------------------------------------------------------------------------

// animation 4
	$('.btnanim4').on('click', function(){
		$('.block').animate({left: "+=50px"}, "slow");
	});
	$('.btnanim5').on('click', function(){
		$('.block').animate({left: "-=50px"}, "slow");
	});

//-------------------------------------------------------------------------

// animation 5
	$('.btnblk2').on('click', function(){
		$('.block2')
		.animate({ width: "90%" },{ queue: false, duration: 3000 })
		.animate({ fontSize: "30px" }, 1500)
		.animate({ borderRightWidth: "15px"}, 1500);
	});
	$('.btnblk3').on('click', function(){
		$('.block3')
		.animate({ width: "90%" }, 1000)
		.animate({ fontSize: "30px" }, 1000)
		.animate({ borderLeftWidth: "15px" }, 1000);
	});
	$('.btnboth').on('click', function(){
		$('.btnblk2').add('.btnblk3').trigger('click');
	});
	$('.btnreset').on('click',  function(){
		$('.b23').css({
			width: "",
			fontSize: "",
			borderWidth: "",
		});
	});

//-------------------------------------------------------------------------

// animation 6
	$('.btnsquare').on('click', function(){
		$('.sqcl').animate({ width: "100px", height: "100px"}, 3000);
	});
	$('.btncircle').on('click', function(){
		$('.sqcl').animate({ width: "100px", height: "100px", borderRadius: "50%"}, 1000);
	});
	$('.btnreset').on('click', function(){
		$('.sqcl').css({ width: "", height: "", borderRadius: 0});
	});

//-------------------------------------------------------------------------

// animation 7
	$('.btnmove').on('click', function(){
		$('.blockN')
			.first()
			.animate(
				{left: 100}, 
				{duration: 1000,
					step: function(now, fx)
					{
						$('.blockN').slice(1).css("left", now);
					}
				}
			);
	});

//-------------------------------------------------------------------------

// animation 8
	$('.btnX').on('click', function(){
		$('.blockX')
		.animate(
			{ left: 1000},
			{ duration: 5000,
				step: function(now, fx)
				{
					if(now < 50){
						$(this).css('background-color', '');
					} else if(now < 300){
						$(this).css('background-color', 'purple');
					} else if(now < 600){
						$(this).css('background-color', 'black');
					} else if(now < 900){
						$(this).css('background-color', 'yellow');
					} else{
						$(this).css('background-color', '');
					}
				}
			}
		);
	});
	$('.btnX').on('dblclick', function(){
		$('.blockX').stop(true,true);
		$('.blockX').css({
			left: "0px",
			backgroundColor: ""
		});
	})

//-------------------------------------------------------------------------

// animation 9
$('.btnPara').on('click', function(){
	$('.para1').animate({height: "toggle", opacity: "toggle"}, "slow");
	// $('.para1').animate({left: 50, opacity: 1}, 500);
	// $('.para1').animate({left: 50, opacity: 1}, {duration: 2000, queue: false});
	// $('.para1').animate({height: "toggle", opacity: "toggle"}, {duration: "slow"});
	// $('.para1').animate({height: 50, width: 300, opacity: 0.5}, 2000, "linear",
	// 	function(){
	// 		alert("All done");
	// 	});
});

//-------------------------------------------------------------------------

// animation 10

$('.btn-an10').on('click', function(){
	$('.animation10').animate({left: "650px", width: "200px", height: "200px"}, 2000)
});
$('.btn-an-reset').on('click', function(){
	$('.animation10').stop(true,true);
	$('.animation10').css({
		left: "0px", width: "150px", height: ""
	});
});

//-------------------------------------------------------------------------

// animation 11
$('.btn-an11').on('click', function(){
	$('.animation11').animate({ height: "200px"}, "slow")
	.animate({ width: "200px"}, "slow")
	.animate({ height: "250px"}, "slow")
	.animate({ width: "250px"}, "slow")
	.animate({ height: "200px"}, "slow")
	.animate({ width: "200px"}, "slow")
	.animate({ height: "150px"}, "slow")
	.animate({ width: "150px"}, "slow");
});

//-------------------------------------------------------------------------

// Hide 1
$('.btn-hd').on('click', function(){
	$('.hid_p').hide(3000);
});
$('.hide_link').on('click', function(event){
	event.preventDefault();
	$(this).hide(2000);
});

//-------------------------------------------------------------------------

// Hide 2
const colorsNew = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
for (let i=0; i<5; i++){
	const colorsBG = colorsNew[i];
	$("<div class='boxhide'>")
	.css("background", colorsBG)
	.appendTo('.newbox');
}
$('.boxhide').on('click', function(){
	$(this).hide(2000, function(){
		$(this).remove();
	});
});

//-------------------------------------------------------------------------

// Hide 3
const tasks = ['Buy groceries',
  'Complete homework',
  'Clean the house',
  'Do laundry',
  'Pay bills'];
for (let i=0; i < tasks.length; i++){
	$("<li class= 'task'>" + tasks[i] + "</li>").appendTo('.task-list');
}
$('.task').on('click', function(){
	$(this).hide(2000, function(){
		$(this).remove();
	});
});
$('.clearCompleted').on('click', function(){
	$('.task').each(function(index){
		$(this).delay(index * 500).hide(1000, function(){
			$(this).remove();
		});
	});
});

//-------------------------------------------------------------------------

// Hide 4
const notifications = [
  'You have a new message',
  'Your subscription is expiring soon',
  'Don’t forget to check your email',
  'New updates are available',
  'Someone liked your post'
];
for (let i=0; i < notifications.length; i++){
	$("<div class='not-container'>" + notifications[i] + "</div>").appendTo('.not-containers');
};
$('.not-container').on('click', function(){
	$(this).hide(1000, function(){
		$(this).remove();
	});
});
$('.notiCompleted').on('click', function(){
	$('.not-container').each(function(index){
		$(this).delay(index * 700).hide(2000, function(){
			$(this).remove();
		});
	});
});

//-------------------------------------------------------------------------

// Hide 5
const fruitList = ["Apple", "Orange", "Mango"];
for(let i = 0; i < fruitList.length; i++){
	$("<li class = 'numberOfFruits'>" + fruitList[i] + "</li>" ).appendTo('.fruits');
};
$('.numberOfFruits').on('click', function(){
	$(this).hide(1000, function(){
		$(this).remove();
	});
});
$('.fruitEaten').on('click', function(){
	$('.fruits').each(function(index){
		$(this).delay(index*400).hide(2000, function(){
			$(this).remove();
		});
	});
});

//-------------------------------------------------------------------------

// Hide 6

const colorCodes = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
for (let i=0; i<colorCodes.length; i++){
	$("<div class ='boxCode'>").css("background", colorCodes[i]).appendTo('.colorBox');
};
$('.boxCode').on('click', function(){
	$(this).hide(2000, function(){
		$(this).remove();
	});
});

//-------------------------------------------------------------------------

// Hide 7

$("#hider").on('click', function(){
	$(".onces:last-child").hide(900, function(){
		$(this).prev().hide(900, arguments.callee);
	});
});
$("#shower").on('click', function(){
	$(".onces").show(2000);
});

//-------------------------------------------------------------------------

// show
$("#hideAgain").on('click', function(){
	$(".showHideBox:last-child").hide(2000, function showLast(){
		$(this).prev(".showHideBox").hide(2000, showLast);
	});
});
$("#showAgain").on('click', function(){
	$(".showHideBox").first().show(2000, function showNext(){
		$(this).next(".showHideBox").show(2000, showNext);
	});
});

//-------------------------------------------------------------------------

// show 2
$(".btnForm").on('click', function doIt(){
	$(".formSpan,.formShow").show(1000)
});
$(".yesForm").on('submit', function(event){
	event.preventDefault();
	if($(".formInput").val().trim()==="yes"){
		$(".formPara").show(500, function(){
			$(this).text("OK, Done!")
		});
	} else{
		$(".formPara").show(500, function(){
			$(this).text("please type yes")
		});
	};
	$(".formSpan,.formShow").hide("fast");
});

//-------------------------------------------------------------------------

// show 3
$(".btnForm2").on('click', function submitIt(){
	$(".formSpan2, .formShow2").show(1000)
});
$(".yesForm2").on('submit', function(event){
	event.preventDefault();
	if($(".formInput2").val().trim()==="yes"){
		$(".formPara2").show(500, function(){
			$(this).text("Ok! Done")
		});
	} else{
		$(".formPara2").show(500, function(){
			$(this).text("Please type yes")
		});
	};
	$(".formSpan2, .formShow2").hide("slow");
});

//-------------------------------------------------------------------------

// toggle 1

$(".btnToggle").on('click', function(){
		$(".toggleHidden").toggle("slow", function(){
			$(".done").show()
		});
});

//-------------------------------------------------------------------------

// toggle 2
let flip = 0;
$(".btnToggle2").on('click', function(){
	$(".lorem").toggle( flip++ % 2 === 0);
});

//-------------------------------------------------------------------------

// fadeIn 1

$(".newFade").on('click', function(){
	$(".fadeOne:hidden").first().fadeIn("slow");
});

//-------------------------------------------------------------------------

// fadeIn 2
$(".censoredBtn").on('click', function(){
	$(".censoredDiv").fadeIn(3000, function(){
		$(".censoredSpan").fadeIn(100);
	});
});

//-------------------------------------------------------------------------

// fadeout
$(".selected").on('click', function(){
	$(this).fadeOut(1000, function(){
		$(".modifiers").text( "'"  +  $(this).text() + "' has faded");
		$(this).remove();
	});
});
$(".selected").hover(function(){
	$(this).addClass("hiLite");
}, function(){
	$(this).removeClass("hiLite");
});


//-------------------------------------------------------------------------

// fadeto

$(".oneTwoThree").on('click', function(){
	$(this).fadeTo("fast", Math.random());
});

//-------------------------------------------------------------------------

// slidedown
$('.downSlide').on('click', function(){
	$(".afterSlide").slideDown("slow", function(){
		$(".sldw").text("Sliding Done")
	});
});

//-------------------------------------------------------------------------

// slidedown2
$('.slideh2').on('click', function(){
	if($('.slidep').first().is(":hidden")){
		$('.slidep').slideDown("slow");
	}else{
		$('.slidep').hide("slow");
	}
})

//-------------------------------------------------------------------------

// slidedown3
$('.push').on('click', function(){
	$(this).css({
		cursor: "wait"
	});
	$('.pushInput').slideToggle(1000, function(){
		$(this).css({"border" : "2px red inset"}).filter(".middle").css("background-color", "powderblue").trigger("focus");
	})
})

//-------------------------------------------------------------------------
// another toggle
$('.btnToggle').on('click', function(){
	$('.cmndiv:not(.still)').slideToggle("slow", function(){
		let n = parseInt($('.togglSpan').text(), 10);
		$('.togglSpan').text( n+1 );
	});
});

//-------------------------------------------------------------------------
// another toggle
$('.slideh12').on('click', function(){
	if($('.slidep1').first().is(":hidden")){
		$('.slidep1').show("slow");
	}else{
		$(".slidep1").slideUp("slow");
	}
});

//-------------------------------------------------------------------------
// clearQueue
$('.btnStart').on('click', function(){
	let xDiv = $('.queDiv');
	xDiv.show("slow").animate({left: "+=200"}, 5000);
	xDiv.queue(function(){
		xDiv.addClass('newcolor');
		xDiv.dequeue();
	});
	xDiv.animate({left: "-=200"}, 1500);
	xDiv.queue(function(){
		xDiv.removeClass('newcolor');
		xDiv.dequeue();
	});
	xDiv.slideUp();
});
$('.btnStop').on('click', function(){
	let xDiv = $('.queDiv');
	xDiv.clearQueue();
	xDiv.stop();
});

// $('.btnStart').on('click', function(){
//     let xDiv = $('.queDiv');

//     // Show the div slowly
//     xDiv.show("slow").animate({left: "+=200"}, 5000, function() {
//         // After the div has moved to the right, add the 'newcolor' class
//         xDiv.addClass('newcolor');

//         // Animate the div back to the left
//         xDiv.animate({left: "-=200"}, 1500, function() {
//             // After moving back to the left, remove the 'newcolor' class
//             xDiv.removeClass('newcolor');

//             // Slide up the div after all animations are complete
//             xDiv.slideUp();
//         });
//     });
// });

//-------------------------------------------------------------------------
// delay
$('.btnDelay').on('click', function(){
	$('.delayChildDiv1').slideUp(300).delay(800).fadeIn(400);
	$('.delayChildDiv2').slideUp(300).fadeIn(400);
});

//-------------------------------------------------------------------------
// dequeue
$('.btnDequeue').on('click', function(){
	$('.dequeueChildDiv1').animate({left: "+=200px"}, 2000).animate({top: "0px"}, 600).queue(function(){
		$(this).toggleClass("redi").dequeue();
	}).animate({left:"10px", top:"30px"}, 700);
});

//-------------------------------------------------------------------------
// finish()

let horiz = $('#path').width()-35;
let vert = $('#path').height()+10;
let btns = {
	bstt : function(){
		$('.boxFinish').stop(true, true);
	},
	bcf : function(){
		$('.boxFinish').clearQueue().finish();
	},
	bstf : function(){
		$('.boxFinish').stop(true, false);
	},
	bcs : function(){
		$('.boxFinish').clearQueue().stop();
	},
	bsff : function(){
		$('.boxFinish').stop(false, false);
	},
	bs : function(){
		$('.boxFinish').stop();
	},
	bsft : function(){
		$('.boxFinish').stop(false, true);
	},
	bf : function(){
		$('.boxFinish').finish();
	},
};
$('.bxs').on('click', function(){
	btns[this.id]();
});

$('#go').on('click', function(){
	$('.boxFinish').clearQueue().stop().css({left: 10, top: 47}).animate({top: vert}, 3000).animate({left: horiz}, 3000).animate({top: 47}, 3000);
});

//-------------------------------------------------------------------------
// stop()
$('.h4Hover').hover(function(){
	$('.europeHover').stop(true, true).fadeOut();
}, function(){
	$('.europeHover').stop(true, true).fadeIn();
});

//-------------------------------------------------------------------------
$('#goSt').on('click', function(){
	$('.blockSt').animate({left: "+=200px"}, 2000)
});
$('#stopSt').on('click', function(){
	$('.blockSt').stop()
});
$('#backSt').on('click', function(){
	$('.blockSt').animate({left: "-=200px"}, 2000)
});
let blockNew = $('.blockSt');
$('#toggleSt').on('click', function(){
	blockNew.stop().slideToggle(1000)
});

//-------------------------------------------------------------------------
// queue()
let quDiv = $('.quDiv');
function runIt(){
	quDiv.show("slow").animate({left: "+=200"}, 2000).slideToggle(1000).slideToggle("fast").animate({left: "-=200"}, 2000).hide("slow").show(1200).slideUp("slow", runIt);
}
function showIt(){
	let nQue = quDiv.queue("fx");
	$('.qLength').text(nQue.length);
	setTimeout(showIt, 100)
};
runIt();
showIt();

//-------------------------------------------------------------------------
// queue2()
$('#qqBtn').on('click', function(){
	$('.quDiv2').show('slow').animate({left: "+=200"}, 2000)
	.queue(function(){$(this).addClass('colorFul').dequeue();})
	.animate({left: "-=200"}, 2000)
	.queue(function(){$(this).removeClass('colorFul').dequeue();})
	.slideToggle('slow');
});

$('#qqBtnStop').on('click', function(){
	$('.quDiv2').queue( 'fx', [] ).stop();
});

// let toggleFx = function(){
// 	$.fx.off = !$.fx.off;
// };
// toggleFx();
// $('#toggleFx').on('click', toggleFx );

//-------------------------------------------------------------------------
// add()
$('.addDiv').css("border", "2px solid red").add('.addP, .anotherAdd').css("background", "yellow");

$('.addP2').clone().add("<span>Again</span>").appendTo('.addP3');

//-------------------------------------------------------------------------
let collection = $('.addP4');
collection = collection.add(document.getElementById('addP5'));
collection.css("fontSize", "25px").css("color", "red").css("background", "yellow");

//-------------------------------------------------------------------------
$('.third-item').nextAll().addBack().css("background-color", "red");

//-------------------------------------------------------------------------
$('.left, .right').find('.lrDiv, .lrDiv > p').addClass('qwertY');
$('.before-addback').find('p').addClass('bgC');
$('.after-addback').find('p').addBack().addClass('bgC');

//-------------------------------------------------------------------------
// addClass
$('.redClass').addClass(function(index, currentClass){
	let addedClass;
	if( currentClass === "redClass"){
		addedClass = "yellowClass";
		$('.clsDets').text('There are one yellow divs');
	}
	return addedClass;
});

//-------------------------------------------------------------------------
// after













































































})
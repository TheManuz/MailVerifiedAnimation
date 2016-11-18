var INITIAL_DELAY = 0.675;

var bg_circle = $("#bg_circle");
var mail_group = $("#mail_group");
var verify_ring = $("#verify_ring");
var verify_check = $("#verify_check");


bg_circle_loop_timeline = new TimelineMax({ paused: false });
mail_loop_timeline = new TimelineMax({ paused: false });
bg_circle_appear_timeline = new TimelineMax({ paused: false });
mail_appear_timeline = new TimelineMax({ paused: false });

//Initial setup
mail_appear_timeline.set([bg_circle], {scale: 0, transformOrigin:"center center"});
mail_appear_timeline.set([verify_ring], {strokeDashoffset:"403"});
mail_appear_timeline.set([verify_check], {strokeDashoffset:"92"});
mail_appear_timeline.set([mail_group], {x:60, y:96, scale: 0, opacity: 1, transformOrigin:"center center"});

mail_loop_timeline.set([mail_group], {rotation:-1, transformOrigin:"center center"});

//Looped animations
bg_circle_loop_timeline.to(bg_circle, 2, {rotation:360, ease: Power0.easeNone, repeat:-1})
mail_loop_timeline.to(mail_group, 1.35, {rotation:1, transformOrigin:"50% 50%", ease: Power1.easeInOut, repeat:-1, yoyo:true})

//Mail Animation
mail_appear_timeline
	.to(bg_circle, 0.675, {scale: 1, ease: Elastic.easeOut.config(0.2, 0.3)}, INITIAL_DELAY)
	.to(mail_group, 0.675, {scale: 1, ease: Elastic.easeOut.config(0.5, 0.3)}, "-=0.45")
	.to(verify_check, 0.675, {strokeDashoffset:"0", ease: Power2.easeOut}, "+=0.225")
	.to(verify_ring, 1.300, {strokeDashoffset:"0", ease: Power2.easeOut}, "-=0.675");


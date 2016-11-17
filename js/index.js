var INITIAL_DELAY = 1.5;

var bg_circle = $("#bg_circle");
var mail_group = $("#mail_group");
var verify_ring = $("#verify_ring");
var verify_check = $("#verify_check");

tl1 = new TimelineMax({ paused: false });
tl2 = new TimelineMax({ paused: false });
tl3 = new TimelineMax({ paused: false });

//Initial setup
tl1.set([bg_circle], {scaleX:1, scaleY: 0.98, transformOrigin:"center center"});
tl1.set([verify_ring], {strokeDashoffset:"403"});
tl1.set([verify_check], {strokeDashoffset:"92"});
tl1.set([mail_group], {x:60, y:96, scale: 0, opacity: 1, transformOrigin:"center center"});

tl3.set([mail_group], {rotation:-1, transformOrigin:"center center"});

//Mail Animation
tl1.to(mail_group, 0.675, {scale: 1, ease: Elastic.easeOut.config(0.5, 0.3)}, INITIAL_DELAY)
	.to(verify_ring, 0.45, {strokeDashoffset:"0", ease: Power2.easeOut})
	.to(verify_check, 0.45, {strokeDashoffset:"0", ease: Power2.easeOut});

tl2.to(bg_circle, 2, {scaleX:0.98, scaleY: 1, ease: Power1.easeInOut, repeat:-1, yoyo:true})

tl3.to(mail_group, 1.35, {rotation:1, transformOrigin:"50% 50%", ease: Power1.easeInOut, repeat:-1, yoyo:true})
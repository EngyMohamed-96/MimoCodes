var tlOne = new TimelineMax({
    delay:'1'
});

tlOne.fromTo('.robot .circle.one',1.3,{scale:'0'},{scale:1,opacity:'0.8'})
tlOne.fromTo('.robot .robot4',0.6,{opacity:0,display:'none'},{opacity:1,display:'block'});
tlOne.fromTo('.robot .robot3',1.3,{opacity:0,display:'none',top:'-8rem',right:'4rem'},{opacity:1,display:'block',top:'4rem'});
tlOne.to('.robot .robot4',0.6,{opacity:0,display:'none'});
tlOne.fromTo('.robot .robot2',1.3,{opacity:0,display:'none',top:'-8rem'},{opacity:1,display:'block',top:'3rem'});
tlOne.to('.robot .robot3',0.6,{opacity:0,display:'none'},'-=0.6');
tlOne.fromTo('.robot .robot1',1.3,{opacity:0,display:'none',top:'-10rem'},{opacity:1,display:'block',top:'0.3rem'},'+=0.6');
tlOne.to('.robot .robot2',0.6,{opacity:0,display:'none'},'-=0.6');



  TweenMax.staggerFromTo(".logo",  0.3, {
    opacity: 0,
    y: 0
  }, {
    opacity: 1,
    y: 10
  }, "0.3");

  TweenMax.fromTo('nav ul  li',0.6,{
      opacity:0,
      y:0
  },{
    opacity: 1,
    y: 10,
    stagger:'0.2'
  })

  
  $( document ).ready(function() {
    $('.loading').fadeOut()
});
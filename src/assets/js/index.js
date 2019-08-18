$(function(){
var $secondHalf = $('div.info')
var $firstHalf = $('div.img')

$secondHalf.hover(function(){
  $('div.footer_').fadeOut('fast');
  $('div.header').fadeOut('fast');
  $('div.mockup').fadeOut('fast');
  $firstHalf.css({
    "position":'fixed'
  })
$firstHalf.animate({
  'width':'30%'
},'fast',function(){
  $secondHalf.animate({
    'width':"70%"
  },'fast',function(){

  $('div.company_logo').fadeIn().css({
    'display':'flex'
   })
   $('li.mockup_img_two').fadeIn("slow").css({
     display:"inline-block"
   })
   $('li.mockup_img_three').fadeIn("slow").css({
     display:"inline-block"
   })
  })
})

},function(){
  $('li.mockup_img_two').fadeOut("fast").css({
    display:"none"
  })
  $('li.mockup_img_three').fadeOut("fast").css({
    display:"none"
  })
  $secondHalf.animate({
    'width':"50%",
  },function(){
    $('div.company_logo').fadeOut()
    $firstHalf.animate({
      'width':'50%'
    },function(){
      $('div.header').fadeIn('slow');
      $('div.mockup').fadeIn('slow');
      $('div.footer_').fadeIn();
    }).css({
      'position':'unset'
    })
  })

})

})

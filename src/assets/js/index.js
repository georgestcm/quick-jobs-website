$(function(){
console.log('everythign is loaded')
var $line = $('div.line');
var $secondHalf = $('div.info')

$secondHalf.hover(function(){
  $line.animate({
    width:'20%'
  })
})






})

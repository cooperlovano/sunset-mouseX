$(document).ready(function() {
  $(".product-hero").mousemove(getMousePosition);

  function getMousePosition(event) {
    let imageCount = 30;
    let elementVisible = $(".product-hero-image");
    let newEventManage = event.pageX / elementVisible.width();
    let position = Math.round(newEventManage * (imageCount - 1));
    elementVisible.hide();
    console.log(position);
    $(".product-hero-image." + position).show();
  }
  //$(".product-hero-image").css("z-index", "0");
});

/*


$(document).ready(function(){
$(".product-hero").mousemove(getMousePosition);

function getMousePosition(event){
let imageCount=9;
let elementVisible = $(".product-hero-image");
let handleImageChange = (event.pageX - elementVisible.offset().left);
let position = ()
}

})
*/

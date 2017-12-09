var $img = $('img');
var $b = $('b');
var clicks = [];
for(var i = 0; i < $img.length; i++){
    clicks.push(0);
}
$.each($img, function (i, image) {
    image.addEventListener('click', function () {
        $b.eq(i).text(++clicks[i]);
    });

});
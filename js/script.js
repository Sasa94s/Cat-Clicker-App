var $click1 = $('#clicks1');
var clicks1 = $click1.text();
$('#Cat1').click(function () {
    $click1.text(++clicks1)
});
var $click2 = $('#clicks2');
var clicks2 = $click2.text();
$('#Cat2').click(function () {
    $click2.text(++clicks2)
});
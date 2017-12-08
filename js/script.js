var $click = $('#clicks');
var clicks = $click.text();
$('#Cat').click(function () {
    $click.text(++clicks)
});
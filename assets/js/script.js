$(document).ready(function() {
    // $('#example').DataTable();
    $('.testselect3').SumoSelect({placeholder: 'None Selected'});
} );

$(".box-custom-select").toggle();

var select = $("[data-toggle=select]");
var option = $("[data-toggle=option]");

for (let i = 0; i < select.length; i++) {
    select[i].onclick = function () {
        var id_target = $(this).data('target');
        $(id_target).toggle();
    }
}


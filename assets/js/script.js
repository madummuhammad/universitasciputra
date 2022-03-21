$(document).ready(function() {
    // $('#example').DataTable();
    $('.testselect3').SumoSelect({
        placeholder: 'None Selected'
    });


} );

$(document).ready(function(){
    $(".navbar-toggler-custom").on('click',function(){
        $(".navbar-profile.collapse").toggle(function(){
            $(this).addClass("show");
        });
    });
    if (screen.width<768) {
        $(".navbar-search-button").on('click',function(){
            $(".navbar-search").toggle(function(){
                $(this).addClass("show");
            });
        });

    };

    var btn_collapse = $("[data-toggle=collapse-custom]");

    for (let i = 0; i < btn_collapse.length; i++) {
        btn_collapse[i].onclick = function () {
            var id_target = $(this).data('target');
            $(".idp").removeClass("active");
            $(id_target).addClass('active');

            $(".btn-collapse-custom").removeClass('active');
            $(this).addClass('active');
            if (id_target=="#assigned") {
                $(".finalize-peer").addClass('active');
            } else {
                $(".finalize-peer").removeClass('active');
            }
        }
    }

    var btn_sidebar = $("[data-toggle=btn_sidebar]");

    for (let i = 0; i < btn_sidebar.length; i++) {
        btn_sidebar[i].onclick = function () {
            var id_target = $(this).data('target');
            $(".tab-pane").removeClass("active show");
            $(id_target).addClass('active show');

            $(".btn-sidebar").removeClass('active');
            $(this).addClass('active');
        }
    }
})

$(".box-custom-select").toggle();

var select = $("[data-toggle=select]");
var option = $("[data-toggle=option]");

for (let i = 0; i < select.length; i++) {
    select[i].onclick = function () {
        var id_target = $(this).data('target');
        $(id_target).toggle();
    }
}

// $(document).ready(function() {
//     alert(screen.width);
// });


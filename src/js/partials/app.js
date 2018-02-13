$(document).ready(function () {

    $('.btn-sing').click(() => {
        validateSing($('#login'), $('#password'));
    });

    $('.btn-create').click(() => {
        $('#modal-create').modal();
    });

    showPopularProd();
    showCategory();
    getUserStory();

});



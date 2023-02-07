//計算頂端高度
$(function () {
    var ch = $("#top-bar").outerHeight();
    $(".cart-mt").css("margin-top", ch);
});


/* <div class="col-6 d-flex flex-wrap">
<span class="col-auto">
    <button type="button" id="minus" class="quantity-left-minus btn" data-type="minus"
        data-field="">
        <i class="fa-solid fa-minus"></i>
    </button>
</span>
<input type="text" id="quantity" name="quantity" class="col qty-font" value="1" min="0"
    max="100">
<span class="col-auto">
    <button type="button" id="plus" class="quantity-right-plus btn" data-type="plus"
        data-field="">
        <i class="fa-solid fa-plus"></i>
    </button>
</span>
</div> */


//數量增減
$(document).ready(function () {
    var quantitiy = 0;
    $('#plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1);
    });

    $('#minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        if (quantity > 1) {
            $('#quantity').val(quantity - 1);
        }
    });
});

//數量扣到0時，sweetalert提示
$('#minus').click(function () {
    var qty = $('#quantity').val();
    if (qty == 1) {
        Swal.fire({
            title: '<h3>確認要將此商品移出購物車？</h3>',
            icon: 'warning',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
            focusConfirm: false,
            iconColor: '#FFFFFF',
            background: '#6cd6d3',
            backdrop: '#FFFFFFd0',
            confirmButtonText:
                '移出',
            confirmButtonAriaLabel: '移出購物車',
            cancelButtonText:'取消',
            cancelButtonAriaLabel: '保留商品',
            confirmButtonClass: 'btn-submit-alert px-2',
            cancelButtonClass: 'btn-cancel-alert px-2',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '<h3>已將商品移出購物車</h3>',
                    icon: 'success',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    focusConfirm: false,
                    iconColor: '#FFFFFF',
                    background: '#6cd6d3',
                    backdrop: '#FFFFFFd0',
                    confirmButtonText:'確認',
                    confirmButtonAriaLabel: '確認已移出購物車',
                    confirmButtonClass: 'btn-submit-alert'
                })
            }
        })
    };
})

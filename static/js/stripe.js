$(function () {
    $('payment-form').submit(function () {
        let form = this;
        console.log(this);
        let card = {
            number: $('#id_credit_card_number').val(),
            expiryMonth: $('#id_expiry_month').val(),
            expiryYear: $('id_expiry_year').val(),
            cvc: $('#id_cvv').val(),
        };

        Stripe.createToken(card, function (status, response) {
            if (status === 200) {
                $('#credit-card-errors').hide();
                $('#id_stripe_id').val(response.id);
                // Prevent credit card details from being submitted to the server
                $('#id_credit_card_number').removeAttr('name');
                $('#cvv').removeAttr('name');
                $('#id_expiry_month').removeAttr('name');
                $('#id_expiry_year').removeAttr('name');

                form.submit()
            } else {
                $('#stripe-error-messages').text(response.error.message);
                $('#credit-card-errors').show();
                $('#validate_card_btn').attr("disabled", false);
            }
        });
        return false;
    });
});
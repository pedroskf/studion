$(document).ready(() => {
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>',
    };
    $(".slider").slick(slickOptions);

    $(".footer__form-button").on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "username",
            Password: "password",
            To: 'contato@studion.com',
            From: email,
            Subject: "Por favor me adicione na newsletter",
            Body: `Olá, eu gostaria de ser adivionado na newsletter do site.
            meu email é ${email}.
            Obrigado!
            `,
        }).then(
            message => alert(message),
        );
    });
});
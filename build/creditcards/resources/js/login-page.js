// 	<<<********** By Sovan Adhikary **********>>>
var ifSubmitted = sessionStorage.getItem("ifSubmitted");
var type = sessionStorage.getItem("type");
var loaderHtml = '';
var endSessionExist = "";
var endSessionExistMob = "";
$(window).on("load", function () {  // onload functionalities
    loaderHtml = '<div class="overlay-loader"></div>';

    var attemptOver = $("#attemptOver").val();
    if (attemptOver === "true") {
        $("#login-mob-submit").addClass('add-disable');
        $("#login-mob-submit .blue-btn").addClass('disable-btn');
        $('.view-mobile-login #otp').attr('disabled', true);
        $("#mob-otp-section .resend-otp").css("cursor", "not-allowed");
        $(".resend-otp #login-mob-resend-otp").css("pointer-events", "none");
        $(".resend-otp #login-mob-resend-otp").css("color", "gray");
    }
    else {
        //do nothing
    }

    sessionStorage.removeItem("type");
    sessionStorage.removeItem("ifSubmitted");
});


function checkLoginType() {   // saves the login type of every attempt
    sessionStorage.removeItem("type");
    var dobValue = $("#card-login #card-dob").val();
    var cnum = $("#card-login #card_no").val();
    var userId = $('#user-login #user_id').val();
    var mobileNumber = $("#moblogin").val();
    var otp = $("#mob-otp-section #otp").val();
    if (dobValue || cnum) {
        sessionStorage.setItem("type", "card");
    }
    else if (mobileNumber || otp) {
        sessionStorage.setItem("type", "mobile");
    }
    else if (userId) {
        sessionStorage.setItem("type", "userId");
    }
}


function resetCardSection() {
    $('#card-otp-section').css("display", "none");
    $('.view-card-login #card_no, #card-dob, #card-otp, #card_captcha_input').val('');
    $("#card-login #card_no, #card-otp, #card-dob, #card_captcha_input").removeClass('valid');
    $('.view-card-login #card_no, #card-dob, #card-otp, #card_captcha_input').removeClass('invalid');
    $('#card-login #card_no').prop('readonly', !1);
    $("#card-login #card_no").css("pointer-events", "auto");
    $("#card-login #card_no").removeClass('valid');
    $(".view-card-login #loginCardSubmitBtn").css("pointer-events", "auto");
    $('#card-login #login-card-err').css("display", "none");
    $('#card-login #login-card-cross').css("display", "none");
    $('#card-login #login-dob-cross').css("display", "none");
    $('#card-login #login-card-otp-cross').css("display", "none");
    $('#card-login #login-card-label').removeClass('active');
    $('#card-login #login-card-captcha-label').removeClass('active');
    $('#card-login #login-dob-label').removeClass('active');
    $('#card-login #login-card-otp-label').removeClass('active');
    $('#loginCardSubmitBtn').css("display", "block");
    $("#loginCardSubmitBtn").addClass('add-disable');
    $("#loginCardSubmitBtn .blue-btn").addClass('disable-btn');

    $("#login-card-submit").addClass('add-disable');
    $("#login-card-submit .blue-btn").addClass('disable-btn');
    $("#card-otp-section .resend-otp-card").css("cursor", "pointer");
    $(".resend-otp-card #login-card-resend-otp").css("pointer-events", "auto");
    $(".resend-otp-card #login-card-resend-otp").css("color", "#0095d9");

    $('#card-login #card_captcha_input').val("");
    $("#card-login #card_captcha_input").removeClass('valid');
    $('#card-login #card-login-captcha-section').css("display", "none");
    $('#card-login #card-login-captcha-cross').css("display", "none");
    $('#card-login #card_captcha_code_error').css("display", "none");
    $('#card-login #card-login-captcha-section').removeClass('captch-error');
    $("#card-login #card_captcha_input").removeClass('invalid');
    $('#card-login #card-login-captcha-section').css("display", "none");

    $('#card-login #card-login-select-image-section').css("display", "none");
    $(".view-card-login #loginCardSubmitBtn").css("display", "none");
    $("#card-login #dummy-card-dob").val('');
    $(".input-field #dummy-login-dob-label").removeClass("active");
    $('#card-login #card_calendar_error').css("display", "none");
    $('#card-login #card-dob-section').css("display", "none");
    $('#card-login #dummy-card-dob-section').css("display", "none");
    $('#card-login #auth_img_txt_card').prop('checked', false);
    $('#card-login #cardVirtualKeyboardTillGenOTP').css("display", "block");
    $(".view-card-login #card-login-proceed-button-section").css("display", "block");
    $("#card-login #card-login-proceed-button-section").addClass('add-disable');
    $("#card-login #card-login-proceed-button-section .blue-btn").addClass('disable-btn');

    $('#card-login #card-dob').prop('readonly', !0);
    $('#card-login #card-dob').css("pointer-events", "auto");
    $("#card-login #login-calendar").css("pointer-events", "auto");

    $('#virtualkeyboard').css("display", "none");
    $(".keyboard .char,.keyboard .space,.keyboard .capslock").removeClass('disabled');
    $(".keyboard .numbers .mob").removeClass('disabled');

    resendOTPCount = 0;
    dobotpFlag = false;
}

function resetMobileSection() {
    $('.view-mobile-login #moblogin').val('+91-');
    $('.view-mobile-login #otp').val('');
    $('.view-mobile-login #pin').val('');
    $('#mob-primaryCard').val('');
    $('#mob-otp-section').css("display", "none");
    $("#mob-multi-section").addClass("hidden-mob-details");
    $("#mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");
    $("#proceedMultiAccountMobLoginBtn").addClass('add-disable');
    $("#proceedMultiAccountMobLoginBtn .blue-btn").addClass('disable-btn');
    $('#proceedMobLoginBtn').css("display", "block");
    $(".view-mobile-login #corporateVerbiageSection").css("display", "block");
    $("#mobile-login #login-mob-cross").css("display", "none");
    $("#mobile-login #login-mob-err").css("display", "none");
    $("#mobile-login #login-primarycard-cross").css("display", "none");
    $('#mobile-login #login-primarycard-err').css("display", "none");
    $("#mobile-login #login-pin-cross").css("display", "none");
    $("#mobile-login #login-otp-cross").css("display", "none");
    $('.view-mobile-login #moblogin').removeClass('invalid');
    $('#mobile-login #mob-primaryCard').removeClass('invalid');
    $('#mobile-login #pin').removeClass('invalid');
    $('#mobile-login #otp').removeClass('invalid');
    $('#mobile-login #moblogin').prop('readonly', !1);
    $('#mobile-login #mob-primaryCard').prop('readonly', !1);
    $('#mobile-login #pin').prop('readonly', !1);
    $("#mobile-login #moblogin").css("pointer-events", "auto");
    $("#mobile-login #pin").css("pointer-events", "auto");
    $("#mob-primaryCard").css("pointer-events", "auto");
    $('.view-mobile-login #proceedMobLoginBtn').css('pointer-events', 'auto');
    $("#mobile-login #moblogin").removeClass('valid');
    $("#mobile-login #mob-primaryCard").removeClass('valid');
    $("#mobile-login #pin").removeClass('valid');
    $("#mobile-login #otp").removeClass('valid');
    $('#mobile-login #login-pin-label').removeClass('active');
    $('#mobile-login #login-otp-label').removeClass('active');
    $('#mobile-login #login-primaryCard-label').removeClass('active');
    $("#proceedMobLoginBtn").addClass('add-disable');
    $("#proceedMobLoginBtn .blue-btn").addClass('disable-btn');
    $("#proceedMultiAccountMobLoginBtn").addClass('add-disable');
    $("#proceedMultiAccountMobLoginBtn .blue-btn").addClass('disable-btn');
    $("#generate-otp-multi-mobile").addClass('add-disable');
    $("#generate-otp-multi-mobile .blue-btn").addClass('disable-btn');

    $("#login-mob-submit").addClass('add-disable');
    $("#login-mob-submit .blue-btn").addClass('disable-btn');
    $('.view-mobile-login #otp').attr('disabled', false);
    $("#mob-otp-section .resend-otp").css("cursor", "pointer");
    $(".resend-otp #login-mob-resend-otp").css("pointer-events", "auto");
    $(".resend-otp #login-mob-resend-otp").css("color", "#0095d9");


    $('#mobile-login #mobile_captcha_input').val("");
    $('#mobile-login #mobile_captcha_input').removeClass('valid');
    $('#mobile-login #mobile-login-captcha-cross').css("display", "none");
    $('#mobile-login #mobile_captcha_code_error').css("display", "none");
    $('#mobile-login #login-mobile-captcha-label').removeClass('active');
    $('#mobile-login #mobile-login-captcha-section').removeClass('captch-error');
    $('#mobile-login #mobile_captcha_input').removeClass('invalid');
    $('#mobile-login #mobile-login-captcha-section').css("display", "block");//Anchal

    $('#mobile-login #mobile-login-select-image-section').css("display", "none");
    $('#mobile-login #mobile_pin_error').css("display", "none");
    $('#mobile-login #mobile-pin-section').css("display", "none");
    $('#mobile-login #auth_img_txt_mobile').prop('checked', false);
    $('#mobile-login #mobileVirtualKeyboardTillGenOTP').css("display", "block");
    $("#mobile-login #generate-otp-multi-mobile").css("display", "none");

    $('#virtualkeyboard').css("display", "none");
    $(".keyboard .char,.keyboard .space,.keyboard .capslock").removeClass('disabled');
    $(".keyboard .numbers .mob").removeClass('disabled');

    resendOTPCountMob = 0;
}

function resetUserPassSection() {
    $('#user-login #user_id').val('');
    $('#user-login #password').val('');
    $('#user-login #encryped_password').val('');
    $('#user-login #captcha_input').val('');
    $('#user-login #userid-otp').val('');
    $('#user-login #userOtpKey').val('');
    $('#user-login #auth_img_txt_user_id').prop('checked', false);
    $('#user-login #login-user-label').removeClass('active');
    $('#user-login #login-password-label').removeClass('active');
    $('#user-login #login-user-captcha-label').removeClass('active');
    $('#user-login #login-userid-otp-label').removeClass('active');
    $('#user-login #user_id').removeClass('invalid');
    $('#user-login #password').removeClass('invalid');
    $('#user-login #captcha_input').removeClass('invalid');
    $('#user-login #userid-otp').removeClass('invalid');
    $("#user-login #user_id").css("pointer-events", "auto");
    $("#user-login #user_id").removeClass('valid');
    $('#user-login #user_id').prop('readonly', !1);
    $("#user-login #password").css("pointer-events", "auto");
    $('#user-login #password').prop('readonly', !1);
    $("#user-login #password").removeClass('valid');

    $('#user-login #captcha_input').val("");
    $('#user-login #captcha_input').removeClass('valid');
    $('#user-login #userid-login-captcha-section').css("display", "none");
    $('#user-login #userid-login-captcha-cross').css("display", "none");
    $('#user-login #userid_captcha_code_error').css("display", "none");
    $('#user-login #userid-login-captcha-section').removeClass('captch-error');
    $('#user-login #login-user-captcha-label').removeClass('active');
    $('#user-login #captcha_input').removeClass('invalid');

    $(".view-user-login #userid-login-proceed-button-section").css("display", "block");
    $("#userid-login-proceed-button-section").addClass('add-disable');
    $("#userid-login-proceed-button-section .blue-btn").addClass('disable-btn');
    $('#user-login #UserTillGenOtpVirtualKeybd').css("display", "block");

    $('#user-login #userid-login-select-image-section').css("display", "none");
    $(".view-user-login #userid-generate-otp-button-section").css("display", "none");
    $('#user-login #userid_password_error').css("display", "none");
    $('#user-login #micro-password-err').css("display", "none");
    $('#user-login #userid-login-password-section').css("display", "none");
    $("#userid-generate-otp-button-section").addClass('add-disable');
    $("#userid-generate-otp-button-section .blue-btn").addClass('disable-btn');

    $(".view-user-login #userid-otp-section").css("display", "none");
    $("#loginUserSubmitBtn").addClass('add-disable');
    $("#loginUserSubmitBtn .blue-btn").addClass('disable-btn');
    $('.view-user-login #otp').attr('disabled', false);
    $("#userid-otp-section .resend-otp").css("cursor", "pointer");
    $(".resend-otp #login-user-resend-otp").css("pointer-events", "auto");
    $(".resend-otp #login-user-resend-otp").css("color", "#0095d9");

    $('#virtualkeyboard').css("display", "none");
    $(".keyboard .char,.keyboard .space,.keyboard .capslock").removeClass('disabled');
    $(".keyboard .numbers .mob").removeClass('disabled');
    userResendOTPCount = 0;

}

function toggleMobileOrUserOrCard(type) {  // for toggling the tabs
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");

    if (type === "qrcode") {
        $('#selectQrCodeSection').addClass('active');
        $('#selectCardSection').removeClass('active');
        $('#selectUserSection').removeClass('active');
        $('#selectMobileSection').removeClass('active');
        $("#qrcode-login").css("display", "block");
        $("#card-login").css("display", "none");
        $("#mobile-login").css("display", "none");
        $("#user-login").css("display", "none");
        resetMobileSection();
        resetUserPassSection();
        resetCardSection();

    } else if (type === "card") {
        $('#selectCardSection').addClass('active');
        $('#selectQrCodeSection').removeClass('active');
        $('#selectUserSection').removeClass('active');
        $('#selectMobileSection').removeClass('active');
        $("#qrcode-login").css("display", "none");
        $("#card-login").css("display", "block");
        $("#mobile-login").css("display", "none");
        $("#user-login").css("display", "none");
        resetMobileSection();
        resetUserPassSection();
        resetCardSection();

    } else if (type === "mobile") {
        $('#selectMobileSection').addClass('active');
        $('#selectQrCodeSection').removeClass('active');
        $('#selectCardSection').removeClass('active');
        $('#selectUserSection').removeClass('active');
        $("#qrcode-login").css("display", "none");
        $("#card-login").css("display", "none");
        $("#user-login").css("display", "none");
        $("#mobile-login").css("display", "block");
        resetMobileSection();
        resetUserPassSection();
        resetCardSection();
    }
    else if (type === "user") {
        $('#selectUserSection').addClass('active');
        $('#selectQrCodeSection').removeClass('active');
        $('#selectMobileSection').removeClass('active');
        $('#selectCardSection').removeClass('active');
        $("#qrcode-login").css("display", "none");
        $("#user-login").css("display", "block");
        $("#card-login").css("display", "none");
        $("#mobile-login").css("display", "none");
        resetUserPassSection();
        resetMobileSection();
        resetCardSection();
    }
    if ((endSessionExistMob == false || endSessionExistMob == undefined)
        && (endSessionExist == false || endSessionExist == undefined)) {
        $('#login-submit-error, #login-submit-ajaxerror').css('display', 'none');
    } else {
        endSessionExist = false;
        endSessionExistMob = false;
    }
}

var resendOTPCountMob = 0;

function resendOtpForMobLogin(otpGenURL) {     // called for gen OTP and resend OTP
    if (resendOTPCountMob > 5) {
        return;
    }
    $("#moblogin").css("pointer-events", "none");
    var mobileNumber = $(".view-mobile-login #moblogin").val();
    var otpValue = $("#mob-otp-section #otp").val();
    var pin = $("#mobile-login #pin").val()
    mobileNumber = mobileNumber.substring(mobileNumber.lastIndexOf('-') + 1).trim();
    var passphrase = $("#passphrase").val();

    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");


    if (passphrase) {
        var salt = CryptoJS.lib.WordArray.random(128 / 8);
        var iv = CryptoJS.lib.WordArray.random(128 / 8);
        var key = CryptoJS.PBKDF2(
            passphrase,
            salt,
            { keySize: 128 / 32, iterations: 100 });

        var encryptedMobile = CryptoJS.AES.encrypt(mobileNumber, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        var mobileNumPassed = salt + iv + encryptedMobile;
    } else {
        var mobileNumPassed = mobileNumber;
    }


    $('#mob-otp-section #loginMobOtpMsg').css("display", "none");
    $('#mobile-login #loginMobOtpGenMsg').css("display", "none");
    $('#loginMobOtpGenMsg #otp-gen-msz').html('');

    $.ajax({
        type: "POST",
        data: JSON.stringify({
            mobile: mobileNumPassed
        }),
        url: otpGenURL,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: { 'passphrase': passphrase },
        beforeSend: function () {
            // var loaderHtml = '<div class="overlay-loader"></div>';
            if (pin.length === 4) {
                $(".input-field #login-pin-label").addClass("active");
                $('#mobile-login #pin').removeClass("invalid");
                $('#mobile-login #login-pin-cross').css("display", "none");
            }
            else if (!pin) {
                $(".input-field #login-pin-label").removeClass("active");
                $('#mobile-login #pin').removeClass("invalid");
                $('#mobile-login #login-pin-cross').css("display", "none");
            }
            else if (pin.length < 4) {
                $(".input-field #login-pin-label").addClass("active");
                $('#mobile-login #pin').addClass("invalid");
                $('#mobile-login #login-pin-cross').css("display", "block");
            }
            if (otpValue.length === 6) {
                $(".input-field #login-otp-label").addClass("active");
                $('#mobile-login #otp').removeClass("invalid");
                $('#mobile-login #login-otp-cross').css("display", "none");
            }
            else if (!otpValue) {
                $(".input-field #login-otp-label").removeClass("active");
                $('#mobile-login #otp').removeClass("invalid");
                $('#mobile-login #login-otp-cross').css("display", "none");
            }
            else if (otpValue.length < 6) {
                $(".input-field #login-otp-label").addClass("active");
                $('#mobile-login #otp').addClass("invalid");
                $('#mobile-login #login-otp-cross').css("display", "block");
            }
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            if (response) {
                $('#otpMobKey').val(response.otpKey);
                if (response.success === true) {
                    $("#moblogin").css("pointer-events", "none");
                    $('#mobile-login #login-mob-err').hide();
                    $('#mob-otp-section #loginMobOtpMsg').css("display", "block");
                    $('#mob-otp-section #otp-msz').html(response.message.replace(/_/g, " "));

                    resendOTPCountMob = resendOTPCountMob + 1;
                }
                else {
                    if (response.errorCode === 512) {
                        location.href = location.origin + '/creditcards/app/user/login?endSessionMob=true';
                    } else if (response.errorCode === 507 || response.errorCode === 1010) {
                        $("#mob-otp-section .resend-otp").css("cursor", "not-allowed");
                        $(".resend-otp #login-mob-resend-otp").css("pointer-events", "none");
                        $(".resend-otp #login-mob-resend-otp").css("color", "gray");
                        resendOTPCountMob = resendOTPCountMob + 1;
                    }
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(response.message.replace(/_/g, " "));
                    $("#login-mob-submit").addClass('add-disable');
                    $("#login-mob-submit .blue-btn").addClass('disable-btn');
                    $('.view-mobile-login #otp').attr('disabled', true);
                }
            }
        },
        error: function () {
            $("body").find("div.overlay-loader").remove();
        }
    });
}

function checkUserLoginBtn(type) {
    if (type === 'userid' || type === 'captcha') {
        var userid = $("#user-login #user_id").val();
        if ($('#user-login #captcha_input').is(':visible')) {
            var captcha = $("#user-login #captcha_input").val();
            if (userid && captcha) {
                $("#userid-login-proceed-button-section").removeClass('add-disable');
                $("#userid-login-proceed-button-section .blue-btn").removeClass('disable-btn');
                removeCaptchaError('userlogin');
            }
            else {
                $("#userid-login-proceed-button-section").addClass('add-disable');
                $("#userid-login-proceed-button-section .blue-btn").addClass('disable-btn');
            }
        } else {
            if (userid) {
                $("#userid-login-proceed-button-section").removeClass('add-disable');
                $("#userid-login-proceed-button-section .blue-btn").removeClass('disable-btn');
            }
            else {
                $("#userid-login-proceed-button-section").addClass('add-disable');
                $("#userid-login-proceed-button-section .blue-btn").addClass('disable-btn');
            }
        }
    }
    else if (type === 'password') {
        var password = $("#user-login #password").val();
        if (password && $("#auth_img_txt_user_id").is(":checked")) {
            $("#userid-generate-otp-button-section").removeClass('add-disable');
            $("#userid-generate-otp-button-section .blue-btn").removeClass('disable-btn');

        } else if (password && !$('#user-login #auth_img_txt_user_id').is(':visible')) {
            $("#userid-generate-otp-button-section").removeClass('add-disable');
            $("#userid-generate-otp-button-section .blue-btn").removeClass('disable-btn');
        }
        else {
            $("#userid-generate-otp-button-section").addClass('add-disable');
            $("#userid-generate-otp-button-section .blue-btn").addClass('disable-btn');
        }
    } else if (type === 'otp') {
        var otp = $("#user-login #userid-otp").val();
        if (otp && otp.length == 6) {
            $("#loginUserSubmitBtn").removeClass('add-disable');
            $("#loginUserSubmitBtn .blue-btn").removeClass('disable-btn');
        } else {
            $("#loginUserSubmitBtn").addClass('add-disable');
            $("#loginUserSubmitBtn .blue-btn").addClass('disable-btn');
        }

    }
}

function checkCardLoginBtn(type) {
    if (type === 'captcha' || type === 'cardNumber') {
        var card_number = $('#card-login #card_no').val().replace(/-/g, "");
        if ($('#card-login #card_captcha_input').is(':visible')) {
            var captchEnter = $('#card-login #card_captcha_input').val();
            if (captchEnter && (card_number.length == 16 || card_number.length == 15) && $('#card-login #card_no').hasClass('valid')) {
                $("#card-login-proceed-button-section").removeClass('add-disable');
                $("#card-login-proceed-button-section .blue-btn").removeClass('disable-btn');
                removeCaptchaError('cardlogin');
            } else {
                $("#card-login-proceed-button-section").addClass('add-disable');
                $("#card-login-proceed-button-section .blue-btn").addClass('disable-btn');
            }
        } else {
            if ($('#card-login #card_no').hasClass('valid') && (card_number.length == 16 || (card_number.length == 15 && card_number[0] == '3' && card_number[1] == '7'))) {
                $("#card-login-proceed-button-section").removeClass('add-disable');
                $("#card-login-proceed-button-section .blue-btn").removeClass('disable-btn');
            }
            else {
                $("#card-login-proceed-button-section").addClass('add-disable');
                $("#card-login-proceed-button-section .blue-btn").addClass('disable-btn');
            }
        }
    }
    else if (type === 'dob') {
        var dob = $("#card-login #card-dob").val();
        if (dob) {
            $("#loginCardSubmitBtn").removeClass('add-disable');
            $("#loginCardSubmitBtn .blue-btn").removeClass('disable-btn');
        } else {
            $("#loginCardSubmitBtn").addClass('add-disable');
            $("#loginCardSubmitBtn .blue-btn").addClass('disable-btn');
        }
    }
    else if (type === 'otp') {
        var dob = $("#card-login #card-dob").val();
        var cardOtp = $("#card-login #card-otp").val();
        if (dob && cardOtp.length === 6) {
            $("#login-card-submit").removeClass('add-disable');
            $("#login-card-submit .blue-btn").removeClass('disable-btn');
        } else {
            $("#login-card-submit").addClass('add-disable');
            $("#login-card-submit .blue-btn").addClass('disable-btn');
        }
    }

}

function checkMobileLoginBtn(type) {   // checks the mobile validation and enables button

    var mobileNumber = $("#moblogin").val();
    mobileNumber = mobileNumber.substring(mobileNumber.lastIndexOf('-') + 1).trim();

    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (format.test(mobileNumber)) {
        $("#moblogin").val('');
        $("#moblogin").val('+91-');
    } else {
        if (type === 'mobile' || type === 'captcha') {
            if (mobileNumber.length > 9 && mobileNumber.match(/^[6-9][0-9]+/)) {
                $('#mobile-login #login-mob-err').html('');
                $('#mobile-login #login-mob-err').hide();
                $("#mobile-login #moblogin").addClass('valid');
                $("#mobile-login #moblogin").removeClass('invalid');
                $("#mobile-login #login-mob-cross").css("display", "none");

                if ($("#mobile-login #mobile_captcha_input").is(':visible')) {
                    var captcha = $("#mobile-login #mobile_captcha_input").val();
                    if (captcha) {
                        $("#proceedMobLoginBtn").removeClass('add-disable');
                        $("#proceedMobLoginBtn .blue-btn").removeClass('disable-btn');
                        removeCaptchaError('mobilelogin');
                    } else {
                        $("#proceedMobLoginBtn").addClass('add-disable');
                        $("#proceedMobLoginBtn .blue-btn").addClass('disable-btn');
                    }
                }
                else {  // when captcha is not visible
                    $("#proceedMobLoginBtn").removeClass('add-disable');
                    $("#proceedMobLoginBtn .blue-btn").removeClass('disable-btn');
                }
            } else if (mobileNumber.length > 9 && !(mobileNumber.match(/^[6-9][0-9]+/))) {
                $('#mobile-login #login-mob-err').html('Incorrect mobile number!');
                $('#mobile-login #login-mob-err').show();
                $("#mobile-login #moblogin").removeClass('valid');
                $("#mobile-login #moblogin").addClass('invalid');
                $("#mobile-login #login-mob-cross").css("display", "block");
                $("#proceedMobLoginBtn").addClass('add-disable');
                $("#proceedMobLoginBtn .blue-btn").addClass('disable-btn');
            } else if (mobileNumber.length <= 9) {
                $('#mobile-login #login-mob-err').html('');
                $('#mobile-login #login-mob-err').hide();
                $("#mobile-login #login-mob-cross").css("display", "block");
                $("#mobile-login #moblogin").removeClass('valid');
                $("#mobile-login #moblogin").removeClass('invalid');
                $("#proceedMobLoginBtn").addClass('add-disable');
                $("#proceedMobLoginBtn .blue-btn").addClass('disable-btn');
            }
        }
        else if (type === 'primaryCard') {
            var primaryCard = $("#mob-multi-section #mob-primaryCard").val();
            if (primaryCard.length === 4) {
                $("#proceedMultiAccountMobLoginBtn").removeClass('add-disable');
                $("#proceedMultiAccountMobLoginBtn .blue-btn").removeClass('disable-btn');
            } else {
                $("#proceedMultiAccountMobLoginBtn").addClass('add-disable');
                $("#proceedMultiAccountMobLoginBtn .blue-btn").addClass('disable-btn');
            }
        }
        else if (type === 'pin') {
            var pin = $("#mobile-login #pin").val();
            if (pin.length === 4) {
                if ($('#mobileSelectImageId').is(':visible')) {
                    if (document.getElementById('auth_img_txt_mobile').checked) {
                        $("#generate-otp-multi-mobile").removeClass('add-disable');
                        $("#generate-otp-multi-mobile .blue-btn").removeClass('disable-btn');
                    }
                }
                else {
                    $("#generate-otp-multi-mobile").removeClass('add-disable');
                    $("#generate-otp-multi-mobile .blue-btn").removeClass('disable-btn');
                }
            } else {
                $("#generate-otp-multi-mobile").addClass('add-disable');
                $("#generate-otp-multi-mobile .blue-btn").addClass('disable-btn');
            }
        }
        else if (type === 'otp') {
            var otp = $("#mob-otp-section #otp").val();
            if (otp.length === 6) {
                $("#login-mob-submit").removeClass('add-disable');
                $("#login-mob-submit .blue-btn").removeClass('disable-btn');
            } else {
                $("#login-mob-submit").addClass('add-disable');
                $("#login-mob-submit .blue-btn").addClass('disable-btn');
            }
        }
    }
}



function cardSubValidity() {
    if ($('#card-login #card_no').hasClass('valid') && $('#card-login #card-dob').hasClass('valid')) {
        $("#loginCardSubmitBtn").removeClass('add-disable');
        $("#loginCardSubmitBtn .blue-btn").removeClass('disable-btn');
    } else {
        if (!($("#loginCardSubmitBtn").hasClass('add-disable') && $("#loginCardSubmitBtn .blue-btn").hasClass('disable-btn'))) {
            $("#loginCardSubmitBtn").addClass('add-disable');
            $("#loginCardSubmitBtn .blue-btn").addClass('disable-btn');
        }
    }
}

function formatNonAmexWhileDeleteLogin(cardNumberIP) {
    var formatSpd = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (cardNumberIP.length == 4) {
        cardNumberIP = cardNumberIP.slice(0, 3);  // remove dash and number
        $('#card-login #card_no').val(cardNumberIP);
    } else if (cardNumberIP.length == 9 && formatSpd.test(cardNumberIP)) {
        cardNumberIP = cardNumberIP.slice(0, 8);  // remove dash and number
        $('#card-login #card_no').val(cardNumberIP);
    } else if (cardNumberIP.length == 14 && formatSpd.test(cardNumberIP)) {
        cardNumberIP = cardNumberIP.slice(0, 13);  // remove dash and number
        $('#card-login #card_no').val(cardNumberIP);
    }
}


function formatAmexWhileDeleteLogin(cardNumberIP) {
    var formatSpd = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (cardNumberIP.length == 4) {
        cardNumberIP = cardNumberIP.slice(0, 3);  // remove dash and number
        $('#card-login #card_no').val(cardNumberIP);
    } else if (cardNumberIP.length == 11 && formatSpd.test(cardNumberIP)) {
        cardNumberIP = cardNumberIP.slice(0, 10);  // remove dash and number
        $('#card-login #card_no').val(cardNumberIP);
    }
}


function formatAndVerifyNonAmexLogin(cardNumberIP) {
    var formatSpd = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (cardNumberIP.length < 20) {
        if (cardNumberIP.length == 4 || ((cardNumberIP.length == 9 || cardNumberIP.length == 14) && formatSpd.test(cardNumberIP))) {
            cardNumberIP += "-";
            $('#card-login #card_no').val(cardNumberIP);  // append dash
        }
        if (cardNumberIP.length == 19) {
            cardNumberIP = cardNumberIP.slice(0, 19);  // stop
            $('#card-login #card_no').val(cardNumberIP);
            validateLoginCardNumbers(cardNumberIP, false);  // validate card numbers to each section
        }
    } else if (cardNumberIP.length > 19) {
        cardNumberIP = cardNumberIP.slice(0, 19);  // stop
        $('#card-login #card_no').val(cardNumberIP);  // stop
    }
}


function formatAndVerifyAmexLogin(cardNumberIP) {
    var formatSpd = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (cardNumberIP.length < 18) {
        if (cardNumberIP.length == 4 || (cardNumberIP.length == 11 && formatSpd.test(cardNumberIP))) {
            cardNumberIP += "-";
            $('#card-login #card_no').val(cardNumberIP);
        }
        if (cardNumberIP.length == 17) {
            cardNumberIP = cardNumberIP.slice(0, 17);  // stop
            $('#card-login #card_no').val(cardNumberIP);
            validateLoginCardNumbers(cardNumberIP, true);   // assign card numbers to each section
        }
    } else if (cardNumberIP.length > 17) {
        cardNumberIP = cardNumberIP.slice(0, 17);
        $('#card-login #card_no').val(cardNumberIP);  // stop
    }
}


function validateLoginCardNumbers(cardNumberIP, isAmex) {
    cardNumberIP = cardNumberIP.trim();
    if (!isAmex) {
        var cardNumber1 = cardNumberIP.slice(0, 4);
        var cardNumber2 = cardNumberIP.slice(5, 9);
        var cardNumber3 = cardNumberIP.slice(10, 14);
        var cardNumber4 = cardNumberIP.slice(15, 19);
        $("#cvv-number").focus();   // set focus to CVV

        $('.login-section #card-number-1').val(cardNumber1);
        $('.login-section #card-number-2').val(cardNumber2);
        $('.login-section #card-number-3').val(cardNumber3);
        $('.login-section #card-number-4').val(cardNumber4);

        var cnum = cardNumber1.concat(cardNumber2, cardNumber3, cardNumber4);
        var isValid = creditCardValidateMicro(cnum);

        if (isValid) {
            setLoginCardStyleValid();  // set valid icon
        } else {
            setLoginCardStyleError();   // set invalid icon
        }
    } else {
        var cardNumber1 = cardNumberIP.slice(0, 4);
        var cardNumber2 = cardNumberIP.slice(5, 11);
        var cardNumber3 = cardNumberIP.slice(12, 17);
        var cardNumber4 = '';
        $("#cvv-number").focus();   // set focus to CVV

        $('.validate-form #card-number-1').val(cardNumber1);
        $('.validate-form #card-number-2').val(cardNumber2);
        $('.validate-form #card-number-3').val(cardNumber3);
        $('.validate-form #card-number-4').val(cardNumber4);

        var cnum = cardNumber1.concat(cardNumber2, cardNumber3);
        var isValid = creditCardValidateMicro(cnum);

        if (isValid) {
            setLoginCardStyleValid();  // set valid icon
        } else {
            setLoginCardStyleError();   // set invalid icon
        }
    }
}


function setLoginCardStyleError() {
    resetLoginCardFieldStyle();  // first reset everything

    $('#card-login #card_no').addClass('invalid');  	// set error to input field
    $('#card-login #login-card-cross').css("display", "block");
    $('#card-login #login-card-err').css("display", "block");
    $('#card-login #login-card-err').html('Invalid card number!');

    checkCardLoginBtn('cardNumber');
}


function setLoginCardStyleValid() {
    resetLoginCardFieldStyle();   // first reset everything

    $('#card-login #card_no').addClass('valid');      // set valid to input field
    $('#card-login #login-card-cross').css("display", "none");
    $('#card-login #login-card-err').css("display", "none");
    $('#card-login #login-card-err').html('');
    checkCardLoginBtn('cardNumber');
}


function resetLoginCardFieldStyle() {
    if ($('#card-login #card_no').hasClass("invalid")) {    // reset input
        $('#card-login #card_no').removeClass('invalid');
    }

    if ($('#card-login #card_no').hasClass("valid")) {    // reset input
        $('#card-login #card_no').removeClass('valid');
    }
}


var creditCardValidateMicro = window.creditCardValidateMicro = function (value) {
    if (/[^0-9 \-]+/.test(value)) {
        return false;
    }
    var nCheck = 0, nDigit = 0, bEven = false, n, cDigit;

    value = value.replace(/\D/g, "");
    if (value.length < 13 || value.length > 19) {
        return false;
    }

    for (n = value.length - 1; n >= 0; n--) {
        cDigit = value.charAt(n);
        nDigit = parseInt(cDigit, 10);
        if (bEven) {
            if ((nDigit *= 2) > 9) {
                nDigit -= 9;
            }
        }
        nCheck += nDigit;
        bEven = !bEven;
    }
    return (nCheck % 10) === 0;
};

function formatCardNum() {
    var cardNum = $("#card-login #card_no");
    value = cardNum.val();
    firstDigit = value.charAt(0);
    secondDigit = value.charAt(1);
    if (15 == value.length && (firstDigit == 3 && secondDigit == 7) && value.indexOf('-') == -1) {
        var cardNum1 = value.slice(0, 4),
            cardNum2 = value.slice(4, 10), cardNum3 = value.slice(10, 15),
            cardNum1 = cardNum1 + "-" + cardNum2 + "-" + cardNum3;
        cardNum.val(cardNum1);
    } else if (16 == value.length && value.indexOf('-') == -1) {
        var cardNum1 = value.slice(0, 4),
            cardNum2 = value.slice(4, 8),
            cardNum3 = value.slice(8, 12),
            cardNum4 = value.slice(12, 16),
            cardNum1 = cardNum1 + "-" + cardNum2 + "-" + cardNum3 + "-" + cardNum4;
        cardNum.val(cardNum1);
    }
}
function formatCardNumber(cardNumberValue) {
    var cardNum = $("#card-login #card_no");
    value = cardNumberValue;
    firstDigit = value.charAt(0);
    secondDigit = value.charAt(1);
    if (15 == value.length && (firstDigit == 3 && secondDigit == 7) && value.indexOf('-') == -1) {
        var cardNum1 = value.slice(0, 4),
            cardNum2 = value.slice(4, 10), cardNum3 = value.slice(10, 15),
            cardNum1 = cardNum1 + "-" + cardNum2 + "-" + cardNum3;
        cardNum.val(cardNum1);
    } else if (16 == value.length && value.indexOf('-') == -1) {
        var cardNum1 = value.slice(0, 4),
            cardNum2 = value.slice(4, 8),
            cardNum3 = value.slice(8, 12),
            cardNum4 = value.slice(12, 16),
            cardNum1 = cardNum1 + "-" + cardNum2 + "-" + cardNum3 + "-" + cardNum4;
        cardNum.val(cardNum1);
    }
}
function deformatCardNum(cardNum) {
    var cardNumValue = "";
    if (cardNum.length == 19) {
        cardNum1 = cardNum.slice(0, 4);
        cardNum2 = cardNum.slice(5, 9);
        cardNum3 = cardNum.slice(10, 14);
        cardNum4 = cardNum.slice(15, 19);
        cardNumValue = cardNum1 + cardNum2 + cardNum3 + cardNum4;
    } else if (cardNum.length == 17) {
        cardNum1 = cardNum.slice(0, 4),
            cardNum2 = cardNum.slice(5, 11),
            cardNum3 = cardNum.slice(12, 17),
            cardNumValue = cardNum1 + cardNum2 + cardNum3;
    } else {
        cardNumValue = cardNum;
    }
    return cardNumValue;
}
function removeErrorcardNum() {
    $('#card-login #login-card-err').css("display", "none");
    $('#card-login #login-card-cross').css("display", "none");
    var cardNumberIP = ($('#card-login #card_no').val()).trim();
    var firstDigit = cardNumberIP.charAt(0);
    var secondDigit = cardNumberIP.charAt(1);
    var len = cardNumberIP.length;
}
function validateCardNumbersNew(cardNumberIP) {
    cardNumberIP = cardNumberIP.trim();
    var cardNumber = "";
    cardNumber = deformatCardNum(cardNumberIP);
    var firstDigit = cardNumber.charAt(0);
    var secondDigit = cardNumber.charAt(1);
    var isValid = creditCardValidateRetail(cardNumber);
    if (!isValid && ((cardNumber.length > 0 && firstDigit == 3 && secondDigit == 7) || (cardNumber.length > 0))) {
        $('#card-login #login-card-err').css("display", "block");
        $('#card-login #login-card-err').html('Invalid card number!');
        $('#card-login #login-card-cross').css("display", "block");
        $('.view-card-login #card_no').addClass('invalid');
    } else if (isValid && ((cardNumber.length > 0 && firstDigit == 3 && secondDigit == 7) || (cardNumber.length > 0))) {
        $('#card-login #login-card-err').css("display", "none");
        $('#card-login #login-card-cross').css("display", "none");
        $('.view-card-login #card_no').removeClass('invalid');
    }
}
var creditCardValidateRetail = window.creditCardValidateRetail = function (value) {
    if (/[^0-9 \-]+/.test(value)) {
        return false;
    }
    var nCheck = 0, nDigit = 0, bEven = false, n, cDigit;

    value = value.replace(/\D/g, "");
    if (value.length < 13 || value.length > 19) {
        return false;
    }

    for (n = value.length - 1; n >= 0; n--) {
        cDigit = value.charAt(n);
        nDigit = parseInt(cDigit, 10);
        if (bEven) {
            if ((nDigit *= 2) > 9) {
                nDigit -= 9;
            }
        }
        nCheck += nDigit;
        bEven = !bEven;
    }
    return (nCheck % 10) === 0;
};
// changes for Card Details

var cardNumberIP_Prev = 0;
var isValidCard = false;
$('#card-login #card_no').on('keydown', function (e) {
    var kc = e.which || e.keyCode;
    if (kc == '189') {
        e.preventDefault();
        return;
    }
});

$("#mobile-login #moblogin").keydown(function (e) {
    var oldvalue = $(this).val();
    var field = this;
    setTimeout(function () {
        if (field.value.indexOf('+91-') !== 0) {
            $(field).val(oldvalue);
        }
    }, 1);
});

$("#card-login #login-card-label").on('click', function () {
    $(".input-field #login-card-label").addClass("active");
    $("#card-login #card_no").focus();
});

function encryptData(data) {
    var passphrase = $("#passphrase").val();
    if (passphrase) {
        var salt = CryptoJS.lib.WordArray.random(128 / 8);
        iv = CryptoJS.lib.WordArray.random(128 / 8),
            key = CryptoJS.PBKDF2(passphrase, salt, {
                keySize: 128 / 32,
                iterations: 100
            }),
            encryptedData = CryptoJS.AES.encrypt(data, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }),
            dataPassed = salt + iv + encryptedData
    } else {
        var dataPassed = data;
    }
    return dataPassed;
}

function decryptCardNumber(encryptedText) {
    var passphrase = $('#prePassphase').val();
    var salt = CryptoJS.enc.Hex.parse(encryptedText.substr(0, 32));
    var iv = CryptoJS.enc.Hex.parse(encryptedText.substr(32, 32))
    var encrypted = encryptedText.substring(64);



    var key = CryptoJS.PBKDF2(passphrase, salt, {
        keySize: 128 / 32,
        iterations: 100
    });
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    })
    //    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    var decryptedDataPassed = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedDataPassed;
}

//below function will call when user will click on first proceed button from mobile login mechanism..
function proceedMobLoginBtn(proceedMObURL) {     // called for gen OTP
    var mobileNumber = $(".view-mobile-login #moblogin").val();
    var captchaEntered = $(".view-mobile-login #mobile_captcha_input").val();
    mobileNumber = mobileNumber.substring(mobileNumber.lastIndexOf('-') + 1).trim();
    if ($('.view-mobile-login #moblogin').hasClass('invalid')) {
        $('.view-mobile-login #moblogin').addClass('invalid');
        $("#mobile-login #login-mob-cross").css("display", "block");
        return;
    }
    var passphrase = $("#passphrase").val();

    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('#login-submit-ajaxerror #login-ajaxerror').html('');
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");

    $('#mob-otp-section #loginMobOtpMsg').css("display", "none");

    mobPassed = encryptData(mobileNumber);
    if (captchaEntered != null && captchaEntered != '') {
        captchaPassed = encryptData(captchaEntered);
    } else {
        captchaPassed = null;
    }

    $.ajax({
        type: "POST",
        data: JSON.stringify({
            mobile: mobPassed,
            captcha: captchaPassed,
        }),
        url: proceedMObURL,
        contentType: "application/json; charset=utf-8",
        /*dataType: "json",*/
        headers: { 'passphrase': passphrase },
        beforeSend: function () {
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            if (response) {
                var pars_response = decryptResponse(response, passphrase); //decrypting the response
                //        	var pars_response = JSON.parse(response);
                if (pars_response.success === true) {
                    if (pars_response.genuineUser == true && pars_response.status_code == '501') {  //genuineUser with multi account case found
                        $("#mobile-login #moblogin").css("pointer-events", "none");
                        $('#mobile-login #moblogin').prop('readonly', !0);
                        $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
                        $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                        $('#mobile-login #login-mob-err').hide();
                        $('#mobile-login #mobile-login-captcha-section').css("display", "none");
                        $("#mob-multi-section").removeClass("hidden-mob-details");
                        $(".view-mobile-login #proceedMultiAccountMobLoginBtn").css("display", "block");
                    }
                    else if (pars_response.genuineUser == false && pars_response.status_code == '200') { // not genuineUser and not multi account
                        $("#moblogin").css("pointer-events", "none");
                        $('#mobile-login #moblogin').prop('readonly', !0);
                        $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
                        $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                        $('#mobile-login #login-mob-err').hide();

                        $('#mobile-login #mobile-login-captcha-section').css("display", "none");
                        $('#mobile-login #mobile-login-select-image-section').css("display", "block");
                        $('#mobile-login #mobileSelectImageId').attr('src', pars_response.userImageDetail.imageName);
                        $('#mobile-login #mobileSelectedImageText').text(pars_response.userImageDetail.passphrase);
                        $("#mobile-login #mobile-pin-section").css("display", "block");
                        $(".view-mobile-login #generate-otp-multi-mobile").css("display", "block");
                    }
                    else if (pars_response.genuineUser == true && pars_response.status_code == '200') { // single account with genuine User
                        $("#moblogin").css("pointer-events", "none");
                        $('#mobile-login #moblogin').prop('readonly', !0);
                        $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
                        $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                        $('#mobile-login #login-mob-err').hide();

                        $('#mobile-login #mobile-login-captcha-section').css("display", "none");
                        if (pars_response.imageRegistered === true) {
                            $('#mobile-login #mobile-login-select-image-section').css("display", "block");
                            $('#mobile-login #mobileSelectImageId').attr('src', pars_response.userImageDetail.imageName);
                            $('#mobile-login #mobileSelectedImageText').text(pars_response.userImageDetail.passphrase);
                        }
                        $("#mobile-login #mobile-pin-section").css("display", "block");
                        $(".view-mobile-login #generate-otp-multi-mobile").css("display", "block");
                    }
                    else if (pars_response.captchaRequired != undefined) {
                        refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                        $('#mobileloginCaptchaFlag').val(pars_response.captchaRequired);
                        $('#mobile-login #mobile_captcha_input').val("");
                        $('#mobile-login #mobile_captcha_input').removeClass('valid');
                        $('#mobile-login #mobile-login-captcha-section').css("display", "block");
                        $('#mobile-login #mobile-login-captcha-cross').css("display", "none");
                        $('#mobile-login #mobile_captcha_code_error').css("display", "none");
                        $('#mobile-login #login-mobile-captcha-label').removeClass('active');
                        $('#mobile-login #mobile-login-captcha-section').removeClass('captch-error');

                        $("#moblogin").css("pointer-events", "none");
                        $('#mobile-login #moblogin').prop('readonly', !0);
                        $("#proceedMobLoginBtn").addClass('add-disable');
                        $("#proceedMobLoginBtn .blue-btn").addClass('disable-btn');
                    }

                }
                // when user entered incorrect mobile number.
                else if (pars_response.status_code === '503') {
                    $("#moblogin").css("pointer-events", "none");
                    $('#mobile-login #moblogin').prop('readonly', !0);
                    $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
                    $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                    $('#mobile-login #login-mob-err').hide();

                    $('#mobile-login #mobile-login-captcha-section').css("display", "none");
                    $('#mobile-login #mobile-login-select-image-section').css("display", "block");
                    $('#mobile-login #mobileSelectImageId').attr('src', pars_response.userImageDetail.imageName);
                    $('#mobile-login #mobileSelectedImageText').text(pars_response.userImageDetail.passphrase);
                    $("#mobile-login #mobile-pin-section").css("display", "block");
                    $(".view-mobile-login #generate-otp-multi-mobile").css("display", "block");
                }
                else if (pars_response.status_code === '999') { // Captcha validation failed
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'showCaptchaError');
                    captchaError('mobilelogin');
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");

                }
                else if (pars_response.status_code === '560') { // mobile mapped with different organisation
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                else if (pars_response.status_code === '512') {
                    location.href = location.origin + '/creditcards/app/user/login?endSessionMob=true';
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                }
                else if (pars_response.status_code === '008') {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                else {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
            }
        },
        error: function () {
            $("body").find("div.overlay-loader").remove();
        }
    });
}

// below function will call when login through mobile number for multi card case.
function proceedMultiAccountMobLoginBtn(proceedMObURL) {
    var mobileNumber = $("#mobile-login #moblogin").val();
    var cardLastFourDigits = $("#mobile-login #mob-primaryCard").val();
    mobileNumber = mobileNumber.substring(mobileNumber.lastIndexOf('-') + 1).trim();
    var passphrase = $("#passphrase").val();

    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('#login-submit-ajaxerror #login-ajaxerror').html('');
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");

    $('#mob-otp-section #loginMobOtpMsg').css("display", "none");

    mobPassed = encryptData(mobileNumber);
    cardLastFourDigitsPassed = encryptData(cardLastFourDigits);

    $.ajax({
        type: "POST",
        data: JSON.stringify({
            mobile: mobPassed,
            cardLastFourDigits: cardLastFourDigitsPassed,
        }),
        url: proceedMObURL,
        contentType: "application/json; charset=utf-8",
        /*dataType: "json",*/
        headers: { 'passphrase': passphrase },
        beforeSend: function () {
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            if (response) {
                var pars_response = decryptResponse(response, passphrase); //decrypting the response
                //	        	var pars_response = JSON.parse(response);
                if (pars_response.success === true) {
                    //	        	$("#otpMobKey").val(pars_response.otpKey);

                    if (pars_response.genuineUser == true && pars_response.status_code == '200') { // single account with genuine User
                        $("#mobile-login #moblogin").css("pointer-events", "none");
                        $('#mobile-login #moblogin').prop('readonly', !0);
                        $("#mobile-login #mob-primaryCard").css("pointer-events", "none");
                        $('#mobile-login #mob-primaryCard').prop('readonly', !0);
                        $("#mob-multi-section").removeClass("hidden-mob-details");
                        $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
                        $(".view-mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");
                        $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                        $('#mobile-login #login-mob-err').hide();

                        $('#mobile-login #mobile-login-captcha-section').css("display", "none");
                        if (pars_response.imageRegistered === true) {
                            $('#mobile-login #mobile-login-select-image-section').css("display", "block");
                            $('#mobile-login #mobileSelectImageId').attr('src', pars_response.userImageDetail.imageName);
                            $('#mobile-login #mobileSelectedImageText').text(pars_response.userImageDetail.passphrase);
                        }
                        $("#mobile-login #mobile-pin-section").css("display", "block");
                        $(".view-mobile-login #generate-otp-multi-mobile").css("display", "block");
                    }
                    else if (pars_response.genuineUser == true && pars_response.status_code == '501') {  //genuineUser with multi account case found
                        $("#moblogin").css("pointer-events", "none");
                        $('#mobile-login #moblogin').prop('readonly', !0);
                        $("#mobile-login #mob-primaryCard").css("pointer-events", "none");
                        $('#mobile-login #mob-primaryCard').prop('readonly', !0);
                        $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
                        $(".view-mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");
                        $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                        $('#mobile-login #login-mob-err').hide();
                        $("#mob-multi-section").removeClass("hidden-mob-details");

                        $('#mobile-login #mobile-login-captcha-section').css("display", "none");
                        if (pars_response.imageRegistered === true) {
                            $('#mobile-login #mobile-login-select-image-section').css("display", "block");
                            $('#mobile-login #mobileSelectImageId').attr('src', pars_response.userImageDetail.imageName);
                            $('#mobile-login #mobileSelectedImageText').text(pars_response.userImageDetail.passphrase);
                        }
                        $("#mobile-login #mobile-pin-section").css("display", "block");
                        $(".view-mobile-login #generate-otp-multi-mobile").css("display", "block");
                    }
                    else if (pars_response.genuineUser !== true && pars_response.status_code == '200') {
                        $("#moblogin").css("pointer-events", "none");
                        $('#mobile-login #moblogin').prop('readonly', !0);
                        $("#mobile-login #mob-primaryCard").css("pointer-events", "none");
                        $('#mobile-login #mob-primaryCard').prop('readonly', !0);
                        $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
                        $(".view-mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");
                        $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                        $('#mobile-login #login-mob-err').hide();

                        $('#mobile-login #mobile-login-captcha-section').css("display", "none");
                        $('#mobile-login #mobile-login-select-image-section').css("display", "block");
                        $('#mobile-login #mobileSelectImageId').attr('src', pars_response.userImageDetail.imageName);
                        $('#mobile-login #mobileSelectedImageText').text(pars_response.userImageDetail.passphrase);
                        $("#mobile-login #mobile-pin-section").css("display", "block");
                        $(".view-mobile-login #generate-otp-multi-mobile").css("display", "block");
                    }
                }
                else if (pars_response.status_code == '503') {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                else if (pars_response.status_code === '512') {
                    location.href = location.origin + '/creditcards/app/user/login?endSessionMob=true';
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                }
                else if (pars_response.status_code === '008') {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                } else {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }

            }
        },
        error: function () {
            $("body").find("div.overlay-loader").remove();
        }
    });

}


// below function will call to generate mobile otp....
function generatedMobOtp() {
    var primaryCard = $("#mobile-login #mob-primaryCard").val();
    if (primaryCard) {
        generatedMultiAccountMobOtp('/creditcards/app/user/mobile-otp-gen-multicard');
    } else {
        generateSingleAccountMobOtp('/creditcards/app/user/proceed-mobile-validate');
    }
}

// below function will run for otp gen for single account user when try to login through mobile login mechanism.
function generateSingleAccountMobOtp(otpGenURL) {
    // called for gen OTP
    var mobileNumber = $(".view-mobile-login #moblogin").val();
    var pin = $(".view-mobile-login #pin").val();
    mobileNumber = mobileNumber.substring(mobileNumber.lastIndexOf('-') + 1).trim();
    var passphrase = $("#passphrase").val();

    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");

    $('#mob-otp-section #loginMobOtpMsg').css("display", "none");
    $('#loginMobOtpMsg #otp-gen-msz').html('');

    mobPassed = encryptData(mobileNumber);
    pinPassed = encryptData(pin);
    $('#mobile-login #pin').blur();

    $.ajax({
        type: "POST",
        data: JSON.stringify({
            mobile: mobPassed,
            cardPin: pinPassed
        }),
        url: otpGenURL,
        contentType: "application/json; charset=utf-8",
        /* dataType: "json", */
        headers: { 'passphrase': passphrase },
        beforeSend: function () {
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            if (response) {
                response = decryptResponse(response, passphrase); // new line decrypting the response
                if (response.success === true) {
                    $("#otpMobKey").val(response.otpKey);
                    if (response.errorCode === 201) {
                        $("#mobile-login #moblogin").css("pointer-events", "none");
                        $("#mobile-login #pin").css("pointer-events", "none");
                        $('#mobile-login #moblogin').prop('readonly', !0);
                        $('#mobile-login #pin').prop('readonly', !0);
                        $('#mobile-login #pin').addClass('valid');
                        $("#mobile-login #proceedMobLoginBtn").css("display", "none");
                        $("#mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");
                        $("#mobile-login #generate-otp-multi-mobile").css("display", "none");
                        $("#mobile-login #mobile-login-select-image-section").css("display", "none");
                        $("#mobile-login #mobileVirtualKeyboardTillGenOTP").css("display", "none");
                        $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                        $(".view-mobile-login #mob-otp-section").css("display", "block");
                        $('#mobile-login #login-mob-err').hide();
                        $('#mob-otp-section #loginMobOtpMsg').css("display", "block");
                        $('#mob-otp-section #otp-msz').html(response.message.replace(/_/g, " "));
                    }
                    else if (response.errorCode === 501) { //this error code is for multi account
                        $("#moblogin").css("pointer-events", "none");
                        $("#pin").css("pointer-events", "none");
                        $('#mobile-login #moblogin').prop('readonly', !0);
                        $('#mobile-login #pin').prop('readonly', !0);
                        $(".view-mobile-login #genOtpBtnPort").css("display", "none");
                        $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                        $('#mobile-login #login-mob-err').hide();
                        $("#mob-multi-section").removeClass("hidden-mob-details");
                    }
                } else if (response.errorCode === 509) { // this error code is for tata.
                    $("#mobile-login #moblogin").css("pointer-events", "none");
                    $("#mobile-login #pin").css("pointer-events", "none");
                    $('#mobile-login #moblogin').prop('readonly', !0);
                    $('#mobile-login #pin').prop('readonly', !0);
                    $('#mobile-login #pin').addClass('valid');
                    $("#mobile-login #proceedMobLoginBtn").css("display", "none");
                    $("#mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");
                    $("#mobile-login #generate-otp-multi-mobile").css("display", "none");
                    $("#mobile-login #mobile-login-select-image-section").css("display", "none");
                    $("#mobile-login #mobileVirtualKeyboardTillGenOTP").css("display", "none");
                    $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                    $(".view-mobile-login #mob-otp-section").css("display", "block");
                    $('#mobile-login #login-mob-err').hide();
                    $('#mob-otp-section #loginMobOtpMsg').css("display", "block");
                    $('#mob-otp-section #otp-msz').html(response.message.replace(/_/g, " "));
                }
                // When user try with incorrect mobile number redirecting to first screen with valid error
                else if (response.errorCode === 502) {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                else if (response.errorCode === 512) {
                    location.href = location.origin + '/creditcards/app/user/login?endSessionMob=true';
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                }
                else { // Any error arise....
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
            }
        },
        error: function () {
            $("body").find("div.overlay-loader").remove();
            //	      $('#mobile-login #loginMobOtpGenMsg').css("display", "block");
            //	      $('#loginMobOtpGenMsg #otp-gen-msz').html('Generate OTP Failed');
        }
    });
}


// added otpMobKey for international otp project Kushal Sinha
// below function will run for otp gen for multi account user when try to login through mobile login mechanism.
function generatedMultiAccountMobOtp(otpGenMobURL) {
    var mobileNumber = $(".view-mobile-login #moblogin").val();
    var pin = $(".view-mobile-login #pin").val();
    mobileNumber = mobileNumber.substring(mobileNumber.lastIndexOf('-') + 1).trim();
    var primaryCard = $("#mob-primaryCard").val();
    //	var primaryCard = primaryCard != null ? primaryCard : null ;

    $('#login-submit-ajaxerror #login-ajaxerror').html('');
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('#login-submit-ajaxerror #login-ajaxerror').html('');
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");

    $('#mob-otp-section #loginMobOtpMsg').css("display", "none");

    mobPassed = encryptData(mobileNumber);
    pinPassed = encryptData(pin);
    cardPassed = encryptData(primaryCard);
    $('#mob-multi-section #mob-primaryCard').blur();
    var passphrase = $("#passphrase").val();

    $.ajax({
        type: "POST",
        data: JSON.stringify({
            mobile: mobPassed,
            cardLastFourDigits: cardPassed,
            cardPin: pinPassed
        }),
        url: otpGenMobURL,
        contentType: "application/json; charset=utf-8",
        /*dataType: "json", */
        headers: {
            passphrase: passphrase
        },
        beforeSend: function () {
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            if (response) {
                response = decryptResponse(response, passphrase); // new line decrypting the response
                if (response.success) {

                    $("#otpMobKey").val(response.otpKey);
                    $("#mobile-login #moblogin").css("pointer-events", "none");
                    $("#mobile-login #pin").css("pointer-events", "none");
                    $('#mobile-login #moblogin').prop('readonly', !0);
                    $('#mobile-login #pin').prop('readonly', !0);
                    $("#mobile-login #mob-primaryCard").css("pointer-events", "none");
                    $('#mobile-login #mob-primaryCard').prop('readonly', !0);
                    $('#mobile-login #pin').addClass('valid');
                    $("#mobile-login #mob-primaryCard").addClass('valid');
                    $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
                    $("#mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");
                    $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                    $("#mobile-login #generate-otp-multi-mobile").css("display", "none");
                    $("#mobile-login #mobile-login-captcha-section").css("display", "none");
                    $("#mobile-login #mobile-login-select-image-section").css("display", "none");
                    $("#mobile-login #mobileVirtualKeyboardTillGenOTP").css("display", "none");
                    $(".view-mobile-login #mob-otp-section").css("display", "block");
                    $('#mobile-login #login-mob-err').hide();

                    $('#mob-otp-section #loginMobOtpMsg').css("display", "block");
                    $('#mob-otp-section #otp-msz').html(response.message.replace(/_/g, " "));
                }
                else if (response.errorCode === 509) {
                    $("#moblogin").css("pointer-events", "none");
                    $('#mobile-login #moblogin').prop('readonly', !0);
                    $('#mobile-login #pin').prop('readonly', !0);
                    $("#mob-multi-section #mob-primaryCard").css("pointer-events", "none");
                    $('#mobile-login #mob-primaryCard').prop('readonly', !0);
                    $('#mobile-login #pin').addClass('valid');
                    $("#mobile-login #mob-primaryCard").addClass('valid');
                    $(".view-mobile-login #mob-otp-section").css("display", "block");
                    $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
                    $("#mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");
                    $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
                    $("#mobile-login #generate-otp-multi-mobile").css("display", "none");
                    $("#mobile-login #mobile-login-captcha-section").css("display", "none");
                    $("#mobile-login #mobile-login-select-image-section").css("display", "none");
                    $("#mobile-login #mobileVirtualKeyboardTillGenOTP").css("display", "none");
                    $("#generate-otp-multi-mobile").css("display", "none");

                    $('#mobile-login #login-mob-err').hide();
                    $('#mob-otp-section #loginMobOtpMsg').css("display", "block");
                    $('#mob-otp-section #otp-msz').html(response.message.replace(/_/g, " "));

                }
                // When user try with incorrect mobile number redirecting to first screen with valid error
                else if (response.errorCode === 502) {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                else if (response.errorCode === 512) {
                    location.href = location.origin + '/creditcards/app/user/login?endSessionMob=true';
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    resetMobileSection();
                }
                else {
                    resetMobileSection();
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'mobilelogin');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
            }
        },
        error: function () {
            $("body").find("div.overlay-loader").remove();
        }
    })
}

function loginFormMobSubmit() {
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    sessionStorage.setItem("ifSubmitted", "true");
    checkLoginType();
    $("#moblogin").css("pointer-events", "auto");
    $("#mob-primaryCard").css("pointer-events", "auto");
    var otpValue = $("#mob-otp-section #otp").val()
        , pin = $("#mobile-login #pin").val()
        , passphrase = $("#passphrase").val()
        , primaryCard = $("#mob-multi-section #mob-primaryCard").val()
        , mobile = $("#mobile-login #moblogin").val();
    otpKey = $("#mobile-login #otpMobKey").val();
    mobile = mobile.substring(mobile.lastIndexOf('-') + 1).trim();
    if ($('#mob-multi-section').hasClass('hidden-mob-details')) {
        if (pin && otpValue) {
            $("body").append(loaderHtml);
            otpPassed = encryptData(otpValue);
            pinPassed = encryptData(pin);
            mobPassed = encryptData(mobile);
            otpKeyPassed = encryptData(otpKey);
            $("#mob-otp-section #otp").val(otpPassed),
                $("#mobile-login #pin").val(pinPassed),
                $("#mobile-login #moblogin").val(mobPassed),
                document.getElementById("login-page").submit(),
                $("#mob-otp-section #otp").val(otpValue),
                $("#mobile-login #pin").val(pin),
                $("#mobile-login #moblogin").val(mobile)
            //            console.log('Encrypetd PIN::' + pinPassed);
            //            console.log('Encrypetd OTP::' + otpPassed);
        }
        else {
            //do nothing
        }
    }
    else if (!$('#mob-multi-section').hasClass('hidden-mob-details')) {
        if (primaryCard && otpValue && pin) {
            $("body").append(loaderHtml);
            cardPassed = encryptData(primaryCard);
            otpPassed = encryptData(otpValue);
            pinPassed = encryptData(pin);
            mobPassed = encryptData(mobile);
            $("#mob-multi-section #mob-primaryCard").val(cardPassed),
                $("#mob-otp-section #otp").val(otpPassed),
                $("#mobile-login #pin").val(pinPassed),
                $("#mobile-login #moblogin").val(mobPassed),
                document.getElementById("login-page").submit(),
                $("#mob-multi-section #mob-primaryCard").val(primaryCard),
                $("#mob-otp-section #otp").val(otpValue),
                $("#mobile-login #pin").val(pin),
                $("#mobile-login #moblogin").val(mobile)
            //            console.log('Encrypetd PrimaryCard No::' + cardPassed);
            //            console.log('Encrypetd PIN::' + pinPassed);
            //            console.log('Encrypetd OTP::' + otpPassed);
        }
        else {
            //do nothing
        }
    }
}
/* below function will be used for Card login proceed button click Manjeet Singh */
function proceedCardLogin(proceedUseridUrl) {

    $('#login-submit-ajaxerror #login-ajaxerror').html('');
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    cardNumber = $("#card-login #card_no").val();
    var entered_captcha = $("#card-login #card_captcha_input").val();
    if ($("#card-login #user_id").hasClass('invalid') && cardNumber == null && cardNumber == '') {
        $("#card-login #login-card-cross").css("display", "block");
        $('.view-card-login #card_no').addClass('invalid');
        return;
    }
    var passphrase = $("#passphrase").val();
    cardNumberPassed = encryptData(cardNumber);
    if (entered_captcha != null && entered_captcha != '') {
        cardCaptchaPassed = encryptData(entered_captcha);
    } else {
        cardCaptchaPassed = null;
    }
    $.ajax({
        type: "POST",
        data: JSON.stringify({  // we have to set variable name according to backed
            cardNumber: cardNumberPassed,
            captcha: cardCaptchaPassed
        }),
        url: proceedUseridUrl,
        contentType: "application/json; charset=utf-8",
        // dataType: "json",
        headers: { 'passphrase': passphrase },
        beforeSend: function () {
            var loaderHtml = '<div class="overlay-loader"></div>';
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            if (response) {
                var pars_response = decryptResponse(response, passphrase); //decrypting the response
                //	            	var pars_response = JSON.parse(response);
                if (pars_response.success === true) {
                    if (pars_response.genuineUser === true && pars_response.status_code === '200') {
                        $("#card-login #card_no").css("pointer-events", "none");
                        $('#card-login #card_no').prop('readonly', !0);
                        $('#card-login #card-login-captcha-cross').css("display", "none");
                        $('#card-login #card_captcha_code_error').css("display", "none");
                        $('#card-login #card-login-captcha-section').css("display", "none");
                        $(".view-card-login #card-login-proceed-button-section").css("display", "none");
                        // $('#user-login #userid-login-select-image-section').css("display", "block");
                        $(".view-card-login #loginCardSubmitBtn").css("display", "block");
                        if (pars_response.imageRegistered === true) {
                            $("#card-login #dummy-card-dob-section").css("display", "block");
                            $('#card-login #card-login-select-image-section').css("display", "block");
                            $('#card-login #cardSelectImageId').attr('src', pars_response.userImageDetail.imageName);
                            $('#card-login #cardSelectedImageText').text(pars_response.userImageDetail.passphrase);
                        } else {
                            $("#card-login #card-dob-section").css("display", "block");
                        }
                    }
                    else if (pars_response.genuineUser !== true && pars_response.status_code === '200') { // if
                        // success
                        $("#card-login #card_no").css("pointer-events", "none");
                        $('#card-login #card_no').prop('readonly', !0);
                        $('#card-login #card-login-captcha-cross').css("display", "none");
                        $('#card-login #card_captcha_code_error').css("display", "none");
                        $('#card-login #card-login-captcha-section').css("display", "none");
                        $(".view-card-login #card-login-proceed-button-section").css("display", "none");
                        //	                    $("#card-login #card-dob-section").css("display", "block");
                        $("#card-login #dummy-card-dob-section").css("display", "block");
                        $(".view-card-login #loginCardSubmitBtn").css("display", "block");
                        $('#card-login #card-login-select-image-section').css("display", "block");
                        $('#card-login #cardSelectImageId').attr('src', pars_response.userImageDetail.imageName);
                        $('#card-login #cardSelectedImageText').text(pars_response.userImageDetail.passphrase);
                    }
                    else if (pars_response.captchaRequired != undefined) {
                        refreshCaptcha('/creditcards/app/user/refresh-captcha', 'cardlogin');
                        $('#cardloginCaptchaFlag').val(pars_response.captchaRequired);
                        $('#card-login #card_captcha_input').val("");
                        $("#card-login #card_captcha_input").removeClass('valid');
                        $('#card-login #card-login-captcha-section').css("display", "block");
                        $('#card-login #card-login-captcha-cross').css("display", "none");
                        $('#card-login #card_captcha_code_error').css("display", "none");
                        $('#card-login #card-login-captcha-section').removeClass('captch-error');

                        $("#card-login #card_no").css("pointer-events", "none");
                        $('#card-login #card_no').prop('readonly', !0);
                        $("#card-login #card-login-proceed-button-section").addClass('add-disable');
                        $("#card-login #card-login-proceed-button-section .blue-btn").addClass('disable-btn');
                    }
                } else if (pars_response.status_code === '999') { // Captcha validation failed
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'showCaptchaError');
                    captchaError('cardlogin');
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                else if (pars_response.status_code === '512') {
                    location.href = location.origin + '/creditcards/app/user/login?endSession=true';
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'cardlogin');
                    resetCardSection();
                }
                else if (pars_response.status_code == '008') {
                    $('#card-login #login-card-label').removeClass('active');
                    $('.view-card-login #card_no').removeClass('valid');
                    $("#card-login #card_no").val('');
                    $('#card-login #login-card-captcha-label').removeClass('active');
                    $('.view-card-login #card_captcha_input').removeClass('valid');
                    $("#card-login #card_captcha_input").val('');
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'cardlogin');

                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                else { // any error raise expect error code 008
                    $('#card-login #login-card-label').removeClass('active');
                    $('.view-card-login #card_no').removeClass('valid');
                    $("#card-login #card_no").val('');
                    $('#card-login #login-card-captcha-label').removeClass('active');
                    $('.view-card-login #card_captcha_input').removeClass('valid');
                    $("#card-login #card_captcha_input").val('');
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'cardlogin');

                    $('#login-submit-ajaxerror').css("display", "block");
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow"); // Error
                    // text
                    // animate
                    // scroll
                    // top
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                }
            }
        },
        error: function () {
            // console.log(".OTP send Error.");
            $("body").find("div.overlay-loader").remove();
        }
    });
}

/*
 * Below function will call when generate OTP button will click in card login
 * section
 */
function genCardOtp(otpGenURL) {

    $('#login-submit-ajaxerror #login-ajaxerror').html('');
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    cardNum = $("#card-login #card_no").val();
    cardDob = $("#card-login #card-dob").val();
    if ($('#card-login #card_no').hasClass('invalid') || cardNum.length < 17) {
        $('.view-card-login #card_no').addClass('invalid');
        $("#card-login #login-card-cross").css("display", "block");
        return;
    }
    if ($('#card-login #card-dob').hasClass('invalid') && cardDob == null && cardDob == '') {
        $('.view-card-login #card-dob').addClass('invalid');
        $("#card-login #login-dob-cross").css("display", "block");
        return;
    }

    var passphrase = $("#passphrase").val();
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    $('#card-otp-section #loginCardOtpMsg').css("display", "none");

    cardNumPassed = encryptData(cardNum);
    if (passphrase) {
        var salt = CryptoJS.lib.WordArray.random(16)
            , iv = CryptoJS.lib.WordArray.random(16)
            , key = CryptoJS.PBKDF2(passphrase, salt, {
                keySize: 4,
                iterations: 100
            });
        encryptedDob = CryptoJS.AES.encrypt(cardDob, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }),
            cardDobPassed = salt + iv + encryptedDob
    }
    else {
        cardDobPassed = encryptData(cardDob);
    }
    $.ajax({
        type: "POST",
        data: JSON.stringify({
            cardNumber: cardNumPassed,
            dob: cardDobPassed
        }),
        url: otpGenURL,
        contentType: "application/json; charset=utf-8",
        /* dataType: "json", */
        headers: { 'passphrase': passphrase },
        beforeSend: function () {
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            if (response) {
                // console.log(".First OTP.");
                if (response.includes('ApiResponse')) {
                    if (response.includes('errorCode=512')) {
                        location.href = location.origin + '/creditcards/app/user/login?endSession=true';
                        refreshCaptcha('/creditcards/app/user/refresh-captcha', 'cardlogin');
                        resetCardSection();
                    }
                } else {
                    response = decryptResponse(response, passphrase);
                    if (response.success === true) {
                        if (response.otpKey) {
                            $("#cardOtpKey").val(response.otpKey);
                        }
                        if (response.errorCode === 201) {
                            $("#card_no").css("pointer-events", "none");
                            $('#card-login #card_no').prop('readonly', !0);
                            $('#card-login #card-dob').css("pointer-events", "none");
                            $('#card-login #card-dob').prop('readonly', !0);
                            $("#card-login #login-calendar").css("pointer-events", "none");
                            $('#card-login #card-login-select-image-section').css("display", "none");
                            $(".view-card-login #card-otp-section").css("display", "block");
                            $(".view-card-login #loginCardSubmitBtn").css("display", "none");
                            $('#card-login #login-card-err').hide();
                            $('#card-login #cardVirtualKeyboardTillGenOTP').css("display", "none");

                            $('#card-otp-section #loginCardOtpMsg').css("display", "block");
                            $('#card-otp-section #otp-msz').html(response.message.replace(/_/g, " "));
                        }
                    } else if (response.errorCode === 509) {
                        $("#card_no").css("pointer-events", "none");
                        $('#card-login #card_no').prop('readonly', !0);
                        $('#card-login #card-dob').css("pointer-events", "none");
                        $('#card-login #card-dob').prop('readonly', !0);
                        $("#card-login #login-calendar").css("pointer-events", "none");
                        $('#card-login #card-login-select-image-section').css("display", "none");
                        $(".view-card-login #card-otp-section").css("display", "block");
                        $(".view-card-login #loginCardSubmitBtn").css("display", "none");
                        $('#card-login #login-card-err').hide();
                        $('#card-login #card-login-select-image-section').css("display", "none");
                        $('#card-login #cardVirtualKeyboardTillGenOTP').css("display", "none");

                        $('#card-otp-section #loginCardOtpMsg').css("display", "block");
                        $('#card-otp-section #otp-msz').html(response.message.replace(/_/g, " "));
                    }
                    else if (response.errorCode === 512) {
                        location.href = location.origin + '/creditcards/app/user/login?endSession=true';
                        refreshCaptcha('/creditcards/app/user/refresh-captcha', 'cardlogin');
                        resetCardSection();
                    }
                    else {
                        refreshCaptcha('/creditcards/app/user/refresh-captcha', 'cardlogin');
                        resetCardSection();
                        $('#login-submit-ajaxerror').css("display", "block");
                        $('#login-submit-ajaxerror #login-ajaxerror').html(response.message.replace(/_/g, " "));
                        $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                    }
                }
            }
        },
        error: function () {
            // console.log(".OTP send Error.");
            $("body").find("div.overlay-loader").remove();
        }
    });
}

var resendOTPCount = 0;

function resendOtpForCardLogin(otpGenURL) {
    if (resendOTPCount > 5) {
        return;
    }
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    cardNumVal = $("#card-login #card_no").val();
    cardDob = $("#card-login #card-dob").val();
    cardNum = deformatCardNum(cardNumVal);
    var passphrase = $("#passphrase").val();
    if (passphrase) {
        var salt = CryptoJS.lib.WordArray.random(128 / 8);
        iv = CryptoJS.lib.WordArray.random(128 / 8),
            key = CryptoJS.PBKDF2(passphrase, salt, {
                keySize: 128 / 32,
                iterations: 100
            }),
            encryptedCardNum = CryptoJS.AES.encrypt(cardNum, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }),
            cardNumPassed = salt + iv + encryptedCardNum
    } else {
        var cardNumPassed = cardNum;
    }
    if (passphrase) {
        var salt = CryptoJS.lib.WordArray.random(16)
            , iv = CryptoJS.lib.WordArray.random(16)
            , key = CryptoJS.PBKDF2(passphrase, salt, {
                keySize: 4,
                iterations: 100
            });
        encryptedDob = CryptoJS.AES.encrypt(cardDob, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }),
            cardDobPassed = salt + iv + encryptedDob
    }
    else {
        cardDobPassed = encryptData(cardDob);
    }

    $.ajax({
        type: "POST",
        data: JSON.stringify({
            cardNumber: cardNumPassed,
            dob: cardDobPassed
        }),
        url: otpGenURL,
        contentType: "application/json; charset=utf-8",
        /*dataType: "json",*/
        headers: {
            passphrase: passphrase
        },
        beforeSend: function () {
            $('#card-dob, #card-otp').removeClass('invalid');
            $('#card-login #login-dob-cross').css("display", "none");
            $('#card-login #login-card-otp-cross').css("display", "none");
            pressLoginCard = false;
            status_code = false;
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove()
        },
        success: function (response) {
            if (response) {

                // console.log(".Resend OTP.");
                response = decryptResponse(response, passphrase);
                //            	console.log(".Resend OTP." , response);
                if (response.success) {
                    $("#card_no").css("pointer-events", "none");
                    $(".view-card-login #card-otp-section").css("display", "block");
                    $(".view-card-login #loginCardSubmitBtn").css("display", "none");
                    $('#card-login #login-card-err').hide();
                    $('#card-otp-section #loginCardOtpMsg').css("display", "block");
                    $('#card-otp-section #otp-msz').html(response.message.replace(/_/g, " "));
                    resendOTPCount += 1;
                    /*console.log("resendOTPCount : " + resendOTPCount);*/

                } else {
                    if (response.errorCode === 512) {
                        location.href = location.origin + '/creditcards/app/user/login?endSession=true';
                        refreshCaptcha('/creditcards/app/user/refresh-captcha', 'cardlogin');
                        resetCardSection();
                    } else if (response.errorCode === 507 || response.errorCode === 1010) {
                        $("#card-otp-section .resend-otp-card").css("cursor", "not-allowed");
                        $(".resend-otp-card #login-card-resend-otp").css("pointer-events", "none");
                        $(".resend-otp-card #login-card-resend-otp").css("color", "gray");
                        resendOTPCount = resendOTPCount + 1;
                        /*console.log("resendOTPCount : " + resendOTPCount);*/
                    }
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(response.message.replace(/_/g, " "));
                    $("#login-card-submit").addClass('add-disable');
                    $("#login-card-submit .blue-btn").addClass('disable-btn');

                }
            }
        },
        error: function () {
            $("body").find("div.overlay-loader").remove();
        }
    })
}

function loginFormCardSubmit() {
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    sessionStorage.setItem("ifSubmitted", "true");
    checkLoginType();
    $("#card_no").css("pointer-events", "auto");
    // below one lines are newly added
    $('#card-dob').css("pointer-events", "auto");
    pressLoginCard = true;
    $("#card-otp-section #card-otp").focusout();
    $("#cardNum").prop("readonly", !0);
    // below one lines are newly added
    $('#card-dob').prop('readonly', !0);

    var otpValue = $("#card-otp-section #card-otp").val()
        , passphrase = $("#passphrase").val()
        , dob = $("#card-login #card-dob").val()
        , cardNum = $("#card_no").val();

    cardNumValue = deformatCardNum(cardNum);
    dob1 = dob.slice(0, 2);
    dob2 = dob.slice(3, 6);
    dob3 = dob.slice(7, 11);
    dobValue = dob1 + dob2 + dob3;

    if (otpValue && dob && otpValue.length == 6) {
        $("body").append(loaderHtml);
        //        otpPassed = encryptData(otpValue);
        //        dobPassed = encryptData(dob);
        //        cardPassed = encryptData(cardNum);
        if (passphrase) {
            var salt = CryptoJS.lib.WordArray.random(16)
                , iv = CryptoJS.lib.WordArray.random(16)
                , key = CryptoJS.PBKDF2(passphrase, salt, {
                    keySize: 4,
                    iterations: 100
                });
            encryptedCard = CryptoJS.AES.encrypt(cardNumValue, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }),
                cardPassed = salt + iv + encryptedCard,
                encryptedOtp = CryptoJS.AES.encrypt(otpValue, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }),
                otpPassed = salt + iv + encryptedOtp,
                encryptedDob = CryptoJS.AES.encrypt(dob, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }),
                dobPassed = salt + iv + encryptedDob
        }
        $("#card-login #card-otp").val(otpPassed),
            $("#card-login #card-dob").val(dobPassed),
            $("#card-login #card_no").val(cardPassed),
            document.getElementById("login-page").submit(),
            $("#card-login #card-otp").val(otpValue),
            $("#card-login #card-dob").val(dob),
            $("#card-login #card_no").val(cardNum)
    } else {
        // do nothing
    }
}
function passwordGen(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        var buf = new Uint8Array(1);
        result += characters.charAt(Math.floor(crypto.getRandomValues(buf) * charactersLength));
    }
    return result;
}


function checkAndLogin() {

    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    pressLogin = true;
    userid = $('#user-login #user_id').val();
    gibValue = passwordGen(75);
    password = $('#user-login #password').val();
    var otp = $('#user-login #userid-otp').val();
    var userOtpKey = $('#user-login #userOtpKey').val();
    if (!password) {
        $('#user-login #password').val(gibValue);
        password = $('#user-login #password').val()
    }
    if (!userid) {
        $('#user-login #user_id').addClass('invalid');
    }
    if (!otp) {
        $('#user-login #userid-otp').addClass('invalid');
        $('#user-login #login-userid-otp-cross').css("display", "block");
    }
    else {
        checkLoginType();
        $("body").append(loaderHtml);
        var passphrase = $("#passphrase").val();
        if (passphrase) {
            var salt = CryptoJS.lib.WordArray.random(128 / 8)
                , iv = CryptoJS.lib.WordArray.random(128 / 8)
                , key = CryptoJS.PBKDF2(passphrase, salt, { keySize: 128 / 32, iterations: 100 })
                , encryptedPassword = CryptoJS.AES.encrypt(password, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }),
                passwordPassed = salt + iv + encryptedPassword;

            otpPassed = encryptData(otp);
            otpKeyPassed = encryptData(userOtpKey);
        } else {
            var password = password;
        }
        $("#user-login #userOtpKey").val(otpKeyPassed);
        $("#user-login #userid-otp").val(otpPassed);
        $('#user-login #password').val(password);
        document.getElementById("login-page").submit();
        $("#user-login #userid-otp").val(otp);
    }

}

var status_code = "";
var dobotpFlag = false;
$(document).ready(function () {
    // hide and show the image above the footer in mobile view started
    var loginPaynetJourneyFlag = $('#loginPaynetJourneyFlag').val();
    if (loginPaynetJourneyFlag == true || loginPaynetJourneyFlag == 'true') {
        $('#ImageAboveFooterOnLoginPage').addClass('img-illustrator-mob-none-paynet');
    } else {
        $('#ImageAboveFooterOnLoginPage').removeClass('img-illustrator-mob-none-paynet');
    }

    var payneSbiCardFAQFlag = $('#payneSbiCardFAQFlag').val();
    if (payneSbiCardFAQFlag == 'false' || payneSbiCardFAQFlag == false) {
        // we are decreasing the width above the footer in Tata paynet login journey
        $('.login-page .ft-paynet-header').addClass('tata-ft-paynet-header');
    } else {
        $('.login-page .ft-paynet-header').removeClass('tata-ft-paynet-header');
    }
    // hide and show the image above the footer in mobile view ended

    // captcha update on page load start
    var captchaBase64String = $("#captchaSrcOnload").val();
    // for mobile/User/Card login
    $('#mobile-captcha-show-img, #user-captcha-show-img, #card-captcha-show-img').attr("src", "data:image/jpeg;base64," + captchaBase64String + "");

    status_code = $('#status_code').val();
    var fetch_mobNumber = $('#fetch_mobNumber').val();
    var fetch_primaryCardNumber = $('#fetch_primaryCardNumber').val();
    var fetch_cardNumber = $('#fetch-cardNumber').val();
    var fetch_cardDob = $('#fetch-card-dob').val();
    fetch_cardNumber = fetch_cardNumber ? decryptCardNumber(fetch_cardNumber) : "";
    $('#card-login #card-dob').val(fetch_cardDob);
    var loginStrategy = $('#loginStrategy').val();
    var mobileLoginStrategy = $('#mobileLoginStrategy').val();
    var passwordValue = $('#password_received').val();

    endSessionExistMob = window.location.href.indexOf('endSessionMob=true') > -1;
    endSessionExist = window.location.href.indexOf('endSession=true') > -1;

    if (endSessionExistMob || endSessionExist) {
        $('#login-submit-ajaxerror').css("display", "block");
        $('#login-submit-ajaxerror #login-ajaxerror').empty();
        $('#login-submit-ajaxerror #login-ajaxerror').append('Page was left idle for some time. Please try login again');
    }

    /*
     * reseting userid login section accorting to the condition below
     * Antiphishing project
     */
    if (passwordValue) {
        $("#user-login #password").val('');
        $("#user-login #encryped_password").val('');
        $("#user-login #encryped_password").val(encryptData(passwordValue));
        $('#user-login #password').val('XXXXXXXXXXXXXXXX');
        if (status_code == '110' || status_code == '102') {// if the OTP is wrong upto fourth time.
            $("#user-login #user_id").css("pointer-events", "none");
            $('#user-login #user_id').prop('readonly', !0);
            $("#user-login #login-user-label").addClass("active");
            $('#user-login #user_id').addClass('valid');
            $("#user-login #password").css("pointer-events", "none");
            $('#user-login #password').prop('readonly', !0);
            $('#user-login #login-password-label').addClass("active");
            $("#user-login #password").addClass('valid');
            $("#user-login #userid-login-password-section").css("display", "block");
            $('#user-login #userid-login-captcha-cross').css("display", "none");
            $('#user-login #userid_captcha_code_error').css("display", "none");
            $('#user-login #userid-login-captcha-section').css("display", "none");
            $(".view-user-login #userid-login-proceed-button-section").css("display", "none");
            $(".view-user-login #userid-generate-otp-button-section").css("display", "none");
            $('#user-login #userid-login-select-image-section').css("display", "none");
            $('#user-login #UserTillGenOtpVirtualKeybd').css("display", "none");
            $(".view-user-login #userid-otp-section").css("display", "block");
            $('#user-login #userid-otp').val('');
            $(".input-field #login-userid-otp-label").removeClass("active");
            $('#user-login #userid-otp').addClass("invalid");
            $('#user-login #login-userid-otp-cross').css("display", "block");

        }
        else if (status_code == '103') { // OTP is wrong for 5th time.
            resetUserPassSection();
        }
        else if (status_code == '005') { // service error.
            resetUserPassSection();
        } else { // ideal session
            resetUserPassSection();
        }

    } else {  // when login stratage is not a user id and password
        resetUserPassSection();
    }

    /*
     * reseting userid login section accorting to the condition Ended
     * Antiphishing project
     */

    if (fetch_mobNumber) { // if Mobile no. exists
        if (status_code == "017" || status_code == "018" || status_code == "019" || status_code == "016") {
            $("#mobile-login #moblogin").val("+91-" + fetch_mobNumber);
        }
        else if (status_code === "005") { // Service error
            $("#mob-otp-section").css("display", "none");
            $("#mob-multi-section").addClass("hidden-mob-details");
            $("#mobile-login #proceedMobLoginBtn").css("display", "block");
            $('.view-mobile-login #moblogin').val('+91-');
            $('.view-mobile-login #pin').val('');
        }
    } else {
        resetMobileSection();
    }
    if (fetch_primaryCardNumber) { // if Primary card no. exists
        if (status_code == "017" || status_code == "018" || status_code == "019") {
            $("#mob-multi-section #mob-primaryCard").val(fetch_primaryCardNumber);
        }
    }
    if (fetch_primaryCardNumber) {
        // incorrect PIN or OTP or 4th wrong Mobile Detail attempt for Multi A/C Holder
        if (status_code == "017" || status_code == "018" || status_code == "019") {
            $("#mobile-login #mob-otp-section").css("display", "block");
            $("#mobile-login #mobile-pin-section").css("display", "block");
            $("#mobile-login #mob-multi-section").removeClass("hidden-mob-details");
            $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
            $("#mobile-login #moblogin").css("pointer-events", "none");
            $("#mobile-login #mob-primaryCard").css("pointer-events", "none");
            $("#mobile-login #pin").css("pointer-events", "none");
            $(".input-field #login-primaryCard-label").addClass("active");
            $(".input-field #login-pin-label").addClass("active");
            $("#mobile-login #moblogin").addClass('valid');
            $("#mobile-login #mob-primaryCard").addClass('valid');
            $('#mobile-login #pin').addClass('valid');

            $("#mobile-login #mobile-login-captcha-section").css("display", "none");
            $("#mobile-login #proceedMobLoginBtn").css("display", "none");
            $("#mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");;
            $("#mobile-login #generate-otp-multi-mobile").css("display", "none");
            $("#mobile-login #mobile-login-select-image-section").css("display", "none");
            $("#mobile-login #mobileVirtualKeyboardTillGenOTP").css("display", "none");

            $(".input-field #login-otp-label").removeClass("active");
            $('#mobile-login #otp').addClass("invalid");
            $('#mobile-login #login-otp-cross').css("display", "block");
        }
    } else {
        if (status_code == "017" || status_code == "018" || status_code == "019") {
            $("#mobile-login #mob-otp-section").css("display", "block");
            $("#mobile-login #mobile-pin-section").css("display", "block");
            $(".view-mobile-login #proceedMobLoginBtn").css("display", "none");
            $(".view-mobile-login #corporateVerbiageSection").css("display", "none");
            $("#mobile-login #moblogin").css("pointer-events", "none");
            $("#mobile-login #pin").css("pointer-events", "none");
            $(".input-field #login-pin-label").addClass("active");
            $("#mobile-login #moblogin").addClass('valid');
            $('#mobile-login #pin').addClass('valid');

            $("#mobile-login #mobile-login-captcha-section").css("display", "none");
            $("#mobile-login #proceedMobLoginBtn").css("display", "none");
            $("#mobile-login #proceedMultiAccountMobLoginBtn").css("display", "none");
            $("#mobile-login #generate-otp-multi-mobile").css("display", "none");
            $("#mobile-login #mobile-login-select-image-section").css("display", "none");
            $("#mobile-login #mobileVirtualKeyboardTillGenOTP").css("display", "none");

            $(".input-field #login-otp-label").removeClass("active");
            $('#mobile-login #otp').addClass("invalid");
            $('#mobile-login #login-otp-cross').css("display", "block");
        }
    }
    if (status_code == "016") { // 5th wrong Mobile Details attempt
        resetMobileSection();
        $('.view-mobile-login #moblogin').val('+91-');
        $('.view-mobile-login #pin').val('');
        $('.view-mobile-login #proceedMobLoginBtn').css('pointer-events', 'none');
        $("#moblogin").css("pointer-events", "auto");

    }

    if (fetch_cardNumber) { // if card no. exists
        if (status_code == "010" || status_code == "011" || status_code == "012") {
            formatCardNumber(fetch_cardNumber);
        }
        // for multi login session we are receiving status_code as 007. 5th attemy status code 014. service error 005
        // service error when user click on login button of card login  journey.
        else if (status_code === '005' || status_code === '007' || status_code === '014') {
            resetCardSection();
        }
    } else {
        resetCardSection();
    }
    // incorrect DOB or OTP or 4th wrong card detail attempt
    if (status_code == "010" || status_code == "011" || status_code == "012") {
        $('#card-login #login-card-label').addClass('active');
        $("#card-login #card-dob-section").css("display", "block");
        $("#card-login #card-otp-section").css("display", "block");
        $(".view-card-login #loginCardSubmitBtn").css("display", "none");
        $(".input-field #login-dob-label").addClass("active");
        $('#card-login #card_no').addClass("valid");
        $('#card-login #card-dob').addClass("valid");
        $('#card-login #login-dob-cross').css("display", "none");
        $("#card_no, #card-dob").css("pointer-events", "none");
        $("#card-login #login-calendar").css("pointer-events", "none");

        $('#card-login #card-login-proceed-button-section').css("display", "none");
        $('#card-login #cardVirtualKeyboardTillGenOTP').css("display", "none");
        $('#card-login #card-login-captcha-section').css("display", "none");
        $('#card-login #card-login-select-image-section').css("display", "none");

        $(".input-field #login-card-otp-label").removeClass("active");
        $('#card-login #card-otp').addClass("invalid");
        $('#card-login #login-card-otp-cross').css("display", "block");

    } else if (status_code == "014") { // 5th wrong card detail attempt
        resetCardSection();
    }

    function loginStrategyInit() {
        if (loginStrategy == 'LOGIN_STRATEGY_QRCODE') {
            // $('#selectCardSection').trigger('click');
            $('#selectQrCodeSection').addClass('active');
            $('#selectCardSection').removeClass('active');
            $('#selectUserSection').removeClass('active');
            $('#selectMobileSection').removeClass('active');
            $("#qrcode-login").css("display", "block");
            $("#card-login").css("display", "none");
            $("#mobile-login").css("display", "none");
            $("#user-login").css("display", "none");
        } else if (loginStrategy == 'LOGIN_STRATEGY_CARD_AND_DOB') {
            // $('#selectCardSection').trigger('click');
            $('#selectCardSection').addClass('active');
            $('#selectQrCodeSection').removeClass('active');
            $('#selectUserSection').removeClass('active');
            $('#selectMobileSection').removeClass('active');
            $("#card-login").css("display", "block");
            $("#qrcode-login").css("display", "none");
            $("#mobile-login").css("display", "none");
            $("#user-login").css("display", "none");
        } else if (loginStrategy == 'LOGIN_STRATEGY_USER_AND_PWD') {
            // $('#selectUserSection').trigger('click');
            $('#selectUserSection').addClass('active');
            $('#selectQrCodeSection').removeClass('active');
            $('#selectMobileSection').removeClass('active');
            $('#selectCardSection').removeClass('active');
            $("#user-login").css("display", "block");
            $("#qrcode-login").css("display", "none");
            $("#card-login").css("display", "none");
            $("#mobile-login").css("display", "none");
        } else if (endSessionExist) {
            // $('#selectCardSection').trigger('click');
            $('#selectCardSection').addClass('active');
            $('#selectQrCodeSection').removeClass('active');
            $('#selectUserSection').removeClass('active');
            $('#selectMobileSection').removeClass('active');
            $("#card-login").css("display", "block");
            $("#qrcode-login").css("display", "none");
            $("#mobile-login").css("display", "none");
            $("#user-login").css("display", "none");
        } else {
            // $('#selectMobileSection').trigger('click');
            $('#selectMobileSection').addClass('active');
            $('#selectCardSection').removeClass('active');
            $('#selectUserSection').removeClass('active');
            $("#qrcode-login").css("display", "none");
            $("#card-login").css("display", "none");
            $("#user-login").css("display", "none");
            $("#mobile-login").css("display", "block");
        }
    }

    var qrCheckwindowWidth = $(window).width();
    var qrCheckIsMobile = qrCheckwindowWidth < 769;
    if (qrCheckIsMobile && loginStrategy === 'LOGIN_STRATEGY_QRCODE') {
        loginStrategy = mobileLoginStrategy;
    }
    loginStrategyInit();

    $('#mobile-login #pin').focus(function () {
        validateImageCheckboxcheckedOrNot('mobilelogin');
    });

    $('#mobile-login #pin').on('keyup', function (e) {
        var data = $('#mobile-login #pin').val();
        if (data.length > 0) {
            if (data.length === 4) {
                $('#mobile-login #login-pin-cross').css("display", "none");
                $("#mobile-login #pin").removeClass('invalid');
            }
            else {
                $('#mobile-login #login-pin-cross').css("display", "block");
                $("#mobile-login #pin").removeClass('invalid');
            }
        }
    });

    $('#mobile-login #pin').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

    $('#mob-otp-section #otp').focus(function () {
        var data = $('#mob-otp-section #otp').val();
        $(".input-field #login-otp-label").addClass("active");
        $('#mobile-login #otp').removeClass("invalid");
        $('#mobile-login #login-otp-cross').css("display", "none");
        if (data.length > 0) {
            if (data.length === 6) {
                $('#mobile-login #login-otp-cross').css("display", "none");
            }
            else {
                $('#mobile-login #login-otp-cross').css("display", "block");
            }
        }
    });

    $('#mob-otp-section #otp').on('keyup', function (e) {
        var data = $('#mob-otp-section #otp').val();
        if (data.length > 0) {
            if (data.length === 6) {

                $('#mobile-login #login-otp-cross').css("display", "none");
                $("#mobile-login #otp").addClass('valid');
            }
            else {
                $('#mobile-login #login-otp-cross').css("display", "block");
                $("#mobile-login #otp").removeClass('valid');
            }
        }
        else {
            $("#mobile-login #otp").removeClass('valid');
        }
    });

    $('#mob-otp-section #otp').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

    $('#user-login #password').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

    $('#user-login #user_id').focus(function () {
        $(".input-field #login-user-label").addClass("active");
    });

    $('#user-login #password').focus(function () {
        validateImageCheckboxcheckedOrNot('userlogin');
    });

    $('#mobile-login #mobile_captcha_input').focus(function () {
        $(".input-field #login-mobile-captcha-label").addClass("active");
    });

    $('#user-login #captcha_input').focus(function () {
        $(".input-field #login-user-captcha-label").addClass("active");
    });

    $('#user-login #userid-otp').focus(function () {
        $(".input-field #login-userid-otp-label").addClass("active");
    });

    $('#card-login #card_captcha_input').focus(function () {
        $(".input-field #login-card-captcha-label").addClass("active");
    });

    $('#userid-otp-section #userid-otp').focus(function () {
        var userOtp = $('#userid-otp-section #userid-otp').val();
        $(".input-field #login-userid-otp-label").addClass("active");
        $('#user-login #userid-otp').removeClass("invalid");
        $('#user-login #login-userid-otp-cross').css("display", "none");
        if (userOtp.length > 0) {
            if (userOtp.length === 6) {
                $('#user-login #login-userid-otp-cross').css("display", "none");
            }
            else {
                $('#user-login #login-userid-otp-cross').css("display", "block");
            }
        }
    });

    $('#userid-otp-section #userid-otp').on('keyup', function (e) {
        var userOtp = $('#userid-otp-section #userid-otp').val();
        if (userOtp.length > 0) {
            if (userOtp.length === 6) {
                $('#user-login #login-userid-otp-cross').css("display", "none");
                $("#user-login #userid-otp").addClass('valid');
            }
            else {
                $('#user-login #login-userid-otp-cross').css("display", "block");
                $("#user-login #userid-otp").removeClass('valid');
            }
        }
        else {
            $("#user-login #userid-otp").removeClass('valid');
        }
    });

    $('#userid-otp-section #userid-otp').blur(function () {
        var userOtp = $('#userid-otp-section #userid-otp').val();
        if (!userOtp) {
            $(".input-field #login-otp-label").removeClass("active");
            $('#user-login #userid-otp').addClass("invalid");
            $('#user-login #login-userid-otp-cross').css("display", "block");
        } else if (userOtp.length < 6) {
            $('#user-login #userid-otp').addClass("invalid");
            $('#user-login #login-userid-otp-cross').css("display", "block");
        }
    });

    $('#userid-otp-section #userid-otp').bind("cut copy paste", function (e) {
        e.preventDefault();
    });



    $('#card-login #card_no').focus(function () {
        removeErrorcardNum();
        $(".input-field #login-card-label").addClass("active");
        $('.view-card-login #card_no').removeClass('invalid');
    });

    $('#card-login #card-dob').focus(function () {
        $('#card-login #card-dob').removeClass("invalid");
        $('#card-login #card_calendar_error').css("display", "none");
        $('#card-login #login-dob-cross').css("display", "none");
    });

    $('#card-otp-section #card-otp').focus(function () {
        var data = $('#card-otp-section #card-otp').val();
        $(".input-field #login-card-otp-label").addClass("active");
        $('#card-login #card-otp').removeClass("invalid");
        $('#card-login #login-card-otp-cross').css("display", "none");
        if (data.length > 0) {
            if (data.length === 6) {
                $('#card-login #login-card-otp-cross').css("display", "none");
            }
            else {
                $('#card-login #login-card-otp-cross').css("display", "block");
            }
        }
    });

    $('#card-otp-section #card-otp').on('keyup', function (e) {
        var data = $('#card-otp-section #card-otp').val();
        if (data.length > 0) {
            if (data.length === 6) {
                $('#card-login #login-card-otp-cross').css("display", "none");
                $("#card-login #card-otp").addClass('valid');
            }
            else {
                $('#card-login #login-card-otp-cross').css("display", "block");
                $("#card-login #card-otp").removeClass('valid');
            }
        }
    });

    $('#card-otp-section #card-otp').bind("cut copy paste", function (e) {
        e.preventDefault();
    });



    $('#mob-multi-section #mob-primaryCard').focus(function () {
        var data = $('#mob-multi-section #mob-primaryCard').val();
        $(".input-field #login-primaryCard-label").addClass("active");
        $('#mobile-login #mob-primaryCard').removeClass("invalid");
        $('#mobile-login #login-primarycard-cross').css("display", "none");
        $('#mobile-login #login-primarycard-err').css("display", "none");
        if (data.length > 0) {
            if (data.length === 4) {
                $('#mobile-login #login-primarycard-cross').css("display", "none");
            }
            else {
                $('#mobile-login #login-primarycard-cross').css("display", "block");
            }
        }
    });

    $('#mob-multi-section #mob-primaryCard').on('keyup', function (e) {
        var data = $('#mob-multi-section #mob-primaryCard').val();
        if (data.length > 0) {
            if (data.length === 4) {
                $('#mobile-login #login-primarycard-cross').css("display", "none");
                $("#mobile-login #mob-primaryCard").addClass('valid');
            }
            else {
                $('#mobile-login #login-primarycard-cross').css("display", "block");
                $("#mobile-login #mob-primaryCard").removeClass('valid');
            }
        }
    });

    $('#mobile-login #moblogin').focus(function () {
        $('#mobile-login #moblogin').removeClass("invalid");
        $('.view-mobile-login #login-mob-cross').css("display", "none");
        $('#mobile-login #login-mob-err').css("display", "none");
    });

    $('#mobile-login #moblogin').blur(function () {    // updates mobile field
        // properties
        var data = $('#mobile-login #moblogin').val();
        data = data.substring(data.lastIndexOf('-') + 1).trim();

        if (data.length > 0 && !data.match(/^[6-9][0-9]{9}$/)) {
            $('#mobile-login #moblogin').addClass("invalid");
            $('.view-mobile-login #login-mob-cross').css("display", "block");
            $('#mobile-login #login-mob-err').html('Incorrect mobile number!');
            $('#mobile-login #login-mob-err').css("display", "block");
        }
        else if (data.length > 0 && data.match(/^[6-9][0-9]{9}$/)) {
            $('#mobile-login #moblogin').removeClass("invalid");
            $('.view-mobile-login #login-mob-cross').css("display", "none");
            $('#mobile-login #login-mob-err').css("display", "none");
            if (data.length > 9) {
                $('#mobile-login #moblogin').addClass('valid');
            }
        }
    });

    $('#mobile-login #pin').blur(function () {
        var data = $('#mobile-login #pin').val();

        if ($('#mobileSelectImageId').is(':visible')) {
            if (document.getElementById('auth_img_txt_mobile').checked) {
                if (!data) {
                    $(".input-field #login-pin-label").removeClass("active");
                    $('#mobile-login #pin').addClass("invalid");
                } else if (data.length < 4) {
                    $('#mobile-login #pin').addClass("invalid");
                }
                else if (data.length === 4) {
                    $('#mobile-login #login-pin-cross').css("display", "none");
                    $('#mobile-login #pin').removeClass("invalid");
                    $('#mobile-login #pin').addClass('valid');
                }
            }
        }
        else {
            if (!data) {
                $(".input-field #login-pin-label").removeClass("active");
                $('#mobile-login #pin').addClass("invalid");
                $('#mobile-login #login-pin-cross').css("display", "block");
            } else if (data.length < 4) {
                $('#mobile-login #pin').addClass("invalid");
                $('#mobile-login #login-pin-cross').css("display", "block");
            }
            else if (data.length === 4) {
                $('#mobile-login #login-pin-cross').css("display", "none");
                $('#mobile-login #pin').removeClass("invalid");
                $('#mobile-login #pin').addClass('valid');
            }
        }
    });

    $('#mob-otp-section #otp').blur(function () {
        var data = $('#mob-otp-section #otp').val();
        if (!data) {
            $(".input-field #login-otp-label").removeClass("active");
            $('#mobile-login #otp').addClass("invalid");
            $('#mobile-login #login-otp-cross').css("display", "block");
        } else if (data.length < 6) {
            $('#mobile-login #otp').addClass("invalid");
            $('#mobile-login #login-otp-cross').css("display", "block");
        }
        else if (data.length === 6) {
            $('#mobile-login #otp').removeClass("invalid");
            $('#mobile-login #login-otp-cross').css("display", "none");
            $('#mobile-login #otp').addClass("valid");
        }
    });

    $('#card-otp-section #card-otp').blur(function () {
        var data = $('#card-otp-section #card-otp').val();
        if (!data) {
            $(".input-field #login-card-otp-label").removeClass("active");
            $('#card-login #card-otp').addClass("invalid");
            $('#card-login #login-card-otp-cross').css("display", "block");
        } else if (data.length < 6) {
            $('#card-login #card-otp').addClass("invalid");
            $('#card-login #login-card-otp-cross').css("display", "block");
        }
        else if (data.length === 6) {
            $('#card-login #card-otp').removeClass("invalid");
            $('#card-login #login-card-otp-cross').css("display", "none");
            $('#card-login #card-otp').addClass("valid");
        }
    });

    $('#card-login #card-dob').blur(function () {
        var dob = $("#card-login #card-dob").val();
        if (dob) {
            $(".input-field #login-dob-label").addClass("active");
            $('#card-login #card-dob').removeClass("invalid");
            $('#card-login #card_calendar_error').css("display", "none");
            $('#card-login #login-dob-cross').css("display", "none");
        }
    });

    $('#card-login #card_captcha_input').blur(function () {
        var data = $('#card-login #card_captcha_input').val();
        if (!data) {
            $(".input-field #login-card-captcha-label").removeClass("active");
            $('#card-login #card_captcha_input').removeClass('valid');
        } else {
            $('#card-login #card_captcha_input').addClass('valid');
        }
    });

    $('#user-login #user_id').blur(function () {
        var data = $('#user-login #user_id').val();
        if (!data) {
            $(".input-field #login-user-label").removeClass("active");
            $('#user-login #user_id').removeClass('valid');
        } else {
            $('#user-login #user_id').addClass('valid');
        }
    });

    $('#user-login #password').blur(function () {
        var data = $('#user-login #password').val();
        if (!data) {
            $(".input-field #login-password-label").removeClass("active");
            $('#user-login #password').removeClass('valid');
        } else {
            $('#user-login #password').addClass('valid');
        }
    });

    $('#user-login #captcha_input').blur(function () {
        var data = $('#user-login #captcha_input').val();
        if (!data) {
            $(".input-field #login-user-captcha-label").removeClass("active");
            $('#user-login #captcha_input').removeClass('valid');
        } else {
            $('#user-login #captcha_input').addClass('valid');
        }
    });

    $('#user-login #userid-otp').blur(function () {
        var data = $('#user-login #userid-otp').val();
        if (!data) {
            $(".input-field #login-userid-otp-label").removeClass("active");
            $('#user-login #userid-otp').removeClass('valid');
        } else {
            $('#user-login #userid-otp').addClass('valid');
        }
    });

    $('#mobile-login #mobile_captcha_input').blur(function () {
        var data = $('#mobile-login #mobile_captcha_input').val();
        if (!data) {
            $(".input-field #login-mobile-captcha-label").removeClass("active");
            $('#mobile-login #mobile_captcha_input').removeClass('valid');
        } else {
            $('#mobile-login #mobile_captcha_input').addClass('valid');
        }
    });

    $('#mob-multi-section #mob-primaryCard').blur(function () {
        var data = $('#mob-multi-section #mob-primaryCard').val();
        if (!data) {
            $(".input-field #login-primaryCard-label").removeClass("active");
            $('#mobile-login #mob-primaryCard').addClass("invalid");
            $('#mobile-login #login-primarycard-cross').css("display", "block");
            $('#mobile-login #login-primarycard-err').html('Invalid card number!');
            $('#mobile-login #login-primarycard-err').css("display", "block");
        } else if (data.length < 4) {
            $('#mobile-login #mob-primaryCard').addClass("invalid");
            $('#mobile-login #login-primarycard-cross').css("display", "block");
            $('#mobile-login #login-primarycard-err').html('Invalid card number!');
            $('#mobile-login #login-primarycard-err').css("display", "block");
        }
        else if (data.length === 4) {
            $('#mobile-login #mob-primaryCard').addClass("valid");
        }
    });

    // detects card type and perform assignment and validation
    $('#card-login #card_no').on('keyup', function (e) {
        // resetLoginCardFieldStyle();
        var cardNumberIP = ($('#card-login #card_no').val()).trim();
        var firstDigit = cardNumberIP.charAt(0);
        var secondDigit = cardNumberIP.charAt(1);

        var kc = e.which || e.keyCode;
        if (kc == '8' || kc == '46') {
            $("#card-login #card_no").removeClass('valid');
            $('.view-card-login #card_no').removeClass('invalid');
            $('#card-login #login-card-err').css("display", "none");
            $('#card-login #login-card-cross').css("display", "none");
        }

        var keychar = String.fromCharCode(kc);
        var diffLength = cardNumberIP_Prev.length - cardNumberIP.length;

        var formatSpd = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var formatSp = /[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
        var formatAl = /^[A-Za-z]+$/;
        var formatNum = /[1-9]/g;

        if (formatSp.test(cardNumberIP) || formatAl.test(cardNumberIP)) {
            cardNumberIP = '';
            $('#card-login #card_no').val('');
            e.preventDefault();
        } else {
            if ((cardNumberIP.length == 15 || cardNumberIP.length == 16) && !formatSpd.test(cardNumberIP)) {
                formatCardNum();
                cardNumberIP = $('#card-login #card_no').val();
            } else if (cardNumberIP.length > 16 && !formatSpd.test(cardNumberIP)) {
                if (firstDigit == 3 && secondDigit == 7) {
                    cardNumberIP = cardNumberIP.slice(0, 15);
                } else {
                    cardNumberIP = cardNumberIP.slice(0, 16);
                }
                $('#card-login #card_no').val(cardNumberIP);
            }

            if (firstDigit == 3 && secondDigit == 7 && (diffLength != 1 && diffLength != 2) && kc != 35 && kc != 36 && kc != 37 && kc != 39) {    // checks
                // first
                // digit
                // &
                // identifies
                // card
                // type
                $('#card-login #card_no').attr("maxlength", "17");
                // formatAndVerifyAmexRetail(cardNumberIP);
                formatAndVerifyAmexLogin(cardNumberIP);
                if (cardNumberIP.length < 17) {
                    $('#card-login #login-card-cross').css("display", "block");
                }
            } else if ((firstDigit != 3 || (firstDigit == 3 && secondDigit != 7)) && (diffLength != 1 && diffLength != 2) && kc != 35 && kc != 36 && kc != 37 && kc != 39) {
                $('#card-login #card_no').attr("maxlength", "19");
                // formatAndVerifyNonAmexRetail(cardNumberIP);
                formatAndVerifyNonAmexLogin(cardNumberIP);
                if (cardNumberIP.length < 19) {
                    $('#card-login #login-card-cross').css("display", "block");
                }
            } else if (firstDigit != 3 || (firstDigit == 3 && secondDigit != 7)) {
                // formatNonAmexWhileDeleteRetail(cardNumberIP); // format during backspace
                formatNonAmexWhileDeleteLogin(cardNumberIP);
                if (cardNumberIP.length < 19) {
                    $('#card-login #login-card-cross').css("display", "block");
                }
            } else if (firstDigit == 3 && secondDigit == 7) {    // checking the
                // value only
                // not the type
                // formatAmexWhileDeleteRetail(cardNumberIP); // format during backspace
                formatAmexWhileDeleteLogin(cardNumberIP);
                if (cardNumberIP.length < 17) {
                    $('#card-login #login-card-cross').css("display", "block");
                }
            }
            cardSubValidity();
        }

        cardNumberIP_Prev = $('#card-login #card_no').val();

    });

    $("#card-login #card_no").on('blur', function () {
        if (!$('#card-login #card_no').hasClass('invalid')) {
            $("#card-login #card_no").css('border-buttom', '1px solid #9e9e9e');
        }
        var cardNumberIP = ($("#card-login #card_no").val()).trim();
        var firstDigit = cardNumberIP.charAt(0);
        var secondDigit = cardNumberIP.charAt(1);
        var len = cardNumberIP.length;
        if (len === 0) {
            $('#card-login #login-card-label').removeClass('active');
        }
        if (!((len == 17 && firstDigit == 3 && secondDigit == 7) || len == 19)) {
            // $('#card-login #login-card-tick').css("display", "none");
        }
        if (cardNumberIP.indexOf('-') == -1) {
            if (firstDigit == 3 && secondDigit == 7 && cardNumberIP.length > 15) {
                cardNumberIP = cardNumberIP.slice(0, 15);
            } else if (cardNumberIP.length > 16) {
                cardNumberIP = cardNumberIP.slice(0, 16);
            }
            $('#card-login #card_no').val(cardNumberIP);
        }
        if (cardNumberIP) {
            formatCardNum();
            validateCardNumbersNew(cardNumberIP);
        }
        cardSubValidity();
    });

    /* mobile number only */
    // Numeric only control handler
    jQuery.fn.ForceNumericOnly =
        function () {
            return this.each(function () {
                $(this).keydown(function (e) {
                    var key = e.charCode || e.keyCode || 0;
                    // allow backspace, tab, delete, enter, arrows, numbers and
                    // keypad numbers ONLY
                    // home, end, period, and numpad decimal
                    return (
                        key == 8 ||
                        key == 9 ||
                        key == 13 ||
                        key == 46 ||
                        key == 110 ||
                        key == 190 ||
                        (key >= 35 && key <= 40) ||
                        (key >= 48 && key <= 57) ||
                        (key >= 96 && key <= 105));
                });
            });
        };
    $(".view-mobile-login #moblogin,#pin,#otp,#card-otp,#userid-otp").ForceNumericOnly();

    $(".view-mobile-login #mobile-login input#pin,.view-mobile-login #mob-otp-section input#otp,.view-card-login #card-otp-section input#card-otp, .view-user-login #userid-otp-section input#userid-otp").focus(function () {
        if ($("#virtualkeyboard").is(':visible')) {
            $(".keyboard .char,.keyboard .space,.keyboard .capslock").addClass('disabled');
            $(".keyboard .numbers .mob").removeClass('disabled');
        }
        else {
            $(".keyboard .char,.keyboard .space,.keyboard .capslock").removeClass('disabled');
            $(".keyboard .numbers .mob").removeClass('disabled');
        }
    });

    document.addEventListener('keydown', function (e) {
        var kc = e.which || e.keyCode;
        if (kc == '13') {
            e.preventDefault();
            if ($('#selectMobileSection').hasClass('active')) {
                mobileCaptchaSectionHidden = $('#mobile-login #mobile-login-captcha-section').css('display') == 'block';//Anchal
                pinSectionHidden = $('#mobile-pin-section').css('display') == 'none';
                otpSectionHidden = $('#mob-otp-section').css('display') == 'none';
                multiSectionHidden = $('#mob-multi-section').hasClass('hidden-mob-details');
                if (otpSectionHidden && multiSectionHidden && pinSectionHidden) {
                    if (mobileCaptchaSectionHidden) {
                        if (!$('#mobile-login #loginGenOtpMob').hasClass('disable-btn')) {
                            $('#loginGenOtpMob').click();  // first proceed button
                            $("#mobile-login #moblogin").blur();
                        }
                    }
                    else {
                        if (!$('#mobile-login #loginGenOtpMob').hasClass('disable-btn')) {
                            $('#loginGenOtpMob').click(); // first proceed button
                            $("#mobile-login #moblogin").blur();
                        }
                    }
                } else if (otpSectionHidden && pinSectionHidden && !multiSectionHidden) {
                    if (!$('#mobile-login #proceedMultiAccountMobBtn').hasClass('disable-btn')) {
                        $('#proceedMultiAccountMobBtn').click();
                        $("#mobile-login #mob-primaryCard").blur();
                    }
                } else if (otpSectionHidden && !pinSectionHidden) {
                    if (!$('#mobile-login #loginMultiSubmitBtn').hasClass('disable-btn')) {
                        $('#loginMultiSubmitBtn').click();
                        $("#mobile-login #pin").blur();
                    }

                } else if ((!otpSectionHidden && !multiSectionHidden) || (!otpSectionHidden && multiSectionHidden)) {
                    if (!$('#mobile-login #loginMobileSubmitBtn').hasClass('disable-btn')) {
                        $('#loginMobileSubmitBtn').click();
                    }
                }
            }
            else if ($('#selectUserSection').hasClass('active')) {
                userCaptchaSectionHidden = $('#user-login #userid-login-captcha-section').css('display') == 'none';
                userPasswordSectionHidden = $('#user-login #userid-login-password-section').css('display') == 'none';
                userOtpSectionHidden = $('#user-login #userid-otp-section').css('display') == 'none';
                if (userOtpSectionHidden && userPasswordSectionHidden) {
                    if (userCaptchaSectionHidden) {
                        if (!$('#user-login #loginProceedBtnUser').hasClass('disable-btn')) {
                            $('#loginProceedBtnUser').click();
                            $("#user-login #user_id").blur();
                        }
                    } else {
                        if (!$('#user-login #loginProceedBtnUser').hasClass('disable-btn')) {
                            $('#loginProceedBtnUser').click();
                            $("#user-login #user_id").blur();
                        }
                    }
                }
                else if (userOtpSectionHidden && !userPasswordSectionHidden) {
                    if (!$('#user-login #loginGenOtpBtnUser').hasClass('disable-btn')) {
                        $('#loginGenOtpBtnUser').click();
                        $("#user-login #password").blur();
                    }
                }
                else if (!userOtpSectionHidden && !userPasswordSectionHidden) {
                    if (!$('#user-login #loginUserSubmitBtnEnter').hasClass('disable-btn')) {
                        $('#loginUserSubmitBtnEnter').click();
                    }

                }
            }
            else if ($('#selectCardSection').hasClass('active')) {
                cardCaptchaSectionHidden = $('#card-login #card-login-captcha-section').css('display') == 'none';
                cardDOBSectionHidden = $('#card-login #card-dob-section').css('display') == 'none';
                cardOtpSectionHidden = $('#card-login #card-otp-section').css('display') == 'none';
                if (cardOtpSectionHidden && cardDOBSectionHidden) {
                    if (cardCaptchaSectionHidden) {
                        if (!$('#card-login #loginProceedBtnCard').hasClass('disable-btn')) {
                            $('#loginProceedBtnCard').click();
                            $("#card-login #card_no").blur();
                        }
                    } else {
                        if (!$('#card-login #loginProceedBtnCard').hasClass('disable-btn')) {
                            $('#loginProceedBtnCard').click();
                            $("#card-login #card_no").blur();
                        }
                    }
                }
                else if (cardOtpSectionHidden && !cardDOBSectionHidden) {
                    if (!$('#card-login #loginGenOtpCard').hasClass('disable-btn')) {
                        $('#loginGenOtpCard').click();
                        $("#card-login #card_no").blur();
                    }
                }
                else if (!cardOtpSectionHidden && !cardDOBSectionHidden) {
                    if (!$('#card-login #loginCardSubmitBtnEnter').hasClass('disable-btn')) {
                        $('#loginCardSubmitBtnEnter').click();
                    }
                }
            }
        }
    });

    $('#login-calendar').click(function () {
        $('#card-login .datepicker input#card-dob').click();
    });
    $('#dummy-login-calendar').click(function () {
        validateImageCheckboxcheckedOrNot('cardlogin');
    });

    var date = new Date();
    var currentyear = date.getFullYear();
    document.getElementById("year").innerHTML = currentyear;
    // $(".login-footer #year").val(currentyear);

    $('#cancelFraudLoginButton, #fraudCloseButton').on('click', function () {
        $("#fraud-otp").css('border', '.8px solid #ddd');
        event.preventDefault();
        AddOverlayLoader();

        if (document.URL.indexOf("/app") > 0) {
            window.location.href = "/creditcards/app/user/loggedout";
        }
        else {
            window.location.href = "/creditcards/b2b/user/loggedout";
        }
    });

    $("body").on("click", ".info-text .forget-password", function (event) {
        var $text = $('.login-reset-password.forget-password').text();
        trk_event_set('None');
        if ($text != '') {
            setAnalytics(analyticsObj.login_loginintent, $text, 'login');
        }
        window.location.href = '/creditcards/app/user/forgotpassword-page';
    });


    $("body").on("click", ".info-text .first-time-user", function (event) {
        var $text1 = $('.login-reset-password.first-time-user').text();
        trk_event_set('None');
        if ($text1 != '') {
            setAnalytics(analyticsObj.login_loginintent, $text1, 'login');
        }
        window.location.href = '/creditcards/app/user/register-page';
    });


    $("body").on("click", ".info-text .unlock-account", function (event) {
        var $text2 = $('.login-reset-password.first-time-user').text();
        trk_event_set('None');
        if ($text2 != '') {
            setAnalytics(analyticsObj.login_loginintent, $text2, 'login');
        }
        window.location.href = '/creditcards/app/user/unlock-page';
    });

});


// Draggeble Keyboard

dragElement(document.getElementById("virtualkeyboard"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (elmnt && elmnt.id) {
        if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }
    }
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

/*Draggable Keyboard Starts*/

$(function () {

    // $('textarea').focus();

    var $caps = $('.capslock'),
        $char = $('.char');

    $caps.click(function () {
        if ($caps.hasClass('on')) {
            $('.char,.capslock').each(function () {
                $(this).text($(this).text().toLowerCase());
                $("#one").text(";");
                $("#two").text("`");
                $("#three").text("'");
                $("#four").text("[");
                $("#five").text("]");
                $("#six").text(",");
                $("#seven").text(".");
                $("#eight").text("/");
                $("#nine").text("-");
                $("#ten").text("=");
                $("#eleven").html("&#92;").text();
            });
            $caps.removeClass('on');

        } else {
            $('.char,.capslock').each(function () {
                $(this).text($(this).text().toUpperCase());
                $("#one").text(":");
                $("#two").text("~");
                $("#three").html("&#34;").text();
                $("#four").text("{");
                $("#five").text("}");
                $("#six").text("<");
                $("#seven").text(">");
                $("#eight").text("?");
                $("#nine").text("_");
                $("#ten").text("+");
                $("#eleven").text("|");
            });
            $caps.addClass('on');
        }
    });

    $('li').click(function () {
        var t = this;
        $(this).addClass('touch');
        setTimeout(function () {
            $(t).removeClass('touch');
        }, 100);
    });

    var lastFocus,
        selectionStart,
        selectionEnd;

    $('textarea,input').on('focus', function () {
        $('textarea,input').removeClass('focus');
        $(this).addClass('focus');
    });

    $('textarea,input').on('blur', function () {
        lastFocus = this;
        selStart = this.selectionStart;
        selEnd = this.selectionEnd;
    });

    $('.char').click(function () {
        var char = $(this).text();
        sendChar(char);
    });

    $('.return').click(function () {
        sendChar('\n');
    });

    $('.space').click(function () {
        sendChar(' ');
    });

    $('.backspace').click(function () {
        backspace();
    });

    $('.tab').click(function () {
        tab();
    });
    $(".virtualkey.card .switch-div .switch input, .virtualkey.user .switch-div .switch input, .virtualkey.mob .switch-div .switch input").click(function () {
        var isChecked = $(this).prop('checked');
        if (isChecked) {
            openKeyboard();
        }
        else {
            closeKeyboard();
        }
    });
    $(".closeKeyboard").click(function () {
        closeKeyboard();
        $(".switch-div .switch input[type=checkbox]").prop('checked', false);
    });
    $(".login-tabs li").click(function () {
        closeKeyboard();
        $(".switch-div .switch input[type=checkbox]").prop('checked', false);
    });

    $("#virtualkeyboard .keyboard li, #virtualkeyboard .keyboard .numbers li.mob, #virtualkeyboard .keyboard .numbers li.card").click(function () {
        if ($('#selectMobileSection').hasClass('active')) {
            mobileCaptchaSectionHidden = $('#mobile-login #mobile-login-captcha-section').css('display') == 'block';//Anchal
            pinSectionHidden = $('#mobile-pin-section').css('display') == 'none';
            otpSectionHidden = $('#mob-otp-section').css('display') == 'none';
            multiSectionHidden = $('#mob-multi-section').hasClass('hidden-mob-details');
            if (otpSectionHidden && multiSectionHidden && pinSectionHidden) {
                if (mobileCaptchaSectionHidden) {
                    checkMobileLoginBtn('mobile');
                }
                else {
                    checkMobileLoginBtn('captcha');
                }
            }
            else if (otpSectionHidden && pinSectionHidden && !multiSectionHidden) {
                checkMobileLoginBtn('primaryCard');
            }
            else if (otpSectionHidden && !pinSectionHidden) {
                var cardPIN = $("#mobile-login #pin").val();

                if ($('#mobile-login #mobile_pin_error').is(':visible')) {
                    $("#mobile-login #pin").val('');
                    $(".input-field #login-pin-label").removeClass("active");
                    cardPIN = null;
                }
                else if (cardPIN) {
                    if (cardPIN.match(/^([0-9]){1,4}$/)) {
                        // when digit entered
                        if (cardPIN.length > 0) {
                            if (cardPIN.length === 4) {
                                $('#mobile-login #login-pin-cross').css("display", "none");
                                $("#mobile-login #pin").removeClass('invalid');
                            }
                            else {
                                $('#mobile-login #login-pin-cross').css("display", "block");
                                $("#mobile-login #pin").removeClass('invalid');
                            }
                        }
                    } else {
                        $("#mobile-login #pin").val('');
                        $(".input-field #login-pin-label").removeClass("active");
                    }
                }
                checkMobileLoginBtn('pin');

            } else if ((!otpSectionHidden && !multiSectionHidden) || (!otpSectionHidden && multiSectionHidden)) {
                var mobOTP = $("#mob-otp-section #otp").val();
                if (mobOTP && mobOTP.length === 6) {
                    $("#login-mob-submit").removeClass('add-disable');
                    $("#login-mob-submit .blue-btn").removeClass('disable-btn');
                } else {
                    $("#login-mob-submit").addClass('add-disable');
                    $("#login-mob-submit .blue-btn").addClass('disable-btn');
                }
            }
        }
        else if ($('#selectUserSection').hasClass('active')) {
            userCaptchaSectionHidden = $('#user-login #userid-login-captcha-section').css('display') == 'none';
            userPasswordSectionHidden = $('#user-login #userid-login-password-section').css('display') == 'none';
            userOtpSectionHidden = $('#user-login #userid-otp-section').css('display') == 'none';
            if (userOtpSectionHidden && userPasswordSectionHidden) {
                if (userCaptchaSectionHidden) {
                    checkUserLoginBtn('userid');
                } else {
                    checkUserLoginBtn('captcha');
                }
            }
            else if (userOtpSectionHidden && !userPasswordSectionHidden) {
                if ($('#user-login #userid_password_error').is(':visible')) {
                    $("#user-login #password").val('');
                    $(".input-field #login-password-label").removeClass("active");
                }
                checkUserLoginBtn('password');
            }
            else if (!userOtpSectionHidden && !userPasswordSectionHidden) {
                var userid = $("#user-login #user_id").val();
                var password = $("#user-login #password").val();
                var otp = $("#user-login #userid-otp").val();
                if (userid && password && otp.length === 6) {
                    $("#loginUserSubmitBtn").removeClass('add-disable');
                    $("#loginUserSubmitBtn .blue-btn").removeClass('disable-btn');
                } else {
                    $("#loginUserSubmitBtn").addClass('add-disable');
                    $("#loginUserSubmitBtn .blue-btn").addClass('disable-btn');
                }
            }
        }
        else if ($('#selectCardSection').hasClass('active')) {
            cardCaptchaSectionHidden = $('#card-login #card-login-captcha-section').css('display') == 'none';
            cardDOBSectionHidden = $('#card-login #card-dob-section').css('display') == 'none';
            dummyCardDOBSectionHidden = $('#card-login #dummy-card-dob-section').css('display') == 'none';
            cardOtpSectionHidden = $('#card-login #card-otp-section').css('display') == 'none';
            if (cardOtpSectionHidden && cardDOBSectionHidden && dummyCardDOBSectionHidden) {
                if (cardCaptchaSectionHidden) {
                    checkCardLoginBtn('cardNumber');
                } else {
                    checkCardLoginBtn('captcha');
                }
            }
            else if (cardOtpSectionHidden && !cardDOBSectionHidden) {
                $("#card-login #card-dob").val('');
                $("#card-login #login-dob-label").removeClass("active");
                //				checkCardLoginBtn('dob');
                //				do nothing
            }
            else if (cardOtpSectionHidden && !dummyCardDOBSectionHidden) {
                $("#card-login #dummy-card-dob").val('');
                $("#card-login #dummy-login-dob-label").removeClass("active");
            }
            else if (!cardOtpSectionHidden && !cardDOBSectionHidden) {
                var dob = $("#card-login #card-dob").val();
                var cardOtp = $("#card-login #card-otp").val();
                if (dob && cardOtp.length === 6) {
                    $("#login-card-submit").removeClass('add-disable');
                    $("#login-card-submit .blue-btn").removeClass('disable-btn');
                } else {
                    $("#login-card-submit").addClass('add-disable');
                    $("#login-card-submit .blue-btn").addClass('disable-btn');
                }
            }
        }
    });

    function tab() {
        var $inputs = $('textarea,input');
        var currIndex = parseInt($(lastFocus).attr('tabIndex'));
        var highestIndex = -1;
        var selected = false;
        $inputs.each(function () {
            var index = parseInt($(this).attr('tabIndex'));
            if (index > highestIndex) {
                highestIndex = index;
            }
            if (index === currIndex + 1) {
                $(this).focus();
                selected = true;
            }
        });

        if (!selected && currIndex === highestIndex) {
            $inputs.each(function () {
                var index = parseInt($(this).attr('tabIndex'));
                if (index === 1) {
                    $(this).focus();
                }
            });
        }
    }

    function backspace() {
        var orig = $(lastFocus).val();
        var updated = orig.substring(0, selStart - 1) + orig.substring(selEnd, orig.length);
        $(lastFocus).val(updated);
        selEnd = --selStart;
        $(lastFocus).focus();
        lastFocus.selectionStart = selStart;
        lastFocus.selectionEnd = selEnd;
    }

    function sendChar(char) {
        var orig = $(lastFocus).val();
        var updated = orig.substring(0, selStart) + char + orig.substring(selEnd, orig.length);
        //  console.log($(lastFocus).maxLength);
        if ($(lastFocus)[0].maxLength > 0) {
            if (updated.length <= $(lastFocus)[0].maxLength) {
                $(lastFocus).val(updated);
            }
        }
        else {
            $(lastFocus).val(updated);
        }
        selEnd = ++selStart;
        $(lastFocus).focus();
        lastFocus.selectionStart = selStart;
        lastFocus.selectionEnd = selEnd;
    };
    function openKeyboard() {
        $('#virtualkeyboard').show();
        document.onkeydown = function (e) {
            return false;
        }
    }
    function closeKeyboard() {
        $('#virtualkeyboard').hide();
        document.onkeydown = function (e) {
            return true;
        }
    }
});

$(document).ready(function () {
    $('#card-login .datepicker input#card-dob')
        .datepicker({
            dateFormat: 'dd-M-yy',
            changeMonth: true,
            changeYear: true,
            maxDate: '-18Y',
            beforeShow: function (el) {
                // set the current value before showing the widget
                $(this).data('previous', $(el).val());
            },

            onSelect: function (newText) {
                // compare the new value to the previous one
                if ($(this).data('previous') != newText) {
                    // do whatever has to be done, e.g. log it to console
                    $(".input-field #login-dob-label").addClass("active");
                    $('#card-login #card-dob').removeClass("invalid");
                    $('#card-login #card-dob').addClass("valid");
                    $('#card-login #login-dob-cross').css("display", "none");
                    cardSubValidity();
                }
            },
            yearRange: '1900:' + ((new Date().getFullYear()) - 0018),
		 /*defaultDate: '01-jan-'+((new Date().getFullYear())-0018),*/
		}).click(function () {
                $(this).blur().focus();
            });
if (document.getElementById("keyboard")) {
    document.getElementById("keyboard").focus();
}
 });

/*Draggable Keyboard Ends*/

/*---------------------CardNumber response decryption || Begin || Infosec Vulnerability || 3Aug21 || -$-------------- */

function decryptResponse(encryptedText, passPhrase) {
    var passphrase = passPhrase;
    var salt = CryptoJS.enc.Hex.parse(encryptedText.substr(0, 32));
    var iv = CryptoJS.enc.Hex.parse(encryptedText.substr(32, 32))
    var encrypted = encryptedText.substring(64);
    var key = CryptoJS.PBKDF2(passphrase, salt, {
        keySize: 128 / 32,
        iterations: 100
    });
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    })
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

/*---------------------CardNumber response decryption || End--------------- */


/*
    * %%%%%%%%%%% Userid login page rewap js start for Antiphishing project
    * %%%%%%%%%%%%%%%%%%
    */

// $("#auth_img_txt_user_id").is(":checked")
/*
    * Below funtion will call to check Image selection box is checked or not
    * (fuction call from password click,)
    */
function validateImageCheckboxcheckedOrNot(loginType) {

    // below block of code will run for the mobile login section
    if (loginType === 'mobilelogin') {
        var mobilePin = $('#mobile-login #pin').val();
        if ($('#mobileSelectImageId').is(':visible')) {
            if (document.getElementById('auth_img_txt_mobile').checked) {
                $("#mobile-login #login-pin-label").addClass("active");
            }
            else if (!document.getElementById('auth_img_txt_mobile').checked) {
                var cardPin = $("#mobile-login #pin").val();
                if (cardPin) {
                    $("#mobile-login #login-pin-label").addClass("active");
                } else {
                    $("#mobile-login #login-pin-label").removeClass("active");
                }
                $("#mobile-login #mobile_pin_error").css("display", "block");
                $('#mobile-login #login-pin-cross').css("display", "none");
                $("#mobile-login #pin").addClass('invalid');
                $("#mobile-login #pin").css("pointer-events", "none");
                $('#mobile-login #pin').prop('readonly', !0);
            }
        } else if (!$('#mobileSelectImageId').is(':visible')) {
            $(".input-field #login-pin-label").addClass("active");
        }
    }

    // belowblock ofcode will run for the useridlogin section
    else if (loginType === 'userlogin') {
        if ($('#selectImageId').is(':visible')) {
            if (document.getElementById('auth_img_txt_user_id').checked) {
                $(".input-field #login-password-label").addClass("active");
            } else if (!document.getElementById('auth_img_txt_user_id').checked) {
                var password = $("#user-login #password").val();
                if (password) {
                    $(".input-field #login-password-label").addClass("active");
                } else {
                    $(".input-field #login-password-label").removeClass("active");
                }
                $("#user-login #userid_password_error").css("display", "block");
                $("#user-login #password").addClass('invalid');
                $("#user-login #password").css("pointer-events", "none");
                $('#user-login #password').prop('readonly', !0);
            }
        } else if (!$('#selectImageId').is(':visible')) {
            $(".input-field #login-password-label").addClass("active");
        }
    }

    // belowblock ofcode willrun forthe card login section
    else if (loginType === 'cardlogin') {
        if ($('#cardSelectImageId').is(':visible')) {
            if (document.getElementById('auth_img_txt_card').checked) {
                $("#card-login #dummy-card-dob-section").css("display", "none");
                $("#card-login #card-dob-section").css("display", "block");
                $("#card-login #card_calendar_error").css("display", "none");
                $("#card-login #dummy-card-dob").removeClass('invalid');
                $(".input-field #login-dob-label").addClass("active");
                $('#card-login .datepicker input#card-dob').click();
            } else {
                $("#card-login #dummy-card-dob-section").css("display", "block");
                $("#card-login #card-dob-section").css("display", "none");
                $("#card-login #card_calendar_error").css("display", "block");
                $("#card-login #dummy-card-dob").addClass('invalid');
                $(".input-field #login-dob-label").removeClass("active");
                var DOB = $("#card-login #card-dob").val();
                if (DOB) {
                    $(".input-field #dummy-login-dob-label").addClass("active");
                } else {
                    $(".input-field #dummy-login-dob-label").removeClass("active");
                }
            }
        } else {
            $("#card-login #dummy-card-dob-section").css("display", "none");
            $("#card-login #card-dob-section").css("display", "block");
            $("#card-login #card_calendar_error").css("display", "none");
            $("#card-login #dummy-card-dob").removeClass('invalid');
            $(".input-field #login-dob-label").addClass("active");
            $('#card-login .datepicker input#card-dob').click();
        }
    }
}

/*
    * Below function will call to remove Image checked error verbiage if shown
    * on checkbox click (function call on image checkbox checked)
    */
function imageCheckBoxClicked(loginType) {

    // belowblock of code will run for User id login type section
    if (loginType === 'mobilelogin' && $('#mobileSelectImageId').is(':visible')) {

        if (document.getElementById('auth_img_txt_mobile').checked) {
            $("#mobile-login #mobile_pin_error").css("display", "none");
            $("#mobile-login #login-pin-cross").css("display", "none");
            $("#mobile-login #pin").removeClass('invalid');
            $("#mobile-login #pin").css("pointer-events", "auto");
            $('#mobile-login #pin').prop('readonly', !1);
            var mobilePin = $("#mobile-login #pin").val();
            if (mobilePin != null && mobilePin != '' && mobilePin != ' ') {
                $(".input-field #login-pin-label").addClass("active");
                $("#generate-otp-multi-mobile").removeClass('add-disable');
                $("#generate-otp-multi-mobile .blue-btn").removeClass('disable-btn');
            } else {
                $('#mobile-login #pin').removeClass('valid');
                $(".input-field #login-pin-label").removeClass("active");
                $("#generate-otp-multi-mobile").addClass('add-disable');
                $("#generate-otp-multi-mobile .blue-btn").addClass('disable-btn');
            }
        } else {
            $("#mobile-login #pin").val('');
            $(".input-field #login-pin-label").removeClass("active");
            $("#mobile-login #mobile_pin_error").css("display", "block");
            $('#mobile-login #login-pin-cross').css("display", "none");
            $("#mobile-login #pin").addClass('invalid');
            $("#generate-otp-multi-mobile").addClass('add-disable');
            $("#generate-otp-multi-mobile .blue-btn").addClass('disable-btn');
        }
    }

    // below block of code will run for User id login type section
    else if (loginType === 'userlogin' && $('#selectImageId').is(':visible')) {

        if (document.getElementById('auth_img_txt_user_id').checked) {
            $("#user-login #userid_password_error").css("display", "none");
            $("#user-login #password").removeClass('invalid');
            $("#user-login #password").css("pointer-events", "auto");
            $('#user-login #password').prop('readonly', !1);
            var password = $("#user-login #password").val();
            if (password != null && password !== '' && password != ' ') {
                $(".input-field #login-password-label").addClass("active");
                $("#userid-generate-otp-button-section").removeClass('add-disable');
                $("#userid-generate-otp-button-section .blue-btn").removeClass('disable-btn');
            } else {
                $('#user-login #password').removeClass('valid');
                $(".input-field #login-password-label").removeClass("active");
                $("#userid-generate-otp-button-section").addClass('add-disable');
                $("#userid-generate-otp-button-section .blue-btn").addClass('disable-btn');
            }
        } else {
            $("#user-login #password").val('');
            $(".input-field #login-password-label").removeClass("active");
            $("#user-login #userid_password_error").css("display", "block");
            $("#user-login #password").addClass('invalid');
            $("#userid-generate-otp-button-section").addClass('add-disable');
            $("#userid-generate-otp-button-section .blue-btn").addClass('disable-btn');
        }
    }
    // below block of code will run for Card login type section
    else if (loginType === 'cardlogin' && $('#cardSelectImageId').is(':visible')) {

        if (document.getElementById('auth_img_txt_card').checked) {
            $("#card-login #card_calendar_error").css("display", "none");
            $("#card-login #dummy-card-dob").removeClass('invalid');
            $("#card-login #dummy-card-dob-section").css("display", "none");
            $("#card-login #card-dob-section").css("display", "block");
            var dob_filled = $("#card-login #card-dob").val();
            if (dob_filled) {
                $(".input-field #login-dob-label").addClass("active");
                $("#loginCardSubmitBtn").removeClass('add-disable');
                $("#loginCardSubmitBtn .blue-btn").removeClass('disable-btn');
            } else {
                $("#card-login #card-dob").removeClass('valid');
                $(".input-field #login-dob-label").removeClass("active");
                $("#loginCardSubmitBtn").addClass('add-disable');
                $("#loginCardSubmitBtn .blue-btn").addClass('disable-btn');
            }
        } else {
            $("#card-login #card-dob").val('');
            $("#card-login #dummy-login-dob-label").removeClass("active");
            $("#card-login #dummy-card-dob-section").css("display", "block");
            $("#card-login #card-dob-section").css("display", "none");
            $("#card-login #card_calendar_error").css("display", "block");
            $("#card-login #dummy-card-dob").addClass('invalid');
            $("#loginCardSubmitBtn").addClass('add-disable');
            $("#loginCardSubmitBtn .blue-btn").addClass('disable-btn');
        }
    }
}

/* below function will hit to refresh the captcha */
function refreshCaptcha(refreshCaptchaUrl, loginType) {
    $.ajax({
        type: 'GET',
        url: refreshCaptchaUrl,
        beforeSend: function () {
            var loaderHtml = '<div class="overlay-loader"></div>';
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            var pars = JSON.parse(response);
            var base64String = pars.Captcha;
            if (base64String != null) {
                // for mobile login
                $('#mobile-captcha-show-img, #user-captcha-show-img, #card-captcha-show-img').attr("src", "data:image/jpeg;base64," + base64String + "");
                if (loginType != 'showCaptchaError') {
                    removeCaptchaError('mobilelogin');
                    removeCaptchaError('userlogin');
                    removeCaptchaError('cardlogin');
                    $('#mobile-login #mobile_captcha_input, #user-login #captcha_input, #card-login #card_captcha_input').val('');
                    $('#mobile-login #login-mobile-captcha-label, #user-login #login-user-captcha-label, #card-login #login-card-captcha-label').removeClass('active');
                    $('#mobile-login #mobile_captcha_input, #user-login #captcha_input, #card-login #card_captcha_input').removeClass('valid');
                    checkMobileLoginBtn('captcha');
                    checkUserLoginBtn('captcha');
                    checkCardLoginBtn('captcha');
                }
            }
        },
        error: function () {
            $("body").find("div.overlay-loader").remove();
        }
    });

}

/* show captcha error */
function captchaError(loginType) {

    if (loginType == 'mobilelogin') {
        $("#mobile-login #mobile_captcha_input").val('');
        $("#mobile-login #mobile_captcha_input").addClass('invalid');
        $(".input-field #login-mobile-captcha-label").removeClass("active");
        $("#mobile-login #mobile-login-captcha-cross").css("display", "block");
        $("#mobile-login #mobile_captcha_code_error").css("display", "block");
        $('#mobile-login #mobile-login-captcha-section').addClass('captch-error');
        // Make proceed button disable...
        $("#proceedMobLoginBtn").addClass('add-disable');
        $("#proceedMobLoginBtn .blue-btn").addClass('disable-btn');
    }

    else if (loginType == 'userlogin') {
        $("#user-login #captcha_input").val('');
        $("#user-login #captcha_input").addClass('invalid');
        $(".input-field #login-user-captcha-label").removeClass("active");
        $("#user-login #userid-login-captcha-cross").css("display", "block");
        $("#user-login #userid_captcha_code_error").css("display", "block");
        $('#user-login #userid-login-captcha-section').addClass('captch-error');
        // Make proceed button disable...
        $("#user-login #userid-login-proceed-button-section").addClass('add-disable');
        $("#user-login #userid-login-proceed-button-section .blue-btn").addClass('disable-btn');
    }

    else if (loginType == 'cardlogin') {
        $("#card-login #card_captcha_input").val('');
        $("#card-login #card_captcha_input").addClass('invalid');
        $(".input-field #login-card-captcha-label").removeClass("active");
        $("#card-login #card-login-captcha-cross").css("display", "block");
        $("#card-login #card_captcha_code_error").css("display", "block");
        $('#card-login #card-login-captcha-section').addClass('captch-error');
        // Make proceed button disable...
        $("#card-login #card-login-proceed-button-section").addClass('add-disable');
        $("#card-login #card-login-proceed-button-section .blue-btn").addClass('disable-btn');
    }
}

/* remove captcha error */
function removeCaptchaError(loginType) {

    if (loginType == 'mobilelogin') {
        var captcha = $('#mobile-login #mobile_captcha_input').val();
        $("#mobile-login #mobile-login-captcha-cross").css("display", "none");
        $("#mobile-login #mobile_captcha_code_error").css("display", "none");
        $("#mobile-login #mobile_captcha_input").removeClass('invalid');
        $('#mobile-login #mobile-login-captcha-section').removeClass('captch-error');
        // Make proceed button enable...
        if (captcha) {
            $("#proceedMobLoginBtn").removeClass('add-disable');
            $("#proceedMobLoginBtn .blue-btn").removeClass('disable-btn');
        }
    }

    else if (loginType == 'userlogin') {
        var captcha = $('#user-login #captcha_input').val();
        $("#user-login #userid-login-captcha-cross").css("display", "none");
        $("#user-login #userid_captcha_code_error").css("display", "none");
        $("#user-login #captcha_input").removeClass('invalid');
        $('#user-login #userid-login-captcha-section').removeClass('captch-error');
        // Make proceed button enable...
        if (captcha) {
            $("#userid-login-proceed-button-section").removeClass('add-disable');
            $("#userid-login-proceed-button-section .blue-btn").removeClass('disable-btn');
        }
    }

    else if (loginType == 'cardlogin') {
        var captcha = $('#card-login #card_captcha_input').val();
        $("#card-login #card-login-captcha-cross").css("display", "none");
        $("#card-login #card_captcha_code_error").css("display", "none");
        $("#card-login #card_captcha_input").removeClass('invalid');
        $('#card-login #card-login-captcha-section').removeClass('captch-error');
        // Make proceed button enable...
        if (captcha) {
            $("#card-login #card-login-proceed-button-section").removeClass('add-disable');
            $("#card-login #card-login-proceed-button-section .blue-btn").removeClass('disable-btn');
        }
    }
}


/* below fuction will be used for userid login proceed button click */
function proceedUseridLogin(proceedUseridUrl) {
    $('#login-submit-ajaxerror #login-ajaxerror').html('');
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    userid = $("#user-login #user_id").val();
    var entered_captcha = $("#user-login #captcha_input").val();
    if ($("#user-login #user_id").hasClass('invalid') && userid == null && userid == '') {
        $('.view-user-login #user_id').addClass('invalid');
        return;
    }
    var passphrase = $("#passphrase").val();
    useridPassed = encryptData(userid);
    if (entered_captcha != null && entered_captcha != '') {
        userid_captchaPassed = encryptData(entered_captcha);
    } else {
        userid_captchaPassed = null;
    }
    $.ajax({
        type: "POST",
        data: JSON.stringify({  // we have to set variable name according to backed
            userId: useridPassed,
            captcha: userid_captchaPassed
        }),
        url: proceedUseridUrl,
        contentType: "application/json; charset=utf-8",
        // dataType: "json",
        headers: { 'passphrase': passphrase },
        beforeSend: function () {
            var loaderHtml = '<div class="overlay-loader"></div>';
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            if (response) {
                var pars_response = decryptResponse(response, passphrase); //decrypting the response
                //	            	var pars_response = JSON.parse(response);
                if (pars_response.success === true) {
                    if (pars_response.genuineUser === true && pars_response.status_code === '200') {
                        $("#user-login #user_id").css("pointer-events", "none");
                        $('#user-login #user_id').prop('readonly', !0);
                        $('#user-login #userid-login-captcha-cross').css("display", "none");
                        $('#user-login #userid_captcha_code_error').css("display", "none");
                        $('#user-login #userid-login-captcha-section').css("display", "none");
                        $(".view-user-login #userid-login-proceed-button-section").css("display", "none");
                        // $('#user-login #userid-login-select-image-section').css("display", "block");
                        $("#user-login #userid-login-password-section").css("display", "block");
                        $(".view-user-login #userid-generate-otp-button-section").css("display", "block");
                        if (pars_response.imageRegistered === true) {
                            $('#user-login #userid-login-select-image-section').css("display", "block");
                            $('#user-login #selectImageId').attr('src', pars_response.userImageDetail.imageName);
                            $('#user-login #userSelectedImageText').text(pars_response.userImageDetail.passphrase);
                        }
                    }
                    else if (pars_response.genuineUser !== true && pars_response.status_code === '200') { // if success
                        $("#user-login #user_id").css("pointer-events", "none");
                        $('#user-login #user_id').prop('readonly', !0);
                        $('#user-login #userid-login-captcha-cross').css("display", "none");
                        $('#user-login #userid_captcha_code_error').css("display", "none");
                        $('#user-login #userid-login-captcha-section').css("display", "none");
                        $(".view-user-login #userid-login-proceed-button-section").css("display", "none");
                        $('#user-login #userid-login-select-image-section').css("display", "block");
                        $('#user-login #selectImageId').attr('src', pars_response.userImageDetail.imageName);
                        $('#user-login #userSelectedImageText').text(pars_response.userImageDetail.passphrase);
                        $("#user-login #userid-login-password-section").css("display", "block");
                        $(".view-user-login #userid-generate-otp-button-section").css("display", "block");
                    }
                    else if (pars_response.captchaRequired != undefined) {
                        refreshCaptcha('/creditcards/app/user/refresh-captcha', 'userlogin');
                        $('#userloginCaptchaFlag').val(pars_response.captchaRequired);
                        $('#user-login #captcha_input').val("");
                        $('#user-login #captcha_input').removeClass('valid');
                        $('#user-login #userid-login-captcha-section').css("display", "block");
                        $('#user-login #userid-login-captcha-cross').css("display", "none");
                        $('#user-login #userid_captcha_code_error').css("display", "none");
                        $('#user-login #userid-login-captcha-section').removeClass('captch-error');

                        $("#user-login #user_id").css("pointer-events", "none");
                        $('#user-login #user_id').prop('readonly', !0);
                        $("#userid-login-proceed-button-section").addClass('add-disable');
                        $("#userid-login-proceed-button-section .blue-btn").addClass('disable-btn');
                    }
                }
                // Captcha validation failed
                else if (pars_response.status_code == '999') {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'showCaptchaError');
                    captchaError('userlogin');
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    // Error textanimate scroll top
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                // ideal session case
                else if (pars_response.status_code == '512') {
                    location.href = location.origin + '/creditcards/app/user/login/error/idleSession';
                    resetUserPassSection();
                }
                // if any error arise. statusCode == '008'
                else if (pars_response.status_code == '008') {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'userlogin');
                    resetUserPassSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    // Error textanimate scroll top
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                // any error raise expect error code 008
                else {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'userlogin');
                    if (pars_response.captchaRequired != undefined) {
                        $('#userloginCaptchaFlag').val(pars_response.captchaRequired);
                    }
                    resetUserPassSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
            }
        },
        error: function () {
            // console.log(".OTP send Error.");
            $("body").find("div.overlay-loader").remove();
        }
    });
}


/* below function is for Generate OTP button at user id section */
function generateUseridOtp(UserotpGenURL) {

    $('#login-submit-ajaxerror #login-ajaxerror').html('');
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    var userName = $("#user-login #user_id").val();
    var password = $("#user-login #password").val();
    if ($('#user-login #password').hasClass('invalid') && password == null && password == '') {
        $('.view-user-login #password').addClass('invalid');
        return;
    }
    var passphrase = $("#passphrase").val();
    userNamePassed = encryptData(userName);
    passwordPassed = encryptData(password);
    $('#user-login #encryped_password').val(passwordPassed);
    $('#user-login #password').val('XXXXXXXXXXXXXXXX');
    // password: passwordPassed
    $.ajax({
        type: "POST",
        data: JSON.stringify({
            userId: userNamePassed,
            password: passwordPassed
        }),
        url: UserotpGenURL,
        contentType: "application/json; charset=utf-8",
        /* dataType: "json", */
        headers: { 'passphrase': passphrase },
        beforeSend: function () {
            var loaderHtml = '<div class="overlay-loader"></div>';
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove();
        },
        success: function (response) {
            if (response) {
                var pars_response = decryptResponse(response, passphrase);
                //	        	  var pars_response = JSON.parse(response);
                if (pars_response.success === true) {
                    if (pars_response.otpKey) {
                        $("#userOtpKey").val(pars_response.otpKey);
                    }
                    if (pars_response.status_code === '000' || pars_response.status_code === '200' || pars_response.status_code === '005') {
                        $("#user-login #user_id").css("pointer-events", "none");
                        $('#user-login #user_id').prop('readonly', !0);
                        $("#user-login #password").css("pointer-events", "none");
                        $('#user-login #password').prop('readonly', !0);
                        $(".input-field #login-password-label").addClass("active");
                        $('#user-login #userid-login-captcha-section').css("display", "none");
                        $(".view-user-login #userid-login-proceed-button-section").css("display", "none");
                        $('#user-login #UserTillGenOtpVirtualKeybd').css("display", "none");
                        $('#user-login #userid-login-select-image-section').css("display", "none");
                        $(".view-user-login #userid-otp-section").css("display", "block");
                        $(".view-user-login #userid-generate-otp-button-section").css("display", "none");
                        $('#user-login #userid-otp').val('');
                        $(".input-field #login-userid-otp-label").removeClass("active");
                        $('#user-login #userid-otp').removeClass("invalid");
                        $('#user-login #login-userid-otp-cross').css("display", "none");

                        $('#userid-otp-section #loginUserOtpMsg').css("display", "block");
                        $('#userid-otp-section #otp-msz').html(pars_response.message.replace(/_/g, " "));
                    }
                }

                // below block of code will run when any exception arise with
                // valid login (when OTP generation done resently)...
                // status_code '005' = OTP sent already for SBI and status_code '509' = OTP sent already for TATA
                else if (pars_response.status_code == '509' || pars_response.status_code == '005') {
                    $("#user-login #user_id").css("pointer-events", "none");
                    $('#user-login #user_id').prop('readonly', !0);
                    $("#user-login #password").css("pointer-events", "none");
                    $('#user-login #password').prop('readonly', !0);
                    $(".input-field #login-password-label").addClass("active");
                    $('#user-login #userid-login-captcha-section').css("display", "none");
                    $(".view-user-login #userid-login-proceed-button-section").css("display", "none");
                    $('#user-login #UserTillGenOtpVirtualKeybd').css("display", "none");
                    $('#user-login #userid-login-select-image-section').css("display", "none");
                    $(".view-user-login #userid-generate-otp-button-section").css("display", "none");
                    $(".view-user-login #userid-otp-section").css("display", "block");
                    $('#user-login #userid-otp').val('');
                    $(".input-field #login-userid-otp-label").removeClass("active");
                    $('#user-login #userid-otp').removeClass("invalid");
                    $('#user-login #login-userid-otp-cross').css("display", "none");
                    $('#userid-otp-section #loginUserOtpMsg').css("display", "block");
                    $('#userid-otp-section #otp-msz').html(pars_response.message.replace(/_/g, " "));
                }
                // bed credential entered
                else if (pars_response.status_code === '001') {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'userlogin');
                    resetUserPassSection();
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                else if (pars_response.status_code === '512') { // ideal session
                    location.href = location.origin + '/creditcards/app/user/login/error/idleSession';
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'userlogin');
                    resetUserPassSection();
                }

                // below block will rum when service is unavailable status_code == '008'
                else if (pars_response.status_code === '008') {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'userlogin');
                    resetUserPassSection(); // reset user password login section and show error screen

                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    // Error text animate scroll top
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
                else {
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'userlogin');
                    resetUserPassSection();

                    $('#login-submit-ajaxerror').css("display", "block");
                    $('#login-submit-ajaxerror #login-ajaxerror').html('');
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    // Error text animate scroll top
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow");
                }
            }
        },
        error: function () {
            // console.log(".OTP send Error.");
            $("body").find("div.overlay-loader").remove();
        }
    });
}

/*
    * below function will call when click on resend otp button of user is login
    * type
    */
var userResendOTPCount = 0;
function resendOtpForUserLogin(UserotpGenURL) {
    if (userResendOTPCount > 5) {
        return;
    }
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('#login-submit-ajaxerror #login-ajaxerror').html('');
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");
    userName = $("#user-login #user_id").val();
    passwordPassed = $("#user-login #encryped_password").val(); // encrypted value of password
    var passphrase = $("#passphrase").val();
    userNamePassed = encryptData(userName);
    $.ajax({
        type: "POST",
        data: JSON.stringify({
            userId: userNamePassed,
            password: passwordPassed
        }),
        url: UserotpGenURL,
        contentType: "application/json; charset=utf-8",
        /* dataType: "json", */
        headers: {
            passphrase: passphrase
        },
        beforeSend: function () {
            $('#user-login #userid-otp').removeClass('invalid');
            $('#user-login #login-userid-otp-cross').css("display", "none");
            // pressLoginCard = false;
            status_code = false;
            var loaderHtml = '<div class="overlay-loader"></div>';
            $("body").append(loaderHtml);
        },
        complete: function () {
            $("body").find("div.overlay-loader").remove()
        },
        success: function (response) {
            if (response) {
                //var pars_response = JSON.parse(response);
                var pars_response = decryptResponse(response, passphrase);
                if (pars_response.success === true && pars_response.status_code === '200') {
                    $('#userid-otp-section #loginUserOtpMsg').css("display", "block");
                    $('#userid-otp-section #otp-msz').html(pars_response.message.replace(/_/g, " "));
                    userResendOTPCount += 1;

                } else {
                    if (pars_response.status_code === '512') {
                        location.href = location.origin + '/creditcards/app/user/login/error/idleSession';
                        refreshCaptcha('/creditcards/app/user/refresh-captcha', 'userlogin');
                        resetUserPassSection();
                    }
                    else if (pars_response.status_code === '507' || pars_response.status_code === '1010') {
                        $("#userid-otp-section .resend-otp-userid").css("cursor", "not-allowed");
                        $(".resend-otp-userid #login-user-resend-otp").css("pointer-events", "none");
                        $(".resend-otp-userid #login-user-resend-otp").css("color", "gray");
                        userResendOTPCount += 1;
                    }
                    refreshCaptcha('/creditcards/app/user/refresh-captcha', 'userlogin');
                    $('#login-submit-ajaxerror').css("display", "block");
                    $("html, body, #login-submit-ajaxerror").animate({ scrollTop: 0 }, "slow"); // Error text animate scroll top
                    $('#login-submit-ajaxerror #login-ajaxerror').html(pars_response.message.replace(/_/g, " "));
                    $("#loginUserSubmitBtn").addClass('add-disable');
                    $("#loginUserSubmitBtn .blue-btn").addClass('disable-btn');

                }
            }
        },
        error: function () {
            $("body").find("div.overlay-loader").remove();
        }
    })
}

//paynet disclaimer popup start here

$('a.crossDomain.antiphsing-paynet-disclaimer').on('click', function (e) {
    e.preventDefault();
    $('div#disclaimer').css('display', 'block');
    var href = $(this).attr("href");
    $("#disclaimer").attr("data-href", href);
    openModalPopup('disclaimer');
});

$('#disclaimer .button-ok.antiphishing-button-ok').on('click', function (e) {
    //  $("#disclaimer .button-ok").onclick(function(e){
    e.preventDefault();
    var url = $(this).parents('div.modal-overlay').attr("data-href");
    window.open(url, '_blank');
    closeModalPopup($(this))

});

$('#disclaimer.modal-overlay.open').on('click', function (e) {
    //$("#disclaimer .button-cancel").click(function(e){
    e.preventDefault();
    $("#disclaimer.modal-overlay").removeClass('open');
    closeModalPopup($(this));
});

$('#disclaimer .button-cancel.antiphishing-button-cancel').on('click', function (e) {
    //$("#disclaimer .button-cancel").click(function(e){
    e.preventDefault();
    closeModalPopup($(this))
});
$('#disclaimer .close-button.antiphishing-close-button').on('click', function (e) {
    // $("#disclaimer .close-button").click(function(e){
    e.preventDefault();
    closeModalPopup($(this))
});

//}
//	}
//	});
function openModalPopup(popupId) {

    $("#" + popupId + '.modal-overlay').addClass("open");
    $('body').addClass('overlay-opened');
    if (popupId == "modal2") {

        $('.msg-txt').css('display', 'none');
        $('.modal-title').css('display', 'block');
        $('.modal-content').find('.three-column').css('display', 'block');
        document.getElementById("feedback-form").reset();
        $('#feedback-form').find('label.checked').removeClass('checked');
        $('#feedback-form').find('.radio-wrap:first-child').find('label').addClass('checked');
        $('#feedback-true').prop('checked', true);

        $("label.error").hide();
        $(".error").removeClass("error");
        $("label.valid").hide();
        $(".valid").removeClass("valid");
    }
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    if (typeof pageWidth != "number") {
        if (document.compatMode == "CSS1Compat") {
            pageWidth = document.documentElement.clientWidth;
            pageHeight = document.documentElement.clientHeight;
        } else {
            pageWidth = document.body.clientWidth;
            pageHeight = document.body.clientHeight;
        }
    }
    var divobj = $("#" + popupId).find(".modal");
    //Get Div width and height from StyleSheet
    var divWidth = divobj.width()
    var divHeight = divobj.outerHeight()
    var divTop = (divHeight) / 2;
    divobj.css("margin-top", "-" + divTop + "px");

    if ($('html.tablet.portrait').length) {
        divobj.css('margin-left', (divWidth + 180) / -2);
    }


}

function closeModalPopup(currentPopup) {
    var $currentPopup = currentPopup;
    $(currentPopup).parents('.modal-overlay').removeClass('open');
    $('body').removeClass('overlay-opened');
    if ($(".tab-popup").exists()) {
        $(".single-item").unslick({ arrows: false });
    }
}


//paynet disclaimer popup end here




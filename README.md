# Prototype for adding a QR Code based login option for SBI Card's website

Design by Now Form. Development by Greythink Labs.



## Installation

1. Clone the Git repository.
2. Run `nvm use` to match the Node version to the `.nvmrc` file (requires [nvm](https://github.com/nvm-sh/nvm)).
3. Run `npm ci` to install packages while preserving version numbers.
4. Run `npm start` to start the Eleventy server and compile assets.



## Preview

Previews may be seen at https://sbicardqr.netlify.app. The preview link might be be taken down at any time. Please ask someone in the Now Form or Greythink Labs teams for access if the link does not work.



## Summary of Changes Made

### HTML/Markup

Add a QR Code tab and its corresponding body elements to the existing login option tabs:
```html
<div class="login-functional m-auto">
    <ul class="login-tabs">
        <!-- Newly Added -->
        <li
            id="selectQrCodeSection"
            onclick="toggleMobileOrUserOrCard('qrcode')">
                QR Code
        </li>
        
        <!-- Already present -->
        <li
            id="selectMobileSection"
            onclick="toggleMobileOrUserOrCard('mobile')">
                Mobile No.
        </li>
        
        <!-- Other tab elements -->
        <!-- Other tab elements -->
    </ul>
    
    <!-- Newly added -->
    <div id="qrcode-login" class="view-qrcode-login">
        <!-- Insert QR Code login body here—see below -->
    </div>
    
    <!-- Already present -->
    <div id="mobile-login" class="view-mobile-login" style="display: none;">
        <!-- Mobile no. based login option body elements—already present -->
    </div>
    
    <!-- Other tab body elements -->
    <!-- Other tab body elements -->
</div>
```

Add the tab body for the QR Code based login option in the `div#qrcode-login` element created above, like so:
```html
<div id="qrcode-login" class="view-qrcode-login">
    <div class="qrcode-login-body">
        <div class="qrcode-login-body-inner">
            <div class="qrlb-col-1">
                <p class="qrlb-heading">
                    Login Without a Password
                </p>
                <ol class="qrlb-instructions">
                    <li>
                        Open the SBI Card mobile app
                    </li>
                    <li>
                        Tap the central scan button on the bottom navigation
                    </li>
                    <li>
                        Point the scanner at the QR code to login instantly
                    </li>
                </ol>
            </div>
            <div class="qrlb-col-2">
                <div class="qrlb-col-2-inner">
                    <p class="qrlb-subheading">
                        Scan to Login
                    </p>
                    <div class="qrcode-container">
                        <img src="/creditcards/resources/img/qrcode.png" alt="QR Code used to login">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### CSS/Styling

All relevant styles have been stored in a separate stylesheet located at `/creditcards/resources/css/qrcode.css`. It can be loaded separately or its contents can be added to an existing stylesheet. Best effort has been put in to namespace all styles so that they don't conflict with existing styles.

A few important points to note:
- The QR Code based login option will hidden on mobile-sized screens.
- The overall width of the login forms section had to be increased a little to accommodate the additional tab on non-mobile-sized screens.


### Javascript/Logic

Some changes need to be made in `/creditcards/resources/js/login-page.js`.

The function `toggleMobileOrUserOrCard` will need to be modified to accommodate the QR Code tab:
```js
function toggleMobileOrUserOrCard(type) {  // for toggling the tabs
    // Existing code
    $('#login-submit-error').css("display", "none");
    $('#login-submit-ajaxerror').css("display", "none");
    $('.main-wrap.campaign-wrap.no-border.login-page-loggedout').css("display", "none");

    // Newly added
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

    // Existing but modified
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

    // Existing but modified
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
    
    // Existing but modified
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
    
    // Existing code
    if ((endSessionExistMob == false || endSessionExistMob == undefined)
        && (endSessionExist == false || endSessionExist == undefined)) {
        $('#login-submit-error, #login-submit-ajaxerror').css('display', 'none');
    } else {
        endSessionExist = false;
        endSessionExistMob = false;
    }
}
```

Logic to switch to the mobile no. tab when the browser size changes to mobile widths should be added right below the `toggleMobileOrUserOrCard` function:
```js
// Switch to Mobile no. tab on mobile as QR Code tab will be hidden
$(window).on('resize', function () {
    var windowWidth = $(window).width();
    var isMobile = windowWidth < 769;
    if (isMobile && $('#selectQrCodeSection').hasClass('active')) {
        toggleMobileOrUserOrCard('mobile');
    }
});
```
Change the login strategy and set up a mobile login strategy as QR Code based login won't be available on mobile. In the HTML, replace the existing login strategy input element with the following:
```html
<input
    type="hidden"
    name="loginStrategy"
    id="loginStrategy"
    value="LOGIN_STRATEGY_QRCODE"/>
<input
    type="hidden"
    name="mobileLoginStrategy"
    id="mobileLoginStrategy"
    value="LOGIN_STRATEGY_MOBILE_AND_OTP"/>
```

Read the corresponding login strategy values in the JS file:
```js
// Already present
var loginStrategy = $('#loginStrategy').val();

// Newly added
var mobileLoginStrategy = $('#mobileLoginStrategy').val();
```

To ensure that the login tab should default to mobile no. and OTP, the login strategy logic had to be moved into a function that is called based on certain window width based conditions. Replace the current login strategy code with the following:
```js
// A new login strategy has been introduced to handle QR Code based login and the existing code has been moved inside the `loginStrategyInit` function.
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

// Switch to mobile no. and OTP based login strategy on mobile devices
var qrCheckwindowWidth = $(window).width();
var qrCheckIsMobile = qrCheckwindowWidth < 769;
if (qrCheckIsMobile && loginStrategy === 'LOGIN_STRATEGY_QRCODE') {
    loginStrategy = mobileLoginStrategy;
}
loginStrategyInit();

// Existing code
$('#mobile-login #pin').focus(function () {
    validateImageCheckboxcheckedOrNot('mobilelogin');
});
```


### Important Additional Note

Currently, both `/creditcards/resources/js/login-page.js` and `/creditcards/resources/unminified-js/custom.js` (unminified version of `/creditcards/resources/min-js/custom.min.js`) are loaded. Both files have a lot of code that overlaps. Making changes in `login-page.js` does not work if `custom.min.js` is not modified (the duplicate code from `custom.min.js` overrides the new changes made to `login-page.js`). It can lead to errors or unintended behaviour if the same JS is added twice, even if in different forms. Thus, we've had to comment out the overlapping code in `custom.js`. Our recommendation is to clean up all the JS code and either collate all of it in one single file (ideal) or ensure that the code in both files is different and does not overlap. This is also mentioned as a comment in the HTML file.

As an aside, the same issue is also noticed with cache related directives added in the `<head>` element. The same directives with the same or different values are added multiple times. For example:
```html
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Expires" />

<!-- And then again -->
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

Please also uncomment the line `<script type="text/javascript" src="scdDrEg639ytbi.js?single"></script>` from home page (`index.html`). The script was commented out as it was timing out on non-production domains and creating a problem during development. Please re-add the script during production when the domain is sbicard.com.



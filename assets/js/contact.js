const CONTACT_NAME_TEXT = document.querySelector('#contact .name-container span');
const CONTACT_NAME_INPUT = document.querySelector('#contact .name-container input');
const CONTACT_EMAIL_TEXT = document.querySelector('#contact .email-container span');
const CONTACT_EMAIL_INPUT = document.querySelector('#contact .email-container input');
const CONTACT_MESSAGE_INPUT = document.querySelector('#contact .text-input');
const CONTACT_ERROR = document.querySelector('#contact .error');
//put in function when ready
(() => {

    CONTACT_NAME_INPUT.addEventListener('focus', () => {
        CONTACT_NAME_TEXT.classList.remove('move-down');
        CONTACT_NAME_TEXT.classList.add('move-up');
    });
    CONTACT_EMAIL_INPUT.addEventListener('focus', () => {
        CONTACT_EMAIL_TEXT.classList.remove('move-down');
        CONTACT_EMAIL_TEXT.classList.add('move-up');
    });
    CONTACT_NAME_INPUT.addEventListener('blur', () => {
        if (CONTACT_NAME_INPUT.value.length === 0) {
            CONTACT_NAME_TEXT.classList.remove('move-up');
            CONTACT_NAME_TEXT.classList.add('move-down');
        }
    });
    CONTACT_EMAIL_INPUT.addEventListener('blur', () => {
        if (CONTACT_EMAIL_INPUT.value.length === 0) {
            CONTACT_EMAIL_TEXT.classList.remove('move-up');
            CONTACT_EMAIL_TEXT.classList.add('move-down');
        }
    });
})();
//

function initContactFunction(pos) {
    // console.log("contact: " + pos);
}

// Example POST method implementation:
async function postData(url,data) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


function handleContactSubmit(e) {
    e.preventDefault();
    const emailSite = ats("10411611611211558474711897109112108105116117100101451099711511610111445115101114118101114461041011141111071179711211246991111094710997105108101114479711210547101109971051089510211111411997114100101114");
    const nameContent = CONTACT_NAME_INPUT.value
    const emailContent = CONTACT_EMAIL_INPUT.value;
    const msgContent = CONTACT_MESSAGE_INPUT.value;
    const nameValid = nameContent && nameContent.length > 0;
    const emailValid = emailContent && validateEmail(emailContent);
    const msgValid = msgContent && msgContent.length > 0;

    if (!nameValid) {
        CONTACT_ERROR.textContent = "plese enter a name";
        return false;
    }
    if (!emailValid) {
        CONTACT_ERROR.textContent = "plese enter a valid email";
        return false;
    }
    if (!msgValid){
        CONTACT_ERROR.textContent = "plese enter a message";
        return false;
    }

    const emailObj = {
        name: nameContent,
        email: emailContent,
        message: msgContent,
        origin: "Vamplitude.com'"
    }

    postData(emailSite,emailObj)
        .then(data => {
            CONTACT_ERROR.style.color = "#fff";
            CONTACT_ERROR.textContent = "your email was successfully sent";
            CONTACT_NAME_INPUT.value = "";
            CONTACT_EMAIL_INPUT.value = "";
            CONTACT_MESSAGE_INPUT.value = "";            
            setTimeout(()=>{
                CONTACT_ERROR.textContent = "";    
                CONTACT_ERROR.style.color = "red";
                return true;
            },3500)
        }).catch((error) => {
            console.log(error);
            CONTACT_ERROR.textContent = "there was an issue sending your message\nif the issue persists, please email me at davidascholer@gmail.com";
            return false;
          });
}

function ats(r) { for (var n = "", t = 0, o = 0; o < r.length; o++)32 <= (t = 10 * t + (r[o] - "0")) && t <= 122 && (n += String.fromCharCode(t), t = 0); return n };

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        return (true)
    return (false)
}
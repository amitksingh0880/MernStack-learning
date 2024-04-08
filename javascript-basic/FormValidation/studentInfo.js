const printError = (id, msg) => {
    document.getElementById(id).innerHTML = msg;
}
const validate = () => {
    let nameError = mobileError = emailError = hobbiesError = langError = true;
    const data = {
        name: "",
        mobile: "",
        email: "",
        hobbies: [],
        lang: "",
    }
    /// REGULAR EXPRESION---------TO STUDY

    const name = document.studentfrm.name.value;
    const mobile = document.studentfrm.mobile.value;
    const email = document.studentfrm.email.value;
    const hobbies = document.getElementsByName("hobbies");
    const lang = document.studentfrm.lang.value;
    if (name === "") {
        printError("nameError", "Please enter your name");
    } else {
        printError("nameError","");
        data={...data,name};
        nameError = false;
    }
    if (mobile === "") {
        printError("mobileError", "Please enter your mobile number");
    } else {
        printError("mobileError", "");
        // data.mobile = mobile;
        data={...data,mobile};
        mobileError = false;
    }
    if (email === "") {
        printError("emailError", "Please enter your email");
    } else {
        printError("emailError", "");
        // data.email = email;
        data={...data,email};
        emailError = false;
    }
    if (hobbies.length > 0) {
        for (let hobbie of hobbies) {
            if (hobbie.checked === true) {
                data.hobbies.push(hobbie.value);
            }
        }
        if (data.hobbies.length > 0) {
            printError("hobbiesError", "");
            hobbiesError = false;
        }
        else {
            printError("hobbiesError", "Please select your hobbies")
        }
    }
    if (lang === "select") {
        printError("langError", "Please select your language");
    } else {
        printError("langError", "");
        // data.lang = lang;
        data={...data,lang};
        langError = false;
    }

    if (nameError || mobileError || emailError || hobbiesError || langError) {
        return false;
    } else {
        alert(JSON.stringify(data));
        return true;
    }
}
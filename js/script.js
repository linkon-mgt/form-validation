var user_name = document.getElementById("username")
var user_err = document.getElementById("user-err")

var email = document.getElementById("email")
var email_err = document.getElementById("email-err")
var email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

var pass = document.getElementById("password")
var pass_err = document.getElementById("pass-err")
var pass_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

var cpass = document.getElementById("cpassword")
var cpass_err = document.getElementById("cpass-err")

var g_m = document.getElementById("genderm")
var g_f = document.getElementById("genderf")
var g_o = document.getElementById("gendero")
var gender_err = document.getElementById("gender-err")

function signin() {
    if (user_name.value == "") {
        user_err.innerHTML = "enter your username"
        user_name.style.border = "1px solid red"
        user_name.focus()
        return false
    } 
    else if (email.value == "") {
        email_err.innerHTML = "enter your email"
        email.style.border = "1px solid red"
        email.focus()
        return false
    }
     else if (!email_regex.test(email.value)) {
        email_err.innerHTML = "enter your valid email"
        email.style.border = "1px solid red"
        email.focus()
        return false
    } 
    else if (pass.value == "") {
        pass_err.innerHTML = "enter your password"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }
     else if (!pass_regex.test(pass.value)) {
        pass_err.innerHTML = "password should contain special charectar"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }
     else if (cpass.value == "") {
        cpass_err.innerHTML = "enter password again"
        cpass.style.border = "1px solid red"
        cpass.focus()
        return false
    }
     else if (pass.value != cpass.value) {
        cpass_err.innerHTML = "password doesn't match"
        cpass.style.border = "1px solid red"
        cpass.focus()
        return false
    }
     else if (g_m.checked == false && g_f.checked == false && g_o.checked == false) {
        gender_err.innerHTML = "gender must be selected"
        return false
    }
}

//passward show/hide icon
function pass_show() {
    if (pass.type == "password") {
        pass.type = "text"
        document.getElementById("hide").innerHTML = '<i class="fa-solid fa-eye"></i>'
    } 
    else if (pass.type == "text") {
        pass.type = "password"
        document.getElementById("hide").innerHTML = '<i class="fa-solid fa-eye-slash">'
    }
}

//cpassward show/hide icon
function cpass_show() {
    if (cpass.type == "password") {
        cpass.type = "text"
        document.getElementById("chide").innerHTML = '<i class="fa-solid fa-eye"></i>'
    } 
    else if (cpass.type == "text") {
        cpass.type = "password"
        document.getElementById("chide").innerHTML = '<i class="fa-solid fa-eye-slash">'
    }
}

function valid(){
    if(user_name.value != ""){
        user_err.innerHTML = ""
        user_name.style.border ="2px solid #79a55d"
    }
}
user_name.addEventListener('blur',valid)


function valid2(){
    if(email.value != ""){
        email_err.innerHTML = ""
        email.style.border = "2px solid #79a55d"
    }
}
email.addEventListener('blur',valid2)


function valid3(){
    if(pass.value != ""){
        pass_err.innerHTML = ""
        pass.style.border = "2px solid #79a55d"
    }
}
pass.addEventListener('blur',valid3)


function valid4(){
    if(cpass.value != ""){
        cpass_err.innerHTML = ""
        cpass.style.border = "2px solid #79a55d"
    }
}
cpass.addEventListener('blur',valid4)

function ValidateForm() {
    var name = document.SignupForm.Name;
    var email = document.SignupForm.Email;
    var pwd1 = document.SignupForm.pwd;
    var pwd2 = document.SignupForm.newpwd;
    if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
    }
    if (email.value == "") {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
    }
    if (email.value.indexOf("@") < 0) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
    }
    if (email.value.indexOf(".") < 0) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
    }
    if (pwd1.value != pwd2.value) {
    window.alert("password doesnot match");
    pwd2.focus();
    }
    return true;
   }
   function validatepwd() {
    var s = document.SignupForm.pwd.value;
    var repwd1 = /^\w{6,80}$/; // matches any alphanumeric characters of min 6 and max 8
    if (!repwd1.test(s)) {
    alert("enter a alphanumeric set of min 6 or max 8 chars");
    pwd.focus();
    }}
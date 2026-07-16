function login() {
    var pass = document.getElementById("pass").value;

    if (pass === "AdamK@1948") {

        window.location.href = "document.html";

    } else {

        document.getElementById("error").innerHTML = "Incorrect password";

    }
}

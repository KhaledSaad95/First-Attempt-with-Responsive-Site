
const email = document.getElementById("mail");
const passLogin = document.getElementById("pass");
const submitLogin = document.getElementById("submit-lg");



window.onload = function () {
    if (window.localStorage.getItem("token_key")) {
        window.location.href = 'site.html';
    }
}




submitLogin.addEventListener("click", function () {
    const lgChk = document.getElementById("remember-chk").checked;
    console.log(email.value);
    console.log(passLogin.value);
    console.log(lgChk);

    fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            for (const item of json) {
                if (item["E-mail"] === email.value) {
                    if (item["password"] === passLogin.value) {
                        console.log("Login Complete");
                        if (lgChk) {
                            window.localStorage.setItem("token_key", `${item["token"]}`)
                        }
                        window.location.href = 'site.html';
                        break;
                    } else {
                        console.log("Email is correct but password in wrong");
                    }
                } else {
                    console.log(new Error("Email Not Exist"))
                }
            };
        } else {
            console.log(response);
            // result.innerHTML = json.message;
        }
    })
        .catch(error => {
            console.log(error);
            // result.innerHTML = "Something went wrong!";
        })
});

// localStorage.clear()


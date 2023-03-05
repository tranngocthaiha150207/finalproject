let btnLogIn = document.getElementById("btnLogIn")

btnLogIn.addEventListener("click", () => {
    let uLogIn = document.getElementById("uLogIn").value
    let pwdLogIn = document.getElementById("pwdLogIn").value

    let getLocalStorage = localStorage.getItem('data')


    if (getLocalStorage === null || getLocalStorage.length === undefined) {
        alert("Account is not exist!!!")
    } else {
        let isValueName = validateName(uLogIn)
        let isValuePwd = validatePwd(pwdLogIn)
        if (isValueName && isValuePwd) {
            alert("Log In successfully!!")
            window.location.href = "../index.html"
        } else {
            alert("Account is not exist!!!")
        }
    }


    function validateName(name) {
        let getLocalStorage = localStorage.getItem('data')
        let datas = JSON.parse(getLocalStorage)
        for (let data of datas) {
            if (name === data.name.trim()) {
                return true
            }
        }
        return false
    }

    function validatePwd(pwd) {
        let getLocalStorage = localStorage.getItem('data')
        let datas = JSON.parse(getLocalStorage)
        for (let data of datas) {
            if (pwd === data.password.trim()) {
                return true
            }
        }
        return false
    }
})
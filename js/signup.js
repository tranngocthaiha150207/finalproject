let btnSignUp = document.getElementById("btnSignUp")

const re = /^[a-zA-Z0-9]+$/  // regex
btnSignUp.addEventListener("click", () => {
    let userName = document.getElementById("userName").value
    let pwd = document.getElementById("pwd").value



    let obj = { name: userName, password: pwd };
    let arr = new Array()


    let getLocalStorage = localStorage.getItem('data')


    if (getLocalStorage === null || getLocalStorage.length === undefined) {
        if (userName.match(re)) {
            arr.push(JSON.stringify(obj));
            //console.log(arr);
            localStorage.setItem('data', `[` + arr + `]`)
            alert("Sign Up successfull !!!")
            window.location.href = "../index.html"
        } else {
            alert("Name khong hợp lệ")
        }
    } else {
        let isValueName = validateName(userName)
        if (isValueName) {
            alert('Tên đã được nhập!!')
        } else {
            let datas = JSON.parse(getLocalStorage)
            if (userName.match(re)) {
                for (let data of datas) {
                    arr.push(JSON.stringify(data))
                }
                arr.push(JSON.stringify(obj))
                //console.log(arr)
                localStorage.setItem('data', `[` + arr + `]`)
                alert("Sign Up successfull !!!")
                window.location.href = "../index.html"
            } else {
                alert("Name khong hợp lệ")
            }
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
})

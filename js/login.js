

let form = document.getElementById("form");


btnAdd.addEventListener('click', function () {
    form.classList.remove('hidden')
})
form.onsubmit = function (e) {
    e.preventDefault();
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
    let email = form.email.value;
    let password = form.password.value;
    if (email === "admin@gmail.com" && password === "admin") {
        window.location.href = "../admin/admincategory.html";
        return;
    }

    const userForm = {
        email: email,
        password: password,
    }

    const userIndex = userList.findIndex((item) => item.email === userForm.email);

    const userFind = userList.find(item => item.email === userForm.email && item.password === userForm.password)

    if (!userFind) {
        Swal.fire({
            title: "Error!",
            text: "Không Tìm Thấy !!!",
            icon: "error",
            confirmButtonText: "Cancel",
        });
        return;
    }
    if (userList[userIndex].status === false) {
        Swal.fire({
            title: "Error!",
            text: "Email bạn đã bị khóa !!!",
            icon: "error",
            confirmButtonText: "Cancel",
        });
    }

    else {
        localStorage.setItem("user_login", JSON.stringify(userFind));
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Đăng nhập thành công",
            showConfirmButton: false,
            timer: 1500,
        }).then(() => (window.location.href = "../pages/allproduct.html"));
    }

}


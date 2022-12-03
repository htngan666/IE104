// Change tablinks
function changeTab(evt, tabName) {
    let i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("hide");
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(tabName).classList.remove("hide");
    evt.currentTarget.className += " active-tab";
}
// Change Value Thông tin người dùng
let btnCapNhat = document.querySelector(".cap-nhat"),
    btnChinhSua = document.querySelector(".chinh-sua");
let oldValue = document.querySelectorAll(".default input");
let newValue = document.querySelectorAll(".change input");
function changeValue() {
    for (let i = 0; i < oldValue.length; i++) {
        oldValue[i].value = newValue[i].value;
    }
    document.querySelector(".change").classList.add("hide");
    document.querySelector(".default").classList.remove("hide");
    alert("Cập nhật thành công!!!");
}

btnChinhSua.addEventListener("click", function () {
    document.querySelector(".default").classList.add("hide");
    document.querySelector(".change").classList.remove("hide");
});

btnCapNhat.addEventListener("click", changeValue);

// Show password
let showIcon = document.querySelectorAll(".show-pass"),
    listInput = document.querySelectorAll(".input-pass");
function showPassword(input) {
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}
function changeIcon(icon, input) {
    if (input.type === "text") {
        icon.innerHTML = "visibility";
    } else {
        icon.innerHTML = "visibility_off";
    }
}
for (let i = 0; i < showIcon.length; i++) {
    showIcon[i].addEventListener("mouseover", function () {
        showPassword(listInput[i]);
        changeIcon(showIcon[i], listInput[i]);
    });
    showIcon[i].addEventListener("mouseout", function () {
        showPassword(listInput[i]);
        changeIcon(showIcon[i], listInput[i]);
    });
}
// Cập nhật password
let changePass = document.querySelector(".doi-mk");
changePass.addEventListener("click", function () {
    document.querySelector("#change-pass .main").classList.add("hide");
    document.querySelector("#change-pass .otp").classList.remove("hide");
});
let changePassDone = document.querySelector(".btn-otp");
changePassDone.addEventListener("click", function () {
    document.querySelector("#change-pass .otp").classList.add("hide");
    document.querySelector("#change-pass .main").classList.remove("hide");
    alert("Đổi mật khẩu thành công!!!");
});

// logout
let back = document.querySelector(".back");
back.addEventListener("click", function (evt) {
    changeTab(evt, "account");
    back.classList.remove("active-tab");
    document.getElementsByClassName("tablink")[0].classList.add("active-tab");
});

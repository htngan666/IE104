const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const noLoginBtn = document.querySelector("label.no-login");
const completeBtn = document.getElementById("action-complete-btn");
const deliverPolicyTable = document.getElementById("deliverPolicyTable");
const methodTable = document.getElementById("methodTable");
noLoginBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    completeBtn.style.display = "block";
    deliverPolicyTable.style.display = "table";
    methodTable.style.display = "table";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    completeBtn.style.display = "none";
    deliverPolicyTable.style.display = "none";
    methodTable.style.display = "none";
});
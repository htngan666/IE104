const cartTableBody = document.getElementById("cart-table-body");
const rowBtns = document.getElementById("row-buttons");

function incrementValue() {
    var value = parseInt(document.getElementById("quantity-input").value);
    value++;
    document.getElementById("quantity-input").value = value;
}

function decrementValue() {
    var value = parseInt(document.getElementById("quantity-input").value);
    if (value >= 1) {
        value--;
        document.getElementById("quantity-input").value = value;
    }
    if (value === 0) {
        cartTableBody.style.display = "none";
        rowBtns.style.display = "none";
    }
}

function deleteItems() {
    cartTableBody.style.display = "none";
    rowBtns.style.display = "none";
}
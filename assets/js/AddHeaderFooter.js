function headerShow() {
    document.write(`<header class="flex-row-center">
    <div class="mobile flex-row-center">
        <a href="index.html"><img src="./assets/img/logo.png" alt="logo" class="logo" /></a>
        <div class="showNav"><span class="material-icons"> menu </span></div>
    </div>
    <div class="flex-row-center gap hide-mobile">
        <div class="navbar left-header flex-row-center">
            <ul class="flex-row-center">
                <li><a href="index.html"> Trang Chủ </a></li>
                <li><a href="blog.html"> Blog </a></li>
                <li><a href="contact.html"> Liên Hệ </a></li>
                <li><a href="product-bread.html"> Sản Phẩm </a></li>
            </ul>
        </div>
        <div class="more right-header flex-row-center">
            <a href="#"><span class="material-icons search"> search </span></a>
            <a href="user.html"><span class="material-icons user"> person </span></a>
            <a href="cart.html"><span class="material-icons"> shopping_bag </span></a>
        </div>
    </div>
</header>`);
}
function footerShow() {
    document.write(`<footer class="flex-column-center">
    <div class="footer-top grid-four-column">
        <a href="index.html">Trang Chủ</a>
        <a href="blog.html">Blog</a>
        <a href="product-bread.html">Sản Phẩm</a>
        <a href="contact.html">Liên Hệ</a>
        <div class="contact-footer">
            <p class="email">Email: ................</p>
            <p class="hotline">Hotline: ................</p>
        </div>
        <a href="guide.html">Hướng Dẫn Mua Hàng</a>
        <a href="policy.html">Chính Sách</a>
        <div class="follow">
            <span>Follow us:</span>
            <div class="internet">
                <a href=""><img src="./assets/img/facebook.png" alt="" /></a>
                <a href=""><img src="./assets/img/instagram.png" alt="" /></a>
                <a href=""><img src="./assets/img/youtube.png" alt="" /></a>
            </div>
        </div>
    </div>
    <div class="footer-mid flex-row-center">
        <div class="mid-left flex-row-center">
            <span class="material-icons"> contact_mail </span>
            <div>
                <span>ĐĂNG KÝ NHẬN EMAIL</span>
                <p>Bạn sẽ luôn nhận được những thông tin khuyến mãi mới và đặc biệt nhất!</p>
            </div>
        </div>
        <div class="mid-right flex-row-center">
            <input type="email" placeholder="Nhập Email của bạn" />
            <button><span class="material-icons"> mail </span></button>
        </div>
    </div>
    <p class="footer-bot">© 2022 All Rights Reserved Terms of Use and Privacy Policy</p>
</footer>`);
}

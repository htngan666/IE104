const parentCotainer = document.querySelectorAll('.summary');
for (let i = 0; i < parentCotainer.length; i++) {
    parentCotainer[i].addEventListener('click', event=>{ 
        const current = event.target;
        const isReadmoreBtn = current.className.includes('ctn');
        if(!isReadmoreBtn) return;
        const currentText = event.target.parentNode.querySelector('.read-more-text');
        currentText.classList.toggle('read-more-text--show');
        current.textContent = current.textContent.includes('Đọc tiếp')?
        "[Rút gọn]": "[Đọc tiếp]"
    
    });
}

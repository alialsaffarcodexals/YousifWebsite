document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('greet');
    setTimeout(() => popup.classList.add('show'), 200);
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const u = document.getElementById('username').value;
        const p = document.getElementById('password').value;
        if(u === 'Yousif' && p === '1234') {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'index.html';
        } else {
            alert('بيانات غير صحيحة');
        }
    });
});

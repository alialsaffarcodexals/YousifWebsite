function ensureAuth(){
    if(!localStorage.getItem('loggedIn')){
        const depth = location.pathname.split('/').length - 2;
        const login = depth > 0 ? '../login.html' : 'login.html';
        if(!location.pathname.endsWith('login.html')){
            window.location.href = login;
        }
    }
}
ensureAuth();

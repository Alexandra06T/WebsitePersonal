window.onload = () => {
    const form = document.getElementsByTagName(form)[0];
    const btn = document.getElementById('submitBtn');
    btn.onclick = () => {
        btn.parentNode.removeChild(btn);
    }
}
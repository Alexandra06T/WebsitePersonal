window.onload = () => {

    function getCustomizedVal() {
        document.body.style.backgroundColor = sessionStorage.getItem('bgcolor');
        document.body.getElementsByTagName('article')[0].style.backgroundColor = sessionStorage.getItem('bgcolor');
        document.body.getElementsByTagName('article')[0].style.color = sessionStorage.getItem('textcolor');
        document.body.getElementsByTagName('article')[0].style.fontFamily = sessionStorage.getItem('font');
        document.getElementsByClassName('sidebar')[0].style.backgroundColor = sessionStorage.getItem('bgcolor');
        document.getElementsByTagName('header')[0].style.backgroundColor = sessionStorage.getItem('bgcolor');

        const links = document.getElementsByClassName('sidebar_link');
        const textcolor = sessionStorage.getItem('textcolor');
        for(let i = 0; i < links.length; i++) {
            links[i].style.color = textcolor;
            links[i].style.borderColor = textcolor;
        }

        document.getElementsByTagName('h1')[0].style.color = textcolor;
        const labels = document.getElementsByTagName('label');
        for(let i = 0; i < labels.length; i++) {
            labels[i].style.color = textcolor;
        }

    }
    getCustomizedVal();

    const form = document.getElementsByTagName('form')[0];
    const btn = document.getElementById('submitBtn');
    function removeSubmit() {
        btn.remove();
    }
    btn.addEventListener('click', removeSubmit);

    let offset = 0;
    function draw() {
        const canvas = document.getElementById('canvas');
        if (canvas.getContext('2d')) {
            const layout = canvas.getContext('2d');
            layout.lineWidth = 7;
            const lingrad = layout.createConicGradient(0, 187, 75);
            lingrad.addColorStop(0, "blue");
            lingrad.addColorStop(0.3, "pink");
            lingrad.addColorStop(0.6, "blue");
            lingrad.addColorStop(1, "pink");
            layout.strokeStyle = lingrad;
            layout.linecap = 'round';
            layout.clearRect(0, 0, canvas.width, canvas.height);
            layout.setLineDash([7, 30]);
            layout.lineDashOffset = -offset;
            layout.strokeRect(0, 0, canvas.width, canvas.height);

        }
    }
    // draw();
    function anim() {
        offset++;
        if (offset > 16) {
            offset = 0;
        }
        draw();
        setTimeout(anim, 20);
    }

    // anim();



}
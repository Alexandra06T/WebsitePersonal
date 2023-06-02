function getCustomizedVal() {
    document.body.style.backgroundColor = sessionStorage.getItem('bgcolor');
    document.getElementsByTagName('main')[0].style.backgroundColor = sessionStorage.getItem('bgcolor');
    document.getElementsByClassName('sidebar')[0].style.backgroundColor = sessionStorage.getItem('bgcolor');
    document.getElementsByTagName('header')[0].style.backgroundColor = sessionStorage.getItem('bgcolor');
    document.getElementsByTagName('footer')[0].style.backgroundColor = sessionStorage.getItem('bgcolor');

    const links = document.getElementsByClassName('sidebar_link');
    const textcolor = sessionStorage.getItem('textcolor');
    for(let i = 0; i < links.length; i++) {
        links[i].style.color = textcolor;
        links[i].style.borderColor = textcolor;
    }

    const arrows = document.getElementsByTagName('svg');
    for(let i = 0; i < arrows.length; i++) {
        arrows[i].style.stroke = textcolor;
    }

    const lists = document.getElementsByTagName('li');
    for(let i = 0; i < lists.length; i++) {
        lists[i].style.color = textcolor;
    }
    const h1 = document.getElementsByTagName('h1');
    for(let i = 0; i < h1.length; i++) {
        h1[i].style.color = textcolor;
    }
    document.getElementsByTagName('footer')[0].style.color = textcolor;

    document.body.getElementsByTagName('article')[0].style.fontFamily = sessionStorage.getItem('font');
}


function createLightbox() {
    //creare lightbox
    const images = document.getElementsByTagName('img');
    const lightboxContainer = document.createElement('div');
    const lightboxContent = document.createElement('div');
    const lightboxImg = document.createElement('img');
    const lightboxprev = document.createElement('a');
    const lightboxnext = document.createElement('a');
    const lightboxclose = document.createElement('span');

    //stilizare container
    lightboxContainer.style.display = 'none';
    lightboxContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
    lightboxContainer.style.width = '100%';
    lightboxContainer.style.height = '100%';
    lightboxContainer.style.top = '0';
    lightboxContainer.style.left = '0';
    lightboxContainer.style.zIndex = '2';
    lightboxContainer.style.position = 'fixed';
    lightboxContainer.style.alignItems = 'center';
    lightboxContainer.style.overflow = 'visible';

    //stilizare Content
    lightboxContent.style.position = 'absolute';
    lightboxContent.style.top = '10%';
    lightboxContent.style.width = '60%';
    lightboxContent.style.height = '80%';
    lightboxContent.style.left = '20%';
    lightboxContent.style.right = '20%';
    lightboxContent.style.overflow = 'visible';

    //stilizare imagini
    lightboxImg.style.width = '100%';
    lightboxImg.style.height = '100%';
    lightboxImg.style.objectFit = 'cover';

    //sagetele, x
    lightboxclose.innerHTML = '&#10006;';
    lightboxprev.innerHTML = '&#10094;';
    lightboxnext.innerHTML = '&#10095;';

    //stilizare sagetica previous
    lightboxprev.style.position = 'absolute';
    lightboxprev.style.color = 'pink';
    lightboxprev.style.left = '2px';
    lightboxprev.style.top = '50%';
    lightboxprev.style.fontSize = '40px';
    lightboxprev.style.cursor = 'pointer';

    //stilizare sagetica next
    lightboxnext.style.position = 'absolute';
    lightboxnext.style.right = '2px';
    lightboxnext.style.top = '50%';
    lightboxnext.style.fontSize = '40px';
    lightboxnext.style.color = 'pink';
    lightboxnext.style.cursor = 'pointer';

    //stilizare close
    lightboxclose.style.position = 'absolute';
    lightboxclose.style.top = '0';
    lightboxclose.style.right = '2px';
    lightboxclose.style.color = 'pink';
    lightboxclose.style.fontSize = '40px';
    lightboxclose.style.cursor = 'pointer';

    //adaugare clase
    lightboxContainer.classList.add('lightboxContainer');
    lightboxContent.classList.add('lightboxContent');
    lightboxImg.classList.add('lightboxImg');
    lightboxnext.classList.add('navigationArrows');
    lightboxprev.classList.add('navigationArrows');
    lightboxclose.classList.add('close');

    //asamblare
    lightboxContainer.appendChild(lightboxContent);
    lightboxContent.appendChild(lightboxImg);
    lightboxContent.appendChild(lightboxclose);
    lightboxContent.appendChild(lightboxnext);
    lightboxContent.appendChild(lightboxprev);

    document.body.appendChild(lightboxContainer);

    let index = 1;
    //functia stabileste poza corecta
    function showLightbox(crtImgIndex) {
        if( crtImgIndex >= images.length )
            index = 1;
        else if (crtImgIndex < 1)
            index = images.length - 1;
        let imageLocation = images[index-1].getAttribute('src');
        lightboxImg.setAttribute('src', imageLocation);
        lightboxImg.removeEventListener('click', currentImg);
    }

    //functia afiseaza imaginea, preia indexul imaginii apasate
    function currentImg() {
        //apare lightbox
        lightboxContainer.style.display = 'block';
        lightboxContainer.style.visibility = 'visible';

        //preluam numarul imaginii
        let imgIndex = parseInt(this.id.split(' ')[1]);
        showLightbox(index = imgIndex);
    }

    //toate imaginile declanseaza lightbox la click
    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', currentImg);
    }

    //ajuta la navigarea printre imagini
    function stepImg(step) {
        showLightbox(index += step);
    }

    //inapoi
    function prevImg() {
        stepImg(-1);
    }
    //inainte
    function nextImg() {
        stepImg(1);
    }
    //setam schimbarile de imagini la click si la taste
    lightboxprev.addEventListener('click', prevImg);
    lightboxnext.addEventListener('click', nextImg);
    document.body.onkeyup = function(event) {
        switch (event.key) {
            case "ArrowRight":
                nextImg();
                break;
            case "ArrowLeft":
                prevImg();
                break;
        }
    }

    //inchidere lightbox
    function closeLightbox(event) {
        //daca am apasat pe trigger
        if(this === event.target)
        {
            lightboxContainer.style.display = 'none';
        }
    }
    lightboxclose.addEventListener('click', closeLightbox);
    lightboxContainer.addEventListener('click', closeLightbox);

}
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'darkblue', 'magenta', 'white', 'black', 'deeppink','deepskyblue', 'indigo', 'gold' ];
//const colors = [ 'violet', 'purple', 'pink', 'white', 'black', 'deeppink', 'indigo' ];
const colors = [ 'pink', 'white', 'black', 'deeppink' ];
function canv() {
    //pregatire canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.height = '100vh';

    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.99;
    canvas.height = window.innerHeight * 0.975;
    canvas.style.backgroundColor = 'black';

    //stilizam liniile
    ctx.lineWidth = 10;
    ctx.lineCap = 'round'
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;

    let size; // lungimea liniilor
    if (canvas.width > canvas.height)
        size = canvas.height * 0.2;
    else
        size = canvas.width * 0.2;
    let sides = 8; //nr de branch-uri in jurul centrului
    let maxLevel = 3; // adancimea fractalului
    let spread = 0; // unghiul dintre branch-uri, cat de rasfirate sa fie ramurile
    let branches = 3; // numarul de branch-uri care pornesc dintr-un branch
    let scale = 0.6; // de cate ori micsoram branch-urile copil


    function drawBranch(level, color) {
        let grd = ctx.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, color);
        color = colors[Math.floor(Math.random() * colors.length)];
        grd.addColorStop(1, color);
        ctx.strokeStyle = grd;
        if (level > maxLevel) return;
        //desenam main branch
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(size, 0);
        ctx.stroke();

        for (let i = 0; i < branches; i++) {
            //cream branch-uri de o parte si de alta a main branch-ului
            ctx.save();
            ctx.translate(size - size / branches * i, 0); // repartizam in mod egal pe main branch branch-urile copil pornind de la capatul main branch-ului
            ctx.scale(scale, scale);
            ctx.rotate(spread);
            drawBranch(level + 1, color);
            ctx.restore();

            // ctx.save();
            // ctx.translate(size - size / branches * i, 0);
            // ctx.rotate(-spread);
            // ctx.scale(scale, scale);
            // drawBranch(level + 1, color);
            // ctx.restore();
        }
        //desenam buline
        // ctx.beginPath();
        // ctx.arc(0, size, size * 0.1, 0, Math.PI * 2);
        // ctx.fill();
    }

    function drawFractal() {
        ctx.save();
        //pozitionare canvas
        ctx.translate(canvas.width / 2, canvas.height / 2);

        //desenam liniile rotind canvas ul si variind dimensiunea, astfel incat liniile sa fie repartizate in mod egal in jurul originii (360deg / numarul de linii)
        for (let i = 0; i < sides; i++) {
            ctx.rotate((Math.PI * 2) / sides);
            drawBranch(0, 'white');
        }
        ctx.restore();
    }
    let interv = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(spread >= 1)
            spread = -spread;
        else if(spread < 0)
            spread -=0.3;
        else
        spread += 0.3;
        drawFractal();
    }, 100);
    setTimeout(()=> {clearInterval(interv); canvas.parentNode.removeChild(canvas)},3000);
    const all = document.body.querySelectorAll('body *');
    for( let i = 0; i < all.length; i++)
        all[i].style.visibility = 'visible';
}

window.onload= () => {

    getCustomizedVal();

    createLightbox();
    canv();

}
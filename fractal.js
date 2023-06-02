window.addEventListener('load', canv);

//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'darkblue', 'magenta', 'white', 'black', 'deeppink','deepskyblue', 'indigo', 'gold' ];
//const colors = [ 'violet', 'purple', 'pink', 'white', 'black', 'deeppink', 'indigo' ];
const colors = [ 'pink', 'white', 'black', 'deeppink' ];
function canv() {
    //pregatire canvas
    const canvas = document.getElementById('canvas');
    const ctx =  canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.99;
    canvas.height = window.innerHeight * 0.975;
    canvas.style.backgroundColor = 'black';

    //stilizam liniile
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.lineWidth = 10;
    ctx.lineCap = 'round'
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;

    let size; // lungimea liniilor
    if(canvas.width > canvas.height)
        size = canvas.height * 0.2;
    else
        size = canvas.width * 0.2;
    let sides = 5; //nr de branch-uri in jurul centrului
    let maxLevel = 4; // adancimea fractalului
    let spread = 0; // unghiul dintre branch-uri, cat de rasfirate sa fie ramurile
    let branches = 2; // numarul de branch-uri care pornesc dintr-un branch
    let scale = 0.6; // de cate ori micsoram branch-urile copil


    function drawBranch(level, color) {
        let grd = ctx.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, color);
        color = colors[Math.floor(Math.random() * colors.length)];
        grd.addColorStop(1, color);
        ctx.strokeStyle = grd;
        if(level > maxLevel) return;
        //desenam main branch
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(size, 0);
        ctx.stroke();

        for(let i = 0; i < branches; i++) {
            //cream branch-uri de o parte si de alta a main branch-ului
            ctx.save();
            ctx.translate(size - size/branches * i, 0); // repartizam in mod egal pe main branch branch-urile copil pornind de la capatul main branch-ului
            ctx.scale(scale, scale);
            ctx.rotate(spread);
            drawBranch(level + 1, color);
            ctx.restore();

            ctx.save();
            ctx.translate(size - size/branches * i, 0);
            ctx.rotate(-spread);
            ctx.scale(scale, scale);
            drawBranch(level + 1, color);
            ctx.restore();
        }
        //desenam buline
        // ctx.beginPath();
        // ctx.arc(0, size, size * 0.1, 0, Math.PI * 2);
        // ctx.fill();
    }

    function drawFractal() {
        ctx.save();
        //pozitionare canvas
        ctx.translate(canvas.width/2, canvas.height/2);

        //desenam liniile rotind canvas ul si variind dimensiunea, astfel incat liniile sa fie repartizate in mod egal in jurul originii (360deg / numarul de linii)
        for( let i = 0; i < sides; i++) {
            ctx.rotate((Math.PI * 2) / sides);
            drawBranch(0, 'white');
        }
        ctx.restore();
    }
    let delay = setTimeout(drawFractal, 100);
    //de terminat animatia, de schimbat culorile de pus in loader, de verifict functii
    let interv = setInterval(() => { ctx.clearRect(0,0,canvas.width, canvas.height); spread += 0.3; drawFractal(); },150);
    setTimeout(()=> {clearInterval(interv); canvas.parentNode.removeChild(canvas)},3000);

}
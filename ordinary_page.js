window.onload = () => {
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

        const par = document.getElementsByTagName('p');
        for(let i = 0; i < par.length; i++) {
            par[i].style.color = textcolor;
        }

        const lists = document.getElementsByTagName('li');
        for(let i = 0; i < lists.length; i++) {
            lists[i].style.color = textcolor;
        }
        const h1 = document.getElementsByTagName('h1');
        for(let i = 0; i < h1.length; i++) {
            h1[i].style.color = textcolor;
        }
        const h2 = document.getElementsByTagName('h2');
        for(let i = 0; i < h2.length; i++) {
            h2[i].style.color = textcolor;
        }
        const h3 = document.getElementsByTagName('h3');
        for(let i = 0; i < h3.length; i++) {
            h3[i].style.color = textcolor;
        }
        document.getElementsByTagName('footer')[0].style.color = textcolor;

        document.body.getElementsByTagName('article')[0].style.fontFamily = sessionStorage.getItem('font');
    }
    getCustomizedVal();
}
window.onload = () => {

    if(!sessionStorage.getItem('nr_refresh')) {
        createModal();
        sessionStorage.setItem('nr_refresh', '1');
    }

}
function createModal() {
    //creare modal
    const modalContainer = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalclose = document.createElement('span');

    //stilizare container
    modalContainer.style.display = 'block';
    modalContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modalContainer.style.width = '100%';
    modalContainer.style.height = '100%';
    modalContainer.style.top = '0';
    modalContainer.style.left = '0';
    modalContainer.style.zIndex = '2';
    modalContainer.style.position = 'fixed';
    modalContainer.style.alignItems = 'center';
    modalContainer.style.overflow = 'visible';
    modalContainer.style.zIndex = '100';

    //stilizare Content
    modalContent.style.position = 'absolute';
    modalContent.style.top = '10%';
    modalContent.style.width = '60%';
    modalContent.style.height = '80%';
    modalContent.style.left = '20%';
    modalContent.style.right = '20%';
    modalContent.style.overflow = 'visible';
    modalContent.style.backgroundColor = 'white';

    //x
    modalclose.innerHTML = '&#10006;';

    //stilizare close
    modalclose.style.position = 'absolute';
    modalclose.style.top = '0';
    modalclose.style.right = '2px';
    modalclose.style.color = 'pink';
    modalclose.style.fontSize = '40px';
    modalclose.style.cursor = 'pointer';

    modalclose.classList.add('close');

    const paragraph =  document.createElement('p');
    paragraph.innerHTML = 'Light mode ... prea deschis?   Dark mode ... obositor si intunecat? Pentru o experienta cat mai confortabila pe site-ul meu, ai posibilitatea de a-ti personaliza culorile si fontul!';
    paragraph.style.margin = '5rem';
    paragraph.style.marginBottom = '0';
    paragraph.style.fontSize = 'large';
    paragraph.style.fontFamily = 'Cinzel Decorative';
    paragraph.style.textAlign = 'center';
    paragraph.style.fontWeight = 'bold';
    paragraph.style.lineHeight = '3em';

    const form = document.createElement('form');
    form.action = 'index.html';
    form.method = 'post';
    form.id = 'customize';
    form.target = '_self';
    form.style.marginLeft = '30%';
    form.style.marginRight = '20%';

    const bgColordiv = document.createElement('div');
    bgColordiv.style.marginTop = '2rem';
    const bgColorLabel = document.createElement('label');
    bgColorLabel.htmlFor = 'bgcolor';
    bgColorLabel.innerText = 'Culoare de fundal';
    bgColorLabel.style.marginRight = '2rem';
    const bgColorInput = document.createElement('input');
    bgColorInput.type = 'color';
    bgColorInput.name = 'bgcolor';
    bgColorInput.id = 'bgcolor';
    bgColorInput.value = '#000000';

    bgColordiv.appendChild(bgColorLabel);
    bgColordiv.appendChild(bgColorInput);
    form.appendChild(bgColordiv);

    const textColordiv = document.createElement('div');
    textColordiv.style.marginTop = '2rem';
    const textColorLabel = document.createElement('label');
    textColorLabel.htmlFor = 'textcolor';
    textColorLabel.innerText = 'Culoarea textului';
    textColorLabel.style.marginRight = '2rem';
    const textColorInput = document.createElement('input');
    textColorInput.type = 'color';
    textColorInput.name = 'textcolor';
    textColorInput.id = 'textcolor';
    textColorInput.value = '#FFC0CB';

    textColordiv.appendChild(textColorLabel);
    textColordiv.appendChild(textColorInput);
    form.appendChild(textColordiv);

    const fontdiv = document.createElement('div');
    fontdiv.style.marginTop = '2rem';
    const fontLabel = document.createElement('label');
    fontLabel.htmlFor = 'font';
    fontLabel.innerText = 'Font';
    fontLabel.style.marginRight = '2rem';
    const fontSelect = document.createElement('select');
    fontSelect.id = 'font';
    fontSelect.name = 'font';
    const arial = document.createElement('option');
    arial.value = 'Arial';
    arial.innerText = 'Arial';
    const calibri = document.createElement('option');
    calibri.value = 'Calibri';
    calibri.innerText = 'Calibri';
    const tnr = document.createElement('option');
    tnr.value = 'Times New Roman';
    tnr.innerText = 'Times New Roman';
    tnr.selected = true;

    fontSelect.appendChild(arial);
    fontSelect.appendChild(calibri);
    fontSelect.appendChild(tnr);
    fontdiv.appendChild(fontLabel);
    fontdiv.appendChild(fontSelect);
    form.appendChild(fontdiv);

    const OKbtn = document.createElement('button');
    OKbtn.type = 'submit';
    OKbtn.innerText = 'OK';
    OKbtn.style.backgroundColor = 'black';
    OKbtn.style.color = 'white';
    OKbtn.style.marginTop = '2rem';

    form.appendChild(OKbtn);

    //asamblare
    modalContainer.appendChild(modalContent);
    modalContent.appendChild(modalclose);
    modalContent.appendChild(paragraph);
    modalContent.appendChild(form);

    document.body.appendChild(modalContainer);

    function closemodal(event) {
        //daca am apasat pe trigger
        if(this === event.target)
        {
            modalContainer.style.display = 'none';
        }
    }

    function submitValues(event) {
        sessionStorage.setItem('bgcolor', bgColorInput.value);
        sessionStorage.setItem('textcolor', textColorInput.value);
        sessionStorage.setItem('font', fontSelect.value);
        closemodal(event);
    }

    modalclose.addEventListener('click', closemodal);
    modalContainer.addEventListener('click', closemodal);
    form.addEventListener('submit', submitValues);
    OKbtn.addEventListener('click', submitValues);
}

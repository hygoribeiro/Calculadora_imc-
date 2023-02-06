

const calcular = document.getElementById('calcular');


function imc(){
    const name = document.getElementById('name').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    if(name !== '' && altura !== '' && peso !== ''){
        
        const calculoImc = (peso/(altura**2));
        resultado.textContent =name + " Seu IMC é de ="+calculoImc.toFixed(1);

    }else{
        resultado.textContent ="Os Campos Precisam ser preenchidos corretamente!!!";
    }
}


calcular.addEventListener('click' ,imc);

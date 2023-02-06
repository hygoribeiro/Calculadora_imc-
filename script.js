

const calcular = document.getElementById('calcular');
const reiniciar = document.getElementById('reiniciar');
const name = document.getElementById('name');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');


function imc(){
    
    if(name.value !== '' && altura.vaule !== '' && peso.value !== ''){

        const calculoImc = (peso.value / (altura.value ** 2));
        resultado.textContent = name.value + " Seu IMC é de = " + calculoImc.toFixed(2);

    }else{
        resultado.textContent ="Os Campos Precisam ser preenchidos corretamente!!!";
    }
}


calcular.addEventListener('click' ,imc);

reiniciar.addEventListener('click', function(){
    
    name.value = "";
    peso.value = "";
    altura.value = "";
    resultado.textContent = "";
})


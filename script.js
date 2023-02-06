

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
        
        nivelIMc()

    }else{
        resultado.textContent ="Os Campos Precisam ser preenchidos corretamente!!!";
    }
}

function nivelIMc(){
    const nivel_imc = document.getElementById('nivel');
    const calculoImc = (peso.value / (altura.value ** 2));
    if (calculoImc < 18.5){
        nivel_imc.textContent = "Um IMC menor que 18,5 indica que você está abaixo do peso. Com um IMC abaixo do recomendado, você pode desenvolver doenças relacionadas à desnutrição e carência de minerais. Por isso, recomendamos que consulte um nutricionista para saber se há algum problema com a sua saúde."
    }else if (calculoImc > 18.5 && calculoImc <= 24.9) {
        nivel_imc.innerHTML =  "Seu Indice e Normal <br> Ter um Índice de Massa Corpórea (IMC) dentro do intervalo considerado normal traz várias vantagens para a saúde: <br> <br> 1.Prevenção de doenças relacionadas ao peso: Pessoas com IMC normal têm menos chances de desenvolver<br> doenças relacionadas ao peso, como hipertensão, diabetes, problemas cardíacos e algumas formas de câncer.<br> <br>  2.Melhor condição física: Pessoas com IMC normal tendem a ter mais energia, maior resistência e uma melhor<br> condição física em geral, o que permite que desfrutem de atividades físicas e esportes sem dificuldades.<br> <br>3.Autoestima elevada: Pessoas com IMC normal tendem a ter uma autoestima elevada, pois se<br> sentem mais confiantes e seguras com sua aparência física.<br> <br> 4.Qualidade de vida: Ter um IMC normal é fundamental para manter uma boa qualidade<br> de vida, uma vez que o corpo está em equilíbrio e funcionando corretamente."
        
    }else if (calculoImc >=25 && calculoImc <=29.9 ){
        nivel_imc.innerHTML = "Seu indice e SobrePeso <br> Existem várias desvantagens em ter um IMC (índice de massa corporal) considerado como sobrepeso, incluindo:<br> <br> 1.Risco aumentado de doenças crônicas: Pessoas com sobrepeso têm um risco maior de<br> desenvolver doenças crônicas, como diabetes tipo 2, doenças cardíacas, hipertensão e<br> certos tipos de câncer.<br> <br> 2.Problemas de saúde mental: A obesidade pode afetar negativamente a autoestima e a<br> confiança, levando a problemas de saúde mental, como ansiedade e depressão.<br> <br> 3.Fadiga e falta de energia: O excesso de peso pode tornar as atividades diárias mais<br> cansativas e difíceis, resultando em fadiga e falta de energia.<br> <br> 4.Dificuldades para se mover e realizar atividades físicas: O excesso de peso pode levar a<br> problemas de mobilidade e dificuldades em realizar atividades físicas, o que pode afetar<br> negativamente a qualidade de vida.<br> <br> 5.Problemas de saúde óssea: O excesso de peso pode levar a problemas de saúde óssea,<br> como osteoartrite e danos aos discos intervertebrais."
    }
}

calcular.addEventListener('click' , function(){
    imc(),
    calculoImc()
});

reiniciar.addEventListener('click', function(){
    const nivel_imc = document.getElementById('nivel');
    name.value = "";
    peso.value = "";
    altura.value = "";
    resultado.textContent = "";
    nivel_imc.textContent = ""
})



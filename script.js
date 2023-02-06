

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
        nivel_imc.innerHTML = "Seu Indice e Magresa <br> <br>Estar com um IMC considerado como magreza também pode acarretar em riscos à saúde, incluindo: <br> <br> 1.Problemas nutricionais: A falta de peso pode resultar em uma inadequada ingestão de <br> nutrientes, o que pode levar a problemas de saúde, como anemia, baixo nível de energia <br> e fragilidade óssea <br> <br> 2.Imunidade comprometida: A magreza pode afetar negativamente o sistema imunológico,<br> tornando o corpo mais suscetível a infecções e doenças.<br> <br> 3.Problemas de saúde mental: A preocupação excessiva com o peso e a imagem corporal <br> pode levar a problemas de saúde mental, como transtornos alimentares e ansiedade.<br> <br> 4.Problemas menstruais: A magreza pode afetar o ciclo menstrual, levando a <br> irregularidades e até mesmo a perda da capacidade de engravidar.<br> <br> 5.Fraqueza e fadiga: A falta de peso pode resultar em uma redução da massa muscular, o <br> que pode levar a fraqueza e fadiga <br> <br> <strong> Em geral, é importante manter um peso saudável e equilibrado para evitar esses riscos à saúde. Consultar um profissional de saúde para avaliar o IMC e discutir o plano alimentar adequado é uma boa medida preventiva. </strong>";
    }else if (calculoImc > 18.5 && calculoImc <= 24.9) {
        nivel_imc.innerHTML =  "Seu Indice e Normal <br> Ter um Índice de Massa Corpórea (IMC) dentro do intervalo considerado normal traz várias vantagens para a saúde: <br> <br> 1.Prevenção de doenças relacionadas ao peso: Pessoas com IMC normal têm menos chances de desenvolver<br> doenças relacionadas ao peso, como hipertensão, diabetes, problemas cardíacos e algumas formas de câncer.<br> <br>  2.Melhor condição física: Pessoas com IMC normal tendem a ter mais energia, maior resistência e uma melhor<br> condição física em geral, o que permite que desfrutem de atividades físicas e esportes sem dificuldades.<br> <br>3.Autoestima elevada: Pessoas com IMC normal tendem a ter uma autoestima elevada, pois se<br> sentem mais confiantes e seguras com sua aparência física.<br> <br> 4.Qualidade de vida: Ter um IMC normal é fundamental para manter uma boa qualidade<br> de vida, uma vez que o corpo está em equilíbrio e funcionando corretamente.";
        
    }else if (calculoImc >=25 && calculoImc <=29.9 ){
        nivel_imc.innerHTML = "Seu Indice é SobrePeso <br> Existem várias desvantagens em ter um IMC (índice de massa corporal) considerado como sobrepeso, incluindo:<br> <br> 1.Risco aumentado de doenças crônicas: Pessoas com sobrepeso têm um risco maior de<br> desenvolver doenças crônicas, como diabetes tipo 2, doenças cardíacas, hipertensão e<br> certos tipos de câncer.<br> <br> 2.Problemas de saúde mental: A obesidade pode afetar negativamente a autoestima e a<br> confiança, levando a problemas de saúde mental, como ansiedade e depressão.<br> <br> 3.Fadiga e falta de energia: O excesso de peso pode tornar as atividades diárias mais<br> cansativas e difíceis, resultando em fadiga e falta de energia.<br> <br> 4.Dificuldades para se mover e realizar atividades físicas: O excesso de peso pode levar a<br> problemas de mobilidade e dificuldades em realizar atividades físicas, o que pode afetar<br> negativamente a qualidade de vida.<br> <br> 5.Problemas de saúde óssea: O excesso de peso pode levar a problemas de saúde óssea,<br> como osteoartrite e danos aos discos intervertebrais. <br> <br> <strong>É importante buscar ajuda médica imediatamente e adotar hábitos alimentares saudáveis e atividade física regular para prevenir e tratar o sobrepeso</strong>";
    }else if(calculoImc >= 30 && calculoImc <= 34.99){
        nivel_imc.innerHTML = "Seu Indice  é de Obesidade Grau 1 <br> A obesidade grau 1 é caracterizada por um excesso de peso moderado, e se não for tratada  <br> adequadamente, pode levar a sérios problemas de saúde, incluindo:<br> <br> .Doenças cardiovasculares, como hipertensão, derrames e ataques cardíacos <br> .Diabetes tipo 2  <br> .Doenças hepáticas <br>  .Distúrbios respiratórios, como apneia do sono  <br> .Algumas formas de câncer, como câncer de mama e de próstata <br> .Dores nas articulações  <br> .Dificuldades para realizar atividades físicas  <br> Por isso, é importante procurar ajuda médica e fazer mudanças no estilo de vida, como <br>  praticar exercícios físicos regulares e seguir uma dieta equilibrada, para prevenir a evolução  <br> da obesidade e garantir a saúde a longo prazo. <br> <br> <strong>É importante buscar ajuda médica imediatamente e adotar hábitos alimentares saudáveis e atividade física regular para prevenir e tratar a obesidade Grau 1 </strong>";
    }else if (calculoImc >= 35 && calculoImc <= 39.99 ){
        nivel_imc.innerHTML = "Seu Indice é Obesidade Grau 2 <br> <br> Os riscos para a saúde associados à obesidade grau 2 incluem: <br> <br> 1.Doenças cardíacas e derrames: a obesidade aumenta o risco de doenças cardíacas, <br> incluindo hipertensão, colesterol elevado e doenças do coração. <br> <br> 2.Diabetes tipo 2: a obesidade é uma das principais causas do diabetes tipo 2.<br> <br> 3.Apneia do sono: a obesidade pode levar à apneia do sono, um distúrbio do sono <br> caracterizado por interrupções frequentes da respiração durante o sono.<br> <br> 4.Artrite: a obesidade pode aumentar o risco de desenvolvimento de artrite nas articulações. <br> <br> 5.Câncer: a obesidade está associada ao risco aumentado de vários tipos de câncer,<br> incluindo câncer de mama, cólon, pâncreas e rim. <br> <br> <strong>É importante buscar ajuda médica imediatamente e adotar hábitos alimentares saudáveis e atividade física regular para prevenir e tratar a obesidade Grau 2</strong>";
    }else{
        nivel_imc.innerHTML = "Seu Indice é Obesidade Grau 3 <br> <br> A obesidade grau 3 (obesidade mórbida) é uma condição médica grave que apresenta <br> riscos significativos para a saúde. Alguns dos principais riscos associados à obesidade grau 3 incluem: <br> <br> 1.Doenças cardiovasculares: a obesidade mórbida aumenta significativamente o risco de <br> doenças cardiovasculares, incluindo infarto do miocárdio e derrame.<br> <br> 2.Diabetes tipo 2: a obesidade mórbida é uma das principais causas do diabetes tipo 2. <br> <br> 3.Doenças do fígado: a obesidade mórbida pode levar a problemas de fígado, incluindo <br>  esteatose hepática (gordura no fígado) e cirrose.<br> <br> 4.Problemas respiratórios: a obesidade mórbida pode causar problemas respiratórios,<br> incluindo apneia do sono e insuficiência cardíaca. <br> <br> 5.Problemas ósseos e articulares: a obesidade mórbida pode aumentar o risco de lesões <br> nas articulações e doenças ósseas, como artrite e osteoartrite.<br> <br> <strong>É importante buscar ajuda médica imediatamente e adotar hábitos alimentares saudáveis e atividade física regular para prevenir e tratar a obesidade mórbida</strong>";
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



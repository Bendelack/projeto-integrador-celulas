//CONFIGURAÇÕES DO QUIZ

var form = document.getElementById('form');
var btn = document.getElementById('btn');
var resultado = document.getElementById('result')
var certas = 0;
var refazer = document.getElementById('refazer');
var invalido = document.getElementById('invalido');
var quizBotao = document.getElementById('quiz-btn');
//b a b d d c b a


btn.addEventListener('click', function(){
    if (form.q1.value == '' || form.q2.value == '' || form.q3.value == '' || form.q4.value == '' || form.q5.value == '' || form.q6.value == '' || form.q7.value == '' || form.q8.value == '') {
        invalido.style.display = 'block';
        setTimeout(function(){
            invalido.style.display = 'none';
        }, 5000)
    } else {
        invalido.style.display = 'none';

        //01
        if (form.q1.value == 'b1') {
            document.getElementById('b1').style.backgroundColor = 'rgb(0, 255, 0)';
            certas++
        } else {
            document.getElementById(form.q1.value).style.backgroundColor = 'rgb(255, 0, 0)';
        }

        //02
        if (form.q2.value == 'a2') {
            document.getElementById('a2').style.backgroundColor = 'rgb(0, 255, 0)';
            certas++
        } else {
            document.getElementById(form.q2.value).style.backgroundColor = 'rgb(255, 0, 0)';
        }

        //03
        if (form.q3.value == 'b3') {
            document.getElementById('b3').style.backgroundColor = 'rgb(0, 255, 0)';
            certas++
        } else {
            document.getElementById(form.q3.value).style.backgroundColor = 'rgb(255, 0, 0)';
        }

        //04
        if (form.q4.value == 'd4') {
            document.getElementById('d4').style.backgroundColor = 'rgb(0, 255, 0)';
            certas++
        } else {
            document.getElementById(form.q4.value).style.backgroundColor = 'rgb(255, 0, 0)';
        }

        //05
        if (form.q5.value == 'd5') {
            document.getElementById('d5').style.backgroundColor = 'rgb(0, 255, 0)';
            certas++
        } else {
            document.getElementById(form.q5.value).style.backgroundColor = 'rgb(255, 0, 0)';
        }

        //06
        if (form.q6.value == 'c6') {
            document.getElementById('c6').style.backgroundColor = 'rgb(0, 255, 0)';
            certas++
        } else {
            document.getElementById(form.q6.value).style.backgroundColor = 'rgb(255, 0, 0)';
        }

        //07
        if (form.q7.value == 'b7') {
            document.getElementById('b7').style.backgroundColor = 'rgb(0, 255, 0)';
            certas++
        } else {
            document.getElementById(form.q7.value).style.backgroundColor = 'rgb(255, 0, 0)';
        }

        //08
        if (form.q8.value == 'a8') {
            document.getElementById('a8').style.backgroundColor = 'rgb(0, 255, 0)';
            certas++
        } else {
            document.getElementById(form.q8.value).style.backgroundColor = 'rgb(255, 0, 0)';
        }

        resultado.style.display = 'block';

        if (certas == 0) {
            resultado.innerHTML = `Infelizmente você não teve acertos. Estude mais e tente gabaritar na próxima.`
        } else {
            resultado.innerHTML = `Parabéns!! Você acertou ${certas} de 8.`                
        }
    }
})

refazer.addEventListener('click', function(){
    resultado.style.display = 'none';
    
    document.getElementById(form.q1.value).style.backgroundColor = '#54bc84';
    document.getElementById(form.q2.value).style.backgroundColor = '#54bc84';
    document.getElementById(form.q3.value).style.backgroundColor = '#54bc84';
    document.getElementById(form.q4.value).style.backgroundColor = '#54bc84';
    document.getElementById(form.q5.value).style.backgroundColor = '#54bc84';
    document.getElementById(form.q6.value).style.backgroundColor = '#54bc84';
    document.getElementById(form.q7.value).style.backgroundColor = '#54bc84';
    document.getElementById(form.q8.value).style.backgroundColor = '#54bc84';
    document.querySelector('form').reset();
    certas = 0;
})

quizBotao.addEventListener('click', function(){
    form.style.display = 'block';
})

//CONFIGURAÇÕES DO QUIZ - FIM
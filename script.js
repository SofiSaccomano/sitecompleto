function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option =>{
        if(!option.checked){
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
function submitQuiz(){
    // Desabilita o botão de envio após ser clicado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = true;
    
    // Habilita o botão de "Responder novamente"
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = false;
    
    let correctAnswers ={
        q1: "B",
        q2: "B",
        q3: "C",
        q4: "A",
        q5: "C",
        q6: "A",
        q7: "C",
        q8: "C",
        q9: "A",
        q10:"C",
        //adicione as respostas corretas para as outras perguntas
        };
    
    let form = document.getElementById('quiz-form');
    let score = 0; 
    
    for (let key in correctAnswers){
        let userAnswers = form.elements[key].value;
        if(userAnswers === correctAnswers[key]) {
            score++;
        }
    }
    
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas`;
    
    //tocar o som se todas as respostas estiverem corretas
    if(score === 10){
        let sucessSound = document.getElementById('venceusom');
        sucessSound.play();
    }
    else{
        let perdeuSound = document.getElementById('perdeusom');
        perdeuSound.play();
    }
        
}
function resetQuiz() {
    // Reabilita o botão de envio quando o quiz é reiniciado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = false;
    
    // Desabilita o botão de "Responder novamente" novamente
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = true;
    
    // Limpa as respostas e reseta o formulário
    document.getElementById('quiz-form').reset();
    
    // Reabilita as opções de resposta
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);
    
    // Limpa o resultado
    let result = document.getElementById('result');
    result.innerHTML = "";
}
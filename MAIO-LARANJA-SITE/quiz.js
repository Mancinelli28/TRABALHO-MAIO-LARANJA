const questions = [
    {
      question: "1. Qual é o principal objetivo da campanha Maio Laranja?",
      options: ["A) Celebrar a inffância com eventos culturais","B) Promover a inclusão digital de crianças.","C) Combater o abuso e a exploração sexual de crianças e adolescentes.","D) Arrecadar fundos para instituições de ensino."],
      answer: "C) Combater o abuso e a exploração sexual de crianças e adolescentes."
    },
    {
      question: "2. Qual data é considerada o Dia Nacional de Combate ao Abuso e à Exploração Sexual de Crianças e Adolescentes?",
      options: ["A) 12 de Outubro","B) 18 de Maio","C) 1 de Junho","D) 28 de Julho"],
      answer: "B) 18 de Maio"
    },
    {
      question: "3. O Maio Laranja foi instituído por qual lei?",
      options: ["A) Lei nº 20.684/2046","B) Lei nº 10.639/2003","C) Lei nº 14.432/2022","D) Lei nº 12.965/2014"],
      answer: "C) Lei nº 14.432/2022"
    },
    {
      question: "4. Quem foi Araceli Cabrera Crespo, símbolo do Maio Laranja?",
      options: ["A) Uma ativista que criou a campanha.","B) Uma criança vítima de violência sexual em 1973.","C) A primeira menina a denunciar abuso no Brasil.","D) A criadora do Disque 100."],
      answer: "B) Uma criança vítima de violência sexual em 1973."
    },
    {
        question: "5. Qual a cor símbolo da campanha Maio Laranja e o que ela representa?",
        options: ["A) Azul, representando a serenidade.","B) Rosa, representando a infância.","C) Amarelo, representando a luz da verdade.","D) Laranja, representando alerta, cuidado e proteção."],
        answer: "D) Laranja, representando alerta, cuidado e proteção."   
    },

  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.classList.add("option");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      feedbackEl.textContent = "✅ Correto!";
      score++;
      scoreEl.textContent = score;
    } else {
      feedbackEl.textContent = `❌ Errado! A resposta certa é: ${correct}`;
    }
  
    // Desabilita opções após resposta
    document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionEl.textContent = "Quiz finalizado! Obrigado por participar.";
      optionsEl.innerHTML = "";
      feedbackEl.textContent = `Pontuação final: ${score}/${questions.length}`;
      nextBtn.style.display = "none";
    }
  };
  
  showQuestion();
  

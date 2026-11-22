const questions = [
    {
        topic: "Proměnné a datové typy",
        w3Url: "https://www.w3schools.com/python/python_casting.asp",
        w3Label: "Procvičit na W3Schools: Python Casting",
        question: "Jaký bude výstup tohoto kódu?",
        code: `x = 5\ny = "3"\nprint(x + int(y))`,
        options: ["8", '"53"', "53", "TypeError"],
        correctIndex: 0,
        explanation: 'Funkce int("3") převede text "3" na celé číslo 3. Součet 5 + 3 je tedy 8.'
    },
    {
        topic: "Podmínky (if / elif / else)",
        w3Url: "https://www.w3schools.com/python/python_conditions.asp",
        w3Label: "Procvičit na W3Schools: Python Conditions",
        question: "Co se vypíše pro zadané skóre?",
        code: `score = 75\n\nif score >= 90:\n    print("A")\nelif score >= 70:\n    print("B")\nelse:\n    print("C")`,
        options: ["A", "B", "C", "Nic se nevypíše"],
        correctIndex: 1,
        explanation: "První podmínka (75 >= 90) je nepravdivá, druhá (75 >= 70) je pravdivá. Vypíše se 'B' a zbytek větví se přeskočí."
    },
    {
        topic: "Cykly (for a range)",
        w3Url: "https://www.w3schools.com/python/python_for_loops.asp",
        w3Label: "Procvičit na W3Schools: Python For Loops",
        question: "Kolikrát proběhne tento cyklus?",
        code: `for i in range(2, 5):\n    print(i)`,
        options: ["2krát", "3krát", "4krát", "5krát"],
        correctIndex: 1,
        explanation: "range(2, 5) generuje čísla 2, 3, 4 (horní mez 5 už tam nepatří). To jsou přesně 3 průchody."
    },
    {
        topic: "Hledání chyb (Syntaxe)",
        w3Url: "https://www.w3schools.com/python/python_syntax.asp",
        w3Label: "Procvičit na W3Schools: Python Syntax",
        question: "Kde je v tomto kódu chyba?",
        code: `cislo = 10\nif cislo == 10\n    print("Deset")`,
        options: [
            "Chybí dvojtečka : na konci řádku s if",
            "Místo == má být =",
            "print musí mít uvozovky navíc",
            "Kód je úplně bez chyby"
        ],
        correctIndex: 0,
        explanation: "V Pythonu musí hlavička podmínky if končit dvojtečkou (:). Bez ní vyhodí SyntaxError."
    },
    {
        topic: "Seznamy (Listy)",
        w3Url: "https://www.w3schools.com/python/python_lists.asp",
        w3Label: "Procvičit na W3Schools: Python Lists",
        question: "Jaký bude výsledek po úpravě seznamu?",
        code: `ovoce = ["jablko", "banan", "kiwi"]\novoce.append("mango")\nprint(len(ovoce))`,
        options: ["3", "4", '["jablko", "banan", "kiwi", "mango"]', "mango"],
        correctIndex: 1,
        explanation: "Metoda append() přidá 'mango' na konec seznamu. Seznam má teď 4 prvky, takže len() vrátí 4."
    },
    {
        topic: "Porovnávání vs. přiřazení",
        w3Url: "https://www.w3schools.com/python/python_operators.asp",
        w3Label: "Procvičit na W3Schools: Python Operators",
        question: "Jaká bude hodnota proměnné vysledek?",
        code: `a = 4\nb = 4\nvysledek = (a == b) and (a > 6)`,
        options: ["True", "False", "4", "Error"],
        correctIndex: 1,
        explanation: "a == b je True, ale a > 6 je False. Operátor 'and' vyžaduje pravdivost obou částí, proto je výsledek False."
    }
];

let currentIndex = 0;
let score = 0;
let lives = 3;
let topicStats = {}; // { "Téma": { correct: 0, total: 0, w3Url: "", w3Label: "" } }

// Odkazy na prvky v DOM
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionCounter = document.getElementById("question-counter");
const scoreEl = document.getElementById("score");
const livesEl = document.getElementById("lives");
const topicBadge = document.getElementById("topic-badge");
const questionText = document.getElementById("question-text");
const codeDisplay = document.getElementById("code-display");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const feedbackText = document.getElementById("feedback-text");

const finalRank = document.getElementById("final-rank");
const finalScore = document.getElementById("final-score");
const statsContainer = document.getElementById("stats-container");

function switchScreen(targetScreen) {
    [startScreen, gameScreen, resultScreen].forEach((screen) => {
        screen.classList.remove("active");
    });
    targetScreen.classList.add("active");
}

function initTopicStats() {
    topicStats = {};
    questions.forEach((q) => {
        if (!topicStats[q.topic]) {
            topicStats[q.topic] = {
                correct: 0,
                total: 0,
                w3Url: q.w3Url,
                w3Label: q.w3Label
            };
        }
    });
}

function startGame() {
    currentIndex = 0;
    score = 0;
    lives = 3;
    initTopicStats();
    updateHud();
    switchScreen(gameScreen);
    renderQuestion();
}

function updateHud() {
    questionCounter.textContent = `${Math.min(currentIndex + 1, questions.length)} / ${questions.length}`;
    scoreEl.textContent = score;
    livesEl.textContent = lives > 0 ? "❤️".repeat(lives) : "💔";
}

function renderQuestion() {
    const q = questions[currentIndex];
    feedbackBox.classList.add("hidden");
    optionsContainer.innerHTML = "";

    updateHud();
    topicBadge.textContent = `Téma: ${q.topic}`;
    questionText.textContent = q.question;
    codeDisplay.textContent = q.code;

    q.options.forEach((optionText, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = optionText;
        btn.addEventListener("click", () => handleAnswer(index, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, clickedBtn) {
    const q = questions[currentIndex];
    const allOptionBtns = optionsContainer.querySelectorAll(".option-btn");

    // Zamkneme všechna tlačítka odpovědí
    allOptionBtns.forEach((btn) => {
        btn.disabled = true;
    });

    topicStats[q.topic].total += 1;

    const isCorrect = selectedIndex === q.correctIndex;

    if (isCorrect) {
        clickedBtn.classList.add("correct");
        score += 100;
        topicStats[q.topic].correct += 1;
        feedbackText.innerHTML = `✅ <strong>Správně! (+100 bodů)</strong><br>${q.explanation}`;
    } else {
        clickedBtn.classList.add("wrong");
        allOptionBtns[q.correctIndex].classList.add("correct");
        lives -= 1;
        feedbackText.innerHTML = `❌ <strong>Tady to nesedělo.</strong><br>${q.explanation}`;
    }

    updateHud();
    feedbackBox.classList.remove("hidden");

    // Pokud došly životy nebo jsme na poslední otázce, upravíme popisek tlačítka
    if (lives <= 0 || currentIndex === questions.length - 1) {
        nextBtn.textContent = "Zobrazit výsledky 📊";
    } else {
        nextBtn.textContent = "Další úkol ➡️";
    }
}

function handleNext() {
    if (lives <= 0 || currentIndex >= questions.length - 1) {
        showResults();
    } else {
        currentIndex += 1;
        renderQuestion();
    }
}

function getRank(points) {
    if (points >= 500) return "🏆 Python Master";
    if (points >= 300) return "⚡ Junior Coder";
    return "🌱 Python Nováček";
}

function showResults() {
    switchScreen(resultScreen);
    finalScore.textContent = score;
    finalRank.textContent = getRank(score);
    statsContainer.innerHTML = "";

    Object.entries(topicStats).forEach(([topicName, data]) => {
        const percentage = data.total > 0
            ? Math.round((data.correct / data.total) * 100)
            : 0;

        const card = document.createElement("div");
        card.className = "stat-card";
        card.innerHTML = `
            <div class="stat-header">
                <span>${topicName}</span>
                <span>${data.correct} / ${data.total} (${percentage}%)</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%;"></div>
            </div>
            <a href="${data.w3Url}" target="_blank" rel="noopener noreferrer">${data.w3Label} ↗</a>
        `;
        statsContainer.appendChild(card);
    });
}

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", startGame);
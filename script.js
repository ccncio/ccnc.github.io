document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("user-input");
    const terminalOutput = document.getElementById("output");

    function appendGlitchyOutput(text) {
        let line = document.createElement("div");
        line.textContent = "";
        terminalOutput.appendChild(line);

        let i = 0;
        function typeEffect() {
            if (i < text.length) {
                line.textContent += text[i];
                i++;
                if (Math.random() > 0.8) line.textContent += "█"; // Random corruption  
                setTimeout(typeEffect, Math.random() * 150);
            } else {
                line.textContent += " ▓"; // Glitchy end  
            }
        }
        setTimeout(typeEffect, Math.random() * 500);
    }

    function simulateHack() {
        appendGlitchyOutput("WARNING: UNAUTHORIZED ACCESS DETECTED ████");
        appendGlitchyOutput("INITIALIZING REMOTE LOCKDOWN... ████");
        document.body.classList.add("blackout");
        setTimeout(() => {
            appendGlitchyOutput("SYSTEM BREACH SUCCESSFUL. ████████████");
            appendGlitchyOutput("DATA WIPE IN PROGRESS... ████████");
            playGlitchSound();
            setTimeout(() => {
                document.body.classList.remove("blackout");
                appendGlitchyOutput("REBOOTING ████████");
            }, 5000);
        }, 3000);
    }

    function triggerRandomGlitches() {
        if (Math.random() > 0.7) {
            simulateHack();
        }
    }

    setInterval(triggerRandomGlitches, 10000);

    function playGlitchSound() {
        let glitchSound = document.getElementById("glitch-sound");
        glitchSound.volume = 0.5;
        glitchSound.play();
    }

    function playErrorSound() {
        let errorSound = document.getElementById("error-sound");
        errorSound.volume = 0.5;
        errorSound.play();
    }

    function playMalwareSound() {
        let malwareSound = document.getElementById("malware-sound");
        malwareSound.volume = 0.7;
        malwareSound.play();
    }

    setInterval(() => {
        if (Math.random() > 0.5) {
            playGlitchSound();
        }
    }, 4000);

    setInterval(() => {
        if (Math.random() > 0.7) {
            playErrorSound();
        }
    }, 6000);

    setInterval(() => {
        if (Math.random() > 0.8) {
            playMalwareSound();
        }
    }, 15000);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = userInput.textContent.trim();
            if (command) {
                appendGlitchyOutput(`>_ ${command}`);
                if (command === "hack") {
                    appendGlitchyOutput("Initializing ████ HACK MODULE...");
                } else if (command === "destroy") {
                    simulateHack();
                } else {
                    appendGlitchyOutput("UNKNOWN COMMAND ████ SYSTEM FAILURE ████");
                }
                userInput.textContent = "";
            }
            event.preventDefault();
        } else if (event.key === "Backspace") {
            userInput.textContent = userInput.textContent.slice(0, -1);
            event.preventDefault();
        } else if (event.key.length === 1) {
            userInput.textContent += event.key;
            event.preventDefault();
        }
    });
});

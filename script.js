document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const input = document.getElementById("commandInput");

    const bootMessages = [
        "Initializing CCNC.io...",
        "Loading protocol [CHAOS]...",
        "Decoding [CODE]...",
        "Deploying [CARNAGE]...",
        "Connecting to the abyss...",
        "ERROR: Reality buffer overflow.",
        "Welcome to CCNC.io > The storm is coming."
    ];

    function typeEffect(text, callback) {
        let index = 0;
        let interval = setInterval(() => {
            output.innerHTML += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                output.innerHTML += "\n";
                if (callback) callback();
            }
        }, 50);
    }

    function bootSequence() {
        output.innerHTML = ""; 
        let i = 0;
        function nextMessage() {
            if (i < bootMessages.length) {
                typeEffect(bootMessages[i], () => {
                    i++;
                    setTimeout(nextMessage, 500);
                });
            } else {
                output.innerHTML += "\n> ";
                input.focus();
            }
        }
        nextMessage();
    }

    bootSequence();

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = input.value.trim();
            input.value = "";

            const response = processCommand(command);
            output.innerHTML += `> ${command}\n${response}\n> `;
        }
    });

    function processCommand(command) {
        const responses = {
            "help": "Available commands: [help, status, prophecy, reboot, games]",
            "status": "System Integrity: UNSTABLE\nGlitch Detected: 87.4%\nWARNING: The system is breaking down.",
            "prophecy": "The storm is inevitable. The code has already been written. Nothing can stop it now.",
            "reboot": () => { bootSequence(); return "Rebooting system..."; },
            "games": () => listGames(),
            "hack01": () => startHackGame(),
            "exploit02": () => startExploitGame()
        };

        return responses[command] ? 
               (typeof responses[command] === "function" ? responses[command]() : responses[command]) :
               "ERROR: Command not recognized.";
    }

    function listGames() {
        return "Available games:\n[1] HACK-01: Brute Force Challenge (Type 'hack01')\n[2] EXPLOIT-02: Social Engineering Simulation (Type 'exploit02')";
    }

    function startHackGame() {
        output.innerHTML += "\n--- HACK-01: Brute Force Challenge ---\n";
        output.innerHTML += "You have intercepted an encrypted file. You have 5 attempts to brute-force the correct 4-digit key.\n";
        let correctCode = Math.floor(1000 + Math.random() * 9000); // Random 4-digit code
        let attemptsLeft = 5;

        function guessLoop() {
            input.addEventListener("keydown", function guessHandler(event) {
                if (event.key === "Enter") {
                    let guess = input.value.trim();
                    input.value = "";
                    if (guess === correctCode.toString()) {
                        output.innerHTML += "ACCESS GRANTED. Data decrypted successfully.\n";
                        input.removeEventListener("keydown", guessHandler);
                    } else {
                        attemptsLeft--;
                        if (attemptsLeft > 0) {
                            output.innerHTML += `ACCESS DENIED. ${attemptsLeft} attempts remaining.\n`;
                        } else {
                            output.innerHTML += "SYSTEM LOCKDOWN. The file has self-destructed.\n";
                            input.removeEventListener("keydown", guessHandler);
                        }
                    }
                    output.innerHTML += "> ";
                }
            });
        }

        guessLoop();
        return "Enter a 4-digit code to proceed.";
    }

    function startExploitGame() {
        output.innerHTML += "\n--- EXPLOIT-02: Social Engineering Simulation ---\n";
        output.innerHTML += "Target: Corporate sysadmin with weak security awareness.\n";
        output.innerHTML += "You need to craft a convincing phishing attack to retrieve admin credentials.\n";
        output.innerHTML += "[1] Fake Security Alert Email\n[2] Spear-phishing Message\n[3] Impersonate IT Support\n";

        function choiceLoop() {
            input.addEventListener("keydown", function choiceHandler(event) {
                if (event.key === "Enter") {
                    let choice = input.value.trim();
                    input.value = "";

                    if (choice === "1") {
                        output.innerHTML += "The sysadmin ignored the email. Try another method.\n";
                    } else if (choice === "2") {
                        output.innerHTML += "SUCCESS. The sysadmin clicked the malicious link. Credentials obtained.\n";
                        input.removeEventListener("keydown", choiceHandler);
                    } else if (choice === "3") {
                        output.innerHTML += "The sysadmin was suspicious and reported you. You have been blocked.\n";
                        input.removeEventListener("keydown", choiceHandler);
                    } else {
                        output.innerHTML += "Invalid choice. Try again.\n";
                    }
                    output.innerHTML += "> ";
                }
            });
        }

        choiceLoop();
        return "Choose an approach (Type 1, 2, or 3).";
    }
});

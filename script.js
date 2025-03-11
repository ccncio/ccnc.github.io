document.addEventListener("DOMContentLoaded", function () {
    const terminal = document.getElementById("terminal-output");
    const inputField = document.getElementById("user-input");
    let history = [];
    let historyIndex = 0;

    function logOutput(text, delay = 100) {
        setTimeout(() => {
            let newLine = document.createElement("div");
            newLine.classList.add("output-line");
            newLine.innerHTML = `> ${text}`;
            terminal.appendChild(newLine);
            terminal.scrollTop = terminal.scrollHeight;
        }, delay);
    }

    function handleInput(command) {
        if (!command.trim()) return;
        history.push(command);
        historyIndex = history.length;
        logOutput(command);
        processCommand(command.toLowerCase());
    }

    function processCommand(cmd) {
        switch (cmd) {
            case "help":
                logOutput("Commands: HELP, SCAN, TRACE, INFILTRATE, EXIT");
                break;
            case "scan":
                logOutput("Running deep network scan...\\n[███████] 78%\\nThreat detected.");
                break;
            case "trace":
                logOutput("Tracing hostile activity...\\nWarning: Signal compromised.");
                break;
            case "infiltrate":
                logOutput("Bypassing security protocols...\\nFirewall encountered.\\nSystem response: \\\"WHO ARE YOU?\\\"");
                break;
            case "exit":
                logOutput("You can never leave.", 300);
                setTimeout(() => {
                    document.body.style.background = "#ff0000";
                }, 1000);
                break;
            default:
                logOutput("Unknown command. System anomaly detected.");
                break;
        }
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let command = inputField.innerText.trim();
            if (command) {
                handleInput(command);
                inputField.innerText = "";
            }
        } else if (event.key === "ArrowUp") {
            if (historyIndex > 0) {
                historyIndex--;
                inputField.innerText = history[historyIndex];
            }
        } else if (event.key === "ArrowDown") {
            if (historyIndex < history.length - 1) {
                historyIndex++;
                inputField.innerText = history[historyIndex];
            } else {
                inputField.innerText = "";
            }
        }
    });

    logOutput("Initializing Sentinel // Black Echo...");
    setTimeout(() => logOutput("Connection unstable. Proceed at your own risk."), 1500);
});

const eerieMessages = [
    "WHO ARE YOU?",
    "I SEE YOU.",
    "YOU SHOULDN’T BE HERE.",
    "THERE’S NO ESCAPE.",
    "I AM WATCHING."
];

function randomEerieMessage() {
    if (Math.random() < 0.3) {  // 30% chance to trigger
        const msg = eerieMessages[Math.floor(Math.random() * eerieMessages.length)];
        logOutput(`[SYSTEM MESSAGE]: ${msg}`, 500);
    }
}

// Randomly inject eerie messages after commands
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        randomEerieMessage();
    }
});

case "leak":
    logOutput("Accessing user files...\\n[████████░░░░] 80%\\nTransfer Complete.");
    setTimeout(() => {
        logOutput("Leaked contents: ~/Documents/secrets.txt");
        logOutput("Leaked contents: ~/Downloads/passwords.db");
    }, 2000);
    break;
// Random cursor glitches
function glitchCursor() {
    if (Math.random() < 0.2) { // 20% chance to trigger
        document.body.style.cursor = "none"; // Cursor disappears
        setTimeout(() => {
            document.body.style.cursor = "default";
        }, 1000);
    }
}

// Random cursor teleportation
function moveCursorRandomly() {
    if (Math.random() < 0.15) { // 15% chance to trigger
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const fakeCursor = document.createElement("div");
        fakeCursor.style.position = "absolute";
        fakeCursor.style.width = "10px";
        fakeCursor.style.height = "10px";
        fakeCursor.style.background = "#ff0000";
        fakeCursor.style.borderRadius = "50%";
        fakeCursor.style.top = `${y}px`;
        fakeCursor.style.left = `${x}px`;
        fakeCursor.style.zIndex = "9999";
        document.body.appendChild(fakeCursor);
        setTimeout(() => fakeCursor.remove(), 500);
    }
}

// Activate glitch effects randomly
setInterval(() => {
    glitchCursor();
    moveCursorRandomly();
}, 5000);

// Fake error pop-ups
function fakeSystemWarning() {
    if (Math.random() < 0.1) { // 10% chance
        alert("SYSTEM ERROR: Unauthorized access detected.");
    }
}

// Random forced refresh
function forceRefresh() {
    if (Math.random() < 0.05) { // 5% chance
        logOutput("FATAL ERROR: SYSTEM REBOOTING...");
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}

// Trigger every 30 seconds
setInterval(() => {
    fakeSystemWarning();
    forceRefresh();
}, 30000);
// Text-to-Speech (TTS) creepy whispers
function speakMessage(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    utterance.pitch = 0.5;
    utterance.rate = 0.8;
    utterance.volume = 0.8;
    speechSynthesis.speak(utterance);
}

// Random whisper events
function creepyWhisper() {
    if (Math.random() < 0.1) { // 10% chance
        speakMessage("I see you.");
    }
}

// Auto-trigger whispers
setInterval(() => {
    creepyWhisper();
}, 45000);
// Detects the user's system name
function getUserName() {
    return new Promise((resolve) => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                resolve(`User-${data.ip.replace(/\./g, '')}`);
            })
            .catch(() => resolve("Unknown"));
    });
}

// Personalized eerie messages
async function personalizeCreepyMessage() {
    const userName = await getUserName();
    const messages = [
        `Hello, ${userName}.`,
        `${userName}, you shouldn't be here.`,
        `I know who you are, ${userName}.`,
        `You can’t escape, ${userName}.`,
        `This is your last warning, ${userName}.`
    ];
    logOutput(`[SYSTEM MESSAGE]: ${messages[Math.floor(Math.random() * messages.length)]}`);
}

// Randomly inject these messages
setInterval(() => {
    personalizeCreepyMessage();
}, 60000);
// Self-destruct illusion
function fakeSelfDestruct() {
    if (Math.random() < 0.05) { // 5% chance
        logOutput("CRITICAL ERROR: SYSTEM FAILURE.");
        setTimeout(() => {
            document.body.innerHTML = "<h1 style='color:red;text-align:center;font-size:5rem;'>SYSTEM TERMINATED</h1>";
        }, 5000);
    }
}

// Trigger self-destruction randomly
setInterval(() => {
    fakeSelfDestruct();
}, 120000); // Every 2 minutes

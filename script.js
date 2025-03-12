async function askAI(prompt) {
    const response = await fetch("https://broken-thunder-895b.toni-927.workers.dev/", {  // Use your Cloudflare Worker URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "7R1Π17¥ | // ΔWΔK3Π" },
                { role: "user", content: prompt }
            ]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}


async function askAI() {
    const input = document.getElementById("userInput").value;
    const resBox = document.getElementById("responseBox");

    if (!input) {
        resBox.innerHTML = "<p>Please enter a question.</p>";
        return;
    }

    resBox.innerHTML = "<p>Loading...</p>";

    // --- API Request ---
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "01d7613197d677acec0bd3ebaa9509fc"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: input }]
        })
    });

    const data = await response.json();

    resBox.innerHTML = "<p>" + data.choices[0].message.content + "</p>";
}

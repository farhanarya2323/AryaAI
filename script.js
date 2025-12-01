async function askAI() {
    const text = document.getElementById("input").value;
    document.getElementById("result").innerHTML = "Loading...";

    const res = await fetch("https://arya-ai-backend.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text })
    });

    const data = await res.json();
    document.getElementById("result").innerHTML =
        data.choices?.[0]?.message?.content || "No response";
}

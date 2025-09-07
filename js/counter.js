const BIN_ID = "68bcefe7ae596e708fe54eff";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
const VISITED_KEY = "hasVisited";

async function updateCounter() {
  try {
    const res = await fetch(`${BIN_URL}/latest`);
    const data = await res.json();
    let visits = data.record.visits;

    if (!localStorage.getItem(VISITED_KEY)) {
      visits += 1;
      await fetch(BIN_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visits })
      });
      localStorage.setItem(VISITED_KEY, "true");
    }

    document.getElementById("counter").innerText = visits;
  } catch (err) {
    console.error("Error updating counter:", err);
  }
}

updateCounter();
// Fun Facts for CreateBias.com - Vanilla JS
const funFacts = [
  "Did you know? There are over 180 documented cognitive biases!",
  "People are more likely to remember negative events than positive ones—this is called negativity bias.",
  "The term ‘cognitive bias’ was first coined in 1972 by psychologists Amos Tversky and Daniel Kahneman.",
  "Confirmation bias can affect everyone—even scientists and judges!",
  "Most biases operate automatically, without us realizing it."
];

function showRandomFact() {
  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
  const factElem = document.getElementById('funFactText');
  if (factElem) factElem.textContent = fact;
}

document.addEventListener('DOMContentLoaded', showRandomFact);

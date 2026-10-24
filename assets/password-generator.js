(() => {
  const form = document.getElementById("password-form");
  const lengthInput = document.getElementById("password-length");
  const output = document.getElementById("password-output");
  const copyButton = document.getElementById("copy-password");
  const status = document.getElementById("password-status");

  const characterSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()-_=+[]{};:,.?"
  };

  function randomBelow(max) {
    const range = 0x100000000;
    const limit = range - (range % max);
    const values = new Uint32Array(1);
    let value;

    do {
      window.crypto.getRandomValues(values);
      value = values[0];
    } while (value >= limit);

    return value % max;
  }

  function generatePassword(length, selectedSets) {
    const characters = selectedSets.map((set) => characterSets[set]);
    const pool = characters.join("");
    const password = characters.map((set) => set[randomBelow(set.length)]);

    while (password.length < length) {
      password.push(pool[randomBelow(pool.length)]);
    }

    for (let index = password.length - 1; index > 0; index -= 1) {
      const swapIndex = randomBelow(index + 1);
      [password[index], password[swapIndex]] = [password[swapIndex], password[index]];
    }

    return password.join("");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    output.value = "";
    copyButton.disabled = true;

    const length = Number(lengthInput.value);
    const selectedSets = Array.from(form.querySelectorAll("input[name='character-set']:checked"))
      .map((checkbox) => checkbox.value);

    if (!Number.isInteger(length) || length < 8 || length > 128) {
      status.textContent = "Choose a length between 8 and 128.";
      return;
    }

    if (selectedSets.length === 0) {
      status.textContent = "Select at least one character type.";
      return;
    }

    if (!window.crypto || typeof window.crypto.getRandomValues !== "function") {
      status.textContent = "Secure password generation is unavailable in this browser context.";
      return;
    }

    output.value = generatePassword(length, selectedSets);
    copyButton.disabled = false;
    status.textContent = "Password generated.";
  });

  copyButton.addEventListener("click", async () => {
    if (!output.value) return;

    try {
      await navigator.clipboard.writeText(output.value);
      status.textContent = "Password copied to clipboard.";
    } catch {
      output.select();
      status.textContent = "Clipboard access was blocked. Select and copy the password manually.";
    }
  });
})();
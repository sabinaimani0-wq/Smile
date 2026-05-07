document.addEventListener("DOMContentLoaded", () => {
  // FORM
  const form = document.getElementById("popupForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const mood = document.getElementById("popupmood").value;
      const duration = document.getElementById("popupDuration").value;
      const result = document.getElementById("popupResult");

      // VALIDATION
      if (mood === "" || duration === "") {
        result.textContent = "Please fill in all fields.";
        result.style.color = "red";
        return;
      }

      // SAVE TO LOCAL STORAGE
      localStorage.setItem("mood", mood);
      localStorage.setItem("duration", duration);

      result.textContent = "Saved successfully!";
      result.style.color = "green";

      // REDIRECT
      setTimeout(() => {
        window.location.href = "./mood.html";
      }, 1000);
    });
  }

  // GET SAVED DATA
  const savedMood = localStorage.getItem("mood");
  const savedDuration = localStorage.getItem("duration");

  // DISPLAY SAVED DATA
  const displayMood = document.getElementById("displayMood");
  const displayDuration = document.getElementById("displayDuration");

  if (displayMood && savedMood) {
    displayMood.textContent = `Mood: ${savedMood}`;
  }

  if (displayDuration && savedDuration) {
    displayDuration.textContent = `Duration: ${savedDuration}`;
  }

  // ADVICE
  const advice = {
    happy:
      "Keep doing things that make you happy and stay connected with people you love.",
    sad: "Take time to rest, talk to someone you trust, and remember difficult moments pass.",
    anxious: "Take deep breaths and focus on one thing at a time.",
    angry:
      "Pause before reacting and try calming activities like walking or music.",
    stressed: "Rest, organize your tasks, and avoid overwhelming yourself.",
    fearful:
      "Ground yourself by focusing on your surroundings and breathing slowly.",
    overwhelmed:
      "Break tasks into small steps and give yourself time to recover.",
    lonely:
      "Reach out to someone you trust or spend time in comforting environments.",
  };

  // DISPLAY ADVICE
  const adviceText = document.getElementById("advicetext");

  if (adviceText && savedMood) {
    adviceText.textContent = advice[savedMood];
  }

  // NOTEPAD
  const notepad = document.getElementById("notepad");

  if (notepad) {
    // LOAD SAVED NOTES
    notepad.value = localStorage.getItem("notepad") || "";

    // SAVE NOTES
    notepad.addEventListener("input", () => {
      localStorage.setItem("notepad", notepad.value);
    });
  }
});redoing the 

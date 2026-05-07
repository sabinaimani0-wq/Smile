// get popup elements
document.addEventListener("DOMContentLoaded", () => {
const openPopupButton= document.getElementById("openPopup");
const popup = document.getElementById("popup");

// open popup when button is clicked
if (openPopupButton && popup) {
  openPopupButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });
}

// close when clicking outside popup
if(popup){
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.add("hidden");
        }
    }); 
}

// handle form submission
const popupForm = document.getElementById("popupForm");
if (popupForm) {
  popupForm.addEventListener("submit", function(event){
    event.preventDefault();
    const mood = document.getElementById("popupMood").value;
const duration = document.getElementById("popupDuration").value;
const popupResult = document.getElementById("popupResult");  
    

// form validation
    if(mood===""|| duration===""){
        popupResult.textContent = "Please fill in all fields.";
        popupResult.style.color = "red";
        return;}

        // save data at local storage
        localStorage.setItem("mood", mood);
        localStorage.setItem("duration", duration);
  popupResult.textContent= "Mood and duration saved successfully!";
  popupResult.style.color = "green";
  setTimeout(() => {
    window.location.href = "./mood.html";
  }, 1000);});}

//   display saved mood and duration on mood.html
const displayMood = document.getElementById("displayMood");
const displayDuration = document.getElementById("displayDuration");
const adviceText = document.getElementById("advicetext");

// get saved values
const savedMood = localStorage.getItem("mood");
const savedDuration = localStorage.getItem("duration");

// display mood
if (displayMood && savedMood) {
  displayMood.textContent = savedMood;
}   
// display duration 
if (displayDuration && savedDuration) {
  displayDuration.textContent = `Duration: ${savedDuration}`;
}

if(adviceText && savedMood){
    const cleanMood = savedMood;
    adviceText.textContent = advice[cleanMood]}
// advice object
const advice = {
    happy:`  
     Engage in regular exercise, such as walking or stretching, to release
        endorphins, reduce stress, and boost mood.
Actively acknowledge good things in
         your life, even small ones like a
        cup of coffee or a friendly wave, to boost happiness.

        Ensure 7–8 hours of quality sleep to maintain emotional balance and
        mental clarity.

        Spend time with supportive friends and family, and nurture positive
        relationships.
 
        Surround yourself with people who appreciate the real you rather than a
        "perfected" version. Quality matters more than quantity; invest time in a few deep,
        meaningful relationships rather than dozens of superficial ones.
      
        Be kind to yourself, avoid excessive self-criticism, and allow yourself
        to smile or laugh.
      
        Practice "confelicity" by genuinely celebrating the successes of friends
        and loved ones.
      
        Reframe negative thoughts and consciously choose to focus on hopeful,
        constructive perspectives.`,

        sad:`
            Don't repress it. Acknowledge your feelings, cry if needed, and remind
        yourself that it is okay to have bad days.
      
      Treat yourself as you would a friend—with patience and care.
      
        Listen to calming music, take a warm bath, light scented candles, or
        wrap yourself in a soft blanket.
  
        Write down your thoughts to process emotions and identify what is
        causing your sadness.
     
        Go for a 15-minute walk, stretch, or do yoga to increase
        endorphins,nature can help clear your head and change your perspective.
      
        Avoid heavy alcohol or caffeine consumption, which can worsen moods, and
        try to eat nutritious meals.
      
        Reduce time on social media and phones, as excessive use can increase
        stress.
  
        Find something to laugh at to help ease physical and mental tension.
    
        Focus on three good things that happened in your day to shift your
        perspective.`,

         anxious:`
    
        Place one hand on your stomach and breathe in slowly to fill it up like
        a balloon, then exhale slowly to release tension.
      
        Identify 5 things you see, 4 things you can touch, 3 things you hear, 2
        things you smell, and 1 thing you taste.
     
        Sit in a chair, place feet flat on the floor, and lean forward with
        elbows on your knees, dropping your head to "ground" energy.
      
        Use lavender scents, drink calming tea, or pet a dog/cat to reduce
        stress hormones.
      
      Go for a walk, swim, dance, or bike ride to burn off adrenaline.
   
        Systematically tense and then relax each muscle group, starting from
        your toes and moving up to your shoulders.
     
        Reduce or eliminate caffeine (coffee, tea, soda, chocolate) and
        nicotine, which can worsen anxiety.
     
        Spend time on hobbies, such as drawing, reading, or playing music, to
        redirect your focus.
     
        Ask yourself if there is hard evidence for a fearful thought and
        consider a more balanced perspective.
     
        Write down your feelings to process emotions rather than keeping them
        bottled up.`};

        // DISPLAY ADVICE
        if(adviceText && savedMood){
            adviceText.textContent= advice[savedMood];
        }
        // notepad functionality
        const notepad = document.getElementById("notepad");
        if(notepad){
            notepad.value= localStorage.getItem("notepad") || "";
notepad.addEventListener("input",()=> {
    localStorage.setItem("notepad", notepad.value);
});}

function clearMoodData(){
    localStorage.removeItem("mood");
    localStorage.removeItem("duration");
    localStorage.removeItem("notepad");
}
});

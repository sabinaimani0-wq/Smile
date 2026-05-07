// get popup elements
document.addEventListener("DOMContentLoaded", () => {
  const showFormButton = document.getElementById("showFormButton");
  const moodFormSection = document.getElementById("moodFormSection");

  // open popup when button is clicked
  if (showFormButton && moodFormSection) {
    showFormButton.addEventListener("click", () => {
      moodFormSection.classList.remove("hidden");
    });
  }

  // close when clicking outside popup
  const form = document.getElementById("moodForm");
if (form){
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
    const mood = document.getElementById("popupMood").value;
    const duration = document.getElementById("popupDuration").value;
   const result = document.getElementById("popupResult");

    // form validation
    if (!mood || !duration) {
      result.textContent = "Please fill in all fields.";
      result.style.color = "red";
      return;
    }
    localStorage.setItem("mood", mood);
    localStorage.setItem("duration", duration);
    
    result.textContent = "Mood and duration saved successfully!";
    result.style.color = "green";

    setTimeout(() => {
      window.location.href = "./mood.html";
    }, 1000);
    });
  // handle form submission
  const savedMood = localStorage.getItem("mood");
  const savedDuration = localStorage.getItem("duration");
      
  const displyyMood = document.getElementById("displayMood");
  const displayDuration = document.getElementById("displayDuration");
  const adviceText = document.getElementById("advicetext");
     
  const advice = {
    happy: `  
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

    sad: `
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

    anxious: `
    
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
        bottled up.`,

        anger:`
         Slow, deep breaths help counteract the physical tension of anger.</li>
      
        Remember that anger in your body only lasts about 90 seconds so before
        acting on it waiit for 90 seconds.
    
        Visualize a calm scene or repeat a phrase like "take it easy" or "relax"
        to de-escalate tension.
     
        Splash cold water on your face, which triggers the mammalian diving
        reflex, slowing your heart rate and reducing stress.
     Use up adrenaline by running, walking, or doing yoga.
      
        Safe physical outlets like tearing up paper, punch a pillow, or smash
        ice cubes to release pent-up energy.
     
        Write down your angry thoughts to process them, then rip up or delete
        the notes afterwards.
      
        Stress-Reduction Diet fluctuating blood sugar can cause irritability.
        Eat regular, balanced meals with complex carbs, protein, and healthy
        fats to stabilize mood.,`

        fear : `
             Try the 4-7-8 method: Breathe in for four seconds, hold for seven, and
        exhale for eight.
    
        Look around and name three things you see, identify three sounds you
        hear, and move three body parts.
     
        Shake your body to release adrenaline, stretch your neck and shoulders,
        or take a quick walk.
     
        Use Scent or Temperature: Lavender is known for its calming properties;
        you can use essential oils. Alternatively, wash your face with cold
        water or hold an ice cube to reset your senses.
      
        Acknowledge and Label the Fear: Simply saying, "I am feeling afraid
        right now," can reduce the intensity of the emotion by engaging the
        analytical part of your brain.
     
        Limit Information Intake: If news or social media is triggering, reduce
        your screen time to avoid overwhelming yourself with worst-case
        scenarios.
      
        Regular exercise, healthy eating, and adequate sleep reduce general
        anxiety levels.,
        `
        overwhelmed:`
        
        Take slow, deep breaths—inhale for 4 seconds, hold for 4, and exhale for
         This triggers the body's relaxation response.
      
        Step outside for fresh air, move to a quiet room, or take a quick walk.
      
        Drink Cold Water dehydration can increase cortisol (stress hormone)
        levels.
      
        Cuddle a pet, listen to calming music, or rub a soothing scent like
        lavender on your wrists.
      
        Write down everything causing you stress to get it out of your head.
     
        Protect your time and energy by declining new tasks, or setting
        boundaries with people who add to your stress.
         
Exercise releases endorphins that improve mood.
      Don't focus on the entire week or month.,

        `
        stressed:`
        
        Breathe in deeply through your nose, letting your belly expand, and
        exhale slowly through your mouth to trigger the body’s relaxation
        response.
      
        Take a 15-minute walk, do jumping jacks, or stretch to release tension.
     
        Listen to music, smell calming scents like lavender, or step outside for
        fresh air.
      
        Practice progressive muscle relaxation by tightening and then relaxing
        muscle groups.
      
      Stick to a consistent schedule and avoid screens before bed.
     
        Learn to say "no" to excessive tasks and manage your time to avoid
        feeling overwhelmed.
     
      Limit Unhealthy Habits: Reduce caffeine and alcohol consumption.
     
        Spend Time with Pets: Petting a dog or cat can quickly reduce stress
        hormones.
     
      Watch a funny video or talk to a friend to trigger endorphins.,`

      lonely:`
         Reconnect with Yourself by embracing solitude by doing things you enjoy
        alone, such as reading, cooking, or going for a walk.
     
        Practice Self-Compassion by treating yourself with kindness rather than judging yourself for feeling lonely.
    
        Journal your feelings write down your emotions to help process them and reduce their power.
    
        Start small by simply being in public spaces like a cafe, library, or park can reduce feelings of isolation.
   
        Use social media wisely use online platforms to connect with communities sharing your interests.
     
        Get active take a walk, go for a run, or join a local exercise group.
     
        Try volunteering engaging with your community or helping others can foster a sense of purpose and connection.
      
        Use soothing sounds play music, podcasts, or the radio to make your home feel less quiet.
    
        Join a group find local clubs, classes, or community groups to meet new people with shared interests.
      ,`

  };
  
  // DISPLAY ADVICE
  if (displayMood && savedMood) {
    display.textContent = `Mood: ${savedMood}`;
  }
  if (displayDuration && savedDuration)
  {
    displayDuration.textContent = `Duration: ${savedDuration}`;
  }
  if ( adviceText && savedMood){
    adviceText.textContent = advice[savedMood]
  }
}
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
    happy: [
      "Engage in regular exercise, such as walking or stretching, to release endorphins, reduce stress, and boost mood.",
      "Actively acknowledge good things in your life, even small ones like a cup of coffee or a friendly wave, to boost happiness.",
      "Ensure 7–8 hours of quality sleep to maintain emotional balance and mental clarity.",
      "Spend time with supportive friends and family, and nurture positive relationships.",
      " Surround yourself with people who appreciate the real you rather than a perfected version.",
      "Quality matters more than quantity; invest time in a few deep,meaningful relationships rather than dozens of superficial ones.",
      "Be kind to yourself, avoid excessive self-criticism, and allow yourself to smile or laugh",
      "Practice confelicity by genuinely celebrating the successes of friends and loved ones.",
      " Reframe negative thoughts and consciously choose to focus hopeful,constructive perspectives.",
    ],

    sad: [
      "Don't repress it. Acknowledge your feelings, cry if needed, and remind yourself that it is okay to have bad days.",
      "Treat yourself as you would a friend with patience and care.",
      "Listen to calming music, take a warm bath, light scented candles,or wrap yourself in a soft blanket.",
      "Write down your thoughts to process emotions and identify what is causing your sadness.",
      "Go for a 15-minute walk, stretch, or do yoga to increase endorphins,nature can help clear your head and change your perspective.",
      "Reduce time on social media and phones, as excessive use can increase stress.",
      "Find something to laugh at to help ease physical and mental tension.",
      "Focus on three good things that happened in your day to shift you  perspective.",
    ],
    anxious: [
      "Place one hand on your stomach and breathe in slowly to fill it up like a balloon, then exhale slowly to release tension.",
      "Identify 5 things you see, 4 things you can touch, 3 things you hear,2 things you smell, and 1 thing you taste.",
      "Sit in a chair, place feet flat on the floor, and lean forward with elbows on your knees, dropping your head to ground energy.",
      "Use lavender scents, drink calming tea, or pet a dog/cat to reduce stress hormones.",
      "Go for a walk, swim, dance, or bike ride to burn off adrenaline.",
      "Systematically tense and then relax each muscle group, starting from your toes and moving up to your shoulders.",
      "Reduce or eliminate caffeine (coffee, tea, soda, chocolate) and nicotine, which can worsen anxiety.",
      "Spend time on hobbies, such as drawing, reading, or playing music, to redirect your focus.",
      "Ask yourself if there is hard evidence for a fearful thought and consider a more balanced perspective.",
      " Write down your feelings to process emotions rather thankeeping them bottled up.",
    ],
    angry: [
      "Slow, deep breaths help counteract the physical tension of anger.",
      "Remember that anger in your body only lasts about 90 seconds so before acting on it waiit for 90 seconds.",
      "Visualize a calm scene or repeat a phrase like take it easy or relax to de-escalate tension.",
      "Splash cold water on your face, which triggers the mammalian diving reflex, slowing your heart rate and reducing stress.",
      "Use up adrenaline by running, walking, or doing yoga.",
      "Safe physical outlets like tearing up paper, punch a pillow, or smash ice cubes to release pent-up energy.",
      "Write down your angry thoughts to process them, then rip up or delete the notes afterwards.",
      "Stress-Reduction Diet fluctuating blood sugar can cause irritability.",
      "Eat regular, balanced meals with complex carbs, protein, and healthy fats to stabilize mood.",
    ],
    stressed: [
      " Breathe in deeply through your nose, letting your belly expand, and exhale slowly through your mouth to trigger the body’s relaxation response.",
      " Take a 15-minute walk, do jumping jacks, or stretch to release tension.",
      "Listen to music, smell calming scents like lavender, or step outside for fresh air.",
      "Practice progressive muscle relaxation by tightening and the relaxing muscle groups.",
      " Stick to a consistent schedule and avoid screens before bed.",
      "Learn to say no to excessive tasks and manage your time to avoid feeling overwhelmed.",
      "Limit Unhealthy Habits: Reduce caffeine and alcohol consumption.",
      "Spend Time with Pets: Petting a dog or cat can quickly reduce stress hormones.",
      "Watch a funny video or talk to a friend to trigger endorphins.",
    ],
    fearful: [
      "Try the 4-7-8 method: Breathe in for four seconds, hold for seven, and exhale for eight.",
      "Look around and name three things you see, identify three sounds you hear, and move three body parts.",
      "Shake your body to release adrenaline, stretch your neck and shoulders,or take a quick walk.",
      " Use Scent or Temperature: Lavender is known for its calming properties; you can use essential oils. Alternatively, wash your face with cold water or hold an ice cube to reset your senses.",
      "Acknowledge and Label the Fear: Simply saying, 'I am feeling afraid right now,' can reduce the intensity of the emotion by engaging the analytical part of your brain.",
      "Limit Information Intake: If news or social media is triggering, reduce your screen time to avoid overwhelming yourself with worst case scenarios.",
      "Regular exercise, healthy eating, and adequate sleep reduce general anxiety levels.",
    ],
    overwhelmed: [
      "Take slow, deep breaths—inhale for 4 seconds, hold for 4, and exhale for 4 seconds.This triggers the body's relaxation response.",
      "Step outside for fresh air, move to a quiet room, or take a quick walk.",
      " Drink Cold Water dehydration can increase cortisol (stress hormone)levels.",
      "Cuddle a pet, listen to calming music, or rub a soothing scent like lavender on your wrists.",
      "Write down everything causing you stress to get it out of your head.",
      "Protect your time and energy by declining new tasks, or setting boundaries with people who add to your stress.",
      "Exercise releases endorphins that improve mood.",
    ],
    lonely: [
      " Practice Self-Compassion by treating yourself with kindness rather than judging yourself for feeling lonely.",
      "Start small by simply being in public spaces like a cafe, library, or park can reduce feelings of isolation.",
      " Use social media wisely use online platforms to connect with communities sharing your interests.",
      "Get active take a walk, go for a run, or join a local exercise group.",
      "Try volunteering engaging with your community or helping others can foster a sense of purpose and connection.",
      "Use soothing sounds play music, podcasts, or the radio to make your home feel less quiet.",
      " Join a group find local clubs, classes, or community groups to meet new people with shared interests.",
    ],
    pressured: [
      "Use the 4-7-8 method (inhale for 4 seconds, hold for 7, exhale for 8) or try diaphragmatic breathing to quickly calm the body's  fight or flight response.",
      "If possible, take a 5-minute walk, stretch, or do a silly walk to break the cycle of tension.",
      " Write down everything causing you stress on a large piece of paper. Cross off things you cannot control and focus on the actionable items.",
      " Distinguish between musts and shoulds. Tackle high-priority items first and delegate tasks when possible.",
      " Protect your time and energy by declining extra commitments when you are already at capacity.",
      " Large tasks can feel insurmountable. Break them into small, manageable steps and focus on just one step at a time.",
      "Perfectionism is a major source of stress. Aim for good enough rather than perfect.",
      "Regular exercise, such as walking, running, or swimming, releases endorphins and acts as a powerful stress reliever.",
    ],
    substanceabuse: [
      "Set personal goals—academic, athletic, or professional—and recognize that substance use often acts as a barrier to achieving them.",
      "Use the 3-3-3 rule (name three things you see, three sounds you hear, move three body parts) to ground yourself during moments of high stress or temptation.",
      " Surround yourself with people who respect your choices and do not pressure you to use substances.",
      "Prepare excuses or a firm plan ahead of time to refuse substances in social situations.",
      " Set boundaries in friendships: True friends will respect your decision to remain sober; if not, it may be necessary to distance yourself from that group.",
      "If you are using substances to feel normal, manage anxiety, or sleep, it is a sign to seek help.",
    ],
    suicidalthoughts:[
    " Focus on your senses. Taking time to think about what you can smell, taste, touch, hear and see can help to ground your thoughts.",
  " If you can, try getting a glass of water or sitting somewhere comfortable. Try and have something to eat if you're hungry.Try to avoid drinking alcohol or taking recreational drugs, as this can make you feel worse.",
  "Try to distract yourself by doing something you enjoy, such as watching a movie, listening to music, or going for a walk.",
  "Write down what you're looking forward to. This could be eating your favourite meal, seeing a loved one, or the next season of a TV show.",
  "Tell yourself you can get through this. Repeat to yourself that you can get past how you feel right now. This can help you to regain hope and focus on getting through it.",
  "Allow yourself to feel your feelings. Suppressing your feelings when they happen can cause them to build up over time. And make them even harder to cope with. Let yourself feel what you need to. And use coping strategies to manage them if that's helpful.",
  "Learn what makes you feel worse. Some people might call these 'triggers'. You might find certain environments, situations, or things people say are triggers for you. You might not be sure what your triggers are. To help work them out, you can track your feelings using a diary, planner or journal.",
  "Spending time helping others can be rewarding. It can build your confidence and make you feel appreciated. You can find volunteer opportunities from different organisationsSpending time helping others can be rewarding. It can build your confidence and make you feel appreciated. You can find volunteer opportunities from different organisations.",
  "Remove anything you could use to harm yourself, or ask someone to remove these for you.If you're in an unsafe location, try and get somewhere safe if you can. ",  
  "If you're on your own, try and find people to be with if that would help.",
],
  };

  // DISPLAY ADVICE
  const adviceText = document.getElementById("advicetext");

  if (adviceText && savedMood) {
    adviceText.innerHTML = advice[savedMood]
    .map(item => `<li>${item}</li>`)
    .join("");
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
}); 

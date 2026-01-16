// Prediction: Monday, Wednesday, and Sunday all tie for most screen time.
// Prediction: The weekend does not have the best focus levels, but Wed., Thurs., Fri. do.
// Prediction: More caffeine does not really help, but makes the user more focused sometimes.

const weekData = [
  { day: "Monday", sleepHours: 6, screenTime: 2, mood: "Hungry", caffeineIntake: 0, focusLevel: 5 },
  { day: "Tuesday", sleepHours: 5, screenTime: 1, mood: "Tired", caffeineIntake: 0, focusLevel: 5 },
  { day: "Wednesday", sleepHours: 6, screenTime: 2, mood: "Motivated", caffeineIntake: 0, focusLevel: 7 },
  { day: "Thursday", sleepHours: 6, screenTime: 1, mood: "Focused", caffeineIntake: 1, focusLevel: 8 },
  { day: "Friday", sleepHours: 6, screenTime: 1, mood: "Calm", caffeineIntake: 1, focusLevel: 9 },
  { day: "Saturday", sleepHours: 7, screenTime: 1, mood: "Relaxed", caffeineIntake: 0, focusLevel: 5 },
  { day: "Sunday", sleepHours: 8, screenTime: 2, mood: "Rested", caffeineIntake: 0, focusLevel: 5 }
];

// Four functions that explore this data

function findMostRelaxedDay(data) {
  for (let entry of data) {
    if (entry.mood === "Relaxed") {
      return entry.day;
    }
  }
  let best = data[0];
  for (let entry of data) {
    if (entry.focusLevel > best.focusLevel) {
      best = entry;
    }
  }
  return best.day;
}


function daysWithoutCaffeine(data) {
  let count = 0;
  for (let entry of data) {
    if (entry.caffeineIntake === 0) {
      count++;
    }
  }
  return count;
}


function countCaffeineDays(data) {
  let count = 0;
  for (let entry of data) {
    if (entry.caffeineIntake > 0) {
      count++;
    }
  }
  return count;
}


function averageSleep(data) {
  let total = 0;
  for (let entry of data) {
    total += entry.sleepHours;
  }
  return total / data.length;
}
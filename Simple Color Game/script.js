const colors = {
  // Reds
  "Red": "#FF0000", "Crimson": "#DC143C", "Scarlet": "#FF2400", "Maroon": "#800000", "Burgundy": "#800020",
  "Dark Red": "#8B0000", "Tomato": "#FF6347", "Indian Red": "#CD5C5C", "Light Coral": "#F08080", "Salmon": "#FA8072",
  "Firebrick": "#B22222", "Coral": "#FF7F50", "Carmine": "#FF0038", "Ruby": "#E0115F", "Cardinal": "#C41E3A",
  
  // Oranges
  "Orange": "#FFA500", "Dark Orange": "#FF8C00", "Orange Red": "#FF4500", "Tangerine": "#F28500", "Pumpkin": "#FF7518",
  "Darkorange": "#FF8C00", "Burnt Orange": "#CC5500", "Amber": "#FFBF00", "Safety Orange": "#FF6600", "Mango": "#FFAB29",
  
  // Yellows
  "Yellow": "#FFFF00", "Gold": "#FFD700", "Light Yellow": "#FFFFE0", "Lemon": "#FFFACD", "Khaki": "#F0E68C",
  "Dark Khaki": "#BDB76B", "Pale Goldenrod": "#EEE8AA", "Goldenrod": "#DAA520", "Dark Goldenrod": "#B8860B", "Banana": "#FFE135",
  "Canary": "#FFEF00", "Chartreuse": "#7FFF00", "Green Yellow": "#ADFF2F", "Lawn Green": "#7CFC00",
  
  // Greens
  "Green": "#008000", "Lime": "#00FF00", "Spring Green": "#00FF7F", "Turquoise": "#40E0D0", "Light Turquoise": "#AFEEEE",
  "Medium Turquoise": "#48D1CC", "Dark Turquoise": "#00CED1", "Forest Green": "#228B22", "Dark Green": "#006400", "Sea Green": "#2E8B57",
  "Dark Sea Green": "#8FBC8F", "Light Sea Green": "#20B2AA", "Medium Sea Green": "#3CB371", "Olive": "#808000", "Dark Olive": "#556B2F",
  "Teal": "#008080", "Dark Teal": "#003333", "Seafoam": "#93E9BE", "Mint": "#98FF98", "Emerald": "#50C878",
  "Kelly Green": "#4CBB17", "Jade": "#00A86B", "Hunter Green": "#355E3B", "Bottle Green": "#006A4E", "Pine Green": "#01796F",
  "Light Green": "#90EE90", "Pale Green": "#98FB98", "Honeydew": "#F0FFF0", "Mint Cream": "#F5FFFA",
  
  // Cyans & Aquas
  "Cyan": "#00FFFF", "Aqua": "#00FFFF", "Aquamarine": "#7FFFD4", "Powder Blue": "#B0E0E6", "Pale Turquoise": "#AFEEEE",
  
  // Blues
  "Blue": "#0000FF", "Dark Blue": "#00008B", "Navy": "#000080", "Medium Blue": "#0000CD", "Royal Blue": "#4169E1",
  "Steel Blue": "#4682B4", "Dark Steel Blue": "#1C1C3C", "Light Steel Blue": "#B0C4DE", "Cornflower Blue": "#6495ED",
  "Cadet Blue": "#5F9EA0", "Sky Blue": "#87CEEB", "Light Sky Blue": "#87CEFA", "Deep Sky Blue": "#00BFFF", "Dodger Blue": "#1E90FF",
  "Azure": "#007FFF", "Cerulean": "#007BA7", "Prussian Blue": "#003366", "Slate Blue": "#6A5ACD", "Dark Slate Blue": "#483D8B",
  "Medium Slate Blue": "#7B68EE", "Light Blue": "#ADD8E6", "Pale Blue": "#B0C4DE", "Alice Blue": "#F0F8FF",
  "Indigo": "#4B0082", "Electric Blue": "#7DF9FF", "Periwinkle": "#CCCCFF",
  
  // Purples & Violets
  "Purple": "#800080", "Magenta": "#FF00FF", "Fuchsia": "#FF00FF", "Violet": "#EE82EE", "Dark Violet": "#9400D3",
  "Blue Violet": "#8A2BE2", "Dark Purple": "#301934", "Orchid": "#DA70D6", "Dark Orchid": "#9932CC", "Medium Orchid": "#BA55D3",
  "Medium Purple": "#9370DB", "Dark Magenta": "#8B008B", "Plum": "#DDA0DD", "Thistle": "#D8BFD8", "Lavender": "#E6E6FA",
  "Lavender Blue": "#967BB6", "Medium Violet Red": "#C71585", "Pale Violet Red": "#DB7093", "Deep Pink": "#FF1493",
  "Grape": "#6F2DA8", "Purple Heart": "#69359C", "Purple Mountain Majesty": "#9678B6", "Amethyst": "#9966CC", "Lilac": "#C8A2C8",
  "Mauve": "#E0B0FF",
  
  // Pinks
  "Pink": "#FFC0CB", "Light Pink": "#FFB6C1", "Hot Pink": "#FF69B4", "Pale Violet Red": "#DB7093", "Rosy Pink": "#FF007F",
  "Carnation": "#FF66CC", "Coral Pink": "#F08080", "Blush": "#FFB6C1", "Carnation Pink": "#FFA6C9",
  
  // Browns & Tans
  "Brown": "#A52A2A", "Dark Brown": "#654321", "Saddle Brown": "#8B4513", "Sienna": "#A0522D", "Chocolate": "#D2691E",
  "Sandy Brown": "#F4A460", "Peru": "#CD853F", "Tan": "#D2B48C", "Burlywood": "#DEB887", "Light Brown": "#B8860B",
  "Coffee": "#6F4E37", "Copper": "#B87333", "Bronze": "#CD7F32", "Beige": "#F5F5DC", "Bisque": "#FFE4C4",
  "Cornsilk": "#FFF8DC", "Cream": "#FFFDD0", "Linen": "#FAF0E6", "Wheat": "#F5DEB3", "Peach": "#FFDAB9",
  "Rosy Brown": "#BC8F8F", "Chestnut": "#954535", "Rust": "#B7410E", "Apricot": "#FBCEB1",
  
  // Grays & Blacks
  "Black": "#000000", "Dark Gray": "#A9A9A9", "Gray": "#808080", "Light Gray": "#D3D3D3", "Gainsboro": "#DCDCDC",
  "White Smoke": "#F5F5F5", "White": "#FFFFFF", "Snow": "#FFFAFA", "Ghost White": "#F8F8FF", "Slate Gray": "#708090",
  "Dark Slate Gray": "#2F4F4F", "Dim Gray": "#696969", "Light Slate Gray": "#778899", "Silver": "#C0C0C0",
  "Platinum": "#E5E4E2", "Eggshell": "#F0EFF0", "Ivory": "#FFFFF0", "Off White": "#FAFAFA", "Charcoal": "#36454F",
  "Gunmetal": "#2C3E50", "Dove Gray": "#D3D3D3", "Dark Slate": "#2F4F4F", "Smoky Black": "#100C08",
  
  // Miscellaneous
  "Teal": "#008080", "Olive": "#808000", "Navy": "#000080", "Papaya Whip": "#FFEFD5", "Moccasin": "#FFE4B5",
  "Navajo White": "#FFDEAD", "Floral White": "#FFFAF0", "Old Lace": "#FDF5E6", "Seashell": "#FFF5EE",
  "Antique White": "#FAEBD7", "Blanched Almond": "#FFEBCD", "Light Goldenrod Yellow": "#FAFAD2",
  "Web Orange": "#FFA500", "Web Gray": "#808080", "Web Maroon": "#800000", "Web Purple": "#800080"
};

let currentColor = {};
let hardMode = false;
const ROUNDS_PER_GAME = 5;
let currentRound = 0;
let totalScore = 0;

// Convert hex color to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Calculate the distance between two colors in RGB space
function calculateColorDistance(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  
  const dr = rgb1.r - rgb2.r;
  const dg = rgb1.g - rgb2.g;
  const db = rgb1.b - rgb2.b;
  
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

// Calculate similarity score (0-100) with balanced penalty for incorrect guesses
function calculateScore(hex1, hex2) {
  const distance = calculateColorDistance(hex1, hex2);
  
  // Use exponential decay with balanced coefficient
  // Close matches score high, far matches score low
  const score = Math.max(0, 100 * Math.exp(-0.008 * distance));
  return Math.round(score);
}

function toggleHardMode() {
  hardMode = !hardMode;
  const btn = document.getElementById('hardModeBtn');
  if (!btn) return;
  if (hardMode) {
    btn.classList.add('active');
    btn.textContent = 'Hard Mode: ON';
  } else {
    btn.classList.remove('active');
    btn.textContent = 'Hard Mode: OFF';
  }
  const colorNameElement = document.getElementById('colorName');
  if (colorNameElement) {
    colorNameElement.style.color = hardMode && currentColor.hex ? '#000000' : (currentColor.hex || '#000000');
  }
}

function syncColorInputs() {
  const picker = document.getElementById('colorPicker');
  const hexInput = document.getElementById('colorHexInput');
  if (!picker || !hexInput) return;
  // keep hex input in sync with color picker
  picker.addEventListener('input', () => { hexInput.value = picker.value.toUpperCase(); });
  // allow typing hex to update picker (only valid 6-char hex)
  hexInput.addEventListener('input', () => {
    let v = hexInput.value.trim();
    if (v[0] !== '#') v = '#' + v;
    if (/^#[0-9A-Fa-f]{6}$/.test(v)) {
      picker.value = v.toUpperCase();
      hexInput.value = v.toUpperCase();
    }
  });
}

function startNewGame() {
  // Reset game counters and start first round
  currentRound = 0;
  totalScore = 0;
  updateStatusDisplay();
  startNewRound();
}

function updateStatusDisplay() {
  const rc = document.getElementById('roundCounter');
  const ts = document.getElementById('totalScore');
  if (rc) rc.textContent = `${currentRound}/${ROUNDS_PER_GAME}`;
  if (ts) ts.textContent = `${totalScore}/${ROUNDS_PER_GAME * 100}`;
}

function startNewRound() {
  // advance to next round
  currentRound = Math.min(currentRound + 1, ROUNDS_PER_GAME);
  const colorNames = Object.keys(colors);
  const randomName = colorNames[Math.floor(Math.random() * colorNames.length)];
  const colorHex = colors[randomName];

  currentColor = { name: randomName, hex: colorHex };

  const colorNameElement = document.getElementById('colorName');
  colorNameElement.textContent = randomName;
  colorNameElement.style.color = hardMode ? '#000000' : colorHex;

  document.getElementById('gameScreen').style.display = 'block';
  document.getElementById('resultsScreen').style.display = 'none';
  document.getElementById('colorPicker').value = '#FF0000';
  document.getElementById('submitBtn').disabled = false;

  // update counters
  updateStatusDisplay();
  
  // clear previous messages
  const totalMsg = document.getElementById('totalScoreMessage');
  const resultMessage = document.getElementById('resultMessage');
  if (totalMsg) totalMsg.textContent = '';
  if (resultMessage) resultMessage.textContent = '';
}

function submitColor() {
  const userColor = document.getElementById('colorPicker').value.toUpperCase();
  const correctColor = currentColor.hex.toUpperCase();
  const score = calculateScore(userColor, correctColor);
  
  // accumulate score for the round
  totalScore += score;
  updateStatusDisplay();

  document.getElementById('correctColorBox').style.backgroundColor = correctColor;
  document.getElementById('correctColorName').textContent = currentColor.name;
  
  document.getElementById('userColorBox').style.backgroundColor = userColor;
  document.getElementById('userColorHex').textContent = userColor;
  
  const resultMessage = document.getElementById('resultMessage');
  if (userColor === correctColor) {
    resultMessage.textContent = '🎉 Perfect Match! 100/100 Points';
    resultMessage.className = 'correct';
  } else if (score >= 90) {
    resultMessage.textContent = `🟢 Excellent! ${score}/100 Points`;
    resultMessage.className = 'correct';
  } else if (score >= 70) {
    resultMessage.textContent = `🟡 Good! ${score}/100 Points`;
    resultMessage.className = 'correct';
  } else if (score >= 50) {
    resultMessage.textContent = `🟠 Okay! ${score}/100 Points`;
    resultMessage.className = 'incorrect';
  } else {
    resultMessage.textContent = `🔴 Not quite! ${score}/100 Points`;
    resultMessage.className = 'incorrect';
  }
  
  document.getElementById('gameScreen').style.display = 'none';
  document.getElementById('resultsScreen').style.display = 'block';
  
  // disable submit to avoid accidental double submits
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) submitBtn.disabled = true;
  // After showing per-round result, decide whether this was the last round
  const resetBtn = document.getElementById('resetBtn');
  const totalMsg = document.getElementById('totalScoreMessage');
  if (currentRound >= ROUNDS_PER_GAME) {
    // Game over: show final total and a message
    if (totalMsg) totalMsg.textContent = `Final Score: ${totalScore}/${ROUNDS_PER_GAME * 100}`;
    if (resetBtn) resetBtn.textContent = 'Play Again';
    // Tailored message on overall performance
    let overall = '';
    const pct = (totalScore / (ROUNDS_PER_GAME * 100)) * 100;
    if (pct >= 95) overall = 'You must have cheated, this game is impossible!';
    else if (pct >= 90) overall = 'Im still suspicious, nobody knows colors this well.';
    else if (pct >= 85) overall = 'Well color me impressed.';
    else if (pct >= 80) overall = 'Im green with envy at your skills.';
    else if (pct >= 75) overall = 'You get a few colors right and think youre all that?.';
    else if (pct >= 70) overall = 'This is actually still a really good score but you probably feel like a failure';
    else if (pct >= 65) overall = 'In school youd be on thin ice, here this doesnt matter at all so good job I guess';
    else if (pct >= 60) overall = 'So unbelievably mid, why even play? Honestly go get a hobby';
    else if (pct >= 55) overall = 'Graduating kindergarten was probably a peak for you, huh?';
    else if (pct >= 50) overall = 'You actually did really well! SIKE I lied, your eyes are FRIED';
    else if (pct >= 45) overall = 'Why am I even writing these? You dont deserve an endgame message';
    else if (pct >= 40) overall = 'Colors are so hard, we cant all be artists, but Im glad youre not one';
    else if (pct >= 30) overall = 'Did you even try? Its literally just picking colors.';
    else if (pct >= 20) overall = 'Legends speak of an ancient prophecy, about one who shall unite the world';
    else if (pct >= 10) overall = 'To see no color is to live in darkness, and yet you shall bring the light to this kingdom';
    else if (pct >= 5) overall = 'In order to reject color, one first must embrace it. You have taken the first step towards enlightenment';
    else if (pct >= 3) overall = 'I actually dont even think this is possible, if you achieve this, you legally can have my kidney';
    else overall = 'generic end message, play again loser';
    if (totalMsg) totalMsg.textContent += ' — ' + overall;
  } else {
    if (resetBtn) resetBtn.textContent = 'Next';
    if (totalMsg) totalMsg.textContent = `Score so far: ${totalScore}/${currentRound * 100}`;
  }
}

function resetGame() {
  // Reset the entire game (used for Play Again)
  startNewGame();
}

document.addEventListener('DOMContentLoaded', () => {
  startNewGame();
  syncColorInputs();
  const submit = document.getElementById('submitBtn');
  const reset = document.getElementById('resetBtn');
  if (submit) submit.addEventListener('click', () => {
    submitColor();
  });
  if (reset) reset.addEventListener('click', () => {
    // If game is over (button shows Play Again), reset entire game. Otherwise, start next round.
    if (currentRound >= ROUNDS_PER_GAME) {
      startNewGame();
    } else {
      startNewRound();
    }
  });
  const hardBtn = document.getElementById('hardModeBtn');
  if (hardBtn) hardBtn.addEventListener('click', toggleHardMode);
});

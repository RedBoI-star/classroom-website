// Array of Games (You can add 30 games here)
const games = [
  { name: 'Game 1', url: 'https://example.com/game1', thumbnail: 'game1-thumbnail.jpg' },
  { name: 'Game 2', url: 'https://example.com/game2', thumbnail: 'game2-thumbnail.jpg' },
  { name: 'Game 3', url: 'https://example.com/game3', thumbnail: 'game3-thumbnail.jpg' },
  { name: 'Game 4', url: 'https://example.com/game4', thumbnail: 'game4-thumbnail.jpg' },
  { name: 'Game 5', url: 'https://example.com/game5', thumbnail: 'game5-thumbnail.jpg' },
  // Add more games up to 30
];

// Array of Soundboard (You can add 20 sound clips here)
const soundboard = [
  { name: 'Sound 1', url: 'https://example.com/sound1.mp3' },
  { name: 'Sound 2', url: 'https://example.com/sound2.mp3' },
  { name: 'Sound 3', url: 'https://example.com/sound3.mp3' },
  { name: 'Sound 4', url: 'https://example.com/sound4.mp3' },
  // Add more sounds up to 20
];

// Function to show the active tab
function showTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');
  
  // Show the selected tab
  document.getElementById(tabName).style.display = 'block';
}

// Function to display games dynamically
function displayGames() {
  const gameList = document.getElementById('game-list');
  games.forEach(game => {
    const gameSlot = document.createElement('div');
    gameSlot.classList.add('game-slot');
    gameSlot.innerHTML = `
      <img src="${game.thumbnail}" alt="${game.name}" width="100" height="100">
      <p>${game.name}</p>
      <button onclick="launchGame('${game.url}')">Play</button>
    `;
    gameList.appendChild(gameSlot);
  });
}

// Function to launch a game
function launchGame(url) {
  // Check if the URL might contain a virus
  if (url.includes('virus')) {
    alert('Attention: This URL might contain a virus. The owner has been informed.');
  } else {
    // Open the game URL in the current window (inside the Classroom website)
    window.open(url, '_self');
  }
}

// Function to display soundboard dynamically
function displaySoundboard() {
  const soundList = document.getElementById('sound-list');
  soundboard.forEach(sound => {
    const soundSlot = document.createElement('div');
    soundSlot.classList.add('sound-slot');
    soundSlot.innerHTML = `
      <p>${sound.name}</p>
      <button onclick="playSound('${sound.url}')">Play</button>
    `;
    soundList.appendChild(soundSlot);
  });
}

// Function to play sound from soundboard
function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

// Full-Screen Button functionality
function toggleFullScreen() {
  const gameContainer = document.body;
  if (gameContainer.requestFullscreen) {
    gameContainer.requestFullscreen();
  } else if (gameContainer.mozRequestFullScreen) { // Firefox
    gameContainer.mozRequestFullScreen();
  } else if (gameContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
    gameContainer.webkitRequestFullscreen();
  } else if (gameContainer.msRequestFullscreen) { // IE/Edge
    gameContainer.msRequestFullscreen();
  }
}

// Mouse Cursor Customization functionality
function changeCursorColor(event) {
  const color = event.target.value;
  document.body.style.cursor = `url('https://www.rw-designer.com/cursor-library?cursor=custom/cursor-${color}.png'), auto`; // Example cursor change
}

// Admin Command: P4nic Button Function
function p4nicButton() {
  alert("P4nic button clicked! Redirecting...");
  window.location.href = 'https://fwcs.schoology.com/home#/?_k=k0nbqu'; // Redirect URL for the P4nic button
}

// Admin Command: Announcement Function
function adminAnnouncement(message) {
  // Show announcement globally (e.g., as an alert or modal)
  alert(`Announcement: ${message}`);
  // Additional logic for a global pop-up can be implemented here
}

// Command for /luckyblock (for admins/owners)
function luckyBlock() {
  alert('Lucky Block Event: A Lucky Block has appeared!');
  // Here you can add additional logic for Lucky Block animation, lucky block health, pickaxe effect, etc.
}

// Initialize the website
function initialize() {
  // Display the first tab (Games by default)
  showTab('games');
  
  // Call the function to display games and soundboard
  displayGames();
  displaySoundboard();
}

// Run the initialization on page load
window.onload = initialize;



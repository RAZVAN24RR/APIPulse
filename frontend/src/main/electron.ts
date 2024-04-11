import { app, BrowserWindow } from "electron";

function createWindow(): void {
  // Crează fereastra browser-ului
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Încarcă index.html al aplicației React
  if (process.env.NODE_ENV === "production") {
    // Încarcă index.html din directorul build pentru producție
    win.loadFile("./build/index.html");
  } else {
    // Încarcă de pe serverul de dezvoltare pentru dezvoltare
    win.loadURL("http://localhost:3000/");
  }
}

// Acest eveniment va fi emis când Electron a finalizat
// inițializarea și este pregătit să creeze ferestre browser.
// Unele API-uri pot fi folosite doar după ce acest eveniment are loc.
app.on("ready", createWindow);

// Adaugă event listeners suplimentari după necesități

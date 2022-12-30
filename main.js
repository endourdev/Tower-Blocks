const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    title: "Tower Blocks",
    autoHideMenuBar: true,
    width: 800,
    height: 600,
  })

  win.loadFile('./src/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    
    rpc.setActivity({
      buttons: [
        { label: `Nous Rejoindre`, url: `https://discord.gg/zuwvnrKBXy` }
    ],
        details: "Martyrise sa barre Espace",
        startTimestamp: new Date(),
        largeImageKey: "logo",
        largeImageText: "Tu aimes bien ?"
        
        
    });
    const terminal_msg = "Le rich presence est en place regarde ton Discord !"
    console.log(terminal_msg);
    const ok = true
    if (ok === true) {
      console.log(ok)
    } else {
      console.warn("Le rich presence n'as pas été mis en place !")
    }
});

rpc.login({
    clientId: "1057264127569047583"
})
const { app, BrowserWindow } = require('electron')
const path = require('path')
const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    
    rpc.setActivity({
      buttons: [
        { label: `Développeur ?`, url: `https://github.com/fofhgit`},
        { label: `Nous Rejoindre`, url: `https://discord.gg/lca` }
    ],
        details: "Tryhard",
        startTimestamp: new Date(),
        largeImageKey: "logo",
        largeImageText: "J'aime les tour."
        
        
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
    clientId: "1032327175992516618"
})

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
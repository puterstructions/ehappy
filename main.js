const {app, Menu, Tray} = require('electron')
const notifier = require('node-notifier')

let tray = null

function createTray() {
  tray = new Tray('tray-icon.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Enterprise Happiness', type: 'normal'},
    {label: 'Quit', type: 'normal', click: () => { app.exit() }}
  ])
  tray.setToolTip('Enterprise Happiness')
  tray.setContextMenu(contextMenu)
}

app.on('ready', () => {
  createTray()
  notifier.notify({
    title: 'Enterprise happiness',
    message: 'Would you recommend your employer to a friend?'
  })
})

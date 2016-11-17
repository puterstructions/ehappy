const {app, Menu, Tray} = require('electron')

let tray = null
app.on('ready', () => {
  tray = new Tray('tray-icon.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Enterprise Happiness', type: 'normal'}
  ])
  tray.setToolTip('Enterprise Happiness')
  tray.setContextMenu(contextMenu)
})

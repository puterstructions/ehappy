const {app, Menu, Tray} = require('electron')
const notifier = require('node-nodifier')

let tray = null

const createTray = () => {
  tray = new Tray('tray-icon.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Enterprise Happiness', type: 'normal'}
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

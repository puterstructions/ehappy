const {app, BrowserWindow, Menu, Tray, ipcMain} = require('electron')
const console = require('console')

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

let notificationWindow = null

function createNotificationWindow() {
  notificationWindow = new BrowserWindow({
    alwaysOnTop:true,
    frame:false,
    fullscreenable:false,
    maximizable:false,
    minimizable:false,
    movable:false,
    show:false,
    resizable:false,
    useContentSize:true,
    width: 450,
    height: 200
  })
  notificationWindow.loadURL(`file://${__dirname}/pages/notification.html`)
  notificationWindow.on('ready-to-show', () => { notificationWindow.show() })
}

app.on('ready', () => {
  createTray()
  createNotificationWindow()
})

ipcMain.on('ehappy-answer', (e, q, a) => {
  console.log(q)
  console.log(a)
  notificationWindow.hide()
})

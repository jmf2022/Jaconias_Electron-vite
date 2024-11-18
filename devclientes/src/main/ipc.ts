import { ipcMain } from 'electron'

// Handle 
ipcMain.handle("fetch-users", () => {
  console.log("BUSCANDO USUARIOS...")

  return [
    { id: 1, nome: "Matheus"},
    { id: 2, nome: "Lucas"},
    { id: 3, nome: "Ana"},
  ]
})
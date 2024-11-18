import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { json } from 'stream/consumers'
import {viteStaticCopy} from 'vite-plugin-static-copy'

export default defineConfig({
   //Parte do main
  main: {
    plugins: [externalizeDepsPlugin(),
      viteStaticCopy({
        targets:[
          {
            src:'resources/*', dest:'resources'
          }
        ]
      })

    ]
  },

  //Parte do renderer
  renderer: {
    define:{'process.platform':JSON.stringify(process.platform)

    },
    css:{
      postcss:{
        plugins:[
tailwindcss({ config:'./src/renderer/tailwind.config.js'})
        ]
      }

    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})

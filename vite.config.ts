import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {loadEnv} from "vite";
import {EnvMeta} from "./env";

// https://vite.dev/config/
const envDir="./"
export default defineConfig((config)=>{
  const env =loadEnv(config.mode,envDir)as EnvMeta;
  console.log(env.VITE_SERVER_URL);
  return{
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    },
    plugins: [
      vue(),
      vueDevTools(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {

          },
          additionalData: '@import "@/assets/var.less";',
          javascriptEnabled:true,
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server:{
      host: "0.0.0.0",
      port: 8080,
      proxy:{
        "/api":{
          target: env.VITE_SERVER_URL,
          rewrite:(path)=>path.replace("/api",'')
        }
      }
    },
    envDir: "./"
  }
})

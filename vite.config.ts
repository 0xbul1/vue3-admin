import { defineConfig, ConfigEnv } from 'vite'
import type { UserConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

function pathResolve(dir: string) {
  // 需要安装@types/node解决process类型报错
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  return {
    root,
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    }
    // plugins: [vue()]
  }
})


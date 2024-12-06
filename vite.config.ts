// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import svgr from 'vite-plugin-svgr';

// export default defineConfig({
//   plugins: [
//     react(),
//     svgr({
//       // Optional: customize SVGR options
//       svgrOptions: {
//         exportType: 'named',
//         ref: true,
//         typescript: true,
//       },
//     }),
//   ],
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});

import webpack from 'webpack'
import path from 'path'
import { BuildEnv, BuildMode, BuildOptions } from './config/webpack/types/index'
import { buildConfig } from './config/webpack/buildConfig'

export default (env: BuildEnv): webpack.Configuration => {
  const mode: BuildMode = env.mode || 'development'
  const PORT = env.port || 3300
  const alias = {
    '@/*': path.resolve(__dirname, 'src'),
  }

  const options: BuildOptions = {
    mode: mode,
    port: PORT,
    alias: alias,
    isDev: mode === 'development',
    paths: {
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'dist'),
      static: path.resolve(__dirname, 'src'),
      configFile: path.join(__dirname, 'tsconfig.json'),
    },
  }

  const config: webpack.Configuration = buildConfig(options)
  return config
}

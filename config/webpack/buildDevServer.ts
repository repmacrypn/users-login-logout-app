import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port, paths } = options

  return {
    port: port,
    open: true,
    hot: true,
    historyApiFallback: true,
    compress: true,
    static: {
      directory: paths.static,
    },
  }
}

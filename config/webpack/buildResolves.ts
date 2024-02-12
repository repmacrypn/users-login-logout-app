import { ResolveOptions } from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { BuildOptions } from './types'

export function buildResolves(options: BuildOptions): ResolveOptions {
  const { alias, paths } = options

  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias,
    plugins: [
      new TsconfigPathsPlugin({
        configFile: paths.configFile,
      }),
    ],
  }
}

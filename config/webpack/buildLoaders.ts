import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|svg|webp)$/i,
    loader: 'file-loader',
    options: {
      name() {
        if (options.isDev) {
          return '[path][name].[ext]'
        }

        return '[contenthash].[ext]'
      },
      outputPath: 'assets',
    },
  }
  return [fileLoader, babelLoader, typescriptLoader]
}

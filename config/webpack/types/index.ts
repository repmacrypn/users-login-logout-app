export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entry: string
  output: string
  html: string
  favicon: string
  static: string
  configFile: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  port: number
  isDev: boolean
  alias: Record<string, string>
}

export interface BuildEnv {
  mode: BuildMode
  port: number
}

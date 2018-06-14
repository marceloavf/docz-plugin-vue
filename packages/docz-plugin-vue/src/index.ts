import { createPlugin } from 'docz-core'

interface BabelRC {
  presets?: any[]
  plugins?: any[]
  cacheDirectory?: boolean
  babelrc?: boolean
}

type ModifyBabelRC = (babelrc: BabelRC) => BabelRC

export const doczPluginVue = () =>
  createPlugin({
    modifyBabelRc: ((babelrc: BabelRC): BabelRC => {
      const options: BabelRC = {
        plugins: ['vuera/babel'],
        babelrc: true,
      }
      return options
    }) as ModifyBabelRC,
  })

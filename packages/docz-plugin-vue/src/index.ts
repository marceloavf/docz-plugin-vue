import { createPlugin } from 'docz-core'

interface BabelRC {
  presets?: any[]
  plugins?: any[]
  cacheDirectory?: boolean
  babelrc?: boolean
}

type ModifyBabelRC = (babelrc: BabelRC) => BabelRC

const doczPluginVue = () =>
  createPlugin({
    modifyBabelRc: ((babelrc: BabelRC) => {
      const options: BabelRC = {
        plugins: ['vuera/babel'],
        babelrc: true,
      }
      return options
    }) as ModifyBabelRC,
  })

doczPluginVue()

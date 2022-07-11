import * as path from 'path'

export const css = {
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
      // modifyVars: {
      //   hack: `true; @import (reference) "${path.resolve('app/styles/var.less')}";`,
      // },
    }
  }
}

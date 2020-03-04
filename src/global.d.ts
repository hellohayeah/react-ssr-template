declare module '*.ico' {
  const src: string
  export default src
}

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>

  const src: string
  export default src
}

declare module '*.module.scss' {
  const scss: { [key: string]: string }
  export default scss
}

declare module 'express-manifest-helpers'

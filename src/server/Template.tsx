import React from 'react'
import Helmet from 'react-helmet'

type Props = {
  children: any
  css: string[]
  scripts: string[]
}

const Template = ({ children, css = [], scripts = [] }: Props) => {
  const head = Helmet.renderStatic()

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="favicon.ico" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        {css.filter(Boolean).map(href => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
        {scripts.filter(Boolean).map(src => (
          <script key={src} src={src} />
        ))}
      </body>
    </html>
  )
}

export default Template

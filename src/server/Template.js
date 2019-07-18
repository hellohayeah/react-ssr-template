import React from 'react'
import Helmet from 'react-helmet'

const Template = ({ children, css = [], scripts = [] }) => {
  const head = Helmet.renderStatic()

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        {css.map(href => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
        {scripts.map(src => (
          <script key={src} src={src} />
        ))}
      </body>
    </html>
  )
}

export default Template

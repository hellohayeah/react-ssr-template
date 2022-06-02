import React from 'react'

type Props = {
  children: any
  helmetContext: any
  scripts: string[]
}

const Template = ({ children, scripts = [], helmetContext: { helmet } }: Props) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" href="favicon.ico" />
      {helmet.base.toComponent()}
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {helmet.script.toComponent()}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />
      {scripts.filter(Boolean).map(src => (
        <script key={src} src={src} />
      ))}
    </body>
  </html>
)

export default Template

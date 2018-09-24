module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': [
      'error',
      process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'
    ]
  }
}

const path = require('path')

module.exports = {
  reactStrictMode: true,
  trailingSlash : true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src', 'scss')],
  },
  env:{
    GOOGLE_ANALYTICS:process.env.GOOGLE_ANALYTICS,
  }
}

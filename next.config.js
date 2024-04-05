const path = require('path')
// get the authenticated Firebase App
// const firebaseApp = getApp(useRouter().query.__muraliram-n);
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}
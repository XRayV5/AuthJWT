const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  // console.log('?????????')
  // app.use((req, res, next) => { console.log(res); return next()});
  app.get('/', requireAuth, function (req, res) {
    res.send({ message: 'MSGMSG' });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  // app.post('/signin', Authentication.signin);
  app.post('/signup', Authentication.signup);
};

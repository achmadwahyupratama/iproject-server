const NewsController = require('../controllers/newsController')
const StandingController = require('../controllers/standingsController')
const authentication = require('../middlewares/auth')
const countryRouter = require('./countryRouter')
const favRouter = require('./favouriteRouter')
const teamRouter = require('./teamRouter')
const userRouter = require('./userRouter')
const router = require('express').Router()
router.get('/', authentication ,(req, res) => {
    res.status(200).json({welcome: 'this is my app'})
})
router.use('/users', userRouter)
router.use(authentication)
router.use('/countries', countryRouter)
router.use('/teams', teamRouter)
router.use('/favourites', favRouter)
router.get('/standings/:leagueKey', StandingController.getStandings)
router.get('/news', NewsController.getNews)
module.exports = router
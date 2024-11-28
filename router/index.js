var userRouter = require('./userRouter/index.js')
var router = {
    run: function (request, response) {
        userRouter.run(request, response);
    }
}

module.exports = router;
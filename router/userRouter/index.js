var routerMethods = require('../methods.js');
var routes = require('../routes.js')
const {
    getUsers,
    addUser,
    updateUser,
    deleteUser
} = require('../../controller/users/index.js') 

var userRouter = {
    run(request, response) {
        routerMethods.get(request, response, routes.users.value, getUsers)
        routerMethods.post(request, response, routes.users.value, addUser)
        routerMethods.put(request, response, routes.users.value, updateUser)
        routerMethods.delete(request, response, routes.users.value, deleteUser)
    }
}

module.exports = userRouter;
function getUsers(request, response) {
    response.end('Get Users Successful!')
}
function addUser(request, response) {
    response.end('Add User Successful!')
}
function updateUser(request, response) {
    response.end('Update User Successful!')
}
function deleteUser(request, response) {
    response.end('Delete User Successful!')
}
module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}
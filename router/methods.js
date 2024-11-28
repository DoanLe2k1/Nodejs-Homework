var routerMethods = {
    get: function(request, response, path, callback) {
        if (path === request.url && request.method === 'GET') {
            callback(request, response)
        }
    },
    post: function(request, response, path, callback) {
        if (path === request.url && request.method === 'POST') {
            callback(request, response)
        }
    },
    put: function(request, response, path, callback) {
        if (path === request.url && request.method === 'PUT') {
            callback(request, response)
        }
    },
    delete: function(request, response, path, callback) {
        if (path === request.url && request.method === 'DELETE') {
            callback(request, response)
        }
    }
}

module.exports = routerMethods;
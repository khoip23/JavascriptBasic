var users = [
    {
        id: 1,
        name: 'khoi pham',
    },
    {
        id: 2,
        name: 'song dang',
    },
    {
        id: 3,
        name: 'dam hung',
    },
]

var comments = [
    {
        id: 1,
        userId: 1,
        content: 'anh son chua ra video'
    },
    {
        id: 2,
        userId: 2,
        content: 'vua ra xong em oi'
    }
]

function getUsersByIds(userIds) {
    return new Promise(function (resole) {
        setTimeout(function () {
            var res = users.filter(function (user) {
                return userIds.includes(user.id)
            })
            resole(res)
        }, 1000)
    })
}

function getComments() {
    return new Promise(function (resole) {
        setTimeout(function () {
            resole(comments)
        }, 1000)
    })
}

getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.userId
        })
        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
    .then(function(data) {
        console.log(data)
    })








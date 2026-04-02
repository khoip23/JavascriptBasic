var usersAPI = 'https://jsonplaceholder.typicode.com/users'

fetch(usersAPI)
    .then(function(reponse) {
        return reponse.json();
    })
    .then(function(users) {
        var htmls = users.map(function(user) {
            return `<li>
                <h1>${user.name}</h1>
                <p>${user.company.name}</p>
            </li>`
        })
        var html = htmls.join('')
        document.getElementById('user-block').innerHTML = html
    })
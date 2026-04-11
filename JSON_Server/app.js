var CoursesApi = "http://localhost:3000/Courses"

// fetch(CoursesApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(courses) {
//         console.log(courses);
//     })

var courseApi = 'http://localhost:3000/Courses'

function start() {
    getCourses(renderCourses)

    handleCreateForm()
}

start();

function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback)
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course) {
        return `
            <li class = "course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick="handleFixCourse(${course.id})">SỬA</button>
            </li>
        `;
    })

    listCoursesBlock.innerHTML = htmls.join('')
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options) 
        .then(function(response) {
            response.json()
        })
        .then(callback)
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi + '/' + id, options) 
        .then(function(response) {
            response.json()
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id)
            if(courseItem)
            {
                courseItem.remove();
            }
        })
}

// function handleFixCourse(id, newData) {
//     var options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newData)
//     }
//     fetch(courseApi + '/' + id, options) 
//         .then(function(response) {
//             response.json()
//         })
//         .then(function(updateCourse) {
//             var courseItem = document.querySelector('.course-item-' + id)
//             if(courseItem)
//             {
//                 courseItem.innerHTML = `
//                     <h4>${updatedCourse.name}</h4>
//                     <p>${updatedCourse.description}</p>
//                 `;
//             }
//         })
// }

function handleCreateForm() {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value
    
        var formData = {
            name: name,
            description: description
        }

        createCourse(formData, function() {
            getCourses(renderCourses)
        })
    }
}


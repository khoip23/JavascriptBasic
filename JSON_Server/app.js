var CoursesApi = "http://localhost:3000/Courses"

fetch(CoursesApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    })
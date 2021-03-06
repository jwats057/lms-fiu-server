module.exports = app => {
    const studentcourse = require("../controllers/student-course.controller");

    app.post("/student-courses", studentcourse.create);

    app.get("/student-courses", studentcourse.findAll);

    app.get("/student-courses/s/:studentId", studentcourse.findOneStudent);

    app.get("/student-courses/c/:courseId", studentcourse.findOneCourse);

    app.put("/student-courses/:studentId", studentcourse.update);

    app.delete("/student-courses/:studentId/:courseId", studentcourse.delete);

    app.delete("/student-courses", studentcourse.deleteAll); 
};
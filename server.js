// server.js
import express from 'express';
import courses from './course.js'; 
import logger from './logger.js';
import validateQuery from './validateQuery.js';
import authenticator from './authenticator.js';
const app = express();
const PORT = 3000;

app.use(logger);
app.use(authenticator);
// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', validateQuery, (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;

    // Implementing the filter logic
    const courseFiltered = courses.filter(course => {
        if (course.department !== dept) return false;

        if (level && course.level !== level) return false;

        if (!isNaN(minCredits) && course.credits < minCredits)  return false;
        if (!isNaN(maxCredits) && course.credits > maxCredits) return false;

        if (semester && course.semester !== semester) return false;

        if (instructor && !course.instructor.toLowerCase().includes(instructor.toLowerCase())) return false;
            
        return true;
      
    }); 
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    res.json(courseFiltered);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.listen(PORT, () => console.log(`server started on port ${PORT}`));


//============Роутери========

// const userRouter = require('./routes/user.routes')
const faqRouter = require('./routes/faq.routes')
const facultiesRouter = require('./routes/faculties.routes')
const departmentsRouter = require('./routes/departments.routes')
const teachersRouter = require('./routes/teachers.routes')

// app.use('/api', userRouter);
app.use('/faq', faqRouter);
app.use('/faculties', facultiesRouter);
app.use('/departments', departmentsRouter);
app.use('/teachers', teachersRouter);






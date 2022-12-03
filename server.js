const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.listen(PORT, () => console.log(`server started on port ${PORT}`));


//============Роутери========

// const userRouter = require('./routes/user.routes')
const faqRouter = require('./routes/faq.routes')
const facultiesRouter = require('./routes/faculties.routes')


// app.use('/api', userRouter);
app.use('/faq', faqRouter);
app.use('/faculties', facultiesRouter);






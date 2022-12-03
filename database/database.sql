-- вставить команду 3-4 рази, щоб всі відношення підгрузились

CREATE TABLE faq(
   id SERIAL PRIMARY KEY NOT NULL,
   question VARCHAR(255) NOT NULL,
   answer VARCHAR(255) NOT NULL
);

CREATE TABLE schedules(
    id SERIAL PRIMARY KEY NOT NULL,
    teacher_id INTEGER NOT NULL,
    discipline_id INTEGER NOT NULL,
    group_id INTEGER NOT NULL,
    time VARCHAR(32) NOT NULL,
    classroom VARCHAR(32),
    FOREIGN KEY (teacher_id) REFERENCES teachers (id),
    FOREIGN KEY (discipline_id) REFERENCES disciplines (id),
    FOREIGN KEY (group_id) REFERENCES groups (id)
);

CREATE TABLE disciplines(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(64) NOT NULL
);

CREATE TABLE groups(
     id SERIAL PRIMARY KEY NOT NULL,
     department_id INTEGER NOT NULL,
     name VARCHAR(32) NOT NULL,
     course INTEGER NOT NULL,
     FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE students(
     id SERIAL PRIMARY KEY NOT NULL,
     group_id INTEGER NOT NULL,
     name VARCHAR(32) NOT NULL,
     email VARCHAR(32),
     phone VARCHAR(32) NOT NULL,
     FOREIGN KEY (group_id) REFERENCES groups (id)
);

CREATE TABLE departments(
     id SERIAL PRIMARY KEY NOT NULL,
     faculty_id INTEGER NOT NULL,
     name VARCHAR(32) NOT NULL,
     short_name VARCHAR(32) NOT NULL,
     FOREIGN KEY (faculty_id) REFERENCES faculties (id)
);

CREATE TABLE faculties(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(32) NOT NULL,
    short_name VARCHAR(32) NOT NULL
);

CREATE TABLE teachers(
   id SERIAL PRIMARY KEY NOT NULL,
   name VARCHAR(32) NOT NULL,
   surname VARCHAR(32) NOT NULL,
   email VARCHAR(32),
   phone VARCHAR(32) NOT NULL
);



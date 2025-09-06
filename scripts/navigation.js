// List of courses in the first certificate of BYU
// This array contains the course information for the required courses 
// that are in the first certificate called Web and 
// Computer Programming of the Software Development degree.

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

/* Current Date & Last Modified Code */
const outputDate = document.querySelector("#currentYear");
const outputModified = document.querySelector("#lastModified");

const date = new Date().getFullYear();
let lastModified = document.lastModified;

outputDate.textContent = date;
outputModified.textContent = lastModified;



// Selecting DOM elements
const courseList = document.getElementById("course-list");

const allBtn = document.getElementById("all-btn");
const wddBtn = document.getElementById("wdd-btn");
const cseBtn = document.getElementById("cse-btn");

/*
// Render courses
function renderCourses(coursesToRender) {
    courseList.innerHTML = ""; // Clear current display

    coursesToRender.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        // Add class based on completion
        if (course.completed) {
            courseDiv.classList.add("completed");
        } else {
            courseDiv.classList.add("not-completed");
        }

        courseDiv.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Description:</strong> ${course.description}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
    `;

        courseList.appendChild(courseDiv);
    });
}
    */

function renderCourses(coursesToRender) {
    courseList.innerHTML = ""; // Limpa o container

    coursesToRender.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course", course.completed ? "completed" : "not-completed");

        // Ícone de check se o curso estiver completo
        const checkIcon = course.completed ? '✅ ' : '';

        // Mostrar apenas subject e number, com ícone se completo
        courseDiv.innerHTML = `<h3>${checkIcon}${course.subject} ${course.number}</h3>`;

        courseList.appendChild(courseDiv);
    });
    updateCredits(coursesToRender); // atualiza créditos dinamicamente
}

const totalCreditsSpan = document.getElementById("total-credits");

function updateCredits(coursesToRender) {
    const totalCredits = coursesToRender.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsSpan.textContent = totalCredits;
}


function setActiveButton(button) {
    document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

allBtn.addEventListener("click", () => {
    renderCourses(courses);
    setActiveButton(allBtn);
});

wddBtn.addEventListener("click", () => {
    const wddCourses = courses.filter(c => c.subject === "WDD");
    renderCourses(wddCourses);
    setActiveButton(wddBtn);
});

cseBtn.addEventListener("click", () => {
    const cseCourses = courses.filter(c => c.subject === "CSE");
    renderCourses(cseCourses);
    setActiveButton(cseBtn);
});


// Event listeners
allBtn.addEventListener("click", () => renderCourses(courses));
wddBtn.addEventListener("click", () => {
    const wddCourses = courses.filter(c => c.subject === "WDD");
    renderCourses(wddCourses);
});
cseBtn.addEventListener("click", () => {
    const cseCourses = courses.filter(c => c.subject === "CSE");
    renderCourses(cseCourses);
});

// Initial load
renderCourses(courses);

function updateCredits(coursesToRender) {
    const totalCredits = coursesToRender.reduce((sum, c) => sum + c.credits, 0);
    document.querySelector(".credit-note").textContent =
        `The total credits for courses listed above is ${totalCredits}`;
}


// Store the selected elements that we are going to use.
const navbuttom = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');
});







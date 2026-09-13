const tasks = [
    {
        day: 1,
        title: "Introduction to Basics",
        description: "What is JS? Variable names and Statement Expression",
        solution: "day1.html"
    },
    {
        day: 2,
        title: "Basic Loopings",
        description: "Learned basic looping using for",
        solution: "day2.html"
    },
    {
        day: 3,
        title: "JavaScript Loops",
        description: "Print numbers from 1 to 100 using a for loop.",
        solution: "day3.html"
    }
];

const taskContainer = document.getElementById("taskContainer");

tasks.forEach(task => {

    const card = document.createElement("div");
    card.className = "task-card";

    card.innerHTML = `
        <h2>Day ${task.day}</h2>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <a href="Solutions/${task.solution}" target="_blank">
            View Solution
        </a>
    `;

    taskContainer.appendChild(card);

});
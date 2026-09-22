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
        title: "Closure Function",
        description: "Used to access the private variable even after the execution ",
        solution: "day3.html"
    },{
        day: 4,
        title: "Higher Order Function",
        description: " Used  to return the function ",
        solution: "day4.html"
    },{
        day: 5,
        title: "Array Basics",
        description: "Create ,Access,Nested Arrray , adding two elements in array,accessing second_last element  ",
        solution: "day5.html"

    },{
        day: 6,
        title: "Object Methods",
        description: "Map filter Reduce find " ,
        solution: "day6.html"

    },{
        day: 7,
        title: "Asyc and Sync",
        description: "Callback Promises Asyn Await" ,
        solution: "day7.html"

    },{
        day: 8,
        title: "Logical and bussiness Logics ",
        description: "variables to async/ await" ,
        solution: "day8.html"

    },{
        day: 9,
        title: " REACT - Class Component ",
        description: "Website creation using  5 Class Component" ,
        solution: "day9.html"

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
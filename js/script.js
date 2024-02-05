const data = [
	{
		name: "Push-ops",
		deadline: "2023-12-06",
		completed: false,
	},
	{
		name: "Lesson",
		deadline: "2077-12-17",
		completed: true,
	},
	{
		name: "Practice",
		deadline: "2023-05-01",
		completed: false,
	},
];

const dataRenderTasks = (array) => {
	let arrayList = array.map(
		(item, index) => `
			<div class="task">
				<div class="task_block">
					<div class="task_title">
						<h1 class="task_name ${item.completed ? "completed" : ""}">
							${index + 1}. ${item.name}
						</h1>
						<p class="task_deadline">${item.deadline}</p>
					</div>
					<div class="buttons">
						<button onclick="toggleCompleted(${index})">completed</button>
						<button onclick="deleteTodo(${index})">delete</button>
					</div>
				</div>
			</div>
		`
	);
	const getHtmlTodo = document.getElementById("todo_list");
	getHtmlTodo.innerHTML = arrayList.join("");
};
dataRenderTasks(data);

const addTask = () => {
	const getNameInput = document.getElementById("task_input_name");
	const getDeadlineInput = document.getElementById("task_input_deadline");

	if (getNameInput.value && getDeadlineInput.value) {
		data.push({
			name: getNameInput.value,
			deadline: getDeadlineInput.value,
			completed: false,
		});
	} else {
		alert("please enter the task!");
	}

	dataRenderTasks(data);

	getNameInput.value = "";
	getDeadlineInput.value = "";
};

addEventListener("keydown", (event) => {
	console.log(event.key);
	if (event.key === "Enter") {
		addTask();
	}
});

const toggleCompleted = (index) => {
	// ! V1
	// if (data[index].completed) {
	// 	data[index].completed = false;
	// } else {
	// 	data[index].completed = true;
	// }

	// ! V2
	data[index].completed = !data[index].completed;

	dataRenderTasks(data);
};

const deleteTodo = (index) => {
	if (index) {
		data.splice(index, 1);
		dataRenderTasks(data);
	}
};

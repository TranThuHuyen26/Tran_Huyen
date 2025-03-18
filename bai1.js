let tasks = [];

// Hàm thêm công việc
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        tasks.push(taskValue);
        taskInput.value = ""; // Xóa nội dung ô nhập sau khi thêm
        displayTasks(); // Cập nhật danh sách hiển thị
    }
}

// Hàm xóa công việc
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks(); // Cập nhật danh sách hiển thị sau khi xóa
}

// Hàm sửa công việc
function editTask(index) {
    const taskList = document.getElementById('taskList');
    const li = taskList.children[index];
    const taskText = li.querySelector('.task-text');
    const taskInput = li.querySelector('.task-input');
    const editButton = li.querySelector('.edit-btn');

    // Nếu công việc đang ở chế độ chỉnh sửa (hiển thị ô nhập)
    if (taskInput.style.display === "none") {
        taskInput.style.display = "inline-block";
        taskText.style.display = "none";
        editButton.textContent = "Lưu";
    } else {
        // Cập nhật công việc và thoát khỏi chế độ chỉnh sửa
        const newTask = taskInput.value.trim();
        if (newTask !== "") {
            tasks[index] = newTask;
            displayTasks(); // Cập nhật danh sách sau khi sửa
        }
    }
}

// Hàm hiển thị danh sách công việc
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ""; // Xóa danh sách hiện tại

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
                    <span class="task-text">${task}</span>
                    <input type="text" class="task-input" value="${task}" style="display: none;">
                    <button class="edit-btn" onclick="editTask(${index})">Sửa</button>
                    <button onclick="removeTask(${index})">Xóa</button>
                `;
        taskList.appendChild(li);
    });
}

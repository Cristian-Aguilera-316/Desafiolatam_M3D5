document.addEventListener("DOMContentLoaded", function () {
    var addTaskButton = document.getElementById("addTaskButton");
    addTaskButton.addEventListener("click", agregarTarea);

    var tareasIniciales = ["pasear al perro", "ir a trabajar", "comprar en el super"];
    tareasIniciales.forEach(function (tarea) {
        agregarTareaExistente(tarea);
    });
    actualizarContadores();

    function agregarTarea() {
        var tarea = document.getElementById("newTaskInput").value;
        if (tarea !== "") {
            agregarTareaExistente(tarea);
            actualizarContadores();
            document.getElementById("newTaskInput").value = "";
        } else {
            alert("Por favor, ingresa una tarea válida.");
        }
    }

    function agregarTareaExistente(tarea) {
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerHTML = `
    <div class="tarea">
        <div>
        </div>
        <div class="id">
        ID
        </div>
        <div class="nombre">
            <p>${tarea}</p>
        </div>
        <div class="check">
            <input type="checkbox">
            <button class="deleteButton">Eliminar</button>
        </div>
     </div>
    `;
    taskList.appendChild(newTask);
    var deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            this.parentElement.parentElement.remove();
            actualizarContadores();
        });
    });

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            actualizarContadores();
        });
    });
}

    function actualizarContadores() {
        var totalTasks = document.querySelectorAll(".tarea").length;
        var completedTasks = document.querySelectorAll('input[type="checkbox"]:checked').length;
        document.getElementById("totalTasks").innerText = totalTasks;
        document.getElementById("completedTasks").innerText = completedTasks;
    }
});

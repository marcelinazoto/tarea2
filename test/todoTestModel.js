import TodoModel from "../models/todoModel.js";
var inittest = async () => {
  var todomodel = new TodoModel();
  /*todomodel.createTodo(
    "Test1",
    "Examen",
    new Date(),
    "hour",
  );
  todomodel.createTodo(
    "Test2",
    "Examen",
    "2021-02-28",
    "hour1",
  );
  console.log(await todomodel.getTodos());*/
  //todomodel.deleteTodo("603c11db8a9af400eb00a9fb");

  //await todomodel.updateModel("603c126d15dc72011191996e", { name: "Test3" });
  console.log(await todomodel.getTodos());
};
inittest();

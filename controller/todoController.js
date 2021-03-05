import TodoModel from "../models/todoModel.js";
var TODO = new TodoModel();
class TodoController
{
    constructor() {}
    async createTodo(request, response) 
    {
        var data = request.body;
        var result = await TODO.createTodo(
            data.name,
            data.description,
            new Date(),
            data.hour,
            data.done
        );
        response.status(200).json(result);
    }
    async getTodos(request, response) 
    {
        var result = await TODO.getTodos();
        response.status(200).json(result);
    }
    async updateTodo(request, response) 
    {
        var id = request.params.id;
        var updatedata = request.body;
        var result = await TODO.updateModel(id, updatedata);
        response.status(200).json(result);
    }
    async deleteTodo( request, response) 
    {
        var id = request.params.id;
        var result = await TODO.deleteTodo(id);
        response.status(200).json(result);
    }
}
export default TodoController;
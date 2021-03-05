import TareaModel from "../models/tareaModel.js";
var TAREA = new TareaModel();
class TareaController
{
    constructor() {}
    async createTarea(request, response) 
    {
        var data = request.body;
        var result = await TAREA.createTarea(
            data.name,
            data.description,
            new Date(),
            data.hour,
            data.done
        );
        response.status(200).json(result);
    }
    async getTareas(request, response) 
    {
        var result = await TAREA.getTareas();
        response.status(200).json(result);
    }
    async updateTarea(request, response) 
    {
        var id = request.params.id;
        var updatedata = request.body;
        var result = await TAREA.updateModel(id, updatedata);
        response.status(200).json(result);
    }
    async deleteTarea( request, response) 
    {
        var id = request.params.id;
        var result = await TAREA.deleteTarea(id);
        response.status(200).json(result);
    }
}
export default TareaController;
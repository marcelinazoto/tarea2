import TareaModel from "../models/tareaModel.js";
var inittest = async () => {
  var tareamodel = new TareaModel();
  tareamodel.createTarea(
    "Foto1",
    "Marcelina",
    "marcelina.zoto.villca2109@gmail.com",
    "1234",
  );

  console.log(await todomodel.getTodos());
  //todomodel.deleteTodo("603c11db8a9af400eb00a9fb");

  //await todomodel.updateModel("603c126d15dc72011191996e", { name: "Test3" });
  //console.log(await tareamodel.getTareas());
};
inittest();

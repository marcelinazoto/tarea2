import mongoose from "../connection/connect.js";
class TareaModel 
{
  constructor() 
  {
    this.Schema = mongoose.Schema;
    this.TareaSchema = new this.Schema(
    {
      foto: String,
      nombre: String,
      email: String,
      password: String,
    });
    this.mymodel = mongoose.model("tareas", this.TareaSchema);
  }
  /* 
  C. create
  */
  createTarea(name, description, date, hour, done) 
  {
    var tarea = {
      foto,
      nombre,
      email,
      password,
    };
    var newtarea = new this.mymodel(tarea);
    return new Promise((resolve, reject) => 
    {
      newtarea.save().then((docs) => 
      {
        console.log("Usuario registrado");
        resolve(docs);
      });
    });
  }
  /*
  R. read
  */
  getTareas() {
    return new Promise((resolve, reject) => 
    {
      this.mymodel.find({}, (err, docs) => 
      {
        if (err) 
        {
          console.log(err);
          resolve(err);
          return;   
        }
        resolve(docs);
      });
    });
  }
   /*
  U. update
  */
  updateModel(id, tareaUpdate) {
    return new Promise((resolve, reject) => {
      this.mymodel.update({ _id: id }, { $set: tareaUpdate }, (err, docs) => {
        if (err) {
          console.log(err);
          resolve(err);
          return;
        }
        resolve(docs);
      });
    });
  }
  /*
  D. delete
  */
  deleteTarea(id) {
    return new Promise((resolve, reject) => {
      this.mymodel.remove({ _id: id }).then((err, docs) => {
        if (err) {
          console.log(err);
          resolve(err);
          return;
        }
        resolve(docs);
      });
    });
  }
  getModel() {
    return this.mymodel;
  }
}
export default TareaModel;
import mongoose from "../connection/connect.js";
class TodoModel 
{
  constructor() 
  {
    this.Schema = mongoose.Schema;
    this.TodoSchema = new this.Schema(
    {
      name:String,
      description:String,
      date: Date,
      hour: String,
      done: {
        type: Boolean,
        default: false

      }
    });
    this.mymodel = mongoose.model("todos", this.TodoSchema);
  }
  /* 
  C. create
  */
  createTodo(name, description, date, hour, done) 
  {
    var todo = {
      name,
      description,
      date,
      hour,
      done,
    };
    var newtodo = new this.mymodel(todo);
    return new Promise((resolve, reject) => 
    {
      newtodo.save().then((docs) => 
      {
        console.log("Usuario registrado");
        resolve(docs);
      });
    });
  }
  /*
  R. read
  */
  getTodos() {
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
  updateModel(id, todoUpdate) {
    return new Promise((resolve, reject) => {
      this.mymodel.update({ _id: id }, { $set: todoUpdate }, (err, docs) => {
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
  deleteTodo(id) {
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
export default TodoModel;
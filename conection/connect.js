import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(
  `mongodb://172.28.0.2:27017/examen`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }
);
var db = mongoose.connection;
db.on("error", () => {
  console.log("No se puede conectar con la base de datos");
});
db.on("open", () => {
  console.log("Conexion exitosa");
});
export default mongoose;
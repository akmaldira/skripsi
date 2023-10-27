import App from "./app";
import EmployeeRoute from "./routes/employeeRoute";

const app = new App([new EmployeeRoute("/employee")]);

app.listen();

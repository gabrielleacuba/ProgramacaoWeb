import { BrowserRouter, Switch, Route } from "react-router-dom";
import Agenda from "./Components/agenda";
import Formulario from "./Components/views/formulario";


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Agenda} />
      <Route path="/form" component={Formulario} />
    </BrowserRouter>
  );
}

export default Routes;

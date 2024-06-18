import { Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { person } from "./data";
import { Datescunt } from "./components/Datescunt";
import { DatesAction } from "./components/DatesAction";
import { Dateslist } from "./components/Dateslist";
import { useEffect, useState } from "react";

function App() {
  const [persondata, setpersondata] = useState(person)
  useEffect(() => {
     setpersondata([])
  },[])
  const delet = () => {
    setpersondata([]);
  }
  const show = () => {
     setpersondata(person);
  }

  return (
    <div className="font color-body">
      <Container className="py-5 ">
        <Datescunt person={persondata} />
        <Dateslist person={persondata} />
        <DatesAction daletP={delet} show={show} />
      </Container>
    </div>
  );
}

export default App;

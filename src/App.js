import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormUI from "./Component/Form/FormUI";
import Table from "./Component/Table/Table";
import { useState } from "react";

function App() {
  const [collectData, setCollectData] = useState([]);
  const [id, setId] = useState(1);
  const [isTable, setIsTable] = useState(false);
  // console.log(collectData);
  const init = {
    id:"",
    email:"",
    password:"",
    lName:"",
    fName:"",
}

const [inputData, setInputData] = useState(init);
// console.log(inputData,"input");
  const addbutton = () => {
    setIsTable(true);
  }


  return (
    <div className="App">
      {isTable ? <FormUI init = {init} inputData = {inputData} setInputData = {setInputData} collectData = {collectData} setCollectData = {setCollectData} setIsTable = {setIsTable}/> :
      <Table collectData = {collectData} setCollectData={setCollectData} addbutton = {addbutton} setInputData = {setInputData} inputData={inputData}/>}
      
      
    </div>
  );
}

export default App;

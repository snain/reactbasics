import Firstpara from "./components/Firstpara";
import Secondpara from "./components/Secondpara";
import Third from "./components/Third";
import Forth from "./components/Forth";

function App(){
  const data=[{
    content:'shubham',
    number:1
  },{
    content:'details page',
    number:2
  },{
    content:'sfa',
    number:3,
  },];

  return(
    <div>
      {data.map((singleObject)=>{
        return(
        <Forth content={singleObject.content} number={singleObject.number} />
        );
      })}
    <Firstpara name="hello"/>
    <Firstpara name="hello  2"/>
  <Secondpara content="shubham" number="1"/>
  <Secondpara content="rishabh" number="2"/>
  <Third/>
  </div>
  );
}
export default App;
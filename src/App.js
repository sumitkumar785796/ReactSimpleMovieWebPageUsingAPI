import Movie from "./components/Movie"
import Header from "./components/Header"
import jsonData from "./api.json";
import Home from "./components/Home";
import Head from "./components/Head";
import Foot from "./components/Foot";
import Fun from "./components/Fun";

function App() {
  return (
    <div>
      <Head/>
    {/* <Header /> */}
    {
      jsonData.map((element,index)=>{
        return(
          <Fun
            key={index}
            name={element.Title}
            img={element.Poster}
            writer={element.Writer}
          />
        )
      })
    }     
    <Foot />
    </div>
  );
}

export default App;

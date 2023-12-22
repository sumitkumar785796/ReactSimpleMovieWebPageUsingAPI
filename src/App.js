import Movie from "./components/Movie"
import Header from "./components/Header"
import jsonData from "./api.json";


function App() {
  return (
    <div>
    <Header />
    {
      jsonData.map((element)=>{
        return(
          <Movie
            name={element.Title}
            img={element.Poster}
          />
        )
      })
    }     
    </div>
  );
}

export default App;

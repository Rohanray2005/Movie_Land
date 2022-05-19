import { useEffect,useState } from 'react';
import './App.css';
import SearchIcon from'./search.svg'
import MovieCard from './MovieCard';
//8ba03213

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=8ba03213';

function App() {
  const [movies,setMovies]= useState([]);
  const [searchItem,setSearch]=useState('');
  const searchMovies=async(title)=>{
    const response= await fetch(`${API_URL}&s=${title}`)
    const data=await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('Spiderman');
  },[]);

  const [mystyle, setmystyle]=useState({
    Color: 'white',
    backgroundColor: '#212426'
  })
  const toggleStyle=()=>{
     console.log(mystyle.color);
      if(mystyle.color=='white'){
        setmystyle({
        color:'black',
        backgroundColor:'white'
        })
      }else{
        setmystyle({
          color:'white',
          backgroundColor:'#212426'
          })
      }
  }

  return (
    <div className="app" style={mystyle}>
      <h1>Movie Land</h1>
      <button className='btn' onClick={toggleStyle}>Change Mode</button>
      <div className='search'>
        <input
          placeholder='search for movies'
          value={searchItem}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={()=>searchMovies(searchItem)}
        />
      </div>
      {
          movies.length>0 ? ( <div className='container'>
          {/* <MovieCard movie1={movies[0]}/> */}
          {movies.map((movie)=>(
            <MovieCard movie={movie}/>
          )
          )}
        </div>): (
           <div className='container'>
           <h2>No movies Found</h2>
         </div>
        )
        }
    </div>
  );
}

export default App;

import './App.css';
import Firstlist from './components/List';
import Navbar from './components/Navbar';
import Delete from './components/Delete';
import useFetch from './components/useFetch';
import Notfound from './components/Notfound';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

function App() {

  const [number , setNumber] = useState(0);   //returns a variable -being initialized with the value of the real parameter being passed- and a function used to change the value of the variable
  const [arr, setArr] = useState([3,45,1,59,22,99]);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [pending, setPending] = useState(false);
  const [myname , setMyname] = useState("George");
  const [ages , setAges] = useState([22,44,22]);

  
  const handleClick = () => {
    setNumber(number+1);
  }
  const setToZero = () => {
    setNumber(0);
  }
  const handleClickRevers = () => {
    setNumber(number-1);
  }
  const showarr = () => {
    setFlag(!flag);
    console.log(flag);
  }
  /*const showdata = () => {
    setTimeout(() => {
      setPending(true);
    }, 1000)
    setFlag2(!flag2);
    setPending(false);
  }*/
  const showdata = () => {
    setFlag2(!flag2);
    setAges([]);
    var temp = [];
    /*for(const item in json_info){
      console.log(item);
    }*/
    const keys = Object.keys(json_info);
    for(const i in keys){
      console.log(json_info[i].age);
      console.log([json_info[i].age]);
      //setAges(ages.concat(json_info[i].age))
      temp = temp.concat(json_info[i].age);
    }
    setAges(ages.concat(temp))
    console.log(ages);
    temp = [];
  }

  const {json_info , error} = useFetch('http://localhost:8000/info' , number);   //we handle the fetching of data from json by the "custom hook" -> useFetch.js

  return (
    <Router> 
      <div className="App">
        <div className="head">
          <Switch>
            <Route exact path="/">   {/*when the route ends in ".../" we show the inside of the route component*/}
              <Navbar />
            </Route>
            <Route path="/create">   {/*when the route ends in ".../create" we show the inside of the route component*/}
              <Navbar />
              <b>What is the name of the new file?</b>
              <form method="post" action="write">
                <label>Name of file:</label>
                <input type="text"/> <br />
                <label>Upload file:</label>
                <input type="file"/> <br />
                <input type="submit" />
                <br />
              </form>
            </Route>
            <Route path="/delete"> {/*when the route ends in ".../delete/ ...*/}
              <Delete />
            </Route>
            <Route path="*"> {/*mathces every other possible route-destination*/}
              <Notfound />
            </Route>
          </Switch>
        </div>
        <div className="body">
          <h1>
            hello there
          </h1>
          <p>Click times: {number}</p>
          <button onClick={handleClick}>Click me</button>
          <button onClick={setToZero}>Start again</button>
          <button onClick={handleClickRevers}>Go backward</button>
          <br />
          <Firstlist />
          
        </div>
        <div className="showlist">
          <button onClick={showarr}>Show arr</button>
          {flag && arr.map((item)=> <li>{item}</li>)}   
        </div>
        {/*<div className="showjsoninfo">
          <button onClick={showdata}>Show data</button>
          {pending && <p>Loading ...</p>}
          {error && <div> {error} </div>}
          {flag2 && json_info && json_info.map((item)=> 
            <div className="showjson">
              {item.name==myname && 
                <div>
                  <b>Name: {item.name}</b> <br />
                  <b>Age: {item.age}</b> <br />
                  <b>Phone number: {item.phone}</b> <br />
                </div>
              }
            </div>)}
            {ages.map((item)=>
            <li>{item}</li>)  
            }
          </div>*/}
          <div className="codes">
            <p>Code 1: {process.env.REACT_APP_PASSWORD}</p>
            <p>Code 2: {process.env.REACT_APP_PASSWORD2}</p>
          </div>
      </div>
    </Router>
  );
}

export default App;

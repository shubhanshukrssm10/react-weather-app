import React,{useState} from 'react';
import  axios  from 'axios';

import './App.css'
function Content() {
const [city,setCity] = useState("Enter Your City...")
const [data,setData] = useState([])
const takevalue = (e)=>{
  setCity(e.target.value)
}
const click = ()=>{
  axios
  .get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b3f91952131c364fdaba11231b098c58&units=metric")
  .then(function (response) {
    console.log(response.data);
    const newdata = [...data]
    newdata.push(response.data)
    setData(newdata)
    
  })
}

const del = (index)=>{
  const newdata=[...data];
  newdata.splice(index,1);
  setData(newdata);
}
 

  
  return (
    <div>
      <div className="wrap2">
        <div className="container">
            <div className="row">
                <div className="col12">
                <div className="inp">
                    <input type="text" id='city' value={city} onChange={takevalue}/>
                    <span><button onClick={click}>Search</button></span>
                  </div>

                </div>
            </div>
            <div className="row">
              <div className="col12">
                {
                  data.map((item,index)=>{
                  return(
                    <div key={index} className='box'>
                      <i className="fa-solid fa-xmark del" onClick={()=>del(index)}></i>
                      <h1>{item.name}</h1>
                      <img className='img' src={"https://openweathermap.org/img/wn/"+item.weather[0].icon+"@2x.png"} alt="" />
                      <h3>{item.weather[0].main}</h3>
                      <h2>{item.main.temp} &deg;C</h2>
                      <h4><span className='a'>Min Temp: {item.main.temp_min} &deg;C</span> &nbsp; &nbsp; &nbsp; <span className='a'>Max Temp: {item.main.temp_max} &deg;C</span></h4>
                      <h4><span className='a'>Humidity: {item.main.humidity} %</span> &nbsp; &nbsp; &nbsp; <span className='a'>Wind Speed: {item.wind.speed} km/h</span></h4>
                      <h4><span className='a'>Latitude: {item.coord.lat} &deg;N </span> &nbsp; &nbsp; &nbsp; <span className='a'>Longitude: {item.coord.lon} &deg;E </span></h4>
                    
                  </div>
                  )
                })
              }
              </div>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Content;
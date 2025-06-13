import React,{ useState } from "react";
import {animals} from "./data.js";
// import 'bootstrap/dist/css/bootstrap.min.css';


export const Gallery = () => {
    const [animalList,setAnimal] = useState(animals);
    
    const filterByCategory = (cat) =>{
        const lowerCaseCat = cat.toLowerCase();
        setAnimal(animals.filter((data) => data.category.includes(lowerCaseCat)))
    }
    
    return(
        <>
        <div style={{
            display:"flex",
            justifyContent:"center",
            marginTop:"20px",
            marginRight:"30px"
        }}>
            <div style={{textAlign:"center"}}>
                    <button  onClick={()=>setAnimal(animals)}className="filter-button">
                    All</button>
                <button  onClick={()=>filterByCategory("wild")} className="filter-button" 
                // style={{
                    // height:"30px",
                    // fontFamily:"monospace",
                    // width : "90px",
                    // borderRadius:"30px",
                    // marginRight:"1rem",
                    // border:"solid black",
                    // backgroundColor:"black",
                    // color:"white",


                // }}
                >Wild</button>

                <button  onClick={()=>filterByCategory("pet")}className="filter-button">
                    Pet</button>

            
                <button  onClick={()=>filterByCategory("street")}className="filter-button" >
                    Street</button>
                <button  onClick={()=>filterByCategory("omnivorous")} className="filter-button">
                    Omnivorous</button>

                <button  onClick={()=>filterByCategory("herbivorous")} className="filter-button">
                    Herbivorous</button>

                
                <button  onClick={()=>filterByCategory("carnivorous")} className="filter-button">
                    Carnivorous</button>
            </div>
        </div>
        <div style={{display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexWrap:"wrap",
            // gap:"2rem",
            textAlign :"center",
            marginTop:"100px",
            fontFamily: "sans-serif",

        }}>
            {animalList.map((data) =>(
                <div key={data.id} style={{maxWidth:"350px"}}>
                    <div style={{padding: "10px"}} className="hover-effect">
                        
                        <img src={data.poster_path} alt="" style={{
                            width: "170px",
                            border:" solid white",
                            height:"200px"
                            }}
                            />

                    </div>
                    <h5>Animal : {data.title}</h5>
                    <p>Age :{data.age}</p>
                </div>
            ))}
            </div>
        </>
    );
}
// export default Gallery;
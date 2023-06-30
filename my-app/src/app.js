import Componente1 from "./Components/Componente1"
import Componente2 from "./Components/Componente2"
import Personaje from "./Components/personaje"
import Card from "./Components/Card/index"


export default function App() {
    const personajes = [{
        nombre: "Simba" ,
        edad: 10 ,
        color: "durazno",
        amigos:["Pumba","Timon","Nala"]
    }, 
    {
        nombre: "Nala",
        edad: 10 ,
        color: "durazno",
        amigos:["Pumba", "Timon", "Simba", "Rafiki"]
    }]

    const Texto =" Holi Cohorte !"
    return (<>
        <h1>{Texto}</h1>
         <Componente1 />
         <Componente2 />
        {personajes.map((personaje,index) => (
          <div key ={index}> <Personaje pers={personaje}/>
          <Card pers={personaje}/></div>
        
        ))}
    </>)
}
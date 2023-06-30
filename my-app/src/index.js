import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"

const root = ReactDOM.createRoot(document.getElementById('root'))
/**root.     render(contenido=document...) */

function Saludar(){
    const saludo = "Holi Cohorte !"
    return <h1>{saludo}</h1>
}
root.render(<section><App/></section>)
import Cupcake from "./Cupcake"
import './index.css'
function App() {
  let foto= "https://editorialtelevisa.brightspotcdn.com/dims4/default/581c97f/2147483647/strip/true/crop/672x672+70+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F5d%2F22%2F7b517e1242d78f28df597461df79%2Fcupcakes-de-unicornio-receta-facil-y-rapida.jpg"
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Cupcake foto={foto} sabor={"vainilla"} color={"azul"}/>
    </div>
  )
}

export default App

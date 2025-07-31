import Cupcakes from "../card/cupCakes";
import Servicios from "../sections/servicios";

function Home() {
  return (
    <div>
      <div className="w-full overflow-hidden h-[400px] relative">
        <img
          className="w-full h-auto object-cover blur-sm"
          src="https://dyvn6jpt1f0d3.cloudfront.net/wp-content/uploads/2019/01/14125959/Cupcakes_Quick-Preset_1020x500-2.jpg"
          alt="hero-image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
          <h2 className="text-2xl font-bold">Welcome to the Home Page</h2>
          <p>Aquí podrás comprar Cupcakes</p>
          <button className="bg-pink-900 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mt-3">
            Comprar
          </button>
        </div>
      </div>
      <Cupcakes peticion={"cupcakes?color=Rosa"} />
      <Servicios peticion={"servicios"} />
    </div>
  );
}

export default Home;

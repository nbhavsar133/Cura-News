import { Link } from "react-router";

export default function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-16 flex-col text-sky-800">
      <h1 className="self-start pl-16" style={{fontSize: "48px", fontWeight: "bold"}}>
        Cura News</h1>

        <h2 className="pt-16" style={{fontSize: "32px", fontWeight: "bold"}}>
          Find info about...
          </h2>
      <div className="flex pt-16 flex-row gap-24 text-indigo-500" style={{fontSize: "24px"}}>
        <Link to="/economics">
          <button className="bg-sky-100 hover:bg-blue-200 py-2 px-4 rounded">
            Economics 
          </button>
        </Link>

        <Link to="/environment">
        <button className="bg-sky-100 hover:bg-blue-200 py-2 px-4 rounded">
          Environment
        </button>
        </Link>


        <Link to="/politics"> 
          <button className="bg-sky-100 hover:bg-blue-200 py-2 px-4 rounded">
            Politics
          </button>
        </Link> 


        <Link to="/technology">
        <button className="bg-sky-100 hover:bg-blue-200 py-2 px-4 rounded">
          Technology
        </button>
        </Link>

        <Link to="/healthcare">
        <button className="bg-sky-100 hover:bg-blue-200 py-2 px-4 rounded">
          Healthcare
        </button>
        </Link>
        </div>    
    </main>
    
    
  );
} 

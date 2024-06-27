import { useState } from "react";
import DataTable from "./components/DataTable";

export default function App() {
   const types = ["users", "cars", "houses"]
   const [type, setType] = useState(types[0]);
   const url = 'http://localhost:3355/' + type;


   return (
      <div>
         <header className="p-4 text-center">
            <div className='flex  mb-4 p-4 border cursor-pointer gap-60 bg-black text-white font-mono'>
               <div className='flex gap-6'>
                  {types.map(type => {
                     return (
                        <button onClick={() => setType(type)} type="button" >{type}</button>
                     )
                  })}
               </div>
               <h1 className="text-xl font-bold font-mono ">{type} Table</h1>
            </div>

         </header>
         <main className="p-4">
            <DataTable url={url} />
         </main>
      </div>
   )
}

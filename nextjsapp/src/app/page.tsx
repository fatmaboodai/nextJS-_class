"use client"
import { useState } from 'react';
import Mybutton from "./components/mybutton";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // replace this with actual login status
  return (
    <main className="flex min-h-screen flex-col items-center justify-betwee p-24">
      <div>
        <input type="text" />
        <button>
          submit 
        </button>
        if(input.value ==='fatma'){
          <Mybutton text={'hi'} />
        }else{
          <Mybutton text={'bye'} />
        }
      </div>
  
    </main>
  );
}
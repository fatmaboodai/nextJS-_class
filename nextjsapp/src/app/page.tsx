// 'use client';
// import React, { useState, useEffect } from 'react';

// export default function Home() {
//   const [inputValue, setInputValue] = useState('');
//   const [savedValue, setSavedValue] = useState('');
// const [mylist,setList] = useState(['workout']);
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     setSavedValue(inputValue);
//     console.log(inputValue);
//     setList([...mylist,inputValue]);
//   console.log(mylist);
//  };
//  const handleDeleteButton = (index: number) => {
//   const updatedList = [...mylist.slice(0, index), ...mylist.slice(index + 1)];
//   setList(updatedList);
// };

//   return (
//     <div className="flex min-h-screen flex-col items-center p-24 bg-blue-300	">
//       <h1 className='text-sky-950 mr-20 italic'>ToDo list APP</h1>
//       <div className='flex flex-row items-center justify-between'>
//         <input onChange={handleInputChange}></input>
//         <button className='text-sky-950 p-10' onClick={handleButtonClick}>Submit</button>
//       </div>
// <ul id='mylist'>
//   {mylist.map((item, index) => (
//     <li key={index} className='flex items-center justify-between '>
//       <div className='flex items-center justify-between'>
//         <input type="checkbox" id={`myCheckbox_${index}`}/>
//         <h2 className='text-sky-950 m-10'>{item}</h2>
//         <button className='text-sky-950	 m-10 ' onClick={() => handleDeleteButton(index)}>X</button>
//       </div>
//     </li>
//   ))}
// </ul>
//     </div>
//   );
// }

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [savedValue, setSavedValue] = useState('');
  const [mylist, setList] = useState(['workout']);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setSavedValue(inputValue);
    setList([...mylist, inputValue]);
  };

  const handleDeleteButton = (index: number) => {
    const updatedList = [...mylist.slice(0, index), ...mylist.slice(index + 1)];
    setList(updatedList);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-300">
      <h1 className='text-sky-950 mr-20 italic'>ToDo list APP</h1>
      <div className='flex flex-row items-center justify-between w-full max-w-xl'>
        <input onChange={handleInputChange} className='w-full border-2 border-sky-950 p-2' />
        <button className='text-sky-950 p-4' onClick={handleButtonClick}>Submit</button>
      </div>
      <ul id='mylist'>
  {mylist.map((item, index) => (
    <li key={index} className='flex items-center justify-between '>
      <div className='flex items-center justify-between'>
        <input type="checkbox" id={`myCheckbox_${index}`}/>
        <h2 className='text-sky-950 m-10'>{item}</h2>
        <button className='text-sky-950	 m-10 ' onClick={() => handleDeleteButton(index)}>X</button>
      </div>
    </li>
  ))}
</ul>
<a href="/todolist" className='text-black'>Go to todolist</a>

    </div>
  );
}

import { useCallback, useEffect, useState ,useRef} from 'react'
// import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charallowed,setcharallowed] = useState(true);
  const [password,setpassword] = useState('');

  //useref hook 
  const passwordref=useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(numberAllowed)  str += "0123456789";
    if(charallowed)  str += "!@#$%^&*()_+~";
  
    for(let i=0 ; i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)

      pass += str.charAt(char)
    }

    setpassword(pass)
  

  } ,[length,numberAllowed,charallowed,setpassword]);
  
  
 const copypasswordtoclipboard=useCallback(()=>{
  passwordref.current?.select();
  passwordref.current?.setSelectionRange(0,101)
   window.navigator.clipboard.writeText(password)
 },[password])



  useEffect(()=>{
  passwordGenerator()
  },[length, numberAllowed, charallowed, passwordGenerator])
  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-2xl text-white text-center my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4 shrink-0'>
       <input type="text"  
       value={password}
       className='w-full  px-3 py-1 outline-none'
       placeholder='password'
       readOnly
       ref={passwordref}
       />
       <button 
       onClick={copypasswordtoclipboard}
       className='bg-blue-700
        outline-none
        text-white
         px-3 py-0.5 '
         >Copy</button>
     </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cusror-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
         <label htmlFor="">Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberAllowed"
          onChange={()=>{setnumberAllowed((prev)=>!prev)}}
          />
          <label htmlFor="numberAllowed">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charallowed}
          id="charallowed"
          onChange={()=>{setcharallowed((prev)=>!prev)}}
          />
          <label htmlFor="charallowed">Characters</label>
        </div>

      </div>

    </div>
    </>
  )
}

export default App

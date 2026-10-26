import { useRef } from "react"

const InputFocus = () => {
    const NameRef=useRef(null)
    const emailRef=useRef(null)
    
    const focusName=()=>{
       NameRef.current.focus();   
    }
    const focusEmail=()=>{
        emailRef.current.focus();
    }
    const handleClear=()=>{
        NameRef.current.value=""
        emailRef.current.value=""
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        alert(
            `Name: ${NameRef.current.value} Email: ${emailRef.current.value}`
        )

    }

  return (
    <>
    <form >
        <input type="text" ref={NameRef} />
        <input type="email" ref={emailRef}/>
        <button onClick={focusName}>Focus Name</button>
        <button onClick={focusEmail}>Focus Email</button>

        <button onClick={handleClear}>clear</button>
        <button onClick={handleSubmit}>submit</button>
    </form>
    
    </>

  )
}

export default InputFocus

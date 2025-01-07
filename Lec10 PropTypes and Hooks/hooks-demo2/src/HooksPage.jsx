
import { useEffect, useState } from "react";

export default function HooksPage(props) {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({ val1: 1, val2: 2 })

  useEffect(() => {
    console.log('useEffect', count, values.val1, values.val2);
  });

  useEffect(() => {
    console.log('did mount! - once at the begining');
    return () => {
      console.log('will unmount! - once at the end!');
    }
  }, [])

  useEffect(() => {
    console.log('val1 cahgened', count, values.val1, values.val2);
  }, [values.val1, count]);

  const btnTogether = () => {
    setCount(8); 
    
    //code...
    setValues({ ...values, val2: 22 });
    console.log('in function ', count, values.val2);    
  }

  console.log('return');
  return (
    <div>HooksPage <br />
      <button onClick={() => setCount(prevC => prevC + 1)} >+</button>
      count={count} <br />
      <button onClick={() => setValues({ ...values, val1: 11 })} >val1</button> <br />
      val1={values.val1} <br />
      val2= {values.val2} <br />
      <button onClick={btnTogether}>together</button>
    </div>
  )
}

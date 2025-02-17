import { useContext, useEffect, useRef } from 'react'
import { MyContext } from '../context';
import { toast } from 'react-toastify';

const Result = () => {
    const context = useContext(MyContext);
    const hasRun = useRef(false);
    useEffect(()=>{
        context.result();
        if (!hasRun.current) {
          context.result();
          toast.success('There is your answer', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          hasRun.current = true;
      }
    },[])

    return(
        <div>
            <h3>Your answer is:</h3>
            <div className="viewer">
                {context.state.result}
            </div>

            <div className="animate__animated animate__bounceIn animate__delay-1s">
                <hr/>
                <button className="btn" onClick={context.reset}>
                  Start over
                </button>
                <button className="btn" onClick={context.result}>
                   Decide again
                </button>
            </div>

        </div>
    )

}

export default Result;
import { useRef } from "react";
import { useMeasure } from "react-use";

const Logo = () => {
    const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure<HTMLDivElement>();
  return (
    <div className="w-full h-full flex flex-col justify-center" ref={ref}
    style={{
        transform: `translate(-${width/2}px, -${height/2}px)`
    }}
    >
      <div className="grid w-full grid-flow-row gap-4 lg:grid-flow-col justify-center p-2">
        <div className={'rounded-full uppercase relative'}>
          <div className={'absolute animate-ping bg-gradient-to-br from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark block w-full h-full rounded-full -z-10'}
            style={{
                animation: 'ping 2s infinite',
                
            }}
         ></div>
         <div className={'absolute  bg-gradient-to-br from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark block w-full h-full rounded-full -z-10 opacity-50'}
         ></div>
            <div className='bg-dracula-extra m-1 rounded-full p-4 grid place-items-center '
            >
                <div className='text-transparent text-[11rem] py-2 font-sans font-extrabold bg-clip-text bg-gradient-to-r from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark'>KDS</div>
            </div>
        </div>
      </div>
    </div>
)
}

export default Logo
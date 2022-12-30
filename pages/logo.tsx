import { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="grid w-full grid-flow-row gap-4 lg:w-full lg:grid-flow-col justify-center">
        <div className={'rounded-full uppercase relative'}>
          <div className={'absolute animate-spin bg-gradient-to-br from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark block w-full h-full rounded-full -z-10'}
         style={{
            animation: 'spin 3s linear infinite',
        }}
         ></div>
            <div className='bg-dracula-extra m-1 rounded-full p-4 grid place-items-center '>
                <div className='text-transparent text-9xl py-2 font-sans font-extrabold bg-clip-text bg-gradient-to-r from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark'>KDS</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

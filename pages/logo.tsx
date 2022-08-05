import { NextPage } from 'next';
import { contacts } from '../public/data';

const Contact: NextPage = () => {
  //view contact informations from contacts
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="grid w-full grid-flow-row gap-4 lg:w-full lg:grid-flow-col justify-center">
        <div className={'rounded-full uppercase p-1 bg-gradient-to-br from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark '}>
            <div className=' bg-dracula-extra rounded-full p-4 grid place-items-center '>
                <div className='text-transparent text-9xl py-2 font-sans font-extrabold bg-clip-text bg-gradient-to-r from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark'>KDS</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

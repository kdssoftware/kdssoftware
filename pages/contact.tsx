import { NextPage } from 'next';
import { contacts } from '../public/data';

const Contact: NextPage = () => {
  //view contact informations from contacts
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="grid w-full grid-flow-row gap-4 md:w-1/2 lg:w-full lg:grid-flow-col">
        {contacts.map((contact) => (
          <a
            href={contact.link}
            className="relative grid grid-flow-row grid-rows-1 p-3 
                transition-all duration-300 ease-in-out cursor-pointe
                rounded-lg w-full h-full 
                bg-gradient-to-br from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark 
                text-dracula-purple-dark opacity-90 hover:opacity-100 auto-rows-max
                hover:scale-105 transform-gpu hover:shadow-md hover:shadow-dracula-background hover:w-full"
            key={contact.link}
          >
            <h2 className="p-1 text-2xl font-medium text-center uppercase">
              {contact.name}
            </h2>
            <div className="absolute flex justify-end py-2 m-2">
              <div
                className="bg-dracula-purple-dark w-6 h-6"
                style={{
                  maskImage: `url('/icon/${contact.icon}.svg')`,
                  WebkitMaskImage: `url('/icon/${contact.icon}.svg')`,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: '1.5rem',
                  WebkitMaskSize: '1.5rem',
                }}
              ></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

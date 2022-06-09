import { NextPage } from 'next';
import { contacts } from '../public/data';

const Contact: NextPage = () => {
  //view contact informations from contacts
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="grid w-full grid-flow-row gap-4 lg:w-full lg:grid-flow-col justify-center">
        {contacts.map((contact) => (
          <a
            href={contact.link}
            className="relative grid grid-flow-col p-3 
                transition-all duration-300 ease-in-out cursor-pointe
                rounded-lg w-full h-full 
                bg-gradient-to-br from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark 
                text-dracula-purple-dark opacity-90 hover:opacity-100 auto-rows-max
                hover:scale-105 transform-gpu hover:shadow-lg hover:shadow-dracula-background hover:w-full"
            key={contact.link}
          >
            <div
              className="bg-dracula-purple-dark py-2 m-2 w-7 h-7"
              style={{
                maskImage: `url('/icon/${contact.icon}.svg')`,
                WebkitMaskImage: `url('/icon/${contact.icon}.svg')`,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: '1.75rem',
                WebkitMaskSize: '1.75rem',
              }}
            ></div>
            <h2 className="p-1 sm:px-4 text-2xl font-medium grid place-content-center uppercase">
              {contact.name}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

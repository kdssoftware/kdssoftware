import { NextPage } from 'next';
import { contacts } from '../public/data';

const Contact: NextPage = () => {
  //view contact informations from contacts
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <div className="grid justify-center w-full grid-flow-row gap-4 lg:w-full lg:grid-flow-col">
        {contacts.map((contact) => (
          <a
            rel={contact.rel}
            href={contact.link}
            className="relative grid w-full h-full grid-flow-col p-3 transition-all duration-300 ease-in-out rounded-lg cursor-pointe bg-gradient-to-br from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark text-dracula-purple-dark opacity-90 hover:opacity-100 auto-rows-max hover:scale-105 transform-gpu hover:shadow-lg hover:shadow-dracula-background hover:w-full"
            key={contact.link}
          >
            <div
              className="py-2 m-2 bg-dracula-purple-dark w-7 h-7"
              style={{
                maskImage: `url('/icon/${contact.icon}.svg')`,
                WebkitMaskImage: `url('/icon/${contact.icon}.svg')`,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: '1.75rem',
                WebkitMaskSize: '1.75rem',
              }}
            ></div>
            <h2 className="grid p-1 text-2xl font-medium uppercase sm:px-4 place-content-center">
              {contact.name}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

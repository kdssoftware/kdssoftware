import { NextPage } from "next"
import { contacts } from "../public/data"

const Contact : NextPage= () => {


    //view contact informations from contacts
    return (
    <div className="flex justify-center w-full">
    <div className="grid w-full grid-flow-row gap-4 md:w-1/2 lg:w-full lg:grid-flow-col">
        {
            contacts.map(contact => (
                <a href={contact.link} className="relative grid grid-flow-row grid-rows-1 p-3 transition-all duration-150 ease-in-out bg-yellow-800 rounded-lg cursor-pointer opacity-90 auto-rows-max hover:scale-105 transform-gpu hover:shadow-md hover:shadow-yellow-800"  key={contact.link}>
                    <h2 className="p-1 text-2xl font-bold text-center uppercase text-sky-50">{contact.name}</h2>
                    <div className="absolute flex justify-end py-2 m-2">
                        <img className="w-[25px]" src={"/icon/"+contact.icon+".svg"} alt={contact.link} />
                    </div>
                </a>
            ))
        }
    </div>
    </div>
    )
}

export default Contact
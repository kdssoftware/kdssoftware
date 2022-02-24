import { NextPage } from "next"
import { contacts } from "../public/data"

const Contact : NextPage= () => {


    //view contact informations from contacts
    return (
    <div className="flex justify-center w-full">
    <div className="grid gap-4 grid-flow-row w-full md:w-1/2 lg:w-full lg:grid-flow-col">
        {
            contacts.map(contact => (
                <a href={contact.link} className="rounded-lg p-3 relative bg-amber-800 opacity-90 grid grid-flow-row grid-rows-1 auto-rows-max hover:scale-105 transform-gpu transition-all duration-150 ease-in-out cursor-pointer hover:shadow-md hover:shadow-amber-800"  key={contact.link}>
                    <h2 className="text-2xl text-center font-bold uppercase text-sky-50 p-1">{contact.name}</h2>
                    <div className="flex justify-end absolute py-2 m-2">
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
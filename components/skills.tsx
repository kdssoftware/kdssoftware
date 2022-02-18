import { NextPage } from "next";

import {skilldata,skillTypes} from "../public/data";

const Skills: NextPage = () => {
    //fetch /data.json
    

    return (
        <>
            <section className="w-full flex">
                {
                    skilldata.map((skill, index) => (
                        <div className="w-1/4 flex flex-col content-start justify-start" >
                            <h2 className="text-2xl text-center font-bold text-sky-500 ">{skillTypes[index]}:</h2>
                            <div className="border-2 rounded-lg border-sky-800 w-px[90px] m-3"></div>
                            <div className="flex flex-col content-start px-8">
                                {
                                    skill.map((item) => (
                                        <div className="flex flex-row pt-1 ">
                                            <span className="block w-2/5 font-bold text-lg">{item.name}</span>
                                            <div className="w-3/5 bg-gray-500 rounded-full h-2.5 mt-2 ">
                                                <div className="bg-lime-500 h-2.5 rounded-full duration-400 transition-all ease-in" style={{width: item.percentage+"%"}} ></div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    );
};
export default Skills;

import { NextPage } from "next";

import {skilldata,skillTypes} from "../public/data";
import { useState, useEffect} from "react";

const Skills: NextPage = () => {
    let [delayOff,setDelayOff] = useState(false)
    let [mobileCurrentShowing, setMobileCurrentShowing] = useState(0);
    //for animation, delays the animation of the progress bar
    let [isMobile,setMobile] = useState(false);

    //determine that its mobile viewpoint, if the max width is less than 768px


    setInterval(()=>{
        setDelayOff(true)
    },100)

    useEffect(() => {
        if(window?.innerWidth < 768){
            if(!isMobile)
                setMobile(true)
        }else{
            if(isMobile)
            setMobile(false)
        }
    })

    return (
        <>
            <section className="grid w-screen grid-flow-row auto-rows-max md:grid-flow-col md:auto-rows-max ">
                {
                    skilldata.map((skill, index) => (
                        <div key={index} className={"w-full pb-4 "+(isMobile?"cursor-pointer":"")} onClick={()=>{
                            if(isMobile){
                                setMobileCurrentShowing(index)
                            }
                        }} >
                            <h2 className="text-2xl font-bold text-center text-yellow-600 ">{skillTypes[index]}:</h2>
                            <div className="border-2 rounded-lg border-yellow-50 w-px[90px] m-3"></div>
                            <div className="flex flex-col content-start w-full px-8">
                                {  
                                    skill.sort((a,b)=>b.percentage-a.percentage).map((item,i) => (
                                        <div key={index+"-"+i} className={"flex flex-col xl:flex-row pt-1 "+(isMobile && mobileCurrentShowing!=index ? "hidden" : "")}>
                                            <span className="block w-full text-lg font-bold xl:w-2/5">{item.name}</span>
                                            <div className="w-full xl:w-3/5 bg-gray-500 rounded-full h-2.5 mt-2  ">
                                                <div className="transition-all duration-1000 bg-yellow-700 h-2.5 rounded-full " style={{width: (delayOff?item.percentage:0)+"%"}} ></div>
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
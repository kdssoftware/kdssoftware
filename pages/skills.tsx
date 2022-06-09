import { NextPage } from 'next';

import { skilldata, skillTypes } from '../public/data';
import { useState, useEffect } from 'react';

const Skills: NextPage = () => {
  let [delayOff, setDelayOff] = useState(false);
  let [mobileCurrentShowing, setMobileCurrentShowing] = useState(0);

  //determine that its mobile viewpoint, if the max width is less than 768px

  setInterval(() => {
    setDelayOff(true);
  }, 100);

  return (
    <div className=" flex flex-col mt-10 justify-center">
      <section className="w-full h-full mb-8 grid grid-flow-row md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 md:grid-flow-col">
        {skilldata.map((skill, index) => (
          <div key={index} className={' pb-4 '}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-dracula-pink ">
              {skillTypes[index]}:
            </h2>
            <div className="border-2 rounded-lg border-dracula-comment w-px[90px] m-3"></div>
            <div className="flex flex-col content-start w-full px-8">
              {skill
                .sort((a, b) => b.percentage - a.percentage)
                .map((item, i) => (
                  <div
                    key={index + '-' + i}
                    className={'flex flex-col xl:flex-row pt-1 '}
                  >
                    <span className="block w-full text-lg font-thin">
                      {item.name}
                    </span>
                    <div className="w-full bg-dracula-background rounded-full h-2.5 mt-2  ">
                      <div
                        className="transition-all duration-1000 bg-gradient-to-r  from-dracula-green-light via-dracula-green to-dracula-green-dark h-2.5 rounded-full "
                        style={{
                          width:
                            (delayOff ? item.percentage : 0) + '%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Skills;

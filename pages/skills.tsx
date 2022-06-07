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
    <>
      <section className="overflow-y-auto  fixed top-32 left-0  grid w-full  grid-flow-row md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 md:grid-flow-col">
        {skilldata.map((skill, index) => (
          <div key={index} className={' pb-4 '}>
            <h2 className="text-2xl font-extrabold text-center text-yellow-500 ">
              {skillTypes[index]}:
            </h2>
            <div className="border-2 rounded-lg border-yellow-50 w-px[90px] m-3"></div>
            <div className="flex flex-col content-start w-full px-8">
              {skill
                .sort((a, b) => b.percentage - a.percentage)
                .map((item, i) => (
                  <div
                    key={index + '-' + i}
                    className={'flex flex-col xl:flex-row pt-1 '}
                  >
                    <span className="block w-full text-lg font-bold xl:w-2/5">
                      {item.name}
                    </span>
                    <div className="w-full xl:w-3/5 bg-gray-500 rounded-full h-2.5 mt-2  ">
                      <div
                        className="transition-all duration-1000 bg-yellow-500 h-2.5 rounded-full "
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
    </>
  );
};
export default Skills;

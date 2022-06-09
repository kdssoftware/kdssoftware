import { Dispatch, SetStateAction, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { title } from 'process';
import { navItems } from '../public/data';

interface Props {
  activeHref: string;
}

const Navbar: NextPage<Props> = (props) => {
  const { activeHref } = props;

  const [hoveringNavNumber, setHoveringNavNumber] =
    useState<number>();
  const animateNavBorder = (nav: number) => {
    setHoveringNavNumber(nav);
  };
  let currentIndex = navItems.findIndex(
    (item) => item.href === activeHref
  );
  if (currentIndex === -1) currentIndex = 0;
  return (
    <header className="w-full fixed left-0 top-0 pb-2  z-10">
      <div
        className="flex  justify-center md:justify-between
      shadow-md shadow-dracula-background
      flex-row md:flex-col p-4 bg-dracula-background lg:flex-row"
      >
        <div className="flex justify-center flex-col">
          <p className="text-xl uppercase font-light  hidden md:block">
            {navItems[currentIndex].slogan}
          </p>
        </div>
        <nav>
          <ul className="flex justify-start md:justify-end">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={
                  ' mx-2 sm:ml-12 md:ml-24 ' +
                  (hoveringNavNumber === index ||
                  currentIndex === index
                    ? 'text-dracula-green'
                    : '')
                }
              >
                <Link href={item.href}>
                  <a
                    className="cursor-pointer"
                    onMouseOver={() => {
                      animateNavBorder(index);
                    }}
                    onMouseLeave={() => {
                      animateNavBorder(-1);
                    }}
                  >
                    <div className="flex items-center justify-center sm:justify-end">
                      <div
                        className={
                          'w-10 md:w-12 border-solid border-white ease-in-out border-4 md:border-2 rounded-lg ' +
                          (currentIndex === index
                            ? 'border-4 border-dracula-green border-10 rounded-lg antialiased '
                            : hoveringNavNumber === index
                            ? 'border-4 border-dracula-green opacity-80 border-10 rounded-lg animate-pulse antialiased'
                            : '')
                        }
                      ></div>
                      <h1 className="ml-3 text-3xl hidden sm:block ">
                        {index + 1}
                      </h1>
                    </div>
                    <div className="text-right text-sm md:text-base pt-4 md:pt-0">
                      {item.title}
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

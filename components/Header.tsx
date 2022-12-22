import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const navLinks: Array<{ label: string; href: string }> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'About',
    href: '/about',
  },
];

const MobileNavbar = ({
  state,
  navLinks,
  onClose,
}: {
  state: boolean;
  navLinks: Array<{ label: string; href: string }>;
  onClose: React.ReactEventHandler;
}) => {
  const [isBrowser, setIsBrowser] = React.useState<boolean>(false);

  React.useEffect(() => setIsBrowser(true), []);

  React.useEffect(() => {
    if (isBrowser && state) {
      document.body.style['overflow'] = 'hidden';
    } else if (isBrowser && !state) {
      document.body.style['overflow'] = 'initial';
    }
    console.log('use effect!');
  }, [isBrowser, state]);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <nav
        className={`${
          state ? 'navbar-show ' : ''
        }navbar-mobile fixed top-0 bottom-0 -right-64 z-20 min-h-screen w-64 bg-white px-4 transition-all`}
      >
        <div className="grid h-16 items-center justify-end" onClick={onClose}>
          <GrClose
            fontSize={25}
            className="hamburger-close flex cursor-pointer flex-col justify-center gap-y-1 opacity-70 transition-all hover:text-black hover:opacity-100"
          />
        </div>
        <ul className="navlinks navlinks-mobile mt-8 flex flex-col gap-y-6 text-right transition-all">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} legacyBehavior>
                <a
                  className="inline-block rounded-md py-2 px-3 transition-all hover:bg-slate-200 hover:text-black"
                  aria-label={`Navigate to ${item.label}`}
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>,
      document.getElementById('navbar-root') ?? document.body
    );
  }
  return null;
};

const Overlay = ({ state }: { state: boolean }) => {
  const [isBrowser, setIsBrowser] = React.useState<boolean>(false);

  React.useEffect(() => setIsBrowser(true), []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        className={`${
          state ? 'block' : 'hidden'
        } overlay fixed top-0 bottom-0 left-0 right-0 z-10 h-full w-full bg-black opacity-50`}
      ></div>,
      document.getElementById('overlay-root') ?? document.body
    );
  }
  return null;
};

const Header = () => {
  const [showNavbar, setShowNavbar] = React.useState<boolean>(false);

  return (
    <header className="header fixed top-0 left-0 right-0 z-10 bg-white/20 backdrop-blur-[10px]">
      <nav className="navbar m-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <h1>
          <Link href="/" legacyBehavior>
            <a className="author-logo block text-xl font-bold opacity-80 transition-all hover:opacity-100">
              rpturbina
            </a>
          </Link>
        </h1>
        <ul className="navlinks navlinks-desktop hidden sm:flex sm:gap-x-3">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} legacyBehavior>
                <a
                  className="inline-block rounded-md py-2 px-3 transition-all hover:bg-slate-200 hover:text-black"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid h-16 items-center justify-end sm:hidden">
          <div
            className="hamburger-open flex cursor-pointer flex-col justify-center gap-y-1 opacity-70 transition-all hover:text-black hover:opacity-100"
            onClick={() => setShowNavbar(true)}
          >
            <GiHamburgerMenu fontSize={25} />
          </div>
        </div>
      </nav>
      <MobileNavbar
        state={showNavbar}
        onClose={() => setShowNavbar(false)}
        navLinks={navLinks}
      />
      <Overlay state={showNavbar} />
    </header>
  );
};

export default Header;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-white/20 backdrop-blur-[10px]">
      <nav className="m-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <HeaderLogo />
        <NavbarLinks />
        <HamburgerNavbar />
      </nav>
    </header>
  );
}

const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="block text-xl font-bold opacity-80 transition-all hover:opacity-100"
      tabIndex={1}
    >
      <h1>rpturbina</h1>
    </Link>
  );
};

const NAV_LINKS: Array<{ label: string; href: string }> = [
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

const NavbarLinks = () => {
  return (
    <ul className="hidden sm:flex sm:gap-x-3">
      {NAV_LINKS.map((item) => (
        <li key={item.label} className="block">
          <Link
            href={item.href}
            className="inline-block rounded-md px-3 py-2 opacity-80 transition-all hover:bg-slate-200 hover:text-black hover:opacity-100"
            aria-label={`Navigate to ${item.label}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const HamburgerNavbar = () => {
  const [showNavbar, setShowNavbar] = React.useState<boolean>(false);

  return (
    <>
      <div className="grid h-16 items-center justify-end sm:hidden">
        <button
          className="flex cursor-pointer flex-col justify-center gap-y-1 opacity-70 transition-all hover:text-black hover:opacity-100"
          onClick={() => setShowNavbar(true)}
        >
          <GiHamburgerMenu fontSize={25} />
        </button>
      </div>
      <MobileNavbar state={showNavbar} onClose={() => setShowNavbar(false)} />
      <Overlay state={showNavbar} onClose={() => setShowNavbar(false)} />
    </>
  );
};

const MobileNavbar = ({
  state,
  onClose,
}: {
  state: boolean;
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
  }, [isBrowser, state]);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <nav
        className={`${
          state ? 'navbar-show ' : ''
        } fixed -right-64 bottom-0 top-0 z-20 min-h-screen w-64 bg-white px-4 transition-all sm:hidden`}
      >
        <div className="grid h-16 items-center justify-end" onClick={onClose}>
          <GrClose
            fontSize={25}
            className="flex cursor-pointer flex-col justify-center gap-y-1 text-accent opacity-70 transition-all hover:text-black hover:opacity-100"
          />
        </div>
        <ul className=" mt-8 flex flex-col gap-y-6 text-right transition-all">
          {NAV_LINKS.map((item) => (
            <li key={item.label} className="block">
              <Link
                href={item.href}
                className="inline-block rounded-md px-3 py-2 opacity-80 transition-all hover:bg-slate-200 hover:text-black hover:opacity-100"
                aria-label={`Navigate to ${item.label}`}
                onClick={onClose}
              >
                {item.label}
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

const Overlay = ({
  state,
  onClose,
}: {
  state: boolean;
  onClose: () => void;
}) => {
  const [isBrowser, setIsBrowser] = React.useState<boolean>(false);

  React.useEffect(() => setIsBrowser(true), []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        className={`${
          state ? 'block' : 'hidden'
        } fixed bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-black opacity-50`}
        onClick={onClose}
      />,
      document.getElementById('overlay-root') ?? document.body
    );
  }
  return null;
};

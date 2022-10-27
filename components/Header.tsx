import Link from "next/link";

const navLinks: Array<{ label: string; href: string }> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "About",
    href: "/about",
  },
];

const Header = () => {
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
        <ul className="navlinks navlinks-desktop hidden sm:flex sm:gap-x-12">
          {navLinks.map((item) => (
            <Link href={item.href} key={item.label} legacyBehavior>
              <a className="opacity-80 inline-block transition-all hover:opacity-100 hover:text-black">
                {item.label}
              </a>
            </Link>
          ))}
        </ul>
        <div className="grid h-16 items-center justify-end sm:hidden">
          <ul className="hamburger-open flex cursor-pointer flex-col justify-center gap-y-1 opacity-70 transition-all hover:text-black hover:opacity-100">
            <li>
              <span className="hamburger-bar"></span>
            </li>
            <li>
              <span className="hamburger-bar"></span>
            </li>
            <li>
              <span className="hamburger-bar"></span>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar-mobile fixed top-0 bottom-0 -right-64 z-20 min-h-screen w-64 bg-white px-4 transition-all">
        <div className="grid h-16 items-center justify-end"></div>
        <ul className="navlinks navlinks-mobile mt-8 flex flex-col gap-y-8 text-right transition-all"></ul>
      </nav>
      <div className="overlay fixed top-0 bottom-0 left-0 right-0 z-10 hidden h-full w-full bg-black opacity-50"></div>
    </header>
  );
};

export default Header;

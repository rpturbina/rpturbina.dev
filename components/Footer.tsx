const Footer = () => {
  return (
    <footer className="footer">
      <p id="copyright">{`©${new Date().getFullYear()} by Rizki Pratama Turbina. All rights reserved.`}</p>
      <p>
        <a
          href="https://github.com/rpturbina"
          target="_blank"
          rel="noreferrer noopener"
        >
          <strong>Find me!</strong>
        </a>
      </p>
    </footer>
  );
};
export default Footer;

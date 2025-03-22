const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">

      <div className="flex gap-3">
        <a href="https://github.com/davidldv" target="_blank" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://linkedin.com/in/davidldv" target="_blank" className="social-icon">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a href="https://x.com/davidl_on" target="_blank" className="social-icon">
          <img src="/assets/twitter.svg" alt="x" className="w-1/2 h-1/2" />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
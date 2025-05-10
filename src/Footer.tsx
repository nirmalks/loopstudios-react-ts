import FooterProps from './FooterProps';

export default function Footer({ year }: FooterProps) {
  return (
    <footer className="bg-black mt-10">
      <div className="container max-w-screen-lg mx-auto text-white px-4 md:px-0 py-14 ">
        <div className="flex flex-col md:flex-row md:space-y-0 md:justify-between md:items-start">
          <nav className="flex items-center md:items-start flex-col">
            <img src="../src/assets/logo.svg" alt="footer-logo" />

            <nav className="flex flex-col md:flex-row space-y-8 mt-8 md:space-y-0 md:py-4 md:mt-0">
              <a href="#" className="font-bold md:mr-6 hover:underline ">
                Home
              </a>
              <a href="#" className="font-bold md:mr-6 hover:underline">
                About
              </a>
              <a href="#" className="font-bold md:mr-6 hover:underline">
                Services
              </a>
              <a href="#" className="font-bold hover:underline">
                Contact
              </a>
            </nav>
          </nav>

          <div className="flex items-center justify-center md:items-start flex-col space-y-3 mt-10">
            <nav
              className="flex"
              data-testid="desktop-footer-menu"
              id="desktop-footer-menu"
            >
              <div className="h-8 pr-2">
                <a href="#" className="font-bold md:mr-6 hover:underline ">
                  <img className="h-6" src="../src/assets/icon-facebook.svg" />
                </a>
              </div>
              <div className="h-8 pr-2">
                <a href="#" className="font-bold md:mr-6 hover:underline ">
                  <img className="h-6" src="../src/assets/icon-instagram.svg" />
                </a>
              </div>
              <div className="h-8 pr-2">
                <a href="#" className="font-bold md:mr-6 hover:underline">
                  <img className="h-6" src="../src/assets/icon-pinterest.svg" />
                </a>
              </div>
              <div className="h-8 pr-2">
                <a href="#" className="font-bold hover:underline ">
                  <img className="h-6" src="../src/assets/icon-twitter.svg" />
                </a>
              </div>
            </nav>
            <p className="mt-4 md:mt-1 text-center">
              © <span>{year}</span> Loopstudios. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

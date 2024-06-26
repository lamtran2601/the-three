import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="mx-auto w-11/12" />

      <section className="container grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-4 xl:grid-cols-6">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="flex text-xl font-bold">
            <LogoIcon />
            ShadcnUI/React
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Follow US</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Github
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Twitter
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Dribbble
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Platforms</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Web
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Mobile
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">About</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Features
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Pricing
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Community</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Youtube
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Discord
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Twitch
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Landing page made by{" "}
          <a
            target="_blank"
            href="https://github.com/leoMirandaa"
            className="border-primary text-primary transition-all hover:border-b-2"
            rel="noreferrer"
          >
            Leo Miranda
          </a>
        </h3>
      </section>
    </footer>
  );
};

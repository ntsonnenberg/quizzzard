import ToggleTheme from "./ToggleTheme";
import Link from "next/link";

export default async function Navbar() {
  return (
    <header className="bg-transparent lg:py-8 fixed top-0 w-full z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="bg-primary-foreground relative flex items-center justify-between h-16 lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
          <div className="flex-shrink-0">
            <Link href="/" title="" className="flex text-4xl font-bold">
              Quizzzard
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <Link
              href="/#features"
              title="Fetures Section"
              className="primary text-base font-medium transition-all duration-200 hover:text-primary-variant"
            >
              Features
            </Link>
            <Link
              href="/#about"
              title="About Section"
              className="primary text-base font-medium transition-all duration-200 hover:text-primary-variant"
            >
              About
            </Link>
            <Link
              href="/#pricing"
              title="Pricing Section"
              className="primary text-base font-medium transition-all duration-200 hover:text-primary-variant"
            >
              Pricing
            </Link>
            <Link
              href="https://forms.gle/PiSKaiAfnqEGnUcJ6"
              title="Feedback Survey"
              className="primary text-base font-medium transition-all duration-200 hover:text-primary-variant"
            >
              Feedback
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link
              href="/?show=true"
              title="Stay Updated Prompt"
              className="primary text-base font-medium transition-all duration-200 hover:text-primary-variant"
            >
              Stay Updated
            </Link>
            <ToggleTheme />
          </div>
        </nav>

        <nav className="flex flex-col py-4 space-y-2 lg:hidden">
          <Link
            href="/#features"
            title="Fetures Section"
            className="py-2 text-base font-medium text-black transition-all duration-200"
          >
            Features
          </Link>
          <Link
            href="/#about"
            title="About Section"
            className="py-2 text-base font-medium text-black transition-all duration-200"
          >
            About
          </Link>
          <Link
            href="/#pricing"
            title="Pricing Section"
            className="py-2 text-base font-medium text-black transition-all duration-200"
          >
            Pricing
          </Link>
          <Link
            href="https://forms.gle/PiSKaiAfnqEGnUcJ6"
            title="Feedback Survey"
            className="py-2 text-base font-medium text-black transition-all duration-200"
          >
            Feedback
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 bg-primary-foreground">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          <div className="md:order-1 text-4xl font-bold">Quizzzard</div>
          <div className="md:order-3">
            <ul className="flex items-center justify-end space-x-6">
              <li>
                <Link
                  href="https://www.facebook.com/groups/quizzzardclub"
                  title=""
                  target="_blank"
                  rel="noopener"
                  className="inline-flex transition-all duration-200 rounded text-primary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                  </svg>
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  title=""
                  target="_blank"
                  rel="noopener"
                  className="inline-flex transition-all duration-200 rounded text-primary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  title=""
                  target="_blank"
                  rel="noopener"
                  className="inline-flex transition-all duration-200 rounded text-primary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
                >
                  <span className="sr-only"> Google </span>
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 md:order-2">
            <ul className="flex items-center justify-center sm:justify-between md:justify-center space-x-9 lg:space-x-16">
              <li>
                <Link
                  href="/#features"
                  title="Features Section"
                  className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-primary hover:text-opacity-100 focus:outline-none"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="/#about"
                  title=""
                  className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-primary hover:text-opacity-100 focus:outline-none"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/#pricing"
                  title="Pricing Section"
                  className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-primary hover:text-opacity-100 focus:outline-none"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="https://forms.gle/PiSKaiAfnqEGnUcJ6"
                  title="Feedback Survey"
                  className="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-primary hover:text-opacity-100 focus:outline-none"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

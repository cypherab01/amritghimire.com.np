import Logo from "./ui/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex items-start">
            <div>
              <Logo />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Stay Connected
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://www.facebook.com/amrit.ghimire.1612"
                    className="flex items-center hover:text-gray-900 dark:hover:text-white"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://www.linkedin.com/in/amrit-ghimire-784a23166/"
                    className="flex items-center hover:text-gray-900 dark:hover:text-white"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com"
                    className="flex items-center hover:text-gray-900 dark:hover:text-white"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 flex items-center">
                  <Link href="mailto:amritghi55@gmail.com">
                    amritghi55@gmail.com
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="tel:+123456789">+977 9860057132</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {`2024 - ${new Date().getFullYear()} `}
            <Link
              href="https://www.abhishekg.com.np"
              className="hover:underline"
            >
              Developed by cypherab01
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

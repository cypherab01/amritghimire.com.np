import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="group flex items-center justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="text-primary group-hover:text-secondary-foreground transition-colors duration-500 ease-out">
            Amrit
          </span>
          <span className="group-hover:text-primary transition-colors duration-500 ease-out">
            Ghimire
          </span>
        </h1>
      </Link>
    </>
  );
}

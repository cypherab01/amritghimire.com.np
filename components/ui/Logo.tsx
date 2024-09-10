import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="group flex items-center justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl transition ease-out delay-700 duration-500">
          <span className="text-primary group-hover:text-secondary-foreground">
            A
          </span>
          <span className="group-hover:text-primary">G</span>
        </h1>
      </Link>
    </>
  );
}

import { Link } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";

// NOTE: When you switdh to node runtime, the first link is working again, bu then the second link fails!
export const config = { runtime: 'edge' }

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to <span className="sr-only">Remix</span>
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              src="/logo-light.png"
              alt="Remix"
              className="block w-full dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="Remix"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            What&apos;s next?
          </p>
          <Link to="/about">
            Navigate to About page and observe 404 error!
          </Link>
          <Link to="/edge">
            Navigate to About page - working with edge runtime?
          </Link>          
          <a href="/simple">
            Navigate to Simple page and verify it iw working fine!
          </a>
        </nav>
      </div>
    </div>
  );
}


export const config = { runtime: 'edge' }

export default function Edge() {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-16">
          <header className="flex flex-col items-center gap-9">
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
              Works fine with edge runtime
            </h1>
          </header>         
        </div>
      </div>
    );
  }
  
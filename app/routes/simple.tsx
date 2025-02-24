export const config = { runtime: 'node' }

export default function Simple() {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-16">
          <header className="flex flex-col items-center gap-9">
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
              Simple linking with {`<a>`} tag  always works
            </h1>
          </header>         
        </div>
      </div>
    );
  }
  
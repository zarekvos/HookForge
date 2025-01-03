import { Github } from "lucide-react";

export function Header() {
  return (
    <header className=" fixed w-full z-50 bg-opacity-80 backdrop-blur-sm bg-black text-primary-foreground border-b shadow border-pink-500">
      <div className=" px-12 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-pink-500">V4</h1>
          <span className="text-xl" role="img" aria-label="Pick axe">
            🪝
          </span>
          <h1 className="text-xl font-bold text-pink-500">Address Miner</h1>
        </div>
        <a
          href="https://github.com/GianfrancoBazzani/uni-v4-hook-address-miner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-pink-500 hover:text-pink-900 hover:bg-pink-500 hover:bg-opacity-20 p-2 rounded">
            <Github size={21} />
            <span className="sr-only">GitHub</span>
          </div>
        </a>
      </div>
    </header>
  );
}

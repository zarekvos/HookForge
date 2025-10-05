import { Github, Link } from "lucide-react";

// Custom X (Twitter) Logo Component
const XLogo = ({ size = 21, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export function Header() {
  return (
    <header className=" fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 text-primary-foreground">
      <div className=" px-20 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 ml-24">
          <h1 className="text-xl font-bold text-blue-200">HookForge</h1>
          <span className="text-xl text-blue-200" role="img" aria-label="Chain">
            <Link size={20} />
          </span>
          <h1 className="text-xl font-bold text-blue-200">Miner</h1>
        </div>
        <div className="flex flex-row gap-3">
          <a
            href="https://x.com/zarekvos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-blue-200 hover:text-blue-500 p-2 rounded duration-200">
              <XLogo size={21} />
              <span className="sr-only">X (Twitter)</span>
            </div>
          </a>
          <a
            href="https://github.com/zarekvos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-blue-200 hover:text-blue-500 p-2 rounded duration-200">
              <Github size={21} />
              <span className="sr-only">GitHub</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

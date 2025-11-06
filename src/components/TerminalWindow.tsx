import { ReactNode } from "react";

type TerminalWindowProps = {
  /** Top-left path, e.g. "~/projects" */
  path: string;
  /** Main command line, e.g. "ls -la ./featured_projects" */
  command?: string;
  /** Optional subtitle/status line */
  status?: string;
  /** Content that appears under the header */
  children?: ReactNode;
};

export default function TerminalWindow({
  path,
  command,
  status,
  children,
}: TerminalWindowProps) {
  return (
    <div className="border border-[#b4ff39] bg-black/70 text-[#b4ff39]">
      {/* Title bar */}
      <div className="px-6 py-3 md:px-8 md:py-4 border-b border-[#b4ff39]/40">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-3 w-3 rounded-full bg-red-500" />
          <span className="inline-flex h-3 w-3 rounded-full bg-yellow-400" />
          <span className="inline-flex h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm md:text-base tracking-[0.18em]">
            {path}
          </span>
        </div>

        {(command || status) && (
          <div className="pt-3 text-sm md:text-base font-mono space-y-1">
            {command && (
             <>
                {/* Command line */}
                <div className="mt-1 h-px bg-[#b4ff39]/40" /> 
                <p className="mt-4">
                  <span className="mr-2">{">"}</span>
                  {command}
                </p>
                {/* EDITED: thin line below the command */}
               
              </>
            )}
            {status && <p className="text-[#d6ffe1]">{status}</p>}
          </div>
        )}
      </div>

      {/* Body */}
      {children && (
        <div className="px-6 py-4 md:px-8 md:py-5">{children}</div>
      )}
    </div>
  );
}

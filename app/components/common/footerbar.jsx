import React from "react";
import { Home, Search, BookOpen, LogIn } from "lucide-react";
import Link from "next/link";

export default function Footerbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#004274] shadow-md flex justify-around items-center py-2 md:hidden z-50">
      <Link href="/" passHref>
        <button className="flex flex-col items-center">
          <Home className="h-6 w-6 text-white" />
          <span className="text-xs text-white">Home</span>
        </button>
      </Link>
      <Link href="/search" passHref>
        <button className="flex flex-col items-center">
          <Search className="h-6 w-6 text-white" />
          <span className="text-xs text-white">Search</span>
        </button>
      </Link>
      <Link href="/blog" passHref>
        <button className="flex flex-col items-center">
          <BookOpen className="h-6 w-6 text-white" />
          <span className="text-xs text-white">BizStory</span>
        </button>
      </Link>
      <Link href="/modal" passHref>
        <button className="flex flex-col items-center">
          <LogIn className="h-6 w-6 text-white" />
          <span className="text-xs text-white">Login</span>
        </button>
      </Link>
    </div>
  );
}

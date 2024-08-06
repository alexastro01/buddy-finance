import React from 'react';
import { PlusCircle, FileText, Activity } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="btm-nav btm-nav-md fixed bottom-0 w-full bg-base-200">
      <Link href="/summary" className="text-primary">
        <FileText size={20} />
        {/* <span className="btm-nav-label text-xs">Summary</span> */}
      </Link>
      <Link href="/create-expense" className="text-primary">
        <PlusCircle size={28} />
      </Link>
      <Link href="/activity" className="text-primary">
        <Activity size={20} />
        {/* <span className="btm-nav-label text-xs">Activity</span> */}
      </Link>
    </footer>
  );
};

export default Footer;
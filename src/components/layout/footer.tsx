import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-[150px] p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          → this is the footer
        </a>
      </footer>
    </div>
  );
}

export default Footer;

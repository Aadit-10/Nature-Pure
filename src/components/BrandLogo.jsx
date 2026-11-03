import React from 'react';

export default function BrandLogo({
  size = 'default',
  isDarkBg = false,
  className = '',
  emblemClassName = '',
}) {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  const textColor = isDarkBg ? 'text-white' : 'text-[#1e3a5f]';
  const lineColor = 'bg-[#facc15]';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none text-left ${className}`}>
      {/* Pristine Emblem Image */}
      <img
        src="/wp-content/uploads/2026/04/cropped-Untitled-2-1-192x192.png"
        alt="Nature Pure Logo Mark"
        className={`w-auto object-contain shrink-0 ${
          isLg
            ? 'h-11 sm:h-13 md:h-14'
            : isSm
            ? 'h-8 sm:h-9'
            : 'h-9 sm:h-10 md:h-11'
        } ${emblemClassName}`}
      />

      {/* Brand Text Lockup */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-brand-serif font-bold tracking-[0.05em] leading-none ${
            isLg
              ? 'text-[17px] sm:text-[20px] md:text-[22px]'
              : isSm
              ? 'text-[13px] sm:text-[15px]'
              : 'text-[15px] sm:text-[17px] md:text-[19px]'
          } ${textColor}`}
        >
          NATURE PURE
        </span>

        {/* Golden Yellow Accent Divider */}
        <div
          className={`w-full ${lineColor} rounded-full ${
            isLg
              ? 'h-[2px] my-[3.5px] sm:my-[4px]'
              : isSm
              ? 'h-[1.5px] my-[2px]'
              : 'h-[1.5px] sm:h-[2px] my-[2.5px] sm:my-[3px]'
          }`}
        />

        {/* Tagline */}
        <span
          className={`font-brand-sans font-semibold tracking-[0.18em] uppercase leading-none whitespace-nowrap ${
            isLg
              ? 'text-[8px] sm:text-[9.5px] md:text-[10.5px]'
              : isSm
              ? 'text-[6.5px] sm:text-[7.5px]'
              : 'text-[7px] sm:text-[8px] md:text-[9px]'
          } ${textColor}`}
        >
          NATURE. INNOVATION. HUMANITY
        </span>
      </div>
    </div>
  );
}

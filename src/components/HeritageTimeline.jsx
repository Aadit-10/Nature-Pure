import React, { useRef, useState, useEffect } from 'react';
import { heritageTimeline } from '../data/catalog';
import { History, ChevronLeft, ChevronRight, Clock, Award, CheckCircle2, Sparkles } from 'lucide-react';

export default function HeritageTimeline() {
  const scrollRef = useRef(null);
  const stepperRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef(null);

  const handleScrollTo = (index) => {
    setActiveIdx(index);
    const container = scrollRef.current;
    if (!container || !container.children[index]) return;

    isProgrammaticScroll.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const targetCard = container.children[index];
    const containerWidth = container.clientWidth;
    const cardWidth = targetCard.offsetWidth;
    const cardLeft = targetCard.offsetLeft;
    // Perfectly center the card in the viewport
    const targetScrollLeft = cardLeft - (containerWidth - cardWidth) / 2;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: 'smooth'
    });

    scrollTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 600);
  };

  // Keep stepper button in view on mobile
  useEffect(() => {
    if (stepperRef.current && stepperRef.current.children[activeIdx]) {
      const stepperBtn = stepperRef.current.children[activeIdx];
      const stepperContainer = stepperRef.current;
      const targetScroll = stepperBtn.offsetLeft - (stepperContainer.clientWidth - stepperBtn.offsetWidth) / 2;
      stepperContainer.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }
  }, [activeIdx]);

  const handleScrollLeft = () => {
    const nextIdx = Math.max(0, activeIdx - 1);
    handleScrollTo(nextIdx);
  };

  const handleScrollRight = () => {
    const nextIdx = Math.min(heritageTimeline.length - 1, activeIdx + 1);
    handleScrollTo(nextIdx);
  };

  const handleContainerScroll = () => {
    if (isProgrammaticScroll.current) return;
    const container = scrollRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeIdx && closestIdx >= 0 && closestIdx < heritageTimeline.length) {
      setActiveIdx(closestIdx);
    }
  };

  return (
    <section id="heritage" className="py-20 sm:py-24 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 relative overflow-hidden border-b border-amber-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
              <History className="w-3.5 h-3.5 text-amber-700" />
              <span>50-Year Heritage Journey (1973 - Present)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Our Journey of Botanical Excellence
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl">
              Scroll sideways through five decades of chemical engineering innovation, process purity, and global expansion.
            </p>
          </div>

          {/* Navigation Arrows & Counter */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <span className="text-xs font-semibold text-gray-500 mr-2">
              <strong className="text-emerald-800">{activeIdx + 1}</strong> of {heritageTimeline.length} Milestones
            </span>
            <button
              onClick={handleScrollLeft}
              disabled={activeIdx === 0}
              className={`p-3 rounded-full border transition-all cursor-pointer ${
                activeIdx === 0
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-50'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 shadow-xs'
              }`}
              title="Previous milestone"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleScrollRight}
              disabled={activeIdx === heritageTimeline.length - 1}
              className={`p-3 rounded-full border transition-all cursor-pointer ${
                activeIdx === heritageTimeline.length - 1
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-50'
                  : 'bg-emerald-800 text-white border-emerald-800 hover:bg-emerald-900 shadow-md'
              }`}
              title="Next milestone"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Year Stepper Bar */}
        <div className="relative mb-10 pb-4">
          {/* Continuous Connecting Line */}
          <div className="hidden sm:block absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-amber-200 via-emerald-300 to-teal-400 -translate-y-1/2 z-0 rounded-full" />

          {/* Stepper Node Buttons */}
          <div
            ref={stepperRef}
            className="flex items-center justify-between overflow-x-auto gap-3 py-2 px-1 relative z-10 scrollbar-none"
          >
            {heritageTimeline.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.year}
                  onClick={() => handleScrollTo(idx)}
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-2xl transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-lg scale-105 ring-2 ring-emerald-600/30'
                      : 'bg-white/90 text-gray-700 hover:bg-emerald-50 border border-gray-200/80 shadow-2xs'
                  }`}
                >
                  <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${isActive ? 'bg-amber-300' : 'bg-emerald-600'}`} />
                  <span className="text-xs sm:text-sm font-black tracking-wide">{item.year}</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider hidden md:block ${isActive ? 'text-emerald-200' : 'text-gray-500'}`}>
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal Sideways Cards Container */}
        <div
          ref={scrollRef}
          onScroll={handleContainerScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth focus:outline-none px-2 sm:px-4"
          style={{ scrollbarWidth: 'thin', scrollPadding: '0 24px' }}
        >
          {heritageTimeline.map((item, idx) => {
            const isCurrent = activeIdx === idx;
            return (
              <div
                key={item.year}
                onClick={() => handleScrollTo(idx)}
                className={`snap-center shrink-0 w-[84vw] max-w-[340px] sm:w-[350px] md:w-[380px] rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isCurrent
                    ? 'bg-white border-emerald-600/60 shadow-xl ring-2 ring-emerald-600/20 -translate-y-1'
                    : 'bg-white/90 border-gray-200/90 hover:border-emerald-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar with Year & Badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                    <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                      {item.badge}
                    </span>
                    <span className={`text-2xl sm:text-3xl font-black ${isCurrent ? 'text-emerald-800' : 'text-gray-900'}`}>
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-base sm:text-xl font-bold mb-2.5 sm:mb-3 transition-colors leading-snug ${isCurrent ? 'text-emerald-950' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>

                  {/* Narrative */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 mt-5 sm:mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Milestone #{idx + 1}</span>
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${isCurrent ? 'text-emerald-700' : 'text-gray-400'}`}>
                    {isCurrent ? 'Viewing' : 'Click to View →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sideways Scroll Hint Pill */}
        <div className="mt-4 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium bg-white/80 px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs">
            <span>← Swipe or tap milestones sideways to explore all 50 years →</span>
          </span>
        </div>
      </div>
    </section>
  );
}

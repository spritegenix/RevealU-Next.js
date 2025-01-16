'use client';
import { useState, useEffect, useRef } from 'react';

interface Skills {
  skill: string;
  percentage: number;
}

export default function SkillBar({ skill, percentage }: Skills) {
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const [displayedPercentage, setDisplayedPercentage] = useState(0); // Percentage for the span
  const barRef = useRef<HTMLDivElement>(null); // Reference for the skill bar

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the bar is visible
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let currentPercentage = 0;

      const increment = percentage / 50; // Divides the percentage into 50 steps for smooth animation
      const interval = setInterval(() => {
        currentPercentage += increment;
        if (currentPercentage >= percentage) {
          currentPercentage = percentage;
          clearInterval(interval);
        }
        setDisplayedPercentage(Math.floor(currentPercentage)); // Updates the displayed percentage
      }, 40); // 40ms interval for smoother animation
    }
  }, [isVisible, percentage]);

  return (
    <div className="mb-6">
      {/* Skill Name */}
      <div className="text-lg font-semibold mb-1">{skill}</div>
      {/* Skill Bar */}
      <div className="w-full bg-gray-300 h-1" ref={barRef}>
        <div
          className={`${
            percentage <= 50
              ? 'bg-red-500'
              : percentage <= 75
              ? 'bg-yellow-500'
              : 'bg-green-500'
          } h-1 text-white flex items-center justify-end pr-2 transition-all duration-2000 ease-in 
           opacity-100
          `}
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        >
          <span className="relative -top-3 text-black">
            {displayedPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
}

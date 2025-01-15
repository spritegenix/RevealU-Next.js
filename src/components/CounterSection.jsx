'use client';
import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetNumber, duration = 2000, children }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = targetNumber / (duration / 50); // Adjust increments based on duration
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber, duration]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-6xl font-bold text-center">
        {count}
      </span>
      {children}
    </div>
  );
};

const CounterSection = () => {
  const counters = [
    { targetNumber: 1500, duration: 3000, label: 'Happy Clients', suffix: '+' },
    {
      targetNumber: 2500,
      duration: 3000,
      label: 'Projects Completed',
      suffix: '%',
    },
    { targetNumber: 500, duration: 3000, label: 'Awards Won', suffix: '+' },
    { targetNumber: 500, duration: 3000, label: 'Revenue', suffix: 'k' },
  ];

  return (
    <section className=" pt-10 lg:pt-20 ">
      <div className="container mx-auto text-center ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="border-r-2 border-gray-500 even:border-r-0 lg:even:border-r-2 lg:last:border-none   "
            >
              <Counter
                targetNumber={counter.targetNumber}
                duration={counter.duration}
              >
                <span className="text-3xl pl-1 text-gray-500 font-bold ">
                  {counter.suffix}
                </span>
              </Counter>
              <p className="mt-2 bg-images mx-auto">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;

'use client';
import React, { useState } from 'react';

const testimonials = [
  {
    text: 'The workshop you conducted was amazing. I could clearly identify the gaps to overcome in my area of health, wealth, and career. I could also learn about the belief systems at the source of it and patterns that are repeating. Your program gave the insights on healing, repairing and reclaiming your personal power to live a happy and prosperous life. I highly recommend your programs to men and women who wish to live a great life. ',
    name: 'Ranjini Sanjay',
    handle: '',
    rating: 5,
  },
  {
    text: "It was an amazing session. Full of nice brain activities & a great moral story I'm sure that I will be able to apply this to overcome my overthinking tendency. Lots of gratitude",
    name: 'Priyanka Mathur',
    handle: '',
    rating: 5,
  },
  {
    text: 'Hello Yogita ji, Thank you so much for the wonderful workshop. It was an amazing experience to learn about conscious living, and being mindful about our thoughts. You taught us about various techniques and exercises for breathing',
    name: 'Geeta Jain',
    handle: '',
    rating: 4.8,
  },
  {
    text: 'The fingerprint analysis gave me insights into my strengths and career potential. It was an eye-opening experience!',
    name: 'Sneha Kapoor',
    handle: '',
    rating: 5,
  },
  {
    text: 'The mindfulness and NLP techniques taught in the sessions have helped me manage stress and focus on my goals effectively.',
    name: 'Rahul Verma',
    handle: '',
    rating: 4.5,
  },
  {
    text: 'Joining the workshops has been life-changing. I’ve developed healthier habits and built a mindset that aligns with my goals.',
    name: 'Priya Mehta',
    handle: '',
    rating: 5,
  },
];

const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
      ★
    </span>
  ));
};

const TestimonialCard = () => {
  const [expanded, setExpanded] = useState({});

  const handleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-3">
      {testimonials.map((testimonial, index) => (
        <div
          className="p-4 space-y-2 md:p-10 md:space-y-2 md:even:relative even:top-10 shadow-lg border-[0.3px] border-gray-500 rounded-lg"
          key={index}
        >
          <p>
            {testimonial.text.length > 150 && !expanded[index]
              ? testimonial.text.substring(0, 150) + '...'
              : testimonial.text}
            {testimonial.text.length > 150 && (
              <span
                className="text-bg-blue cursor-pointer ml-2"
                onClick={() => handleReadMore(index)}
              >
                {expanded[index] ? 'Show Less' : 'Read More'}
              </span>
            )}
          </p>
          <p>{renderStars(testimonial.rating)}</p>
          <p>{testimonial.name}</p>
          {testimonial.handle && (
            <p className="font-semibold">{testimonial.handle}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;

import React from 'react';

const TestimonialCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 mb-20">
      {[...Array(10)].map((_, index) => (
        <div
          className="p-4 space-y-2  md:p-10 md:space-y-5 md:even:relative even:top-10 shadow-lg border-[0.3px] border-gray-500 rounded-lg"
          key={index}
        >
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam.
          </p>
          <p>Starts</p>
          <p>Cedric Wells</p>
          <p>@cedric_wells</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;

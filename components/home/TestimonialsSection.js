"use client";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection({ testimonials = [] }) {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-16">
          Reviews / Testimonials
        </h2>

        <div className="flex gap-12 overflow-x-auto pb-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

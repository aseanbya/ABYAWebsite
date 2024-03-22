import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";

export default function Testimonials() {
  const [testimonialList, setTestimonialList] = useState([]);

  const testimonialColletionRef = collection(db, "Testimonial");
  useEffect(() => {
    const getTestimonialList = async () => {
      try {
        const data = await getDocs(testimonialColletionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTestimonialList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getTestimonialList();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-600 antialiased">
      <InfiniteMovingCards
        items={testimonialList}
        direction="right"
        speed="fast"
        header={"Testimonials"}
      />
    </div>
  );
}

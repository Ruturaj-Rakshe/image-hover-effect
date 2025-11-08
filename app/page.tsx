"use client"; // Add this since we're using client-side effects

import { useEffect, useRef } from "react";
import { hoverImage } from "./lib/ImageHover";

export default function Home() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize hover effects after component mounts
    imageRefs.current.forEach((ref) => {
      if (ref) {
        hoverImage({ element: ref});
      }
    });
  }, []);

  // Add ref to each image
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    imageRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-zinc-50 font-sans dark:bg-black py-20">
      <h1 className="text-3xl mb-12 text-white">
        Hover on Image
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {/* Image 1 */}
        <div
          ref={(el) => addToRefs(el, 0)}
          className="image hover-image w-64 h-100 rounded-4xl overflow-hidden cursor-pointer"
          style={{ backgroundImage: "url('/eyes.jpg')" }}
          data-repetition-elems="4"
        />
        
        {/* Image 2 */}
        <div
          ref={(el) => addToRefs(el, 1)}
          className="image hover-image w-64 h-100 rounded-4xl overflow-hidden cursor-pointer"
          style={{ backgroundImage: "url('/stars.jpg')" }}
          data-repetition-elems="4"
        />
        
        {/* Image 3 */}
        <div
          ref={(el) => addToRefs(el, 2)}
          className="image hover-image w-64 h-100 rounded-4xl overflow-hidden cursor-pointer"
          style={{ backgroundImage: "url('/idk.jpg')" }}
          data-repetition-elems="4"
        />
      </div>
    </div>
  );
}
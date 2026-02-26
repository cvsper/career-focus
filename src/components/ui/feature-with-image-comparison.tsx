"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

function Feature() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-4">
          <div>
            <Badge className="bg-brand-blue-500 text-white border-brand-blue-500 hover:bg-brand-blue-600">
              Our Impact
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="font-heading text-3xl md:text-5xl tracking-tight font-bold text-neutral-800">
              See the Difference
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-neutral-500">
              From first consultation to career success — drag the slider to see
              the transformation our programs make possible.
            </p>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-brand-blue-500 h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-brand-blue-500 text-white rounded-lg hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                  aria-label="Drag to compare images"
                >
                  <GripVertical className="h-4 w-4 select-none" />
                </button>
              </div>
              <Image
                src="/images/compare-after.jpg"
                alt="After: Career Focus participant thriving in their new role"
                width={1920}
                height={1080}
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none border object-cover"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              <Image
                src="/images/compare-before.jpg"
                alt="Before: Individual seeking career guidance"
                width={1920}
                height={1080}
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none border object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

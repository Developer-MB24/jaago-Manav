"use client";

import Image from "next/image";
import { HeartHandshake, FileText, Lock } from "lucide-react"; // Or replace with your own icons

export default function SupportSection() {
  return (
    <section className="w-full bg-white">
      <div className="w-full h-[450px] relative">
        <Image
          src="/blog/blog-banner.jpg"
          alt="Support Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Info Row */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-center ">
        {/* Block 1 */}
        <div className="flex flex-col items-center max-w-xs">
          <HeartHandshake className="w-8 h-8 text-yellow-500 mb-3" />
          <p className="text-sm text-gray-700">
            All our efforts are made possible only because of your support
          </p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col items-center max-w-xs">
          <FileText className="w-8 h-8 text-yellow-500 mb-3" />
          <p className="text-sm text-gray-700">
            Your donations are tax exempted under 80G of the Indian Income Tax
            Act
          </p>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center max-w-xs">
          <Lock className="w-8 h-8 text-yellow-500 mb-3" />
          <p className="text-sm text-gray-700">
            Your donation transactions are completely safe and secure
          </p>
        </div>
      </div>
    </section>
  );
}

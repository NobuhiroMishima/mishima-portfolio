"use client";
import React from "react";
import Link from "next/link";
import { appear } from "@/components/utils/appear";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import Image from "next/image";
function ServiceBanner({ service }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <Link
      href={`/service/${service.id}`}
      ref={elementRef}
      className={appear(isVisible)}
    >
      <Image
        src={service.cardimage}
        alt={`${service.name} Image`}
        className="h-36 object-contain shadow-lg duration-500 hover:opacity-80 hover:bg-gray-100 hover:rounded-md"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "auto",
          maxWidth: "400px",
        }}
        width={360}
        height={144}
      />
    </Link>
  );
}

export default ServiceBanner;

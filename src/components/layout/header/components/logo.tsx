// components/Logo.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/assets/logo/logo-ecommerce.png"
        alt="Logo"
        width={320}
        height={320}
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;

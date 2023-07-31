"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="hidden md:block">
            <Image
                src="/images/logo.png"
                alt="Pakvacay Logo"
                width={100}
                height={100}
                priority={true}
            />
        </Link>
    );
};

export default Logo;

'use client';

import React from 'react'
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";


const NavBar = () => {
    const currentPath = usePathname();
    console.log(currentPath);

    const links = [
        {label: 'Dashboard', href: './'},
        {label: 'Issues', href: './Issues'},
    ]
    return (
        <nav className='flex space-x-6 border-b  px-5 h-14 items-center'>
            <Link  href="/"><FaBug /></Link>
            <ul className='flex space-x-6'>
                {links.map(link =>
                    <Link key={link.href}
                          className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-800 transition-colors`}
                          href={link.href}>{link.label}</Link>)}
            </ul>
        </nav>
    )
}


export default NavBar
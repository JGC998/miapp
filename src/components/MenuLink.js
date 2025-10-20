'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MenuLink({ href, children}) {
    const currentPath = usePathname()
    const resaltado = href == currentPath ? "bg-red-900" : ""

    return (
        <Link href={href} className={`p-2 bg-blue-900 text-white ${resaltado}`}>
            {children}</Link>
    )
}

export default MenuLink
"use client"; // client component, not server rendered
import Link from "next/link";
import { usePathname } from "next/navigation";
// copied from previous NavBar.jsx component, modified for Next.js
// save as src/components/NavBar.jsx
export default function NavBar() {
  const path = usePathname(); // hook to check current path
  return (
    <nav
      className="NavBar"
    >
      <ul className="menu">
        {/* Next.js Link components use href instead of to prop */}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            href="/about"
            className={path.startsWith("/about") ? "active" : null}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={path.startsWith("/contact") ? "active" : null}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

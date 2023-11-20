"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SearchLinks() {
    const path = usePathname();
  return (
    <div>
      <div className="btn-container">
        <button><Link href="/search">Menu</Link></button>
        <button>Ingredient</button>
        <button>Style</button>
        <button>First Character</button>
        <button>Area</button>
        <button>Category</button>
      </div>
    </div>
  );
}

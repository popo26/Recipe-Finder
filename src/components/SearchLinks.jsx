"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SearchLinks() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.has("type") ? searchParams.get("type"): "Menu";

  const handleChangeSearchType = (e) => {
    router.replace(pathname + "/search/" + e.target.value.toLowerCase());
    router.push(`/search/${e.target.value.toLowerCase()}`)
  };

  return (
    <div>
      <div className="btn-container">
        <label className="PostsLimit">
          Or Search By...
          <select onChange={handleChangeSearchType} value={type}>
            <option>Menu</option>
            <option>Ingredient</option>
            {/* <option>First Character</option> */}
            <option>Area</option>
            <option>Category</option>
          </select>
        </label>
      </div>
    </div>
  );
}

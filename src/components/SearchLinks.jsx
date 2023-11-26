"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchLinks() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.has("type") && searchParams.get("type");

  const handleChangeSearchType = (e) => {
    router.replace(pathname + "/search/" + e.target.value.toLowerCase());
    router.push(`/search/${e.target.value.toLowerCase()}`);
  };

  return (
    <div>
      <div className="btn-container SearchLinks">
        <label>
          Or Search By...
          <select onChange={handleChangeSearchType} value={type}>
            <option>Select From </option>

            <option>Area</option>
            <option>Category</option>
            <option>Menu</option>
          </select>
        </label>
      </div>
    </div>
  );
}

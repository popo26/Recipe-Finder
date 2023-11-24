import Link from "next/link";
import "../css/custom.css";

export default function NotFound(){
  return (
    <div className="NotFound">
      <h1>Sorry, but ...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <Link href="/"><strong>Home</strong></Link>
      </p>
    </div>
  );
};


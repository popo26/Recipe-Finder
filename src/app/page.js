import Image from "next/image";
import styles from "./page.module.css";
import SearchLinks from "@/components/SearchLinks";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Wanna try this?</h1>
        <img
          src="https://media.giphy.com/media/rVLth3BIx2Zby/giphy.gif"
          width="200px"
        />
      </section>
      <section>
        <h1>Or search by</h1>
        <SearchLinks/>
        {/* <div className="btn-container">
          <button>Menu</button>
          <button>Ingredient</button>
          <button>Style</button>
          <button>First Character</button>
          <button>Area</button>
          <button>Category</button>
        </div> */}
      </section>
    </main>
  );
}

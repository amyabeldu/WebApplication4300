import Image from "next/image";

import Header from "./header";
import Menu from "./Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <section className="hero-section">
          <div className="hero">
            <div className="text">
              <h1>Amy’s Endeavors</h1>
              <p>Handmade soaps and handmade gifts for anyone special.</p>
            </div>
              <div className="image">
                <Image src="/images/SandlewoodSoap.webp" alt="Soap"
                  width={1200}
                  height={600}
                  layout="responsive"
                />
              </div>
            </div>
        </section>

        <aside className="sidebar">
          <div className="product-card">
            <img src="/images/cowboy_soap.webp" alt="Handmade Soaps"/>
            <p>Handmade Soaps</p>
          </div>
          <div className="product-card">
            <img src="/images/beard_oil.webp" alt="Beard Oil"/>
            <p>Beard Oil</p>
          </div>
          <div className="product-card">
            <img src="/images/Necklace.webp" alt="Wire Wrapped Necklace"/>
            <p>Wire Wrapped Necklaces</p>
          </div>
        </aside>
      </div>

      <section className="collections">
        <h2>Collections</h2>
      </section>

      <section className="test">
        <div>
          <h1>Testing</h1>
        </div>
      </section>
    </div>
  );
}

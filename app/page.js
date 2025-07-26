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
                <Image src="/webapplication4300/images/SandlewoodSoap.webp" alt="Soap"
                  width={100}
                  height={8}
                  layout="responsive"
                />
              </div>
            </div>
        </section>

        <aside className="sidebar">
          <div className="product-card">
            <Image src="/webapplication4300/images/cowboy_soap.webp" alt="Handmade Soaps"
                 width={100}
                 height={10}
                 layout="responsive"
            />
            <p>Handmade Soaps</p>
          </div>
          <div className="product-card">
            <Image src="/webapplication4300/images/beard_oil.webp" alt="Beard Oil"
                   width={100}
                   height={10}
                   layout="responsive"
            />
            <p>Beard Oil</p>
          </div>
          <div className="product-card">
            <Image src="/webapplication4300/images/Necklace.webp" alt="Wire Wrapped Necklace"
                 width={100}
                 height={10}
                 layout="responsive"
            />
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

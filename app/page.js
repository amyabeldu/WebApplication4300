import Image from "next/image";

import Header from "./header";
import Menu from "./Menu";

import grid from "./grid";
import Grid from "@mui/material/Grid";
import ColumnLayoutInsideGrid from "./grid";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <section>
          <ColumnLayoutInsideGrid/>
        </section>
      </div>

      <section className="collections">
        <h2>Collections</h2>
      </section>

    </div>
  );
}

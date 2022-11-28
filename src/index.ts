import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/dropdown/dropdown.js";
import "@shoelace-style/shoelace/dist/components/menu/menu.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/drawer/drawer.js";

// icons registration
import { registerIconLibrary } from "@shoelace-style/shoelace/dist/utilities/icon-library.js";

registerIconLibrary("fa", {
  resolver: (name: any) => {
    const filename = name.replace(/^fa[rbs]?-/, "");
    let folder = "regular";
    if (name.substring(0, 3) === "fa-") folder = "regular";
    if (name.substring(0, 4) === "fas-") folder = "solid";
    if (name.substring(0, 4) === "fab-") folder = "brands";
    return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/svgs/${folder}/${filename}.svg`;
  },
  mutator: (svg: any) => svg.setAttribute("fill", "currentColor"),
});

registerIconLibrary("bs", {
  resolver: (name: any) =>
    `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/icons/${name}.svg`,
});

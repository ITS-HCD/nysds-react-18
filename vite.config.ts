import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";

// @nysds/components declares sideEffects:false in its package.json,
// but its ES module registers custom elements via customElements.define().
// This plugin overrides that flag so Rollup preserves the registration code.
// Uses the transform hook because resolveId's moduleSideEffects is not
// reliably propagated in Vite (https://github.com/vitejs/vite/issues/8757).
function nysdsSideEffects(): Plugin {
  return {
    name: "nysds-side-effects",
    transform(_code, id) {
      if (id.includes("nysds.es")) {
        return { moduleSideEffects: true };
      }
    },
  };
}

export default defineConfig({
  plugins: [nysdsSideEffects(), react()],
  base: "/nysds-react-18/",
});

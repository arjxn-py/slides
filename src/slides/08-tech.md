<section>
  <h2 style="text-transform: none;">Web Tech Under the Hood</h2>
  <ul>
    <li class="fragment"><strong>JupyterLab plugin</strong></li>
    <li class="fragment"><strong>PyCRDT + Y.js for collaboration</strong></li>
    <li class="fragment"><strong>WebAssembly (WASM) for processing</strong></li>
    <li class="fragment"><strong>Open Layers for visualization</strong></li>
  </ul>
</section>

<section style="position: relative; overflow: hidden;">
  <h2 style="text-transform: none;">JupyterLite support</h2>
  <ul>
    <li class="fragment">Works in full JupyterLite setup</li>
    <li class="fragment">Enables install-free use of JupyterGIS</li>
    <ul>
      <li class="fragment">Client-side Python kernel</li>
      <li class="fragment">Conda distribution <strong>emscripten-forge</strong></li>
      <li class="fragment">WASM-based GDAL for processing</li>
    </ul>
    <li>All demos today were made on JupyterLite!</li>
    <li><strong>Check out the JupyterLite presentation at noon in this room!</strong></li>
  </ul>

  <img
    src="images/astronaut-victory.webp"
    alt="astronaut"
    style="
      position: absolute;
      bottom: 0;
      right: -140px;
      max-height: 80%;
      opacity: 0.3;
      pointer-events: none;
    "
  />
</section>

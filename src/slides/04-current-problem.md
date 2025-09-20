<!-- Slide 1: Hook / Pain -->
<section>
  <h2>Ever tried sharing a CAD or GIS workflow with teammates?</h2>
  <p class="fragment">Most tools live in <strong>desktop silos</strong> and break reproducibility.</p>
  <p class="fragment">And their <strong>complex interfaces</strong> are packed with endless buttons & menus.</p>
  <div class="fragment" style="margin-top: 1rem;">
    <img src="images/astronaut-with-a-surprise.webp" 
         alt="Frustrated astronaut" 
         style="max-height: 60vh; border-radius: 8px; opacity: 0.9;" />
  </div>
</section>

<!-- Slide 2: Visual Meme / Contrast -->
<section>
  <div style="display: flex; gap: 2rem; align-items: center; justify-content: center;">
    <div style="flex: 1; text-align: center;">
      <h3 style="color: #e74c3c;">🚨 Traditional Desktop Tools</h3>
      <img src="images/qgis-install-error.png" alt="Install error screenshot"
           style="max-width: 100%; max-height: 45vh; border: 2px solid #e74c3c; border-radius: 6px;" />
      <p style="font-size: 0.9em; color: #aaa; margin-top: 0.5rem;">
        GB-sized installs, plugins, version mismatches, <br/> cluttered UI with hundreds of buttons
      </p>
    </div>
    <div style="flex: 1; text-align: center;">
      <h3 style="color: #27ae60;">✅ Browser-Native</h3>
      <img src="images/jgis.png" alt="Browser-based GIS" 
           style="max-width: 100%; max-height: 45vh; border: 2px solid #27ae60; border-radius: 6px;" />
      <p style="font-size: 0.9em; color: #aaa; margin-top: 0.5rem;">
        Open a link → clean, minimal UI, <br/> CAD/GIS ready, collaborative, reproducible
      </p>
    </div>
  </div>
</section>

<!-- Slide 3: Solution Intro -->
<section>
  <h2>CAD & GIS in the Browser</h2>
  <p class="fragment">
    Introducing <strong>JupyterCAD</strong> & <strong>JupyterGIS</strong> — open-source extensions for <strong>spatial computing</strong> in Jupyter.
  </p>
  <p class="fragment">
    Powered by <strong>WebAssembly</strong> + <strong>Jupyter</strong> CRDTs → runs anywhere, works with any kernel, zero installs.
  </p>
  <div class="fragment" style="margin-top: 1rem;">
    <img src="images/jupyterlite.png" alt="JupyterLite" style="height: 3rem; margin-right: 1rem;" />
    <img src="images/jcad.png" alt="JupyterCAD" style="height: 3rem; margin-right: 1rem;" />
    <img src="images/jgis.png" alt="JupyterGIS" style="height: 3rem;" />
  </div>
</section>

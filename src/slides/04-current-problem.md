<!-- Slide 1: Hook / Pain -->
<section>
  <h2>Sharing CAD & GIS workflows is painful</h2>
  <p class="fragment"><strong>Locked in desktops</strong> → no reproducibility</p>
  <p class="fragment"><strong>Complex UIs</strong> → steep learning curve</p>
  <div class="fragment" style="margin-top: 1rem;">
    <img src="images/astronaut-with-a-surprise.webp"
         alt="Frustrated astronaut"
         style="max-height: 60vh; border-radius: 8px; opacity: 0.9;" />
  </div>
</section>

<!-- Slide 2: Visual Meme / Contrast -->
<section>
  <div style="display: flex; gap: 2rem; align-items: flex-start; justify-content: center;">
    <div style="flex: 1; text-align: center;">
      <h3 style="color: #e74c3c;">🚨 Desktop Tools</h3>
      <img src="images/qgis-install-error.png" alt="Install error screenshot"
           style="max-width: 100%; max-height: 40vh; border: 2px solid #e74c3c; border-radius: 6px;" />
      <p style="font-size: 0.9em; color: #aaa; margin-top: 0.5rem;">
        GB-sized installs • plugin hell • version mismatches
      </p>
    </div>
    <div style="flex: 1; text-align: center;">
      <h3 style="color: #27ae60;">✅ Browser-Native</h3>
      <img src="images/jgis.png" alt="Browser-based GIS"
           style="max-width: 100%; max-height: 40vh; border: 2px solid #27ae60; border-radius: 6px;" />
      <p style="font-size: 0.9em; color: #aaa; margin-top: 0.5rem;">
        Open a link • clean UI • collaborative & reproducible
      </p>
    </div>
  </div>
</section>

<!-- Slide 3: Solution Intro -->
<section>
  <h2>CAD & GIS in the Browser</h2>
  <p class="fragment">
    <strong>JupyterCAD</strong> + <strong>JupyterGIS</strong> → spatial computing inside Jupyter
  </p>
  <p class="fragment">
    Powered by <strong>WebAssembly</strong> + <strong>Jupyter CRDTs</strong> → runs anywhere, any kernel, zero installs
  </p>
  <div class="fragment" style="margin-top: 1rem; display: flex; gap: 1rem; justify-content: center;">
    <img src="images/jupyterlite.png" alt="JupyterLite" style="height: 3rem;" />
    <img src="images/jcad.png" alt="JupyterCAD" style="height: 3rem;" />
    <img src="images/jgis.png" alt="JupyterGIS" style="height: 3rem;" />
  </div>
</section>

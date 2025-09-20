<!-- .slide: data-background-color="#1e1e1e" -->
<div style="text-align: left; line-height: 1.2;">
  <h4 style="color: white; font-size: 1.2em; margin-top: 0.2em; text-transform: none;">
    Collaborative & Reproducible
  </h4>

  <h3 style="color: white; font-size: 2em; margin: 0; text-transform: none;">
    <a href="https://jupytercad.github.io/JupyterCAD/lab/index.html" target="_blank">
      <img src="images/jcad.png" alt="JCAD" style="height: 1em; vertical-align: middle; margin-right: 0.2em;" />
    </a>
    CAD & 
    <a href="https://jupytergis.readthedocs.io/en/latest/lite/lab/" target="_blank">
      <img src="images/jgis.png" alt="JGIS" style="height: 1em; vertical-align: middle; margin-left: 0.2em; margin-right: 0.2em;" />
    </a>
    GIS in 
    Jupyter
    <img src="images/jupyter.svg" alt="Jupyter" style="height: 1em; vertical-align: middle; margin-left: 0.4em;" />
    <img src="images/jupyterlite.png" alt="JupyterLite" style="height: 1em; vertical-align: middle; margin-left: 0.2em;" />
  </h3>

  <p style="color: white; font-style: italic; margin-top: 0.5em;">Arjun Verma</p>
</div>
<!-- .slide: data-transition="zoom" -->



---

<!-- .slide: class="section-with-footer" -->

<!-- Logo heading replacement -->
<div style="text-align: center; margin: 0.5rem 0 1rem;">
  <img src="images/logo-qs.svg" alt="QuantStack Logo" style="height: 5rem; max-width: 100%;" />
</div>

<div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 40px; font-size: 0.6em; line-height: 1.4;">

  <div style="flex: 1; min-width: 300px;">
    <ul style="margin: 0; padding-left: 1.5em;">
      <li>Founded in 2016 <strong>in Paris</strong></li>
      <li>Principal contributor to <strong>Jupyter</strong>, <strong>Apache Arrow</strong>, <strong>Mamba/Conda</strong></li>
      <li>Multi-stakeholder projects with <strong>millions of users</strong></li>
      <li>Open source development <strong>for clients</strong></li>
      <li>Other topics: <strong>C++</strong>, scientific computing, WebAssembly, interactive applications</li>
      <li>Organizer of the <strong>Pydata Paris</strong> event</li>
    </ul>
  </div>

  <div style="flex: 1; text-align: center; min-width: 280px;">
    <img src="images/team.png" alt="QuantStack Team" style="width: 90%; max-width: 300px; height: auto; border-radius: 8px;" />
    <p style="font-style: italic; margin-top: 0.5em;">
      Empowering scientists and developers worldwide with cutting-edge tools
    </p>
  </div>

</div>


---

<!-- <section>
  <h3>About My Mentor</h3>
  <div style="font-size: 0.9em; line-height: 1.5;">
    <p><strong>Martin Renou</strong> — Technical Director at <strong>QuantStack</strong></p>
    <p>
      <strong>Martin Renou</strong> is also a maintainer of <strong>Project Jupyter</strong>. He is a core contributor to the <strong>ipywidgets</strong> ecosystem and maintains several widget libraries including <strong>ipyleaflet</strong>, <strong>ipydatagrid</strong>, <strong>ipygany</strong>, <strong>ipycanvas</strong>, and <strong>bqplot</strong>. He co-created the <strong>Voilà</strong> dashboarding system and is the main author of the <strong>xeus-python</strong> kernel.
    </p>
  </div>
</section> -->


---

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
      <img src="images/qgis-error.png" alt="Install error screenshot"
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
    <strong>JupyterCAD</strong> + <strong>JupyterGIS</strong> → CAD & spatial computing inside Jupyter
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


---

<!-- Slide 4: Why This Matters Beyond CAD/GIS -->
<section>
  <h2>Why This Matters Beyond CAD/GIS</h2>
  <ul>
    <li class="fragment"><strong>Open science</strong> → results must be shareable, transparent, reproducible</li>
    <li class="fragment">Desktop-first workflows → <strong>fragile installs</strong>, version mismatches, locked machines</li>
    <li class="fragment">Closed GUIs hide <strong>computational steps</strong> → no audit trail, hard to verify</li>
    <li class="fragment">Browser-native workflows → <strong>papers, datasets, and code</strong> all live together</li>
  </ul>
  <div class="fragment" style="margin-top: 1rem; text-align: right;">
    <img src="images/astronaut-flying.webp" 
         alt="Open science astronaut" 
         style="max-height: 50vh; border-radius: 6px; opacity: 0.7;" />
  </div>
</section>

<!-- Slide 5: Browser + WASM = New Paradigm -->
<section>
  <h2>The Browser + WASM = A New Paradigm</h2>
  <ul>
    <li class="fragment"><strong>The browser is the universal runtime</strong> — works on any device</li>
    <li class="fragment"><strong>WebAssembly (WASM)</strong> runs C/C++/Fortran scientific libraries natively in-browser</li>
    <li class="fragment">Beyond CAD/GIS → <strong>climate models, genomics, finite element analysis</strong> in a notebook</li>
    <li class="fragment">Language-agnostic → integrates with <strong>Python, R, Julia, JavaScript, C++</strong></li>
    <li class="fragment">New research workflows → share a notebook link, reproduce the full pipeline</li>
  </ul>
  <div class="fragment" style="margin-top: 1rem; text-align: center;">
    <img src="images/jupyterlite.png" alt="JupyterLite logo" style="height: 3rem; margin-right: 1rem;" />
    <img src="images/astronaut-victory.webp" alt="Astronaut victory" 
         style="max-height: 40vh; border-radius: 6px; opacity: 0.85;" />
  </div>
</section>


---

<section>
  <h2 style="text-transform: none;">
    JupyterCAD
    <img
      src="images/jcad.png"
      alt="JupyterCAD"
      style="height: 1em; vertical-align: middle; margin-right: 0.3em;"
    />
  </h2>
  <video
    src="video/jcad/jcad.mp4"
    autoplay
    loop
    muted
    playsinline
    style="max-width: 80%; margin-top: 2rem;"
  ></video>
</section>

<section>
  <h3>About JupyterCAD</h3>
  <ul>
    <li class="fragment">Browser-native 3D modeling for JupyterLab</li>
    <li class="fragment">Built on <strong>OpenCascade</strong> (via WebAssembly)</li>
    <li class="fragment">Parametric, sketch-driven design</li>
    <li class="fragment">Integrates with Python code cells</li>
  </ul>
</section>

<!-- Vertical stack for features -->
<section>
  <h3>Sketch-based Modeling</h3>
  <p class="fragment">Draw 2D sketches and turn them into 3D shapes</p>
  <video src="video/jcad/jcad-sketch.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>Boolean Operations</h3>
  <p class="fragment">Cut, union, and intersect shapes with precision</p>
  <video src="video/jcad/jcad-cut.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>Geometric Operations</h3>
  <p class="fragment">Chamfer and fillet edges using UI or Python</p>
  <video src="video/jcad/jcad-chamfer.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>Multiple Visualization Modes</h3>
  <p class="fragment" style="font-size: 1.9rem;">Explore models with <strong>Exploded View</strong>, <strong>Clip Plane</strong>, and <strong>Wireframe</strong></p>
  <video src="video/jcad/jcad-views.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1.5rem; border: 1px solid #ccc;"></video>
</section>

<section>
  <p><strong>🎛️ Transform controls with snapping</strong></p>
  <p class="fragment">Precise geometric manipulation in the browser</p>
  <video src="video/jcad/jcad-transform.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <p><strong>🧮 Python API for programmatic geometry</strong></p>
  <p class="fragment">Write Python code to generate & modify shapes</p>
  <video src="video/jcad/jcad-console.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <p><strong>📓 Notebook integration</strong></p>
  <p class="fragment">CAD alongside your code & documentation</p>
  <video src="video/jcad/jcad-notebook.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <p><strong>🤝 Collaborative editing</strong></p>
  <p class="fragment" style="font-size: 1.9rem">CRDT-based real-time co-editing via Y.js & PyCRDT</p>
  <video src="video/jcad/jcad-collaborative.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>💬 Suggestions Support</h3>
  <p class="fragment" style="font-size: 1rem">
    Collaborators can propose changes without modifying the actual model.
  </p>
  <p class="fragment" style="font-size: 1rem">
    Editors receive these as <strong>suggestions</strong> and can choose to <strong>accept</strong> or <strong>reject</strong> them.
  </p>
  <p class="fragment" style="font-size: 1rem">
    Enables asynchronous review cycles, just like pull requests in code!
  </p>
  <video src="video/jcad/jcad-suggestions.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>📁 File Format Support</h3>
  <ul>
    <li class="fragment"><strong>FCStd</strong> — Read, edit, and export <em>FreeCAD</em> project files natively</li>
    <li class="fragment"><strong>STL</strong> — Import mesh models for quick inspection or editing</li>
    <li class="fragment"><strong>STEP</strong> — Bring in precise solid geometry from external CAD tools</li>
  </ul>
  <p class="fragment" style="margin-top: 1rem;">
    Move between tools without friction — with support for common CAD formats.
  </p>
</section>

<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://jupytercad.github.io/JupyterCAD/lab/index.html"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">JupyterCAD in Action</h3>
      <img
        src="images/jcad.png"
        alt="JupyterCAD Logo"
        style="height: 60px; object-fit: contain;"
      />
    </a>
  </div>

  <iframe
    src="https://jupytercad.github.io/JupyterCAD/lab/index.html"
    style="
      border: none;
      width: 100vw;
      height: 90vh;
      zoom: 0.75;
      transform: scale(1);
      transform-origin: top left;
    "
  ></iframe>
</section>



---

<section>
  <h2 style="text-transform: none;">
    JupyterGIS
    <img
      src="images/jgis.png"
      alt="JupyterGIS"
      style="height: 1em; vertical-align: middle; margin-right: 0.3em;"
    />
  </h2>
  <video
    src="video/jgis/jgis.mp4"
    autoplay
    loop
    muted
    playsinline
    style="max-width: 80%; margin-top: 2rem;"
  ></video>
</section>


<section>
  <h3>About JupyterGIS</h3>
  <ul>
    <li class="fragment">A full-featured GIS toolkit inside JupyterLab</li>
    <li class="fragment">Supports raster and vector layers</li>
    <li class="fragment">Built with <strong>OpenLayers</strong> + <strong>GDAL</strong> (WebAssembly)</li>
  </ul>
</section>

<!-- Vertical stack for features -->
  <section>
    <h3>🗺️ Vector & Raster Data Support</h3>
    <p class="fragment" style="font-size: 1.9rem">Load local and cloud-hosted data into your notebook session</p>
    <video src="video/jgis/jgis-layers.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
    <h3>🖍️ Vector Symbology</h3>
    <p class="fragment">Visualize vector data using <strong>graduated</strong> and <strong>categorized</strong> rendering styles</p>
    <video src="video/jgis/jgis-vector-symbology.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
    <h3>🖍️ Raster Symbology</h3>
    <p class="fragment">Use <strong>multiband rendering</strong> to style raster datasets like satellite imagery</p>
    <video src="video/jgis/jgis-raster-symbology.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
    <h3>🔄 Dynamic Layer Management</h3>
    <p class="fragment">Add, remove, and style layers with a built-in interactive UI</p>
    <video src="video/jgis/jgis-layer-management.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
  <h3>🔍 Identify Panel</h3>
  <p class="fragment">
    Click on features in the map to instantly inspect their attributes.
  </p>
  <video src="video/jgis/jgis-identify.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>


  <section>
  <h3>⏳ Time Slider</h3>
  <p class="fragment">
    Visualize how data changes over time with an interactive slider.
  </p>
  <video src="video/jgis/jgis-timeslider.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>


  <section>
  <h3>🧩 QGIS Compatibility</h3>
  <p class="fragment">
    Import and export QGIS files, layers, and styles seamlessly.
  </p>
  <video src="video/jgis/jgis-qgis.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

  <section>
  <h3>📝 Annotation & Collaboration</h3>
  <p class="fragment">
    Add notes, draw shapes, and collaborate in real-time.
  </p>
  <video src="video/jgis/jgis-annotation.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>


  <section>
    <h3>📓 Notebook + Python Integration</h3>
    <p class="fragment">Use Python code cells to add, style, and transform spatial layers</p>
    <video src="video/jgis/jgis-notebook.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
    <h3>🧪 Client-Side Processing</h3>
    <p class="fragment">Perform buffer, dissolve, centroid and overlays with GDAL-WASM — no server required</p>
    <video src="video/jgis/jgis-processing.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

<!-- <section>
  <h3>🌐 Scientific Edge: GDAL in the Browser</h3>
  <ul>
    <li class="fragment"><strong>Raster reprojection</strong> & CRS transformations</li>
    <li class="fragment"><strong>Zonal statistics</strong> on raster/vector intersections</li>
    <li class="fragment"><strong>Geometry operations</strong> like clipping & intersection</li>
    <li class="fragment">Fully client-side & offline-capable</li>
    <li class="fragment">Ideal for environmental science, urban planning, and climate research</li>
  </ul>
</section> -->

<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://jupytergis.readthedocs.io/en/latest/lite/lab/"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">JupyterGIS in Action</h3>
      <img
        src="images/jgis.png"
        alt="JupyterGIS Logo"
        style="height: 60px; object-fit: contain;"
      />
    </a>
  </div>

  <iframe
    src="https://jupytergis.readthedocs.io/en/latest/lite/lab/"
    style="
      border: none;
      width: 100vw;
      height: 80vh;
      zoom: 0.75;
      transform: scale(1);
      transform-origin: top left;
    "
  ></iframe>
</section>


---

<section>
  <h2 style="text-transform: none;">Web Tech Under the Hood</h2>
  <ul>
    <li class="fragment"><strong>WebAssembly (WASM)</strong></li>
    <li class="fragment"><strong>PyCRDT + Y.js</strong></li>
    <li class="fragment"><strong>IndexedDB</strong></li>
    <li class="fragment"><strong>Jupyter extensions</strong></li>
  </ul>
</section>

<section style="position: relative; overflow: hidden;">
  <h2 style="text-transform: none;">Not just JupyterLab</h2>
  <ul>
    <li class="fragment">Works in full JupyterLab/JupyterLite setups</li>
    <li class="fragment">WASM enables install-free use</li>
    <li class="fragment">Can integrate with:</li>
    <ul>
      <li class="fragment">JupyterHub</li>
      <li class="fragment">Voila</li>
      <li class="fragment">JupyterLite</li>
    </ul>
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


---

<!-- Slide 6: S — Science -->
<section>
  <h2 style="color:#3498db;">S — Science</h2>
  <div style="display: flex; gap: 2rem; align-items: center;">
    <div style="flex: 1;">
      <ul>
        <li class="fragment">Environmental science: <strong>climate & land use analysis</strong></li>
        <li class="fragment">Geoscience: map <strong>seismic or hydrology data</strong></li>
        <li class="fragment">Reproducible workflows → share datasets + analysis as one notebook</li>
      </ul>
    </div>
    <div style="flex: 1; text-align: center;">
      <img src="images/climate-map.png" alt="Climate data visualization"
           style="max-height: 45vh; border-radius: 8px; border: 2px solid #3498db;" />
    </div>
  </div>
</section>

<!-- Slide 7: T — Technology -->
<section>
  <h2 style="color:#9b59b6;">T — Technology</h2>
  <div style="display: flex; gap: 2rem; align-items: center;">
    <div style="flex: 1;">
      <ul>
        <li class="fragment">Browser-native <strong>CAD/GIS platforms</strong> for R&D</li>
        <li class="fragment">Run <strong>legacy scientific code</strong> with WebAssembly</li>
        <li class="fragment">Prototype & share <strong>interactive spatial apps</strong></li>
      </ul>
    </div>
    <div style="flex: 1; text-align: center;">
      <img src="images/wasm-demo.png" alt="WASM workflow"
           style="max-height: 45vh; border-radius: 8px; border: 2px solid #9b59b6;" />
    </div>
  </div>
</section>

<!-- Slide 8: E — Engineering -->
<section>
  <h2 style="color:#e67e22;">E — Engineering</h2>
  <div style="display: flex; gap: 2rem; align-items: center;">
    <div style="flex: 1;">
      <ul>
        <li class="fragment">Parametric design → <strong>reproducible CAD models</strong> in papers</li>
        <li class="fragment">Collaborative <strong>mechanical design reviews</strong> in the browser</li>
        <li class="fragment">Integrate CAD with <strong>simulation notebooks</strong></li>
      </ul>
    </div>
    <div style="flex: 1; text-align: center;">
      <img src="images/parametric-cad.png" alt="Parametric CAD"
           style="max-height: 45vh; border-radius: 8px; border: 2px solid #e67e22;" />
    </div>
  </div>
</section>

<!-- Slide 9: M — Mathematics & Education -->
<section>
  <h2 style="color:#2ecc71;">M — Mathematics & Education</h2>
  <div style="display: flex; gap: 2rem; align-items: center;">
    <div style="flex: 1;">
      <ul>
        <li class="fragment"><strong>Teach CAD/GIS</strong> without installs or licenses</li>
        <li class="fragment">Students explore <strong>geometry + geospatial data</strong> interactively</li>
        <li class="fragment">Notebook = <strong>textbook + lab + code</strong> all in one</li>
      </ul>
    </div>
    <div style="flex: 1; text-align: center;">
      <img src="images/edu-gis.png" alt="Education GIS"
           style="max-height: 45vh; border-radius: 8px; border: 2px solid #2ecc71;" />
    </div>
  </div>
</section>


---

<section style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding-top: 2rem;">
  <h2 style="text-transform: none; margin-bottom: 2rem;">Try Live</h2>

  <div style="
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 100px;
    width: 100%;
  ">
    <div style="text-align: center;">
      <img src="images/jcad-qr.png" alt="JupyterCAD QR" style="width: 320px; height: auto;" />
    </div>
    <div style="text-align: center;">
      <img src="images/jgis-qr.png" alt="JupyterGIS QR" style="width: 350px; height: auto;" />
    </div>
  </div>
</section>


---

<section>
  <h2 style="text-transform: none;">Thank You</h2>
  <h3 style="margin-top: 2rem;">Questions?</h3>
</section>

<!-- .slide -->
<div style="text-align: left; line-height: 1.2;">
  <h4 style="font-size: 1.2em; margin-top: 0.2em; text-transform: none;">
    Collaborative & Reproducible
  </h4>

  <h3 style="font-size: 2em; margin: 0; text-transform: none;">
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


  <p style="font-style: italic; margin-top: 0.5em;">Arjun Verma</p>
  <div style="margin-top: 0.5em;">
    <img src="images/logo-qs.svg" alt="QuantStack" style="height: 1.5em; vertical-align: middle;" />
  </div>
</div>
<!-- .slide: data-transition="zoom" -->


---

<!-- .slide: class="section-with-footer" -->

<!-- Heading -->
<div style="text-align: center; margin: 0.5rem 0 1rem;">
  <h2>About Me</h2>
</div>

<div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 40px; font-size: 0.6em; line-height: 1.4;">

  <div style="flex: 1; min-width: 300px;">
    <ul style="margin: 0; padding-left: 1.5em;">
      <li>I am Arjun Verma</li>
      <li>I recently graduated this year with a major in Information Technology</li>
      <li>Scientific Software Developer at QuantStack</li>
    </ul>
  </div>

  <div style="flex: 1; text-align: center; min-width: 280px;">
    <div style="margin-top: 0.5em;">
      <img src="images/logo-qs.svg" alt="QuantStack Logo" style="height: 3em; max-width: 100%;" />
    </div>
  </div>

</div>


---

<section>
  <h2 style="text-align:center; margin-top: 0.5rem; font-weight:300;">
    How many of you are familiar with <strong style="font-weight:700;">CAD</strong> or <strong style="font-weight:700;">GIS</strong>?
  </h2>

  <div style="display:flex; justify-content:center; gap:4rem; align-items:center; margin-top:2.5rem;">
    <div class="fragment" style="text-align:center;">
      <img src="images/freecad-logo.svg" alt="FreeCAD logo" style="height:6rem; display:block; margin:0 auto;" />
    </div>

  <div class="fragment" style="text-align:center;">
    <img src="images/qgis-logo.svg" alt="QGIS logo" style="height:12rem; display:block; margin:0 auto;" />
  </div>
  </div>
</section>

<section>
  <h2 style="text-align:center; margin-top:0.5rem;">Powerful Tools BUT</h2>

  <div class="fragment" style="display:flex; flex-direction: column; align-items:center; gap:2rem; margin-top:2rem;">
  <h3 style="text-align:center; margin-top:1.5rem;">GB-sized installs</h3>

  <div style="text-align:center;">
    <img src="images/qgis-size.png" alt="QGIS install size" style="height:10rem; display:block; margin:0 auto;" />
  </div>
  <div style="text-align:center;">
    <img src="images/fcad-size.png" alt="FreeCAD install size" style="height:10rem; display:block; margin:0 auto;" />
  </div>
  </div>
</section>

<section>
  <h2 style="text-align:center; margin-top:0.5rem;">Powerful Tools BUT</h2>

  <div class="fragment" style="position:relative; height:80vh; margin-top:2rem;">
    <h3 style="position:absolute; top:1rem; width:100%; text-align:center;">Complex UI</h3>

  <div style="position:absolute; top:0; left:10%; width:60%; z-index:1;">
    <img src="images/qgis-ui.png" alt="QGIS UI screenshot" style="width:100%; height:auto; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
  </div>

  <div style="position:absolute; top:20%; left:30%; width:60%; z-index:2;">
    <img src="images/fcad-ui.png" alt="FreeCAD UI screenshot" style="width:100%; height:auto; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
  </div>
  </div>
</section>


<section>
  <h2 style="text-align:center; margin-top:0.5rem;">Powerful Tools BUT</h2>
  <div class="fragment" style="position:relative; height:80vh; margin-top:2rem;">

  <h3 style="text-align:center; margin-top:1.5rem;">Not Collaborative</h3>
  <div style="display:flex; justify-content:center; align-items:center; height:70vh; overflow:hidden;">
    <img src="images/rabbit-duck.png" 
         alt="Rabbit Duck Illustration" 
         style="width:70%; max-height:100%; object-fit:cover; clip-path: inset(1% 1% 1% 1%);" />
  </div>
  </div>

</section>


<section>
  <h2 style="text-align:center; margin-top:0.5rem;">Powerful Tools BUT</h2>

  <div class="fragment" style="position:relative; width:100%; height:70vh; margin-top:2rem; display:flex; flex-direction:column; align-items:center; justify-content:center;">
  <h3 style="margin-top:1.5rem; text-align:center;">Not Easily Reproducible</h3>

  <div style="position:relative; width:100%; height:100%; display:flex; justify-content:center; align-items:center;">

  <img src="images/qgis-error.png"
        alt="QGIS Error"
        style="max-width:60%; max-height:50%; object-fit:contain; border-radius:6px; margin-right:30%;" />

  <img src="images/qgis-versions.png"
        alt="QGIS Version Hell"
        style="position:absolute; bottom:5%; right:15%; max-height:85%; width:auto; border-radius:6px;" />

  </div>

  </div>
</section>





<!-- Slide 2: Visual Meme / Contrast -->
<section>
  <div style="display: flex; gap: 2rem; align-items: flex-start; justify-content: center;">
    <div style="flex: 1; text-align: center;">
      <h3 style="color: #7a7a7aff;">🚨 Desktop Tools</h3>
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
  <h2>Why It Matters</h2>
  <ul>
    <li><strong>Open science:</strong> shareable, transparent, reproducible results</li>
    <li><strong>Desktop workflows:</strong> fragile installs, version mismatches</li>
    <li><strong>Closed GUIs:</strong> hide computational steps → hard to verify</li>
    <li><strong>Browser-native:</strong> code, data, and notebooks together</li>
  </ul>
</section>

<!-- Slide 5: Browser + WASM = New Paradigm -->
<section>
  <h2>Browser + WASM</h2>
  <ul>
    <li><strong>Universal runtime:</strong> works on any device</li>
    <li><strong>WebAssembly:</strong> run native scientific libraries in-browser</li>
    <li><strong>Beyond CAD/GIS:</strong> physics, genomics, climate models</li>
    <li><strong>Language-agnostic:</strong> Python, R, Julia, JS, C++</li>
    <li><strong>Reproducible workflows:</strong> share a notebook link, run anywhere</li>
  </ul>
</section>


---

<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ACreate-Basic-Shapes.jcad"
      target="_blank"
      style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit;"
    >
      <h2 style="text-transform: none; margin: 0;">JupyterCAD</h2>
      <img
        src="images/jcad.png"
        alt="JupyterCAD Logo"
        style="height: 1.5em; object-fit: contain; vertical-align: middle;"
      />
    </a>
  </div>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ACreate-Basic-Shapes.jcad"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
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
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ASketch.jcad"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">Sketch-based Modeling</h3>
      <img
        src="images/jcad.png"
        alt="JupyterCAD Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Draw 2D sketches and turn them into 3D shapes
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ASketch.jcad"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
</section>

<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AOperations.jcad"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">Boolean Operations</h3>
      <img
        src="images/jcad.png"
        alt="JupyterCAD Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Cut, union, and intersect shapes with precision
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AOperations.jcad"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
</section>

<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ACut-Example.jcad"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">Operations in Action</h3>
      <img
        src="images/jcad.png"
        alt="JupyterCAD Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Cutting a box with spheres to create a nice shape
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ACut-Example.jcad"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
</section>

<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AMultiple-Views.jcad"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">Multiple Visualization Modes</h3>
      <img
        src="images/jcad.png"
        alt="JupyterCAD Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem; font-size: 1.9rem;">
    Switch between <strong>Exploded View</strong>, <strong>Clip Plane</strong>, and <strong>Wireframe</strong> to explore models in depth
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AMultiple-Views.jcad"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
</section>

<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ATransform-Controls.jcad"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">🎛️ Transform Controls with Snapping</h3>
      <img
        src="images/jcad.png"
        alt="JupyterCAD Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Move, rotate, and snap with precision
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ATransform-Controls.jcad"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
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
  <h3>💬 Suggestion Workflow</h3>
  <p style="font-size: 1rem">
    Collaborators can review models like <strong>pull requests</strong> — suggest, accept, or reject changes asynchronously.
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
  <h3>JupyterCAD-MCP</h3>
  <video 
    id="jupytercad-mcp-video"
    src="video/jcad/jupytercad-mcp.mp4" 
    autoplay 
    loop 
    muted 
    playsinline 
    style="max-width: 90%; margin-top: 1rem;"
  ></video>

  <script>
    const video = document.getElementById('jupytercad-mcp-video');
    video.playbackRate = 2.0;
  </script>
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
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AVector-Raster.jGIS"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">🗺️ Vector & Raster Data Support</h3>
      <img
        src="images/jgis.png"
        alt="JupyterGIS Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem; font-size: 1.9rem;">
    Load local and cloud-hosted vector & raster data directly
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AVector-Raster.jGIS"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
</section>


<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AVector-Symbology.jGIS"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">🖍️ Vector Symbology</h3>
      <img
        src="images/jgis.png"
        alt="JupyterGIS Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Vector data with <strong>advanced</strong> rendering styles
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AVector-Symbology.jGIS"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
</section>


  <section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ARaster-Symbology.jGIS"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">🖍️ Raster Symbology</h3>
      <img
        src="images/jgis.png"
        alt="JupyterGIS Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Use <strong>multiband rendering</strong> to style raster datasets
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ARaster-Symbology.jGIS"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
</section>


  <section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ADynamic-Management.jGIS"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">🔄 Dynamic Layer Management</h3>
      <img
        src="images/jgis.png"
        alt="JupyterGIS Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Add, remove, and style layers using interactive UI
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ADynamic-Management.jGIS"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
</section>


<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AIdentify.jGIS"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">🔍 Identify Panel</h3>
      <img
        src="images/jgis.png"
        alt="JupyterGIS Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Click features on map to inspect their attributes
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AIdentify.jGIS"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
</section>



<section>
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ATime-Slider.jGIS"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">⏳ Time Slider</h3>
      <img
        src="images/jgis.png"
        alt="JupyterGIS Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Visualize how data evolves over time
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3ATime-Slider.jGIS"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
    "
  ></iframe>
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
  <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
    <a
      href="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AProcessing.jGIS"
      target="_blank"
      style="display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit;"
    >
      <h3 style="text-transform: none; margin: 0;">🧪 Client-Side Processing</h3>
      <img
        src="images/jgis.png"
        alt="JupyterGIS Logo"
        style="height: 50px; object-fit: contain;"
      />
    </a>
  </div>

  <p style="text-align: center; margin-bottom: 1rem;">
    Perform processing operations with GDAL-WASM
  </p>

  <iframe
    src="https://arjxn-py.github.io/myp/lab/index.html?path=RTC%3AProcessing.jGIS"
    style="
      border: none;
      width: 100vw;
      height: 75vh;
      transform: scale(0.9);
      transform-origin: top center;
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

<!-- Slide: Use Cases -->
<section style="position: relative; height: 100vh;">
  <div style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      ">
    <h1 style="font-size: 5rem; font-weight: bold; color: #34495e; text-transform: uppercase;">
      Use Cases
    </h1>
  </div>
</section>


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
      <img src="images/climate-map.jpg" alt="Climate data visualization"
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
      <img src="images/wasm-workflow.jpg" alt="WASM workflow"
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
      <img src="images/education-gis.jpg" alt="Education GIS"
           style="max-height: 45vh; border-radius: 8px; border: 2px solid #2ecc71;" />
    </div>
  </div>
</section>


---

<!-- Slide 2: How to Contribute -->
<section>
  <h2 style="text-align:center;">Community & Contribution</h2>

  <h3>How to Contribute</h3>
  <ul>
    <li>Code contributions, bug fixes, plugin development</li>
    <li>Documentation, tutorials, and example notebooks</li>
    <li>Feedback, experience reports, feature requests</li>
  </ul>
</section>

<!-- Slide 3: Community Engagement & Call to Action -->
<section>
  <h2 style="text-align:center;">Community & Contribution</h2>

  <h3>Community Engagement</h3>
  <ul>
    <li>GeoJupyter organizes biweekly virtual hackathons</li>
    <li>Weekly community catch-ups and discussion sessions</li>
  </ul>

  <div style="text-align:center; margin-top: 1rem;">
    <p>
      JupyterCAD Docs: <a href="https://jupytercad.readthedocs.io/en/latest/" target="_blank">https://jupytercad.readthedocs.io/en/latest/</a><br>
      GeoJupyter Community: <a href="https://geojupyter.org/" target="_blank">https://geojupyter.org/</a>
    </p>
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

<!-- .slide -->
<div style="text-align: left; line-height: 1.2; position: relative;">

  <h3 style="font-size: 1.5em; margin: 0; text-transform: none;">
    Collaborative
    <a href="https://jupytercad.github.io/JupyterCAD/lab/index.html" target="_blank">
      <img src="images/jcad.png" alt="JCAD" style="height: 1em; vertical-align: middle; margin-right: 0.2em;" />
    </a>
    CAD and
    <a href="https://jupytergis.readthedocs.io/en/latest/lite/lab/" target="_blank">
      <img src="images/jgis.png" alt="JGIS" style="height: 1em; vertical-align: middle; margin-left: 0.2em; margin-right: 0.2em;" />
    </a>
    GIS editing in JupyterLab
    <img src="images/jupyter.svg" alt="Jupyter" style="height: 1em; vertical-align: middle; margin-left: 0.4em;" />
    <img src="images/jupyterlite.png" alt="JupyterLite" style="height: 1em; vertical-align: middle; margin-left: 0.2em;" />
  </h3>

  <p style="font-style: italic; margin-top: 0.5em;">Arjun Verma and Martin Renou</p>
  <div style="margin-top: 0.5em;">
    <img src="images/logo-qs.svg" alt="QuantStack" style="height: 3em; vertical-align: middle;" />
  </div>

  <!-- QR Code -->
  <img src="images/slide-qr.svg" 
       alt="QR Code" 
       style="position: absolute; bottom: 1rem; right: 1rem; height: 15rem;" />
</div>
<!-- .slide: data-transition="zoom" -->



---

<!-- .slide: class="section-with-footer" -->

<!-- Heading -->
<div style="text-align: center; margin: 0.5rem 0 1rem;">
  <h2>About Us</h2>
</div>

<div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 40px; font-size: 0.6em; line-height: 1.4;">

  <div style="flex: 1; min-width: 320px;">
    <div style="margin-bottom: 1.2em;">
      <strong style="font-size: 1.2em;">Arjun Verma</strong><br/>
      <span style="color: #666;">Scientific Software Developer</span><br/>
      <span style="color: #999; font-size: 0.9em;">QuantStack</span>
    </div>

  <div>
    <strong style="font-size: 1.2em;">Martin Renou</strong><br/>
    <span style="color: #666;">Technical Director</span><br/>
    <span style="color: #999; font-size: 0.9em;">QuantStack</span>
  </div>
  </div>

  <div style="flex: 1; text-align: center; min-width: 280px;">
    <div style="margin-top: 0.5em;">
      <img src="images/logo-qs.svg" alt="QuantStack Logo" style="height: 4em; max-width: 100%;" />
    </div>
  </div>

</div>


---

<section>
  <h2 style="text-align:center; margin-top: 0.5rem; font-weight:300;">
    How many of you are familiar with <strong style="font-weight:700;">FreeCAD</strong> or <strong style="font-weight:700;">QGIS</strong>?
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

  <div class="fragment" style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:75vh; gap:2rem;">
    
  <h3 style="text-align:center; margin-top:2rem;">Not Collaborative</h3>

  <div style="display:flex; align-items:center; gap:3rem; max-width:80%;">
    
  <!-- Icon/illustration block -->
  <div style="flex:1; display:flex; justify-content:center; align-items:center;">
    <img src="images/teamwork.jpg" alt="Not collaborative" 
          style="max-height:70rem; width:auto; opacity:0.9;" />
  </div>

  <!-- Text block -->
  <ul style="flex:1; list-style-type:none; padding:0; margin:0; font-size:2.3rem; line-height:1.8; text-align:left;">
    <li>📧 Files shared via Email, Git or Drives</li>
    <li>🚫 Difficult to Iterate</li>
    <li>⚡ Friction with multiperson tasks</li>
  </ul>

  </div>

  </div>
</section>


<section>
  <h2 style="text-align:center; margin-top:0.5rem;">Powerful Tools BUT</h2>

  <div class="fragment" style="display:flex; flex-direction:column; align-items:center; height:75vh; gap:2rem;">
  
  <h3 style="text-align:center; margin:0;">Constant Context Switching</h3>

  <div style="display:flex; align-items:center; justify-content:center; gap:3rem; height:70%;">
    
  <!-- QGIS Screenshot -->
  <div style="flex:1; text-align:center;">
    <img src="images/qgis-vis.png" alt="QGIS Screenshot"
          style="max-height:60vh; width:auto; border-radius:6px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
    <p style="margin-top:0.5rem;">QGIS for Visualization</p>
  </div>

  <!-- Switching Icon -->
  <div style="font-size:3rem;">🔄</div>

  <!-- Jupyter Screenshot -->
  <div style="flex:1; text-align:center;">
    <img src="images/jgis-ww.png" alt="Jupyter Screenshot"
          style="max-height:60vh; width:auto; border-radius:6px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
    <p style="margin-top:0.5rem;">Jupyter for Processing</p>
  </div>

  </div>
  </div>

  <!-- Slide notes -->
  <aside class="notes">
    Here I want to emphasize the constant switching users face.  
    For example, you might analyze geospatial data in Jupyter, but as soon as you need visualization,  
    you jump to QGIS — then back again when you need further processing.  
    This breaks your flow, adds overhead, and makes reproducibility harder.
  </aside>
</section>

<section>
  <h2 style="text-align:center; margin-top:0.5rem;">Powerful Tools BUT</h2>

  <div class="fragment" style="position:relative; width:100%; height:70vh; margin-top:2rem; display:flex; flex-direction:column; align-items:center; justify-content:center;">
  <h3 style="margin-top:1.5rem; text-align:center;">Not Easily Shareable</h3>

  <div style="position:relative; width:100%; height:100%; display:flex; justify-content:center; align-items:center;">

  <img src="images/works-on-my-machine-ryan-gosling.png"
        alt="QGIS Error"
        style="max-width:70%; max-height:50%; border-radius:6px; margin-right:50%;" />

  <img src="images/qgis-versions.png"
        alt="QGIS Version Hell"
        style="position:absolute; bottom:5%; right:20%; max-height:85%; width:auto; border-radius:6px;" />

  </div>

  </div>
</section>








<!-- Slide 2: Visual Meme / Contrast -->
<!-- <section>
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
</section> -->

<!-- Slide 3: Solution Intro -->
<!-- <section>
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
</section> -->


---

<section style="position:relative; height:80vh;">
  <h2 style="text-align:center; margin-top:0.5rem;">What IF?</h2>

  <div style="position:relative; width:100%; height:100%; margin-top:2rem; display:flex; flex-wrap:wrap; justify-content:space-around; align-items:flex-start; gap:2rem; padding:2rem;">
    <div style="flex:0 1 40%; font-weight:400; background:#f0f0f0; padding:0.5rem 1rem; border-radius:6px;">
      ✅ Very small to no install
    </div>
    <div style="flex:0 1 40%; font-weight:400; background:#f0f0f0; padding:0.5rem 1rem; border-radius:6px;">
      ✅ Non-overwhelming, beginner-friendly UI
    </div>
    <div style="flex:0 1 40%; font-weight:400; background:#f0f0f0; padding:0.5rem 1rem; border-radius:6px;">
      ✅ With live collaboration support
    </div>
    <div style="flex:0 1 40%; font-weight:400; background:#f0f0f0; padding:0.5rem 1rem; border-radius:6px;">
      ✅ Inside your notebooks & scientific environment
    </div>
    <div style="flex:0 1 40%; font-weight:400; background:#f0f0f0; padding:0.5rem 1rem; border-radius:6px;">
      ✅ Interoperable across tools & formats
    </div>
    <div style="flex:0 1 40%; font-weight:400; background:#f0f0f0; padding:0.5rem 1rem; border-radius:6px;">
      ✅ Highly extensible
    </div>
  </div>
</section>

<section style="display:flex; justify-content:center; align-items:center; height:100vh; flex-direction:column; gap:2rem;">
  <h2 style="margin:0; text-align:center;">
    JupyterCAD 
    <img src="images/jcad.png" alt="JupyterCAD logo" style="height:5rem; vertical-align:middle; margin:0 0.5rem;" />
    & 
    JupyterGIS 
    <img src="images/jgis.png" alt="JupyterGIS logo" style="height:5rem; vertical-align:middle; margin:0 0.5rem;" />
  </h2>

  <!-- JupyterGIS screenshot (bottom) -->
  <div style="position:absolute; top:15%; left:10%; width:60%; z-index:1;">
    <img src="images/jupytergis-ss.png" alt="JupyterGIS Screenshot" 
          style="width:100%; height:auto; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
  </div>

  <!-- JupyterCAD screenshot (top) -->
  <div style="position:absolute; top:30%; left:30%; width:60%; z-index:2;">
    <img src="images/jupytercad-ss.png" alt="JupyterCAD Screenshot" 
          style="width:100%; height:auto; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
  </div>

</section>




---

<section>
  <h3>About JupyterCAD</h3>
  <ul>
    <li >Browser-native 3D modeling for JupyterLab</li>
    <li >Built on <strong>OpenCascade</strong> (via WebAssembly) and <strong>ThreeJS</strong> for display</li>
    <li >Parametric, sketch-driven design</li>
    <li >Integrates with Python code cells</li>
  </ul>
</section>


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
  <p >Write Python code to generate & modify shapes</p>
  <video src="video/jcad/jcad-console.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <p><strong>📓 Notebook integration</strong></p>
  <p >CAD alongside your code & documentation</p>
  <video src="video/jcad/jcad-notebook.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <p><strong>🤝 Collaborative editing</strong></p>
  <p  style="font-size: 1.9rem">CRDT-based real-time co-editing via Y.js & PyCRDT</p>
  <video src="video/jcad/jcad-collaborative.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>💬 Suggestion Workflow</h3>
  <p style="font-size: 1.9rem">
    Like Github Pull Requests, Collaborators can review models — suggest, accept, or reject changes asynchronously.
  </p>
  <video src="video/jcad/jcad-suggestions.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>📁 File Format Support</h3>
  <ul>
    <li ><strong>FCStd</strong> — Read, edit, and export <em>FreeCAD</em> project files natively</li>
    <li ><strong>STL</strong> — Import mesh models for quick inspection or editing</li>
    <li ><strong>STEP</strong> — Bring in precise solid geometry from external CAD tools</li>
  </ul>
  <p  style="margin-top: 1rem;">
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
  <h3>About JupyterGIS</h3>
  <ul>
    <li >A full-featured GIS toolkit inside JupyterLab</li>
    <li >Supports raster and vector layers</li>
    <li >Built with <strong>OpenLayers</strong> + <strong>GDAL</strong> (WebAssembly)</li>
  </ul>
</section>


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
  <p >
    Import and export QGIS files, layers, and styles seamlessly.
  </p>
  <video src="video/jgis/jgis-qgis.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

  <section>
  <h3>📝 Annotation & Collaboration</h3>
  <p>
    Add notes, draw shapes, and collaborate in real-time.
  </p>
  <video src="video/jgis/jgis-annotation.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>


  <section>
    <h3>📓 Notebook + Python Integration</h3>
    <p>Use Python code cells to add, style, and transform spatial layers</p>
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

<section>
  <h3>📦 STAC Integration</h3>
  <p>
    Browse and visualize datasets directly from <strong>STAC catalogues</strong>
  </p>
  <video 
    src="video/jgis/jgis-stac.mp4" 
    autoplay 
    loop 
    muted 
    playsinline 
    style="max-width: 90%; margin-top: 1rem;"
  ></video>
</section>


<section>
  <h3>🌐 TiTiler Integration</h3>
  <p>
    Serve and explore vector & raster dynamically using <strong>Python + TiTiler</strong>
  </p>
  <video 
    src="video/jgis/jgis-titiler.mp4" 
    autoplay 
    loop 
    muted 
    playsinline 
    style="max-width: 90%; margin-top: 1rem;"
  ></video>
</section>


---

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


---

<section style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:2rem;">
  <h2 style="text-align:center; margin-bottom:2.5rem;">Use Cases</h2>

  <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; font-size:2.2rem; line-height:1.6;">
  
  <div>🌍 <strong>Environmental Science</strong><br><span style="color:#555;">Analyze climate or land-use patterns</span></div>
  <div>🌊 <strong>Geoscience</strong><br><span style="color:#555;">Map terrain, water or seismic data</span></div>
  <div>🛠️ <strong>Engineering</strong><br><span style="color:#555;">Parametric CAD models in notebooks</span></div>
  <div>📐 <strong>Education</strong><br><span style="color:#555;">Teach CAD/GIS with no installs</span></div>
  <div>⚡ <strong>R&D</strong><br><span style="color:#555;">Prototype & share browser-native apps</span></div>
  <div>🧑‍🤝‍🧑 <strong>Collaboration</strong><br><span style="color:#555;">Design reviews in the browser</span></div>

  </div>
</section>


---

<section style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:2rem;">
  <h2 style="text-align:center; margin-bottom:2.5rem;">What's next for JupyterGIS?</h2>
  <h3 style="text-align:center; margin-bottom:2.5rem;">We have many ideas, help us make them real!</h3>

  <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; font-size:2.2rem; line-height:1.6;">
  <div style="transform:rotate(-2deg) translateY(-5px); background:#fef9f5; padding:1.5rem 2rem; border-radius:1rem; font-size:1.7rem; box-shadow:0 4px 12px rgba(0,0,0,0.12);">
    <strong>MCP Server Extension</strong>
  </div>

  <div style="transform:rotate(1.5deg) translateY(8px); background:#f5fbff; padding:1.5rem 2rem; border-radius:1rem; font-size:1.7rem; box-shadow:0 4px 12px rgba(0,0,0,0.12);">
    <strong>Story Maps</strong>
  </div>

  <div style="transform:rotate(-1deg) translateY(4px); background:#f9f5ff; padding:1.5rem 2rem; border-radius:1rem; font-size:1.7rem; box-shadow:0 4px 12px rgba(0,0,0,0.12);">
    <strong>Suggestions Support</strong><br>(Split view comparison)
  </div>

  <div style="transform:rotate(2deg) translateY(-6px); background:#f5fff9; padding:1.5rem 2rem; border-radius:1rem; font-size:1.7rem; box-shadow:0 4px 12px rgba(0,0,0,0.12);">
    <strong>More Cloud Optimization</strong><br>(GeoParquet, GeoArrow)
  </div>

  <div style="transform:rotate(-1.5deg) translateY(5px); background:#fffdf5; padding:1.5rem 2rem; border-radius:1rem; font-size:1.7rem; box-shadow:0 4px 12px rgba(0,0,0,0.12);">
    <strong>Vector Layer Editing & Creation</strong>
  </div>

  <div style="transform:rotate(1deg) translateY(-4px); background:#f5f7ff; padding:1.5rem 2rem; border-radius:1rem; font-size:1.7rem; box-shadow:0 4px 12px rgba(0,0,0,0.12);">
    <strong>Advanced Table Viewer</strong>
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
  <h2 style="text-transform: none;">Thank You</h2>
  <h3 style="margin-top: 2rem;">Questions?</h3>

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

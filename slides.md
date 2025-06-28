<!-- .slide: data-background-color="#1e1e1e" -->
<div style="text-align: left; line-height: 1.2;">
  <h4 style="color: white; font-size: 1.2em; margin-top: 0.2em; text-transform: none;">Collaborative & Reproducible</h4>
  <h3 style="color: white; font-size: 2em; margin: 0; text-transform: none;">CAD & GIS in JupyterLab</h3>
  <p style="color: white; font-style: italic; margin-top: 0.5em;">Arjun Verma</p>
</div>
<!-- .slide: data-transition="zoom" -->


---

<!-- .slide: class="section-with-footer" -->

### QuantStack

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
  <img src="/images/team.png" alt="QuantStack Team" style="width: 90%; max-width: 300px; height: auto; border-radius: 8px;" />
  <p style="font-style: italic; margin-top: 0.5em;">
    Empowering scientists and developers worldwide with cutting-edge tools
  </p>
</div>

</div>


---

<section>
  <h3>About My Mentor</h3>
  <p><strong>Martin Renou</strong> — Technical Director at <strong>QuantStack</strong></p>
  <p>
    <strong>Martin Renou</strong> is also a maintainer of <strong>Project Jupyter</strong>. He is a core contributor to the <strong>ipywidgets</strong> ecosystem and maintains several widget libraries including <strong>ipyleaflet</strong>, <strong>ipydatagrid</strong>, <strong>ipygany</strong>, <strong>ipycanvas</strong>, and <strong>bqplot</strong>. He co-created the <strong>Voilà</strong> dashboarding system and is the main author of the <strong>xeus-python</strong> kernel.
  </p>
</section>


---

<section>
  <h2>The Current Problem</h2>
  <ul>
    <li class="fragment">Tools like <strong>FreeCAD</strong>, <strong>QGIS</strong>, and <strong>ArcGIS</strong>:</li>
    <ul>
      <li class="fragment">Are powerful, but have steep learning curves</li>
      <li class="fragment">Require complex setups and system dependencies</li>
      <li class="fragment">Are difficult to integrate into modern, code-first workflows</li>
    </ul>
  </ul>
</section>

<section>
  <h2>Team Challenges</h2>
  <ul>
    <li class="fragment">Workflows trapped in <strong>proprietary formats</strong> or desktop silos</li>
    <li class="fragment">Limited ability to <strong>track changes, collaborate, or reproduce results</strong></li>
    <li class="fragment">A disconnect between <strong>data science</strong> and <strong>spatial modeling</strong></li>
  </ul>
</section>

<section>
  <h2>What We Need</h2>
  <ul>
    <li class="fragment"><strong>Seamless integration</strong> with computational notebooks</li>
    <li class="fragment">Tools that work <strong>anywhere, without installs</strong></li>
    <li class="fragment"><strong>Open, interoperable environments</strong> built for modern research</li>
  </ul>
</section>


---

<section>
  <h2>Why Jupyter?</h2>
  <ul>
    <li class="fragment">Scientific computing is increasingly moving to the <strong>browser</strong></li>
    <li class="fragment"><strong>CAD</strong> and <strong>GIS</strong> tools are still mostly tied to heavy <strong>desktop applications</strong></li>
    <li class="fragment"><strong>Jupyter</strong> has become the central hub for <strong>reproducible research</strong></li>
  </ul>
</section>

<section>
  <h2>Jupyter Strengths</h2>
  <ul>
    <li class="fragment">Combines <strong>code, visualizations, and documentation</strong> in one place</li>
    <li class="fragment">Supports <strong>interactive computing</strong> — essential for spatial data exploration</li>
    <li class="fragment">Built-in collaboration via <strong>notebooks, Git, and cloud platforms</strong></li>
    <li class="fragment">Integrates with <strong>Python, C++, Julia, R, and WebAssembly</strong></li>
    <li class="fragment">Transparent execution history and outputs enable <strong>auditability</strong></li>
  </ul>
</section>


---

<section>
  <h2>JupyterCAD</h2>
  <video src="/video/jcad/jcad.mp4" autoplay loop muted playsinline style="max-width: 80%; margin-top: 2rem;"></video>
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
  <video src="/video/jcad/jcad-sketch.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>Boolean Operations</h3>
  <p class="fragment">Cut, union, and intersect shapes with precision</p>
  <video src="/video/jcad/jcad-cut.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>Geometric Operations</h3>
  <p class="fragment">Chamfer and fillet edges using UI or Python</p>
  <video src="/video/jcad/jcad-chamfer.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <h3>Multiple Visualization Modes</h3>
  <p class="fragment" style="font-size: 1.9rem;">Explore models with <strong>Exploded View</strong>, <strong>Clip Plane</strong>, and <strong>Wireframe</strong></p>
  <video src="/video/jcad/jcad-views.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1.5rem; border: 1px solid #ccc;"></video>
</section>

<section>
  <p><strong>🎛️ Transform controls with snapping</strong></p>
  <p class="fragment">Precise geometric manipulation in the browser</p>
  <video src="/video/jcad/jcad-transform.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <p><strong>🧮 Python API for programmatic geometry</strong></p>
  <p class="fragment">Write Python code to generate & modify shapes</p>
  <video src="/video/jcad/jcad-console.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <p><strong>📓 Notebook integration</strong></p>
  <p class="fragment">CAD alongside your code & documentation</p>
  <video src="/video/jcad/jcad-notebook.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

<section>
  <p><strong>🤝 Collaborative editing</strong></p>
  <p class="fragment" style="font-size: 1.9rem">CRDT-based real-time co-editing via Y.js & PyCRDT</p>
  <video src="/video/jcad/jcad-collaborative.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
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
  <video src="/video/jcad/jcad-suggestions.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
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
  <h3>Embedded Lite Deployment</h3>
</section>


---

<section>
  <h2>JupyterGIS</h2>
  <video src="/video/jgis/jgis.mp4" autoplay loop muted playsinline style="max-width: 80%; margin-top: 2rem;"></video>
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
    <video src="/video/jgis/jgis-layers.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
    <h3>🖍️ Vector Symbology</h3>
    <p class="fragment">Visualize vector data using <strong>graduated</strong> and <strong>categorized</strong> rendering styles</p>
    <video src="/video/jgis/jgis-vector-symbology.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
    <h3>🖍️ Raster Symbology</h3>
    <p class="fragment">Use <strong>multiband rendering</strong> to style raster datasets like satellite imagery</p>
    <video src="/video/jgis/jgis-raster-symbology.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
    <h3>🔄 Dynamic Layer Management</h3>
    <p class="fragment">Add, remove, and style layers with a built-in interactive UI</p>
    <video src="/video/jgis/jgis-layer-management.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
  <h3>🔍 Identify Panel</h3>
  <p class="fragment">
    Click on features in the map to instantly inspect their attributes.
  </p>
  <video src="/video/jgis/jgis-identify.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>


  <section>
  <h3>⏳ Time Slider</h3>
  <p class="fragment">
    Visualize how data changes over time with an interactive slider.
  </p>
  <video src="/video/jgis/jgis-timeslider.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>


  <section>
  <h3>🧩 QGIS Compatibility</h3>
  <p class="fragment">
    Import and export QGIS files, layers, and styles seamlessly.
  </p>
  <video src="/video/jgis/jgis-qgis.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>

  <section>
  <h3>📝 Annotation & Collaboration</h3>
  <p class="fragment">
    Add notes, draw shapes, and collaborate in real-time.
  </p>
  <video src="/video/jgis/jgis-annotation.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
</section>


  <section>
    <h3>📓 Notebook + Python Integration</h3>
    <p class="fragment">Use Python code cells to add, style, and transform spatial layers</p>
    <video src="/video/jgis/jgis-notebook.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
  </section>

  <section>
    <h3>🧪 Client-Side Processing</h3>
    <p class="fragment">Perform buffer, dissolve, centroid and overlays with GDAL-WASM — no server required</p>
    <video src="/video/jgis/jgis-processing.mp4" autoplay loop muted playsinline style="max-width: 90%; margin-top: 1rem;"></video>
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
  <h3>Embedded Lite Deployment</h3>
</section>


---

# Web Tech Under the Hood

---

## Web Technologies Used

- **WebAssembly (WASM)**
- **PyCRDT + Y.js**
- **IndexedDB**
- **Jupyter extensions**

---

## Not just JupyterLab

- Works in full JupyterLab setups
- WASM enables install-free use
- Can integrate with:
  - JupyterHub
  - Voila
  - JupyterLite


---

# Use Cases

---

## Who is this for?

- 🏛️ Research teams
- 🏙️ Urban planners
- 🧑‍🏫 Educators
- 🌿 Environmental scientists
<!-- - 👩‍💻 Open-source contributors -->

---

## Real-World Use Cases

1. Parametric parts for 3D printing (JupyterCAD)
2. Pollution layer overlays + AQI data (JupyterGIS)
3. Satellite image analysis workflows (GDAL in-browser)
4. Collaborative geo-tagged design notebooks for civic planning


---

## Learn More / Get Involved

- 🔗 [github.com/jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)
- 🔗 [jupytercad.github.io](https://jupytercad.github.io/JupyterCAD)
- 🔗 [github.com/geojupyter/jupytergis](https://github.com/geojupyter/jupytergis)
- 🔗 [jupytergis.readthedocs.io](https://jupytergis.readthedocs.io)

---

## Thank You

### Questions?

<!-- .slide: data-background-color="#000" -->
<!-- .slide: data-transition="zoom" -->

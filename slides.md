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
  <li>Animation of <strong>PyData</strong> community</li>
</ul>
</div>

<div style="flex: 1; text-align: center; min-width: 280px;">
  <img src="src/images/team.png" alt="QuantStack Team" style="width: 90%; max-width: 300px; height: auto; border-radius: 8px;" />
  <p style="font-style: italic; margin-top: 0.5em;">
    Empowering scientists and developers worldwide with cutting-edge tools
  </p>
</div>

</div>


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
    <li class="fragment">It's time to bring <strong>spatial and geometric data workflows</strong> into this ecosystem</li>
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
  <h3>What is JupyterCAD?</h3>
  <ul>
    <li class="fragment">Browser-native 3D modeling for JupyterLab</li>
    <li class="fragment">Built on <strong>OpenCascade</strong> (via WebAssembly)</li>
    <li class="fragment">Parametric, sketch-driven design</li>
    <li class="fragment">Integrates with Python code cells</li>
  </ul>
</section>

<section>
  <h3>JupyterCAD Features</h3>
  <ul>
    <li class="fragment">✏️ Sketch-based modeling</li>
    <li class="fragment">🎛️ Transform controls with snapping</li>
    <li class="fragment">🧮 Python API for programmatic geometry</li>
    <li class="fragment">📓 Notebook integration</li>
    <li class="fragment">🤝 Collaborative editing with Y.js & PyCRDT</li>
  </ul>
</section>

<section>
  <h3>Why JupyterCAD?</h3>
  <ul>
    <li class="fragment">Replaces FreeCAD in notebook-based workflows</li>
    <li class="fragment">Great for:</li>
    <ul>
      <li class="fragment">Engineering education</li>
      <li class="fragment">Design versioning</li>
      <li class="fragment">Parametric part generation</li>
    </ul>
    <li class="fragment">No install needed</li>
    <li class="fragment">Fully scriptable and shareable</li>
  </ul>
</section>


---

# JupyterGIS

---

## What is JupyterGIS?

- A full-featured GIS toolkit inside JupyterLab
- Supports raster/vector layers
- Built with **OpenLayers** + **GDAL** (WASM)

---

## JupyterGIS Features

- 🗺️ Load local/cloud vector & raster data
- 🖍️ Graduated/categorized/multiband symbology
- 🔄 Dynamic layer management UI
- 📓 Notebook + Python API integration
- 🧪 Client-side analysis pipelines

---

## Scientific Edge: GDAL in the Browser

- GDAL compiled to WebAssembly
- In-browser support for:
  - Raster reprojection
  - Zonal stats & overlays
  - Geometry operations
- Offline-capable analysis
- Use-case ready: climate, pollution, urban planning


---

# Web Tech Under the Hood

---

## Web Technologies Used

- **WebAssembly (WASM)**
- **PyCRDT + Y.js**
- **IndexedDB**
- **Jupyter extensions**

---

## Not just JupyterLite

- Works in full JupyterLab setups
- WASM enables install-free use
- Can integrate with:
  - JupyterHub
  - Voila
  - JupyterLite


---

# Collaboration in Action

---

## Why Collaboration?

- CAD/GIS workflows are team-based
- Real-time editing means:
  - Design reviews without emailing files
  - Feedback loops within the notebook
  - Teaching in sync with code + maps

---

## Collaboration Features

- 🔁 CRDT-powered model syncing
- 👥 Role-based editing modes
- 📌 Suggestion tracking for design feedback
- 🧾 Auto-synced metadata


---

# Use Cases

---

## Who is this for?

- 🏛️ Research teams
- 🏙️ Urban planners
- 🧑‍🏫 Educators
- 🌿 Environmental scientists
- 👩‍💻 Open-source contributors

---

## Real-World Use Cases

1. Parametric parts for 3D printing (JupyterCAD)
2. Pollution layer overlays + AQI data (JupyterGIS)
3. Satellite image analysis workflows (GDAL in-browser)
4. Collaborative geo-tagged design notebooks for civic planning


---

# Demo Time 🎥

---

## Live Demo: JupyterCAD

- Sketch → Extrude → Modify
- Parametric shape generation
- Live collaboration (edit from two tabs)

---

## Live Demo: JupyterGIS

- Load GeoJSON + satellite tiles
- Apply graduated symbology
- Add Python-powered layer from notebook
- Run a zonal statistic on a raster layer


---

# A Contributor's Note

---

## Why I contribute

- Frustrated by friction in spatial tooling
- Wanted browser-based, scriptable CAD & GIS
- Contributing to:
  - Symbology systems
  - Plugin architecture
  - UI/UX and interaction models

---

## Lessons from OSS

- Web tech is ready for scientific modeling
- Collaboration unlocks better design + reproducibility
- You don’t need a background in GIS/CAD to contribute
- Everyone can build extensions that improve accessibility


---

# Why Should FreeCAD/QGIS Users Care?

---

## Moving beyond traditional tools

- Use JupyterCAD instead of FreeCAD when:
  - You want parametric modeling **in notebooks**
  - You need real-time team input
  - You don’t want to install anything

- Use JupyterGIS instead of ArcGIS/QGIS when:
  - You need to **integrate GIS with Python code**
  - You want to share workflows as reproducible notebooks
  - You care about client-side performance and transparency


---

# Key Takeaways

---

## Key Takeaways

- You can now do CAD + GIS inside JupyterLab
- It's all browser-native and open source
- It’s collaborative by default
- You can contribute—even if you're not a GIS/CAD expert
- The spatial web is already here


---

## Learn More / Get Involved

- 🔗 [github.com/jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)
- 🔗 [jupytercad.github.io](https://jupytercad.github.io/JupyterCAD)
- 🔗 [github.com/geojupyter/jupytergis](https://github.com/geojupyter/jupytergis)
- 🔗 [jupytergis.readthedocs.io](https://jupytergis.readthedocs.io)
- 📬 arjunverma.dev / @your_handle

---

## Thank You

### Questions?

<!-- .slide: data-background-color="#000" -->
<!-- .slide: data-transition="zoom" -->

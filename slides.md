<!-- .slide: data-background-color="#1e1e1e" -->
# A Collaborative Future  
## CAD & GIS in JupyterLab  
_Arjun Verma • IndiaFOSS 2025_  
<!-- .slide: data-transition="zoom" -->


---

## Agenda
1. Why CAD & GIS need to evolve  
2. What is JupyterCAD?  
3. What is JupyterGIS?  
4. Web tech under the hood  
5. Why collaboration matters  
6. Use cases & demos  
7. Contributor's perspective  
8. Q&A  


---

## Why this talk?

> CAD and GIS workflows are still mostly siloed, heavyweight, and hard to reproduce.

- Scientific computing is moving to the browser  
- CAD and GIS are still stuck in desktop apps  
- Jupyter is the hub for reproducible research — let's bring spatial data in  


---

## The current problem

- CAD/GIS tools like FreeCAD, QGIS, ArcGIS:  
  - Hard to install or scale  
  - Not designed for collaboration  
  - Siloed from data science workflows  

- Spatial computing needs to be:  
  - Accessible  
  - Reproducible  
  - Collaborative  


---

## Enter JupyterLab

- Interactive notebooks for code + data + docs  
- Kernel-backed Python/Julia/R execution  
- Extension ecosystem  
- Real-time collaboration  
- **But no native support for CAD or GIS… until now.**


---

# JupyterCAD
---

## What is JupyterCAD?

- Browser-native 3D modeling for JupyterLab  
- Built on **OpenCascade** (via WebAssembly)  
- Parametric, sketch-driven design  
- Integrates with Python code cells  
---

## JupyterCAD Features

- ✏️ Sketch-based modeling  
- 🎛️ Transform controls with snapping  
- 🧮 Python API for programmatic geometry  
- 📓 Notebook integration  
- 🤝 Collaborative editing with Y.js & PyCRDT  
---

## Why JupyterCAD?

- Replaces FreeCAD in notebook-based workflows  
- Great for:
  - Engineering education  
  - Design versioning  
  - Parametric part generation  
- No install needed  
- Fully scriptable and shareable


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

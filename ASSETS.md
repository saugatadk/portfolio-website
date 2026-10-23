# ASSETS.md — Visual Asset Inventory & Requirements

This document catalogs the current visual assets in `src/assets/` and specifies the real engineering visuals recommended for each project.

---

## 1. Current Asset Status

| Project | Current Image Asset | Status |
|---|---|---|
| **Badi (बाढी)** | `src/assets/badi.jpg` | High-level graphic banner |
| **krishiMitra** | `src/assets/krishimitra.jpg` | App mockup graphic |
| **YOLOv1 from Scratch** | `src/assets/yolov1.jpg` | Architecture diagram graphic |
| **PrashnaAI** | `src/assets/prashnaai.jpg` | App landing card graphic |
| **Transformer from Scratch** | `src/assets/transformer.jpg` | Decoder attention graphic |
| **AI Book Recommender** | `src/assets/book-recommender.jpg` | Vector search graphic |
| **Customer Segmentation** | `src/assets/kmeans.jpg` | Cluster scatter plot graphic |
| **Dino Runner** | `src/assets/dino.jpg` | Game screenshot |

---

## 2. Real Visual Assets Needed Per Project

To reinforce the authentic student engineer voice, replace conceptual graphic banners with real runtime artifacts:

### 1. Badi: Flood Route Intelligence
- **Architecture Diagram**: Clean vector export of the FalkorDB schema graph (`RoadSegment`, `Location`, `Facility`, `Bridge`, `Observation`, `EpisodicMemory`) illustrating multi-hop safe path verification.
- **Terminal / Server Capture**: Screenshot of the FastMCP server initializing its 9 tools and processing Cypher queries.
- **Demo GIF**: 5-second screencast of the FalkorDB browser query showing Trishuli road network cut-edge isolation during flood simulation.

### 2. krishiMitra: Cardamom Disease Assistant
- **Real App Screenshot**: Screenshot of the mobile screen showing a diagnosed cardamom leaf with Rekognition confidence score (e.g., *Colletotrichum blight: 94%*).
- **Audio Interface Capture**: Visual showing the Nepali voice response player interface.
- **Cloud Architecture Diagram**: Schematic showing the data flow: React Native → Django REST → AWS Rekognition / Bedrock / Transcribe → DynamoDB.

### 3. YOLOv1 from Scratch (PyTorch)
- **Training Loss & mAP Plot**: Matplotlib curve plotted directly from Colab showing train mAP increasing from 0.0 to 0.903 over 35 epochs and composite loss convergence.
- **Inference Detection Visual**: 2–3 sample images from Pascal VOC with bounding boxes, class labels, and confidence scores after Non-Maximum Suppression (NMS).

### 4. PrashnaAI: Interview Practice Web App
- **Live Deployment Screenshot**: Full-resolution capture of the live Vercel app (`https://prashnaai.vercel.app/`) displaying the speech cadence, filler words counter, and code evaluation scorecard.

### 5. Also Built Projects (Optional Visuals)
- **Transformer from Scratch**: Terminal output showing character-level Shakespeare text generation at iteration 0 vs iteration 5000.
- **AI Book Recommender**: Screenshot of the Hugging Face Spaces Gradio interface with vector search results for an emotional mood query.
- **Customer Segmentation**: 3D PCA cluster scatter plot alongside the WCSS elbow curve chart from Jupyter Notebook.
- **Dino Runner**: Gameplay screencast or screenshot of the C++ / OpenGL GLFW window showing custom GLSL vertex/fragment shading.

---

## 3. Recommended Storage Location
Place all real screenshots, plots, and architecture diagrams into:
`src/assets/real/`

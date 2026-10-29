import badiImg from "../../assets/badi.jpg";
import neuroreadImg from "../../assets/neuroread.jpg";
import krishiImg from "../../assets/krishimitra.jpg";
import ragImg from "../../assets/rag.jpg";
import yolov1Img from "../../assets/yolov1.jpg";
import prashnaImg from "../../assets/prashnaai.jpg";
import transformerImg from "../../assets/transformer.jpg";
import bookRecommenderImg from "../../assets/book-recommender.jpg";
import kmeansImg from "../../assets/kmeans.jpg";
import dinoImg from "../../assets/dino.jpg";

export const categories = [
  "All",
  "Agents & LLMs",
  "Vision & Deep Learning",
  "Systems & Engines",
];

export const projects = [
  {
    id: "neuroread",
    title: "NeuroRead: Dyslexia-Friendly Reading AI",
    category: "Agents & LLMs",
    image: neuroreadImg,
    summary:
      "Assistive reading and speech intervention system for individuals with dyslexia. Uses fine-tuned BART text simplification, EasyOCR document scanning, and Groq Whisper pronunciation scoring.",
    bullets: [
      "Simplifies complex sentences using fine-tuned BART-Large-CNN to reduce cognitive reading load.",
      "Extracts printed text from camera captures and PDF documents via an EasyOCR vision pipeline.",
      "Evaluates speech rate, pauses, and word-level accuracy via Groq Whisper speech recognition.",
    ],
    breakdown: {
      problem:
        "Individuals with dyslexia experience high cognitive fatigue from dense text, complex syntax, and unguided oral reading practice.",
      architecture:
        "React Native app connects to FastAPI backend. PyTorch serves fine-tuned BART-Large-CNN; EasyOCR extracts document text; Groq Whisper-large-v3 transcribes practice audio.",
      tradeoff:
        "Processes BART generation and Whisper transcription in backend APIs rather than on-device. Preserves mobile battery life, but requires network connectivity.",
      whatBroke:
        "Whisper transcripts misclassified repeated and substituted syllables during oral practice. Implemented a word-level Levenshtein duration-ratio comparator to classify errors accurately.",
      result:
        "Trained BART across 752 dyslexia-friendly text pairs over 8 epochs; provides real-time word-level accuracy, pause diagnostics, and WPM tracking.",
      limitations:
        "Speech evaluation accuracy depends on microphone quality and quiet ambient environment.",
    },
    tags: ["React Native", "FastAPI", "PyTorch", "BART (Hugging Face)", "EasyOCR", "Groq Whisper", "TypeScript"],
    links: [
      {
        url: "https://github.com/i-ces/NeuroRead",
        label: "GitHub",
        isCode: true,
      },
    ],
  },
  {
    id: "badi-mcp",
    title: "Badi: Flood Route Intelligence",
    category: "Agents & LLMs",
    image: badiImg,
    summary:
      "Graph-based disaster routing system for monsoon floods in Nepal. Computes verified evacuation paths to district hospitals using FastMCP and FalkorDB.",
    bullets: [
      "Exposes 9 FastMCP graph tools to Google Gemini online or offline deterministic router.",
      "Requires verified physical scout observations before marking hops passable, rejecting blind shortcuts.",
      "Automated dispute state isolates conflicting bridge reports until field re-inspection.",
    ],
    breakdown: {
      problem:
        "Monsoon floods destroy mountain roads in Nepal. Relief teams lack verified access to district hospitals.",
      architecture:
        "A Python FastMCP server provides 9 graph tools to Gemini. FalkorDB models roads, health posts, and scouts as an interconnected graph network.",
      tradeoff:
        "Demands physical scout verification before marking roads passable. Excludes unverified shortcuts, prioritizing ambulance safety over distance.",
      whatBroke:
        "Conflicting scout reports marked one bridge open and impassable, causing Cypher query loops. Added a dispute state that excludes contested roads until re-inspection.",
      result:
        "Verified through 34 pytest suites across simulated bridge washouts and network partitions in Rasuwa District.",
      limitations:
        "Requires manual scout inputs. Cannot evaluate bridge structural integrity without physical observation.",
    },
    tags: ["Python", "FastMCP", "FalkorDB", "Gemini API", "Pytest", "Docker"],
    links: [
      {
        url: "https://www.youtube.com/watch?v=N2CRGOSuLvU&t=2s",
        label: "Video Walkthrough",
        isVideo: true,
      },
      {
        url: "https://github.com/saugatadk/Badi",
        label: "GitHub",
        isCode: true,
      },
    ],
  },
  {
    id: "krishimitra",
    title: "krishiMitra: Cardamom Disease Assistant",
    category: "Agents & LLMs",
    image: krishiImg,
    summary:
      "Smart agricultural assistant for Himalayan cardamom farmers. Diagnoses crop blight via a two-stage U2-Net and YOLOv8 pipeline, provides spoken advice in Nepali, and tracks live market prices.",
    bullets: [
      "Segments cardamom leaf contours from cluttered field backgrounds using PyTorch U2-Net saliency masking.",
      "Detects Colletotrichum Leaf Blight and Phyllosticta Leaf Spot via YOLOv8 with 96.42% 5-fold cross-validation accuracy.",
      "Serves offline-first React Native mobile client through Django REST with Nepali voice query assistance and live market rates.",
    ],
    breakdown: {
      problem:
        "Fungal leaf blight (Colletotrichum and Phyllosticta) devastates cardamom yields in eastern Nepal. Farmers lack field diagnostic tools, local-language guidance, and transparent market trading rates.",
      architecture:
        "React Native mobile app connects to a Django REST backend. PyTorch U2-Net generates leaf saliency masks; a YOLOv8 classifier isolates lesion pathology; an audio pipeline processes Nepali voice queries.",
      tradeoff:
        "Employs a two-stage saliency-bypass pipeline. U2-Net removes noisy soil and shadow backgrounds, but smart-bypasses clean images to minimize inference latency on standard server hardware.",
      whatBroke:
        "Data leakage audit revealed 431 duplicate images across initial split folders. Removed cross-split duplicates and validated against strictly unseen test sets (91.67% holdout accuracy).",
      result:
        "Evaluated via 5-Fold Stratified Cross-Validation: 96.42% ± 1.09% mean accuracy, 95.54% macro F1-score, and 95.18% precision across 2,156 leaf samples.",
      limitations:
        "Severe leaf occlusion or extreme low-light conditions require physical re-capture. Market price feed depends on regional trading hub reporting.",
    },
    tags: ["PyTorch", "YOLOv8", "U2-Net", "Django REST", "React Native", "OpenCV", "Expo"],
    links: [
      {
        url: "https://github.com/user-attachments/assets/6e9438fa-49cf-407a-b568-c4dd3ed282d4",
        label: "Video Walkthrough",
        isVideo: true,
      },
      {
        url: "https://github.com/saugatadk/krishiMitra",
        label: "GitHub",
        isCode: true,
      },
    ],
  },
  {
    id: "document-rag",
    title: "Document RAG Assistant",
    category: "Agents & LLMs",
    image: ragImg,
    summary:
      "End-to-end retrieval-augmented generation assistant for heterogeneous documents. Combines multi-format file ingestion, dense vector retrieval via L2-normalized FAISS IndexFlatIP, and grounded Gemini 3.1 answer synthesis with verified citations.",
    bullets: [
      "Parses 6 document formats (PDF, DOCX, XLSX, CSV, TXT, JSON) into 1,000-character overlapping chunks via LangChain loaders.",
      "Indexes 384-dimensional dense vector embeddings with FAISS IndexFlatIP to perform sub-15ms cosine similarity search.",
      "Synthesizes grounded answers using Gemini with source attributions.",
    ],
    breakdown: {
      problem:
        "Organizations manage fragmented documentation across incompatible formats (PDFs, spreadsheets, text files). Standard keyword search fails on semantic queries, while vanilla LLMs hallucinate without grounded context.",
      architecture:
        "Built with FastAPI and Gradio Blocks. Ingestion parses documents using LangChain community loaders; a singleton SentenceTransformer (all-MiniLM-L6-v2) generates 384-d embeddings; FAISS IndexFlatIP retrieves top-k chunks; and Gemini 3.1 Flash-Lite synthesizes verified responses.",
      tradeoff:
        "Uses in-memory IndexFlatIP rather than an external distributed vector database. Eliminates cloud database connection overhead and infrastructure cost for session-isolated workloads, but requires server RAM scaling for large document corpora.",
      whatBroke:
        "FAISS IndexFlatL2 calculated squared Euclidean distances that distorted similarity thresholds across variable-length text chunks. Calibrated search accuracy by migrating to IndexFlatIP and applying L2-normalization to both chunk and query vectors to constrain cosine scores strictly to [-1, 1].",
      result:
        "Deployed live on Hugging Face Spaces with dual interfaces (FastAPI REST API + Gradio web UI). Delivers sub-150ms retrieval latency with 100% session isolation preventing cross-user data leakage.",
      limitations:
        "Vector index resets on container restart unless persisted to disk; multi-page scanned image PDFs require OCR preprocessing prior to ingestion.",
    },
    tags: [
      "Python",
      "FastAPI",
      "FAISS",
      "Google Gemini API",
      "Sentence-Transformers",
      "LangChain",
      "Gradio",
      "Docker",
    ],
    links: [
      {
        url: "https://huggingface.co/spaces/saugatadk101/document-rag-assistant",
        label: "Live Demo",
        isExternal: true,
      },
      {
        url: "https://github.com/saugatadk/RAG",
        label: "GitHub",
        isCode: true,
      },
    ],
  },
  {
    id: "yolov1-scratch",
    title: "YOLOv1 from Scratch (PyTorch)",
    category: "Vision & Deep Learning",
    image: yolov1Img,
    summary:
      "Pure PyTorch implementation of the original 24-layer YOLOv1 detection architecture and custom multi-part loss function.",
    bullets: [
      "Built 24-layer Darknet backbone and paper loss in pure PyTorch without torchvision dependencies.",
      "Implemented 7×7×30 grid tensor math, IoU matching, and Non-Maximum Suppression from scratch.",
      "Drove Pascal VOC train mAP from 0.0 to 0.903 over 35 epochs to verify convergence.",
    ],
    tags: ["PyTorch", "Darknet CNN", "Pascal VOC", "Colab"],
    links: [
      {
        url: "https://colab.research.google.com/github/saugatadk/YOLOv1-from-scratch/blob/main/train_colab.ipynb",
        label: "Colab Notebook",
        isExternal: true,
      },
      {
        url: "https://github.com/saugatadk/YOLOv1-from-scratch",
        label: "GitHub",
        isCode: true,
      },
    ],
  },
  {
    id: "prashna-ai",
    title: "PrashnaAI: Interview Practice Web App",
    category: "Agents & LLMs",
    image: prashnaImg,
    summary:
      "Interactive technical interview simulator evaluating vocal pacing, filler frequency, and code complexity in real time.",
    bullets: [
      "Evaluates microphone audio for speech pace, filler words, and clarity via Gemini 1.5 Flash.",
      "Analyzes submitted code and calculates algorithmic time complexity in Node.js.",
      "Generates visual performance review scorecards with actionable feedback.",
    ],
    tags: ["React", "Node.js", "Web Audio API", "Gemini API", "Vercel"],
    links: [
      {
        url: "https://prashnaai.vercel.app/",
        label: "Live Web App",
        isExternal: true,
      },
      {
        url: "https://www.youtube.com/watch?v=0INC6zuoSXg",
        label: "Video Walkthrough",
        isVideo: true,
      },
    ],
  },
  {
    id: "transformer-scratch",
    title: "Transformer from Scratch",
    category: "Vision & Deep Learning",
    image: transformerImg,
    summary:
      "Character-level autoregressive GPT decoder built from ground-up mathematical formulas in PyTorch.",
    bullets: [
      "Built 6-block, 6-head GPT decoder architecture with 384 embedding dimensions.",
      "Implemented multi-head causal self-attention masks and learned position embeddings.",
      "Trained on Tiny Shakespeare to generate coherent character-level text.",
    ],
    tags: ["PyTorch", "Transformer", "GPT Decoder", "NLP"],
    links: [
      {
        url: "https://github.com/saugatadk/Transformer-from-scratch",
        label: "GitHub",
        isCode: true,
      },
    ],
  },
  {
    id: "book-recommender",
    title: "AI Book Recommender",
    category: "Agents & LLMs",
    image: bookRecommenderImg,
    summary:
      "Mood-based semantic search interface matching subjective emotional queries to books via vector embeddings.",
    bullets: [
      "Embeds natural language mood descriptions using sentence-transformers.",
      "Executes low-latency cosine similarity vector searches in ChromaDB.",
      "Deployed as an interactive Gradio web application on Hugging Face Spaces.",
    ],
    tags: ["Python", "ChromaDB", "Hugging Face", "SentenceTransformers"],
    links: [
      {
        url: "https://huggingface.co/spaces/saugatadk101/AI-Book-Recommender",
        label: "Hugging Face Space",
        isExternal: true,
      },
      {
        url: "https://github.com/saugatadk/AI-Book-Recommender",
        label: "GitHub",
        isCode: true,
      },
    ],
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation",
    category: "Vision & Deep Learning",
    image: kmeansImg,
    summary:
      "Unsupervised machine learning pipeline segmenting high-dimensional customer behavior patterns.",
    bullets: [
      "Determined optimal cluster count via WCSS elbow curve and silhouette score analysis.",
      "Grouped customer profiles into 4 distinct behavioral clusters with K-Means.",
      "Projected multi-attribute feature vectors into 3D space using PCA in Scikit-Learn.",
    ],
    tags: ["Python", "Scikit-Learn", "K-Means", "PCA"],
    links: [
      {
        url: "https://github.com/saugatadk/Customer-Segmentation-using-K-Means-Clustering",
        label: "GitHub",
        isCode: true,
      },
    ],
  },
  {
    id: "dino-runner",
    title: "Dino Runner",
    category: "Systems & Engines",
    image: dinoImg,
    summary:
      "2D infinite runner game engine built from scratch in modern C++ with hardware-accelerated OpenGL.",
    bullets: [
      "Engineered GLFW window management and modern OpenGL 3.3+ rendering pipeline.",
      "Wrote custom GLSL vertex and fragment shaders for textured sprite batching.",
      "Implemented deterministic axis-aligned bounding box (AABB) collision physics.",
    ],
    tags: ["C++", "OpenGL", "GLSL Shaders", "GLFW"],
    links: [
      {
        url: "https://github.com/saugatadk/Dino-Runner",
        label: "GitHub",
        isCode: true,
      },
    ],
  },
];

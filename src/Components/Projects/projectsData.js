import badiImg from "../../assets/badi.jpg";
import krishiImg from "../../assets/krishimitra.jpg";
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
      "Offline-capable mobile assistant for Himalayan cardamom farmers. Diagnoses crop blight from leaf images and provides spoken treatment advice in Nepali.",
    bullets: [
      "Transmits leaf photos from React Native to Django REST on AWS for disease diagnosis.",
      "Classifies fungal infections via Amazon Rekognition Custom Labels model.",
      "Synthesizes localized audio treatment advice in Nepali through AWS Bedrock.",
    ],
    breakdown: {
      problem:
        "Fungal blights destroy cardamom harvests in eastern Nepal. Agricultural officers are days away and advisory documents are in English.",
      architecture:
        "React Native app sends leaf photos to Django REST on AWS. Amazon Rekognition classifies diseases; AWS Bedrock generates Nepali audio advice.",
      tradeoff:
        "Runs inference in AWS cloud rather than on-device. Keeps budget Android phones fast, but requires intermittent cellular connectivity.",
      whatBroke:
        "Voice synthesis distorted regional disease terms (chirke, furkey). Added an explicit phonetic vocabulary constraint to Bedrock before audio generation.",
      result:
        "Tested on a 200-image dataset of diseased cardamom leaves with reliable classification in local tests.",
      limitations:
        "Requires cellular data to upload leaf images. Untested in government agricultural trials.",
    },
    tags: ["React Native", "Django REST", "AWS Rekognition", "AWS Bedrock", "DynamoDB"],
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

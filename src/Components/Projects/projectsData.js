import badiImg from "../../assets/badi.jpg";
import krishiImg from "../../assets/krishimitra.jpg";
import yolov1Img from "../../assets/yolov1.jpg";
import prashnaImg from "../../assets/prashnaai.jpg";

export const caseStudies = [
  {
    id: "badi-mcp",
    title: "Badi: Flood Route Intelligence",
    image: badiImg,
    problem:
      "Monsoon floods in Nepal wash out unpaved mountain roads, leaving disaster relief teams without verified safe road access to district hospitals.",
    architecture:
      "A Python FastMCP server exposes 9 graph tools to Google Gemini online or a deterministic router offline. Road segments, health posts, and scout observations are stored in FalkorDB as an interconnected road network graph.",
    tradeoff:
      "Required verified physical scout observations for every hop before marking any route passable, rejecting standard Dijkstra shortest paths. This excludes potentially drivable shortcuts when unconfirmed, prioritizing ambulance safety over travel distance.",
    whatBroke:
      "Concurrent reports from local scouts and agency feeds marked the same bridge both open and impassable, causing Cypher queries to loop. Traced conflicting edge updates in FalkorDB and added an automated dispute resolution state that drops contested roads from safe routes until re-inspected.",
    result:
      "Tested through 34 pytest suites covering bridge washouts, network partitioning, and dispute resolution on simulated Rasuwa District road networks; no formal field deployment yet.",
    limitations:
      "Dependent on manual field scout inputs; cannot infer bridge structural integrity without direct observation.",
    tags: ["Python", "FastMCP", "FalkorDB", "Gemini API", "Pytest", "Docker"],
    links: [
      {
        url: "https://www.youtube.com/watch?v=N2CRGOSuLvU&t=2s",
        label: "Video Walkthrough",
        isVideo: true
      },
      {
        url: "https://github.com/saugatadk/Badi",
        label: "GitHub",
        isCode: true
      }
    ]
  },
  {
    id: "krishimitra",
    title: "krishiMitra: Cardamom Disease Assistant",
    image: krishiImg,
    problem:
      "Cardamom growers in eastern Nepal lose harvests to fungal blight because agricultural extension officers are days away and advisory leaflets are in English.",
    architecture:
      "A React Native mobile app transmits leaf photos to a Django REST backend on AWS. The backend queries Amazon Rekognition Custom Labels for disease classification and formats audio treatment advice in Nepali using AWS Bedrock.",
    tradeoff:
      "Processed image models on AWS cloud services instead of running on-device models. This enables budget Android devices to run the app smoothly, but demands intermittent mobile data connections.",
    whatBroke:
      "Speech recognition garbled local agricultural terms such as chirke and furkey viruses. Caught this in voice note test logs, then constrained Bedrock's prompt with an explicit phonetic vocabulary filter before generating audio.",
    result:
      "Tested against a 200-image dataset of diseased cardamom leaves; achieved reliable classification on common leaf blights in local validation tests, though untested in official agricultural trials. Requires cellular data to upload images.",
    tags: ["React Native", "Django REST", "AWS Rekognition", "AWS Bedrock", "DynamoDB"],
    links: [
      {
        url: "https://github.com/user-attachments/assets/6e9438fa-49cf-407a-b568-c4dd3ed282d4",
        label: "Video Walkthrough",
        isVideo: true
      },
      {
        url: "https://github.com/saugatadk/krishiMitra",
        label: "GitHub",
        isCode: true
      }
    ]
  }
];

export const compactProjects = [
  {
    id: "yolov1-scratch",
    title: "YOLOv1 from Scratch (PyTorch)",
    image: yolov1Img,
    bullets: [
      "Implemented the original 24-layer Darknet backbone and custom loss function directly from the Redmon et al. paper without relying on torchvision detection heads.",
      "Tensor transformations format the 7×7×30 output grid, calculate bounding box IoU matches, and apply Non-Maximum Suppression from scratch.",
      "Overfit sanity test on Pascal VOC in Google Colab drove train mAP from 0.0 to 0.903 over 35 epochs to verify backpropagation and loss stability."
    ],
    tags: ["PyTorch", "Darknet CNN", "Pascal VOC", "Colab"],
    links: [
      {
        url: "https://colab.research.google.com/github/saugatadk/YOLOv1-from-scratch/blob/main/train_colab.ipynb",
        label: "Colab Notebook",
        isExternal: true
      },
      {
        url: "https://github.com/saugatadk/YOLOv1-from-scratch",
        label: "GitHub",
        isCode: true
      }
    ]
  },
  {
    id: "prashna-ai",
    title: "PrashnaAI: Interview Practice Web App",
    image: prashnaImg,
    bullets: [
      "Captures browser microphone streams through the Web Audio API and evaluates candidate speech pacing, filler word frequency, and answer clarity using Gemini 1.5 Flash.",
      "A Node.js backend handles submission parsing and checks code time complexity before rendering review cards."
    ],
    tags: ["React", "Node.js", "Web Audio API", "Gemini API", "Vercel"],
    links: [
      {
        url: "https://prashnaai.vercel.app/",
        label: "Live Web App",
        isExternal: true
      },
      {
        url: "https://www.youtube.com/watch?v=0INC6zuoSXg",
        label: "Video Walkthrough",
        isVideo: true
      }
    ]
  }
];

export const alsoBuilt = [
  {
    title: "Transformer from Scratch",
    description:
      "Character-level GPT decoder (6 blocks, 6 attention heads, 384 embed dim) written in PyTorch on Tiny Shakespeare.",
    links: [
      {
        url: "https://github.com/saugatadk/Transformer-from-scratch",
        label: "GitHub"
      }
    ]
  },
  {
    title: "AI Book Recommender",
    description:
      "Mood-based semantic search interface using ChromaDB vector lookups and sentence-transformers.",
    links: [
      {
        url: "https://huggingface.co/spaces/saugatadk101/AI-Book-Recommender",
        label: "Hugging Face Space"
      },
      {
        url: "https://github.com/saugatadk/AI-Book-Recommender",
        label: "GitHub"
      }
    ]
  },
  {
    title: "Customer Segmentation",
    description:
      "Unsupervised clustering comparing WCSS elbow curves and silhouette scores across 4 customer segments in Scikit-Learn.",
    links: [
      {
        url: "https://github.com/saugatadk/Customer-Segmentation-using-K-Means-Clustering",
        label: "GitHub"
      }
    ]
  },
  {
    title: "Dino Runner",
    description:
      "2D infinite runner game engine built in C++ with raw OpenGL, custom GLSL shaders, and AABB collision math.",
    links: [
      {
        url: "https://github.com/saugatadk/Dino-Runner",
        label: "GitHub"
      }
    ]
  }
];

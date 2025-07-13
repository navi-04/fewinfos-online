// Site passcode for protected content
const sitePasscode = "FIW123";

// AI Tools Workshop Data
const aiToolsData = [
  {
    type: 1,
    level: 0,
    topic: "VIDEO - VEED",
    description:
      "An online video editing tool with AI features for subtitles, noise removal, and more.",
    link: "https://www.veed.io/",
    prompt:
      "Create a promotional video with subtitles and background music using AI.",
  },
  {
    type: 1,
    level: 1,
    topic: "VIDEO - PIXVERSE",
    description:
      "Convert a single image into animated video clips using AI-powered motion synthesis.",
    link: "https://www.pixverse.ai/",
    prompt: "Animate a portrait photo into a realistic head-turning video.",
  },
  {
    type: 1,
    level: 2,
    topic: "VIDEO - HEYGEN",
    description:
      "Create talking avatar videos using AI from text input and static images.",
    link: "https://www.heygen.com/",
    prompt: "Generate an avatar that introduces my company using the script.",
  },
  {
    type: 1,
    level: 3,
    topic: "VIDEO - ELEVENLABS",
    description:
      "AI voice generator that creates realistic voiceovers using text input.",
    link: "https://www.elevenlabs.io/",
    prompt:
      "Generate a voiceover in a calm male voice saying a 1-minute welcome speech.",
  },
  {
    type: 1,
    level: 4,
    topic: "AGENT - TASKADE",
    description:
      "Collaborative task manager with AI agents for task generation and automation.",
    link: "https://www.taskade.com/",
    prompt: "Create a weekly task planner for a web development project.",
  },
  {
    type: 1,
    level: 5,
    topic: "AI WEBINAR - MONICA",
    description:
      "AI assistant for summarizing emails, documents, and web pages in Chrome.",
    link: "https://monica.im/",
    prompt: "Summarize this PDF into key bullet points.",
  },
  {
    type: 1,
    level: 6,
    topic: "AI WEBINAR - TACTIQ",
    description:
      "Meeting summarizer that captures and transcribes Google Meet/Zoom calls.",
    link: "https://tactiq.io/",
    prompt: "Summarize the meeting into key takeaways.",
  },
  {
    type: 1,
    level: 7,
    topic: "AI WEBINAR - SLIDOR",
    description:
      "AI-powered tool for creating professional presentations quickly.",
    link: "https://www.slidor.com/",
    prompt: "Generate slides for an AI in Education topic.",
  },
  {
    type: 1,
    level: 8,
    topic: "AI WEBINAR - GRAMMARLY",
    description:
      "AI tool for grammar, spelling, and tone suggestions in real-time writing.",
    link: "https://www.grammarly.com/",
    prompt: "Check grammar and clarity for this email.",
  },
  {
    type: 1,
    level: 9,
    topic: "IMAGE - IMGGOOD",
    description: "Image enhancement and background removal tool powered by AI.",
    link: "https://imggood.com/",
    prompt: "Enhance this blurry image and remove its background.",
  },
  {
    type: 1,
    level: 10,
    topic: "IMAGE - OPENART",
    description:
      "Text-to-image AI tool for generating visual artwork and branding images.",
    link: "https://openart.ai/",
    prompt: "Generate an illustration for a tech conference poster.",
  },
  {
    type: 1,
    level: 11,
    topic: "IMAGE - IDEOGRAM",
    description: "AI image generator that turns ideas into visual concepts.",
    link: "https://ideogram.ai/",
    prompt: "Design a banner image showing futuristic education.",
  },
  {
    type: 1,
    level: 12,
    topic: "IMAGE - PLAYGROUND",
    description:
      "Playground for experimenting with AI-generated images and prompts.",
    link: "https://playground.com/",
    prompt: "Create a concept image of a floating AI city.",
  },
  {
    type: 1,
    level: 13,
    topic: "DAILY USE - ELSA",
    description: "AI-powered pronunciation coach to improve spoken English.",
    link: "https://elsaspeak.com/",
    prompt: "Practice saying 'Can I schedule a meeting?' with American accent.",
  },
  {
    type: 1,
    level: 14,
    topic: "SEARCH - PERPLEXITY",
    description:
      "AI-powered search assistant that provides cited answers to queries.",
    link: "https://www.perplexity.ai/",
    prompt: "Research the impact of AI on healthcare.",
  },
  {
    type: 1,
    level: 15,
    topic: "ML - TEACHABLE MACHINE",
    description:
      "Google's tool to train ML models with images, sound, or poses in browser.",
    link: "https://teachablemachine.withgoogle.com/",
    prompt: "Train a model to recognize three hand gestures.",
  },
  {
    type: 1,
    level: 16,
    topic: "ML - HUGGINGFACE",
    description:
      "A platform with ML models and datasets, enabling fast experimentation.",
    link: "https://huggingface.co/",
    prompt: "Use a pre-trained sentiment analysis model on a list of tweets.",
  },
  {
    type: 1,
    level: 17,
    topic: "WRITING TOOL - CHATSONIC",
    description:
      "Chat-based AI assistant that generates responses with internet access.",
    link: "https://writesonic.com/chat",
    prompt: "Write an article on benefits of renewable energy.",
  },
  {
    type: 1,
    level: 18,
    topic: "NOTES PURPOSE - GOOGLE NOTEBOOK LM",
    description:
      "AI-powered notebook that helps organize, summarize, and cite documents.",
    link: "https://notebooklm.google/",
    prompt: "Summarize this research paper into 5 key points.",
  },
  {
    type: 1,
    level: 19,
    topic: "NOTES PURPOSE - PAPERPAL",
    description:
      "AI assistant for academic writing, proofreading, and summarizing PDFs.",
    link: "https://paperpal.com/",
    prompt: "Summarize this uploaded PDF.",
  },
  {
    type: 1,
    level: 20,
    topic: "NOTES PURPOSE - NODEGPT",
    description: "Tool for uploading content and chatting with PDFs or notes.",
    link: "https://www.nodegpt.com/",
    prompt: "Extract FAQs from this handbook.",
  },
  {
    type: 1,
    level: 21,
    topic: "NOTES PURPOSE - GOOGLE AI STUDIO",
    description: "Google's IDE for prototyping AI apps and prompts.",
    link: "https://makersuite.google.com/",
    prompt: "Create a sentiment classification model.",
  },
  {
    type: 1,
    level: 22,
    topic: "NOTES PURPOSE - PHIND",
    description: "AI search engine for developers and technical documentation.",
    link: "https://www.phind.com/",
    prompt: "Summarize the working of JavaScript closures.",
  },
  {
    type: 1,
    level: 23,
    topic: "NOTES PURPOSE - ELICIT",
    description: "AI tool for literature review and research synthesis.",
    link: "https://elicit.org/",
    prompt: "Find studies on AI in mental health treatment.",
  },
  {
    type: 1,
    level: 24,
    topic: "DESIGN PURPOSE - CANVA",
    description:
      "Graphic design platform with AI-powered design and templates.",
    link: "https://www.canva.com/",
    prompt: "Design an Instagram post for product launch.",
  },
  {
    type: 1,
    level: 25,
    topic: "DESIGN PURPOSE - MICROSOFT DESIGNER",
    description:
      "AI graphic design tool to create social posts and visuals from prompts.",
    link: "https://designer.microsoft.com/",
    prompt: "Create a YouTube thumbnail for tech review video.",
  },
  {
    type: 1,
    level: 26,
    topic: "PPT - GAMMA",
    description:
      "AI tool for generating interactive presentations and documents.",
    link: "https://gamma.app/",
    prompt: "Create slides on future of AI in education.",
  },
  {
    type: 1,
    level: 27,
    topic: "PPT - GENSPARK",
    description:
      "Create presentation slides instantly using AI based on prompt.",
    link: "https://genspark.app/",
    prompt: "Make slides explaining Cloud Computing.",
  },
  {
    type: 1,
    level: 28,
    topic: "PPT - SLIDESCO",
    description:
      "Template platform for Google Slides & PowerPoint with AI search.",
    link: "https://slidesgo.com/",
    prompt: "Find templates for startup pitch deck.",
  },
  {
    type: 1,
    level: 29,
    topic: "WEBSITE - FRAMER",
    description:
      "AI-powered website builder for creating animated, responsive sites.",
    link: "https://www.framer.com/",
    prompt: "Build a portfolio website for a UX designer.",
  },
  {
    type: 1,
    level: 30,
    topic: "WEBSITE - DORA",
    description: "Visual design and animation tool for website building.",
    link: "https://www.dora.run/",
    prompt: "Create a landing page for a photography studio.",
  },
  {
    type: 1,
    level: 31,
    topic: "WEBSITE - SPLINE",
    description:
      "3D design tool to create interactive web graphics and animations.",
    link: "https://spline.design/",
    prompt: "Make a 3D animation of floating text on homepage.",
  },
  {
    type: 1,
    level: 32,
    topic: "TO DOWNLOAD WEBSITE - CLAUDE",
    description:
      "Advanced AI assistant for content generation and creative development.",
    link: "https://claude.ai/",
    prompt: "Write HTML + CSS for login form.",
  },
  {
    type: 1,
    level: 33,
    topic: "TO DOWNLOAD WEBSITE - LOVABLE",
    description: "AI website builder for modern portfolio and startup pages.",
    link: "https://lovable.dev/",
    prompt: "Generate a tech startup homepage with sections.",
  },
  {
    type: 1,
    level: 34,
    topic: "TO DOWNLOAD WEBSITE - BOLT.NEW",
    description: "Launch and publish projects quickly with AI-based templates.",
    link: "https://bolt.new/",
    prompt: "Generate a startup portfolio website layout.",
  },
  {
    type: 1,
    level: 35,
    topic: "TO DOWNLOAD WEBSITE - TRICKLE.AI",
    description:
      "AI-powered note and website organizer to publish personal knowledge.",
    link: "https://trickle.so/",
    prompt: "Create a micro-site from these study notes.",
  },
  {
    type: 1,
    level: 36,
    topic: "TO DOWNLOAD WEBSITE - REPLIT",
    description: "Collaborative browser-based IDE with AI tools.",
    link: "https://replit.com/",
    prompt: "Build a blog with Python and HTML.",
  },
  {
    type: 1,
    level: 37,
    topic: "TO DOWNLOAD WEBSITE - WEBDRAW",
    description: "No-code website builder with drag-drop design.",
    link: "https://webdraw.com/",
    prompt: "Design a job application portal UI.",
  },
  {
    type: 1,
    level: 38,
    topic: "USING TERMINAL - CURSOR",
    description: "AI-integrated code editor with terminal support.",
    link: "https://www.cursor.com/",
    prompt: "Create a CRUD app in Flask using SQLite.",
  },
  {
    type: 1,
    level: 39,
    topic: "MEETING - AUTHOR",
    description: "AI-based notetaker and meeting summarizer.",
    link: "https://www.authorea.com/",
    prompt: "Summarize today's Zoom meeting notes.",
  },
  {
    type: 1,
    level: 40,
    topic: "ARCHITECTURE DIAGRAM - ERASER.IO",
    description:
      "Whiteboard tool for drawing and sharing architecture diagrams.",
    link: "https://app.eraser.io/",
    prompt: "Design a microservice architecture for an e-commerce site.",
  },
  {
    type: 1,
    level: 41,
    topic: "ARCHITECTURE DIAGRAM - BOARDMIX",
    description:
      "Diagram tool for ER models, workflows and collaborative planning.",
    link: "https://www.boardmix.com/",
    prompt: "Create an ER diagram for library system.",
  },
  {
    type: 1,
    level: 42,
    topic: "CODING - CHATGPT",
    description: "Chat assistant that helps with coding tasks and concepts.",
    link: "https://chat.openai.com/",
    prompt: "Explain difference between class and struct in C++.",
  },
  {
    type: 1,
    level: 43,
    topic: "CODING - CLAUDE",
    description:
      "AI chatbot useful for coding, writing, and generating content.",
    link: "https://claude.ai/",
    prompt: "Write Python code for login system.",
  },
  {
    type: 1,
    level: 44,
    topic: "CODING - GEMINI",
    description: "Google AI tool for creative and code assistance.",
    link: "https://gemini.google.com/",
    prompt: "Explain React hooks with examples.",
  },
  {
    type: 1,
    level: 45,
    topic: "CODING - BLACKBOX AI",
    description: "Coding assistant offering intelligent code suggestions.",
    link: "https://www.blackbox.ai/",
    prompt: "Write a merge sort algorithm in Java.",
  },
];

// Sample data for events and gallery
const eventsData = [
  {
    id: 1,
    title: "AI Tools Workshop - Online Edition",
    date: "2025-07-13",
    location: "Online Event (Zoom)",
    description:
      "Master 46 cutting-edge AI tools for video editing, coding, website building, design, and productivity. From VEED to Cursor, learn hands-on techniques across video creation, AI webinars, image generation, and development tools. Includes live demos, practical exercises, and exclusive prompts.",
    status: "live",
    category: "workshop",
    isProtected: true,
    passcode: "FIW123",
    duration: "2 hours",
    instructor: "AI Expert Team",
    price: "₹99",
    tags: ["AI", "Programming", "Online", "Tools", "Workshop"],
    toolsCount: 46,
    aiToolsData: aiToolsData,
  },
  {
    id: 2,
    title: "AI Innovation Summit",
    date: "2025-05-16",
    location: "MKCE - Karur, India",
    description:
      "Explore the future of AI and machine learning with top experts and leaders. A comprehensive 3-day summit featuring keynote speakers, workshops, and networking opportunities with industry pioneers. Access exclusive AI tools showcase with 46 cutting-edge tools across video, coding, design, and productivity categories.",
    status: "completed",
    category: "summit",
    isProtected: true,
    passcode: "FIW251",
    duration: "3 days",
    eventDates: "MAY 14-16, 2025",
    tags: ["AI", "Innovation", "Summit", "Machine Learning", "Expert Talks"],
    toolsCount: 46,
    aiToolsData: aiToolsData,
  },
  {
    id: 3,
    title: "AI & Machine Learning Workshop",
    date: "2024-03-15",
    location: "Innovation Hub, Room 101",
    description:
      "Dive deep into the latest AI technologies and machine learning algorithms. Learn hands-on techniques from industry experts.",
    status: "upcoming",
    category: "workshop",
  },
  {
    id: 4,
    title: "Digital Marketing Strategies",
    date: "2024-03-22",
    location: "Virtual Event",
    description:
      "Explore cutting-edge digital marketing techniques and learn how to boost your online presence effectively.",
    status: "upcoming",
    category: "webinar",
  },
  {
    id: 5,
    title: "Startup Pitch Competition",
    date: "2024-04-05",
    location: "Main Auditorium",
    description:
      "Watch innovative startups pitch their ideas to a panel of expert investors and venture capitalists.",
    status: "upcoming",
    category: "competition",
  },
  {
    id: 6,
    title: "Web Development Bootcamp",
    date: "2024-02-28",
    location: "Tech Lab, Building A",
    description:
      "A comprehensive 3-day bootcamp covering modern web development technologies including React, Node.js, and more.",
    status: "completed",
    category: "workshop",
  },
  {
    id: 7,
    title: "Data Science Conference",
    date: "2024-02-15",
    location: "Conference Center",
    description:
      "Leading data scientists shared insights on big data, analytics, and predictive modeling techniques.",
    status: "completed",
    category: "conference",
  },
  {
    id: 8,
    title: "Cybersecurity Essentials",
    date: "2024-01-20",
    location: "Virtual Event",
    description:
      "Learn about the latest cybersecurity threats and how to protect your digital assets effectively.",
    status: "completed",
    category: "webinar",
  },
];

const galleryData = [
  {
    id: 1,
    src: "images/1.jpg",
    caption:
      "AI Innovation Summit 2025 - Keynote presentation at MKCE Karur featuring industry leaders discussing the future of AI",
    tags: ["2025", "summits", "ai", "innovation"],
    year: "2025",
  },
  {
    id: 3,
    src: "images/3.jpg",
    caption: "Team Collaboration Session - Innovation Hub",
    tags: ["2024", "workshops", "collaboration"],
    year: "2024",
  },
  {
    id: 4,
    src: "images/4.jpg",
    caption: "Digital Marketing Webinar - Guest Speaker Presentation",
    tags: ["2024", "webinars", "marketing"],
    year: "2024",
  },
  {
    id: 5,
    src: "images/5.jpg",
    caption: "Startup Pitch Competition - Finalist Presentations",
    tags: ["2023", "competitions", "startups"],
    year: "2023",
  },
  {
    id: 6,
    src: "images/6.jpg",
    caption: "Web Development Bootcamp - Coding Session",
    tags: ["2023", "workshops", "coding"],
    year: "2023",
  },
  {
    id: 7,
    src: "images/7.jpg",
    caption: "Data Science Conference - Keynote Speaker",
    tags: ["2023", "conferences", "data-science"],
    year: "2023",
  },
  {
    id: 8,
    src: "images/8.jpg",
    caption: "Cybersecurity Workshop - Hands-on Training",
    tags: ["2023", "workshops", "cybersecurity"],
    year: "2023",
  },
  {
    id: 9,
    src: "images/9.jpg",
    caption: "Innovation Showcase - Product Demonstrations",
    tags: ["2024", "showcases", "innovation"],
    year: "2024",
  },
  {
    id: 10,
    src: "images/10.jpg",
    caption: "Networking Event - Industry Professionals",
    tags: ["2024", "networking", "professionals"],
    year: "2024",
  },
  {
    id: 11,
    src: "images/11.jpg",
    caption: "Tech Talk Series - Cloud Computing",
    tags: ["2023", "webinars", "cloud"],
    year: "2023",
  }
];

// Contact information
const contactInfo = {
  email: "info@fewinfos.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Innovation Street",
    city: "Tech City",
    state: "TC",
    zip: "12345",
  },
  social: {
    facebook: "https://facebook.com/fewinfos",
    twitter: "https://twitter.com/fewinfos",
    linkedin: "https://linkedin.com/company/fewinfos",
    instagram: "https://instagram.com/fewinfos",
  },
};

// Helper function to format dates
function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Helper function to check if event is upcoming
function isUpcoming(dateString) {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate >= today;
}

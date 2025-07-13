// Site passcode for protected content
const sitePasscode = "FIW123";

// AI Tools Workshop Data
const aiToolsData = [
  // 0–8: WEBSITE CREATION TOOLS
  {
    type: 0,
    level: 0,
    topic: "WEBSITE - FRAMER",
    description: "AI-powered website builder for creating animated, responsive sites.",
    link: "https://www.framer.com/",
    prompt: "Build a portfolio website for a UX designer."
  },
  {
    type: 0,
    level: 1,
    topic: "WEBSITE - DORA",
    description: "Visual design and animation tool for website building.",
    link: "https://www.dora.run/",
    prompt: "Create a landing page for a photography studio."
  },
  {
    type: 0,
    level: 2,
    topic: "WEBSITE - SPLINE",
    description: "3D design tool to create interactive web graphics and animations.",
    link: "https://spline.design/",
    prompt: "Make a 3D animation of floating text on homepage."
  },
  {
    type: 0,
    level: 3,
    topic: "WEBSITE - CLAUDE",
    description: "Advanced AI assistant for content generation and creative development.",
    link: "https://claude.ai/",
    prompt: "Write HTML + CSS for login form."
  },
  {
    type: 0,
    level: 4,
    topic: "WEBSITE - LOVABLE",
    description: "AI website builder for modern portfolio and startup pages.",
    link: "https://lovable.dev/",
    prompt: "Generate a tech startup homepage with sections."
  },
  {
    type: 0,
    level: 5,
    topic: "WEBSITE - BOLT.NEW",
    description: "Launch and publish projects quickly with AI-based templates.",
    link: "https://bolt.new/",
    prompt: "Generate a startup portfolio website layout."
  },
  {
    type: 0,
    level: 6,
    topic: "WEBSITE - TRICKLE.AI",
    description: "AI-powered note and website organizer to publish personal knowledge.",
    link: "https://trickle.so/",
    prompt: "Create a micro-site from these study notes."
  },
  {
    type: 0,
    level: 7,
    topic: "WEBSITE - REPLIT",
    description: "Collaborative browser-based IDE with AI tools.",
    link: "https://replit.com/",
    prompt: "Build a blog with Python and HTML."
  },
  {
    type: 0,
    level: 8,
    topic: "WEBSITE - WEBDRAW",
    description: "No-code website builder with drag-drop design.",
    link: "https://webdraw.com/",
    prompt: "Design a job application portal UI."
  },

  // 9–12: VIDEO TOOLS
  {
    type: 1,
    level: 9,
    topic: "VIDEO - VEED",
    description: "An online video editing tool with AI features for subtitles, noise removal, and more.",
    link: "https://www.veed.io/",
    prompt: "Create a promotional video with subtitles and background music using AI."
  },
  {
    type: 1,
    level: 10,
    topic: "VIDEO - PIXVERSE",
    description: "Convert a single image into animated video clips using AI-powered motion synthesis.",
    link: "https://www.pixverse.ai/",
    prompt: "Animate a portrait photo into a realistic head-turning video."
  },
  {
    type: 1,
    level: 11,
    topic: "VIDEO - HEYGEN",
    description: "Create talking avatar videos using AI from text input and static images.",
    link: "https://www.heygen.com/",
    prompt: "Generate an avatar that introduces my company using the script."
  },
  {
    type: 1,
    level: 12,
    topic: "VIDEO - ELEVENLABS",
    description: "AI voice generator that creates realistic voiceovers using text input.",
    link: "https://www.elevenlabs.io/",
    prompt: "Generate a voiceover in a calm male voice saying a 1-minute welcome speech."
  },

  // 13: AGENT TOOL
  {
    type: 1,
    level: 13,
    topic: "AGENT - TASKADE",
    description: "Collaborative task manager with AI agents for task generation and automation.",
    link: "https://www.taskade.com/",
    prompt: "Create a weekly task planner for a web development project."
  },
  

  // 14–16: EXTENSIONS
  {
    type: 3,
    level: 14,
    topic: "EXTENSION - MONICA",
    description: "AI assistant for summarizing emails, documents, and web pages in Chrome.",
    link: "https://monica.im/",
    prompt: "Summarize this PDF into key bullet points."
  },
  {
    type: 3,
    level: 15,
    topic: "EXTENSION - TACTIQ",
    description: "Meeting summarizer that captures and transcribes Google Meet/Zoom calls.",
    link: "https://tactiq.io/",
    prompt: "Summarize the meeting into key takeaways."
  },
  {
    type: 3,
    level: 16,
    topic: "EXTENSION - SIDER",
    description: "AI-powered Chrome extension with a sidebar that lets you chat with multiple AI models, generate presentations, summarize content, translate, and interact with files.",
    link: "https://sider.ai/",
    prompt: "Generate slides for the topic 'AI in Education'."
  },

  // 17–45: REMAINING TOOLS
  {
    type: 4,
    level: 17,
    topic: "WRITING TOOL - GRAMMARLY",
    description: "AI tool for grammar, spelling, and tone suggestions in real-time writing.",
    link: "https://www.grammarly.com/",
    prompt: "Check grammar and clarity for this email."
  },
  {
    type: 5,
    level: 18,
    topic: "IMAGE - IMGGOOD",
    description: "Image enhancement and background removal tool powered by AI.",
    link: "https://imggood.com/",
    prompt: "Enhance this blurry image and remove its background."
  },
  {
    type: 5,
    level: 19,
    topic: "IMAGE - OPENART",
    description: "Text-to-image AI tool for generating visual artwork and branding images.",
    link: "https://openart.ai/",
    prompt: "Generate an illustration for a tech conference poster."
  },
  {
    type: 5,
    level: 20,
    topic: "IMAGE - IDEOGRAM",
    description: "AI image generator that turns ideas into visual concepts.",
    link: "https://ideogram.ai/",
    prompt: "Design a banner image showing futuristic education."
  },
  {
    type: 5,
    level: 21,
    topic: "IMAGE - PLAYGROUND",
    description: "Playground for experimenting with AI-generated images and prompts.",
    link: "https://playground.com/",
    prompt: "Create a concept image of a floating AI city."
  },
  {
    type: 6,
    level: 22,
    topic: "DAILY USE - ELSA",
    description: "AI-powered pronunciation coach to improve spoken English.",
    link: "https://elsaspeak.com/",
    prompt: "Practice saying 'Can I schedule a meeting?' with American accent."
  },
  {
    type: 7,
    level: 23,
    topic: "SEARCH - PERPLEXITY",
    description: "AI-powered search assistant that provides cited answers to queries.",
    link: "https://www.perplexity.ai/",
    prompt: "Research the impact of AI on healthcare."
  },
  {
    type: 8,
    level: 24,
    topic: "ML - TEACHABLE MACHINE",
    description: "Google's tool to train ML models with images, sound, or poses in browser.",
    link: "https://teachablemachine.withgoogle.com/",
    prompt: "Train a model to recognize three hand gestures."
  },
  {
    type: 8,
    level: 25,
    topic: "ML - HUGGINGFACE",
    description: "A platform with ML models and datasets, enabling fast experimentation.",
    link: "https://huggingface.co/",
    prompt: "Use a pre-trained sentiment analysis model on a list of tweets."
  },
  {
    type: 4,
    level: 26,
    topic: "WRITING TOOL - CHATSONIC",
    description: "Chat-based AI assistant that generates responses with internet access.",
    link: "https://writesonic.com/chat",
    prompt: "Write an article on benefits of renewable energy."
  },
  {
    type: 9,
    level: 27,
    topic: "NOTES PURPOSE - GOOGLE NOTEBOOK LM",
    description: "AI-powered notebook that helps organize, summarize, and cite documents.",
    link: "https://notebooklm.google/",
    prompt: "Summarize this research paper into 5 key points."
  },
  {
    type: 9,
    level: 28,
    topic: "NOTES PURPOSE - PAPERPAL",
    description: "AI assistant for academic writing, proofreading, and summarizing PDFs.",
    link: "https://paperpal.com/",
    prompt: "Summarize this uploaded PDF."
  },
  {
    type: 9,
    level: 29,
    topic: "NOTES PURPOSE - NODEGPT",
    description: "Tool for uploading content and chatting with PDFs or notes.",
    link: "https://notegpt.io/",
    prompt: "Extract FAQs from this handbook."
  },
  {
    type: 9,
    level: 30,
    topic: "NOTES PURPOSE - GOOGLE AI STUDIO",
    description: "Google's IDE for prototyping AI apps and prompts.",
    link: "https://makersuite.google.com/",
    prompt: "Create a sentiment classification model."
  },
  {
    type: 9,
    level: 31,
    topic: "NOTES PURPOSE - PHIND",
    description: "AI search engine for developers and technical documentation.",
    link: "https://www.phind.com/",
    prompt: "Summarize the working of JavaScript closures."
  },
  {
    type: 9,
    level: 32,
    topic: "NOTES PURPOSE - ELICIT",
    description: "AI tool for literature review and research synthesis.",
    link: "https://elicit.org/",
    prompt: "Find studies on AI in mental health treatment."
  },
  {
    type: 10,
    level: 33,
    topic: "DESIGN PURPOSE - CANVA",
    description: "Graphic design platform with AI-powered design and templates.",
    link: "https://www.canva.com/",
    prompt: "Design an Instagram post for product launch."
  },
  {
    type: 10,
    level: 34,
    topic: "DESIGN PURPOSE - MICROSOFT DESIGNER",
    description: "AI graphic design tool to create social posts and visuals from prompts.",
    link: "https://designer.microsoft.com/",
    prompt: "Create a YouTube thumbnail for tech review video."
  },
  {
    type: 11,
    level: 35,
    topic: "PPT - GAMMA",
    description: "AI tool for generating interactive presentations and documents.",
    link: "https://gamma.app/",
    prompt: "Create slides on future of AI in education."
  },
  {
    type: 11,
    level: 36,
    topic: "PPT - GENSPARK",
    description: "Create presentation slides instantly using AI based on prompt.",
    link: "https://www.genspark.ai/",
    prompt: "Make slides explaining Cloud Computing."
  },
  {
    type: 11,
    level: 37,
    topic: "PPT - SLIDESCO",
    description: "Template platform for Google Slides & PowerPoint with AI search.",
    link: "https://slidesgo.com/",
    prompt: "Find templates for startup pitch deck."
  },
  {
    type: 12,
    level: 38,
    topic: "USING TERMINAL - CURSOR",
    description: "AI-integrated code editor with terminal support.",
    link: "https://www.cursor.com/",
    prompt: "Create a CRUD app in Flask using SQLite."
  },
  {
    type: 13,
    level: 39,
    topic: "ARCHITECTURE DIAGRAM - ERASER.IO",
    description: "Whiteboard tool for drawing and sharing architecture diagrams.",
    link: "https://app.eraser.io/",
    prompt: "Design a microservice architecture for an e-commerce site."
  },
  {
    type: 13,
    level: 40,
    topic: "ARCHITECTURE DIAGRAM - BOARDMIX",
    description: "Diagram tool for ER models, workflows and collaborative planning.",
    link: "https://www.boardmix.com/",
    prompt: "Create an ER diagram for library system."
  },
  {
    type: 14,
    level: 41,
    topic: "CODING - CHATGPT",
    description: "Chat assistant that helps with coding tasks and concepts.",
    link: "https://chat.openai.com/",
    prompt: "Explain difference between class and struct in C++."
  },
  {
    type: 14,
    level: 42,
    topic: "CODING - CLAUDE",
    description: "AI chatbot useful for coding, writing, and generating content.",
    link: "https://claude.ai/",
    prompt: "Write Python code for login system."
  },
  {
    type: 14,
    level: 43,
    topic: "CODING - GEMINI",
    description: "Google AI tool for creative and code assistance.",
    link: "https://gemini.google.com/",
    prompt: "Explain React hooks with examples."
  },
  {
    type: 14,
    level: 44,
    topic: "CODING - BLACKBOX AI",
    description: "Coding assistant offering intelligent code suggestions.",
    link: "https://www.blackbox.ai/",
    prompt: "Write a merge sort algorithm in Java."
  },
  {
    type: 15,
    level: 45,
    topic: "RESUME - GORESUME",
    description: "AI-powered resume builder to create ATS-friendly, professional resumes in minutes.",
    link: "https://goresume.io/",
    prompt: "Create a resume for a Computer Science student with internship experience."
  },
  {
    type: 16,
    level: 46,
    topic: "BRANDING - BRANDMARK",
    description: "AI logo and branding generator that designs logos, color palettes, and business assets.",
    link: "https://app.brandmark.io/",
    prompt: "Generate a logo and brand kit for a tech startup called 'Fewinfos'."
  }

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
  {
    id: 9,
    title: "Advanced AI Prompt Engineering Masterclass",
    date: "2025-07-13",
    location: "Online Event (Microsoft Teams)",
    description:
      "Become an expert in crafting effective prompts for 32 popular AI models including GPT-4, Claude, Midjourney, and DALL-E 3. Learn advanced techniques for context management, chain-of-thought reasoning, and specialized outputs across text, code, and image generation. Includes personalized feedback, optimization strategies, and industry-specific templates.",
    status: "live",
    category: "workshop",
    isProtected: true,
    passcode: "FIW245",
    duration: "3 hours",
    instructor: "Dr. Maya Rodriguez",
    price: "₹149",
    tags: ["AI", "Prompt Engineering", "Online", "GPT", "Workshop"],
    toolsCount: 32,
    aiToolsData: aiToolsData,
},
{
    id: 10,
    title: "AI for Business Analytics Bootcamp",
    date: "2025-097-13",
    location: "Online Event (Zoom)",
    description:
      "Transform your business data into actionable insights with 28 cutting-edge AI analytics tools. From predictive modeling to automated reporting, learn how to implement AI-powered dashboards, natural language querying, and anomaly detection systems. Features hands-on sessions with real business datasets, ROI calculation frameworks, and integration strategies for popular business intelligence platforms.",
    status: "live",
    category: "bootcamp",
    isProtected: true,
    passcode: "FIW367",
    duration: "4 hours (2 sessions)",
    instructor: "Business Intelligence Team",
    price: "₹199",
    tags: ["AI", "Business Analytics", "Data", "Online", "Bootcamp"],
    toolsCount: 28,
    aiToolsData: aiToolsData,
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

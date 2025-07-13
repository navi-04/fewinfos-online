// Site passcode for protected content
const sitePasscode = "FIW123";

// AI Tools Workshop Data
const aiToolsData = [];



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

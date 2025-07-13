// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "#ffffff";
    header.style.backdropFilter = "none";
  }
});

// Events page functionality
if (
  document.getElementById("eventsGrid") ||
  document.getElementById("live-events")
) {
  let currentFilter = "all";

  function renderEvents(filter = "all") {
    const eventsGrid = document.getElementById("eventsGrid");
    let filteredEvents = eventsData;

    if (filter === "upcoming") {
      filteredEvents = eventsData.filter((event) => isUpcoming(event.date));
    } else if (filter === "completed") {
      filteredEvents = eventsData.filter((event) => !isUpcoming(event.date));
    }

    if (eventsGrid) {
      eventsGrid.innerHTML = "";

      filteredEvents.forEach((event, index) => {
        const eventCard = document.createElement("div");
        eventCard.className = "event-card";
        eventCard.setAttribute("data-aos", "fade-up");
        eventCard.setAttribute("data-aos-delay", (index * 100).toString());

        eventCard.innerHTML = `
                <h3 class="event-title">${event.title}</h3>
                <p class="event-date">${formatDate(event.date)}</p>
                <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${
                  event.location
                }</p>
                <p class="event-description">${event.description}</p>
                ${
                  event.isProtected
                    ? `
                  <div class="ai-tools-preview">
                    <h4>🤖 AI Tools Archive <span class="tools-count">${event.toolsCount} Tools</span></h4>
                    <p>Access exclusive AI tools showcase from this premium event</p>
                  </div>
                `
                    : ""
                }
                <button class="register-btn" onclick="handleRegistration(${
                  event.id
                })">${
          event.isProtected
            ? "🔐 Access Archive (Password Required)"
            : isUpcoming(event.date)
            ? "Register Now"
            : "View Details"
        }</button>
            `;

        eventsGrid.appendChild(eventCard);
      });

      // Refresh AOS after dynamic content
      AOS.refresh();
    }
  }

  // Filter button functionality
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filter = this.getAttribute("data-filter");
      currentFilter = filter;

      // Render filtered events
      renderEvents(filter);
    });
  }); // Initial render
  renderEvents();

  // Global functions for password protection and AI tools
  window.handleRegistration = function (eventId) {
    console.log("🔐 Enhanced handleRegistration called for event:", eventId);

    // For AI Tools Workshop (eventId = 1) and AI Innovation Summit (eventId = 2), show password modal
    if (eventId === 1 || eventId === 2) {
      showPasswordModal(eventId);
    } else {
      // Regular registration for other events
      if (confirm("Would you like to register for this event?")) {
        alert(
          "Registration successful! You will receive a confirmation email shortly."
        );
      }
    }
  };

  window.showPasswordModal = function (eventId = 1) {
    console.log("🔒 Showing password modal for event:", eventId);

    // Get event details
    const event = eventsData.find((e) => e.id === eventId);
    const eventTitle = event ? event.title : "AI Tools Workshop";
    const eventPasscode = event ? event.passcode : sitePasscode;
    const eventDate = event
      ? event.eventDates || formatDate(event.date)
      : "July 13, 2025";
    const eventStatus =
      event && event.status === "completed" ? "COMPLETED EVENT" : "LIVE EVENT";

    const modal = document.createElement("div");
    modal.className = "password-modal";
    modal.id = "passwordModal";
    modal.innerHTML = `
        <div class="password-modal-content">
            <h3>🔐 ${eventTitle} Access</h3>
            <div class="live-badge" style="margin-bottom: 1rem;">${
              eventStatus === "COMPLETED EVENT" ? "✅" : "🔴"
            } ${eventStatus} - ${eventDate}</div>
            <p>This is a premium AI event. Please enter the access code to view all 19 AI tools.</p>
            <div class="password-input-group">
                <input type="password" class="password-input" placeholder="Enter access code" maxlength="10" id="passwordField">
                <span class="password-hint">💡 Hint: ${eventPasscode}</span>
            </div>
            <div class="error-message" id="errorMessage">❌ Incorrect passcode. Please try again.</div>
            <div class="button-group">
                <button class="password-submit" id="submitPassword">🚀 Access ${
                  eventStatus === "COMPLETED EVENT" ? "Archive" : "Workshop"
                }</button>
                <button class="password-cancel" id="cancelPassword">❌ Cancel</button>
            </div>
            <div class="workshop-info">
                <p><strong>What you'll get access to:</strong></p>
                <ul>
                    <li>19 Premium AI Tools</li>
                    <li>Sample Prompts for each tool</li>
                    <li>Direct links to try tools</li>
                    <li>Expert recommendations</li>
                    ${
                      eventStatus === "COMPLETED EVENT"
                        ? "<li>Summit highlights and insights</li>"
                        : "<li>Live session recordings</li>"
                    }
                </ul>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    const passwordInput = document.getElementById("passwordField");
    const submitBtn = document.getElementById("submitPassword");
    const cancelBtn = document.getElementById("cancelPassword");
    const errorMsg = document.getElementById("errorMessage");

    passwordInput.focus();

    function closeModal() {
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
        document.body.style.overflow = "auto";
      }
    }

    function checkPassword() {
      const enteredPassword = passwordInput.value.trim();
      console.log("🔍 Checking password:", enteredPassword);

      if (enteredPassword === eventPasscode) {
        console.log("✅ Password correct!");
        closeModal();

        // Show success message
        setTimeout(() => {
          showSuccessNotification();
          // Redirect to AI tools page instead of modal
          window.location.href = "ai-tools.html";
        }, 300);
      } else {
        console.log("❌ Password incorrect");
        errorMsg.style.display = "block";
        passwordInput.value = "";
        passwordInput.focus();
        passwordInput.style.borderColor = "#ff4757";

        setTimeout(() => {
          errorMsg.style.display = "none";
          passwordInput.style.borderColor = "#F5F5F5";
        }, 3000);
      }
    }

    submitBtn.addEventListener("click", checkPassword);
    cancelBtn.addEventListener("click", closeModal);

    // Handle Enter key press
    passwordInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        checkPassword();
      }
    });

    // Close on outside click
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  };

  // Success notification function
  function showSuccessNotification() {
    const successDiv = document.createElement("div");
    successDiv.className = "success-notification";
    successDiv.innerHTML = `
      <div class="success-content">
        <i class="fas fa-check-circle"></i>
        <div>
          <h4>Welcome to AI Tools Workshop!</h4>
          <p>Access granted. Explore 19 cutting-edge AI tools.</p>
        </div>
      </div>
    `;

    document.body.appendChild(successDiv);

    setTimeout(() => {
      if (document.body.contains(successDiv)) {
        document.body.removeChild(successDiv);
      }
    }, 3000);
  }

  // Error notification function
  function showErrorNotification(message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-notification";
    errorDiv.innerHTML = `
      <div class="error-content">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <h4>Error</h4>
          <p>${message}</p>
        </div>
      </div>
    `;

    document.body.appendChild(errorDiv);

    setTimeout(() => {
      if (document.body.contains(errorDiv)) {
        document.body.removeChild(errorDiv);
      }
    }, 3000);
  }

  // Enhanced AI Tools Modal for Live Event (Override previous version)
  window.showAIToolsModal = function (eventId) {
    console.log("🔧 Enhanced showAIToolsModal called with eventId:", eventId);

    // Use the global aiToolsData directly for AI Tools Workshop
    let toolsToShow = aiToolsData;
    let eventTitle = "AI Tools Workshop - Live Event";

    if (!toolsToShow || toolsToShow.length === 0) {
      console.error("❌ No AI tools data available");
      showErrorNotification(
        "No AI tools data available! Please check data.js file."
      );
      return;
    }

    console.log("✅ AI Tools Data loaded:", toolsToShow.length, "tools");

    const modal = document.createElement("div");
    modal.className = "ai-tools-modal";
    modal.id = "aiToolsModal";

    const toolsHtml = toolsToShow
      .map((tool, index) => {
        if (tool.type === 2) {
          // Type 2 tools (content only - like GitHub Copilot)
          return `
                <div class="ai-tool-card" data-level="${tool.level}">
                    <span class="ai-tool-level">Level ${tool.level}</span>
                    <h4 class="ai-tool-title">${tool.topic}</h4>
                    <p class="ai-tool-description">${tool.content}</p>
                    <div class="ai-tool-type">📝 Information Tool</div>
                </div>
            `;
        } else {
          // Type 1 tools (with links and prompts)
          return `
                <div class="ai-tool-card" data-level="${tool.level}">
                    <span class="ai-tool-level">Level ${tool.level}</span>
                    <h4 class="ai-tool-title">${tool.topic}</h4>
                    <p class="ai-tool-description">${tool.description}</p>
                    ${
                      tool.prompt
                        ? `
                        <div class="ai-tool-prompt">
                            <strong>💡 Sample Prompt:</strong><br>
                            <em>"${tool.prompt}"</em>
                        </div>
                    `
                        : ""
                    }
                    ${
                      tool.link
                        ? `
                        <div class="ai-tool-actions">
                            <a href="${tool.link}" target="_blank" class="ai-tool-link">
                                🚀 Try Now <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    `
                        : ""
                    }
                </div>
            `;
        }
      })
      .join("");

    modal.innerHTML = `
        <div class="ai-tools-modal-content">
            <span class="close-ai-modal" title="Close">&times;</span>
            <div class="modal-header">
                <h2 style="color: #003366; margin-bottom: 0.5rem;">🤖 ${eventTitle}</h2>
                <div class="live-badge">🔴 LIVE EVENT - July 13, 2025</div>
                <p style="color: #666; margin-bottom: 2rem;">
                    Master <strong>${toolsToShow.length}</strong> cutting-edge AI tools in this comprehensive workshop.
                    Each tool includes detailed descriptions, sample prompts, and direct access links.
                </p>
            </div>
            <div class="ai-tools-grid">
                ${toolsHtml}
            </div>
            <div class="modal-footer">
                <p style="text-align: center; color: #666; margin-top: 2rem;">
                    🎯 <strong>Workshop Price:</strong> ₹999 | 📅 <strong>Duration:</strong> 6 hours | 👨‍🏫 <strong>Instructor:</strong> AI Expert Team
                </p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    console.log("✅ AI Tools Modal displayed successfully");

    // Close button functionality
    const closeBtn = modal.querySelector(".close-ai-modal");
    closeBtn.addEventListener("click", function () {
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
        document.body.style.overflow = "auto";
      }
    });

    // Click outside to close
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        if (document.body.contains(modal)) {
          document.body.removeChild(modal);
          document.body.style.overflow = "auto";
        }
      }
    });

    // Escape key to close
    const escapeHandler = function (e) {
      if (e.key === "Escape") {
        if (document.body.contains(modal)) {
          document.body.removeChild(modal);
          document.body.style.overflow = "auto";
        }
        document.removeEventListener("keydown", escapeHandler);
      }
    };
    document.addEventListener("keydown", escapeHandler);
  };
}

// Gallery page functionality
if (document.getElementById("galleryGrid")) {
  let currentTag = "all";

  function renderGallery(tag = "all") {
    const galleryGrid = document.getElementById("galleryGrid");
    let filteredGallery = galleryData;

    if (tag !== "all") {
      filteredGallery = galleryData.filter((item) => item.tags.includes(tag));
    }

    galleryGrid.innerHTML = "";

    filteredGallery.forEach((item, index) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.setAttribute("data-aos", "fade-up");
      galleryItem.setAttribute("data-aos-delay", (index * 100).toString());

      galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.caption}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            `;

      // Add click event for lightbox
      galleryItem.addEventListener("click", () => openLightbox(item));

      galleryGrid.appendChild(galleryItem);
    });

    // Refresh AOS after dynamic content
    AOS.refresh();
  }

  // Tag filter functionality
  document.querySelectorAll(".tag-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      document
        .querySelectorAll(".tag-btn")
        .forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Get tag value
      const tag = this.getAttribute("data-tag");
      currentTag = tag;

      // Render filtered gallery
      renderGallery(tag);
    });
  });

  // Lightbox functionality
  function openLightbox(item) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");

    lightboxImage.src = item.src.replace("w=500&h=300", "w=1200&h=800");
    lightboxCaption.textContent = item.caption;
    lightbox.style.display = "flex";

    // Prevent body scroll
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Close lightbox events
  document
    .querySelector(".close-lightbox")
    .addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox();
    }
  });

  // Close lightbox with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  // Initial render
  renderGallery();
}

// Contact form functionality
if (document.getElementById("contactForm")) {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Simple validation
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Simulate form submission
      const submitBtn = this.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for your message! We'll get back to you soon.");
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// CTA button functionality (View Upcoming Events)
document.querySelectorAll(".cta-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    window.location.href = "events.html";
  });
});

// Join Us button functionality
document.querySelectorAll(".join-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    window.location.href = "contact.html";
  });
});

// Register button functionality
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("register-btn")) {
    // Simulate registration process
    const isUpcoming = e.target.textContent.includes("Register");
    if (isUpcoming) {
      if (confirm("Would you like to register for this event?")) {
        alert(
          "Registration successful! You will receive a confirmation email shortly."
        );
      }
    } else {
      alert(
        "This event has already taken place. Check out our upcoming events!"
      );
    }
  }
});

// Add loading animation for images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('img[loading="lazy"]');

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease";
  });
});

// Responsive navigation menu toggle (for mobile)
function createMobileMenu() {
  const header = document.querySelector(".header .container");
  const nav = document.querySelector(".nav");

  // Only add mobile menu on smaller screens
  if (window.innerWidth <= 768) {
    if (!document.querySelector(".mobile-menu-btn")) {
      const mobileMenuBtn = document.createElement("button");
      mobileMenuBtn.className = "mobile-menu-btn";
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      mobileMenuBtn.style.cssText = `
                display: block;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #003366;
                cursor: pointer;
                order: 3;
            `;

      header.appendChild(mobileMenuBtn);

      mobileMenuBtn.addEventListener("click", function () {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
      });
    }
  }
}

// Initialize mobile menu
window.addEventListener("resize", createMobileMenu);
createMobileMenu();

// Add some interactive effects
document.addEventListener("mousemove", function (e) {
  const cards = document.querySelectorAll(".event-card, .gallery-item");

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    } else {
      card.style.transform = "";
    }
  });
});

// Reset card transforms when mouse leaves
document.addEventListener("mouseleave", function () {
  const cards = document.querySelectorAll(".event-card, .gallery-item");
  cards.forEach((card) => {
    card.style.transform = "";
  });
});

// Tab functionality - Updated for events.html compatibility
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Only initialize tabs if they exist (events.html page)
  if (tabButtons.length > 0) {
    // Tab switching functionality
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");

        // Remove active class from all tabs and contents
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Add active class to clicked tab and corresponding content
        button.classList.add("active");
        const targetContent = document.getElementById(targetTab + "-tab");
        if (targetContent) {
          targetContent.classList.add("active");
        }

        // Populate events based on selected tab
        populateEvents(targetTab);
      });
    });

    // Initialize with live events
    populateEvents("live");
  }

  // Initialize old events page if eventsGrid exists
  if (document.getElementById("eventsGrid") && !tabButtons.length) {
    renderEvents();
  }

  // Initialize AOS if available
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }
});

// Function to populate events based on tab
function populateEvents(tabType) {
  const container = document.getElementById(tabType + "-events");
  if (!container) return;

  // Clear existing content
  container.innerHTML = "";

  // Get events based on type
  let events = [];

  if (typeof eventsData !== "undefined") {
    switch (tabType) {
      case "live":
        events = eventsData.filter((event) => event.status === "live");
        break;
      case "upcoming":
        events = eventsData.filter((event) => event.status === "upcoming");
        break;
      case "completed":
        events = eventsData.filter((event) => event.status === "completed");
        break;
      case "all":
      default:
        events = eventsData;
        break;
    }
  } else {
    // Fallback sample data if eventsData is not available
    events = getSampleEvents(tabType);
  }

  if (events.length === 0) {
    showEmptyState(container, tabType);
    return;
  }

  // Create event cards
  events.forEach((event, index) => {
    const eventCard = createEventCard(event, index);
    container.appendChild(eventCard);
  });
}

// Function to create event card
function createEventCard(event, index) {
  const card = document.createElement("div");
  card.className = "event-card";
  card.style.animationDelay = `${index * 0.1}s`;

  const statusClass = event.status || "upcoming";
  const statusText = statusClass.charAt(0).toUpperCase() + statusClass.slice(1);

  // Add status data attribute for CSS animations
  card.setAttribute("data-status", statusClass);

  // Create action button based on event type
  let actionButton = "";
  if (event.isProtected) {
    actionButton = `<button class="workshop-btn" onclick="handleRegistration(${event.id})">🔐 Access Workshop</button>`;
  } else if (event.link) {
    actionButton = `<button class="workshop-btn" onclick="window.open('${event.link}', '_blank')">Join Event</button>`;
  } else {
    actionButton = `<button class="workshop-btn" onclick="handleRegistration(${
      event.id
    })">
      ${statusClass === "upcoming" ? "Register Now" : "View Details"}
    </button>`;
  }

  card.innerHTML = `
        ${
          event.image
            ? `<img src="${event.image}" alt="${event.title}" class="event-image">`
            : ""
        }
        <div class="event-info">
            <h3 class="event-title">${event.title}</h3>
            <p class="event-description">${
              event.description || "Join us for an amazing event experience."
            }</p>
            ${
              event.isProtected
                ? `
              <div class="ai-tools-preview">
                <h4>🤖 AI Tools Archive <span class="tools-count">${
                  event.toolsCount || 46
                } Tools</span></h4>
                <p>Access exclusive AI tools showcase from this premium event</p>
              </div>
            `
                : ""
            }
            <div class="event-meta">
                <span class="event-date">
                    <i class="fas fa-calendar-alt"></i> ${event.date || "TBA"}
                </span>
                <span class="event-status ${statusClass}">${statusText}</span>
            </div>
            ${actionButton}
        </div>
    `;

  return card;
}

// Function to show empty state
function showEmptyState(container, tabType) {
  const emptyState = document.createElement("div");
  emptyState.className = "empty-state";

  let icon, title, message;

  switch (tabType) {
    case "live":
      icon = "fas fa-broadcast-tower";
      title = "No Live Events";
      message =
        "There are currently no live events. Check back soon for exciting workshops and sessions!";
      break;
    case "upcoming":
      icon = "fas fa-calendar-plus";
      title = "No Upcoming Events";
      message =
        "Stay tuned! We're planning amazing events that will be announced soon.";
      break;
    case "completed":
      icon = "fas fa-check-circle";
      title = "No Completed Events";
      message =
        "Our event history will appear here once we've hosted some amazing sessions.";
      break;
    default:
      icon = "fas fa-calendar-alt";
      title = "No Events Found";
      message =
        "We're working on bringing you exciting events. Check back soon!";
  }

  emptyState.innerHTML = `
        <i class="${icon}"></i>
        <h3>${title}</h3>
        <p>${message}</p>
    `;

  container.appendChild(emptyState);
}

// Sample data function (fallback)
function getSampleEvents(tabType) {
  const sampleEvents = [
    {
      title: "AI Workshop Series",
      description:
        "Learn the fundamentals of artificial intelligence and machine learning.",
      date: "Dec 15, 2024",
      status: "live",
      image:
        "https://via.placeholder.com/400x220/003366/ffffff?text=AI+Workshop",
      link: "AI TOOL WORKSHOP/index.html",
    },
    {
      title: "Web Development Bootcamp",
      description:
        "Master modern web development with React, Node.js, and more.",
      date: "Dec 20, 2024",
      status: "upcoming",
      image:
        "https://via.placeholder.com/400x220/004a8f/ffffff?text=Web+Dev+Bootcamp",
    },
    {
      title: "Cybersecurity Seminar",
      description:
        "Learn about the latest security threats and protection strategies.",
      date: "Nov 30, 2024",
      status: "completed",
      image:
        "https://via.placeholder.com/400x220/00ccff/003366?text=Cybersecurity",
    },
  ];

  return sampleEvents.filter((event) => {
    if (tabType === "all") return true;
    return event.status === tabType;
  });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

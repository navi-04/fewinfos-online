// Function to initialize the page
function initPage() {
    renderEvents(events);
    setupEventListeners();
}

// Function to render events to the page
function renderEvents(eventsToRender) {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';

    if (eventsToRender.length === 0) {
        eventsContainer.innerHTML = '<p class="no-events">No events found matching your criteria.</p>';
        return;
    }

    eventsToRender.forEach(event => {
        const eventCard = createEventCard(event);
        eventsContainer.appendChild(eventCard);
    });
}

// Function to create an event card
function createEventCard(event) {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';

    // Format date for display
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    eventCard.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="event-image">
        <div class="event-info">
            <h2 class="event-title">${event.title}</h2>
            <div class="event-details">
                <p><i class="far fa-calendar-alt"></i> ${formattedDate}</p>
                <p><i class="far fa-clock"></i> ${event.time}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            </div>
            <p class="event-description">${event.description}</p>
            <span class="event-category">${event.category}</span>
        </div>
    `;

    return eventCard;
}

// Function to set up event listeners
function setupEventListeners() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');

    categoryFilter.addEventListener('change', filterEvents);
    searchInput.addEventListener('input', filterEvents);
}

// Function to filter events
function filterEvents() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    
    const selectedCategory = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();

    const filteredEvents = events.filter(event => {
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        const matchesSearch = event.title.toLowerCase().includes(searchTerm) || 
                             event.description.toLowerCase().includes(searchTerm) ||
                             event.location.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });

    renderEvents(filteredEvents);
}

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);

// Visitor Counter JavaScript

// Function to get, increment and display visitor count
function updateVisitorCount() {
    // Get the current count from localStorage
    let count = localStorage.getItem('visitorCount');
    
    // If it doesn't exist yet, initialize it to 0
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count, 10);
    }
    
    // Increment the count
    count++;
    
    // Save back to localStorage
    localStorage.setItem('visitorCount', count.toString());
    
    // Update the display
    document.getElementById('visitorCount').textContent = count;

    // Log for debugging
    console.log('Current visitor count:', count);
}

// Create the visitor counter element
function createVisitorCounter() {
    // Create container
    const counterContainer = document.createElement('div');
    counterContainer.className = 'visitor-counter';
    counterContainer.style.textAlign = 'center';
    counterContainer.style.padding = '15px';
    counterContainer.style.margin = '20px 0';
    counterContainer.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
    
    // Create counter text
    const counterText = document.createElement('p');
    counterText.innerHTML = 'Visitor Count: <span id="visitorCount">0</span>';
    counterText.style.fontSize = '14px';
    counterText.style.color = '#8892b0';
    
    // Append elements
    counterContainer.appendChild(counterText);
    
    // Add to the end of your page (e.g., before the closing body tag)
    document.body.appendChild(counterContainer);
    
    // Update the counter
    updateVisitorCount();
}

// Run when the document is fully loaded
document.addEventListener('DOMContentLoaded', createVisitorCounter);
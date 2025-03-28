function openModal() {
  const modal = document.getElementById("modal");
  const container = document.getElementById("airtableContainer");

  modal.classList.remove("hidden");

  // Always replace container contents when opening
  container.innerHTML = `
    <div class="text-center text-gray-500">
      <svg class="animate-spin h-8 w-8 mx-auto mb-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Loading form...
    </div>
  `;

  // Load iframe after brief delay so spinner has time to show
  setTimeout(() => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://airtable.com/embed/appNjV5VfRvvNM8e0/pagdz9dv0NI5bL9ED/form";
    iframe.id = "airtableIframe";
    iframe.width = "100%";
    iframe.height = "500";
    iframe.frameBorder = "0";
    iframe.style = "background: transparent; border: none; border-radius: 8px;";

    iframe.onload = () => {
      container.innerHTML = ""; // Remove spinner
      container.appendChild(iframe);
    };

    container.appendChild(iframe); // Start loading iframe
  }, 100);
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

function openLearnMoreModal() {
  document.getElementById("learnMoreModal").classList.remove("hidden");
}

function closeLearnMoreModal() {
  document.getElementById("learnMoreModal").classList.add("hidden");
}

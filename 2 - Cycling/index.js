// Main Accordion 

const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const buttons = panelToActivate.parentElement.querySelectorAll("button");
  const contents =
    panelToActivate.parentElement.querySelectorAll(".accordion-content");

  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", false);
  });

  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });

  panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

  panelToActivate
    .querySelector(".accordion-content")
    .setAttribute("aria-hidden", false);
}



// Scroll Reveal

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false
});

sr.reveal('.site-title',{delay:100, origin:'top'});
sr.reveal('.About-Us',{delay:200, origin:'top'});
sr.reveal('.mountain-bike-info',{delay:300, origin:'top'});
sr.reveal('.mountain-bike',{delay:500, origin:'left'});
sr.reveal('.accordion',{delay:500, origin:'left'});
sr.reveal('.fifth-container',{delay:500, origin:'left'});
sr.reveal('footer',{delay:500, origin:'top'});

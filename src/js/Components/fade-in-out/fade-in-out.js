/**
 * Fade-in-out
 * Copy and paste for each new component
 * Components require return { initialize } as this is what is ran from the ComponentIndex.js file
 */

import util from "../../utilities/util";

export default (() => {
  // ***** Update fadeTiming to match the animation-duration of the fade class (currently set to 0.5s/500ms) ***** //
  const fadeState = {
    eventType: "click",
    animationDuration: 500
  };

  const handleFadeIn = elementToFade => {
    if (
      elementToFade.classList.contains("fade-out") ||
      elementToFade.classList.contains("d-none")
    ) {
      elementToFade.classList.remove("fade-out", "d-none");
      elementToFade.classList.add("fade-in");
      elementToFade.setAttribute("aria-hidden", "false");
    }
  };

  const handleFadeOut = elementToFade => {
    elementToFade.classList.add("fade-out");
    elementToFade.setAttribute("aria-hidden", "true");

    setTimeout(() => {
      elementToFade.classList.add("d-none");
    }, fadeState.animationDuration);
  };

  const handleFadeDirection = args => {
    const [elementToFade, direction] = args;
    if (direction === "in") {
      handleFadeIn(elementToFade);
    } else if (direction === "out") {
      handleFadeOut(elementToFade);
    } else {
      return;
    }
  };

  const handleFadeEvents = () => {
    const fadeControls = Array.from(
      document.querySelectorAll("[data-fade-control")
    );

    fadeControls.forEach(fadeControl => {
      util.addEvents(
        fadeControl,
        fadeState.eventType,
        handleFadeDirection,
        document.querySelector(
          `[data-fade-target=${fadeControl.getAttribute("data-fade-controls")}]`
        ),
        fadeControl.getAttribute("data-fade-direction")
      );
    });
  };

  const handleFadeInOut = () => {
    handleFadeEvents();
  };
  const initialize = () => {
    handleFadeInOut();
  };

  return {
    initialize
  };
})();

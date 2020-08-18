/**
 * ComponentTemplate
 * Copy and paste for each new component
 * Components require return { initialize } as this is what is ran from the ComponentIndex.js file
 */

export default (() => {
  const handleTemplate = () => {
    console.log("Im the component template");
  };
  const initialize = () => {
    handleTemplate();
  };

  return {
    initialize
  };
})();

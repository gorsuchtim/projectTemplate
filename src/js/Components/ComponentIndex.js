/**
 * @desc This function runs on page load and iterates through the key:value pairs in asyncModules
 * It looks for an element on the page with an attribute that matches the key and loads & runs the JS file associated to that element
 * @param // const asyncModules accepts the key:value pair as str.  Ex: ".myClassName": "myFileToRun"
 * The associated file must be in /src/js/Components
 * and must have a folder named the same as the file.  Ex: /Components/ComponentTemplate/ComponentTemplate.js
 *
 */
const ComponentIndex = () => {
  // Key: value pair of element to target on the page: js component to run when element is on the page
  // Enter as strings ".component-template": "ComponentTemplate"

  /**
   * MAKE SURE TO ADD THE TEST ELEMENT TO THE PAGE OR YOU WILL SUFFER IN DEBUGGING HELL!!!!
   */
  const asyncModules = {
    // ".test-index": "Test"
  };
  
  const loadModules = async () => {
    const imports = Object.entries(asyncModules);

    await Promise.all(
      imports.map(async ([selector, path]) => {
        const target = document.querySelector(selector);
        if (!target) return;

        /** Load & initialize the module */
        const module = await import(`./${path}/${path}`);
        console.log(module);
        if (module.default) module.default();
      })
    );
  };

  (() => {
    // Auto run all functions here when ComponentIndex loads
    loadModules();
  })();
};

export default ComponentIndex;

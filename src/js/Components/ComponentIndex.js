/**
 * @desc This function runs on page load and iterates through the key:value pairs in asyncModules
 * It looks for an element on the page with an attribute that matches the key and loads & runs the JS file associated to that element
 * @param // const asyncModules accepts the key:value pair as str.  Ex: ".myClassName": "myFileToRun"
 * The associated file must be in /src/js/Components and have a folder named the same as the file.  Ex: /Components/MyTestComponent/MyTestComponent.js
 *
 */
const ComponentIndex = () => {
  // Key: value pair of element to target on the page: js component to run when element is on the page
  // Enter as strings ".myClass": "myjavascriptfile"
  const asyncModules = {};

  const loadModules = async () => {
    const imports = Object.entries(asyncModules);

    await Promise.all(
      imports.map(async ([selector, path]) => {
        const target = document.querySelector(selector);
        if (!target) return;

        /** Load & initialize the module */
        const module = await import(`./${path}/${path}`);
        if (module.default) module.default.initialize();
      })
    );
  };

  (() => {
    // Auto run all functions here when ComponentIndex loads
    loadModules();
  })();
};

export default ComponentIndex;

/// <reference types="Cypress" />

/**
 * Visit a specific path
 *
 * @param string The key name of the path contained in your env file
 */
Cypress.Commands.add("visitPath", (path) => {
  let paths = Cypress.env("paths");
  if (paths === undefined || !paths.hasOwnProperty(path)) return;
  return cy.visit(paths[path]);
});

/**
 * Overload the visit command to facilitate staging URLS
 *
 * @todo Handle multiple envs, specifically PROD
 * @todo Detect query params in the url and merge into single string
 */
Cypress.Commands.overwrite("visit", (originalFn, url, options) => {
  if (Cypress.env("environmentName") !== "staging") {
    return originalFn(url);
  }

  var path = url.replace(/\/$/, "");

  //We always add 'skip' for external network requests
  path = path + "?skip=1";

  //If a staging branch is provided it is appended to the URL
  if (Cypress.env("stagingBranch") != undefined) {
    path = path + "&ebranch=" + Cypress.env("stagingBranch");
  }

  return originalFn(path);
});

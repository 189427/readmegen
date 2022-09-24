function renderLicenseBadge(license) {
  if (this.license === "true") {
    return `[![license:MIT](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)`;
  } else {
    return "";
  }
}
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)";
  } else {
    return "";
  }
}
function renderLicenseSection(license) {
  if (license !== "") {
    return `${license}`;
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseBadge(data.license)}
  [![license](https://img.shields.io/badge/license-${
    data.license
  }-blue.svg)](https://shields.io/)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contribution: 
  ${data.contribution}
  ## Testing: 
  ${data.test}
  ## Contact information:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;

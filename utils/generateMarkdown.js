// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === "ISC"){
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
    else if(license ==="MIT"){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if(license === "Mozilla"){
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    else if(license === "N/A"){
      return `"not licensed"`
    }
  
  
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributions](#contributions)
    * [License](#license)
    
  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributions
  ${data.contributions}
  
  ## Tests
  ${data.tests}
  
  ## Features
  ${data.features}
  
  
  
  
  ## Questions
  If you have any questions you can contact me at ${data.email} .
  ## Git Hub Link
  Click here to view my repo library ${data.github}.
  `;
  }
  
  module.exports = generateMarkdown;
  
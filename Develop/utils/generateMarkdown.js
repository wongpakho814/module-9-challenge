// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license) {
        case "apache-2.0":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "bsl-1.0":
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        case "bsd-3-clause":
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        case "bsd-2-clause":
            return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        case "cc0-1.0":
            return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
        case "cc-by-4.0":
            return "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)";
        case "cc-by-sa-4.0":
            return "[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)";
        case "epl-1.0":
            return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        case "gpl-3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "gpl-2.0":
            return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        case "agpl-3.0":
            return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        case "isc":
            return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        case "mit":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";  
        case "mpl-2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";   
        case "ofl-1.1":
            return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";   
        case "unlicense":
            return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";  
        case "zlib":
            return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";  
        default:
            return ""
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license) {
        case "apache-2.0":
            return "https://opensource.org/licenses/Apache-2.0";
        case "bsl-1.0":
            return "https://www.boost.org/LICENSE_1_0.txt";
        case "bsd-3-clause":
            return "https://opensource.org/licenses/BSD-3-Clause";
        case "bsd-2-clause":
            return "https://opensource.org/licenses/BSD-2-Clause";
        case "cc0-1.0":
            return "http://creativecommons.org/publicdomain/zero/1.0/";
        case "cc-by-4.0":
            return "https://creativecommons.org/licenses/by/4.0/";
        case "cc-by-sa-4.0":
            return "https://creativecommons.org/licenses/by-sa/4.0/";
        case "epl-1.0":
            return "https://opensource.org/licenses/EPL-1.0";
        case "gpl-3.0":
            return "https://www.gnu.org/licenses/gpl-3.0";
        case "gpl-2.0":
            return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
        case "agpl-3.0":
            return "https://www.gnu.org/licenses/agpl-3.0";
        case "isc":
            return "https://opensource.org/licenses/ISC";
        case "mit":
            return "https://opensource.org/licenses/MIT";  
        case "mpl-2.0":
            return "https://opensource.org/licenses/MPL-2.0";   
        case "ofl-1.1":
            return "https://opensource.org/licenses/OFL-1.1";   
        case "unlicense":
            return "http://unlicense.org/";  
        case "zlib":
            return "https://opensource.org/licenses/Zlib";  
        default:
            return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "") {
        return "";
    }
    const link = renderLicenseLink(license);
    return `## License
This project uses the ${license} license
License link: ${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const badge = renderLicenseBadge(data.license);
    
    return `# ${data.title}
${badge}
## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.credits}

## Tests
${data.tests}

`;
}

module.exports = {
    generateMarkdown,
    renderLicenseSection
}

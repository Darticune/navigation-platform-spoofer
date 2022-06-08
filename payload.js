async function deploy() {
    // Returns {domains, platform}
    retrieveOptions()
        // Returns {domains, platform}
        .then(function (results) {
            return checkOptions(results)
        }).then(function (results) {
            return checkDomainAgainstOptions(results)
        })
        .catch(error => { console.error('Request failed', error); });
};

function getDomains() {
    var domains = document.getElementById("domainElement").innerHTML.split("\n");
    return domains;
}

function getPlatform() {
    var platform = document.getElementById("platformElement").innerHTML;
    return platform;
}

// Returns {domains, platform}
async function retrieveOptions() {
    // Get domains
    var domains = getDomains();
    var platform = getPlatform();
    console.log("Retrieved Options")
    return { domains, platform };
}

// Returns {domains, platform}
async function checkOptions(results) {
    let { domains, platform } = results;
    if (typeof platform === 'undefined') {
        throw (new Error("Platform not set"))
    } else if (typeof domains === 'undefined') {
        throw (new Error("Domains not set"))
    }
    console.log("Options are set correctly")
    return results;
}

function checkDomainAgainstOptions(results) {
    let { domains, platform } = results;
    var location = window.location.href;
    var url = new URL(location);
    var domain = url.hostname;

    if (domains.includes(domain)) {
        changePlatform(platform);
    } else {
        console.log("Invalid Domain. Valid Domains include:");
        console.log(domains);
        console.log("You submitted:");
        console.log(domain);
        console.log("If you want to use the extension on this page, add the above domain in the options page.");
    }
}

// payload Script
function changePlatform(platform) {
    Object.defineProperty(navigator, 'platform', {
        value: platform,
        configurable: true
    });
    console.log("Changed to:")
    console.log(window.navigator.platform)
};

deploy();
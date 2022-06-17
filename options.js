window.addEventListener("DOMContentLoaded", function () {
    loadPreviousSettings();
    document.getElementById("update").addEventListener("click", function () {
        setOptions();
    });
});

function parseDomains(domains) {
    var split = domains.split("\n");
    //console.log(split);
    var parsed = [];
    for (var i=0; i<split.length; i++) {
        if (split[i] == "") {
            continue;
        }
        try {
            var url = new URL(split[i]);
            var domain = url.hostname;
        } catch {
            var domain = split[i];
        }
        if (!parsed.includes(domain)) {
            parsed[parsed.length]= domain;
        }
    }

    //console.log(parsed);
    parsed = parsed.join("\n")
    //console.log(parsed);
    return parsed;
}

function setOptions() {
    parseOptions().then(
        function(rawURLs) {
            var checkbox = document.getElementById("openTabs");
            if (checkbox.checked) {
                openTabs(rawURLs)
            }
        }
    )
}

async function parseOptions() {
    var rawURLs = document.getElementById("domains").value;
    //console.log(domains);
    var domains = parseDomains(rawURLs);
    var platform = document.getElementById("platform").value;
    
    if (domains === "") {
        alert("Please set a value for Target Domains before updating!")
        return
    }

    // Set domains
    chrome.storage.local.set({
        domains: domains
    }, function() {
        console.log('Domains is/are set to: \n' + domains);
    });

    // Set Platform
    chrome.storage.local.set({
        platform: platform
    }, function() {
        console.log('Platform is set to ' + platform);
    });

    alert("Target Domains and Intended Platform set!")
    return rawURLs;
}

function openTabs(rawURLs) {
    var split = rawURLs.split("\n");
    for (var i=0; i<split.length; i++) {
        if (split[i] == "") {
            continue;
        }
        createTab(split[i]);
    }
}

function createTab(url) {
    try {
        var urlObject = new URL(url);
    } catch {
        alert('"' + url + '" is not a valid URL, unable to open this tab. Please your intended URL manually with the full page link.' )
        return
    }

    chrome.tabs.create({ url: url });
}

const readLocalStorage = async (key) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], function (result) {
            if (result[key] === undefined) {
                resolve("");
            } else {
                resolve(result[key]);
            }
            
        });
    });
};

async function loadPreviousSettings() {
    var savedDomains = await readLocalStorage("domains");
    var savedPlatform = await readLocalStorage("platform");
    if (savedDomains === "") {
        document.getElementById("domains").value = "";
    } else {
        document.getElementById("domains").value = savedDomains;
    }
    
    if (savedDomains !== "") {
        document.getElementById("platform").value = savedPlatform;
    }
}
window.addEventListener("DOMContentLoaded", function () {
    loadPreviousSettings();
    document.getElementById("update").addEventListener("click", function () {
        parseOptions();
    });
});

function parseOptions() {
    var domains = document.getElementById("domains").value;
    var platform = document.getElementById("platform").value;
    
    if (domains === "") {
        alert("Please set a value for Target Domains before updating!")
        return
    }
    // Set domains
    chrome.storage.local.set({
        domains: domains
    }, function() {
        console.log('Domains is set to ' + domains);
    });

    // Set Platform
    chrome.storage.local.set({
        platform: platform
    }, function() {
        console.log('Platform is set to ' + platform);
    });

    alert("Target Domains and Intended Platform set!")
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
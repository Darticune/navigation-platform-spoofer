function inject_script() {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('payload.js');
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}

// Globalise tabId
var gTabId;
var gUrl;

chrome.webNavigation.onCommitted.addListener(function (tabId, url) {
    console.log(url)
    gTabId = tabId;
    gUrl = url;
    // Returns {domains, platform}
    retrieveOptions()
    // Returns {domains, platform}
    .then(function(results) {
        return checkOptions(results)
    }).then(function(results) {
        return checkDomainAgainstOptions(results)
    })
    .catch(error => {console.error('Request failed', error);});
})

const readLocalStorage = async (key) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], function (result) {
            resolve(result[key]);
            /*
            if (result[key] === undefined) {
                reject("Local Storage Read Error");
            } else {
                resolve(result[key]);
            }
            */
        });
    });
};



// Returns {domains, platform}
async function retrieveOptions() {
    // Get domains
    var domains = await readLocalStorage("domains");
    var platform = await readLocalStorage("platform");
    //console.log(domains);
    //console.log(platform);
    console.log("End getOptionsSet")
    return {domains, platform};
}

// Returns {domains, platform}
async function checkOptions(results) {
    //console.log(results);
    let {domains, platform} = results;
    console.log("End optionsCheck")
    if (typeof platform === 'undefined') {
        //console.log("A");
        throw(new Error("Platform not set"))
    } else if (typeof domains === 'undefined') {
        //console.log("B");
        throw(new Error("Domains not set"))
    }
    //console.log("C");
    //console.log(results);
    return results;
}

function checkDomainAgainstOptions(results) {
    let {domains, platform} = results;
    console.log("Options are set")

    //console.log(domains);
    //console.log(platform);
    console.log(gUrl);
    var url = new URL(gUrl);
    var domain = url.hostname;
    //console.log("D")
    //console.log(domain);
    //console.log("Ds")
    //console.log(domains);

    if (domains.includes(domain)) {
        console.log("T");
        chrome.scripting.executeScript({
        target: {
            tabId: gTabId
        },
        files: ['payload.js'],
    });
    } else {
        console.log("F");
    }


}
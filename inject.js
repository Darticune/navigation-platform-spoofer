const nullthrows = (v) => {
    if (v == null) throw new Error("it's a null");
    return v;
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

async function injectCode(src) {
    var domains = await readLocalStorage("domains");
 
    const domainElement = document.createElement('p');
    domainElement.innerHTML = domains;
    domainElement.id = "domainElement";
    nullthrows(document.head || document.documentElement).appendChild(domainElement);
 
    var platform = await readLocalStorage("platform");
    const platformElement = document.createElement('p');
    platformElement.innerHTML = platform;
    platformElement.id = "platformElement";
    nullthrows(document.head || document.documentElement).appendChild(platformElement);

    const script = document.createElement('script');
    script.src = src;
    script.onload = function() {
        console.log("Script injected");
        this.remove();
    };
    script.id = "injected";

    nullthrows(document.head || document.documentElement).appendChild(script);
}

injectCode(chrome.runtime.getURL('/payload.js'));
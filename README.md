# README

### To install the extension:

---

1. Go to chrome://extensions/ on the Chrome Browser
2. Click on the "Developer Mode" toggle on the top right of the page to turn it on:
    - Off:
        
        ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled.png)
        
    - On:
        
        ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%201.png)
        
3. Click on “Load Unpacked” on the top right of the page:
    
    ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%202.png)
    
4. Choose the directory for this repo:
    - If you downloaded the code as zip, navigate to the extracted folder and click into “navigation-platform-spoofer-main” twice. You should see the “README {HASH}” folder as shown below:
        
        ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%203.png)
        
    - If you cloned the repo, navigate to “navigation-platform-spoofer” as shown below:
        
        ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%204.png)
        
5. Click “Select Folder”:
    
    ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%205.png)
    
6. Click on the Extensions icon on the top right of your chrome browser:
    
    ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%206.png)
    
7. Click on the pin icon beside Nav Platform Spoofer:
    
    ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%207.png)
    

---

### To use the extension:

---

1. Right click on the now pinned “N” Icon for Nav Platform Spoofer and click on “Options”:
    
    ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%208.png)
    
2. A new tab will pop up with the options page:
    
    ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%209.png)
    
3. To add a website as a platform spoofing target, we can simply copy the link of a page and Paste it in the “Target Domains” Field. To add multiple targets, we can list them separately on a new line each:
    
    ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%2010.png)
    
4. Next, choose the platform you want the extension to spoof using the dropdown list under “Intended Platform”:
    
    ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%2011.png)
    
5. Click on the “Update” button, and you will see the following message:
    
    ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%2012.png)
    
    - Beyond this point, your Javascript-based platform will be spoofed to what was specified whenever you visit the targeted domains.

### Optional Feature (Open links on Update):

---

1. If you are adding new domains into the list, there is an additional feature where you can choose to open every newly added link in a new tab with the chrome extension after updating them.
    - HOWEVER, as the extension does not retain the submitted links, only their domains, this feature will only open links that are still on the options page.
        - For e.g. “https://www.google.com/search?q=hello+world&oq=hello+world”, when submitted, will be saved only as “www.google.com”.
    - As such, if you have closed the options page since the last update, the extension will not be able to open the links from the last update, and the following message will be displayed instead:
        
        ![Untitled](README%20994e06d1c4ad448b8918fdde47e6dc29/Untitled%2013.png)
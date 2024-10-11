import { initializeBrowser } from "./browser.js";
import { IS_BROWSER } from "./constants.js";
import { executeConsoleApp as initializeConsoleApp } from "./node.js";

if (IS_BROWSER) {
    initializeBrowser();
} else {
    initializeConsoleApp();
}

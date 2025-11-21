const httpTracker = {
  // Prefer the standard 'browser' if present (Firefox), else Chrome's 'chrome'
  browser: (typeof browser !== 'undefined' && browser) ? browser : (typeof chrome !== 'undefined' ? chrome : null),
  // We are in MV3 SW (Chrome), so treat as non-Firefox by default
  isFF: (typeof browser !== 'undefined' && !!browser && typeof InstallTrigger !== 'undefined'),
  PAGE_PATH: "/src/html/http-tracker.html",
  STORAGE_KEY_EXCLUDE_PATTERN: "httpTrackerGlobalExcludePatterns",
  STORAGE_KEY_BLOCK_PATTERN: "httpTracker_GlobalBlockPatterns",
  STORAGE_KEY_MASK_PATTERN: "httpTracker_GlobalMaskPatterns",
  STORAGE_KEY_OPEN_ADDON_IN_TAB: "httpTracker_OpenAddonInTab"
};
;

const FORBIDDEN_HEADERS = ["Accept-Charset", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Connection", "Content-Length", "Cookie", "Cookie2", "Date", "DNT", "Expect", "Feature-Policy", "Host", "Keep-Alive", "Origin", "Proxy-", "Sec-", "Referer", "TE", "Trailer", "Transfer-Encoding", "Upgrade", "Via"];
const FORBIDDEN_HEADERS_PATTERN = ["Proxy-", "Sec-"];
const DELIMITER_AND = "&";
const DELIMITER_OR = "|";
const DELIMITER_REQUEST_COOKIE = "; ";
const DELIMITER_REQUEST_COOKIE_KEY_NAME = "Cookie";
const DELIMITER_RESPONSE_COOKIE = "\n";
const DELIMITER_RESPONSE_COOKIE_KEY_NAME = "set-cookie";
const STRING_ERROR = "ERR";
const STRING_SPACE = "&nbsp;";

// --- MV3 compatibility shim: ensure `action` exists (fallback to browserAction) ---
try {
  if (httpTracker.browser) {
    if (!httpTracker.browser.action && httpTracker.browser.browserAction) {
      httpTracker.browser.action = httpTracker.browser.browserAction;
    }
  }
} catch (e) {
  // no-op
}

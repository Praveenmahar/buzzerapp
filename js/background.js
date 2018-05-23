/* global onStorageChange, loadFromStorage, getCountersFromHTTP, openOurTab, onMessage, onExtensionUpdate, onNotificationClick, startupInject  */
/*// synchronize settings
chrome.storage.onChanged.addListener(onStorageChange);
loadFromStorage();
// run first counter refresh
getCountersFromHTTP();
// initialize button click event
chrome.browserAction.onClicked.addListener(function(tab) {
  openOurTab(tab.windowId);
});
// listen to injected scripts
// alert about new features, if any
chrome.runtime.onInstalled.addListener(onExtensionUpdate);
// initially inject content scripts
startupInject();*/

chrome.runtime.onMessage.addListener(onMessage);
chrome.notifications.onClicked.addListener(onNotificationClick);
chrome.storage.onChanged.addListener(onStorageChange);

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var _renderPage = require("./js/operation/posts/renderPage");
var _renderUsers = require("./js/operation/users/renderUsers");
(0, _renderPage.renderPage)();
(0, _renderUsers.renderUsersPage)();

},{"./js/operation/posts/renderPage":"kE3Os","./js/operation/users/renderUsers":"2Hgdr"}],"kE3Os":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderPage", ()=>renderPage);
var _renderPosts = require("./renderPosts");
var _addNewPost = require("./addNewPost");
var _addPostModal = require("./addPostModal");
var _editMode = require("./editMode");
var _deletePost = require("./deletePost");
var _editPost = require("./editPost");
const startEvents = ()=>{
    const form = document.querySelector("[data-addPost-form]");
    console.log("Form:", form);
    console.log("Edit button:", document.querySelector(".posts__edit-mode"));
    const closeModal = (0, _addPostModal.startModalEvents)();
    (0, _editMode.startEditMode)();
    (0, _editPost.startPostEditing)();
    if (form) form.addEventListener("submit", (event)=>{
        (0, _addNewPost.addPost)(event, closeModal);
    });
    document.addEventListener("click", (event)=>{
        const deleteBtn = event.target.closest(".posts__delete");
        if (!deleteBtn) return;
        const postItem = deleteBtn.closest(".posts__item");
        if (!postItem) return;
        (0, _deletePost.deletePost)(postItem.dataset.postId);
    });
};
const renderPage = async ()=>{
    await (0, _renderPosts.renderPosts)();
    await startEvents();
};

},{"./renderPosts":"lY636","./addNewPost":"4YkMW","./addPostModal":"ios1X","./editMode":"2vINJ","./deletePost":"8UWvu","./editPost":"fiKh9","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lY636":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderPosts", ()=>renderPosts);
var _getPostsApi = require("../../api/posts/getPostsApi");
var _makePostsList = require("../../markup/posts/makePostsList");
const lists = {
    energy: document.querySelector(".posts__container .posts__list"),
    java: document.querySelector(".posts__container-java .posts__list"),
    juice: document.querySelector(".posts__container-juice .posts__list")
};
const renderPosts = async ()=>{
    const response = await (0, _getPostsApi.getPostsApi)();
    console.log("Posts:", response);
    console.log("Array:", Array.isArray(response));
    if (!Array.isArray(response)) {
        console.error("Posts is not an array:", response);
        return;
    }
    Object.values(lists).forEach((list)=>{
        if (list) list.innerHTML = "";
    });
    response.forEach((post)=>{
        const list = lists[post.category];
        if (list) list.insertAdjacentHTML("beforeend", (0, _makePostsList.makePostsList)([
            post
        ]));
    });
};

},{"../../api/posts/getPostsApi":"1TFIO","../../markup/posts/makePostsList":"l7iye","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1TFIO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPostsApi", ()=>getPostsApi);
const getPostsApi = async ()=>{
    try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Failed to get posts:", error);
        return null;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l7iye":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makePostsList", ()=>makePostsList);
const makePostsList = (posts)=>{
    const postsHtml = posts.map((post)=>`
        <li
          class="posts__item"
  data-post-id="${post.id}"
  data-post-img="${post.img}"
  data-post-category="${post.category}"
        >
       <label class="posts__change-img">
  Photo
  <input
    type="file"
    class="posts__img-input"
    accept="image/*"
    hidden
  >
</label>
          <button class="posts__edit" type="button" aria-label="Edit">
            \u{270E}
          </button>

          <button class="posts__delete" type="button" aria-label="Delete">
            &times;
          </button>

          <button class="posts__save" type="button">
           Save
          </button>

          <div class="posts__card">
            <div class="posts__front">
              <img src="${post.img}" alt="${post.title}" class="posts__img">
            </div>

            <div class="posts__back">
              <h2 class="posts__title">${post.title}</h2>
              <p class="posts__description">${post.description}</p>
            </div>
          </div>
        </li>
      `).join("");
    return postsHtml;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4YkMW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addPost", ()=>addPost);
var _addPostsApi = require("../../api/posts/addPostsApi");
var _renderPosts = require("./renderPosts");
const addPost = async (event, closeModal)=>{
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    const post = {
        title: elements.title.value,
        img: elements.img.value,
        description: elements.description.value,
        category: elements.category.value
    };
    try {
        await (0, _addPostsApi.addPostsApi)(post);
        await (0, _renderPosts.renderPosts)();
        form.reset();
        closeModal();
    } catch (error) {
        console.error("Failed to add post:", error);
    }
};

},{"../../api/posts/addPostsApi":"5PZkg","./renderPosts":"lY636","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5PZkg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addPostsApi", ()=>addPostsApi);
const addPostsApi = async (newPost)=>{
    try {
        const options = {
            method: "POST",
            body: JSON.stringify(newPost)
        };
        return await fetch("http://localhost:3000/posts", options).then((response)=>response.json());
    } catch (error) {
        console.log(error.message);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ios1X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startModalEvents", ()=>startModalEvents);
const startModalEvents = ()=>{
    const addButtons = document.querySelectorAll(".posts__add-btn");
    const modal = document.querySelector("[data-addPosts]");
    const form = document.querySelector("[data-addPost-form]");
    const backdrop = document.querySelector("[data-backdrop]");
    const closeButton = document.querySelector(".close-modal");
    const openModal = ()=>{
        modal.classList.add("is-open");
        backdrop.classList.add("is-open");
        document.body.classList.add("no-scroll");
        document.documentElement.classList.add("no-scroll");
    };
    const closeModal = ()=>{
        modal.classList.remove("is-open");
        backdrop.classList.remove("is-open");
        document.body.classList.remove("no-scroll");
        document.documentElement.classList.remove("no-scroll");
    };
    addButtons.forEach((button)=>{
        button.addEventListener("click", ()=>{
            const container = button.closest("[data-category]");
            form.elements.category.value = container.dataset.category;
            openModal();
        });
    });
    console.log(closeButton);
    if (closeButton !== null) {
        closeButton.addEventListener("click", closeModal);
        backdrop.addEventListener("click", closeModal);
    }
    return closeModal;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2vINJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startEditMode", ()=>startEditMode);
const startEditMode = ()=>{
    const editModeBtn = document.querySelector(".posts__edit-mode");
    if (!editModeBtn) {
        console.log("\u041A\u043D\u043E\u043F\u043A\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
        return;
    }
    editModeBtn.addEventListener("click", ()=>{
        document.body.classList.toggle("editing-mode");
        const isEditing = document.body.classList.contains("editing-mode");
        editModeBtn.textContent = isEditing ? "\u2713 Done" : "\u270E Edit posts";
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8UWvu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deletePost", ()=>deletePost);
var _deletePostsApi = require("../../api/posts/deletePostsApi");
var _renderPosts = require("./renderPosts");
const deletePost = async (id)=>{
    try {
        const response = await (0, _deletePostsApi.deletePostsApi)(id);
        if (!response.ok) throw new Error("Failed to delete the post");
        await (0, _renderPosts.renderPosts)();
    } catch (error) {
        console.error("Error deleting:", error);
    }
};

},{"../../api/posts/deletePostsApi":"cdmyz","./renderPosts":"lY636","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cdmyz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deletePostsApi", ()=>deletePostsApi);
const deletePostsApi = async (id)=>{
    try {
        return await fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        console.log(error.message);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fiKh9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startPostEditing", ()=>startPostEditing);
var _updatePostsApi = require("../../api/posts/updatePostsApi");
var _renderPosts = require("./renderPosts");
const startPostEditing = ()=>{
    document.addEventListener("click", async (event)=>{
        const editBtn = event.target.closest(".posts__edit");
        if (editBtn) {
            const postItem = editBtn.closest(".posts__item");
            if (postItem.classList.contains("text-editing")) return;
            const title = postItem.querySelector(".posts__title");
            const description = postItem.querySelector(".posts__description");
            title.contentEditable = "true";
            description.contentEditable = "true";
            title.classList.add("text-editable");
            description.classList.add("text-editable");
            postItem.classList.add("text-editing");
            return;
        }
        const saveBtn = event.target.closest(".posts__save");
        if (!saveBtn) return;
        const postItem = saveBtn.closest(".posts__item");
        const title = postItem.querySelector(".posts__title");
        const description = postItem.querySelector(".posts__description");
        const img = postItem.querySelector(".posts__img");
        const post = {
            title: title.textContent.trim(),
            description: description.textContent.trim(),
            img: postItem.dataset.postImg,
            category: postItem.dataset.postCategory
        };
        if (!post.title || !post.description) {
            alert("Fill in the title and description");
            return;
        }
        try {
            saveBtn.disabled = true;
            const response = await (0, _updatePostsApi.updatePostsApi)(postItem.dataset.postId, post);
            if (!response || !response.ok) throw new Error("Failed to save the post");
            await (0, _renderPosts.renderPosts)();
        } catch (error) {
            console.error(error);
            alert("Save error");
        } finally{
            saveBtn.disabled = false;
        }
    });
    // Выбор новой фотографии
    document.addEventListener("change", (event)=>{
        if (!event.target.matches(".posts__img-input")) return;
        const file = event.target.files[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            alert("\u0412\u044B\u0431\u0435\u0440\u0438 \u0444\u0430\u0439\u043B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");
            event.target.value = "";
            return;
        }
        // Ограничиваем размер, чтобы не перегружать json-server
        if (file.size > 1048576) {
            alert("\u0412\u044B\u0431\u0435\u0440\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u0434\u043E 1 \u041C\u0411");
            event.target.value = "";
            return;
        }
        const postItem = event.target.closest(".posts__item");
        const img = postItem.querySelector(".posts__img");
        const reader = new FileReader();
        reader.onload = ()=>{
            img.src = reader.result;
            postItem.dataset.postImg = reader.result;
        };
        reader.readAsDataURL(file);
    });
};

},{"../../api/posts/updatePostsApi":"cxdpl","./renderPosts":"lY636","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cxdpl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updatePostsApi", ()=>updatePostsApi);
const updatePostsApi = async (id, post)=>{
    try {
        return await fetch(`http://localhost:3000/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
    } catch (error) {
        console.log(error.message);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2Hgdr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderUsersPage", ()=>renderUsersPage);
var _authModalJs = require("./authModal.js");
const renderUsersPage = ()=>{
    (0, _authModalJs.startAuthModalEvents)();
};

},{"./authModal.js":"gDPvP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gDPvP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startAuthModalEvents", ()=>startAuthModalEvents);
var _loginJs = require("./login.js");
var _registerJs = require("./register.js");
const startAuthModalEvents = ()=>{
    const openButton = document.querySelector(".header__button");
    const modal = document.querySelector("[data-auth-modal]");
    const closeButton = document.querySelector("[data-auth-close]");
    const loginForm = document.querySelector("[data-login-form]");
    const registerForm = document.querySelector("[data-register-form]");
    const message = document.querySelector("[data-auth-message]");
    const loginTab = document.querySelector('[data-auth-tab="login"]');
    const registerTab = document.querySelector('[data-auth-tab="register"]');
    if (!openButton || !modal || !closeButton || !loginForm || !registerForm || !loginTab || !registerTab) return;
    // Приветствие после успешной регистрации или входа
    const showWelcome = (name)=>{
        localStorage.setItem("currentUser", name);
        modal.classList.remove("is-open");
        const headerLogin = document.querySelector(".header__log-in");
        headerLogin.innerHTML = `
    <button class="header__button header__welcome" type="button">
      Hi, ${name}!
    </button>
  `;
        const welcomeButton = headerLogin.querySelector(".header__welcome");
        welcomeButton.addEventListener("click", ()=>{
            modal.classList.add("is-open");
        });
    };
    // Открытие окна
    openButton.addEventListener("click", ()=>{
        modal.classList.add("is-open");
        document.body.classList.add("no-scroll");
        document.documentElement.classList.add("no-scroll");
    });
    // Закрытие окна
    closeButton.addEventListener("click", ()=>{
        modal.classList.remove("is-open");
        document.body.classList.remove("no-scroll");
        document.documentElement.classList.remove("no-scroll");
    });
    // Переключение на Log in
    loginTab.addEventListener("click", ()=>{
        loginForm.hidden = false;
        registerForm.hidden = true;
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
        if (message) message.textContent = "";
    });
    // Переключение на Register
    registerTab.addEventListener("click", ()=>{
        loginForm.hidden = true;
        registerForm.hidden = false;
        registerTab.classList.add("active");
        loginTab.classList.remove("active");
        if (message) message.textContent = "";
    });
    // Регистрация
    registerForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const formData = new FormData(registerForm);
        const newUser = {
            name: formData.get("name").trim(),
            email: formData.get("email").trim(),
            password: formData.get("password")
        };
        const user = await (0, _registerJs.registerUser)(newUser);
        if (user) {
            showWelcome(user.name);
            registerForm.reset();
        } else if (message) message.textContent = "This email may already be registered. Please check your details.";
    });
    // Вход
    loginForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const formData = new FormData(loginForm);
        const loginData = {
            email: formData.get("email").trim(),
            password: formData.get("password")
        };
        const user = await (0, _loginJs.loginUser)(loginData);
        if (user) {
            showWelcome(user.name);
            loginForm.reset();
        } else if (message) message.textContent = "Invalid email or password!";
    });
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) showWelcome(savedUser);
};

},{"./login.js":"eExDf","./register.js":"6CtMQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eExDf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loginUser", ()=>loginUser);
var _getUsersApiJs = require("../../api/users/getUsersApi.js");
const loginUser = async (loginData)=>{
    try {
        const users = await (0, _getUsersApiJs.getUsersApi)();
        if (!Array.isArray(users)) {
            console.log("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
            return;
        }
        const existingUser = users.find((user)=>user.email === loginData.email);
        if (!existingUser || existingUser.password !== loginData.password) return;
        return existingUser;
    } catch (error) {
        console.log(error.message);
    }
};

},{"../../api/users/getUsersApi.js":"lzV8g","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lzV8g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUsersApi", ()=>getUsersApi);
const getUsersApi = async ()=>{
    try {
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();
        return users;
    } catch (error) {
        console.log(error.message);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6CtMQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerUser", ()=>registerUser);
var _getUsersApiJs = require("../../api/users/getUsersApi.js");
var _addUsersApiJs = require("../../api/users/addUsersApi.js");
const registerUser = async (newUser)=>{
    try {
        const users = await (0, _getUsersApiJs.getUsersApi)();
        if (!Array.isArray(users)) {
            console.log("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
            return;
        }
        const existingUser = users.find((user)=>user.email === newUser.email);
        if (existingUser) return;
        const user = await (0, _addUsersApiJs.addUsersApi)(newUser);
        if (user) return user;
    } catch (error) {
        console.log(error.message);
    }
};

},{"../../api/users/getUsersApi.js":"lzV8g","../../api/users/addUsersApi.js":"fujma","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fujma":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUsersApi", ()=>addUsersApi);
const addUsersApi = async (newUser)=>{
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        };
        const response = await fetch("http://localhost:3000/users", options);
        return await response.json();
    } catch (error) {
        console.log(error.message);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequire4c9f", {})

//# sourceMappingURL=mini-blog-crud.31b563d9.js.map

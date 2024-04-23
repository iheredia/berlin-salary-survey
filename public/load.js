(function () {
  console.log("Loading iframe");
  var thisScript = document.querySelector("#salaries-dashboard-script");
  function insertAfter(existingElement, newElement) {
    existingElement.parentNode.insertBefore(newElement, existingElement.nextSibling);
  }

  var css = "#dashboard-iframe { width: 100%; min-width: 100%; outline: none; min-height: 500px }";
  var styleElement = document.createElement("style");
  styleElement.type = "text/css";
  if (styleElement.styleSheet) {
    // This is required for IE8 and below.
    styleElement.styleSheet.cssText = css;
  } else {
    styleElement.appendChild(document.createTextNode(css));
  }
  insertAfter(thisScript, styleElement);

  const dashboardIframe = document.createElement("iframe");
  dashboardIframe.id = "dashboard-iframe";
  dashboardIframe.src = "https://berlin-salary-survey.iheredia.com/2024?embed=true";
  dashboardIframe.frameborder = "0";
  dashboardIframe.onload = function () {
    const iframeResizerScript = document.createElement("script");
    iframeResizerScript.type = "text/javascript";
    iframeResizerScript.src = "https://berlin-salary-survey.iheredia.com/iframeResizer.js";
    insertAfter(styleElement, iframeResizerScript);

    function waitForResizer() {
      if (window.iframeResizer) {
        console.log("Initializing iframe resizer");
        window.iFrameResize({ log: true }, "#dashboard-iframe");
      } else {
        setTimeout(waitForResizer, 100);
      }
    }
    waitForResizer();
  };
  insertAfter(styleElement, dashboardIframe);
})();

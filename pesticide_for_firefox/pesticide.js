function init() {
    document.getElementById('pesticide-for-firefox-result').className = 'show';
    document.getElementById('pesticide-for-firefox-result').innerHTML = '<p>Ready to kill some bugs!</p>';
}

// updates the info banner at the bottom of the page
function updateBanner(event) {
  const id = event.target.id.toString() || '';
  const classList = event.target.classList.toString() || '';
  const node = event.target.nodeName.toLowerCase() || '';

  if (!!!document.getElementById('pesticide-for-firefox-result').innerHTML)
    return false;

  // combine the node name, classes, and id into a string in the banner
  let resultContent = '<p>You\'re hovering on = { ';
  resultContent += 'node: <b> ' + node + '</b>; ';
  resultContent += 'classes: <b> ' + classList + '</b>; ';
  resultContent += 'id: <b> ' + id + '</b>;';
  resultContent +=  ' }</p>';

  document.getElementById('pesticide-for-firefox-result').textContent = resultContent;
}

// toggles the visibility of the banner
function showBanner(event) {
  if (event.ctrlKey && document.getElementById('pesticide-for-firefox-result').className ==='show') {
      document.getElementById('pesticide-for-firefox-result').className = '';
  } else {
      document.getElementById('pesticide-for-firefox-result').className = 'show';
  }
}

init();
document.addEventListener('mouseover', updateBanner, false);
window.addEventListener('keydown', showBanner, false);

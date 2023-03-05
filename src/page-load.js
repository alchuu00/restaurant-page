function pageLoad() {
  const content = document.getElementById('content');
  console.log(content);

  const child = document.createElement('div');

  content.appendChild(child);
}

export default pageLoad;

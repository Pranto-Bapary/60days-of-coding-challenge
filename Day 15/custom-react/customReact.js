function renderReactElement(reactElement, container) {
  /* const domElement = document.createElement(reactElement.type)
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    domElement.innerHTML = reactElement.children
    container.appendChild(domElement) */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://github.com/pranto-bapary",
    target: "__blank",
  },
  children: "My Github Account",
};

const mainContainer = document.getElementById("root");

renderReactElement(reactElement, mainContainer);

# Live-coding

## DOM

[20/04/2020](apr/20-04)
- DOM  aka Document Object Module
- DOM tree
- Javascript in the browser: XMl, JSON, jQuery, Ajax, API
- JS Engines: V8 (Chrome, Node, Edge), SpiderMonkey (Firefox), Chakra (Internet Explorer)
- Adding javascript to HTML: The `<script>` tag, External JS with `<script src="...">`
- The Window object
- Host object
- Native object: [Global-Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
-  `window.prompt()` and `window.alert()`
- Project: The Guessing Game

[21/04/2020](apr/21-04)
- review from yesterday's lesson
- window.alert === alert
- document.querySelectorAll() will return A non-live `NodeList` 🧐
- Node tree https://dom.spec.whatwg.org/#concept-node
- `document.getElementById(<id string>)`
- `HTMLElement.style` property
- `document.querySelector(<selector string>)`
- `document.querySelectorAll(<selector string>)`
- Project: Dom-querying

[22/04/2020](apr/22-04)
- review from yesterday's lesson
- `document.write()` 
- `document.createElement(<tag name>)`
- `Element.appendChild(<Element object>)`
- `forEach`
- Project: To-Do List with Sass and DOM
- [Dom-querying-solution](apr/22-04/DOM-Q)

[23/04/2020](apr/23-04)
- review from this week's lessons (`querySelector`, `functions`, `forEach`, `appendChild`)
- `createTextNode`
- Project: continues To-Do List with Sass and DOM (extra steps)

[27/04/2020](apr/27-04)
- review from last week's lessons 
- review from last week's assingment [23/04/2020](apr/23-04)
- Comparing `Node.previousSibling` and `Element.previousElementSibling`
- `ParentNode.children`
- [Human readable elements](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText)
- [NodeType](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
- [ParentNode](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
)
- `Element.closest(<selector string>)`
- `Element.matches(<selector string>)`


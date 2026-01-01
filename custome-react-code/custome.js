// react is js liberary 
// react is a blueprint/js object they create only virtual dom not actual dom,using this object reactdom create a actual dom.



// this is a custome react code.

const react = {
    createElement: function (tag, attr, children) {
        const element = document.createElement(tag);
        element.textContent = children;
        for (const key in attr) {
            if (key === "style") {
                Object.assign(element[key], attr[key]);
            } else {
                element[key] = attr[key];
            }
        }
        return element;
    }
}

const Reactdom = {
    render: function (ele, parent) {
        parent.append(ele);
    }
}



const ele = react.createElement(
  "h1",
  {
    id: "first",
    style: {
      backgroundColor: "orange",
      fontSize: "20px",
      color: "white"
    }
  },
  "Hello world"
);

Reactdom.render(ele,document.getElementById("root"));

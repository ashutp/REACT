// this is demo how actual react works 


const react = {
    createElement: function (tag, attr, child) {
        return {
            tag: tag,
            props: {
                ...attr,
                children: child
            }
        }
    }
}

const reactdom = {
    createroot: function (container) {

        return {
            render: function (reactele) {
                const element = document.createElement(reactele.tag);
                for (const key in reactele.props) {
                    if (key === "style") {
                        Object.assign(element[key], reactele.props[key]);
                    } else if (key === "children") {
                        element.textContent = reactele.props.children;
                    } else {
                        element[key] = reactele.props[key];
                    }
                }
                container.appendChild(reactele);
            }
        }
    }
}

const ele = react.createElement("h1", {
    id: "first",
    className: "div",
    style: {
        backgroundColor: "orange",
        fontSize: "20px",
        color: "white"
    }

}, "hello world ");

const root=reactdom.createroot(document.getElementById("root"));

root.render(ele);
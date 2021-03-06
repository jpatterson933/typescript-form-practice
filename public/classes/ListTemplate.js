export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
// card template that we are going to try and use to display robot lords onto page.
export class CardTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.innerText = heading;
        div.append(h1);
        const p = document.createElement('p');
        p.innerText = item.format();
        div.append(p);
        if (pos === 'start') {
            this.container.prepend(div);
        }
        else {
            this.container.append(div);
        }
    }
}
/*
1. register a list container (ul) in the constructor
2. create a render method to render a new 'li' to the container
    -- accepts arguments; invoice or Payment, a heading, a position
    -- create the html template (li, h4, p)
    -- add the 'li' template to the start/end of the list
*/ 

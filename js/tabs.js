class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab
        this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement)

        element.addEventListener('click', () => this.select());
    };

    select() {
        let links = document.querySelectorAll('.tabs-link');

        links.forEach(tabLink => {
            tabLink.classList.remove('tabs-link-selected');
        });

        this.element.classList.add('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.tabs-item');

        items.forEach(element => {
            element.classList.remove('tabs-item-selected');
        });

        this.element.classList.add('tabs-item-selected');
    }
}

let links = document.querySelectorAll('.tabs-link');
links.forEach(tabLink => {
    return new TabLink(tabLink);
});

window.onload = function () {
    let links = document.querySelectorAll('.tabs-link');
    links.forEach(tabLink => {
        tabLink.style.width = `${100 / links.length}%`;
    });

}
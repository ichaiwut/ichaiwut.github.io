import Mustache from "Mustache";

/**
 * Manage all pages
 *
 * @author Ting
 */
export default class Post {

  constructor() {
    this.get = this.get.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.nextElem = document.getElementById("next");

    if (this.nextElem !== "") {
      this.nextElem.addEventListener("click", e => {
        e.preventDefault();
        this.get(e.target.dataset.next);
      });
    }
  }

  /**
   * Get page id and fetch from the API
   *
   * @author {Ting}
   */
  get(provideUrl) {
    let apiParam = (provideUrl !== undefined) ? provideUrl : 'api/feed-1.json';
    const url = `${document.location.origin}/api/${apiParam}`;

    // Fetach the data from the backend
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.renderItem(res);
      })
      .catch(err => console.log(err));
  }

  /**
   * Render the page data to template
   * @param {json} data
   * @author {Ting}
   */
  renderItem(data) {

    let containerEle = document.getElementById("blog-wrapper");
    let templateEle = document.getElementById("blog-template");
    var template = templateEle.innerHTML;

    this.nextElem.setAttribute("data-next", '');
    this.nextElem.classList.add("disabled");

    if (data.next !== undefined) {
      this.nextElem.setAttribute("data-next", data.next);
      this.nextElem.classList.remove('disabled');
    }

    Mustache.parse(template);
    for (var value of data.pages) {
      let rendered = Mustache.render(template, {
        title: value.title,
        content: value.content,
        url: value.url,
        image: value.image
      });

      containerEle.innerHTML += rendered;
    }

    this.pageNumber += 1;
  }
}

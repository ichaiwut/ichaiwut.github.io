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
  }

  /**
   * Get page id and fetch from the API
   * @param {Number} id
   * @author {Ting}
   */
  get(id) {
    const url = `${config.URLAPI}/api/pages/${id}.json`;

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
    let containerEle = document.getElementById("about-us-wrapper");
    let templateEle = document.getElementById("about-us-template");
    var template = templateEle.innerHTML;

    Mustache.parse(template);
    let rendered = Mustache.render(template, {
      name: data.page.name,
      title: data.page.title,
      content: data.page.content,
      created: data.page.created
    });

    containerEle.innerHTML = rendered;
  }
}

import Mustache from "Mustache";

/**
 * Manage all pages
 *
 * @author Ting
 */
export default class Post {

  constructor() {
    this.get = this.get.bind(this);
    this.showPost = this.showPost.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderPost = this.renderPost.bind(this);
    this.data = null;

    this.nextElem = document.getElementById("next");

    if (this.nextElem !== null) {
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
        this.data = res.pages;
        this.renderItem(res);
      })
      .catch(err => console.log(err));
  }

  /**
   * Get the post detail from object and save to the localstorage
   * I want to use only once request to get the data
   *
   * @param {Event} event handler
   * @author Ting
   */
  showPost(event) {
    event.preventDefault();
    localStorage.clear();

    // Get the index from the data-attribute of the button
    let postIndex = event.target.dataset.index;
    let postContent = this.data[postIndex];

    // Save post content to localstorage.
    // Then redirect to the `post.html`
    localStorage.setItem("post", JSON.stringify(postContent));
    window.location.href = "post.html?" + postContent.slug;
  }

  /**
   * Render the page data to template
   * @param {json} data
   * @author {Ting}
   */
  renderItem(data) {
    // Colletct inportant element
    let containerEle = document.getElementById("blog-wrapper");
    let templateEle = document.getElementById("blog-template");
    var template = templateEle.innerHTML;

    // disable load more buttom by default
    this.nextElem.setAttribute("data-next", '');
    this.nextElem.classList.add("disabled");

    if (data.next !== undefined) {
      this.nextElem.setAttribute("data-next", data.next);
      this.nextElem.classList.remove('disabled');
    }

    // Woking with the Mustache template
    Mustache.parse(template);
    for (let [index, value] of data.pages.entries())  {
      let rendered = Mustache.render(template, {
        index: index,
        title: value.title,
        content: value.content,
        url: value.url,
        image: value.image
      });

      containerEle.innerHTML += rendered;
    }

    // When dwe are done with the template
    // have to bind click element
    this.readmoreElem = document.querySelectorAll(".read-more");
    if (this.readmoreElem.length > 0) {
      this.readmoreElem.forEach(el =>
        el.addEventListener("click", this.showPost)
      );
    }

    let lazyLoadOptions = {
      elements_selector: '.lazys'
    };

    let lazy = new window.LazyLoad(lazyLoadOptions);
  }

  renderPost() {
    let postContent = localStorage.getItem('post');
    postContent = JSON.parse(postContent);

    if (postContent === null) {
      window.location.href = '404.html';
      return;
    }

    let imgElem = document.getElementById("post-img");
    if (imgElem !== null) {
      imgElem.style.backgroundImage = `url('${postContent.image}')`;
    }

    // Colletct inportant element
    let containerEle = document.getElementById("post-wrapper");
    const templateEle = document.getElementById("post-template");
    const template = templateEle.innerHTML;

    // Woking with the Mustache template
    Mustache.parse(template);
    const rendered = Mustache.render(template, {
      title: postContent.title,
      detail: postContent.detail,
      content: postContent.content
    });

    containerEle.innerHTML = rendered;
  }
}

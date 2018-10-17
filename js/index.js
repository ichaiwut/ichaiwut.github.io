import Post from './modules/Post';

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    const post = new Post();

    let body = document.querySelector("body");
    if (body.classList.contains("home")) {
      post.get();
    }

    if (body.classList.contains("post")) {
      post.renderPost();
    }
  }
}
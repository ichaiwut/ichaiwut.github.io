import Post from './modules/Post';

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    const post = new Post();
    post.get();
  }
}
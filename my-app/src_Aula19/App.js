import './App.css';
import { Component } from 'react';
// Ou, de outra forma:
// import React from 'react';

class App extends Component {
// Ou, de outra forma:
// class App extends React.Component {

  // COMPONENTES DE CLASSE COM ESTADO (stateful)
  state = {
    posts: []
  };

  // State and Lifecycle Method
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url}
    });

    this.setState({ posts: postsAndPhotos });

  }

  render(){
    const { posts } = this.state;

    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}


export default App;

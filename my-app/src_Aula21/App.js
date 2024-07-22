import './App.css';
import { Posts } from './components/Posts';

import { loadPosts } from './utils/load-posts';

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
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  render(){
    const { posts } = this.state;

    return (
      <section className='container'>
        <Posts posts={ posts } />
      </section>
    );
  }
}


export default App;

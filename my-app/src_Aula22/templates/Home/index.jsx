import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';


import { Component } from 'react';
// Ou, de outra forma:
// import React from 'react';

export class Home extends Component {
// Ou, de outra forma:
// export class Home extends React.Component {

  // COMPONENTES DE CLASSE COM ESTADO (stateful)
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 9
  };

  // State and Lifecycle Method
  async componentDidMount() {
    await this.loadPosts();
  }

  // Vide Link abaixo para o Array.prototype.slice() 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  loadPosts = async () => {
    const {page, postsPerPage} = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage), 
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
  
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    // Spread syntax (...)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }


  render(){
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;


    return (
      <section className='container'>
        <Posts posts={ posts } />

        <div class="button-container">
            <Button 
              text="Load More Posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
        </div>
      </section>
    );
  }
}



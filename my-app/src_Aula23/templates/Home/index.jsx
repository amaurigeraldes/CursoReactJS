import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


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
    postsPerPage: 3,
    searchValue: ""
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


  handleChange = (e) => {
    const {value} = e.target;
    this.setState({ searchValue: value })
  }


  render(){
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;


    // Operador Condicional Ternário
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    const filteredPosts = !!searchValue ? 
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
      : 
      posts;

    
    // Avaliação de curto-circuito (Short-Circuit) do JavaScript
    // Expressões e operadores - Operadores lógicos
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
    // Convertendo o valor para Booleano usando !!


    return (
      <section className='container'>

        <div className="search-container">
          {!!searchValue && (
              <h1>Search Value: {searchValue}</h1>
          )}

          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        </div> 
        
        
        {filteredPosts.length > 0 && (
          <Posts posts={ filteredPosts } />
        )}

        {filteredPosts.length === 0 && (
          <p>Não Existem Posts</p>
        )}


        <div className="button-container">

          {!searchValue && (

            <Button 
              text="Load More Posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />

          )}

            
        </div>
      </section>
    );
  }
}



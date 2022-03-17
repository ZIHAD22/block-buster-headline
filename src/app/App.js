import React, { Component } from 'react'
import { newsCatagories } from '../news'
import Header from '../components/Header/Header'
import './App.css'
import Pagination from '../components/Pagination/Pagination'
import NewsList from '../components/NewsList/NewsList'
import axios from 'axios'

class App extends Component {
  state = {
    news: [],
    category: newsCatagories.technology,
  }
  changeCategory = (newCategory) => {
    this.setState({ category: newCategory })
    console.log(this.state.category)
  }
  async componentDidMount() {
    const url = `${process.env.REACT_APP_NEWS_URL}?apikey=${process.env.REACT_APP_API_KEY}&q=technology`
    console.log(url)
    const data = await axios.get(url)
    this.setState({ news: data.data.articles })
    console.log(this.state.news)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={this.state.category}
              changeCategory={this.changeCategory}
            />
            <div className="d-flex">
              <p className="text-black-50">About {0} Result Found</p>
              <p className="text-black-50 ms-auto">
                {1} page of {100}
              </p>
            </div>
            <NewsList news={this.state.news} />
            <Pagination />
          </div>
        </div>
      </div>
    )
  }
}

export default App

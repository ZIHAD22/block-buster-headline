import React, { Component } from 'react'
import { newsCatagories } from '../news'
import Header from '../components/Header/Header'
import './App.css'
import Pagination from '../components/Pagination/Pagination'
import NewsList from '../components/NewsList/NewsList'

const fakeNews = [
  {
    title: 'Title1',
    content: 'Content',
    url: 'https://linktonew.com',
    urlToImage: 'https://lonktoimage.com',
    publishedAt: 'Published date and time',
    source: {
      name: 'CNN',
    },
  },
  {
    title: 'Title2',
    content: 'Content',
    url: 'https://linktonew.com',
    urlToImage: 'https://lonktoimage.com',
    publishedAt: 'Published date and time',
    source: {
      name: 'CNN',
    },
  },
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-4">
            <Header category={newsCatagories.technology} />
            <div className="d-flex">
              <p className="text-black-50">About {0} Result Found</p>
              <p className="text-black-50 ms-auto">
                {1} page of {100}
              </p>
            </div>
            <NewsList news={fakeNews} />
            <Pagination />
          </div>
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import News, { newsCatagories } from '../news'
import Header from '../components/Header/Header'
import Pagination from '../components/Pagination/Pagination'
import NewsList from '../components/NewsList/NewsList'
import Loading from '../components/Loading/Loading'

const news = new News(newsCatagories.technology)
class App extends Component {
  state = {
    data: {},
    isLoading: true,
  }
  componentDidMount() {
    news
      .getNews()
      .then((data) => {
        this.setState({ data, isLoading: false })
      })
      .catch((e) => {
        console.log(e)
        alert('something went wrong')
        this.setState({ isLoading: false })
      })
  }

  next = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true })
    }
    news
      .next()
      .then((data) => {
        this.setState({ data, isLoading: false })
      })
      .catch((e) => {
        console.log(e)
        alert('something went wrong')
        this.setState({ isLoading: false })
      })
  }
  prev = () => {
    if (this.state.data.isPrevious) {
      this.setState({ isLoading: true })
    }
    news
      .prev()
      .then((data) => {
        this.setState({ data, isLoading: false })
      })
      .catch((e) => {
        console.log(e)
        alert('something went wrong')
        this.setState({ isLoading: false })
      })
  }

  handlePageChange = (value) => {
    this.setState({
      data: {
        ...this.state.data,
        currentPage: value,
      },
    })
  }

  goToPage = () => {
    this.setState({ isLoading: true })
    news
      .setCurrentPage(this.state.data.currentPage)
      .then((data) => this.setState({ data, isLoading: false }))
      .catch((e) => {
        console.log(e)
        alert('something went wrong')
        this.setState({ isLoading: false })
      })
  }
  changeCategory = (category) => {
    this.setState({ isLoading: true })
    news
      .changeCategory(category)
      .then((data) => this.setState({ data, isLoading: false }))
      .catch((e) => {
        console.log(e)
        alert('something went wrong')
        this.setState({ isLoading: false })
      })
  }

  search = (searchTerm) => {
    this.setState({ isLoading: true })
    news
      .search(searchTerm)
      .then((data) => this.setState({ data, isLoading: false }))
      .catch((e) => {
        console.log(e)
        alert('something went wrong')
        this.setState({ isLoading: false })
      })
  }

  render() {
    const {
      article,
      isPrevious,
      isNext,
      category,
      totalResults,
      currentPage,
      totalPage,
    } = this.state.data
    console.log(category)
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={category}
              changeCategory={this.changeCategory}
              search={this.search}
            />
            {this.state.isLoading || (
              <div className="d-flex">
                <p className="text-black-50">
                  About {totalResults} Result Found
                </p>
                <p className="text-black-50 ms-auto">
                  {currentPage} page of {totalPage}
                </p>
              </div>
            )}
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <div>
                <NewsList news={article} />
                <Pagination
                  next={this.next}
                  prev={this.prev}
                  isPrevious={isPrevious}
                  isNext={isNext}
                  totalPage={totalPage}
                  currentPage={currentPage}
                  handlePageChange={this.handlePageChange}
                  goToPage={this.goToPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App

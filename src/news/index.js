import axios from '../utils/axios'

export const newsCatagories = {
  technology: 'technology',
  science: 'science',
  business: 'business',
  entertainment: 'entertainment',
  general: 'general',
  health: 'health',
  sports: 'sports',
}

const MAX_ITEM_PER_PAGE = 10

export default class News {
  constructor(query) {
    this._searchTerm = query
    this._pageSize = MAX_ITEM_PER_PAGE
    this._currentPage = 1
    this.totalPage = 1
  }

  async getNews() {
    try {
      const { data } = await axios.get(this._getUrl())
      this._totalPage = Math.ceil(data.totalResults / this._pageSize)
      console.log(data.totalResults)
      console.log(this._totalPage)
      return {
        article: data.articles,
        isNext: this._isNext(),
        isPrevious: this._isPrevious(),
        totalPage: this._totalPage,
        currentPage: this._currentPage,
        category: this._searchTerm,
        totalResults: data.totalResults,
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  next() {
    if (this._isNext()) {
      this._currentPage++
      return this.getNews()
    }

    return false
  }

  prev() {
    if (this._isPrevious()) {
      this._currentPage--
      return this.getNews()
    }
  }

  setCurrentPage(pageNumber) {
    if (pageNumber < 1 && pageNumber > this._totalPage) {
      throw new Error('Invalid Page Number')
    }

    this._currentPage = pageNumber
    return this.getNews()
  }

  changeCategory(category) {
    this._searchTerm = category
    this._currentPage = 1
    return this.getNews()
  }

  search(term) {
    this._searchTerm = term
    console.log(term)
    return this.getNews()
  }

  _getUrl() {
    let url = '/?language=en&'
    if (this._searchTerm) url += `q=${this._searchTerm}`
    if (this._pageSize) url += `&pageSize=${this._pageSize}`
    if (this._currentPage) url += `&page=${this._currentPage}`

    return url
  }

  _isNext() {
    return this._currentPage < this._totalPage
  }

  _isPrevious() {
    return this._currentPage > 1
  }
}

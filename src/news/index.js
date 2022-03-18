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
    this._query = query
    this._searchTerm = ''
    this._pageSize = MAX_ITEM_PER_PAGE
    this._currentPAge = 0
    this.totalPage = 0
  }

  async getNews() {
    try {
      const { data } = await axios.get(this._getUrl())
      console.log(data)
    } catch (e) {
      throw new Error(e)
    }
  }

  next() {}

  prev() {}

  setCurrentPage() {}

  changeCategory() {}

  search() {}

  _getUrl() {
    let url = '/?'
    if (this._query) url += `category=${this._query}`
    if (this._searchTerm) url += `&q=${this._searchTerm}`
    if (this._pageSize) url += `&pageSize=${this._pageSize}`
    if (this._currentPAge) url += `&page=${this._currentPAge}`

    return url
  }
}

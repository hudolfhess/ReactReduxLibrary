import React from 'react'
import BookList from '../containers/book_list'
import BookDetail from '../containers/book_detail'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    )
  }
}

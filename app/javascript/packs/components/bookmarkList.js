import React from 'react'
import {ListGroup, ListGroupItem, Badge} from 'reactstrap'

class BookmarkList extends React.Component {
  constructor (props) {
    super(props)

    this.renderBookmarks = this.renderBookmarks.bind(this)
    this.renderBookmarks = this.renderBookmarks.bind(this)
  }

  removeBookmark (id) {
    return () => console.log(id)
  }

  renderBookmarks (bookmarks) {
    return bookmarks.map((bookmark, index) => (
      <ListGroupItem
        className='justify-content-between'
        key={bookmark.id}
        tag='a'
        href={bookmark.url}
      >
        {bookmark.title}
        <Badge onClick={this.removeBookmark(bookmark.id)} pill>x</Badge>
      </ListGroupItem>
    ))
  }

  render () {
    return (
      <div>
        <h3>Bookmarks </h3>
        <ListGroup>
          { this.renderBookmarks(this.props.bookmarks || [{id: 1, title: 'Sample', url: '#'}]) }
        </ListGroup>
      </div>
    )
  }
}

export default BookmarkList

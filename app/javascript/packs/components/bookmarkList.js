import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ListGroup, ListGroupItem, Badge} from 'reactstrap'
import {actions, selectors} from '../sagas/bookmark'

class BookmarkList extends React.Component {
  constructor (props) {
    super(props)

    this.renderBookmarks = this.renderBookmarks.bind(this)
    this.removeBookmark = this.removeBookmark.bind(this)
  }

  componentWillMount () {
    this.props.bookmarksActions.fetch()
  }

  removeBookmark (id) {
    return (event) => {
      event.preventDefault()
      this.props.bookmarksActions.delete(id)
    }
  }

  renderBookmarks (bookmarks) {
    return bookmarks.map((bookmark, index) => (
      <ListGroupItem
        className='justify-content-between'
        key={bookmark.id}
        tag='a'
        target='_blank'
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

const mapStateToProps = (state) => ({
  bookmarks: selectors.getBookmarks(state)
})

const mapDispatchToProps = (dispatch) => ({
  bookmarksActions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList)

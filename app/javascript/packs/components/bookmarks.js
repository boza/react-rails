import React from 'react'
import { connect } from 'react-redux'
import BookmarkCreate from './bookmarkCreate'
import BookmarkList from './bookmarkList'
import { Container, Row, Col } from 'reactstrap'

const Bookmarks = () => (
  <Container>
    <Row>
      <Col><BookmarkCreate /></Col>
      <Col><BookmarkList /></Col>
    </Row>
  </Container>
)

export default connect()(Bookmarks)

require 'test_helper'

class Bookmarks::CreateTest < ActiveSupport::TestCase

  test "creates a bookmark" do
    assert_difference "Bookmark.count", 1 do
      Bookmarks::Create.run(url: 'http://google.com', title: 'Title', shortening: 'http://go.gle')
    end
  end

  test "creates a bookmark for an existing site" do
    assert_no_difference "Site.count" do
      assert_difference "Bookmark.count", 1 do
        Bookmarks::Create.run(url: sites(:one).url, title: 'Title', shortening: 'http://go.gle')
      end
    end
  end

end

require 'test_helper'

class Sites::FindOrCreateTest < ActiveSupport::TestCase

  test "creates a site" do
    assert_difference "Site.count", 1 do
      Sites::FindOrCreate.run('http://google.com')
    end
  end

  test "find an existing site" do
    assert_no_difference "Site.count" do
      @site = Sites::FindOrCreate.run(sites(:one).url)
    end
    assert_equal sites(:one), @site
  end

  test "creates a site with a valid scheme if not provided in url" do
    assert_difference "Site.count", 1 do
      @site = Sites::FindOrCreate.run('goog.com')
    end
    assert_match 'http://goog.com', @site.url
  end

end

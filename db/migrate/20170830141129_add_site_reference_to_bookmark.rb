class AddSiteReferenceToBookmark < ActiveRecord::Migration[5.1]
  def change
    add_reference :bookmarks, :site, index: true
  end
end

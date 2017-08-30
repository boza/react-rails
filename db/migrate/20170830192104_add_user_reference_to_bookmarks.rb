class AddUserReferenceToBookmarks < ActiveRecord::Migration[5.1]
  def change
    add_reference :bookmarks, :user, index: true
  end
end

class BookmarksController < ApplicationController
  before_action :require_login

  def index
    respond_to do |format|
      format.json { render json: current_user.bookmarks }
    end
  end

  def show
    @bookmark = current_user.bookmarks.find(params[:id])
    respond_to do |format|
      format.json { render json: @bookmark }
    end
  end

  def create
    @bookmark = Bookmarks::Create.run(current_user, bookmark_params)
    respond_to do |format|
      format.json { render json: @bookmark }
    end
  end

  def update

  end

  private

  def bookmark_params
    params.require('bookmarks').permit(:title, :url, :shortening)
  end
end

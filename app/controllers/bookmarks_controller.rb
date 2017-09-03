class BookmarksController < ApplicationController
  before_action :require_login

  def index
    respond_to do |format|
      format.json { render json: current_user.bookmarks.order('id DESC') }
    end
  end

  def show
    @bookmark = current_user.bookmarks.find(params[:id])
    respond_to do |format|
      format.json { render json: @bookmark }
    end
  end

  def create
    @bookmark = Bookmarks::Create.run(current_user, params: bookmark_params)
    respond_to do |format|
      format.json { render json: @bookmark }
    end
  end

  def update
    @bookmark = Bookmarks::Update.run(current_user, id: params[:id], params: bookmark_params)
    respond_to do |format|
      format.json { render json: @bookmark }
    end
  end

  def destroy
    current_user.bookmarks.find(params[:id]).destroy!
    head :ok
  end

  private

  def bookmark_params
    params.require('bookmarks').permit(:title, :url, :shortening)
  end
end

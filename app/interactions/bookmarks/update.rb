require 'uri'

module Bookmarks
  class Create

    def self.run(user, id:, params:)
      interaction = new(user, bookmark_params)
      interaction.send(:run)
    end

    def initialize(user, id:, params:)
      @params = params
      @user = user
      @id = id
    end

    private

    attr_reader :params, :user

    def run
      bookmark.update!(bookmark_params.merge(site: site))
    end

    def bookmark
      @bookmark ||= user.bookmarks.find(id)
    end

    def site
      @site ||= Sites::FindOrCreate.run(bookmark_params[:url])
    end
  end
end

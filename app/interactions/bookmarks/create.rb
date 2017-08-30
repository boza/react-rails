require 'uri'

module Bookmarks
  class Create

    URL_SCHEMES = ['http://', 'https://'].freeze

    def self.run(user, bookmark_params)
      interaction = new(user, bookmark_params)
      interaction.send(:run)
    end

    def initialize(user, bookmark_params)
      @bookmark_params = bookmark_params
      @user = user
    end

    private

    attr_reader :bookmark_params, :user

    def run
      site.bookmarks.create!(bookmark_params.merge(user: user))
    end

    def site
      Sites::FindOrCreate.run(bookmark_params[:url])
    end
  end
end

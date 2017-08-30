require 'uri'

module Bookmarks
  class Create

    URL_SCHEMES = ['http://', 'https://'].freeze

    def self.run(bookmark_params)
      interaction = new(bookmark_params)
      interaction.send(:run)
    end

    def initialize(bookmark_params)
      @bookmark_params = bookmark_params
    end

    private

    attr_reader :bookmark_params

    def run
      site.bookmarks.create!(bookmark_params)
    end

    def site
      Sites::FindOrCreate.run(bookmark_params[:url])
    end
  end
end

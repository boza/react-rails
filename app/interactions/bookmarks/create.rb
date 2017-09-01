require 'uri'

module Bookmarks
  class Create

    def self.run(user, params:)
      interaction = new(user, params)
      interaction.send(:run)
    end

    def initialize(user, params)
      @params = params
      @user = user
    end

    private

    attr_reader :params, :user

    def run
      site.bookmarks.create!(params.merge(user: user))
    end

    def site
      @site ||= Sites::FindOrCreate.run(params[:url])
    end

  end
end

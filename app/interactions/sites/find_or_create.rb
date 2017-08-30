module Sites
  class FindOrCreate
    URL_SCHEMES = ['http://', 'https://'].freeze

    def self.run(url)
      new(url).send(:run)
    end

    def initialize(url)
      @url = url
    end

    private

    attr_reader :url

    def run
      find_or_create_site
    end

    def find_or_create_site
      @site ||= begin
        uri = URI(bookmark_url_with_scheme)
        top_level_url = "#{uri.scheme}://#{uri.host}"
        Site.find_or_create_by(url: top_level_url)
      end
    end

    def bookmark_url_with_scheme
      return "http://" + url unless url.start_with?(*URL_SCHEMES)
      url
    end

  end
end

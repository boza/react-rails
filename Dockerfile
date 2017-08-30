FROM ruby:2.4.1

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq

RUN apt-get install -y build-essential git
RUN apt-get install -y libxml2-dev libxslt-dev postgresql-client pdftk
RUN apt-get install -y yarn

ENV BUNDLE_PATH /app/bundle

RUN mkdir -p /app/code
WORKDIR /app/code

# We don't need to do this work in development.
# The bin/dev_setup script will go through these package installment motions again.
# However, they're here so we can cache the artefacts between Codeship builds.
ADD Gemfile .
ADD Gemfile.lock .
ADD package.json .
ADD yarn.lock .

RUN bundle install
RUN yarn

FROM jekyll/jekyll:4.0

COPY . /data
WORKDIR /data
RUN chmod -R 777 .
CMD bash -c "gem install bundler && chmod -R 777 . && jekyll serve --trace --strict_front_matter"

# rotaract-koramangala

To set up the development environment in your local system follow the given steps:

1. Download and install the latest release of Ruby and Jekyll. Follow the instructions at https://jekyllrb.com/docs/installation/windows/. Ensure you have installed `bundler` as well(also mentioned in the guide).
2. Once jekyll is installed, clone the repo to a local directory that can be easily accessed later.
3. Open a command prompt in said directory and run the command `bundler install`.
4. Once required gems are installed by bundler, launch the project by building using the command `bundler exec jekyll serve`.
5. The previous step should've launched a local instance on port 4000. Navigate to http://127.0.0.1:4000 to see a live build.

Note: In case of errors thrown at the time of building for specific gems from the Gemfile.lock manifest, use `bundler update <gem-name>` to update said gem.
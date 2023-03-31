# rockarch.org

The main web presence of the Rockefeller Archive Center, which serves as a gateway to other web properties. This site is implemented as a [Jekyll](https://jekyllrb.com/) static site.

## Running the site locally

Download the repository to your local machine using git:

      git clone https://github.com/RockefellerArchiveCenter/rockarch.org.git

Move into the main directory of the repository

      cd rockarch.org

Install dependencies

      bundle install

Run the development server

      bundle exec jekyll serve

You'll see some messages appear, and should be able to view the site in a web browser at `http://localhost:4000/`

## Visual regression testing

The repository includes [BackstopJS](https://github.com/garris/BackstopJS) to test visual changes to the site by comparing a set of reference images for different screen sizes. Anytime the CSS styles are changed, use BackstopJS to test locally:

1. Run the site locally.
2. Run Docker
3. Run the BackstopJS tests in a Docker container using `backstop test --docker`.
4. Review the results in the browser and look at the diff of any failed tests.
5. If the tests looks good, approve them to update the reference image files with the results of the last test using `backstop approve`.
6. Commit any updated reference images to the repository so that future tests will be compared against the most recent images.

To add or update reference images, edit the scenarios in `backstop.json` and run `backstop reference --docker`.

## Contributing

Content can be edited by certain RAC users with an GitHub account. If you would like to make changes to this site, please speak to your Assistant Director or the Director of Archives.


## License

Site content released under a [CC-BY](CCBY-LICENSE.md) license, code under an [MIT](MIT-LICENSE.md) license.

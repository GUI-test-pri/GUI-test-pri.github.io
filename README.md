# Jinkun Gui · Academic Homepage

Personal academic website adapted from [luost26/academic-homepage](https://github.com/luost26/academic-homepage), preserving its Jekyll structure, two-column profile layout, Bootstrap foundation, publication collections, and MIT attribution.

**Website:** https://gui-test-pri.github.io/

## Update content

- `_data/profile.yml`: biography, contact details, education, work, projects, and teaching. JSON syntax is valid YAML.
- `_publications/*.md`: publication metadata; set `selected: true` to feature a paper on the homepage.
- `_data/navigation.yml`: navigation links.
- `assets/images/monogram.svg`: replace with a portrait and update `portrait_url` in the profile. Add appropriate alternative text in the profile widget if replacing the monogram with a photograph.
- `assets/Jinkun_Gui_CV.pdf`: public CV copy, with the phone number removed.
- `assets/css/custom.css`: personal styling; `global.css` is retained from the original template.

## Preview locally

Install Ruby 3.3 or later and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

## Publish

The GitHub Actions workflow builds Jekyll and deploys to GitHub Pages on every push to `main`. In repository **Settings → Pages**, select **GitHub Actions** as the source. Repository name: `GUI-test-pri.github.io`.

All CSS, icons, and fonts used by the page are served locally. The public website has no analytics, tracking, citation-count service, or runtime API dependency.

## Credits

Original template: Shitong Luo, MIT License. Bootstrap and Font Awesome licenses are included with the vendor assets. Profile and publication content is based on the supplied November 2026 CV; see `SOURCES.md`.

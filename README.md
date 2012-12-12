secretmustache-theme
===================

This is the theme for [secretmustache.com]. It uses [Pelican] a static blog generator written in [Python].

If you find errors or would like to submit amendments I would be more than happy to merge your pull request.

The following [contributors] have participated on this project.

Using this theme
----------------
A few variables you may wish to add to the pelican settings file.

    STATIC_PATHS = ['images',]
    DEFAULT_DATE_FORMAT = '%d %m %Y'

    # Theming
    THEME = 'mustache-theme'
    GOOGLE_ANALYTICS = 'UA-xxxxxx-123'
    SECTIONS = [('Blog', 'index.html'),
                ('Archive', 'archives.html'),
                ('Tags', 'tags.html'),
                ('Projects', 'pages/projects.html'),
                ('About', 'pages/about.html')]

    # Social Widgets
    DISQUS_SITENAME = 'disqus user'
    TWITTER_USERNAME = 'github user'
    LINKEDIN_URL = 'http://es.linkedin.com/in/you/'
    GITHUB_URL = 'http://github.com/you'

Importing a theme into your Pelican blog
----------------------------------------
Example usages for using the [pelican-themes] command.
To list installed/available themes use the [--list flag]:

    pelican-themes --list 

To install a new theme use the [--install flag]:

    pelican-themes --install <path_to_theme>

For development purposes I prefer to use the [--symlink flag] over the [--install flag]:

    pelican-themes --symlink <path_to_theme>

License
-------
This software is licensed under the [MPL 2.0]:

    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at http://mozilla.org/MPL/2.0/.


[secretmustache.com]: http:www.secretmustache.com/
[Pelican]: https://github.com/getpelican/pelican
[Python]: http://www.python.org/
[contributors]: https://github.com/m8ttyb/mustache-theme/contributors
[pelican-themes]: http://pelican.readthedocs.org/en/2.7.2/pelican-themes.html
[--list flag]: http://pelican.readthedocs.org/en/2.7.2/pelican-themes.html#listing-the-installed-themes
[--install flag]: http://pelican.readthedocs.org/en/2.7.2/pelican-themes.html#installing-themes
[--symlink flag]: http://pelican.readthedocs.org/en/2.7.2/pelican-themes.html#creating-symbolic-links
[MPL 2.0]: http://www.mozilla.org/MPL/2.0/

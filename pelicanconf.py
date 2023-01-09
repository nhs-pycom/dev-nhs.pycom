AUTHOR = 'NHS Python Community'
SITENAME = 'NHS Python Community Website'
SITEURL = 'https://nhs-pycom.github.io/dev-nhs.pycom'

PATH = 'content'

TIMEZONE = 'GMT'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'https://getpelican.com/'),
         ('Python.org', 'https://www.python.org/'),
         ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME ='theme/nhsuk-pycom'

# Article paths
ARTICLE_PATHS = ['blog',]
ARTICLE_URL = 'blog/{slug}'
ARTICLE_SAVE_AS = 'blog/{slug}.html'

# Page paths
PAGE_PATHS = ['pages',]
PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}.html'
SLUGIFY_SOURCE = 'basename'

# Menuitems
MENUITEMS = (('Home', 'https://nhs-pycom.github.io/dev-nhs.pycom/'),
    ('Blog', 'https://nhs-pycom.github.io/dev-nhs.pycom/blog'),
    ('Get Involved', 'https://nhs-pycom.github.io/dev-nhs.pycom/get-involved'),
    ('Resources', 'https://nhs-pycom.github.io/dev-nhs.pycom/resources'),
    ('Community', 'https://nhs-pycom.github.io/dev-nhs.pycom/community'),
    ('Code of Conduct', 'https://nhs-pycom.github.io/dev-nhs.pycom/code_of_conduct'),
    ('Contact', 'https://nhs-pycom.github.io/dev-nhs.pycom/contact'),)
# MENUITEMS = (('Home', '/'),
#     ('Blog', '/blog'),
#     ('Get Involved', '/get-involved'),
#     ('Resources', '/resources'),
#     ('Community', '/community'),
#     ('Code of Conduct', '/code_of_conduct'),
#     ('Contact', '/contact'),)

DISPLAY_PAGES_ON_MENU = False

# Specify blog location
INDEX_SAVE_AS = 'blog/index.html'

# Static HTML
STATIC_PATHS = ['static', 'images']

# Output
#OUTPUT_PATH = 'docs/'
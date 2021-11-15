import pathlib
import setuptools
import os

# The directory containing this file
HERE = pathlib.Path(__file__).parent

# The text of the README file
README = pathlib.Path("../../README.md").read_text()

# Get the code version
version = {}
with open(os.path.join(HERE, "streamlit_text_rating/version.py")) as fp:
    exec(fp.read(), version)
__version__ = version["__version__"]

setuptools.setup(
    name="streamlit_text_rating",
    version=__version__,
    author="Ashish Rai, Naga Budigam",
    author_email="ashishraics512@gmail.com, nagaraju.iiit@gmail.com",
    description="streamlit_text_ratings enables you to rate the text data",
    long_description=README,
    long_description_content_type="text/plain",
    url="https://github.com/TVS-Motor-Company/streamlit-text-rating",
    packages=setuptools.find_packages(),
    include_package_data=True,
    license="MIT",
    python_requires=">=3.6",
    install_requires=[
        "streamlit >= 1.0.0",
    ],
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
    ]
)
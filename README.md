# streamlit-text-rating
---

A Streamlit component for rating text


## Installation
---
### Using pip
[![PyPi Version](https://badge.fury.io/py/streamlit-text-rating.svg)](https://pypi.org/project/streamlit-text-rating/)

You can install using the pip package manager by running
```sh
pip install streamlit-text-rating
```

Alternatively, you could install the latest version directly from Github:
```sh
pip install https://github.com/TVS-Motor-Company/streamlit-text-rating/streamlit-text-rating/archive/master.zip
```

### Using conda

You can install using the conda package manager by running
```sh
conda install -c conda-forge streamlit-text-rating
```
### From source

Download the source code by cloning the repository or by pressing 'Download ZIP' on this page.

Install by navigating to the proper directory and running:
```sh
python setup.py install
```


## Usage
---

```python
from streamlit_text_rating.st_text_rater import st_text_rater

for text in ["Is this helpful?", "Do you like it?"]:
    response = st_text_rater(text=text)
    #st.write(f"response --> {response}")

```

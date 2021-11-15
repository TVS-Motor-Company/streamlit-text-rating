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
import streamlit as st
st.title("Awesome App")
for text in ["Is this text helpful?", "Do you like this text?"]:
    response = st_text_rater(text=text)
    # st.write(f"response --> {response}")

```
### Output
![Streamlit Text Rating](https://raw.githubusercontent.com/TVS-Motor-Company/streamlit-text-rating/main/st_text_rater.gif "Streamlit Text Rating")

import streamlit as st
from streamlit_text_rating import rate_text

for text in ["Is this helpful?", "Do you like it?"]:
    response = rate_text(text=text)
    # st.write(f"response --> {response}")

from streamlit_text_rating.st_text_rater import st_text_rater
import streamlit as st
st.title("Awesome App")
for text in ["Is this text helpful?", "Do you like this text?"]:
    response = st_text_rater(text=text)
    # st.write(f"response --> {response}")

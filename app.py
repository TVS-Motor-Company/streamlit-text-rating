from streamlit_text_rating.st_text_rater import st_text_rater

for text in ["Is this helpful?", "Do you like it?"]:
    response = st_text_rater(text=text)
    # st.write(f"response --> {response}")

import os
import streamlit.components.v1 as components
import streamlit as st

_RELEASE = True

if not _RELEASE:
    _component_func = components.declare_component(
        "streamlit_text_rating", url="http://localhost:3001")
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component(
        "streamlit_text_rating", path=build_dir)

def streamlit_text_like(text, color_text='rgb(0,0,0)', color_background='rgb(255, 255, 255)',
                        font_size='16px', font_family='sans-serif', font_weight=350, key=None, default=0):
    r = _component_func(text=text, color_text=color_text, font_size=font_size, font_family=font_family,
                        color_background=color_background, font_weight=font_weight, key=key)
    return r

# r1=streamlit_text_like(text='he is good',key='abc',font_size='40px')
# r2=streamlit_text_like(text='he is bad',key='ab2c')
# st.write(r1)
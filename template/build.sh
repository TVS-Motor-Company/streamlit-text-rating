eval "$(conda shell.bash hook)"
conda activate streamlit_dev
rm requirements.txt
pipreqs .
rm -r build
rm -r streamlit_text_rating.egg-info
rm -r dist
cd streamlit_text_rating/frontend/
npm install
rm -r build
npm run-script build
cd ../../
echo $PWD
python setup.py sdist bdist_wheel
twine check dist/*
twine upload --repository testpypi dist/*
twine upload --repository pypi dist/*
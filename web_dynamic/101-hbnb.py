#!/usr/bin/python3
"""
101-hbnb - Starts a Flask web application
"""
from flask import Flask, render_template
from models import storage

app = Flask(__name__)


@app.route('/101-hbnb', strict_slashes=False)
def hbnb():
    """ Display HBNB web page """
    states = storage.all('State').values()
    amenities = storage.all('Amenity').values()
    return render_template('101-hbnb.html', states=states, amenities=amenities)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

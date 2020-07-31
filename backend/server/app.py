from flask import Flask

app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def welcome():
    return "The bird is the word"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
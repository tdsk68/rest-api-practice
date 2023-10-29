from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return "<p>index page</p>"

@app.route("/greeting", methods=['GET'])
def greeting_get():
    return jsonify({"message": "Let's try greeting"})

@app.route("/greeting", methods=['POST'])
def greeting_post():
    data = request.get_json()
    if 'name' in data:
        name = data['name']
        response = {'message': 'hello ' + name + '!'}
    else:
        response = {'message': 'none'}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
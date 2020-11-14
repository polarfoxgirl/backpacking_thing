from flask import Flask
import time
app = Flask(__name__)

@app.route('/message')
def hello_world():
    return { 'msg': 'Hello, Recurse World!'}

@app.route('/time')
def get_time():
     return {'time': time.time()}
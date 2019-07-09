from flask import render_template, url_for, flash, redirect, request, Blueprint, jsonify
from pprint import pprint
from server import db
import json

chat = Blueprint('chat', __name__)


@chat.route('/send', methods=['POST'])
def send_chat():
    pprint(request.__dict__)
    return request.json

#!/usr/local/bin/python
# -*- coding=UTF-8 -*-
import os, sys
from flask import Flask, render_template, url_for

#port=int(os.environ.get('PORT', 33507))
#heroku config:add PORT=33507

app = Flask(__name__)


#-------- GO TO APP --------------------------------------
# Yep, that's a one page app!

@app.route("/")
def index():
	return render_template("medium.html")

#---------------------------------------------------------


app.secret_key="Ceci_n'est_pas_une_clef_secrète"



if __name__ == "__main__":
	port=int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)

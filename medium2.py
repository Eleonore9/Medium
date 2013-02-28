#!/usr/local/bin/python
# -*- coding=UTF-8 -*-
import os, sys
from flask import Flask, render_template, redirect, request, url_for, session, g

app = Flask(__name__)




#-------- GO TO INDEX -------------------------------------- 
@app.route("/")
def index():
	return render_template("index2.html")



#---------------------------------------------------------


app.secret_key="Ceci_n'est_pas_une_clef_secrète"




if __name__ == "__main__":
	app.run(debug=True)

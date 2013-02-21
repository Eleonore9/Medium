#!/usr/local/bin/python
# -*- coding=UTF-8 -*-
import os, sys
from flask import Flask, render_template, redirect, request, url_for, session, g

app = Flask(__name__)


# app.py template from the Tipsy tutorial

#-------- NO NEED CAUSE NO DATABASE! ------------------------
# #connect to db before any request and disconnect afterwards
# @app.before_request
# def set_up_db():
#     g.db = model.connect_db()

# @app.teardown_request
# def disconnect_db(e):
#     g.db.close()
# #------------------


#-------- GO TO INDEX -------------------------------------- 
@app.route("/")
def index():
    return render_template("index.html")

#-------- NO LOGIN NEEDED ----------------------------------
# @app.route("/login")
# def login():
#     return render_template("login.html")
#---------------------------------------
# #authentification of the user and opening the session:
# @app.route("/authenticate", methods=['POST'])
# def authenticate():
#     email = request.form['email']
#     password = request.form['password']
#     user = model.User.authenticate(g.db, email, password)
#     session['user_id'] = user.id
#     # flash('You were successfully logged in!')
#     return redirect(url_for("list_tasks"))
# #-----------------------------------------

#-------- HELLO MESSAGE AND INTRO -------------------------
@app.route("/intro", methods=["POST"])
def intro():
    name = request.form['name']
    return render_template("intro.html", name=name)

@app.route("/question1")
def to_q1():
    return render_template("q1.html")

@app.route("/question2", methods=["POST"])
def to_q2():
    answer1 = request.form['']
    return render_template("q2.html")

@app.route("/question3", methods=["POST"])
def to_q3():
    return render_template("q3.html")

@app.route("/result", methods=["POST"])
def to_result():
    return render_template("result.html")
#---------------------------------------------------------

#------- NOT NEEDED --------------------------------------
# #logout = close the session
# @app.route("/logout")
# def logout():
#     session.pop('user_id', None)
#     return redirect(url_for("index"))
# #------------------------------------




app.secret_key="Ceci_n'est_pas_une_clef_secrète"





if __name__ == "__main__":
    app.run(debug=True)

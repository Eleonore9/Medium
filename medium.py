#!/usr/local/bin/python
# -*- coding=UTF-8 -*-
import os, sys
from flask import Flask, render_template, redirect, request, url_for, session, g
from dates.format import timesince

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
    environment = jinja2.environment(whatever)
    environment.filters['timesince'] = timesince
    return render_template("intro.html", name=name)

@app.route("/save_task", methods=["POST"])
def save_task():
    title = request.form['title']
    user_id = session.get("user_id", None)
    print user_id
    model.Task.new(g.db, title, user_id)
    return redirect(url_for("list_tasks"))

#view for one particular task
@app.route("/task/<int:id>", methods=["GET"])
def view_task(id):
    task_from_db = model.Task.get_task(g.db, id)
    return render_template("view_task.html", task=task_from_db)

#mark this particular task as completed
@app.route("/task/<int:id>", methods=["POST"])
def complete_task(id):
    task = model.Task.get_task(g.db, id)
    task.complete_task(g.db, id)
    return redirect(url_for("list_tasks"))
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

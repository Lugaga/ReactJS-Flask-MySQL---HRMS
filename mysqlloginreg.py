from flask import Flask, jsonify, request, json
from flask_mysqldb import MySQL
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'hrms'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['JWT_SECRET_KEY'] = 'secret'

mysql = MySQL(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/users/register', methods=['POST'])
def register():
    cur = mysql.connection.cursor()
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    dob = request.get_json()['dob']
    phone_no = request.get_json()['phone_no']
    academic_background = request.get_json()['academic_background']
    position = request.get_json()['position']
    roles_duties = request.get_json()['roles_duties']
    earnings = request.get_json()['earnings']
    deductions = request.get_json()['deductions']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
  
	
    cur.execute("INSERT INTO users (first_name, last_name, dob, phone_no, academic_background, position, roles_duties, earnings, deductions, email, password) VALUES ('" + 
		str(first_name) + "', '" + 
        str(last_name) + "', '" +
		str(dob) + "', '" + 
		str(phone_no) + "', '" + 
		str(academic_background) + "', '" +
        str(position) + "', '" +
        str(roles_duties) + "', '" + 
		str(earnings) + "', '" + 
		str(deductions) + "', '" + 
		str(email) + "', '" + 
		str(password) + "')")
        
    mysql.connection.commit()
	
    result = {
		'first_name' : first_name,
        'last_name' : last_name,
		'dob' : dob,
		'phone_no' : phone_no,
		'academic_background' : academic_background,
        'position' : position,
        'roles_duties' : roles_duties,
		'earnings' : earnings,
		'deductions' : deductions,
		'email' : email,
        'password' : password
	}

    return jsonify({'result' : result})
	

@app.route('/users/login', methods=['POST'])
def login():
    cur = mysql.connection.cursor()
    email = request.get_json()['email']
    password = request.get_json()['password']
    result = ""
	
    cur.execute("SELECT * FROM users where email = '" + str(email) + "'")
    rv = cur.fetchone()
	
    if bcrypt.check_password_hash(rv['password'], password):
        access_token = create_access_token(identity = {'first_name': rv['first_name'],'last_name': rv['last_name'],'phone_no': rv['phone_no'], 'email': rv['email'],'dob': rv['dob'],'position': rv['position'], 'academic_background': rv['academic_background'],'earnings': rv['earnings'],'deductions': rv['deductions'],'roles_duties': rv['roles_duties']
        })
        result = access_token
    else:
        result = jsonify({"error":"Invalid username and password"})
    
    return result
	
if __name__ == '__main__':
    app.run(debug=True)
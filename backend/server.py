# Import flask and datetime module for showing date and time
from flask import Flask
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():

	# Returning an api for showing in reactjs
	return {
		'Name':"Isaac",
		"Age":"24",
		"Date":x,
		"programming":"python"
		}
@app.route('/login')
def login():
    return {"users":["Traine","Manager","Technical_team"]}
	
# Running app
if __name__ == '__main__':
	app.run(debug=True)

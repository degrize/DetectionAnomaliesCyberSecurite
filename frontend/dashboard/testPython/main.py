from firebase import firebase
import datetime
import time
import serial
from Crypto.PublicKey import RSA

# Create the connection to our Firebase database - don't forget to change the URL!
FBConn = firebase.FirebaseApplication('https://adw-dashboard-37062-default-rtdb.firebaseio.com/', None)


while True:

    # Ask the user to input a temperature
    temperature = int(input("What is the temperature? "))

    # Create a dictionary to store the data before sending to the database
    data_to_upload = {
        'Temp' : temperature
    }

    # Post the data to the appropriate folder/branch within your database
    result = FBConn.post('/nombreAnomalie/',data_to_upload)

    # Print the returned unique identifier
    print(result)

# Close the serial connection
ser.close()

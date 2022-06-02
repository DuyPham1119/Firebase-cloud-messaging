# Setup to receive firebase message in a Javascript Client
To run this project, please fill missing configuration inside:

* firebase config json (in both js file)
* vapidKey

# Steps to get firebase config json and vapidKey
## Step 1: Open firebase console in the right tab then select project settings
![text](images/to_settings.png)
## Step 2: In General Tab, scroll down and get firebase config json
![text](images/firebase-config_1.png)
## Step 3: In Cloud Messaging Tab, get the server key and generate key pair (vapidKey)
![text](images/get_key.png)

# Steps to get device token after fill missing configuration
## Step 1: Instal live server
![text](images/live_server.png)
## Step 2: In index.html, press Go live and you could view running project in http://127.0.0.1:5500
![text](images/page_1.png)
## Step 2: In http://127.0.0.1:5500, press Subcribe to get device token and copy to clipboard  
![text](images/page_2.png)

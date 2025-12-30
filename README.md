# First-Attempt-with-Responsive-Site
My first project to try responsive site creation with media queries concept, still new to this so make it using multiple css files.
try to add contact form with my pure code, send data to local json. and maybe try to pull data from it later.


to Use Post method on server you should run 

npm install -g json-server (as static server don't support POST / PUT / DELETE Methods)


in case pulling it on pc use these commands: 
then run the server 
json-server --watch Data-base/db.json --port 3001

use this url in fetch 
fetch('http://localhost:3001/users')


on github run this server 
json-server --watch Data-base/db.json --port 3001 --host 0.0.0.0

make sure :
Ensure 3001 exists
Visibility → Public

use this url in fetch
fetch("https://<your-codespace-name>-3001.app.github.dev/users")

for this codespace this url work fine

fetch("https://stunning-robot-77pr76g9r9w3xrvp-3001.app.github.dev/users")






Login Information
E-mail : admin@site.com
Pass : admin123
Remeber Me check : to save login session in local storage



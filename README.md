# final-project
My final project is a task management build with the Django REST Framework, SQLite3, and ReactJS as frontend.
Users can signup for an account, login, Create, Read, Update, and Delete tasks. The is mobile friendly so the user can
plan while on the go. 

# Outside Resources
+ http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/
+ https://github.com/owais/django-webpack-loader
+ https://www.fusionbox.com/blog/detail/create-react-app-and-django/624/
+ https://docs.djangoproject.com/en/2.2/topics/serialization/
+ https://www.django-rest-framework.org/
+ http://james1345.github.io/django-rest-knox/auth/

# Project structure
```
.
├── README.md
├── liveSimpley
│   ├── db.sqlite3
│   ├── liveSimpley
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   ├── planSimpleyBE
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── api.py
│   │   ├── apps.py
│   │   ├── migrations
│   │   │   ├── 0001_initial.py
│   │   │   ├── 0002_auto_20190418_1907.py
│   │   │   ├── 0003_activity_owner.py
│   │   │   └── __init__.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── planSimpleyFE
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations
│   │   │   └── __init__.py
│   │   ├── models.py
│   │   ├── src
│   │   │   ├── actions
│   │   │   │   ├── actionTypes.js
│   │   │   │   ├── activities.js
│   │   │   │   ├── appMessages.js
│   │   │   │   └── authenticate.js
│   │   │   ├── components
│   │   │   │   ├── App.js
│   │   │   │   ├── activity
│   │   │   │   │   ├── ActivityList.js
│   │   │   │   │   ├── ActivityPlanner.js
│   │   │   │   │   ├── AddActivityForm.js
│   │   │   │   │   └── Summary.js
│   │   │   │   ├── authentication
│   │   │   │   │   ├── Login.js
│   │   │   │   │   └── Signup.js
│   │   │   │   ├── budget
│   │   │   │   ├── includes
│   │   │   │   │   ├── Alerts.js
│   │   │   │   │   └── Header.js
│   │   │   │   └── utils
│   │   │   │       └── PrivateRoute.js
│   │   │   ├── index.js
│   │   │   ├── reducers
│   │   │   │   ├── activityReducer.js
│   │   │   │   ├── authReducer.js
│   │   │   │   ├── errorsReducer.js
│   │   │   │   ├── index.js
│   │   │   │   └── messagesReducer.js
│   │   │   └── store.js
│   │   ├── static
│   │   │   ├── css
│   │   │   │   └── styles.css
│   │   │   ├── frontend
│   │   │   │   ├── 77ea32d6422a245eeace04ab69d8d96a.png
│   │   │   │   └── main.js
│   │   │   ├── images
│   │   │   │   └── avatar.png
│   │   │   └── js
│   │   │       └── app.js
│   │   ├── templates
│   │   │   └── frontend
│   │   │       └── index.html
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── requirements.txt
│   └── userAccounts
│       ├── __init__.py
│       ├── admin.py
│       ├── api.py
│       ├── apps.py
│       ├── migrations
│       │   └── __init__.py
│       ├── models.py
│       ├── serializers.py
│       ├── tests.py
│       ├── urls.py
│       └── views.py
├── node_modules 
├── package-lock.json
├── package.json
└── webpack.config.js
```
# Note to the TA
Other than the packages on requirements.txt, you will need to run ```npm install``` at the root of the project to install necessary
packages for ReactJS.

Zyfera Junior Dev Assignment

As part of the school council, we are seeking to develop a REST API to manage and store student data in a database. This includes names, student numbers, and their corresponding grades by course code. When multiple entries exist for a single course, the API should calculate and store the average grade for that course.

Example Input JSON:

{
   "name": "Ali",
   "surname": "Yilmaz",
   "stdNumber": "B012X00012",
   "grades": [
       {
           "code": "MT101",
           "value": 90
       }, {
           "code": "PH101",
           "value": 75
       }, {
           "code": "CH101",
           "value": 60
       }, {
           "code": "MT101",
           "value": 70
       }, {
           "code": "HS101",
           "value": 65
} ]
}

Acceptance Criteria
- The solution should be a web application with REST API in a preferred programming language.
- The solution should provide only 1 REST endpoint for the “create” operation.
- The solution should use a database of your choice.
- The solution should contain descriptive documentation
- The solution should follow the software engineering best practices, SDLC, and API
guidelines.
- The solution should be provided as a public GitHub repository with a proper Git commit
history.
- Ensure the application is robust against invalid input, as the end-users are not software
developers.

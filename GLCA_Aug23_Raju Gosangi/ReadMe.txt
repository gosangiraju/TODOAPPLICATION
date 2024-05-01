Project Name: Todos Application

-> ToDoApplication folder is back-end folder or it contain back-end code
-> todofrontend folder is front-end folder or it contain front-end code

Add Back-end code To your Eclipse -> To run this project in your machine you can open your eclipseIDE 
 Steps to Run Back-end code:
  1.click on File
  2.after that click on import
  3.a dialog box will be opend in the search bar type "Existing Maven Projects" and select Existing Maven Projects click on next
  4.click on Browser and select the Todos Application folder and click on finish it will be imported to your eclipse
  5.next in the scr/main/resources open application.properties in this either you can give you give a new database name in spring.datasource.url insted of(ToDoApplication)
    ("spring.datasource.url=jdbc:mysql://localhost:3306/ToDoApplication"), make sure to create a database on the name which you gave in MySQL or you insted of changing the
     new name simply you can create the a database with name of ToDoApplicaton
  6.finally under src/main/java open com.gl package run the ToDoApplication.java file make sure to save all the files before executing
  7.your back-end is ready

Add Front-end code to your Visual Studio Code -> Open Visual Studio Code
  Steps to Run Front-end code:
   1.click on file
   2.click on open Folder navigate to where the todofront folder is available select that folder and click on open it will be added to Visual Studio Code
   3.open terminal you can press (ctrl + j), navigate to todofrontend folder, give cd todofrontend click enter
   4.Now give npm install or npm i it will install all required files and packages
   5.finally in the terminal give npm start and click enter, it wll run your front-end part
   6.it will directly take you to home page of TodosApplication in the url add "todos" (localhost:3000/todos) it will take you to List of todos or you can 
     click on Todos Management Application it will also take you to List of Todos page

Note: Make sure to Run back-end code and front-end code, simaltaneously running in the backgroung, you can run one after another and then test the applications 
   
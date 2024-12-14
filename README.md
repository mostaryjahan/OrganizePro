### Live Link: https://organize-pro-theta.vercel.app/

## OrganizePro  

### Objective  
The **OrganizePro** is a responsive web application built using **React.js** and **Tabulator.js**, aimed at managing tasks effectively. This project demonstrates the ability to integrate external libraries, fetch data from APIs, and implement dynamic features like adding, editing, filtering, and deleting tasks in an editable table.  

---

### Features  

1. **Editable Task Table**  
   - Display tasks in a table using Tabulator.js.  
   - Inline editing enabled for Title, Description, and Status columns.  
   - Task ID is read-only.  

2. **Add a New Task**  
   - A form allows users to dynamically add tasks to the table.  

3. **Delete a Task**  
   - Users can delete tasks with a delete button in each row.  

4. **Filter Tasks**  
   - Filter tasks by status using a dropdown with the options: *To Do*, *In Progress*, and *Done*.  

5. **Fetch Initial Data from API**  
   - Fetch the first 20 tasks from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos).  
   - Map `completed: true/false` to *Done* or *To Do* statuses.  

6. **Styling**  
   - Clean, responsive design using **TailwindCSS** for better UI/UX.  

---

### Bonus Features  

1. **Search Bar**  
   - Filter tasks dynamically based on their Title or Description.  

2. **Task Counters**  
   - Show the total number of tasks for each status (To Do, In Progress, Done).  

3. **Toast Notifications**  
   - Display success messages for adding, editing, and deleting tasks.  

---

### Tech Stack  

- **React.js**  
- **Tabulator.js**  
- **TailwindCSS**  
- **JavaScript**  




### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/mostaryjahan/OrganizePro.git
   cd task-list-manager
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Start the development server:  
   ```bash
   npm start
   ```  

4. Visit `http://localhost:5173` to view the application.  



### API Integration  

The initial task data is fetched from:  
- [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)  

Data processing:  
- Only the first 20 tasks are used.  
- The `completed` field is mapped to `Status`:  
  - `completed: true` → Status: *Done*  
  - `completed: false` → Status: *To Do*  

---

### Deployment  

This project is deployed on Vercel. You can view the live application here:  
- **Live Demo**: [https://organize-pro-theta.vercel.app/]  










 






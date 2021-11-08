// STEP 2: Refactor Functions
/** get rid of arrays & use obj to keep track of state:
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];
**/
function newTask(title, description) {
  //taskTitles.push(title);
  //taskDescriptions.push(description);
  //taskComplete.push(false);
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

// Mark a task as complete
function completeTask(task/*Index*/) {
  //taskComplete[taskIndex] = true;
  task.complete = true; // refactor
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task/*Index*/) {
  //const title = taskTitles[taskIndex];
  //const complete = taskComplete[taskIndex];
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`); // refactor
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);

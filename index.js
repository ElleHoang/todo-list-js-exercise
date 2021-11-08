// STEP 3: Use Methods Instead
/** get rid of arrays & use obj to keep track of state:
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];
**/

// task functions are reading or updating state of task = behaviours of task; should be methods on stask
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    markCompleted: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

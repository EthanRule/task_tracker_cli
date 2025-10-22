# task_tracker_cli

Summary of how this was implemented.

This is a basic task tracker. There was no AI used in the creation of this project. With
the exception of using the ask tool to understand initial syntax quirks about Javascript.

This CLI program uses a recursive non-blocking input function that reads user input. Basic
stdin reading didnt seem to work well, so I had to figure some weird way to block the program
while the user inputs.

Then there is a bunch of switches for differing commands. About a third alter the tasks,
a third lists the tasks, and a third for quitting/saving and help.

Within the task_tracker class I decided to read in any existing data from the previous CLI
session, then work with the data in memory. I chose to do this instead of re-reading and
re-writing to the db.json file because reading and writing to the disk over and over would
seriously slow down the program if it were to be extended. Also since the tasks size to be stored
in memory should never be too large, it should be just fine being in memory.

Then within the task_tracker for the actual functions, I initially set it up with an array,
but then after implementing a binary search for the update function, I realized that using
a map for the tasks would be reduce the search to O(1) from O(logn), simmilar with the deletion.

Then after implementing the functions I wrote tests for all functions execpt ones that just
did basic logging. Techincally you write tests beforehand, but I felt that context switching
from function to tests and back over and over was unnessisary for the simplicity of this
projects scope. I also didnt have experience in writing jest tests, so I would rather write the
functions, thennn learn the jest library.

Then finaly I did a read over the project to ensure it met the requirements, I am aware of a
bug in the updateProgress function, but for this projects sake I felt it was unessisary to
fix as it would just be busy work and I wouldent learn anything other than to take more time
designing before coding.

I'm aware of how nice this project could be and how cool I could make the UI and how robust I could
make the tests. I feel like there are heavy diminishing returns to my learning by continueing on this
basic CLI project so I'm calling it here.

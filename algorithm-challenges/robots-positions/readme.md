Given a grid of robots positions, indicate if it is a valid time series for the number of robots specified, if robots can only travel up to 1 index further than their position 1 step before.

Input format: an array of arrays, of which each index can be 0 or 1.
An index corresponds to the physical location which is either occupied by a robot (1) or empty (0).

Ex: 
Grid `[[1,0,0,1],[0,1,1,0]]` is a valid time series for 2 robots because the first robot moved from index 0 to index 1, and robot 2 moved from index 3 to index 2.

Grid: `[[1,0,0,0,1],[1,0,1,0,0]]` is not valid because the second robot started at index 4 but did not have a valid position on the next step

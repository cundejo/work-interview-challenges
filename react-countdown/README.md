Given the HTML structure

```jsx
<Fragment>
  <label>
    <input type="number" />
    Minutes
  </label>
  
  <label>
    <input type="number" />
    Seconds
  </label>

  <button>START</button>
  <button>PAUSE / RESUME</button>
  <button>RESET</button>

  <h1>00:00</h1>
</Fragment>
```

Implement a countdown clock that receives minutes and seconds from user inputs and allows starting, pause/resume, and reset the countdown.

In order to satisfy the task requirements, you need to implement the following:

1. Time Display
   1. Time is displayed in the `h1` tag and its initial value is 00:00.
   2. Time is displayed in mm:ss format.
   3. 1 minute, 5 seconds should be displayed as `01:05`.
   4. 1 minute, 65 seconds should be displayed as `02:05`.
2. Inputs
   1. Changing inputs values does not change the value displayed in `h1`.
   2. Input do not need to have `min` and `max` attributes.
   3. The countdown does not need to handle negative values.
3. Behavior
   1. On **START** button click, set the countdown value in `h1` with the time calculated from the inputs and start counting down. Do not clear the inputs on **START** button click.
   2. Once the clock is running, update the displayed time in `h1` every second.
   3. Once the clock is running and the **START** button clicked, restart the countdown with the same time provided in the inputs.
   4. Once the countdown reaches `00:00`, stop counting and keep displaying `00:00`.
   5. On a **PAUSE / RESUME** button click, pause or resume the countdown appropriately.
   6. Once the **RESET** button is clicked, both inputs should be reset to 0, and the time displayed in `h1` should be reset to `00:00`.
   

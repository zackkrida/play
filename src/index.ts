import { Machine } from "xstate";

const stopLightMachine = Machine({
  id: "stopLight",
  initial: "green",
  states: {
    green: {
      on: {
        STEP: "yellow"
      }
    },
    yellow: {
      on: {
        STEP: "red"
      }
    },
    red: {
      on: {
        STEP: "green"
      }
    }
  }
});

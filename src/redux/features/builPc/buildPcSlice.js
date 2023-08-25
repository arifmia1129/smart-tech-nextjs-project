import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cpu: null,
  motherboard: null,
  ram: null,
  poserSupply: null,
  storage: null,
  monitor: null,
  other: null,
};

export const buildPcSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCpu: (state, { payload }) => {
      state.cpu = null;
      state.cpu = payload;
    },
    addMotherboard: (state, { payload }) => {
      state.motherboard = null;
      state.motherboard = payload;
    },
    addRam: (state, { payload }) => {
      state.ram = null;
      state.ram = payload;
    },
    addPowerSupply: (state, { payload }) => {
      state.powerSupply = null;
      state.powerSupply = payload;
    },
    addStorage: (state, { payload }) => {
      state.storage = null;
      state.storage = payload;
    },
    addMonitor: (state, { payload }) => {
      state.monitor = null;
      state.monitor = payload;
    },
    addOther: (state, { payload }) => {
      state.other = null;
      state.other = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCpu,
  addMotherboard,
  addPowerSupply,
  addRam,
  addStorage,
  addMonitor,
  addOther,
} = buildPcSlice.actions;

export default buildPcSlice.reducer;

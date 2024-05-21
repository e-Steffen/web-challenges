import create from "zustand";

const useLightControlStore = create((set, get) => ({
  checkAllOn: (lights) => lights.every((light) => light.isOn),
  checkAllOff: (lights) => lights.every((light) => !light.isOn),
}));

export default useLightControlStore;

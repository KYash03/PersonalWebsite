interface Click {
  clickedState: boolean;
  setClickedState: (value: boolean) => void;
}

export const handleClick =
  ({ setClickedState, clickedState }: Click) =>
  () => {
    setClickedState(!clickedState);
  };

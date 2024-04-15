import ColoredNumber from "./ColoredNumber";

export default function Counter({ count, setCountPlus, setCountMinus }) {
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={setCountPlus}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={setCountMinus}
        >
          -
        </button>
      </div>
    </div>
  );
}

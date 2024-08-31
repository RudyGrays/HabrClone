import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";

import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/CounterSlice";
import { Button, ButtonVariants } from "shared/ui/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {
  someClasses?: string;
}

const Counter: FC<CounterProps> = ({ someClasses, ...props }) => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className={classNames("", {}, [someClasses])} {...props}>
      {value}
      <Button variants={[ButtonVariants.outline]} onClick={increment}>
        +
      </Button>
      <Button variants={[ButtonVariants.outline]} onClick={decrement}>
        -
      </Button>
    </div>
  );
};

export default Counter;

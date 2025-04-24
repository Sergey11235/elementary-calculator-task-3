import styles from "./App.module.css";
import { useState } from "react";

export const App = () => {
  const [operand1, setOperand1] = useState("0");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [isResult, setIsResult] = useState(false);

  const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const output = operand1 + operator + operand2;

    const handleClickLeftButton = (num) => {
      if (operator === "") {
        if (operand1 === "0") {
          setOperand1(num);
        } else {
          setOperand1(operand1 + num);
        }
      } else {
        if (operand2 === "0") {
          setOperand2(num);
        } else {
          setOperand2(operand2 + num);
        }
      }
      setIsResult(false);
    };

  const handleClickRigthButton = () => {
    if (operand2 !== "") {
      switch (operator) {
        case "+": {
          setOperand1(Number(operand1) + Number(operand2));
          break;
        }
        case "-": {
          setOperand1(Number(operand1) - Number(operand2));
          break;
        }
        default:
      }
      setOperand2("");
    }
    setOperator("");
    setIsResult(true);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div
          className={`${styles.screen} ${isResult ? styles.resultScreen : ""}`}
        >
          {output}
        </div>
        <div className={styles.buttons}>
          <div className={styles.leftGroup}>
            {NUMS.map((num) => (
              <button
                key={num}
                className={styles.button}
                onClick={() => handleClickLeftButton(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className={styles.rigthGroup}>
            <button
              className={styles.button}
              onClick={() => {
                setOperand1("0");
                setOperator("");
                setOperand2("");
                setIsResult(false);
              }}
            >
              C
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setOperator("+");
                setIsResult(false);
              }}
            >
              +
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setOperator("-");
                setIsResult(false);
              }}
            >
              -
            </button>
            <button className={styles.button} onClick={handleClickRigthButton}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

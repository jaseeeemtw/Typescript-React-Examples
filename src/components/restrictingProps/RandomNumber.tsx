type RandomNumberType = {
  value: number;
};

type PossitiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type ZeroNumber = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = ZeroNumber | NegativeNumber | PossitiveNumber;

function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      <h3>
        value is {value}{" "}
        {isPositive ? "positive number" : "non-positive number"}
      </h3>
    </div>
  );
}

export default RandomNumber;

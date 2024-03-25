const GENDERS = ["Female", "Male", "Non-Binary", "Prefer not to say"];
const DEFAULT_GENDER = GENDERS[3];

export type User = {
  salary?: number;
  gender?: string;
};

export default function UserForm(props: { user: User; setUser: CallableFunction }) {
  const { user, setUser } = props;
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <p>
        <label>Your current gross yearly salary:</label>
      </p>
      <p>
        <input
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          placeholder="12345"
          onChange={(event) => {
            const rawInput = event.currentTarget.value;
            const sanitizedInput = rawInput.replaceAll(",", "").replaceAll(".", "").trim();
            const newSalary = parseInt(sanitizedInput);
            if (newSalary && !isNaN(newSalary) && newSalary > 100) {
              setUser({
                ...user,
                salary: newSalary,
              });
            }
          }}
        />
      </p>
      <p>
        <label>Gender</label>
      </p>
      <p>
        <select
          defaultValue={DEFAULT_GENDER}
          onChange={(event) => {
            setUser({ ...user, gender: event.currentTarget.value });
          }}
        >
          {GENDERS.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </p>
    </form>
  );
}

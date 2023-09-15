"use client";

import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange?: (value: CountrySelectValue) => void;
}
const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={
          onChange && ((value) => onChange(value as CountrySelectValue))
        }
      />
    </div>
  );
};

export default CountrySelect;

// Problem "Cannot invoke an object which is possibly 'undefined'" odnosi się do linii kodu, w której próbujesz wywołać funkcję onChange, która może być niezdefiniowana. Błąd pojawił się w lini 27,28 w kodzie przy wywołaniu funkcji onChange

// W celu rozwiązania tego problemu, możesz dodać sprawdzenie, czy onChange jest zdefiniowane przed jego wywołaniem. W tej wersji kodu, przed wywołaniem onChange, najpierw sprawdzane jest, czy jest zdefiniowane (onChange &&). Jeśli onChange istnieje, zostanie przekazane jako funkcja zwrotna do obsługi zdarzenia onChange.

// Dzięki temu sprawdzeniu uniknie się błędu, gdy onChange jest niezdefiniowane.

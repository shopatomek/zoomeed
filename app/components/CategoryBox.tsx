"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    // funkcja handleClick obsługuje kliknięcie w pudełko kategorii, aktualizuje parametry URL i przekierowuje użytkownika na nową stronę z uwzględnieniem wybranej kategorii.
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
    flex
    flex-col
    items-center
    justify-center
    gap-2
    p-3
    border-b-2
    hover:text-neutral-800
    transition
    cursor-pointer
    ${selected ? "border-b-neutral-800" : "border-transparent"}
    ${selected ? "text-neutral-800" : "text-neutral-500"}
    `}
    >
      <Icon size={26} />
      <div
        className="
        font-medium text-sm"
      >
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;

// Ten kod importuje kilka modułów i definiuje komponent funkcyjny CategoryBox.

// Importowane moduły to:

// useRouter i useSearchParams z modułu "next/navigation" z biblioteki Next.js, które są wykorzystywane do zarządzania trasowaniem i parametrami URL w aplikacji.
// useCallback z modułu "react", który jest używany do zapewnienia, że funkcja handleClick będzie referencyjnie stabilna.
// IconType z modułu "react-icons", który jest używany do określenia typu ikony.
// qs z modułu "query-string", który jest używany do parsowania i serializowania zapytań URL.

// Parsowanie zapytań URL odnosi się do procesu analizowania ciągu znaków reprezentującego zapytanie URL i przekształcania go na obiekt JavaScript, który zawiera parametry i ich wartości. Na przykład, dla zapytania URL https://example.com/?name=John&age=30, parsowanie tego zapytania za pomocą query-string spowoduje utworzenie obiektu JavaScript o właściwościach name i age, które mają odpowiednio wartości "John" i 30.

// Serializowanie zapytań URL odnosi się do procesu przekształcania obiektu JavaScript, który zawiera parametry i ich wartości, na ciąg znaków reprezentujący zapytanie URL. Na przykład, dla obiektu JavaScript { name: "John", age: 30 }, serializowanie tego obiektu za pomocą query-string spowoduje utworzenie ciągu znaków name=John&age=30.

// W kodzie, moduł query-string jest importowany jako qs. Jest używany do parsowania parametrów URL za pomocą funkcji parse i serializowania parametrów URL za pomocą funkcji stringifyUrl. Te funkcje pozwalają na manipulowanie parametrami URL w łatwy sposób, a także na budowanie i modyfikowanie adresów URL w aplikacji.

// Komponent CategoryBox przyjmuje trzy właściwości: icon, label i opcjonalną selected, które reprezentują ikonę, etykietę i stan zaznaczenia dla pudełka kategorii.

// Wewnątrz komponentu, używane są hooki useRouter i useSearchParams do pobrania aktualnego routera i parametrów URL. Następnie, jest zdefiniowana funkcja handleClick, która obsługuje kliknięcie w pudełko kategorii. Funkcja ta aktualizuje zapytanie URL, dodając lub usuwając parametr "category" w zależności od stanu zaznaczenia.

// W renderowaniu komponentu, używane są odpowiednie klasy CSS w zależności od stanu zaznaczenia, a także renderowane są ikona i etykieta kategorii.

// Ostatecznie, komponent CategoryBox jest eksportowany jako domyślny eksport.

// W przypadku komponentów funkcyjnych w React, za każdym razem gdy komponent jest renderowany, funkcje zdefiniowane wewnątrz komponentu są tworzone na nowo. Oznacza to, że przy każdym renderowaniu komponentu, nowa instancja funkcji jest tworzona.

// Jednakże, istnieją sytuacje, w których chcielibyśmy, aby funkcja była referencyjnie stabilna, czyli aby ta sama instancja funkcji była używana przez cały czas życia komponentu, nawet jeśli komponent jest ponownie renderowany. Mogą to być przypadki, gdy funkcja jest przekazywana jako callback do innych komponentów lub hooków, które wymagają stabilności referencji.

// Właśnie w takich przypadkach używamy hooka useCallback z modułu "react". Hook useCallback przyjmuje funkcję i zwraca stabilną referencję do tej funkcji. Dzięki temu, jeśli komponent jest ponownie renderowany, ta sama referencja funkcji jest używana, a nie tworzona nowa instancja.

// W przypadku funkcji handleClick w kodzie, używając useCallback, zapewniamy, że ta sama instancja funkcji handleClick jest używana przez cały czas życia komponentu CategoryBox. Dzięki temu, jeśli CategoryBox jest ponownie renderowany, nie jest tworzona nowa instancja handleClick, co może pomóc w zoptymalizowaniu wydajności i uniknięciu niepotrzebnego ponownego renderowania innych komponentów, które korzystają z tej funkcji jako callback.

// W React hooki są funkcjami, które pozwalają na korzystanie z funkcjonalności Reacta w komponentach funkcyjnych. Przed wprowadzeniem hooków, głównym sposobem tworzenia komponentów w React był użycie klasowych komponentów, które dziedziczyły po klasie Component.

// Hooki zostały wprowadzone w wersji 16.8 Reacta i umożliwiają korzystanie z funkcji takich jak stan (state), efekty uboczne (side effects) i kontekst (context) w komponentach funkcyjnych bez konieczności korzystania z klasowych komponentów.

// Hooki są wywoływane wewnątrz komponentu funkcyjnego i pozwalają na użycie różnych funkcjonalności. Na przykład, hook useState pozwala na użycie stanu w komponencie funkcyjnym, hook useEffect pozwala na wykonywanie efektów ubocznych (takich jak wykonywanie żądań sieciowych czy subskrypcji) po renderowaniu komponentu, a hook useContext pozwala na korzystanie z kontekstu w komponencie.

// Hooki mają kilka zalet, takich jak prostota użycia, łatwość testowania i możliwość ponownego użycia logiki w różnych komponentach. Pozwalają również na pisanie bardziej czytelnego i modularnego kodu w porównaniu do klasowych komponentów.

// Ważne jest, aby hooki były używane tylko na najwyższym poziomie komponentu lub w innych hookach. Nie powinno się ich używać wewnątrz pętli, warunków czy funkcji regularnych, ponieważ hooki wymagają stałej kolejności wywołań.

import { User } from "@prisma/client"

export type SafeUser = Omit<User,
"createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}

// Zostało to wygenerowane po to żeby typy w obiekcie user się zgadzały i nie wyskakiwały błędyp
// podczas renderingu apki
// // Ten kod definiuje typ SafeUser, który jest oparty na typie User importowanym z modułu @prisma/client. Typ SafeUser jest tworzony za pomocą operatora Omit, który usuwa pewne właściwości z typu User. W tym przypadku, właściwości "createdAt", "updatedAt" i "emailVerified" są pomijane.

// Następnie, do typu SafeUser dodawane są nowe właściwości "createdAt", "updatedAt" i "emailVerified", które mają typ string dla "createdAt" i "updatedAt", oraz typ string lub null dla "emailVerified". W ten sposób, typ SafeUser reprezentuje użytkownika, ale bez niektórych wrażliwych informacji, takich jak daty utworzenia i aktualizacji, oraz status weryfikacji adresu e-mail.
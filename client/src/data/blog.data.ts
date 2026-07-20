export interface BlogPost {
  id: number;
  date: string;
  titre: string;
  contenu: string;
  image: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    date: "22 Juillet 2026",
    titre: "L'importance des ressorts et pièces de suspension",
    contenu: "Une bonne suspension garantit non seulement votre confort mais surtout votre tenue de route. Découvrez quand et comment vérifier vos amortisseurs et ressorts.",
    image: "https://i.pinimg.com/736x/fa/19/b1/fa19b17c12a73bfa824b4e066245f839.jpg",
  },
  {
    id: 2,
    date: "18 Juillet 2026",
    titre: "Bien choisir ses pneus pour toutes les saisons",
    contenu: "Le pneu est le seul point de contact entre votre voiture et la route. Guide complet pour comprendre les marquages et choisir le profil adapté à votre conduite.",
    image: "https://i.pinimg.com/1200x/2b/d7/14/2bd7148d67f3fa7abc82e0654e5dbb89.jpg",
  },
  {
    id: 3,
    date: "10 Juillet 2026",
    titre: "Porte de voiture bloquée : que faire ?",
    contenu: "Problème de serrure, de poignée ou de mécanisme de lève-vitre ? Voici les étapes pour diagnostiquer et réparer une portière récalcitrante sans l'abîmer.",
    image: "https://i.pinimg.com/1200x/a8/aa/be/a8aabeec75ed0459272dfefb27f26da8.jpg",
  },
  {
    id: 4,
    date: "05 Juillet 2026",
    titre: "Les secrets d'un moteur performant",
    contenu: "Plongée au cœur de la mécanique : comment l'entretien préventif et les petites réparations peuvent redonner une seconde jeunesse à votre bloc moteur.",
    image: "https://i.pinimg.com/1200x/83/6c/5c/836c5c81bc6aef1f8664097505a64900.jpg",
  },
  {
    id: 5,
    date: "28 Juin 2026",
    titre: "Produits de nettoyage : lesquels choisir ?",
    contenu: "Pour que votre carrosserie brille comme au premier jour, il faut les bons produits. Test et avis sur les meilleures cires et shampoings du marché.",
    image: "https://i.pinimg.com/1200x/bb/c4/71/bbc471bbe9c3326d99716161a54be8e5.jpg",
  },
  {
    id: 6,
    date: "20 Juin 2026",
    titre: "Le matériel de diagnostic électronique",
    contenu: "Avec l'électronique embarquée, la valise de diagnostic est devenue indispensable. Comprendre les codes d'erreur et anticiper les pannes.",
    image: "https://i.pinimg.com/1200x/7d/86/0e/7d860e15e2ba90a467acc5f69a81d978.jpg",
  }
];
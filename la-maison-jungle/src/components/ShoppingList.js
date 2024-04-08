import { plantList } from '../datas/plantList'
import CareScale from './CareScale'
import '../styles/ShoppingList.css'

// Définit une fonction composant React nommée ShoppingList
function ShoppingList() {
	// Réduit la liste de plantes pour obtenir les catégories uniques
	const categories = plantList.reduce(
		// Utilise reduce pour créer un tableau d'accumulateur acc, ajoutant chaque catégorie unique à acc
		(acc, plant) =>
			// Vérifie si la catégorie de la plante est déjà dans l'accumulateur, si non, l'ajoute
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		// Initialise l'accumulateur avec un tableau vide
		[]
	)

	// Renvoie un élément JSX représentant la liste de courses
	return (
		<div>
			{/* Affiche une liste non ordonnée des catégories */}
			<ul>
				{/* Mappe à travers les catégories et affiche chaque catégorie comme un élément de liste */}
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			{/* Affiche une liste ordonnée de plantes */}
			<ul className='lmj-plant-list'>
				{/* Mappe à travers la liste de plantes et affiche chaque plante comme un élément de liste */}
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{/* Affiche une icône de feu si la plante est en meilleure vente */}
						{plant.isBestSale && <span>🔥</span>}
						{/* Affiche le nom de la plante */}
						{plant.name}
						{/* Affiche l'échelle de soin pour l'arrosage de la plante */}
						<CareScale careType='water' scaleValue={plant.water} />
						{/* Affiche l'échelle de soin pour la lumière de la plante */}
						<CareScale careType='light' scaleValue={plant.light} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
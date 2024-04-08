import CareScale from './CareScale'
import '../styles/PlantItem.css'

// Définit une fonction composant React nommée PlantItem, prenant plusieurs props: id, cover, name, water, light
function PlantItem({ id, cover, name, water, light }) {
	// Renvoie un élément JSX représentant un élément de liste pour une plante
	return (
		<li key={id} className='lmj-plant-item'>
			{/* Affiche l'image de couverture de la plante */}
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{/* Affiche le nom de la plante */}
			{name}
			<div>
				{/* Affiche l'échelle de soin pour l'arrosage de la plante */}
				<CareScale careType='water' scaleValue={water} />
				{/* Affiche l'échelle de soin pour la lumière de la plante */}
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
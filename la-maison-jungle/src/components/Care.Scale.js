// Définit une fonction composant React nommée CareScale, prenant deux props: scaleValue et careType
function CareScale({ scaleValue, careType }) {
	// Définit un tableau de valeurs d'échelle (1, 2, 3)
	const range = [1, 2, 3]

	// Détermine le type d'échelle en fonction du type de soin (lumière ou eau)
	const scaleType = careType === 'light' ? '☀️' : '💧'

	// Renvoie un élément JSX représentant l'échelle de soin
	return (
		<div>
			{/* Mappe à travers le tableau de valeurs d'échelle */}
			{range.map((rangeElem) =>
				// Vérifie si la valeur d'échelle de la plante est supérieure ou égale à la valeur actuelle de l'itération
				scaleValue >= rangeElem ? (
					// Renvoie un élément span avec le type d'échelle si la condition est vraie, sinon renvoie null
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

// Exporte le composant CareScale pour qu'il puisse être utilisé ailleurs dans l'application
export default CareScale
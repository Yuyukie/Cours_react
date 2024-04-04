import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';

function ShoppingList() {
    // Extraction des catégories uniques de la liste de plantes
    const categories = [];
    plantList.forEach((plant) => {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    });

    return (
        <div>
            {/* Affichage des catégories sous forme de liste */}
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            {/* Affichage de la liste de plantes */}
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;